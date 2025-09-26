
// src/app/projects/page.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import ProjectCard from '@/components/Sections/ProjectCard';
import { projects } from '@/lib/data/projects';

export default function ProjectsIndexPage() {
  return (
    <div style={{ padding: 'var(--space-xl)', maxWidth: '1200px', margin: 'auto' }}>
      <Heading level={1} style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
        Our Project Portfolio
      </Heading>
      <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        Detailed case studies showcasing our commitment to quality in complex commercial and residential HVAC installations.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-lg)' }}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}