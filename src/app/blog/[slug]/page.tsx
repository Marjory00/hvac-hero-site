// src/app/blog/[slug]/page.tsx (Server Component)
import React from 'react';
import { getPostBySlug, getPosts, generateMetadataForPost } from '@/lib/data/blogData';
import Heading from '@/components/UI/Typography/Heading';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './BlogPost.module.css';
import Link from 'next/link';

// 1. Static Paths Generation (for build time optimization)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// 2. Dynamic Metadata Generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return generateMetadataForPost(post);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    // Renders the standard Next.js 404 page
    notFound(); 
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <main className={styles.main}>
      <article className="container">
        
        <header className={styles.header}>
          <p className={styles.category}>{post.category}</p>
          <Heading level={1} className={styles.title}>{post.title}</Heading>
          <p className={styles.meta}>
            By **{post.author}** on {formattedDate}
          </p>
        </header>
        
        <div className={styles.imageWrapper}>
            <Image 
                src={post.imageUrl || '/images/blog/default.jpg'}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
        </div>

        <div 
          className={styles.content} 
          // ⚠️ SECURITY WARNING: In a real application, content should be sanitized 
          // (e.g., using a library like DOMPurify) before using dangerouslySetInnerHTML.
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className={styles.cta}>
          <Link href="/blog">
            Back to All Articles
          </Link>
        </div>

      </article>
    </main>
  );
}