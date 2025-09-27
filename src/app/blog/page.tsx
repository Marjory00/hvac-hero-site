// src/app/blog/page.tsx (Server Component)
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/UI/Typography/Heading';
import { getPosts, BlogPost } from '@/lib/data/blogData';
import styles from './BlogList.module.css';

export const metadata = {
  title: 'HVAC Hero Blog - Tips, Maintenance & Guides',
  description: 'Stay updated with the latest HVAC maintenance tips, energy-saving guides, and installation advice from our certified professionals.',
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        {/* Placeholder image usage */}
        <div className={styles.imageWrapper}>
          <Image 
            src={post.imageUrl || '/images/blog/default.jpg'}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
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

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className={`${styles.main} section-padding bg-secondary`}>
      <div className="container text-center">
        <Heading level={1} className={styles.pageTitle}>
          HVAC Tips & Knowledge Hub
        </Heading>
        <p className={styles.introText}>
          Expert guides and maintenance advice from the HVAC Hero team.
        </p>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className={`${styles.noPosts} text-center`}>No posts found. Check back soon!</p>
        )}
      </div>
    </main>
  );
}