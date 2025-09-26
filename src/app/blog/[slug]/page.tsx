// src/app/blog/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
// CRITICAL: Import Metadata for dynamic SEO
import { Metadata } from 'next'; 
import { posts } from '@/lib/data/posts';
import Heading from '@/components/UI/Typography/Heading';
import { Post } from '@/lib/types/blog';

interface PostPageProps {
  params: { slug: string };
}

// --- Dynamic Metadata Function ---
// This function runs on the server to generate unique metadata for each blog post.
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | HVAC Hero',
    };
  }

  return {
    title: `${post.title} | HVAC Hero Blog`,
    description: post.summary, // Assuming your Post type includes a 'summary' field
  };
}
// ---------------------------------

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostDetail({ params }: PostPageProps) {
  const post: Post | undefined = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Refactoring inline styles to use global classes where applicable for design consistency
  return (
    <article className="section-padding container" style={{ maxWidth: '800px' }}>
      <Heading level={1}>{post.title}</Heading>
      <div style={{ margin: 'var(--space-md) 0', fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
        <p>By {post.author} | Published on {post.date}</p>
      </div>

      <div style={{ marginTop: 'var(--space-lg)', lineHeight: 1.8 }}>
        <p>{post.content}</p> 
        {/* In a real scenario, you'd render this using a Markdown component */}
      </div>
    </article>
  );
}