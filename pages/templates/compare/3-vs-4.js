// pages/templates/compare/3-vs-4.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate3vs4() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Executive vs The Strategist",
    "description": "Compare Template 3 (The Executive) and Template 4 (The Strategist) side by side. Find out which premium template is best for senior roles.",
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
      "ratingCount": "189"
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
        "name": "The Executive vs The Strategist",
        "item": "https://freeresumemakers.com/templates/compare/3-vs-4"
      }
    ]
  };

  // Template data for comparison
  const template3 = {
    id: 3,
    name: 'The Executive',
    category: 'Executive/Leadership',
    description: 'Sophisticated dark theme with sidebar focus on certifications. Designed for senior executives and directors.',
    longDescription: 'The Executive template features a sophisticated dark color scheme with accent colors that convey power and authority. The sidebar focuses on certifications and core strengths, ideal for showcasing leadership qualifications. Perfect for senior executives, directors, and experienced professionals with 10+ years of experience.',
    features: [
      'Dark premium theme',
      'Certifications focus section',
      'Core strengths display',
      'Density scaling (ultra-compact to spacious)',
      'Accent color schemes',
      'Sidebar achievements',
      'Executive summary area',
      'Leadership-focused layout',
      'ATS-optimized structure'
    ],
    image: '/assets/template-previews/template-3.png',
    experienceCount: '2',
    skillsCount: '8',
    languagesCount: '3',
    projectsCount: '2',
    awardsCount: '2',
    toolsCount: '4',
    coreStrengthsCount: '4',
    certificationsCount: '2',
    layout: 'Dark premium, sidebar focus',
    color: 'Dark Navy',
    bestFor: ['Senior executives', 'Directors', 'VPs', 'C-Suite professionals', 'Board members'],
    industries: ['Executive Leadership', 'Corporate Board', 'Senior Management', 'Fortune 500', 'Enterprise'],
    pros: [
      'Premium dark theme stands out',
      'Certifications focus ideal for senior roles',
      'Core strengths display for leadership qualities',
      'Density scaling adapts to content volume',
      'Projects authority and experience',
      'Comprehensive optional sections'
    ],
    cons: [
      'Dark theme may not print well on all printers',
      'Limited to 2 experience entries',
      'May be too formal for creative industries'
    ]
  };

  const template4 = {
    id: 4,
    name: 'The Strategist',
    category: 'Consulting/Management',
    description: 'Timeline-based layout with square markers showing career progression. Perfect for consultants and project managers.',
    longDescription: 'The Strategist template uses square timeline markers and visual connectors to create a strategic narrative of career growth. The clean sidebar and main content balance shows structured thinking, perfect for consultants, project managers, strategists, and roles requiring clear career progression visualization.',
    features: [
      'Timeline markers with square design',
      'Career progression visualization',
      'Clean sidebar layout',
      'Structured content organization',
      '4 experience entries maximum',
      '20 skills display',
      'ATS-optimized structure',
      'Professional timeline connectors',
      'Minimalist design focus'
    ],
    image: '/assets/template-previews/template-4.png',
    experienceCount: '4',
    skillsCount: '20',
    languagesCount: '0',
    projectsCount: '0',
    awardsCount: '0',
    toolsCount: '0',
    coreStrengthsCount: '0',
    certificationsCount: '0',
    layout: 'Timeline-based with connectors',
    color: 'Strategic Blue',
    bestFor: ['Consultants', 'Project managers', 'Strategists', 'Management professionals'],
    industries: ['Consulting', 'Project Management', 'Strategy', 'Management', 'Government'],
    pros: [
      'Shows career progression visually',
      'More experience entries (4 vs 2)',
      'Extensive skills display (20 skills)',
      'Perfect for consulting resumes',
      'Clean, minimalist design',
      'Timeline markers create narrative flow'
    ],
    cons: [
      'No languages section',
      'No optional sections (certifications, awards, etc.)',
      'Less suitable for executives needing certifications focus',
      'May be too minimalist for some'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 3 (The Executive) vs Template 4 (The Strategist). The Executive offers premium dark theme with certifications focus, while The Strategist features timeline visualization with 4 experiences. Find your perfect match for senior roles.`;

  return (
    <>
      <Head>
        <title>Template 3 vs 4: The Executive vs The Strategist | Compare Premium Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 3 vs 4, The Executive template, The Strategist template, executive vs consulting resume, dark theme resume, timeline resume, best resume template for executives, best resume template for consultants" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 3 vs 4: The Executive vs The Strategist | Compare Premium Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemakers.com/assets/og/compare-3-vs-4.jpg" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/3-vs-4" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 3 vs 4: The Executive vs The Strategist" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemakers.com/assets/og/compare-3-vs-4.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/3-vs-4" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Executive vs The Strategist</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 3 vs Template 4: <span style={{ color: '#1a2634' }}>The Executive</span> vs <span style={{ color: '#00a86b' }}>The Strategist</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Premium dark authority vs strategic timeline visualization. Compare these two powerful templates for senior professionals.
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
              {/* Template 3 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #1a2634'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#1a2634',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 3</span>
                  <img 
                    src={template3.image}
                    alt="The Executive template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#1a2634' }}>
                  {template3.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template3.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template3.description}
                </p>
                <Link 
                  href="/templates/3"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#1a2634',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 3
                </Link>
                <Link 
                  href="/editor/3"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#1a2634',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #1a2634'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 4 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #00a86b'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#00a86b',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 4</span>
                  <img 
                    src={template4.image}
                    alt="The Strategist template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#00a86b' }}>
                  {template4.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template4.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template4.description}
                </p>
                <Link 
                  href="/templates/4"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#00a86b',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 4
                </Link>
                <Link 
                  href="/editor/4"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#00a86b',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #00a86b'
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.certificationsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.certificationsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Certifications</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    Dark
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    Timeline
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
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#00a86b', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template4.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#1a2634' }}>The Executive</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#00a86b' }}>The Strategist</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Dark premium with sidebar focus', t2: 'Timeline-based with connectors' },
                    { feature: 'Color Theme', t1: 'Dark Navy with accent colors', t2: 'Light/Strategic Blue' },
                    { feature: 'Maximum Experience Entries', t1: '2', t2: '4' },
                    { feature: 'Maximum Skills', t1: '8', t2: '20' },
                    { feature: 'Languages Section', t1: '✓ Yes (3 max)', t2: '✗ No' },
                    { feature: 'Certifications Section', t1: '✓ Yes (2 max)', t2: '✗ No' },
                    { feature: 'Awards Section', t1: '✓ Yes (2 max)', t2: '✗ No' },
                    { feature: 'Tools Section', t1: '✓ Yes (4 max)', t2: '✗ No' },
                    { feature: 'Core Strengths Section', t1: '✓ Yes (4 max)', t2: '✗ No' },
                    { feature: 'Projects Section', t1: '✓ Yes (2 max)', t2: '✗ No' },
                    { feature: 'Density Scaling', t1: '✓ Yes (ultra-compact to spacious)', t2: '✗ No' },
                    { feature: 'Timeline Visualization', t1: '✗ No', t2: '✓ Yes (square markers)' },
                    { feature: 'Visual Connectors', t1: '✗ No', t2: '✓ Yes' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 12 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#1a2634', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#00a86b', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
                  <h4 style={{ color: '#1a2634', marginBottom: '10px' }}>The Executive includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✓ Certifications (2 max)</li>
                    <li>✓ Awards (2 max)</li>
                    <li>✓ Tools (4 max)</li>
                    <li>✓ Core Strengths (4 max)</li>
                    <li>✓ Projects (2 max)</li>
                    <li>✓ Languages (3 max)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#00a86b', marginBottom: '10px' }}>The Strategist includes:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>✗ No certifications</li>
                    <li>✗ No awards</li>
                    <li>✗ No tools</li>
                    <li>✗ No core strengths</li>
                    <li>✗ No projects</li>
                    <li>✗ No languages</li>
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
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginBottom: '15px' }}>
                  ✅ The Executive - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Executive - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#00a86b', marginBottom: '15px' }}>
                  ✅ The Strategist - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template4.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#00a86b', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Strategist - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template4.cons.map((item, index) => (
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
              Dark premium authority vs strategic timeline visualization
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#1a2634', marginBottom: '20px', textAlign: 'center' }}>
                  The Executive (Dark Premium)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template3.image}
                    alt="The Executive template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/3" style={{ color: '#1a2634', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#00a86b', marginBottom: '20px', textAlign: 'center' }}>
                  The Strategist (Timeline)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template4.image}
                    alt="The Strategist template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/4" style={{ color: '#00a86b', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#1a2634', marginBottom: '10px' }}>The Executive</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Dark navy background with accent colors</li>
                    <li>Sidebar certifications focus</li>
                    <li>Density scaling adapts to content</li>
                    <li>Multiple optional sections</li>
                    <li>Premium, authoritative appearance</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#00a86b', marginBottom: '10px' }}>The Strategist</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Light background with timeline markers</li>
                    <li>Square visual connectors</li>
                    <li>Clean, minimalist layout</li>
                    <li>4 experience entries with timeline</li>
                    <li>20 skills display</li>
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
                <strong>📝 Print Note:</strong> The Executive's dark theme may use more ink when printing. The Strategist's light theme is more printer-friendly. Consider digital submission for The Executive.
              </p>
            </div>
          </div>
        )}

        {/* Industry Fit Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Which Template Fits Your Role?
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
                borderTop: '5px solid #1a2634'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#1a2634', marginBottom: '20px' }}>
                  The Executive
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template3.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e0e4e8',
                      color: '#1a2634',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Executive is tailored for senior leadership in established corporations. Its premium dark theme and certifications focus project authority and experience. Perfect for Fortune 500 companies, enterprise organizations, and board-level positions.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Director to C-Suite (15+ years)
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #00a86b'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#00a86b', marginBottom: '20px' }}>
                  The Strategist
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template4.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e0f5e9',
                      color: '#00a86b',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Strategist is designed for consulting and project management roles where career progression visualization matters. The timeline format helps tell a story of growth and achievement. Preferred by McKinsey, BCG, Bain-style firms and government strategic roles.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Consultant to Partner (5-20 years)
                </div>
              </div>
            </div>

            {/* Role Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Role-Based Decision Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#1a2634', marginBottom: '10px' }}>Choose The Executive if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're a Director, VP, or C-Suite executive</li>
                    <li style={{ marginBottom: '8px' }}>You have multiple certifications to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You need to highlight awards and achievements</li>
                    <li style={{ marginBottom: '8px' }}>You work in traditional corporate environments</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#00a86b', marginBottom: '10px' }}>Choose The Strategist if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're a consultant, project manager, or strategist</li>
                    <li style={{ marginBottom: '8px' }}>You have 3-4 experiences to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You want to visualize career progression</li>
                    <li style={{ marginBottom: '8px' }}>You need extensive skills display (20 skills)</li>
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
                background: 'linear-gradient(135deg, #e8ecf0 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #1a2634'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>👑</div>
                <h3 style={{ fontSize: '1.5rem', color: '#1a2634', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Executive
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Executive is the ultimate choice for senior leadership. Its premium dark theme and comprehensive optional sections (certifications, awards, tools) let you showcase the full scope of your career achievements. If you're a director, VP, or C-suite executive who needs to project authority, this is your template.
                </p>
                <Link 
                  href="/editor/3"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#1a2634',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Executive
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #e6f7f0 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #a3e0c0'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>📊</div>
                <h3 style={{ fontSize: '1.5rem', color: '#00a86b', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Strategist
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Strategist helps you stand out in consulting and project management. Its timeline visualization tells a compelling story of your career progression. If you have multiple experiences to showcase (up to 4) and want to emphasize strategic thinking with extensive skills (20), this is your template.
                </p>
                <Link 
                  href="/editor/4"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#00a86b',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Strategist
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
                💡 Expert Tip: Content vs Presentation
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The choice between these templates comes down to what you need to showcase. The Executive is for depth (multiple sections with certifications and awards), while The Strategist is for breadth (more experiences and skills). If you have extensive credentials, choose The Executive. If you have a clear career progression story, choose The Strategist.
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
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#1a2634' }}>The Executive</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#00a86b' }}>The Strategist</div>
                
                <div>Multiple certifications</div>
                <div style={{ color: '#1a2634' }}>✓✓ Yes (2 max)</div>
                <div style={{ color: '#999' }}>✗ None</div>
                
                <div>Awards to showcase</div>
                <div style={{ color: '#1a2634' }}>✓✓ Yes (2 max)</div>
                <div style={{ color: '#999' }}>✗ None</div>
                
                <div>4+ work experiences</div>
                <div style={{ color: '#999' }}>✗ Only 2</div>
                <div style={{ color: '#00a86b' }}>✓✓ Yes (4 max)</div>
                
                <div>20+ skills to display</div>
                <div style={{ color: '#999' }}>✗ Only 8</div>
                <div style={{ color: '#00a86b' }}>✓✓ Yes (20 max)</div>
                
                <div>Need languages section</div>
                <div style={{ color: '#1a2634' }}>✓ Yes (3 max)</div>
                <div style={{ color: '#999' }}>✗ None</div>
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
                q: 'Which template is better for executives?',
                a: 'The Executive is specifically designed for senior leadership. Its premium dark theme and certifications focus project authority that recruiters expect at the C-suite level.'
              },
              {
                q: 'Which template is better for consultants?',
                a: 'The Strategist is ideal for consultants. Its timeline visualization shows career progression clearly, and the extensive skills display (20 skills) is perfect for showcasing diverse expertise.'
              },
              {
                q: 'Can I add certifications to The Strategist?',
                a: 'No, The Strategist does not include a certifications section. If certifications are crucial for your role, choose The Executive instead.'
              },
              {
                q: 'Which template has more optional sections?',
                a: 'The Executive has 6 optional sections (certifications, awards, tools, core strengths, projects, languages). The Strategist focuses only on core content with no optional sections.'
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