import Link from 'next/link';
import React from 'react';
// pages/_app.js
import { ResumeProvider } from '../context/ResumeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import Head from 'next/head';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Organization Schema for structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Maker",
    "url": "https://freeresumemaker.xyz",
    "logo": "https://freeresumemaker.xyz/logo.png",
    "description": "Create professional ATS-friendly resumes instantly with our free resume builder. No sign up required. 20+ templates, real-time editing, and PDF download.",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker",
      "https://www.facebook.com/freeresumemaker"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "foryouoffside@gmail.com",
      "contactType": "customer support",
      "availableLanguage": ["English"]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free Resume Maker",
    "url": "https://freeresumemaker.xyz",
    "description": "Free online resume builder to create professional ATS-friendly resumes. Choose from 20+ templates, customize in real-time, and download as PDF.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://freeresumemaker.xyz/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Get current page URL for canonical
  const canonicalUrl = `https://freeresumemaker.xyz${router.asPath === '/' ? '' : router.asPath}`;

  // Default SEO for pages without custom SEO
  const defaultSEO = {
    title: 'Free Resume Builder - Create Professional Resumes Online Instantly',
    description: 'Create professional ATS-friendly resumes instantly with our free resume builder. No sign up required. 20+ templates, real-time editing, and PDF download.',
    image: 'https://freeresumemaker.xyz/images/default-og-image.jpg',
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
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

      <ResumeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <SpeedInsights />
      </ResumeProvider>

      <style jsx global>{`
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