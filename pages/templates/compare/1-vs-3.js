// pages/templates/compare/1-vs-3.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate1vs3() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Professional vs The Executive",
    "description": "Compare Template 1 (The Professional) and Template 3 (The Executive) side by side. Find out which premium resume template is best for senior roles.",
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
      "ratingCount": "203"
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
        "name": "The Professional vs The Executive",
        "item": "https://freeresumemaker.xyz/templates/compare/1-vs-3"
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
    bestFor: ['Mid-level managers', 'Business professionals', 'Finance roles', 'Law careers'],
    industries: ['Banking', 'Consulting', 'Legal', 'Corporate', 'Finance'],
    pros: [
      'ATS-friendly structure',
      'Clear visual hierarchy',
      'Experience type filtering helps organize diverse roles',
      'Professional appearance trusted by recruiters'
    ],
    cons: [
      'Less premium feel than dark templates',
      'Limited certifications section'
    ]
  };

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
      'Leadership-focused layout'
    ],
    image: '/assets/template-previews/template-3.png',
    experienceCount: '2',
    skillsCount: '8',
    languagesCount: '3',
    layout: 'Dark premium, sidebar focus',
    color: 'Dark Navy',
    bestFor: ['Senior executives', 'Directors', 'VPs', 'C-Suite professionals', 'Board members'],
    industries: ['Executive Leadership', 'Corporate Board', 'Senior Management', 'Fortune 500'],
    pros: [
      'Premium dark theme stands out',
      'Certifications focus ideal for senior roles',
      'Density scaling adapts to content volume',
      'Projects authority and experience'
    ],
    cons: [
      'Dark theme may not print well on all printers',
      'Less suitable for entry-level positions'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 1 (The Professional) vs Template 3 (The Executive). The Professional offers classic corporate design, while The Executive features premium dark theme for senior leaders. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 1 vs 3: The Professional vs The Executive | Compare Premium Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 1 vs 3, The Professional template, The Executive template, corporate vs executive resume, premium resume template, dark theme resume, best resume template for executives, C-suite resume template" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 1 vs 3: The Professional vs The Executive | Compare Premium Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-1-vs-3.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/1-vs-3" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs 3: The Professional vs The Executive" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-1-vs-3.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/1-vs-3" />
        
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
          <span style={{ margin: '0 8px', color: '#999' }}>â€º</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>â€º</span>
          <Link href="/templates/compare" style={{ color: '#666', textDecoration: 'none' }}>Compare</Link>
          <span style={{ margin: '0 8px', color: '#999' }}>â€º</span>
          <span style={{ color: '#333', fontWeight: 500 }}>The Professional vs The Executive</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 3: <span style={{ color: '#0070f3' }}>The Professional</span> vs <span style={{ color: '#1a2634' }}>The Executive</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Corporate classic meets executive premium. Compare these two professional templates to find your perfect match.
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
              {tab === 'overview' && 'ðŸ“‹ Overview'}
              {tab === 'features' && 'âš¡ Features'}
              {tab === 'visual' && 'ðŸŽ¨ Visual Comparison'}
              {tab === 'industry' && 'ðŸ¢ Industry Fit'}
              {tab === 'verdict' && 'âš–ï¸ Final Verdict'}
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
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Max Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    {template1.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    {template3.languagesCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Languages Section</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0070f3' }}>
                    Light
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2634' }}>
                    Dark
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Color Theme</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#1a2634' }}>The Executive</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Two-column with gradient header', t2: 'Dark premium with sidebar focus' },
                    { feature: 'Color Theme', t1: 'Light/Professional Blue', t2: 'Dark Navy with accent colors' },
                    { feature: 'Typography', t1: 'Classic serif fonts', t2: 'Modern sans-serif' },
                    { feature: 'Experience Filtering', t1: 'âœ“ Yes (job, internship, project)', t2: 'âœ— No' },
                    { feature: 'Certifications Section', t1: 'âœ— Limited', t2: 'âœ“ Dedicated certifications focus' },
                    { feature: 'Core Strengths Display', t1: 'âœ— No', t2: 'âœ“ Yes' },
                    { feature: 'Density Scaling', t1: 'âœ— No', t2: 'âœ“ Yes (ultra-compact to spacious)' },
                    { feature: 'Experience Badges', t1: 'âœ“ Yes', t2: 'âœ“ Yes (type badges)' },
                    { feature: 'Professional Summary Box', t1: 'âœ“ Yes', t2: 'âœ“ Yes (executive style)' },
                    { feature: 'Skills Display', t1: 'Grid layout (9 skills)', t2: 'Tags layout (8 skills)' },
                    { feature: 'Languages Section', t1: 'âœ“ Yes (4 max)', t2: 'âœ“ Yes (3 max)' },
                    { feature: 'Projects Section', t1: 'âœ“ Yes', t2: 'âœ“ Yes (2 max)' },
                    { feature: 'Awards Section', t1: 'âœ— No', t2: 'âœ“ Yes (2 max)' },
                    { feature: 'Tools Section', t1: 'âœ— No', t2: 'âœ“ Yes (4 max)' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 13 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('âœ“') ? (
                          <span style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('âœ“') ? (
                          <span style={{ color: '#1a2634', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
                  âœ… The Professional - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0070f3', marginTop: '25px', marginBottom: '15px' }}>
                  âš ï¸ The Professional - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template1.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginBottom: '15px' }}>
                  âœ… The Executive - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#1a2634', marginTop: '25px', marginBottom: '15px' }}>
                  âš ï¸ The Executive - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template3.cons.map((item, index) => (
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
              Light corporate vs dark executive - see how these premium templates compare
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', marginBottom: '20px', textAlign: 'center' }}>
                  The Professional (Light)
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
                      View Full Details â†’
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#1a2634', marginBottom: '20px', textAlign: 'center' }}>
                  The Executive (Dark)
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
                      View Full Details â†’
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
                    <li>Light background with blue gradient header</li>
                    <li>Classic serif typography</li>
                    <li>Experience type badges in color</li>
                    <li>Traditional two-column layout</li>
                    <li>Clean, professional appearance</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#1a2634', marginBottom: '10px' }}>The Executive</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Dark navy background with accent colors</li>
                    <li>Modern sans-serif fonts</li>
                    <li>Sidebar certifications focus</li>
                    <li>Density scaling adapts to content</li>
                    <li>Premium, authoritative appearance</li>
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
                <strong>ðŸ“ Print Note:</strong> The Executive's dark theme may use more ink when printing. Consider digital submission or test print before mass distribution. The Professional's light theme is more printer-friendly.
              </p>
            </div>
          </div>
        )}

        {/* Industry Fit Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Which Template Fits Your Career Level?
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
                  The Professional is ideal for mid-level managers and professionals in traditional corporate environments. Its clean, structured layout is trusted by recruiters in banking, consulting, and law firms. The experience filtering helps showcase diverse career paths effectively.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Mid-Level to Senior Manager
                </div>
              </div>

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
                  The Executive is designed for senior leadership. Its premium dark theme and certifications focus project authority and experience. Perfect for C-suite executives, directors, and board members who need to showcase leadership qualifications and strategic achievements.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Level:</strong> Director to C-Suite Executive
                </div>
              </div>
            </div>

            {/* Career Level Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Career Level Decision Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#0070f3', marginBottom: '10px' }}>Choose The Professional if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You have 5-15 years of experience</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to manager or senior manager roles</li>
                    <li style={{ marginBottom: '8px' }}>You work in traditional corporate industries</li>
                    <li style={{ marginBottom: '8px' }}>You need to showcase diverse role types</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#1a2634', marginBottom: '10px' }}>Choose The Executive if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You have 15+ years of experience</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to director or C-suite roles</li>
                    <li style={{ marginBottom: '8px' }}>You need to emphasize certifications and achievements</li>
                    <li style={{ marginBottom: '8px' }}>You want a premium, authoritative presence</li>
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
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸ’¼</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0070f3', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Professional
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Professional is the versatile choice for corporate careers. Its clean design and experience filtering make it ideal for mid-level to senior managers. If you work in traditional industries and need a reliable, ATS-friendly format that recruiters trust, this is your template.
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
                background: 'linear-gradient(135deg, #e8ecf0 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #1a2634'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸ‘‘</div>
                <h3 style={{ fontSize: '1.5rem', color: '#1a2634', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Executive
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Executive is the premium choice for senior leadership. Its sophisticated dark theme and certifications focus project authority and experience. If you're a director, VP, or C-suite executive who needs to stand out and emphasize leadership qualifications, this is your template.
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
                ðŸ’¡ Expert Tip: Consider Your Target Role
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The template you choose should match the level of the role you're targeting. For senior manager positions, The Professional is often the safer choice. For executive roles, The Executive's premium design helps you stand out. When in doubt, consider the industry norms - conservative industries may prefer The Professional even at senior levels.
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
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa' }}>Your Profile</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#0070f3' }}>The Professional</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#1a2634' }}>The Executive</div>
                
                <div>Mid-Level Manager (5-10 yrs)</div>
                <div style={{ color: '#0070f3' }}>âœ“ Perfect</div>
                <div style={{ color: '#999' }}>âœ— May be too senior</div>
                
                <div>Senior Manager (10-15 yrs)</div>
                <div style={{ color: '#0070f3' }}>âœ“ Great choice</div>
                <div style={{ color: '#1a2634' }}>âœ“ Also works well</div>
                
                <div>Director (15-20 yrs)</div>
                <div style={{ color: '#999' }}>âœ— May be too basic</div>
                <div style={{ color: '#1a2634' }}>âœ“ Excellent choice</div>
                
                <div>VP / C-Suite (20+ yrs)</div>
                <div style={{ color: '#999' }}>âœ— Not recommended</div>
                <div style={{ color: '#1a2634' }}>âœ“âœ“ Perfect</div>
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
                q: 'Which template is better for executive-level positions?',
                a: 'The Executive template is specifically designed for senior leadership roles. Its premium dark theme and certifications focus project authority and experience that recruiters expect at the C-suite level.'
              },
              {
                q: 'Will the dark theme print well?',
                a: 'The Executive template uses dark backgrounds which may use more ink when printing. For printed copies, we recommend The Professional. For digital submission, both work excellently.'
              },
              {
                q: 'Can I add certifications to The Professional template?',
                a: 'The Professional has limited certification space. If certifications are crucial for your role, The Executive with its dedicated certifications section would be a better choice.'
              },
              {
                q: 'Are these templates ATS-friendly?',
                a: 'Yes! Both templates are fully ATS-optimized. The Professional has a more traditional structure that some older ATS systems prefer, while The Executive uses clean code that passes all modern ATS checks.'
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
          <p>Â© {new Date().getFullYear()} Free Resume Builder. All 20 templates are free forever.</p>
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
