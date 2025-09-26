
// src/lib/types/project.ts
// The type must be exported with a NAMED export, not a default export.
export type Project = {
  slug: string; 
  title: string;
  heroImage: string;
  description: string;
  technologies: string[]; 
  // ... other details
};