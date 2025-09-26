
// src/app/blog/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/data/posts';
import Heading from '@/components/UI/Typography/Heading';
import { Post } from '@/lib/types/blog';

interface PostPageProps {
  params: { slug: string };
}

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

  return (
    <article style={{ padding: 'var(--space-xl)', maxWidth: '800px', margin: 'auto' }}>
      <Heading level={1}>{post.title}</Heading>
      <div style={{ margin: 'var(--space-md) 0', fontSize: '1rem', color: '#666' }}>
        <p>By {post.author} | Published on {post.date}</p>
      </div>

      <div style={{ marginTop: 'var(--space-lg)', lineHeight: 1.8 }}>
        <p>{post.content}</p> 
        {/* In a real scenario, you'd render this using a Markdown component */}
      </div>
    </article>
  );
}