// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/UI/Typography/Heading';
import { getPosts, BlogPost } from '@/lib/data/blogData';
import FeatureHighlights from '@/components/Features/FeatureHighlights'; // Already imported
import styles from './BlogList.module.css'; // Assuming this now handles the overall layout and card styles

// --- Component Enhancements ---

// 1. Featured Post Component (Simple, large hero card)
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
                        priority // Load the featured image fast
                    />
                </div>
                <div className={styles.featuredContent}>
                    <span className={styles.featuredTag}>⭐ Featured Article</span>
                    <Heading level={2} className={styles.featuredTitle}>{post.title}</Heading>
                    <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                    <p className={styles.meta}>By {post.author} on {formattedDate} | {post.readTime || '5 min read'}</p>
                </div>
            </div>
        </Link>
    );
};

// 2. Standard Blog Card (as defined in your original code)
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
                        width={400} // Set explicit width/height for standard card images
                        height={250}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.category}>{post.category}</p>
                    <Heading level={3} className={styles.cardTitle}>{post.title}</Heading>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <p className={styles.meta}>By {post.author} on {formattedDate}</p>
                </div>
            </div>
        </Link>
    );
};
// --- End Component Enhancements ---


export const metadata = {
    title: 'HVAC Hero Blog - Tips, Maintenance & Guides',
    description: 'Stay updated with the latest HVAC maintenance tips, energy-saving guides, and installation advice from our certified professionals.',
};

export default async function BlogPage() {
    const allPosts = await getPosts();

    // Logic to separate the featured post (assuming your data has an `isFeatured: boolean` field)
    const featuredPost = allPosts.find(post => post.isFeatured) || allPosts[0];
    const regularPosts = allPosts.filter(post => post.slug !== featuredPost?.slug);


    return (
        <main className={styles.main}>
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
                {/* 1. FEATURED POST - Display prominently */}
                {featuredPost && (
                    <div className={styles.featuredArea}>
                        <FeaturedPostCard post={featuredPost} />
                    </div>
                )}
                
                {/* 2. MAIN POST LISTING & FILTERS */}
                <div className={styles.mainContentGrid}>
                    
                    {/* Placeholder for Client Component Filter Sidebar (optional but good for UX) */}
                    {/* NOTE: If you build a filter sidebar, it must be a Client Component, imported here. */}
                    <aside className={styles.sidebar}>
                        <Heading level={4} className={styles.sidebarTitle}>Categories</Heading>
                        {/* Static categories list for now */}
                        <ul className={styles.categoryList}>
                            {/* Example: Replace with actual list of categories from data */}
                            <li><Link href="/blog?category=maintenance">Maintenance</Link></li>
                            <li><Link href="/blog?category=installation">Installation</Link></li>
                            <li><Link href="/blog?category=efficiency">Energy Efficiency</Link></li>
                        </ul>
                    </aside>

                    <section className={styles.postListSection}>
                        <Heading level={2} className={styles.sectionHeading}>Latest Articles</Heading>
                        <div className={styles.grid}>
                            {regularPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                        
                        {regularPosts.length === 0 && (
                            <p className={styles.noPosts}>No regular posts found. Check back soon!</p>
                        )}
                        
                        {/* Placeholder for Pagination */}
                        <div className={styles.pagination}>
                            {/* <Pagination totalPages={5} currentPage={1} /> */}
                        </div>
                    </section>
                </div>
            </div>
            
            {/* 3. Feature Highlights - FIX: Integrated component */}
            <FeatureHighlights />
            
        </main>
    );
}