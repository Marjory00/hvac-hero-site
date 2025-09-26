// src/components/Sections/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/types/project';
import Card from '@/components/UI/Card/Card';
import Heading from '@/components/UI/Typography/Heading';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <div style={{ height: '200px', backgroundColor: '#e0e0e0', marginBottom: 'var(--space-md)' }}>
          [Image Placeholder for {project.title}]
        </div>
        <Heading level={3}>{project.title}</Heading>
        <p style={{ fontSize: '0.9rem', color: '#555', marginTop: 'var(--space-sm)' }}>
          {project.description.substring(0, 100)}...
        </p>
        <div style={{ marginTop: 'var(--space-md)' }}>
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} style={{ marginRight: '5px', fontSize: '0.8rem', backgroundColor: '#f0f8ff', padding: '3px 6px', borderRadius: '3px' }}>{tech}</span>
          ))}
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;