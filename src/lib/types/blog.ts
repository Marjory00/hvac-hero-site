
// src/lib/types/blog.ts
export type Post = {
  slug: string; 
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  author: string;
  summary: string;
  content: string; // Markdown or simple string content
};