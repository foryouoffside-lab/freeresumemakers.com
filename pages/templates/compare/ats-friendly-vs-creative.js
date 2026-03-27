import React from 'react';
// pages/templates/compare/ats-friendly-vs-creative.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareATSFriendlyVsCreative() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: ATS-Friendly vs Creative Templates",
    "description": "Compare ATS-optimized resume templates with creative design templates. Find out which style is best for your job search and industry.",
    "brand": {
      "@type": "Brand",
      "name": "Free Resume Builder"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "245"
    }
  };

  // Breadcrumb structured data
  const breadcrumbData = {
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
        "name": "Templates",
        "item": "https://freeresumemaker.xyz/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Compare Templates",
        "item": "https://freeresumemaker.xyz/templates/compare"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "ATS-Friendly vs Creative Templates",
        "item": "https://freeresumemaker.xyz/templates/compare/ats-friendly-vs-creative"
      }
    ]
  };

  // ATS-Friendly Templates data
  const atsFriendlyTemplates = [
    {
      id: 1,
      name: 'The Professional',
      description: 'Classic two-column layout with clean structure that ATS systems parse easily.',
      features: ['Simple formatting', 'Standard fonts', 'Clear hierarchy', 'No graphics'],
      image: '/assets/template-previews/template-1.png'
    },
    {
      id: 4,
      name: 'The Strategist',
      description: 'Timeline-based layout with clean text that ATS systems can read without issues.',
      features: ['Standard columns', 'Parseable dates', 'Simple bullets', 'No complex tables'],
      image: '/assets/template-previews/template-4.png'
    },
    {
      id: 5,
      name: 'The Minimalist',
      description: 'Ultra-clean design with isolated sections - perfect for ATS parsing.',
      features: ['No columns', 'Simple structure', 'Standard fonts', 'ATS-optimized'],
      image: '/assets/template-previews/template-5.png'
    },
    {
      id: 8,
      name: 'The Traditionalist',
      description: 'Black & white design with classic formatting that all ATS systems love.',
      features: ['No colors', 'Simple layout', 'Standard sections', 'Maximum compatibility'],
      image: '/assets/template-previews/template-8.png'
    },
    {
      id: 10,
      name: 'The Essential',
      description: 'Clean, focused design that prioritizes content over styling.',
      features: ['Single column', 'Clear headers', 'Simple bullets', 'ATS-friendly'],
      image: '/assets/template-previews/template-10.png'
    }
  ];

  // Creative Templates data
  const creativeTemplates = [
    {
      id: 2,
      name: 'The Innovator',
      description: 'Modern design with visual connectors that make your resume stand out to human readers.',
      features: ['Visual connectors', 'Centered header', 'Modern fonts', 'Contact pills'],
      image: '/assets/template-previews/template-2.png'
    },
    {
      id: 3,
      name: 'The Executive',
      description: 'Sophisticated dark theme that commands attention and projects authority.',
      features: ['Dark premium theme', 'Accent colors', 'Density scaling', 'Modern layout'],
      image: '/assets/template-previews/template-3.png'
    },
    {
      id: 6,
      name: 'The Architect',
      description: 'Structured technical design with visual elements that showcase your personality.',
      features: ['Education grid', 'Type badges', 'Connector lines', 'Color accents'],
      image: '/assets/template-previews/template-6.png'
    },
    {
      id: 7,
      name: 'The Scholar',
      description: 'Elegant geometric design with sidebar achievements for visual impact.',
      features: ['Geometric accents', 'Timeline design', 'Sidebar styling', 'Visual hierarchy'],
      image: '/assets/template-previews/template-7.png'
    },
    {
      id: 17,
      name: 'The Innovator 2.0',
      description: 'Card-based modern design that catches the eye of creative recruiters.',
      features: ['Card design', 'Tech tags', 'Project showcase', 'Modern layout'],
      image: '/assets/template-previews/template-17.png'
    }
  ];

  // SEO-optimized meta description
  const metaDescription = `Compare ATS-friendly resume templates with creative design templates. Learn which style works best for your industry, how ATS systems read resumes, and when to use creative designs. Complete guide with examples.`;

  return (
    <>
      <Head>
        <title>ATS-Friendly vs Creative Resume Templates: Complete Comparison Guide | Free Resume Builder</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="ATS-friendly resume templates, creative resume templates, resume comparison, ATS vs creative, best resume for ATS, creative resume design, which resume template to choose, resume format guide, ATS parsing, creative resume examples" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ATS-Friendly vs Creative Resume Templates: Complete Comparison Guide" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/ats-friendly-vs-creative.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/ats-friendly-vs-creative" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Free Resume Builder" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ATS-Friendly vs Creative Resume Templates: Complete Comparison Guide" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/ats-friendly-vs-creative.jpg" />
        <meta name="twitter:creator" content="@freeresumebuilder" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/ats-friendly-vs-creative" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Additional SEO meta */}
        <meta name="author" content="Free Resume Builder" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        {/* Breadcrumbs */}
        <div style={{ marginBottom: '30px', fontSize: '0.95rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <Link href="/templates/compare" style={{ color: '#666', textDecoration: 'none' }}>Compare</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <span style={{ color: '#333', fontWeight: 500 }}>ATS-Friendly vs Creative</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            ATS-Friendly vs Creative Resume Templates
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Should you choose a simple ATS-optimized template or a creative design that stands out? 
            The answer depends on your industry, experience level, and how you're applying.
          </p>
        </div>

        {/* Quick Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {['overview', 'comparison', 'industry', 'templates', 'verdict'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 20px',
                background: activeTab === tab ? '#0070f3' : 'white',
                color: activeTab === tab ? 'white' : '#333',
                border: activeTab === tab ? 'none' : '1px solid #ddd',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#0070f3';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#ddd';
                }
              }}
            >
              {tab === 'overview' && '📋 Overview'}
              {tab === 'comparison' && '⚡ Key Differences'}
              {tab === 'industry' && '🏢 Industry Guide'}
              {tab === 'templates' && '🎨 Template Examples'}
              {tab === 'verdict' && '⚖️ Final Verdict'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* What is ATS? */}
            <div style={{
              background: '#f0f7ff',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '30px',
              border: '1px solid #cce5ff'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#0056b3' }}>
                What is an ATS?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.7', marginBottom: '15px' }}>
                An Applicant Tracking System (ATS) is software that companies use to manage job applications. 
                These systems scan, parse, and rank resumes before a human ever sees them. In fact, <strong>over 98% of Fortune 500 companies</strong> use ATS software to filter applications.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.7', marginBottom: '0' }}>
                ATS-friendly templates are designed to be easily read by these systems, ensuring your qualifications 
                make it through the digital gatekeepers. Creative templates prioritize visual appeal for human readers 
                but may risk ATS rejection.
              </p>
            </div>

            {/* Two Column Overview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* ATS-Friendly Column */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                border: '2px solid #0056b3'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🤖</div>
                <h2 style={{ fontSize: '1.8rem', color: '#0056b3', textAlign: 'center', marginBottom: '15px' }}>
                  ATS-Friendly Templates
                </h2>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  Designed to be easily parsed by Applicant Tracking Systems. These templates use standard formatting, 
                  simple layouts, and avoid complex design elements that could confuse ATS software.
                </p>
                <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                  <strong style={{ color: '#0056b3' }}>Key Characteristics:</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Simple, clean layouts (often single or two-column)</li>
                    <li>Standard fonts (Arial, Calibri, Georgia, Times New Roman)</li>
                    <li>No text boxes, graphics, or images in content areas</li>
                    <li>Clear section headers (EXPERIENCE, EDUCATION, etc.)</li>
                    <li>Standard date formats (MMM YYYY - MMM YYYY)</li>
                    <li>Simple bullet points (• or - characters)</li>
                    <li>No tables or complex formatting</li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{
                    background: '#0056b3',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontWeight: 600,
                    display: 'inline-block'
                  }}>
                    Best for: Corporate, Government, Large Companies
                  </span>
                </div>
              </div>

              {/* Creative Column */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                border: '2px solid #8b5cf6'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🎨</div>
                <h2 style={{ fontSize: '1.8rem', color: '#8b5cf6', textAlign: 'center', marginBottom: '15px' }}>
                  Creative Templates
                </h2>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  Designed to catch the eye of human recruiters. These templates use color, visual elements, 
                  and unique layouts to help you stand out from other applicants.
                </p>
                <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                  <strong style={{ color: '#8b5cf6' }}>Key Characteristics:</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Unique layouts with visual hierarchy</li>
                    <li>Color accents and design elements</li>
                    <li>Modern or decorative fonts</li>
                    <li>Visual connectors, icons, and graphics</li>
                    <li>Card-based or timeline designs</li>
                    <li>Photo or avatar sections</li>
                    <li>Creative section styling</li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontWeight: 600,
                    display: 'inline-block'
                  }}>
                    Best for: Creative, Tech, Startups, Design
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                By the Numbers
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0056b3' }}>98%</div>
                  <div style={{ fontSize: '1rem', color: '#666' }}>of Fortune 500 companies use ATS</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0056b3' }}>75%</div>
                  <div style={{ fontSize: '1rem', color: '#666' }}>of qualified applicants rejected by ATS</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>6-8</div>
                  <div style={{ fontSize: '1rem', color: '#666' }}>seconds recruiters spend on first scan</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>80%</div>
                  <div style={{ fontSize: '1rem', color: '#666' }}>of recruiters say design matters</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Differences Tab */}
        {activeTab === 'comparison' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Key Differences: ATS-Friendly vs Creative
            </h2>
            
            {/* Feature Comparison Table */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              overflow: 'hidden',
              marginBottom: '40px'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '20px', textAlign: 'left', fontSize: '1.1rem' }}>Feature</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#0056b3' }}>ATS-Friendly</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#8b5cf6' }}>Creative</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Primary Audience', t1: 'ATS Software', t2: 'Human Recruiters' },
                    { feature: 'Layout Complexity', t1: 'Simple, standard layouts', t2: 'Unique, varied layouts' },
                    { feature: 'Color Usage', t1: 'Minimal or none', t2: 'Color accents and themes' },
                    { feature: 'Fonts', t1: 'Standard (Arial, Calibri, Times)', t2: 'Modern or decorative fonts' },
                    { feature: 'Graphics/Icons', t1: 'Avoided', t2: 'Common design element' },
                    { feature: 'Columns', t1: 'Simple columns or single', t2: 'Complex column layouts' },
                    { feature: 'Text Boxes', t1: 'Avoided', t2: 'Sometimes used for styling' },
                    { feature: 'Tables', t1: 'Avoided', t2: 'Sometimes used' },
                    { feature: 'Photo/Image', t1: 'Not recommended', t2: 'Common (avatar or photo)' },
                    { feature: 'Date Formatting', t1: 'Standard (MMM YYYY)', t2: 'Varied creative formats' },
                    { feature: 'Section Headers', t1: 'Simple text', t2: 'Styled with icons/colors' },
                    { feature: 'ATS Pass Rate', t1: '95-100%', t2: '60-80% (varies)' },
                    { feature: 'Human Appeal', t1: 'Good (professional)', t2: 'Excellent (stands out)' },
                    { feature: 'Best For', t1: 'Corporate, Government, Large Companies', t2: 'Creative, Tech, Startups, Small Companies' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 13 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center', color: '#0056b3', fontWeight: 500 }}>
                        {row.t1}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center', color: '#8b5cf6', fontWeight: 500 }}>
                        {row.t2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual Representation */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0056b3', marginBottom: '15px', textAlign: 'center' }}>
                  What ATS Sees
                </h3>
                <div style={{
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>JOHN SMITH</div>
                  <div style={{ marginBottom: '15px' }}>john.smith@email.com | (555) 123-4567</div>
                  
                  <div style={{ fontWeight: 'bold', marginTop: '15px' }}>EXPERIENCE</div>
                  <div style={{ marginLeft: '10px' }}>
                    <div style={{ fontWeight: 'bold' }}>Software Engineer</div>
                    <div>Tech Company • Jan 2020 - Present</div>
                    <div style={{ marginLeft: '15px' }}>- Developed web applications using React</div>
                    <div style={{ marginLeft: '15px' }}>- Led team of 5 junior developers</div>
                  </div>
                  
                  <div style={{ fontWeight: 'bold', marginTop: '15px' }}>EDUCATION</div>
                  <div style={{ marginLeft: '10px' }}>
                    <div>BS in Computer Science</div>
                    <div>University • 2016 - 2020</div>
                  </div>
                </div>
                <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95rem' }}>
                  ATS systems parse resumes as plain text. They look for keywords, dates, and structured information. 
                  Complex formatting can cause parsing errors.
                </p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '15px', textAlign: 'center' }}>
                  What Humans See
                </h3>
                <div style={{
                  background: 'linear-gradient(135deg, #f9f0ff 0%, #ffffff 100%)',
                  border: '1px solid #d8b4fe',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#8b5cf6',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>JS</div>
                    <div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>JOHN SMITH</div>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>Software Engineer</div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '15px', padding: '10px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px' }}>
                    <span style={{ fontWeight: 'bold', color: '#8b5cf6' }}>✉</span> john.smith@email.com • 
                    <span style={{ fontWeight: 'bold', color: '#8b5cf6', marginLeft: '8px' }}>📱</span> (555) 123-4567
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '1.2rem' }}>💼</span>
                      <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>EXPERIENCE</span>
                    </div>
                    <div style={{ paddingLeft: '15px', borderLeft: '2px solid #8b5cf6' }}>
                      <div style={{ fontWeight: 'bold' }}>Software Engineer</div>
                      <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Tech Company • 2020 - Present</div>
                      <div style={{ fontSize: '0.95rem' }}>• Developed web applications using React</div>
                      <div style={{ fontSize: '0.95rem' }}>• Led team of 5 junior developers</div>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95rem' }}>
                  Human recruiters spend 6-8 seconds on first scan. Visual elements help them quickly identify 
                  key information and make your resume memorable.
                </p>
              </div>
            </div>

            {/* Pros and Cons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginTop: '20px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0056b3', marginBottom: '15px' }}>
                  ✓ ATS-Friendly Pros
                </h3>
                <ul style={{ marginBottom: '25px' }}>
                  <li style={{ marginBottom: '8px' }}>Guaranteed ATS compatibility</li>
                  <li style={{ marginBottom: '8px' }}>No risk of parsing errors</li>
                  <li style={{ marginBottom: '8px' }}>Works for all companies</li>
                  <li style={{ marginBottom: '8px' }}>Professional, trusted appearance</li>
                  <li style={{ marginBottom: '8px' }}>Printer-friendly</li>
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0056b3', marginBottom: '15px' }}>
                  ⚠️ ATS-Friendly Cons
                </h3>
                <ul>
                  <li style={{ marginBottom: '8px' }}>May look generic</li>
                  <li style={{ marginBottom: '8px' }}>Less memorable to recruiters</li>
                  <li style={{ marginBottom: '8px' }}>Limited visual appeal</li>
                  <li style={{ marginBottom: '8px' }}>May not stand out in creative fields</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '15px' }}>
                  ✓ Creative Pros
                </h3>
                <ul style={{ marginBottom: '25px' }}>
                  <li style={{ marginBottom: '8px' }}>Stands out to human readers</li>
                  <li style={{ marginBottom: '8px' }}>Shows personality and creativity</li>
                  <li style={{ marginBottom: '8px' }}>Memorable design elements</li>
                  <li style={{ marginBottom: '8px' }}>Perfect for creative industries</li>
                  <li style={{ marginBottom: '8px' }}>Can showcase design skills</li>
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '15px' }}>
                  ⚠️ Creative Cons
                </h3>
                <ul>
                  <li style={{ marginBottom: '8px' }}>ATS rejection risk</li>
                  <li style={{ marginBottom: '8px' }}>May not parse correctly</li>
                  <li style={{ marginBottom: '8px' }}>Too casual for some industries</li>
                  <li style={{ marginBottom: '8px' }}>Printing issues possible</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Industry Guide Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Industry Guide: Which Style to Choose?
            </h2>
            
            {/* Industry Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {/* Corporate/Business */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #0056b3'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>🏢</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Corporate / Business</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#0056b3',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginRight: '8px'
                  }}>ATS-Friendly</span>
                  <span style={{
                    background: '#e5e7eb',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>Creative: Risky</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Banks, consulting firms, insurance, and traditional corporations almost always use ATS. 
                  Creative templates may be rejected before a human sees them. Choose ATS-friendly templates 
                  like <Link href="/templates/1" style={{ color: '#0056b3' }}>The Professional</Link> or <Link href="/templates/8" style={{ color: '#0056b3' }}>The Traditionalist</Link>.
                </p>
              </div>

              {/* Technology */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #8b5cf6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>💻</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Technology / Startups</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginRight: '8px'
                  }}>Creative: Preferred</span>
                  <span style={{
                    background: '#e5e7eb',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>ATS-Friendly: Works</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Tech companies and startups value creativity and often have modern ATS systems that can handle 
                  creative formatting. Templates like <Link href="/templates/2" style={{ color: '#8b5cf6' }}>The Innovator</Link> or
                  <Link href="/templates/17" style={{ color: '#8b5cf6' }}> The Innovator 2.0</Link> help you stand out.
                </p>
              </div>

              {/* Creative/Design */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #8b5cf6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>🎨</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Creative / Design</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>Creative: Expected</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  In creative fields, your resume design demonstrates your skills. Agencies and design studios 
                  expect visual creativity. Templates like <Link href="/templates/6" style={{ color: '#8b5cf6' }}>The Architect</Link> or 
                  <Link href="/templates/7" style={{ color: '#8b5cf6' }}>The Scholar</Link> showcase your aesthetic sense.
                </p>
              </div>

              {/* Government/Legal */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #0056b3'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>⚖️</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Government / Legal</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#0056b3',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>ATS-Friendly: Required</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Government agencies and law firms use strict ATS systems that reject creative formatting. 
                  Conservative, text-only templates are essential. Use <Link href="/templates/8" style={{ color: '#0056b3' }}>The Traditionalist</Link> 
                  or <Link href="/templates/1" style={{ color: '#0056b3' }}>The Professional</Link>.
                </p>
              </div>

              {/* Healthcare */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #0056b3'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>🏥</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Healthcare</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#0056b3',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginRight: '8px'
                  }}>ATS-Friendly</span>
                  <span style={{
                    background: '#e5e7eb',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>Creative: Risky</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Hospitals and healthcare systems typically use ATS. Stick to clean, professional templates like 
                  <Link href="/templates/5" style={{ color: '#0056b3' }}> The Minimalist</Link> or <Link href="/templates/10" style={{ color: '#0056b3' }}>The Essential</Link>.
                </p>
              </div>

              {/* Education/Academic */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                borderLeft: '5px solid #8b5cf6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '2rem' }}>📚</span>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Education / Academic</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginRight: '8px'
                  }}>Creative: Works</span>
                  <span style={{
                    background: '#e5e7eb',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>ATS-Friendly: Works</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Universities may have human reviewers for faculty positions. Templates like 
                  <Link href="/templates/7" style={{ color: '#8b5cf6' }}> The Scholar</Link> or <Link href="/templates/19" style={{ color: '#8b5cf6' }}>The Scholar 2.0</Link> 
                  balance academic professionalism with visual appeal.
                </p>
              </div>
            </div>

            {/* Decision Flowchart */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px',
              marginTop: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                Quick Decision Flowchart
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#0056b3',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>1</div>
                  <div style={{ flex: 1 }}>
                    <strong>Are you applying to a large corporation, government, or traditional industry?</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '55px' }}>
                  <span style={{ fontWeight: 'bold', color: '#0056b3' }}>YES →</span>
                  <span style={{ background: '#0056b3', color: 'white', padding: '8px 16px', borderRadius: '8px' }}>
                    Choose ATS-Friendly
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#8b5cf6',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>2</div>
                  <div style={{ flex: 1 }}>
                    <strong>Are you in creative, tech, or a startup?</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '55px' }}>
                  <span style={{ fontWeight: 'bold', color: '#8b5cf6' }}>YES →</span>
                  <span style={{ background: '#8b5cf6', color: 'white', padding: '8px 16px', borderRadius: '8px' }}>
                    Choose Creative
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>3</div>
                  <div style={{ flex: 1 }}>
                    <strong>Not sure? Research the company's culture and size</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '55px' }}>
                  <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>Large/Corporate →</span>
                  <span style={{ background: '#0056b3', color: 'white', padding: '8px 16px', borderRadius: '8px' }}>
                    ATS-Friendly
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '55px' }}>
                  <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>Small/Startup →</span>
                  <span style={{ background: '#8b5cf6', color: 'white', padding: '8px 16px', borderRadius: '8px' }}>
                    Creative
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template Examples Tab */}
        {activeTab === 'templates' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Template Examples
            </h2>
            
            {/* ATS-Friendly Templates */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🤖</span> Top ATS-Friendly Templates
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {atsFriendlyTemplates.map((template) => (
                  <Link
                    key={template.id}
                    href={`/templates/${template.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = '#0056b3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = '#e9ecef';
                    }}
                    >
                      <div style={{
                        height: '160px',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid #e9ecef'
                      }}>
                        <img 
                          src={template.image}
                          alt={template.name}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '140px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: '#0056b3' }}>
                          {template.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>
                          {template.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {template.features.map((feature, i) => (
                            <span key={i} style={{
                              fontSize: '0.75rem',
                              background: '#e5e7eb',
                              color: '#4b5563',
                              padding: '3px 8px',
                              borderRadius: '12px'
                            }}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Creative Templates */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#8b5cf6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🎨</span> Top Creative Templates
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {creativeTemplates.map((template) => (
                  <Link
                    key={template.id}
                    href={`/templates/${template.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = '#8b5cf6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = '#e9ecef';
                    }}
                    >
                      <div style={{
                        height: '160px',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid #e9ecef'
                      }}>
                        <img 
                          src={template.image}
                          alt={template.name}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '140px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: '#8b5cf6' }}>
                          {template.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>
                          {template.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {template.features.map((feature, i) => (
                            <span key={i} style={{
                              fontSize: '0.75rem',
                              background: '#ede9fe',
                              color: '#6d28d9',
                              padding: '3px 8px',
                              borderRadius: '12px'
                            }}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hybrid Approach */}
            <div style={{
              background: '#fff3cd',
              borderRadius: '12px',
              padding: '25px',
              border: '1px solid #ffc107'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#856404', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>💡</span> The Hybrid Approach: Best of Both Worlds
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', marginBottom: '15px' }}>
                Many job seekers create two versions of their resume:
              </p>
              <ul style={{ color: '#856404', marginBottom: '15px' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>ATS Version:</strong> A simple, text-based resume for online applications and ATS systems
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Creative Version:</strong> A visually designed resume to email directly to hiring managers or bring to interviews
                </li>
              </ul>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                Templates like <Link href="/templates/4" style={{ color: '#856404', fontWeight: 'bold' }}>The Strategist</Link> and 
                <Link href="/templates/9" style={{ color: '#856404', fontWeight: 'bold' }}> The Modernist</Link> offer a middle ground - 
                visually appealing but still ATS-friendly.
              </p>
            </div>
          </div>
        )}

        {/* Final Verdict Tab */}
        {activeTab === 'verdict' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Final Verdict: Which Should You Choose?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #cce5ff'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🤖</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', textAlign: 'center', marginBottom: '15px' }}>
                  Choose ATS-Friendly If...
                </h3>
                <ul style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '10px' }}>✓ You're applying to large corporations</li>
                  <li style={{ marginBottom: '10px' }}>✓ You're in government, legal, or healthcare</li>
                  <li style={{ marginBottom: '10px' }}>✓ You're applying through online portals</li>
                  <li style={{ marginBottom: '10px' }}>✓ You want guaranteed ATS compatibility</li>
                  <li style={{ marginBottom: '10px' }}>✓ You're unsure about the company's ATS</li>
                </ul>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <Link href="/templates/1" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#0056b3',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    Browse ATS-Friendly Templates
                  </Link>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f5f0ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #d8b4fe'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🎨</div>
                <h3 style={{ fontSize: '1.5rem', color: '#8b5cf6', textAlign: 'center', marginBottom: '15px' }}>
                  Choose Creative If...
                </h3>
                <ul style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '10px' }}>✓ You're in design, creative, or tech</li>
                  <li style={{ marginBottom: '10px' }}>✓ You're applying to startups or agencies</li>
                  <li style={{ marginBottom: '10px' }}>✓ You're emailing your resume directly</li>
                  <li style={{ marginBottom: '10px' }}>✓ You want to stand out visually</li>
                  <li style={{ marginBottom: '10px' }}>✓ Your resume IS a design portfolio</li>
                </ul>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <Link href="/templates/2" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#8b5cf6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    Browse Creative Templates
                  </Link>
                </div>
              </div>
            </div>

            {/* Expert Advice */}
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                Expert Advice: The Safe Strategy
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '20px' }}>
                <strong>When in doubt, choose ATS-friendly.</strong> Here's why:
              </p>
              <ol style={{ fontSize: '1rem', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '15px' }}>
                  <strong>You never know which companies use ATS.</strong> Even startups may use ATS as they grow.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>A creative resume that fails ATS parsing never reaches a human.</strong> All your design work is wasted.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>You can always bring a creative version to interviews.</strong> Use a simple version for applications, 
                  and impress them with a designed copy in person.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>Many ATS-friendly templates still look professional.</strong> Templates like 
                  <Link href="/templates/1" style={{ color: '#0056b3' }}> The Professional</Link> and 
                  <Link href="/templates/9" style={{ color: '#0056b3' }}> The Modernist</Link> are clean and attractive.
                </li>
              </ol>
            </div>

            {/* Quick Reference Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '25px'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333', textAlign: 'center' }}>
                Quick Reference Card
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#0056b3', marginBottom: '10px' }}>✓ ATS-Friendly Checklist</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>☐ Simple, standard layout</li>
                    <li>☐ Common fonts (Arial, Calibri, Times)</li>
                    <li>☐ No text boxes or graphics</li>
                    <li>☐ Standard section headers</li>
                    <li>☐ Simple bullet points</li>
                    <li>☐ Save as .docx or PDF</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '10px' }}>✓ Creative Checklist</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>☐ Company uses modern ATS</li>
                    <li>☐ Applying directly to hiring manager</li>
                    <li>☐ Creative industry expected</li>
                    <li>☐ Tested ATS compatibility</li>
                    <li>☐ Have plain version as backup</li>
                    <li>☐ Save as PDF for formatting</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>⚠️ Red Flags</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>✗ Tables for layout</li>
                    <li>✗ Text in header/footer</li>
                    <li>✗ Important info in images</li>
                    <li>✗ Columns that don't reflow</li>
                    <li>✗ Unusual date formats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Comparisons */}
        <div style={{
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#333' }}>
            More Template Comparisons
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {[
              { id: '1-vs-2', name: 'The Professional vs The Innovator' },
              { id: '1-vs-3', name: 'The Professional vs The Executive' },
              { id: '1-vs-4', name: 'The Professional vs The Strategist' },
              { id: '2-vs-3', name: 'The Innovator vs The Executive' },
              { id: '3-vs-4', name: 'The Executive vs The Strategist' },
              { id: '5-vs-6', name: 'The Minimalist vs The Architect' },
              { id: '7-vs-8', name: 'The Scholar vs The Traditionalist' },
              { id: '9-vs-10', name: 'The Modernist vs The Essential' },
              { id: '17-vs-18', name: 'The Innovator 2.0 vs The Code' },
              { id: '18-vs-19', name: 'The Code vs The Scholar 2.0' },
              { id: '19-vs-20', name: 'The Scholar 2.0 vs The Engineer' },
            ].map((item) => (
              <Link
                key={item.id}
                href={`/templates/compare/${item.id}`}
                style={{
                  padding: '15px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div style={{
          marginTop: '60px',
          padding: '40px 0',
          borderTop: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            display: 'grid',
            gap: '25px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                q: 'What is an ATS and why does it matter?',
                a: 'ATS (Applicant Tracking System) is software companies use to manage applications. It scans resumes for keywords and qualifications before humans see them. Over 98% of Fortune 500 companies use ATS.'
              },
              {
                q: 'Can creative resumes pass ATS?',
                a: 'Some can, but it\'s risky. Modern ATS systems handle basic formatting better, but complex designs, text boxes, and graphics can cause parsing errors. Always test your creative resume with an ATS simulator.'
              },
              {
                q: 'Which is better for my industry?',
                a: 'Corporate, government, healthcare, and legal industries strongly prefer ATS-friendly. Creative, tech, design, and startups often appreciate creative resumes. Research your target companies.'
              },
              {
                q: 'Should I have both versions?',
                a: 'Yes! Many job seekers maintain two versions: an ATS-friendly version for online applications and a creative version to email directly or bring to interviews. This covers all bases.'
              },
              {
                q: 'What makes a template ATS-friendly?',
                a: 'Simple layouts, standard fonts (Arial, Calibri, Times), clear section headers, simple bullet points, no text boxes or graphics, and standard date formats (e.g., Jan 2020).'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.2rem', color: '#0070f3', marginBottom: '8px' }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Free Resume Builder. All 20 templates are free forever.</p>
          <div style={{ marginTop: '10px' }}>
            <Link href="/templates" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>All Templates</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/blog" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/about" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>About</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/contact" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}