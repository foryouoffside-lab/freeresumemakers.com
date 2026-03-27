import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Auto-redirect after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  // Schema markup for 404 page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - 404 Error",
    "description": "The page you're looking for doesn't exist or may have been moved. Return to our resume builder homepage to continue your job search journey.",
    "url": "https://freeresumemaker.xyz/404",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://freeresumemaker.xyz"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "404 - Page Not Found",
          "item": "https://freeresumemaker.xyz/404"
        }
      ]
    }
  };

  // Site Navigation Schema for helpful links
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "404 Page Navigation Options",
    "description": "Alternative navigation options for users who encountered a 404 error",
    "url": "https://freeresumemaker.xyz",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Resume Templates",
        "url": "https://freeresumemaker.xyz/templates"
      },
      {
        "@type": "WebPage",
        "name": "Resume Builder",
        "url": "https://freeresumemaker.xyz/editor"
      },
      {
        "@type": "WebPage",
        "name": "Resume Tips",
        "url": "https://freeresumemaker.xyz/blog"
      },
      {
        "@type": "WebPage",
        "name": "ATS Scanner",
        "url": "https://freeresumemaker.xyz/tools/ats-scanner"
      },
      {
        "@type": "WebPage",
        "name": "FAQ",
        "url": "https://freeresumemaker.xyz/faq"
      },
      {
        "@type": "WebPage",
        "name": "Contact Support",
        "url": "https://freeresumemaker.xyz/contact"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Free Resume Builder</title>
        <meta name="description" content="Page not found. The page you're looking for doesn't exist or may have been moved. Return to our free resume builder to create your professional resume. We'll redirect you to the homepage automatically." />
        <meta name="robots" content="noindex, follow" />
        <meta name="keywords" content="404 error, page not found, resume builder, free resume maker" />
        <link rel="canonical" href="https://freeresumemaker.xyz/404" />
        
        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | Free Resume Builder" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to our resume builder to continue creating your professional resume." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freeresumemaker.xyz/404" />
        <meta property="og:site_name" content="Free Resume Builder" />
        <meta property="og:image" content="https://freeresumemaker.xyz/images/404-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found" />
        <meta name="twitter:description" content="Page not found. Return to our resume builder." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/images/404-og.jpg" />
        <meta name="twitter:site" content="@freeresumemaker" />
        
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'white',
          borderRadius: '32px',
          padding: '48px 32px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0,112,243,0.1)'
        }}>
          {/* 404 Visual Element - Text-based alternative to emoji */}
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 20px',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
            borderRadius: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <div style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#0070f3'
            }}>
              404
            </div>
          </div>

          {/* Error Message */}
          <h1 style={{
            fontSize: '28px',
            margin: '20px 0 12px 0',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Page Not Found
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '32px',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            The page you are looking for does not exist or may have been moved.
            We will redirect you to the homepage in a few seconds.
          </p>

          {/* Countdown Timer */}
          <div style={{
            background: '#f0f7ff',
            borderRadius: '12px',
            padding: '14px 24px',
            marginBottom: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            border: '1px solid #bbdefb'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0070f3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              {countdown}
            </div>
            <span style={{ color: '#0070f3', fontWeight: 500, fontSize: '15px' }}>
              Redirecting to homepage...
            </span>
          </div>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,112,243,0.3)';
                e.currentTarget.style.background = '#0060d6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = '#0070f3';
              }}
            >
              <span>Ã°Å¸ÂÂ </span> Return to Home
            </Link>

            <Link
              href="/editor"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'white',
                color: '#0070f3',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 600,
                border: '2px solid #0070f3',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#f0f7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'white';
              }}
            >
              <span>Ã°Å¸â€œÂ</span> Build Your Resume
            </Link>
          </div>

          {/* Helpful Links Section */}
          <div style={{
            borderTop: '1px solid #e9ecef',
            paddingTop: '28px',
            marginTop: '8px'
          }}>
            <h2 style={{
              fontSize: '14px',
              color: '#6c757d',
              marginBottom: '18px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 600
            }}>
              You Might Be Looking For:
            </h2>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/templates" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                Resume Templates
              </Link>
              <Link 
                href="/blog" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                Resume Tips
              </Link>
              <Link 
                href="/tools/ats-scanner" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                ATS Scanner
              </Link>
              <Link 
                href="/faq" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #f0f0f0'
          }}>
            <p style={{
              fontSize: '13px',
              color: '#999',
              marginBottom: '0'
            }}>
              Need help? <Link href="/contact" style={{ color: '#0070f3', textDecoration: 'none' }}>Contact our support team</Link>
            </p>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}</style>
      </div>
    </>
  );
}
