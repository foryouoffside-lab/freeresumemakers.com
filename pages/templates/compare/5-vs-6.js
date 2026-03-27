import React from 'react';
// pages/templates/compare/5-vs-6.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate5vs6() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Minimalist vs The Architect",
    "description": "Compare Template 5 (The Minimalist) and Template 6 (The Architect) side by side. Find out which modern template is best for your career.",
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
      "ratingValue": "4.7",
      "ratingCount": "145"
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
        "name": "The Minimalist vs The Architect",
        "item": "https://freeresumemaker.xyz/templates/compare/5-vs-6"
      }
    ]
  };

  // Template data for comparison
  const template5 = {
    id: 5,
    name: 'The Minimalist',
    category: 'Modern/Minimalist',
    description: 'Ultra-clean isolated sections with perfect contrast. Optimized for ATS and modern tech companies.',
    longDescription: 'The Minimalist template features ultra-clean dark/light contrast, isolated sections, and minimalist typography. It focuses purely on content with no decorative elements, making it perfect for software engineers, UX/UI designers, recent graduates, and professionals in modern, forward-thinking companies.',
    features: [
      'Ultra-clean isolated sections',
      'ATS-optimized structure',
      'Minimalist typography',
      'Dark/light contrast design',
      'Single experience focus',
      'Project showcase section',
      'Skills grid (7 skills max)',
      'Clean, distraction-free layout'
    ],
    image: '/assets/template-previews/template-5.png',
    experienceCount: '1',
    skillsCount: '7',
    projectsCount: '1',
    educationCount: '1',
    layout: 'Minimalist, content-focused',
    color: 'Clean White',
    bestFor: ['Software engineers', 'UX/UI designers', 'Recent graduates', 'Startup employees', 'Tech professionals'],
    industries: ['Technology', 'Software Development', 'Design', 'Startups', 'Tech'],
    pros: [
      'Ultra-clean, distraction-free design',
      'ATS-optimized for parsing systems',
      'Perfect for showcasing projects',
      'Ideal for entry-level professionals',
      'Great for tech industry applications'
    ],
    cons: [
      'Limited to 1 experience entry',
      'Only 1 project showcase',
      'May be too minimal for experienced professionals',
      'No languages section'
    ]
  };

  const template6 = {
    id: 6,
    name: 'The Architect',
    category: 'Technical/Engineering',
    description: 'Structured technical template with side-by-side education boxes and professional timeline. Built for engineers and architects.',
    longDescription: 'The Architect template features a structured technical layout with side-by-side education boxes and a professional timeline. It includes type badges and connector lines for clear career progression. Perfect for engineers, architects, and technical professionals who need to showcase multiple experiences and skills.',
    features: [
      'Side-by-side education boxes',
      'Professional timeline design',
      'Type badges for roles',
      'Connector lines between experiences',
      '3 experience entries',
      '8 skills maximum',
      '5 languages maximum',
      '3 projects maximum',
      'Certifications section'
    ],
    image: '/assets/template-previews/template-6.png',
    experienceCount: '3',
    skillsCount: '8',
    languagesCount: '5',
    projectsCount: '3',
    awardsCount: '2',
    toolsCount: '6',
    coreStrengthsCount: '4',
    certificationsCount: '3',
    educationCount: '3',
    layout: 'Technical grid with timeline',
    color: 'Engineering Blue',
    bestFor: ['Engineers', 'Architects', 'Technical professionals', 'Scientists', 'Researchers'],
    industries: ['Engineering', 'Architecture', 'Science', 'Research', 'Technical'],
    pros: [
      'Comprehensive section coverage',
      '3 experience entries for career progression',
      'Side-by-side education display',
      'Multiple optional sections',
      'Professional timeline with connectors'
    ],
    cons: [
      'Busier layout than minimalist designs',
      'May be too complex for entry-level',
      'More sections to fill out'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 5 (The Minimalist) vs Template 6 (The Architect). The Minimalist offers ultra-clean design with 1 experience, while The Architect features comprehensive technical layout with 3 experiences. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 5 vs 6: The Minimalist vs The Architect | Compare Modern Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 5 vs 6, The Minimalist template, The Architect template, minimalist vs technical resume, clean resume, engineering resume, best resume template for engineers, best resume template for designers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 5 vs 6: The Minimalist vs The Architect | Compare Modern Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-5-vs-6.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/5-vs-6" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 5 vs 6: The Minimalist vs The Architect" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-5-vs-6.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/5-vs-6" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
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
          <span style={{ margin: '0 8px', color: '#999' }}>&gt;</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>&gt;</span>
          <Link href="/templates/compare" style={{ color: '#666', textDecoration: 'none' }}>Compare</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>&gt;</span>
          <span style={{ color: '#333', fontWeight: 500 }}>The Minimalist vs The Architect</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 5 vs Template 6: <span style={{ color: '#6b7280' }}>The Minimalist</span> vs <span style={{ color: '#2563eb' }}>The Architect</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Ultra-clean minimalism vs comprehensive technical structure. Compare these two modern templates to find your perfect match.
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
          {['overview', 'features', 'visual', 'industry', 'verdict'].map((tab) => (
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
              {tab === 'features' && '⚡ Features'}
              {tab === 'visual' && '🎨 Visual Comparison'}
              {tab === 'industry' && '🏢 Industry Fit'}
              {tab === 'verdict' && '⚖️ Final Verdict'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Side by Side Template Previews */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Template 5 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #6b7280'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#6b7280',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 5</span>
                  <img 
                    src={template5.image}
                    alt="The Minimalist template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#6b7280' }}>
                  {template5.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template5.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template5.description}
                </p>
                <Link 
                  href="/templates/5"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#6b7280',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 5
                </Link>
                <Link 
                  href="/editor/5"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#6b7280',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #6b7280'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 6 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #2563eb'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#2563eb',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 6</span>
                  <img 
                    src={template6.image}
                    alt="The Architect template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#2563eb' }}>
                  {template6.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template6.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template6.description}
                </p>
                <Link 
                  href="/templates/6"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#2563eb',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 6
                </Link>
                <Link 
                  href="/editor/6"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#2563eb',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #2563eb'
                  }}
                >
                  Use This Template
                </Link>
              </div>
            </div>

            {/* Quick Stats Comparison */}
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '40px'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#333' }}>
                Quick Stats Comparison
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6b7280' }}>
                    {template5.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template6.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6b7280' }}>
                    {template5.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template6.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6b7280' }}>
                    {template5.projectsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template6.projectsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6b7280' }}>
                    0
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template6.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6b7280' }}>
                    Simple
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    Complex
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Layout</div>
                </div>
              </div>
            </div>

            {/* At a Glance Summary */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#6b7280', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template5.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template6.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Feature Comparison
            </h2>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '20px', textAlign: 'left', fontSize: '1.1rem' }}>Feature</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#6b7280' }}>The Minimalist</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#2563eb' }}>The Architect</th>
                   </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Ultra-clean isolated sections', t2: 'Technical grid with timeline' },
                    { feature: 'Maximum Experience Entries', t1: '1', t2: '3' },
                    { feature: 'Maximum Skills', t1: '7', t2: '8' },
                    { feature: 'Languages Section', t1: '✗ No', t2: '✓ Yes (5 max)' },
                    { feature: 'Projects Section', t1: '✓ Yes (1 max)', t2: '✓ Yes (3 max)' },
                    { feature: 'Education Entries', t1: '1', t2: '3' },
                    { feature: 'Certifications Section', t1: '✗ No', t2: '✓ Yes (3 max)' },
                    { feature: 'Awards Section', t1: '✗ No', t2: '✓ Yes (2 max)' },
                    { feature: 'Tools Section', t1: '✗ No', t2: '✓ Yes (6 max)' },
                    { feature: 'Core Strengths Section', t1: '✗ No', t2: '✓ Yes (4 max)' },
                    { feature: 'Timeline Connectors', t1: '✗ No', t2: '✓ Yes' },
                    { feature: 'Type Badges', t1: '✗ No', t2: '✓ Yes' },
                    { feature: 'Side-by-Side Education', t1: '✗ No', t2: '✓ Yes' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 12 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#6b7280', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t2}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section Count Comparison */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '12px'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333' }}>
                📊 Total Sections Available
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px'
              }}>
                <div>
                  <h4 style={{ color: '#6b7280', marginBottom: '10px' }}>The Minimalist includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✓ Personal Info</li>
                    <li>✓ Image Section</li>
                    <li>✓ Professional Summary</li>
                    <li>✓ Experience (1)</li>
                    <li>✓ Education (1)</li>
                    <li>✓ Skills (7)</li>
                    <li>✓ Projects (1)</li>
                    <li style={{ color: '#999' }}>✗ Languages</li>
                    <li style={{ color: '#999' }}>✗ Certifications</li>
                    <li style={{ color: '#999' }}>✗ Awards</li>
                    <li style={{ color: '#999' }}>✗ Tools</li>
                    <li style={{ color: '#999' }}>✗ Core Strengths</li>
                  </ul>
                  <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Total: 7 sections</div>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Architect includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✓ Personal Info</li>
                    <li>✓ Experience (3)</li>
                    <li>✓ Skills (8)</li>
                    <li>✓ Languages (5)</li>
                    <li>✓ Education (3)</li>
                    <li>✓ Certifications (3)</li>
                    <li>✓ Projects (3)</li>
                    <li>✓ Awards (2)</li>
                    <li>✓ Tools (6)</li>
                    <li>✓ Core Strengths (4)</li>
                  </ul>
                  <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Total: 10 sections</div>
                </div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginTop: '40px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#6b7280', marginBottom: '15px' }}>
                  ✓ The Minimalist - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template5.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#6b7280', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Minimalist - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template5.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  ✓ The Architect - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template6.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Architect - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template6.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Visual Comparison Tab */}
        {activeTab === 'visual' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
              Visual Comparison
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '40px' }}>
              Ultra-clean minimalism vs comprehensive technical structure
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '20px', textAlign: 'center' }}>
                  The Minimalist
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template5.image}
                    alt="The Minimalist template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/5" style={{ color: '#6b7280', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px', textAlign: 'center' }}>
                  The Architect
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template6.image}
                    alt="The Architect template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/6" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Visual Differences */}
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '30px',
              marginTop: '40px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Key Visual Differences
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#6b7280', marginBottom: '10px' }}>The Minimalist</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Ultra-clean white space</li>
                    <li>Isolated sections with borders</li>
                    <li>Minimalist typography</li>
                    <li>Single experience focus</li>
                    <li>Simple skills grid</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Architect</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Technical grid layout</li>
                    <li>Side-by-side education boxes</li>
                    <li>Professional timeline with connectors</li>
                    <li>Type badges for roles</li>
                    <li>Multiple section organization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industry Fit Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Which Template Fits Your Industry?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #6b7280'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '20px' }}>
                  The Minimalist
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template5.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e5e7eb',
                      color: '#4b5563',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Minimalist is perfect for modern tech companies, startups, and design-focused organizations. Its clean, distraction-free design appeals to hiring managers who value clarity and precision. Software engineers, UX designers, and recent graduates will find this template helps their content shine.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Entry to Mid-Level (0-5 years)
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #2563eb'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px' }}>
                  The Architect
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template6.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#dbeafe',
                      color: '#1e40af',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Architect is built for technical professionals who need to showcase comprehensive experience. Engineers, architects, scientists, and researchers will appreciate the structured layout that can accommodate multiple roles, projects, and certifications. The timeline visualization helps tell a story of technical growth.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Mid to Senior Level (3-15+ years)
                </div>
              </div>
            </div>

            {/* Industry Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Quick Decision Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#6b7280', marginBottom: '10px' }}>Choose The Minimalist if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're in tech, design, or startups</li>
                    <li style={{ marginBottom: '8px' }}>You have 1 key experience to highlight</li>
                    <li style={{ marginBottom: '8px' }}>You prefer clean, distraction-free design</li>
                    <li style={{ marginBottom: '8px' }}>You're a recent graduate or entry-level</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>Choose The Architect if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're in engineering, science, or research</li>
                    <li style={{ marginBottom: '8px' }}>You have 3+ experiences to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You need multiple optional sections</li>
                    <li style={{ marginBottom: '8px' }}>You want to show career progression visually</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final Verdict Tab */}
        {activeTab === 'verdict' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Final Verdict: Which One Should You Choose?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #d1d5db'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>✨</div>
                <h3 style={{ fontSize: '1.5rem', color: '#6b7280', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Minimalist
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Minimalist is the perfect choice for those who believe less is more. Its ultra-clean design lets your content speak for itself without distractions. If you're in tech, design, or just starting your career, this template presents you as focused and modern. Perfect for applications where clarity and ATS compatibility are priorities.
                </p>
                <Link 
                  href="/editor/5"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#6b7280',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Minimalist
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #e6f0ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #bfdbfe'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🏗️</div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Architect
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Architect is the comprehensive choice for technical professionals with extensive experience. Its structured layout can accommodate multiple roles, projects, and certifications. If you're an engineer, scientist, or researcher who needs to showcase depth and breadth, this template provides the framework to tell your complete professional story.
                </p>
                <Link 
                  href="/editor/6"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#2563eb',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Architect
                </Link>
              </div>
            </div>

            {/* Expert Tip */}
            <div style={{
              background: '#fff3cd',
              borderRadius: '12px',
              padding: '25px',
              border: '1px solid #ffc107',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#856404' }}>
                💡 Expert Tip: Experience Level Matters Most
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The single biggest factor in choosing between these templates is your experience level. If you have 0-5 years of experience, The Minimalist's focused design highlights your potential. If you have 5+ years with multiple roles, The Architect's comprehensive structure better showcases your career progression. Choose based on your story, not just the design.
              </p>
            </div>

            {/* Decision Matrix */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Experience Level Decision Matrix
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '15px',
                textAlign: 'center'
              }}>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa' }}>Experience Level</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#6b7280' }}>The Minimalist</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#2563eb' }}>The Architect</div>
                
                <div>Entry Level (0-2 years)</div>
                <div style={{ color: '#6b7280' }}>✓✓ Perfect</div>
                <div style={{ color: '#999' }}>✗ Too complex</div>
                
                <div>Junior (2-4 years)</div>
                <div style={{ color: '#6b7280' }}>✓ Great choice</div>
                <div style={{ color: '#2563eb' }}>✓ Also works</div>
                
                <div>Mid-Level (4-8 years)</div>
                <div style={{ color: '#6b7280' }}>✓ Good option</div>
                <div style={{ color: '#2563eb' }}>✓✓ Ideal</div>
                
                <div>Senior (8-15 years)</div>
                <div style={{ color: '#999' }}>✗ Too limited</div>
                <div style={{ color: '#2563eb' }}>✓✓ Perfect</div>
                
                <div>Lead/Principal (15+ years)</div>
                <div style={{ color: '#999' }}>✗ Not enough space</div>
                <div style={{ color: '#2563eb' }}>✓✓ Perfect</div>
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
                q: 'Which template is better for software engineers?',
                a: 'For software engineers, it depends on your level. Junior engineers may prefer The Minimalist for its clean, modern design. Senior engineers with multiple roles and projects will benefit from The Architect\'s comprehensive structure.'
              },
              {
                q: 'Can I add certifications to The Minimalist?',
                a: 'No, The Minimalist focuses on core sections only. If certifications are crucial for your role, choose The Architect which includes a dedicated certifications section.'
              },
              {
                q: 'Which template has more space for projects?',
                a: 'The Architect supports up to 3 projects, while The Minimalist only supports 1. For project-heavy portfolios, The Architect is the better choice.'
              },
              {
                q: 'Are both templates ATS-friendly?',
                a: 'Yes! Both templates are fully ATS-optimized. The Minimalist has a cleaner structure that some ATS systems prefer, while The Architect uses standard formatting that passes all modern ATS checks.'
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
          <p>© {new Date().getFullYear()} Free Resume Builder. All 20 templates are free forever.</p>
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