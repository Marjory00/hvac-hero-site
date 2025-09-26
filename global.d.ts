
// global.d.ts

// 1. Declaration for regular CSS imports (like './globals.css')
declare module '*.css' {
  // Since Next.js with the App Router handles global CSS, 
  // we declare it as a simple string import.
  const content: string;
  export default content;
}

// 2. Declaration for CSS Modules (e.g., './Button.module.css')
// This is necessary to correctly type the imported styles object.
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// jest-setup.d.ts (or added to global.d.ts)

// Declares that the entire module is a valid import, resolving the TS2882 error.
declare module '@testing-library/jest-dom/extend-expect';