
// src/components/Sections/PostCard.tsx
import React from 'react';
import Link from 'next/link';
import { Post } from '@/lib/types/blog';
import Card from '@/components/UI/Card/Card';
import Heading from '@/components/UI/Typography/Heading';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    // Wrap the entire Card in a Next.js Link for client-side navigation
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <Heading level={3}>{post.title}</Heading>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 'var(--space-sm)' }}>
          By {post.author} on {post.date}
        </p>
        <p>{post.summary}</p>
      </Card>
    </Link>
  );
};

export default PostCard;