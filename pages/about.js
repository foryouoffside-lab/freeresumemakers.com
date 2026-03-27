import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function About() {
  const currentYear = new Date().getFullYear();

  // Organization schema for about page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Builder",
    "url": "https://freeresumemaker.xyz/about",
    "logo": "https://freeresumemaker.xyz/logo.png",
    "description": "A free, privacy-focused resume builder helping job seekers create professional, ATS-friendly resumes without any cost or sign-up requirements.",
    "foundingDate": "2026",
    "foundingLocation": "Global",
    "purpose": "To provide a completely free resume builder that respects user privacy and produces ATS-friendly resumes that help job seekers land interviews.",
    "email": "freeresumeemaker@gmail.com",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://github.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://freeresumemaker.xyz/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
        "name": "About Us",
        "item": "https://freeresumemaker.xyz/about"
      }
    ]
  };

  // FAQ schema for about page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the resume builder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is 100% free with no hidden costs, no premium tiers, and no credit card required. We believe everyone deserves access to professional resume tools."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account required. Your resume stays in your browser and is not stored on our servers. We prioritize your privacy and data security."
        }
      },
      {
        "@type": "Question",
        "name": "Are the templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all templates are designed to pass Applicant Tracking Systems with clean formatting, standard section headings, and simple layouts that ATS software can easily parse."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After building your resume, simply click the 'Download PDF' button. Your resume will be instantly generated as a professional PDF ready for submission to employers."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We do not store any of your resume data on our servers. All information stays in your browser and is deleted when you close the tab. Your privacy is our priority."
        }
      }
    ]
  };

  // AboutPage schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Free Resume Builder",
    "description": "Learn about our free resume builder project. We are building a privacy-focused tool to help job seekers create professional, ATS-friendly resumes without any cost or sign-up requirements.",
    "url": "https://freeresumemaker.xyz/about",
    "mainEntity": organizationSchema
  };

  return (
    <>
      <SEO 
        title="About Us - Free Resume Builder | Privacy-Focused & ATS-Friendly Resume Tool"
        description="Learn about our free resume builder project. We are building a privacy-focused tool to help job seekers create professional, ATS-friendly resumes without any cost or sign-up requirements. 100% free forever."
        keywords="about resume builder, free resume tool, resume builder project, privacy focused resume builder, ATS friendly resume builder, free resume maker, online resume builder"
        canonical="https://freeresumemaker.xyz/about"
        image="https://freeresumemaker.xyz/images/about/og-about.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="author" content="Free Resume Builder" />
        <meta name="publisher" content="Free Resume Builder" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#333',
        lineHeight: '1.6'
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
          <span style={{ color: '#0070f3' }}>About Us</span>
        </nav>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            About This Project
          </h1>
          <div style={{
            background: '#e3f2fd',
            padding: '10px 24px',
            borderRadius: '50px',
            display: 'inline-block',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: '#0070f3',
            marginBottom: '20px'
          }}>
            Free Resume Builder | Privacy-Focused | ATS-Friendly
          </div>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Building a free, privacy-focused resume builder to help job seekers create professional, ATS-friendly resumes that get noticed.
          </p>
        </div>

        {/* Mission Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          color: 'white',
          padding: '50px',
          borderRadius: '20px',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            fontWeight: 700
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            margin: 0,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            To create a completely free resume builder that respects user privacy and produces ATS-friendly resumes that help job seekers land interviews and advance their careers.
          </p>
        </div>

        {/* Story Section */}
        <div style={{marginBottom: '60px'}}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Why We Are Building This
          </h2>
          <div style={{
            background: '#f8f9fa',
            padding: '40px',
            borderRadius: '20px',
            fontSize: '1rem'
          }}>
            <p style={{marginBottom: '20px', fontSize: '1.05rem'}}>
              During our own job searches, we noticed that most resume builders either:
            </p>
            <ul style={{marginBottom: '25px', paddingLeft: '20px'}}>
              <li style={{marginBottom: '8px'}}>Cost money with expensive subscription fees and hidden charges</li>
              <li style={{marginBottom: '8px'}}>Require creating an account and sharing personal information</li>
              <li style={{marginBottom: '8px'}}>Collect and store sensitive personal data on their servers</li>
              <li style={{marginBottom: '8px'}}>Produce resumes that fail ATS systems and never reach recruiters</li>
            </ul>
            <p style={{marginBottom: '25px', fontSize: '1.05rem'}}>
              So we decided to build a better alternative that is:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '25px'
            }}>
              {[
                '100% Free Forever',
                'Privacy-Focused',
                'ATS-Friendly',
                'No Account Required',
                'Simple to Use',
                'Regular Updates'
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '14px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e9ecef',
                  fontWeight: 500,
                  color: '#1a1a1a'
                }}>
                  {item}
                </div>
              ))}
            </div>
            <p style={{margin: 0, fontSize: '1.05rem'}}>
              This project is currently in active development. New templates and features are being added regularly. 
              We are committed to keeping this tool free forever.
            </p>
          </div>
        </div>

        {/* Current Status */}
        <div style={{
          background: '#fff8e7',
          padding: '30px',
          borderRadius: '20px',
          marginBottom: '60px',
          textAlign: 'center',
          border: '1px solid #ffd966'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '15px',
            color: '#b85c00',
            fontWeight: 600
          }}>
            Project Status: Active Development
          </h3>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: '#b85c00',
            lineHeight: '1.6'
          }}>
            This website is currently under active development. Features are being added and improved weekly. 
            Your feedback is welcome as we build this tool to help job seekers worldwide.
          </p>
        </div>

        {/* Features - Current */}
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '40px',
          textAlign: 'center',
          fontWeight: 700
        }}>
          Current Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            {
              title: '20+ Resume Templates',
              desc: 'Multiple ATS-friendly templates designed for various professions, industries, and career levels.'
            },
            {
              title: 'Privacy First',
              desc: 'No data storage. Your resume stays in your browser - we never store your information on our servers.'
            },
            {
              title: 'Completely Free',
              desc: 'No premium tiers, no hidden costs, no credit cards. Free forever with no limitations.'
            },
            {
              title: 'Mobile Friendly',
              desc: 'Build resumes on any device - desktop, tablet, or phone with fully responsive design.'
            },
            {
              title: 'Instant PDF Download',
              desc: 'Download your completed resume as a professional PDF with one click, ready for submission.'
            },
            {
              title: 'Easy-to-Use Editor',
              desc: 'Simple interface to add, edit, and customize your resume content with real-time preview.'
            }
          ].map((item, index) => (
            <div key={index} style={{
              padding: '30px',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e9ecef';
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#0070f3'
              }}>
                {index + 1}
              </div>
              <h3 style={{
                marginBottom: '12px',
                color: '#1a1a1a',
                fontSize: '1.2rem',
                fontWeight: 600
              }}>
                {item.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: 0,
                fontSize: '0.9rem'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Development Roadmap */}
        <div style={{marginBottom: '60px'}}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Development Roadmap
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              { 
                stage: 'Phase 1', 
                status: 'Complete', 
                statusColor: '#28a745',
                bgColor: '#d4edda',
                items: [
                  'Basic template structure and layouts',
                  'Resume editor core functionality',
                  'PDF generation engine',
                  '20+ ATS-friendly templates'
                ] 
              },
              { 
                stage: 'Phase 2', 
                status: 'In Progress', 
                statusColor: '#fd7e14',
                bgColor: '#fff3cd',
                items: [
                  'Additional professional templates',
                  'Enhanced section customization options',
                  'Mobile responsiveness improvements',
                  'Performance optimization'
                ] 
              },
              { 
                stage: 'Phase 3', 
                status: 'Planned', 
                statusColor: '#6c757d',
                bgColor: '#e9ecef',
                items: [
                  'Save and load functionality',
                  'Cover letter builder',
                  'Export to Microsoft Word format',
                  'ATS score checker tool'
                ] 
              }
            ].map((phase, index) => (
              <div key={index} style={{
                padding: '25px',
                background: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0070f3';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e9ecef';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px',
                  flexWrap: 'wrap'
                }}>
                  <h3 style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}>
                    {phase.stage}
                  </h3>
                  <span style={{
                    background: phase.bgColor,
                    color: phase.statusColor,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {phase.status}
                  </span>
                </div>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px'
                }}>
                  {phase.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#666',
                      marginBottom: '6px',
                      lineHeight: '1.5'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          background: '#f8f9fa',
          padding: '50px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            fontWeight: 700
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '20px',
            color: '#666',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Have feedback, suggestions, or want to contribute? We would love to hear from you.
          </p>
          <div style={{
            background: 'white',
            padding: '15px 24px',
            borderRadius: '12px',
            display: 'inline-block',
            marginBottom: '24px',
            border: '1px solid #e9ecef',
            fontFamily: 'monospace',
            fontSize: '1rem',
            color: '#0070f3'
          }}>
           freeresumeemaker@gmail.com
          </div>
          <div>
            <Link 
              href="/contact"
              style={{
                background: '#0070f3',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0060d6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0070f3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Form
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>© {currentYear} Free Resume Builder. Helping job seekers create professional resumes that get noticed.</p>
          <div style={{marginTop: '12px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/privacy-policy" style={{color: '#999', textDecoration: 'none', fontSize: '0.8rem'}}>Privacy Policy</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/terms-of-service" style={{color: '#999', textDecoration: 'none', fontSize: '0.8rem'}}>Terms of Service</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/contact" style={{color: '#999', textDecoration: 'none', fontSize: '0.8rem'}}>Contact</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/faq" style={{color: '#999', textDecoration: 'none', fontSize: '0.8rem'}}>FAQ</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/blog" style={{color: '#999', textDecoration: 'none', fontSize: '0.8rem'}}>Blog</Link>
          </div>
        </div>
      </main>
    </>
  );
}