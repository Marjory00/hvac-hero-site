// src/app/projects/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import Heading from '@/components/UI/Typography/Heading';

// 1. CRITICAL IMPORT: Ensure the Project type is available
import { Project } from '@/lib/types/project'; 

// Define the expected parameter structure (as before)
interface ProjectPageProps {
  params: { slug: string };
}

// Generate static params (no change)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  // 2. CRITICAL FIX: Explicitly tell TypeScript the type of the 'project' variable.
  // This guarantees 'project.technologies' is known to be string[]
  const project: Project | undefined = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound(); 
  }

  return (
    <article style={{ padding: 'var(--space-xl)', maxWidth: '900px', margin: 'auto' }}>
      {/* ... other content ... */}
      
      <Heading level={2}>Technologies Used</Heading>
      <ul style={{ listStyle: 'disc', marginLeft: 'var(--space-lg)' }}>
        {/* FIX (Already implemented): Explicitly cast to string, or rely on the type inference */}
        {/* Since 'project' is now properly typed, the explicit casting here is optional but safe: */}
        {project.technologies.map((tech) => ( 
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {/* ... other content ... */}
    </article>
  );
}