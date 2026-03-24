// pages/templates/compare/1-vs-2.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate1vs2() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Professional vs The Innovator",
    "description": "Compare Template 1 (The Professional) and Template 2 (The Innovator) side by side. Find out which resume template is best for your career.",
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
      "ratingCount": "156"
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
        "name": "The Professional vs The Innovator",
        "item": "https://freeresumemakers.com/templates/compare/1-vs-2"
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
    bestFor: ['Business professionals', 'Finance roles', 'Law careers', 'Corporate executives'],
    industries: ['Banking', 'Consulting', 'Legal', 'Corporate'],
    pros: [
      'ATS-friendly structure',
      'Clear visual hierarchy',
      'Experience type filtering helps organize diverse roles',
      'Professional appearance trusted by recruiters'
    ],
    cons: [
      'Less creative/visual than modern templates',
      'Limited space for extensive project portfolios'
    ]
  };

  const template2 = {
    id: 2,
    name: 'The Innovator',
    category: 'Creative/Tech',
    description: 'Modern two-column design with visual connectors and centered header. Ideal for tech, marketing, and creative roles.',
    longDescription: 'The Innovator template features unique visual connectors between experiences, a centered name header, and modern typography. The design stands out while maintaining readability, making it perfect for tech professionals, designers, marketers, and creative roles where visual appeal matters.',
    features: [
      'Visual connectors between experiences',
      'Centered header with name',
      'Modern sans-serif typography',
      'Contact pills/badges',
      'Professional timeline design',
      'Skills tags with hover effects',
      'Project showcase section',
      'Clean sidebar organization'
    ],
    image: '/assets/template-previews/template-2.png',
    experienceCount: '2',
    skillsCount: '5',
    languagesCount: '2',
    layout: 'Two-column with visual connectors',
    color: 'Creative Purple',
    bestFor: ['Tech professionals', 'Marketing specialists', 'Creative designers', 'Startup employees'],
    industries: ['Technology', 'Marketing', 'Advertising', 'Media', 'Startups'],
    pros: [
      'Modern, eye-catching design',
      'Visual connectors create narrative flow',
      'Great for showcasing creative work',
      'Stand out from traditional resumes'
    ],
    cons: [
      'May be too creative for conservative industries',
      'Limited experience entries (2 max)'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 1 (The Professional) vs Template 2 (The Innovator). The Professional offers classic corporate design with experience filtering, while The Innovator features modern visual connectors. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 1 vs 2: The Professional vs The Innovator | Compare Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 1 vs 2, The Professional template, The Innovator template, corporate vs creative resume, best resume template for business, best resume template for tech" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 1 vs 2: The Professional vs The Innovator | Compare Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemakers.com/assets/og/compare-1-vs-2.jpg" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/1-vs-2" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs 2: The Professional vs The Innovator" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemakers.com/assets/og/compare-1-vs-2.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/1-vs-2" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Professional vs The Innovator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 2: <span style={{ color: '#0070f3' }}>The Professional</span> vs <span style={{ color: '#7928ca' }}>The Innovator</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Which resume template is right for your career? Compare features, layouts, and industry suitability.
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

              {/* Template 2 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #7928ca'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#7928ca',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 2</span>
                  <img 
                    src={template2.image}
                    alt="The Innovator template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#7928ca' }}>
                  {template2.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template2.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template2.description}
                </p>
                <Link 
                  href="/templates/2"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#7928ca',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 2
                </Link>
                <Link 
                  href="/editor/2"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#7928ca',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #7928ca'
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
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#7928ca' }}>
                    {template2.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Max Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#7928ca' }}>
                    {template2.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#7928ca' }}>
                    {template2.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages Section</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#7928ca', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template2.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#7928ca' }}>The Innovator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Two-column with gradient header', t2: 'Two-column with visual connectors' },
                    { feature: 'Typography', t1: 'Classic serif fonts', t2: 'Modern sans-serif' },
                    { feature: 'Experience Filtering', t1: '✓ Yes (job, internship, project)', t2: '✗ No' },
                    { feature: 'Visual Connectors', t1: '✗ No', t2: '✓ Yes' },
                    { feature: 'Centered Header', t1: '✗ No', t2: '✓ Yes' },
                    { feature: 'Contact Pills/Badges', t1: 'Standard contact section', t2: 'Modern contact pills' },
                    { feature: 'Skills Display', t1: 'Grid layout (9 skills)', t2: 'Tags layout (5 skills)' },
                    { feature: 'Experience Badges', t1: '✓ Yes', t2: '✗ No' },
                    { feature: 'Professional Summary Box', t1: '✓ Yes', t2: '✓ Yes' },
                    { feature: 'Languages Section', t1: '✓ Yes (4 max)', t2: '✓ Yes (2 max)' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 9 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#7928ca', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
                  ✅ The Professional - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0070f3', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Professional - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#7928ca', marginBottom: '15px' }}>
                  ✅ The Innovator - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template2.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#7928ca', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Innovator - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template2.cons.map((item, index) => (
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
              See how these templates look side by side
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', marginBottom: '20px', textAlign: 'center' }}>
                  The Professional
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
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#7928ca', marginBottom: '20px', textAlign: 'center' }}>
                  The Innovator
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template2.image}
                    alt="The Innovator template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/2" style={{ color: '#7928ca', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#0070f3', marginBottom: '10px' }}>The Professional</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Gradient header in professional blue</li>
                    <li>Classic serif typography</li>
                    <li>Experience type badges</li>
                    <li>Traditional sidebar layout</li>
                    <li>Professional summary box</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#7928ca', marginBottom: '10px' }}>The Innovator</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Centered name header</li>
                    <li>Modern sans-serif fonts</li>
                    <li>Visual connectors between experiences</li>
                    <li>Contact pills/badges</li>
                    <li>Cleaner, more open layout</li>
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
                  The Professional template is trusted by recruiters in conservative industries. Its clean, structured layout emphasizes reliability and attention to detail. The experience type filtering helps organize diverse roles, making it perfect for professionals with varied career paths.
                </p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #7928ca'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#7928ca', marginBottom: '20px' }}>
                  The Innovator
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template2.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#f3e5ff',
                      color: '#7928ca',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Innovator template helps creative professionals stand out. Its visual connectors create a narrative flow that showcases your career progression. Modern typography and contact pills appeal to startups and agencies looking for candidates who understand modern design principles.
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
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You work in banking, law, or consulting</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to Fortune 500 companies</li>
                    <li style={{ marginBottom: '8px' }}>You have experience in multiple role types</li>
                    <li style={{ marginBottom: '8px' }}>You prefer traditional resume formats</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#7928ca', marginBottom: '10px' }}>Choose The Innovator if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You work in tech, marketing, or design</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to startups or agencies</li>
                    <li style={{ marginBottom: '8px' }}>You want your resume to stand out visually</li>
                    <li style={{ marginBottom: '8px' }}>You prefer modern, clean design</li>
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
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🏢</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Professional
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Professional is the safe, reliable choice for corporate careers. Its structured layout and experience filtering make it ideal for showcasing career progression in traditional industries. Recruiters in banking, law, and consulting will recognize and appreciate this format.
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
                background: 'linear-gradient(135deg, #f9f0ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #e5ccff'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', color: '#7928ca', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Innovator
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Innovator helps you stand out in creative fields. Its visual connectors and modern design tell a compelling story of your career. Tech companies, marketing agencies, and startups will appreciate the fresh approach that still maintains professional readability.
                </p>
                <Link 
                  href="/editor/2"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#7928ca',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Innovator
                </Link>
              </div>
            </div>

            {/* Expert Tip */}
            <div style={{
              background: '#fff3cd',
              borderRadius: '12px',
              padding: '25px',
              border: '1px solid #ffc107'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#856404' }}>
                💡 Expert Tip: You Can Have Both
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                Many professionals create multiple versions of their resume. Consider keeping both templates in your toolkit - use The Professional for corporate applications and The Innovator for creative roles. Our free resume builder lets you create unlimited resumes, so you can experiment with both!
              </p>
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
                q: 'Which template is better for ATS systems?',
                a: 'Both templates are ATS-friendly, but The Professional has a more traditional structure that some older ATS systems prefer. The Innovator uses standard fonts and clean layout that also passes ATS checks.'
              },
              {
                q: 'Can I use both templates for different applications?',
                a: 'Absolutely! Our free resume builder lets you create unlimited resumes. Many professionals keep multiple versions for different industries.'
              },
              {
                q: 'Which template has more space for skills?',
                a: 'The Professional supports up to 9 skills in a grid layout, while The Innovator focuses on 5 key skills with tag styling.'
              },
              {
                q: 'Are these templates really free?',
                a: 'Yes! All 20 templates are completely free with no hidden costs. You can create, download, and print as many resumes as you need.'
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