// src/app/blog/[slug]/page.tsx (Dynamic Server Component for individual posts)
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Heading from '@/components/UI/Typography/Heading';
// Import the data fetching and metadata generation functions
import { getPosts, getPostBySlug, generateMetadataForPost } from '@/lib/data/blogData';
import FeatureHighlights from '@/components/Features/FeatureHighlights';
import styles from './PostPage.module.css';

// Define the props interface for the dynamic route
interface PostPageProps {
    params: {
        slug: string;
    };
}

// 1. Next.js Static Generation Function: Generates post pages at build time
export async function generateStaticParams() {
    const posts = await getPosts();
    // Return an array of objects containing the 'slug' parameter for each post
    return posts.map(post => ({
        slug: post.slug,
    }));
}

// 2. Next.js Dynamic Metadata Function: Generates unique SEO data for each post
export async function generateMetadata({ params }: PostPageProps) {
    const post = await getPostBySlug(params.slug);
    
    // If no post is found, return the default not found metadata
    if (!post) {
        return { title: 'Post Not Found', description: 'The requested blog post does not exist.' };
    }

    // Use the helper function from blogData.ts to generate structured metadata
    return generateMetadataForPost(post);
}

// 3. Main Page Component
export default async function PostPage({ params }: PostPageProps) {
    // Fetch the post data based on the slug from the URL
    const post = await getPostBySlug(params.slug);

    // If the post doesn't exist, render Next.js's built-in 404 page
    if (!post) {
        notFound();
    }

    // Format the date for display
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <main className={styles.main}>
            <article className="container">
                {/* Post Header / Hero Area */}
                <header className={styles.header}>
                    <p className={styles.category}>{post.category}</p>
                    <Heading level={1} className={styles.title}>
                        {post.title}
                    </Heading>
                    <p className={styles.meta}>
                        By **{post.author}** on {formattedDate} &bull; {post.readTime} Read
                    </p>
                </header>

                {/* Featured Image */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={post.imageUrl || '/images/blog/default-large.jpg'}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1200px) 100vw, 80vw"
                        style={{ objectFit: 'cover' }}
                        priority // Ensure image loads quickly
                    />
                </div>

                {/* Post Content */}
                <div className={styles.contentLayout}>
                    {/* The full blog post content is rendered here */}
                    <div 
                        className={styles.postContent}
                        // WARNING: In a real app, use a secure Markdown parser (like remark-react or similar library) 
                        // or sanitize the HTML before using dangerouslySetInnerHTML.
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                    {/* Optional Sidebar (e.g., Table of Contents, Author Bio, Related Posts) */}
                    <aside className={styles.sidebar}>
                        <p className={styles.sidebarTitle}>About the Author</p>
                        <p className={styles.authorBio}>{post.author} is a NATE-certified HVAC technician with 15 years of experience in Montgomery County.</p>
                        {/* More sidebar content (Related Posts, Share Buttons, etc.) can go here */}
                    </aside>
                </div>
            </article>
            
            {/* Call to action component at the bottom of the page */}
            <FeatureHighlights />
        </main>
    );
}