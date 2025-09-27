// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import GlobalAlert from '@/components/UI/Alert/GlobalAlert'; // For Zustand feedback


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children} {/* This is where the specific page content (like the blog) is rendered */}
        <GlobalAlert />
        <Footer />
      </body>
    </html>
  );
}