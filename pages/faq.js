import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function FAQ() {
  const [openSection, setOpenSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Top 10 Most Important FAQs - No Categories
  const faqData = [
    {
      q: "Is this resume builder really free?",
      a: "Yes. 100% free forever. No premium tiers, no hidden costs, no credit card required. All 20+ templates and features are completely free to use."
    },
    {
      q: "Do I need to create an account?",
      a: "No accounts needed. Just start building your resume immediately. Your data stays in your browser and is cleared when you close the tab."
    },
    {
      q: "Are the templates ATS-friendly?",
      a: "Yes. All our templates are optimized for Applicant Tracking Systems (ATS). They use clean formatting, standard fonts, and simple layouts that parsing software can read easily."
    },
    {
      q: "Can I customize the templates?",
      a: "Currently, you can customize the content by adding your experience, education, skills, and other sections. Visual customization options like colors and fonts are planned for a future update."
    },
    {
      q: "Where is my resume data stored?",
      a: "Your resume data never leaves your device. It is stored temporarily in your browser and is cleared when you close the tab. We do not store any personal information on our servers."
    },
    {
      q: "How many templates are available?",
      a: "We currently offer 20+ professionally designed, ATS-friendly templates. New templates are added regularly based on user feedback."
    },
    {
      q: "Can I download my resume as PDF?",
      a: "Yes. You can download your resume as a high-quality PDF file instantly, ready for job applications."
    },
    {
      q: "What sections can I add to my resume?",
      a: "You can add various sections including: Personal Information, Professional Summary, Work Experience, Education, Skills, Projects, Certifications, Languages, Awards, and more."
    },
    {
      q: "How do I start building my resume?",
      a: "Simply click 'Build Your Resume' on the homepage, choose a template, and start filling in your information. The process takes just 5 to 10 minutes."
    },
    {
      q: "What features are coming soon?",
      a: "Upcoming features include: template customization with colors and fonts, section reordering, resume saving and loading functionality, and additional templates. Follow us for updates."
    }
  ];

  // Filter FAQs based on search
  const filteredFAQs = searchTerm
    ? faqData.filter(
        q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
             q.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqData;

  // FAQPage Schema for rich results
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Frequently Asked Questions - Free Resume Builder",
    "description": "Find answers to common questions about our free resume builder. Learn about templates, privacy, downloading, ATS optimization, and more.",
    "mainEntity": faqData.map((faq, index) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      },
      "position": index + 1
    }))
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
        "name": "FAQ",
        "item": "https://freeresumemaker.xyz/faq"
      }
    ]
  };

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Frequently Asked Questions - Free Resume Builder",
    "description": "Find answers to common questions about our free resume builder. Learn about templates, privacy, downloading, and more.",
    "url": "https://freeresumemaker.xyz/faq"
  };

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions About Free Resume Builder | Get Help"
        description="Find answers to common questions about our free resume builder. Learn about templates, ATS optimization, privacy, PDF downloads, and more. Get the help you need to create your professional resume."
        keywords="resume builder FAQ, resume questions, ATS questions, free resume help, resume builder help, resume template questions, how to use resume builder"
        canonical="https://freeresumemaker.xyz/faq"
        image="https://freeresumemaker.xyz/images/faq/og-faq.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </Head>

      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
          <span style={{ color: '#0070f3' }}>FAQ</span>
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
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '30px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Quick answers to common questions about our free resume builder. Find what you need below.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <input
              type="text"
              placeholder="Search questions... (e.g., template, download, ATS)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 24px',
                fontSize: '1rem',
                border: '2px solid #e9ecef',
                borderRadius: '50px',
                outline: 'none',
                transition: 'border-color 0.2s',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0070f3'}
              onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
            />
          </div>
          
          {/* Search Stats */}
          {searchTerm && (
            <p style={{
              fontSize: '0.85rem',
              color: '#666',
              marginTop: '12px'
            }}>
              Found {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* Simple Note - Text only, no emoji */}
        <div style={{
          background: '#e3f2fd',
          padding: '16px 20px',
          borderRadius: '12px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#0070f3',
          fontWeight: 500
        }}>
          20+ free templates | No account required | ATS-friendly | PDF download
        </div>

        {/* FAQ List */}
        {filteredFAQs.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {filteredFAQs.map((faq, index) => {
              const isOpen = openSection === index;
              
              return (
                <div
                  key={index}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    border: `1px solid ${isOpen ? '#0070f3' : '#e9ecef'}`,
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleSection(index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: isOpen ? '#f8f9fa' : 'white',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#1a1a1a',
                      transition: 'background 0.2s',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      if (!isOpen) e.currentTarget.style.background = '#fafafa';
                    }}
                    onMouseLeave={(e) => {
                      if (!isOpen) e.currentTarget.style.background = 'white';
                    }}
                  >
                    <span style={{ flex: 1, paddingRight: '16px', lineHeight: '1.4' }}>
                      {faq.q}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: '#0070f3',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}>
                      ▼
                    </span>
                  </button>
                  
                  {/* Answer */}
                  {isOpen && (
                    <div style={{
                      padding: '20px 24px',
                      color: '#555',
                      lineHeight: '1.7',
                      borderTop: '1px solid #e9ecef',
                      background: '#fafafa'
                    }}>
                      <p style={{margin: 0, fontSize: '0.95rem'}}>{faq.a}</p>
                      {/* Related links based on question - text only */}
                      {faq.q.includes("template") && (
                        <p style={{marginTop: '16px', fontSize: '0.85rem'}}>
                          <Link href="/templates" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                            Browse all templates →
                          </Link>
                        </p>
                      )}
                      {faq.q.includes("download") && (
                        <p style={{marginTop: '16px', fontSize: '0.85rem'}}>
                          <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                            Start building your resume →
                          </Link>
                        </p>
                      )}
                      {faq.q.includes("start building") && (
                        <p style={{marginTop: '16px', fontSize: '0.85rem'}}>
                          <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                            Create your resume now →
                          </Link>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            background: '#f8f9fa',
            borderRadius: '16px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#e9ecef',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#999'
            }}>
              ?
            </div>
            <p style={{ marginBottom: '20px', fontSize: '1rem', color: '#666' }}>
              No questions matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              style={{
                background: '#0070f3',
                color: 'white',
                padding: '10px 24px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still Have Questions? - Text only */}
        <div style={{
          marginTop: '50px',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: '#e3f2fd',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0070f3'
          }}>
            ?
          </div>
          <h3 style={{
            marginBottom: '12px',
            fontSize: '1.3rem',
            color: '#1a1a1a',
            fontWeight: 600
          }}>
            Still have questions?
          </h3>
          <p style={{
            color: '#666',
            marginBottom: '24px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Cannot find what you are looking for? Our support team is here to help.
          </p>
          <Link 
            href="/contact"
            style={{
              background: '#0070f3',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 600,
              transition: 'all 0.2s ease'
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
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '40px',
          fontSize: '0.85rem',
          flexWrap: 'wrap'
        }}>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
          <Link href="/about" style={{ color: '#666', textDecoration: 'none' }}>About Us</Link>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <Link href="/privacy-policy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</Link>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.8rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '24px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Builder | 20+ Templates | 100% Free | ATS-Friendly</p>
        </div>
      </main>
    </>
  );
}