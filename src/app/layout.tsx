// src/app/layout.tsx

// Import the Header and Footer components
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header'; 
import ScrollToTopButton from '@/components/UI/ScrollToTopButton'; // <-- NEW IMPORT

// COMMENT: Ensure your global CSS is imported if necessary (e.g., './globals.css')
import './globals.css'; 

export const metadata = {
  title: {
    default: 'HVAC Hero | Local Heating & Cooling Experts',
    template: '%s | HVAC Hero',
  },
  description: 'Certified HVAC repair, installation, and maintenance services in Montgomery County, MD. Available 24/7 for emergencies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* COMMENT: 1. Global Header component */}
        <Header /> 

        {/* COMMENT: 2. Main Page Content (This is where pages like /home, /blog, /contact are rendered) */}
        {children}
        
        {/* COMMENT: 3. Global Footer component */}
        <Footer />
        
        {/* COMMENT: 4. Global Scroll-to-Top button (Placed outside the main flow, fixed position via CSS) */}
        <ScrollToTopButton /> 
      </body>
    </html>
  );
}