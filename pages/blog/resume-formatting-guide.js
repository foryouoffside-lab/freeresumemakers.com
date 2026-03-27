// pages/blog/resume-formatting-guide.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function ResumeFormattingGuide() {
  const [authorImageError, setAuthorImageError] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('âœ“ Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  // Schema markup for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Resume Formatting Guide: Best Practices for 2026 | ATS-Friendly Tips & Examples",
    "description": "Complete guide to resume formatting. Learn about font sizes, margins, file types, section order, and ATS-friendly formatting with examples. Updated for 2026 job market.",
    "image": "https://freeresumemaker.xyz/images/blog/resume-formatting-guide.jpg",
    "author": {
      "@type": "Person",
      "name": "Lisa Thompson",
      "jobTitle": "Resume Formatting Expert",
      "url": "https://freeresumemaker.xyz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png"
      }
    },
    "datePublished": "2026-02-18",
    "dateModified": "2026-03-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/blog/resume-formatting-guide"
    },
    "keywords": "resume formatting, resume format, ATS-friendly format, resume layout, resume margins, resume fonts",
    "articleSection": "Resume Formatting",
    "wordCount": 3200
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
        "name": "Blog",
        "item": "https://freeresumemaker.xyz/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Resume Formatting Guide",
        "item": "https://freeresumemaker.xyz/blog/resume-formatting-guide"
      }
    ]
  };

  // HowTo schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Format a Professional Resume",
    "description": "Follow these guidelines to properly format your resume for ATS and human readers in 2026.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Professional Fonts",
        "text": "Select standard fonts like Arial, Calibri, or Times New Roman. Use 10-12pt for body text, 14-16pt for headings."
      },
      {
        "@type": "HowToStep",
        "name": "Set Proper Margins",
        "text": "Use margins between 0.5-1 inch on all sides. Recommended: 0.7-0.8 inches."
      },
      {
        "@type": "HowToStep",
        "name": "Select the Right File Format",
        "text": "Save as PDF for most applications to preserve formatting. Use DOCX only when specifically requested."
      },
      {
        "@type": "HowToStep",
        "name": "Organize Sections Logically",
        "text": "Arrange sections: Contact Info, Professional Summary, Skills, Work Experience, Education, Certifications."
      },
      {
        "@type": "HowToStep",
        "name": "Optimize for ATS",
        "text": "Use standard section headings, avoid tables and columns, and use simple bullet points."
      }
    ]
  };

  const handleDownloadClick = () => {
    setDownloadAlert(true);
    setTimeout(() => setDownloadAlert(false), 2000);
  };

  // Formatting guidelines data
  const fontOptions = [
    { name: "Arial", type: "Sans-serif", bestFor: "Modern, clean, highly readable" },
    { name: "Calibri", type: "Sans-serif", bestFor: "Modern, professional, Microsoft default" },
    { name: "Times New Roman", type: "Serif", bestFor: "Traditional, formal, widely accepted" },
    { name: "Verdana", type: "Sans-serif", bestFor: "Highly readable, good for screen viewing" }
  ];

  const marginOptions = [
    { margin: "0.5 inches", pros: "Maximum content space", cons: "Can look cramped" },
    { margin: "0.7 inches", pros: "Good balance", cons: "None, recommended" },
    { margin: "1 inch", pros: "Traditional, spacious", cons: "Less content per page" }
  ];

  const atsDoDont = [
    { do: "Use standard section headings (Work Experience, Education, Skills)", dont: "Use creative headings like 'Where I've Worked'" },
    { do: "Use simple bullet points (â€¢ or -)", dont: "Use special symbols or icons for bullets" },
    { do: "Save as PDF or simple DOCX", dont: "Save as JPEG, PNG, or password-protected files" },
    { do: "Keep contact info in body", dont: "Put contact info in headers or footers" },
    { do: "Use single-column layout", dont: "Use tables, columns, or text boxes" }
  ];

  return (
    <>
      <SEO 
        title="Resume Formatting Guide: Best Practices for 2026 | ATS-Friendly Tips & Examples"
        description="Complete guide to resume formatting. Learn about font sizes, margins, file types, section order, and ATS-friendly formatting with examples. Updated for 2026 job market."
        keywords="resume formatting, resume format, ATS-friendly format, resume layout, resume margins, resume fonts"
        canonical="https://freeresumemaker.xyz/blog/resume-formatting-guide"
        image="https://freeresumemaker.xyz/images/blog/resume-formatting-guide.jpg"
        type="article"
        publishedTime="2026-02-18"
        modifiedTime="2026-03-24"
        author="Lisa Thompson"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>â€º</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>Resume Formatting Guide</span>
        </div>

        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700,
            maxWidth: '800px'
          }}>
            Resume Formatting Guide: Best Practices for 2026
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: '#666',
            fontSize: '14px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {!authorImageError ? (
                <img 
                  src="/images/authors/lisa-thompson.jpg" 
                  alt="Lisa Thompson" 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  onError={() => setAuthorImageError(true)}
                />
              ) : (
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#0070f3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}>
                  LT
                </div>
              )}
              <span><strong>Lisa Thompson</strong> | Resume Formatting Expert</span>
            </div>
            <span>Updated: March 24, 2026</span>
            <span>10 min read</span>
            <span>Formatting Guide</span>
          </div>

          {/* Featured Snippet Optimization */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '32px',
            color: 'white',
            marginTop: '20px'
          }}>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: 500
            }}>
              For a professional, ATS-friendly resume in 2026, use <strong>standard fonts</strong> (Arial, Calibri, 10-12pt body text), 
              <strong> 0.7-0.8 inch margins</strong>, save as <strong>PDF</strong>, organize sections: 
              <strong> Contact Info â†’ Summary â†’ Skills â†’ Experience â†’ Education</strong>, avoid <strong>tables and columns</strong>.
            </p>
          </div>
        </header>

        {/* Formatting Statistics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ background: '#e8f5e9', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2e7d32' }}>6-7</div>
            <div style={{ fontSize: '14px', color: '#666' }}>seconds recruiters spend scanning</div>
          </div>
          <div style={{ background: '#e3f2fd', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1565c0' }}>75%</div>
            <div style={{ fontSize: '14px', color: '#666' }}>of resumes rejected by poor formatting</div>
          </div>
          <div style={{ background: '#fff3e0', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ed6c02' }}>0.7"</div>
            <div style={{ fontSize: '14px', color: '#666' }}>recommended margin size</div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>
            Quick Navigation:
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {[
              { name: 'Font Guidelines', href: '#fonts' },
              { name: 'Margins & Spacing', href: '#margins' },
              { name: 'File Format', href: '#file-format' },
              { name: 'Section Order', href: '#section-order' },
              { name: 'ATS-Friendly Formatting', href: '#ats' },
              { name: 'Length Guidelines', href: '#length' },
              { name: 'Common Mistakes', href: '#mistakes' }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: 'white',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e9ecef'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <article style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#333'
        }}>
          <p style={{ fontSize: '20px', marginBottom: '30px', fontWeight: 500 }}>
            Proper resume formatting helps your document appear professional and improves how it's processed by 
            Applicant Tracking Systems (ATS). This guide covers the key elements of resume formatting for 2026.
          </p>

          {/* Section 1 - Font Guidelines */}
          <section id="fonts" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '0 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              1. Font Guidelines
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#667eea' }}>âœ“ Recommended Fonts</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  {fontOptions.map((font, idx) => (
                    <li key={idx}><strong>{font.name}</strong> ({font.type}) - {font.bestFor}</li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: '#ffebee',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #ef9a9a'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#c62828' }}>âœ— Fonts to Avoid</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  <li>Comic Sans - Unprofessional</li>
                  <li>Papyrus - Overused, informal</li>
                  <li>Script/Cursive fonts - Hard to read</li>
                  <li>More than 2 fonts - Looks messy</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#f0f7ff',
              borderRadius: '12px',
              padding: '20px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#667eea' }}>ðŸ“ Font Sizes (2026 Standard)</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px'
              }}>
                <div><strong>Name/Header:</strong> 16-20pt</div>
                <div><strong>Section Headings:</strong> 14-16pt</div>
                <div><strong>Job Titles:</strong> 12-14pt</div>
                <div><strong>Body Text:</strong> 10-12pt</div>
              </div>
              <button
                onClick={() => copyToClipboard('Name: 16-20pt, Headings: 14-16pt, Body: 10-12pt')}
                style={{
                  marginTop: '12px',
                  padding: '6px 16px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                ðŸ“‹ Copy Font Guidelines
              </button>
            </div>
          </section>

          {/* Section 2 - Margins & Spacing */}
          <section id="margins" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              2. Margins & Spacing
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#667eea' }}>ðŸ“ Margins</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  {marginOptions.map((opt, idx) => (
                    <li key={idx}><strong>{opt.margin}:</strong> {opt.pros} {opt.cons && `- ${opt.cons}`}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '12px', fontSize: '14px', fontWeight: 'bold', color: '#2e7d32' }}>âœ“ Recommended: 0.7-0.8 inches</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#667eea' }}>ðŸ“ Line Spacing</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  <li><strong>Body text:</strong> 1.0 to 1.15</li>
                  <li><strong>Between sections:</strong> 1.5 to 2.0</li>
                  <li><strong>Between bullets:</strong> 0.8 to 1.0</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - File Format */}
          <section id="file-format" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              3. File Format: Which One to Use?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#e8f5e9',
                borderRadius: '12px',
                padding: '24px',
                border: '2px solid #2e7d32'
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#2e7d32' }}>PDF</h3>
                <p><strong>âœ“ Pros:</strong> Preserves formatting, professional, universal</p>
                <p><strong>âœ— Cons:</strong> Some old ATS may struggle</p>
                <p><strong>ðŸ“Œ Best for:</strong> Most applications</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#667eea' }}>DOCX</h3>
                <p><strong>âœ“ Pros:</strong> ATS-friendly, easily parsed</p>
                <p><strong>âœ— Cons:</strong> Formatting may shift</p>
                <p><strong>ðŸ“Œ Best for:</strong> When specifically requested</p>
              </div>
            </div>

            <div style={{
              background: '#ffebee',
              borderRadius: '12px',
              padding: '20px',
              margin: '20px 0',
              border: '1px solid #ef9a9a'
            }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#c62828' }}>âš ï¸ Avoid These Formats</h3>
              <ul style={{ margin: 0 }}>
                <li>JPEG/PNG (images)</li>
                <li>Pages (Mac-only)</li>
                <li>ZIP files</li>
              </ul>
            </div>

            <div style={{
              background: '#f0f7ff',
              borderRadius: '12px',
              padding: '16px',
              margin: '20px 0'
            }}>
              <p style={{ margin: 0 }}>
                <strong>ðŸ’¡ Rule of thumb:</strong> Use PDF unless the employer specifically requests another format.
              </p>
            </div>
          </section>

          {/* Section 4 - Section Order */}
          <section id="section-order" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              4. Section Order: What Goes Where?
            </h2>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '28px',
              margin: '20px 0',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#667eea' }}>Standard Resume Order (2026):</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '12px'
              }}>
                {[
                  { section: "Contact Information", order: 1, note: "Name, phone, email, location" },
                  { section: "Professional Summary", order: 2, note: "2-3 sentence overview" },
                  { section: "Skills", order: 3, note: "Technical and soft skills" },
                  { section: "Work Experience", order: 4, note: "Reverse chronological order" },
                  { section: "Education", order: 5, note: "Degrees, institutions" },
                  { section: "Certifications", order: 6, note: "Professional credentials" }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'white',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{
                      background: '#667eea',
                      color: 'white',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>{item.order}</span>
                    <div>
                      <strong>{item.section}</strong>
                      <div style={{ fontSize: '11px', color: '#666' }}>{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5 - ATS-Friendly Formatting */}
          <section id="ats" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              5. ATS-Friendly Formatting
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#e8f5e9',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #a5d6a7'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#2e7d32' }}>âœ“ DO</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  {atsDoDont.map((item, idx) => (
                    <li key={idx}>{item.do}</li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: '#ffebee',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #ef9a9a'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#c62828' }}>âœ— DON'T</h3>
                <ul style={{ margin: 0, lineHeight: '1.8' }}>
                  {atsDoDont.map((item, idx) => (
                    <li key={idx}>{item.dont}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 - Length Guidelines */}
          <section id="length" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              6. Resume Length: How Many Pages?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>ðŸŽ“</div>
                <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Entry Level</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>1 page</div>
              </div>

              <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>ðŸ’¼</div>
                <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Mid-Level</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>1-2 pages</div>
              </div>

              <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>ðŸ‘”</div>
                <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Senior Level</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>2 pages</div>
              </div>
            </div>
          </section>

          {/* Section 7 - Common Mistakes */}
          <section id="mistakes" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              7. Common Formatting Mistakes to Avoid
            </h2>
            
            <div style={{
              background: '#fff3cd',
              borderRadius: '12px',
              padding: '28px',
              margin: '20px 0',
              border: '1px solid #ffc107'
            }}>
              <ul style={{ margin: 0, lineHeight: '1.8' }}>
                <li><strong>Inconsistent formatting:</strong> Different bullet styles or spacing throughout</li>
                <li><strong>Too many fonts:</strong> Stick to 1-2 fonts maximum</li>
                <li><strong>Margins too small:</strong> Less than 0.5 inches looks cramped</li>
                <li><strong>Contact info in header/footer:</strong> ATS may miss this information</li>
                <li><strong>Using tables or columns:</strong> Can confuse ATS parsing</li>
                <li><strong>Generic file names:</strong> Use "FirstName_LastName_Resume_2026.pdf"</li>
                <li><strong>Text boxes:</strong> Information may be ignored by ATS</li>
              </ul>
            </div>
          </section>

          {/* Checklist Section */}
          <section style={{
            background: '#f0f7ff',
            borderRadius: '16px',
            padding: '32px',
            margin: '50px 0',
            border: '1px solid #bbdefb'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#667eea' }}>âœ… Resume Formatting Checklist</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '12px'
            }}>
              {[
                'Professional font (10-12pt body, 14-16pt headings)',
                'Margins between 0.5-1 inch (recommended 0.7")',
                'Consistent line spacing throughout',
                'Clear, standard section headings',
                'No tables, columns, or graphics',
                'Contact info outside headers/footers',
                'Standard bullet points (â€¢ or -)',
                'Saved as PDF (unless DOCX requested)',
                'Professional file name',
                'Spell-checked and proofread'
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'white',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef'
                }}>
                  <span style={{ color: '#2e7d32', fontSize: '18px' }}>âœ“</span>
                  <span style={{ fontSize: '14px' }}>{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => copyToClipboard('Professional font, Margins 0.7", Consistent spacing, Standard headings, No tables/columns, Contact info in body, PDF format, Professional file name')}
              style={{
                marginTop: '20px',
                padding: '8px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              ðŸ“‹ Copy Checklist
            </button>
          </section>

          {/* FAQ Section */}
          <section style={{ margin: '50px 0' }}>
            <h2 style={{ 
              fontSize: '28px', 
              margin: '0 0 20px 0',
              color: '#333'
            }}>
              â“ Frequently Asked Questions
            </h2>
            
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              {[
                {
                  q: 'What is the best font for a resume in 2026?',
                  a: 'Standard professional fonts like Arial, Calibri, Times New Roman, and Verdana are recommended. Use 10-12pt for body text and 14-16pt for headings.'
                },
                {
                  q: 'What margins should I use on my resume?',
                  a: 'Use margins between 0.5 and 1 inch on all sides. The recommended range is 0.7-0.8 inches for most resumes to balance readability and space.'
                },
                {
                  q: 'Should I save my resume as PDF or Word?',
                  a: 'PDF is generally recommended as it preserves formatting across all devices. Save as DOCX only if the employer specifically requests it.'
                },
                {
                  q: 'How do I make my resume ATS-friendly?',
                  a: 'Use standard section headings, avoid tables and columns, don\'t put contact info in headers/footers, use simple bullet points, and include keywords from the job description.'
                },
                {
                  q: 'How many pages should my resume be?',
                  a: 'Entry-level: 1 page. Mid-level (3-7 years): 1-2 pages. Senior-level (8+ years): 2 pages. Quality over quantity.'
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '20px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#667eea' }}>{faq.q}</h3>
                  <p style={{ margin: 0, color: '#666' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Download Section */}
          <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '40px',
            margin: '50px 0',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>ðŸ“¥</div>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free Formatting Checklist</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
              Download our printable formatting checklist to review your resume before submitting.
            </p>
            <button
              onClick={handleDownloadClick}
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Download Free Checklist
            </button>
            {downloadAlert && (
              <div style={{
                marginTop: '15px',
                background: 'rgba(255,255,255,0.2)',
                padding: '8px 16px',
                borderRadius: '30px',
                fontSize: '14px',
                display: 'inline-block'
              }}>
                âœ“ PDF download coming soon!
              </div>
            )}
            {copySuccess && (
              <div style={{ marginTop: '15px', fontSize: '14px', background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '6px 18px', borderRadius: '30px' }}>
                {copySuccess}
              </div>
            )}
          </section>
        </article>

        {/* Author Bio */}
        <section style={{
          margin: '50px 0',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px',
          border: '1px solid #e9ecef',
          display: 'flex',
          gap: '25px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            color: 'white',
            fontWeight: 'bold'
          }}>
            LT
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>About Lisa Thompson</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              Lisa is a Resume Formatting Expert with over 8 years of experience helping professionals create visually appealing, 
              ATS-compatible resumes. She stays current with the latest ATS technology and design trends to provide practical, 
              actionable advice that works in today's job market.
            </p>
          </div>
        </section>

        {/* Share Section */}
        <div style={{
          margin: '50px 0',
          padding: '30px',
          background: '#f8f9fa',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>
            Share This Guide
          </h3>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            {[
              { name: 'Twitter', icon: 'ðŸ¦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('Resume Formatting Guide: Best Practices for 2026')}&url=https://freeresumemaker.xyz/blog/resume-formatting-guide` },
              { name: 'LinkedIn', icon: 'ðŸ’¼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/resume-formatting-guide` },
              { name: 'Facebook', icon: 'ðŸ“˜', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/resume-formatting-guide` },
              { name: 'Email', icon: 'ðŸ“§', url: `mailto:?subject=${encodeURIComponent('Resume Formatting Guide 2026')}&body=${encodeURIComponent('Check out this guide: https://freeresumemaker.xyz/blog/resume-formatting-guide')}` }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div style={{
          marginTop: '50px',
          paddingTop: '40px',
          borderTop: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '30px', color: '#333' }}>
            You Might Also Like
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              { href: '/blog/ats-resume-tips-2026', title: 'ATS Resume Tips for 2026', author: 'Michael Chen', readTime: '7 min' },
              { href: '/blog/action-verbs-for-resume', title: '200+ Action Verbs for Resume', author: 'David Kim', readTime: '6 min' },
              { href: '/blog/ultimate-resume-guide-2026', title: 'Ultimate Resume Guide 2026', author: 'Sarah Johnson', readTime: '12 min' },
              { href: '/blog/resume-mistakes-to-avoid', title: '10 Resume Mistakes to Avoid', author: 'Emily Rodriguez', readTime: '5 min' }
            ].map((post, index) => (
              <Link 
                key={index}
                href={post.href}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(102,126,234,0.1)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#1a1a1a', fontWeight: 600 }}>
                    {post.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    By {post.author} â€¢ {post.readTime} read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '50px',
          margin: '50px 0',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
            Ready to Format Your Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
            Use our professionally designed templates that are already formatted to ATS-friendly standards. Choose from 20+ templates.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/editor"
              style={{
                padding: '16px 32px',
                background: 'white',
                color: '#0070f3',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '18px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start Building
            </Link>
            <Link 
              href="/templates"
              style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '18px',
                border: '2px solid white',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
          marginTop: '30px'
        }}>
          <p>Last updated: March 24, 2026 | Â© {new Date().getFullYear()} Free Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
