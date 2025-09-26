
// src/app/blog/page.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import { posts } from '@/lib/data/posts'; // Assuming data is created
import PostCard from '@/components/Sections/PostCard'; // To be created

export default function BlogIndexPage() {
  return (
    <div style={{ padding: 'var(--space-xl)', maxWidth: '1000px', margin: 'auto' }}>
      <Heading level={1}>HVAC Hero News & Tips</Heading>
      <p>Stay updated with the latest in energy efficiency and maintenance guides.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
        {/* Sort by date for proper display */}
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}