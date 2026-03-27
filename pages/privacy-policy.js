import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // WebPage schema for privacy policy
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Free Resume Builder",
    "description": "Our privacy policy explains how we handle your data. We prioritize your privacy with no data storage and no account required.",
    "url": "https://freeresumemaker.xyz/privacy-policy",
    "mainEntity": {
      "@type": "PrivacyPolicy",
      "name": "Privacy Policy",
      "datePublished": "2026-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "description": "We do not store your resume data. All information stays in your browser and is cleared when you close the tab."
    }
  };

  // Organization schema for trust signals
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Builder",
    "url": "https://freeresumemaker.xyz",
    "email": "freeresumeemaker@gmail.com",
    "description": "Free, privacy-focused resume builder with 20+ ATS-friendly templates",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker"
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Privacy Policy",
        "item": "https://freeresumemaker.xyz/privacy-policy"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Privacy Policy - Free Resume Builder | Your Data Stays Private and Secure"
        description="Read our privacy policy to understand how we protect your data. No account required, no resume storage, and complete privacy. We do not store or sell your personal information. 100% privacy-focused resume builder."
        keywords="privacy policy, data privacy, resume builder privacy, free resume builder privacy, GDPR compliant, privacy first resume builder, data protection, no data storage"
        canonical="https://freeresumemaker.xyz/privacy-policy"
        image="https://freeresumemaker.xyz/images/privacy-policy-og.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.7',
        color: '#333'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Privacy Policy</span>
        </nav>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '16px'
          }}>
            <em>Last updated: {currentDate}</em>
          </p>
          <div style={{
            background: '#e3f2fd',
            padding: '12px 24px',
            borderRadius: '40px',
            display: 'inline-block',
            fontSize: '0.9rem',
            color: '#0070f3',
            fontWeight: 500
          }}>
            100% Privacy-Focused | 20+ Templates | No Account Required | Free Forever
          </div>
        </div>

        {/* TL;DR Section - Text only */}
        <div style={{
          background: '#e3f2fd',
          padding: '32px',
          borderRadius: '20px',
          marginBottom: '40px',
          borderLeft: '5px solid #0070f3'
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: '20px',
            fontSize: '1.4rem',
            color: '#0070f3',
            fontWeight: 600
          }}>
            Executive Summary
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div style={{background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef'}}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                No Data Storage
              </div>
              <p style={{fontSize: '0.85rem', margin: 0, color: '#666'}}>
                Your resume stays in your browser
              </p>
            </div>
            <div style={{background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef'}}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                No Account Needed
              </div>
              <p style={{fontSize: '0.85rem', margin: 0, color: '#666'}}>
                Use anonymously
              </p>
            </div>
            <div style={{background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef'}}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                No Data Selling
              </div>
              <p style={{fontSize: '0.85rem', margin: 0, color: '#666'}}>
                We do not sell your information
              </p>
            </div>
            <div style={{background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef'}}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Basic Analytics
              </div>
              <p style={{fontSize: '0.85rem', margin: 0, color: '#666'}}>
                To improve the service
              </p>
            </div>
          </div>
        </div>

        {/* Full Policy */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
          border: '1px solid #e9ecef'
        }}>
          {/* Section 1 */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              1. Information We Collect
            </h2>
            
            <div style={{marginBottom: '25px'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px', color: '#1a1a1a', fontWeight: 600}}>
                A. Resume Data
              </h3>
              <div style={{
                background: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <p style={{margin: 0, lineHeight: '1.7'}}>
                  Information you enter in the resume builder (personal details, work experience, education, skills) 
                  is processed <strong>entirely in your browser</strong>. We do not store, transmit, or have access to this data.
                  When you close your browser tab, this data is permanently deleted.
                </p>
              </div>
            </div>

            <div style={{marginBottom: '25px'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px', color: '#1a1a1a', fontWeight: 600}}>
                B. Usage Data (Analytics)
              </h3>
              <p>We use Google Analytics to collect anonymous information:</p>
              <ul style={{
                background: '#f8fafc',
                padding: '16px 16px 16px 32px',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                marginTop: '8px'
              }}>
                <li style={{marginBottom: '8px'}}>Pages visited and time spent on the site</li>
                <li style={{marginBottom: '8px'}}>Templates viewed and selected</li>
                <li style={{marginBottom: '8px'}}>Browser type, device information, and operating system</li>
                <li>General location (city and country level only, not precise)</li>
              </ul>
            </div>

            <div>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px', color: '#1a1a1a', fontWeight: 600}}>
                C. Contact Form
              </h3>
              <div style={{
                background: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <p style={{margin: 0, lineHeight: '1.7'}}>
                  When you contact us at <strong>freeresumeemaker@gmail.com</strong>, we collect your name, email address, and message 
                  to respond to your inquiry. This information is kept confidential and used only for customer support purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Cookies */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              2. Cookies
            </h2>
            <p style={{marginBottom: '16px'}}>We use the following types of cookies:</p>
            <div style={{overflowX: 'auto', marginBottom: '16px'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{background: '#0070f3', color: 'white'}}>
                    <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: 600}}>Cookie Type</th>
                    <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: 600}}>Purpose</th>
                    <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: 600}}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #e9ecef'}}>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Essential</td>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Save template preferences during your session</td>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Session only</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e9ecef'}}>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Analytics</td>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Google Analytics tracking for anonymous usage data</td>
                    <td style={{padding: '12px 16px', border: '1px solid #e9ecef'}}>Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>
              You can disable cookies in your browser settings, but some features may not work properly.
            </p>
          </div>

          {/* Section 3 - Third-Party */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              3. Third-Party Services
            </h2>
            <ul style={{
              background: '#f8fafc',
              padding: '20px 20px 20px 40px',
              borderRadius: '12px',
              border: '1px solid #e9ecef'
            }}>
              <li style={{marginBottom: '8px'}}>
                <strong>Google Analytics:</strong> Tracks anonymous usage data to help us improve the service. 
                (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3'}}>Google's Privacy Policy</a>)
              </li>
              <li>
                <strong>Hosting Provider:</strong> Server logs may capture IP addresses for security and performance monitoring.
              </li>
            </ul>
          </div>

          {/* Section 4 - Your Rights */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              4. Your Rights
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px'
            }}>
              {[
                'Use anonymously (no account required)',
                'Clear your data by closing your browser',
                'Opt-out of analytics (disable cookies)',
                'Request information about stored data'
              ].map((right, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '14px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  fontSize: '0.9rem'
                }}>
                  {right}
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 - Data Security */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              5. Data Security
            </h2>
            <div style={{
              background: '#e8f5e9',
              padding: '20px',
              borderRadius: '12px',
              borderLeft: '5px solid #2e7d32'
            }}>
              <p style={{margin: 0, color: '#2e7d32', lineHeight: '1.7'}}>
                <strong>Important:</strong> Since we do not store your resume data on our servers, there is no risk of your 
                resume information being compromised in a data breach. For contact form submissions, we use standard security 
                practices to protect your information.
              </p>
            </div>
          </div>

          {/* Section 6 - Changes */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              6. Changes to This Policy
            </h2>
            <p style={{lineHeight: '1.7'}}>
              We may update this privacy policy occasionally to reflect changes in our practices or for legal compliance. 
              The "Last updated" date at the top of this page will indicate when changes were made. 
              Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Section 7 - Contact */}
          <div>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              7. Contact Us
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
              color: 'white',
              padding: '32px',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <p style={{fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6'}}>
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <div style={{marginBottom: '20px'}}>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  freeresumeemaker@gmail.com
                </div>
                <p style={{opacity: 0.9, margin: 0, fontSize: '0.9rem'}}>
                  We typically reply within 24 to 48 hours
                </p>
              </div>
              <Link 
                href="/contact"
                style={{
                  background: 'white',
                  color: '#0070f3',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 600,
                  marginTop: '8px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Contact Form →
              </Link>
            </div>
          </div>
        </div>

        {/* AI Assistance Note - Text only */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <p style={{color: '#666', margin: 0, fontSize: '0.9rem'}}>
            This website and its 20+ resume templates were created with the assistance of AI. 
            We are committed to transparency about how we build and maintain our services.
          </p>
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          textAlign: 'center',
          color: '#666',
          border: '1px solid #e9ecef'
        }}>
          <p style={{margin: 0, fontSize: '0.85rem'}}>
            This privacy policy is effective as of {currentDate}. By using our resume builder, you agree to this policy.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '16px',
            fontSize: '0.85rem',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{color: '#0070f3', textDecoration: 'none'}}>About</Link>
            <Link href="/contact" style={{color: '#0070f3', textDecoration: 'none'}}>Contact</Link>
            <Link href="/faq" style={{color: '#0070f3', textDecoration: 'none'}}>FAQ</Link>
            <Link href="/terms-of-service" style={{color: '#0070f3', textDecoration: 'none'}}>Terms of Service</Link>
          </div>
        </div>
      </main>
    </>
  );
}