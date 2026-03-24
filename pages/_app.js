// pages/_app.js
import { ResumeProvider } from '../context/ResumeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  // Organization Schema for structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Maker",
    "url": "https://freeresumemakers.com",
    "logo": "https://freeresumemakers.com/logo.png",
    "description": "Create professional ATS-friendly resumes instantly with our free resume builder. No sign up required. 20+ templates, real-time editing, and PDF download.",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker",
      "https://www.facebook.com/freeresumemaker"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "freeresumeemaker@gmail.com",
      "contactType": "customer support",
      "availableLanguage": ["English"]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://freeresumemakers.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free Resume Maker",
    "url": "https://freeresumemakers.com",
    "description": "Free online resume builder to create professional ATS-friendly resumes. Choose from 20+ templates, customize in real-time, and download as PDF.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://freeresumemakers.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Local Business Schema for services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Free Resume Maker",
    "description": "Professional resume builder service offering free resume templates, cover letter builder, and career resources.",
    "url": "https://freeresumemakers.com",
    "priceRange": "Free",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Resume Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Resume Builder",
            "description": "Create professional resumes with our free online builder"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Resume Templates",
            "description": "20+ ATS-friendly professional resume templates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PDF Download",
            "description": "Download your resume as a professional PDF"
          }
        }
      ]
    }
  };

  // Breadcrumb Schema for site structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemakers.com"
      }
    ]
  };

  // Get current page URL for canonical
  const canonicalUrl = `https://freeresumemakers.com${router.asPath === '/' ? '' : router.asPath}`;
  
  // Get current path for conditional meta
  const isHomePage = router.pathname === '/';
  const isEditorPage = router.pathname === '/editor';
  const isTemplatesPage = router.pathname === '/templates';
  const isExamplesPage = router.pathname === '/examples';

  // Default SEO for pages without custom SEO
  const defaultSEO = {
    title: isHomePage 
      ? 'Free Resume Builder - Create Professional Resumes Online Instantly' 
      : 'Free Resume Builder - Professional Resume Templates & Examples',
    description: 'Create professional ATS-friendly resumes instantly with our free resume builder. No sign up required. 20+ templates, real-time editing, and PDF download. Trusted by 100,000+ job seekers.',
    image: 'https://freeresumemakers.com/images/default-og-image.jpg',
    type: 'website',
    keywords: 'resume builder, free resume builder, online resume maker, resume templates, ATS friendly resume, professional resume, CV maker, resume creator'
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Primary Meta Tags */}
        <title>{defaultSEO.title}</title>
        <meta name="title" content={defaultSEO.title} />
        <meta name="description" content={defaultSEO.description} />
        <meta name="keywords" content={defaultSEO.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language and Region */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Global" />
        
        {/* Author and Publisher */}
        <meta name="author" content="Free Resume Maker" />
        <meta name="publisher" content="Free Resume Maker" />
        
        {/* Robots Meta */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={defaultSEO.type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={defaultSEO.title} />
        <meta property="og:description" content={defaultSEO.description} />
        <meta property="og:image" content={defaultSEO.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Free Resume Maker" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={defaultSEO.title} />
        <meta name="twitter:description" content={defaultSEO.description} />
        <meta name="twitter:image" content={defaultSEO.image} />
        <meta name="twitter:site" content="@freeresumemaker" />
        
        {/* Additional SEO Meta Tags */}
        
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      
      {/* Google Analytics - Replace with your measurement ID */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `
        }}
      />
      
      {/* Microsoft Clarity - Heatmaps and Session Recording */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "");
          `
        }}
      />
      
      <ResumeProvider>
        {/* Loading Indicator for Route Changes */}
        {loading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #0070f3 0%, #00c6fb 100%)',
            zIndex: 9999,
            animation: 'loading 0.5s ease-in-out'
          }} />
        )}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ResumeProvider>
      
      <style jsx global>{`
        @keyframes loading {
          0% { width: 0%; opacity: 0; }
          50% { width: 70%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Focus outline for accessibility */
        :focus {
          outline: 2px solid #0070f3;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}

export default MyApp;







