// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

// 1. IMPORT GOOGLE FONT: Next.js Font Optimization for better performance
import { Inter } from 'next/font/google';

// 2. CONFIGURE FONT: Use a variable font with subsetting
const inter = Inter({ subsets: ['latin'] });

// 3. EXPORT METADATA: Essential for SEO and clear developer legacy
export const metadata = {
  title: 'HVAC Hero Site | Reliable Heating & Cooling Services',
  description: 'The official portfolio and service site for HVAC Hero, specializing in residential and commercial climate control solutions and showcasing technical project competence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 4. APPLY FONT CLASS: Attach the optimized font to the <html> tag
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main> {/* All page content goes here */}
        <Footer />
      </body>
    </html>
  );
}