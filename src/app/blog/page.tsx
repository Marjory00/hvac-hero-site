// src/app/blog/page.tsx (Server Component)
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/UI/Typography/Heading';
import { getPosts, BlogPost } from '@/lib/data/blogData';
import FeatureHighlights from '@/components/Features/FeatureHighlights'; 
import styles from './BlogList.module.css'; 
// NOTE: Assuming BlogList.module.css now contains styles for .featuredCard, .grid, and .sidebar

// --- 1. Featured Post Component ---
const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <Link href={`/blog/${post.slug}`} className={styles.featuredLink}>
            <div className={styles.featuredCard}>
                <div className={styles.featuredImageWrapper}>
                    <Image 
                        src={post.imageUrl || '/images/blog/featured-default.jpg'}
                        alt={post.title}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        priority 
                    />
                </div>
                <div className={styles.featuredContent}>
                    <span className={styles.featuredTag}>⭐ Featured Article</span>
                    <Heading level={2} className={styles.featuredTitle}>{post.title}</Heading>
                    <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                    <p className={styles.meta}>By {post.author} on {formattedDate} | {post.readTime}</p>
                </div>
            </div>
        </Link>
    );
};

// --- 2. Standard Blog Card Component ---
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={post.imageUrl || '/images/blog/default.jpg'}
                        alt={post.title}
                        width={400} 
                        height={250}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.category}>{post.category}</p>
                    <Heading level={3} className={styles.cardTitle}>{post.title}</Heading>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <p className={styles.meta}>By {post.author} on {formattedDate} | {post.readTime}</p>
                </div>
            </div>
        </Link>
    );
};


// --- Metadata and Main Page Function ---
export const metadata = {
    title: 'HVAC Hero Blog - Tips, Maintenance & Guides',
    description: 'Stay updated with the latest HVAC maintenance tips, energy-saving guides, and installation advice from our certified professionals.',
};

export default async function BlogPage() {
    // Get all posts, already sorted by date (newest first)
    const allPosts = await getPosts();

    // Separate the featured post
    const featuredPost = allPosts.find(post => post.isFeatured) || allPosts[0];
    const regularPosts = allPosts.filter(post => post.slug !== featuredPost?.slug);
    
    // Get a unique list of categories for the sidebar
    const categories = Array.from(new Set(allPosts.map(p => p.category)));

    return (
        <main className={styles.main}>
            {/* Page Header Area */}
            <div className={styles.heroSection}>
                <div className="container text-center">
                    <Heading level={1} className={styles.pageTitle}>
                        HVAC Tips & Knowledge Hub
                    </Heading>
                    <p className={styles.introText}>
                        Expert guides and maintenance advice from the HVAC Hero team.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* 1. FEATURED POST - Display prominently outside the main grid */}
                {featuredPost && (
                    <div className={styles.featuredArea}>
                        <FeaturedPostCard post={featuredPost} />
                    </div>
                )}
                
                {/* 2. MAIN POST LISTING & FILTERS - Using a grid layout */}
                <div className={styles.mainContentGrid}>
                    
                    {/* Filter Sidebar (Server Component - basic category list) */}
                    <aside className={styles.sidebar}>
                        <Heading level={4} className={styles.sidebarTitle}>Categories</Heading>
                        <ul className={styles.categoryList}>
                            {categories.map(category => (
                                <li key={category}>
                                    {/* Link to filter by category (requires route handling) */}
                                    <Link href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}>{category}</Link>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Post List Section */}
                    <section className={styles.postListSection}>
                        <Heading level={2} className={styles.sectionHeading}>Latest Articles</Heading>
                        
                        {/* Article Grid */}
                        <div className={styles.grid}>
                            {regularPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                        
                        {regularPosts.length === 0 && (
                            <p className={styles.noPosts}>No recent posts available.</p>
                        )}
                        
                        {/* Placeholder for Pagination component */}
                        <div className={styles.pagination}>
                            {/* Pagination component would go here */}
                        </div>
                    </section>
                </div>
            </div>
            
            {/* 3. Feature Highlights - Global component after main content */}
            <FeatureHighlights />
            
        </main>
    );
}