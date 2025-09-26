// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import GlobalAlert from '@/components/UI/Alert/GlobalAlert'; // For Zustand feedback

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalAlert />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}