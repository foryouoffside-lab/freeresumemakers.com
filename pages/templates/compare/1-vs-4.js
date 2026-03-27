// pages/templates/compare/1-vs-4.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate1vs4() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Professional vs The Strategist",
    "description": "Compare Template 1 (The Professional) and Template 4 (The Strategist) side by side. Find out which structured template is best for your career.",
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
      "ratingCount": "178"
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
        "name": "The Professional vs The Strategist",
        "item": "https://freeresumemaker.xyz/templates/compare/1-vs-4"
      }
    ]
  };

  // Template data for comparison
  const template1 = {
    id: 1,
    name: 'The Professional',
    category: 'Corporate/Traditional',
    description: 'Classic two-column layout with gradient header and experience type filtering. Perfect for business, finance, and law professionals.',
    longDescription: 'The Professional template features a clean two-column design with a sophisticated gradient header. It includes experience type filtering (job, internship, project) and classic serif fonts that convey professionalism and trustworthiness. Ideal for corporate roles in business, finance, law, and management.',
    features: [
      'Experience filtering (job, internship, project)',
      'Classic serif fonts',
      'Gradient header',
      '2-column layout',
      'Experience type badges',
      'Professional summary box',
      'Contact section with icons',
      'Skills grid layout'
    ],
    image: '/assets/template-previews/template-1.png',
    experienceCount: '2',
    skillsCount: '9',
    languagesCount: '4',
    layout: 'Two-column with experience filtering',
    color: 'Professional Blue',
    bestFor: ['Business professionals', 'Finance roles', 'Law careers', 'Corporate managers'],
    industries: ['Banking', 'Consulting', 'Legal', 'Corporate', 'Finance'],
    pros: [
      'ATS-friendly structure',
      'Clear visual hierarchy',
      'Experience type filtering helps organize diverse roles',
      'Professional appearance trusted by recruiters'
    ],
    cons: [
      'Limited to 2 experience entries',
      'Less suitable for extensive project portfolios'
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
      'Professional timeline connectors'
    ],
    image: '/assets/template-previews/template-4.png',
    experienceCount: '4',
    skillsCount: '20',
    languagesCount: '0',
    layout: 'Timeline-based with connectors',
    color: 'Strategic Blue',
    bestFor: ['Consultants', 'Project managers', 'Strategists', 'Management professionals'],
    industries: ['Consulting', 'Project Management', 'Strategy', 'Management', 'Government'],
    pros: [
      'Shows career progression visually',
      'More experience entries (4 vs 2)',
      'Extensive skills display (20 skills)',
      'Perfect for consulting resumes'
    ],
    cons: [
      'No languages section',
      'Less traditional format may not suit all industries'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 1 (The Professional) vs Template 4 (The Strategist). The Professional offers classic corporate design with 2 experiences, while The Strategist features timeline visualization with 4 experiences. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 1 vs 4: The Professional vs The Strategist | Compare Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 1 vs 4, The Professional template, The Strategist template, corporate vs consulting resume, timeline resume, career progression template, best resume template for consultants, project manager resume" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 1 vs 4: The Professional vs The Strategist | Compare Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-1-vs-4.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/1-vs-4" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs 4: The Professional vs The Strategist" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-1-vs-4.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/1-vs-4" />
        
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
          <span style={{ margin: '0 8px', color: '#999' }}>Ã¢â‚¬Âº</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>Ã¢â‚¬Âº</span>
          <Link href="/templates/compare" style={{ color: '#666', textDecoration: 'none' }}>Compare</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>Ã¢â‚¬Âº</span>
          <span style={{ color: '#333', fontWeight: 500 }}>The Professional vs The Strategist</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 4: <span style={{ color: '#0070f3' }}>The Professional</span> vs <span style={{ color: '#00a86b' }}>The Strategist</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Classic corporate meets strategic timeline. Compare these two professional templates to find your perfect match.
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
              {tab === 'overview' && 'Ã°Å¸â€œâ€¹ Overview'}
              {tab === 'features' && 'Ã¢Å¡Â¡ Features'}
              {tab === 'visual' && 'Ã°Å¸Å½Â¨ Visual Comparison'}
              {tab === 'industry' && 'Ã°Å¸ÂÂ¢ Industry Fit'}
              {tab === 'verdict' && 'Ã¢Å¡â€“Ã¯Â¸Â Final Verdict'}
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
              {/* Template 1 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #0070f3'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#0070f3',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 1</span>
                  <img 
                    src={template1.image}
                    alt="The Professional template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#0070f3' }}>
                  {template1.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template1.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template1.description}
                </p>
                <Link 
                  href="/templates/1"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#0070f3',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 1
                </Link>
                <Link 
                  href="/editor/1"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#0070f3',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #0070f3'
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Max Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    {template4.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages Section</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    Standard
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a86b' }}>
                    Timeline
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Layout Style</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#0070f3', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#0070f3' }}>The Professional</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#00a86b' }}>The Strategist</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Two-column with gradient header', t2: 'Timeline-based with connectors' },
                    { feature: 'Experience Display', t1: 'Standard cards', t2: 'Timeline markers with visual connectors' },
                    { feature: 'Maximum Experience Entries', t1: '2', t2: '4' },
                    { feature: 'Maximum Skills', t1: '9', t2: '20' },
                    { feature: 'Languages Section', t1: 'Ã¢Å“â€œ Yes (4 max)', t2: 'Ã¢Å“â€” No' },
                    { feature: 'Experience Filtering', t1: 'Ã¢Å“â€œ Yes (job, internship, project)', t2: 'Ã¢Å“â€” No' },
                    { feature: 'Career Progression Visualization', t1: 'Ã¢Å“â€” No', t2: 'Ã¢Å“â€œ Yes (timeline markers)' },
                    { feature: 'Sidebar Layout', t1: 'Standard sidebar', t2: 'Clean sidebar focus' },
                    { feature: 'Gradient Header', t1: 'Ã¢Å“â€œ Yes', t2: 'Ã¢Å“â€” No' },
                    { feature: 'ATS-Optimized', t1: 'Ã¢Å“â€œ Yes', t2: 'Ã¢Å“â€œ Yes' },
                    { feature: 'Experience Badges', t1: 'Ã¢Å“â€œ Yes', t2: 'Ã¢Å“â€” No' },
                    { feature: 'Professional Summary Box', t1: 'Ã¢Å“â€œ Yes', t2: 'Ã¢Å“â€œ Yes' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 11 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('Ã¢Å“â€œ') ? (
                          <span style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('Ã¢Å“â€œ') ? (
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

            {/* Pros and Cons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginTop: '40px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0070f3', marginBottom: '15px' }}>
                  Ã¢Å“â€¦ The Professional - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0070f3', marginTop: '25px', marginBottom: '15px' }}>
                  Ã¢Å¡Â Ã¯Â¸Â The Professional - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#00a86b', marginBottom: '15px' }}>
                  Ã¢Å“â€¦ The Strategist - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template4.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#00a86b', marginTop: '25px', marginBottom: '15px' }}>
                  Ã¢Å¡Â Ã¯Â¸Â The Strategist - Cons
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
              Standard cards vs timeline visualization - see how these templates compare
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', marginBottom: '20px', textAlign: 'center' }}>
                  The Professional (Standard Cards)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template1.image}
                    alt="The Professional template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/1" style={{ color: '#0070f3', textDecoration: 'underline' }}>
                      View Full Details Ã¢â€ â€™
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#00a86b', marginBottom: '20px', textAlign: 'center' }}>
                  The Strategist (Timeline Visualization)
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
                      View Full Details Ã¢â€ â€™
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
                  <h4 style={{ color: '#0070f3', marginBottom: '10px' }}>The Professional</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Gradient header in professional blue</li>
                    <li>Standard experience cards</li>
                    <li>Experience type badges</li>
                    <li>Classic two-column layout</li>
                    <li>Languages section included</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#00a86b', marginBottom: '10px' }}>The Strategist</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Timeline markers with square design</li>
                    <li>Visual connectors between experiences</li>
                    <li>Clean sidebar focus</li>
                    <li>4 experience entries</li>
                    <li>20 skills display</li>
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
                borderTop: '5px solid #0070f3'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', marginBottom: '20px' }}>
                  The Professional
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template1.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e6f0ff',
                      color: '#0070f3',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Professional is trusted by recruiters in traditional corporate environments. Its clean, structured layout emphasizes reliability and attention to detail. Perfect for banking, law, and general business roles where conservative design is preferred.
                </p>
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
                  <h4 style={{ color: '#0070f3', marginBottom: '10px' }}>Choose The Professional if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You work in banking, law, or corporate</li>
                    <li style={{ marginBottom: '8px' }}>You need languages section for international roles</li>
                    <li style={{ marginBottom: '8px' }}>You have 2 or fewer key experiences to highlight</li>
                    <li style={{ marginBottom: '8px' }}>You prefer traditional resume formats</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#00a86b', marginBottom: '10px' }}>Choose The Strategist if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You work in consulting or project management</li>
                    <li style={{ marginBottom: '8px' }}>You want to visualize career progression</li>
                    <li style={{ marginBottom: '8px' }}>You have 3-4 experiences to showcase</li>
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
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #cce5ff'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>Ã°Å¸â€™Â¼</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Professional
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Professional is the safe, reliable choice for corporate careers. If you work in banking, law, or general business and prefer a traditional format that recruiters instantly recognize, this is your template. The languages section makes it ideal for international roles.
                </p>
                <Link 
                  href="/editor/1"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#0070f3',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Professional
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #e6f7f0 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #a3e0c0'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>Ã°Å¸â€œÅ </div>
                <h3 style={{ fontSize: '1.5rem', color: '#00a86b', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Strategist
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Strategist helps you stand out in consulting and project management. Its timeline visualization tells a compelling story of your career progression. If you have multiple experiences to showcase and want to emphasize strategic thinking, this is your template.
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
                Ã°Å¸â€™Â¡ Expert Tip: Consider Your Experience Count
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The biggest difference between these templates is capacity. If you have 3-4 key experiences you want to highlight, The Strategist is the better choice. If you have 2 or fewer experiences but need to showcase languages, The Professional is ideal. Choose based on your content, not just aesthetics.
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
                Experience Count Decision Matrix
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '15px',
                textAlign: 'center'
              }}>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa' }}>Your Experience</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#0070f3' }}>The Professional</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#00a86b' }}>The Strategist</div>
                
                <div>1-2 experiences</div>
                <div style={{ color: '#0070f3' }}>Ã¢Å“â€œ Perfect</div>
                <div style={{ color: '#00a86b' }}>Ã¢Å“â€œ Also works</div>
                
                <div>3 experiences</div>
                <div style={{ color: '#999' }}>Ã¢Å“â€” Limited space</div>
                <div style={{ color: '#00a86b' }}>Ã¢Å“â€œÃ¢Å“â€œ Ideal</div>
                
                <div>4 experiences</div>
                <div style={{ color: '#999' }}>Ã¢Å“â€” Not enough space</div>
                <div style={{ color: '#00a86b' }}>Ã¢Å“â€œÃ¢Å“â€œ Perfect</div>
                
                <div>Need languages section</div>
                <div style={{ color: '#0070f3' }}>Ã¢Å“â€œÃ¢Å“â€œ Yes</div>
                <div style={{ color: '#999' }}>Ã¢Å“â€” Not available</div>
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
                q: 'Which template has more space for work experience?',
                a: 'The Strategist supports up to 4 experience entries, while The Professional is limited to 2. If you have extensive work history, The Strategist is the better choice.'
              },
              {
                q: 'Do both templates include languages sections?',
                a: 'No. The Professional includes a languages section with up to 4 entries, while The Strategist does not include languages. If you need to showcase language skills, choose The Professional.'
              },
              {
                q: 'Which template is better for consulting roles?',
                a: 'The Strategist is specifically designed for consulting and project management roles. Its timeline visualization helps tell a story of career progression that consulting firms appreciate.'
              },
              {
                q: 'Can I use The Professional for executive roles?',
                a: 'Yes, The Professional works well for executive roles in traditional industries. However, if you want a more premium, authoritative look, consider The Executive (Template 3) instead.'
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
          <p>Ã‚Â© {new Date().getFullYear()} Free Resume Builder. All 20 templates are free forever.</p>
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
