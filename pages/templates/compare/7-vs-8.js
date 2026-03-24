// pages/templates/compare/7-vs-8.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate7vs8() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Scholar vs The Traditionalist",
    "description": "Compare Template 7 (The Scholar) and Template 8 (The Traditionalist) side by side. Find out which classic template is best for academic and traditional careers.",
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
      "ratingValue": "4.8",
      "ratingCount": "134"
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
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Templates",
        "item": "https://freeresumemakers.com/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Compare Templates",
        "item": "https://freeresumemakers.com/templates/compare"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "The Scholar vs The Traditionalist",
        "item": "https://freeresumemakers.com/templates/compare/7-vs-8"
      }
    ]
  };

  // Template data for comparison
  const template7 = {
    id: 7,
    name: 'The Scholar',
    category: 'Academic/Research',
    description: 'Elegant geometric design with sidebar achievements and professional timeline. Perfect for academics and researchers.',
    longDescription: 'The Scholar template features elegant geometric accents and a sidebar achievements section. The professional timeline design showcases academic and research progression. Ideal for academics, researchers, educators, and PhD candidates who need to highlight publications, research, and academic achievements.',
    features: [
      'Elegant geometric accents',
      'Sidebar achievements section',
      'Professional timeline design',
      'Geometric shapes in sidebar',
      '3 experience entries',
      '2 projects maximum',
      '8 skills maximum',
      '2 languages maximum',
      'Certifications section',
      'Awards section',
      'Tools section',
      'Core strengths section'
    ],
    image: '/assets/template-previews/template-7.png',
    experienceCount: '3',
    skillsCount: '8',
    languagesCount: '2',
    projectsCount: '2',
    certificationsCount: '2',
    awardsCount: '1',
    toolsCount: '3',
    coreStrengthsCount: '3',
    layout: 'Geometric with sidebar',
    color: 'Academic Green',
    bestFor: ['Academics', 'Researchers', 'Educators', 'PhD candidates', 'Scientists'],
    industries: ['Academia', 'Research', 'Education', 'Science', 'Higher Education'],
    pros: [
      'Elegant geometric design stands out',
      'Sidebar achievements highlight academic work',
      'Professional timeline for career progression',
      'Good balance of sections',
      'Perfect for academic job applications'
    ],
    cons: [
      'Geometric elements may not suit all industries',
      'Limited to 2 projects',
      'May be too decorative for conservative fields'
    ]
  };

  const template8 = {
    id: 8,
    name: 'The Traditionalist',
    category: 'Classic/Conservative',
    description: 'Clean black & white design with side-by-side education layout. Trusted by traditional industries and government roles.',
    longDescription: 'The Traditionalist template features a clean black & white design with side-by-side education layout. No colors, no distractions - just pure content presented in a professional, conservative format. Trusted by legal, government, and traditional industries where conservative design is preferred. Fully ATS-optimized and printer-friendly.',
    features: [
      'Clean black & white design',
      'Side-by-side education layout',
      'Contact sidebar',
      'ATS-optimized structure',
      '2 experience entries',
      '6 skills maximum',
      '4 languages maximum',
      '2 projects maximum',
      '2 awards maximum',
      '4 tools maximum',
      '4 core strengths maximum',
      '2 certifications maximum'
    ],
    image: '/assets/template-previews/template-8.png',
    experienceCount: '2',
    skillsCount: '6',
    languagesCount: '4',
    projectsCount: '2',
    awardsCount: '2',
    toolsCount: '4',
    coreStrengthsCount: '4',
    certificationsCount: '2',
    layout: 'Classic black & white',
    color: 'Monochrome',
    bestFor: ['Legal professionals', 'Government employees', 'Public sector', 'Nonprofit', 'Traditional industries'],
    industries: ['Legal', 'Government', 'Public Sector', 'Nonprofit', 'Traditional'],
    pros: [
      'Timeless black & white design',
      'Side-by-side education saves space',
      'ATS-optimized for all systems',
      'Printer-friendly (no color ink needed)',
      'Trusted by conservative industries'
    ],
    cons: [
      'No color or visual elements',
      'May look too plain for creative roles',
      'Limited to 2 experience entries',
      'Less modern than other templates'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 7 (The Scholar) and Template 8 (The Traditionalist). The Scholar features elegant geometric design for academics, while The Traditionalist offers clean black & white for conservative industries. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 7 vs 8: The Scholar vs The Traditionalist | Compare Classic Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 7 vs 8, The Scholar template, The Traditionalist template, academic resume, traditional resume, black and white resume, geometric resume, best resume template for academics, best resume template for legal" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 7 vs 8: The Scholar vs The Traditionalist | Compare Classic Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemakers.com/assets/og/compare-7-vs-8.jpg" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/7-vs-8" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 7 vs 8: The Scholar vs The Traditionalist" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemakers.com/assets/og/compare-7-vs-8.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/7-vs-8" />
        
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
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <Link href="/templates/compare" style={{ color: '#666', textDecoration: 'none' }}>Compare</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <span style={{ color: '#333', fontWeight: 500 }}>The Scholar vs The Traditionalist</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 7 vs Template 8: <span style={{ color: '#059669' }}>The Scholar</span> vs <span style={{ color: '#4b5563' }}>The Traditionalist</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Elegant academic design vs timeless black & white conservative. Compare these two classic templates for scholarly and traditional careers.
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
              {/* Template 7 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #059669'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#059669',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 7</span>
                  <img 
                    src={template7.image}
                    alt="The Scholar template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#059669' }}>
                  {template7.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template7.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template7.description}
                </p>
                <Link 
                  href="/templates/7"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#059669',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 7
                </Link>
                <Link 
                  href="/editor/7"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#059669',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #059669'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 8 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #4b5563'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#4b5563',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 8</span>
                  <img 
                    src={template8.image}
                    alt="The Traditionalist template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#4b5563' }}>
                  {template8.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template8.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template8.description}
                </p>
                <Link 
                  href="/templates/8"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#4b5563',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 8
                </Link>
                <Link 
                  href="/editor/8"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#4b5563',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #4b5563'
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
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#059669' }}>
                    {template7.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4b5563' }}>
                    {template8.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Experience</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#059669' }}>
                    {template7.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4b5563' }}>
                    {template8.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#059669' }}>
                    {template7.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4b5563' }}>
                    {template8.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#059669' }}>
                    {template7.projectsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4b5563' }}>
                    {template8.projectsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#059669' }}>
                    Geometric
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4b5563' }}>
                    B&W
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Style</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#059669', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template7.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#4b5563', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template8.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#059669' }}>The Scholar</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#4b5563' }}>The Traditionalist</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Design Style', t1: 'Elegant geometric with accents', t2: 'Clean black & white' },
                    { feature: 'Color Scheme', t1: 'Academic Green with geometric shapes', t2: 'Monochrome (no colors)' },
                    { feature: 'Sidebar Achievements', t1: '✓ Yes', t2: '✗ No' },
                    { feature: 'Side-by-Side Education', t1: '✗ No', t2: '✓ Yes' },
                    { feature: 'Professional Timeline', t1: '✓ Yes', t2: '✗ No' },
                    { feature: 'Geometric Shapes', t1: '✓ Yes', t2: '✗ No' },
                    { feature: 'Maximum Experience Entries', t1: '3', t2: '2' },
                    { feature: 'Maximum Skills', t1: '8', t2: '6' },
                    { feature: 'Maximum Languages', t1: '2', t2: '4' },
                    { feature: 'Maximum Projects', t1: '2', t2: '2' },
                    { feature: 'Certifications Section', t1: '✓ Yes (2 max)', t2: '✓ Yes (2 max)' },
                    { feature: 'Awards Section', t1: '✓ Yes (1 max)', t2: '✓ Yes (2 max)' },
                    { feature: 'Tools Section', t1: '✓ Yes (3 max)', t2: '✓ Yes (4 max)' },
                    { feature: 'Core Strengths Section', t1: '✓ Yes (3 max)', t2: '✓ Yes (4 max)' },
                    { feature: 'Image Section', t1: '✗ No', t2: '✓ Yes' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 14 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#4b5563', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t2}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Optional Sections Comparison */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '12px'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333' }}>
                📊 Optional Sections Comparison
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px'
              }}>
                <div>
                  <h4 style={{ color: '#059669', marginBottom: '10px' }}>The Scholar includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✓ Certifications (2 max)</li>
                    <li>✓ Awards (1 max)</li>
                    <li>✓ Tools (3 max)</li>
                    <li>✓ Core Strengths (3 max)</li>
                    <li>✗ No image section</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#4b5563', marginBottom: '10px' }}>The Traditionalist includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✓ Certifications (2 max)</li>
                    <li>✓ Awards (2 max)</li>
                    <li>✓ Tools (4 max)</li>
                    <li>✓ Core Strengths (4 max)</li>
                    <li>✓ Image section included</li>
                  </ul>
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
                <h3 style={{ fontSize: '1.3rem', color: '#059669', marginBottom: '15px' }}>
                  ✅ The Scholar - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template7.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#059669', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Scholar - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template7.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#4b5563', marginBottom: '15px' }}>
                  ✅ The Traditionalist - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template8.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#4b5563', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Traditionalist - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template8.cons.map((item, index) => (
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
              Elegant geometric design vs clean black & white conservative
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#059669', marginBottom: '20px', textAlign: 'center' }}>
                  The Scholar (Geometric)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template7.image}
                    alt="The Scholar template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/7" style={{ color: '#059669', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '20px', textAlign: 'center' }}>
                  The Traditionalist (Black & White)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template8.image}
                    alt="The Traditionalist template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/8" style={{ color: '#4b5563', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#059669', marginBottom: '10px' }}>The Scholar</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Geometric shapes in sidebar</li>
                    <li>Academic green color accents</li>
                    <li>Professional timeline design</li>
                    <li>Sidebar achievements section</li>
                    <li>Elegant, distinctive appearance</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#4b5563', marginBottom: '10px' }}>The Traditionalist</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Pure black & white design</li>
                    <li>No colors or decorative elements</li>
                    <li>Side-by-side education boxes</li>
                    <li>Contact sidebar layout</li>
                    <li>Clean, conservative appearance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Print Consideration Note */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <p style={{ margin: 0, color: '#856404', fontSize: '0.95rem' }}>
                <strong>📝 Print Note:</strong> The Traditionalist is optimized for black & white printing - no color ink needed! The Scholar uses colored accents that will print in grayscale or color depending on your printer.
              </p>
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
                borderTop: '5px solid #059669'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#059669', marginBottom: '20px' }}>
                  The Scholar
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template7.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#d1fae5',
                      color: '#065f46',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Scholar is purpose-built for academia and research. Its elegant geometric design and sidebar achievements section highlight publications, research grants, and academic honors. Perfect for faculty positions, postdoctoral applications, and research roles where scholarly output matters.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> PhD Candidates to Professors
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #4b5563'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '20px' }}>
                  The Traditionalist
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template8.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e5e7eb',
                      color: '#1f2937',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Traditionalist is trusted by the most conservative industries. Law firms, government agencies, and public sector organizations prefer its no-nonsense black & white format. The side-by-side education layout efficiently presents credentials, while the clean design ensures your content gets full attention.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Entry to Executive (All levels)
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
                  <h4 style={{ color: '#059669', marginBottom: '10px' }}>Choose The Scholar if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're in academia, research, or education</li>
                    <li style={{ marginBottom: '8px' }}>You need to highlight publications and research</li>
                    <li style={{ marginBottom: '8px' }}>You want a distinctive, elegant design</li>
                    <li style={{ marginBottom: '8px' }}>You have 3+ experiences to showcase</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#4b5563', marginBottom: '10px' }}>Choose The Traditionalist if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're in legal, government, or public sector</li>
                    <li style={{ marginBottom: '8px' }}>You need a conservative, no-frills format</li>
                    <li style={{ marginBottom: '8px' }}>You'll be printing many copies (no color ink)</li>
                    <li style={{ marginBottom: '8px' }}>You want side-by-side education display</li>
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
                background: 'linear-gradient(135deg, #d1fae5 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #a7f3d0'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>📚</div>
                <h3 style={{ fontSize: '1.5rem', color: '#059669', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Scholar
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Scholar is the perfect choice for academic and research careers. Its elegant geometric design and sidebar achievements section are specifically designed to highlight publications, grants, and scholarly work. If you're applying for faculty positions, postdoctoral fellowships, or research roles, this template helps your academic credentials shine.
                </p>
                <Link 
                  href="/editor/7"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#059669',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Scholar
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #e5e7eb 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #d1d5db'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>⚖️</div>
                <h3 style={{ fontSize: '1.5rem', color: '#4b5563', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Traditionalist
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Traditionalist is the trusted choice for conservative industries. Its clean black & white design has no distractions - just your qualifications presented in a format that legal, government, and public sector recruiters instantly recognize and respect. The side-by-side education layout efficiently presents your credentials while maximizing space for experience.
                </p>
                <Link 
                  href="/editor/8"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#4b5563',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Traditionalist
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
                💡 Expert Tip: Know Your Audience
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The choice between these templates often comes down to organizational culture. Research the institutions you're applying to - universities and research centers appreciate The Scholar's elegant design, while law firms and government agencies typically prefer The Traditionalist's conservative format. When in doubt, check the organization's website for visual clues about their preferred aesthetic.
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
                Quick Decision Matrix
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '15px',
                textAlign: 'center'
              }}>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa' }}>Your Priority</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#059669' }}>The Scholar</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#4b5563' }}>The Traditionalist</div>
                
                <div>Academic positions</div>
                <div style={{ color: '#059669' }}>✓✓ Perfect</div>
                <div style={{ color: '#4b5563' }}>✓ Works</div>
                
                <div>Legal / Government</div>
                <div style={{ color: '#999' }}>✗ Too decorative</div>
                <div style={{ color: '#4b5563' }}>✓✓ Perfect</div>
                
                <div>Need image section</div>
                <div style={{ color: '#999' }}>✗ Not available</div>
                <div style={{ color: '#4b5563' }}>✓ Yes</div>
                
                <div>3+ experiences</div>
                <div style={{ color: '#059669' }}>✓ Yes (3 max)</div>
                <div style={{ color: '#999' }}>✗ Only 2</div>
                
                <div>Side-by-side education</div>
                <div style={{ color: '#999' }}>✗ No</div>
                <div style={{ color: '#4b5563' }}>✓✓ Yes</div>
                
                <div>Printer-friendly B&W</div>
                <div style={{ color: '#059669' }}>✓ OK</div>
                <div style={{ color: '#4b5563' }}>✓✓ Perfect</div>
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
                q: 'Which template is better for academic job applications?',
                a: 'The Scholar is specifically designed for academic positions. Its sidebar achievements section is perfect for highlighting publications, research grants, and conference presentations that matter in academia.'
              },
              {
                q: 'Which template is better for law firm applications?',
                a: 'The Traditionalist is the preferred choice for law firms. Its conservative black & white design aligns with legal industry expectations, and the side-by-side education layout efficiently presents your law school credentials.'
              },
              {
                q: 'Can I add a photo to The Scholar?',
                a: 'No, The Scholar does not include an image section. If you need to include a professional headshot, choose The Traditionalist which includes an image section.'
              },
              {
                q: 'Which template has more space for work experience?',
                a: 'The Scholar supports up to 3 experience entries, while The Traditionalist is limited to 2. If you have extensive work history, The Scholar is the better choice.'
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