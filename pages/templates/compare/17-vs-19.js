// pages/templates/compare/17-vs-19.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate17vs19() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Innovator 2.0 vs The Scholar 2.0",
    "description": "Compare Template 17 (The Innovator 2.0) and Template 19 (The Scholar 2.0) side by side. Find out which modern template is best for students, interns, and academics.",
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
      "ratingCount": "112"
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
        "name": "The Innovator 2.0 vs The Scholar 2.0",
        "item": "https://freeresumemaker.xyz/templates/compare/17-vs-19"
      }
    ]
  };

  // Template data for comparison
  const template17 = {
    id: 17,
    name: 'The Innovator 2.0',
    category: 'Creative/Tech',
    description: 'Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.',
    longDescription: 'The Innovator 2.0 features modern card-based design with internship and project focus. Tech tags and project showcases make it perfect for students, interns, and junior developers building their portfolios. The clean two-column layout with organized sections helps early-career professionals present their skills effectively.',
    features: [
      'Modern card-based design',
      'Internship focus (3 max)',
      'Project showcase (4 max)',
      'Tech tags for skills',
      'Certifications section (3 max)',
      'Awards section (4 max)',
      'Skills display (15 max)',
      'Two-column layout',
      'Avatar/photo placeholder',
      'Contact strip with icons'
    ],
    image: '/assets/template-previews/template-17.png',
    experienceCount: '3',
    skillsCount: '15',
    projectsCount: '4',
    internshipsCount: '3',
    certificationsCount: '3',
    awardsCount: '4',
    languagesCount: '3',
    toolsCount: '6',
    coreStrengthsCount: '4',
    layout: 'Card-based two-column',
    color: 'Modern Purple',
    bestFor: ['Students', 'Interns', 'Junior developers', 'Entry-level tech', 'Recent graduates'],
    industries: ['Technology', 'Startups', 'Internships', 'Entry-level', 'Tech'],
    pros: [
      'Perfect for internship-focused resumes',
      'Extensive project showcase (4 projects)',
      'Tech tags make skills scannable',
      'Modern card-based design appeals to startups',
      'Great for building portfolio-style resumes'
    ],
    cons: [
      'May be too casual for corporate roles',
      'Less suitable for senior positions',
      'Card design may not suit all industries'
    ]
  };

  const template19 = {
    id: 19,
    name: 'The Scholar 2.0',
    category: 'Academic/Research',
    description: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    longDescription: 'The Scholar 2.0 features white-box education styling like certifications. Education-focused design with clean layout makes it perfect for academics, researchers, and educators. The sidebar profile with white-box education entries puts academic credentials front and center, ideal for faculty positions and research roles.',
    features: [
      'White-box education styling',
      'Sidebar profile with avatar',
      'Clean academic layout',
      'Education focus (2 max)',
      'Certifications section (3 max)',
      'Skills display (20 max)',
      'Projects section (3 max)',
      'Internships section (2 max)',
      'Awards section (4 max)',
      'Publications section (2 max)',
      'Tools section (5 max)',
      'Core strengths section (4 max)'
    ],
    image: '/assets/template-previews/template-19.png',
    experienceCount: '2',
    skillsCount: '20',
    projectsCount: '3',
    internshipsCount: '2',
    certificationsCount: '3',
    awardsCount: '4',
    languagesCount: '3',
    toolsCount: '5',
    coreStrengthsCount: '4',
    publicationsCount: '2',
    layout: 'White-box academic',
    color: 'Academic White',
    bestFor: ['Academics', 'Researchers', 'Educators', 'Professors', 'PhD candidates'],
    industries: ['Academia', 'Research', 'Education', 'Higher Education', 'Science'],
    pros: [
      'Education-focused design highlights credentials',
      'White-box styling makes education stand out',
      'Publications section for research output',
      'Clean, scholarly appearance',
      'Extensive skills display (20 skills)'
    ],
    cons: [
      'Limited to 2 experience entries',
      'Less suitable for corporate roles',
      'Academic focus may not translate to industry'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 17 (The Innovator 2.0) and Template 19 (The Scholar 2.0). The Innovator 2.0 offers card-based design for interns and students, while The Scholar 2.0 features white-box education styling for academics. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 17 vs 19: The Innovator 2.0 vs The Scholar 2.0 | Compare Modern Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 17 vs 19, The Innovator 2.0 template, The Scholar 2.0 template, internship resume, academic resume, student resume, card-based resume, white-box education, best resume template for students, best resume template for academics" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 17 vs 19: The Innovator 2.0 vs The Scholar 2.0 | Compare Modern Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-17-vs-19.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/17-vs-19" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 17 vs 19: The Innovator 2.0 vs The Scholar 2.0" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-17-vs-19.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/17-vs-19" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Innovator 2.0 vs The Scholar 2.0</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 17 vs Template 19: <span style={{ color: '#8b5cf6' }}>The Innovator 2.0</span> vs <span style={{ color: '#2563eb' }}>The Scholar 2.0</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Card-based internship design vs white-box academic styling. Compare these two modern templates for students and academics.
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
              {/* Template 17 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #8b5cf6'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 17</span>
                  <img 
                    src={template17.image}
                    alt="The Innovator 2.0 template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#8b5cf6' }}>
                  {template17.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template17.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template17.description}
                </p>
                <Link 
                  href="/templates/17"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#8b5cf6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 17
                </Link>
                <Link 
                  href="/editor/17"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#8b5cf6',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #8b5cf6'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 19 */}
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
                  }}>TEMPLATE 19</span>
                  <img 
                    src={template19.image}
                    alt="The Scholar 2.0 template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#2563eb' }}>
                  {template19.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template19.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template19.description}
                </p>
                <Link 
                  href="/templates/19"
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
                  View Template 19
                </Link>
                <Link 
                  href="/editor/19"
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Experience</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.projectsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.projectsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.internshipsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.internshipsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Internships</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.certificationsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.certificationsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Certifications</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                    {template17.awardsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template19.awardsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Awards</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template17.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#8b5cf6' }}>The Innovator 2.0</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#2563eb' }}>The Scholar 2.0</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Design Style', t1: 'Card-based two-column', t2: 'White-box academic with sidebar' },
                    { feature: 'Color Scheme', t1: 'Modern Purple with card accents', t2: 'Academic White with blue accents' },
                    { feature: 'Maximum Experience Entries', t1: '3', t2: '2' },
                    { feature: 'Maximum Skills', t1: '15', t2: '20' },
                    { feature: 'Maximum Projects', t1: '4', t2: '3' },
                    { feature: 'Maximum Internships', t1: '3', t2: '2' },
                    { feature: 'Maximum Certifications', t1: '3', t2: '3' },
                    { feature: 'Maximum Awards', t1: '4', t2: '4' },
                    { feature: 'Maximum Languages', t1: '3', t2: '3' },
                    { feature: 'Maximum Tools', t1: '6', t2: '5' },
                    { feature: 'Maximum Core Strengths', t1: '4', t2: '4' },
                    { feature: 'Publications Section', t1: 'Ã¢Å“â€” No', t2: 'Ã¢Å“â€œ Yes (2 max)' },
                    { feature: 'Hobbies Section', t1: 'Ã¢Å“â€œ Yes (2 max)', t2: 'Ã¢Å“â€œ Yes (3 max)' },
                    { feature: 'Avatar/Photo', t1: 'Ã¢Å“â€œ Yes', t2: 'Ã¢Å“â€œ Yes (sidebar)' },
                    { feature: 'Contact Strip', t1: 'Ã¢Å“â€œ Yes (header)', t2: 'Ã¢Å“â€” No (sidebar)' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 14 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('Ã¢Å“â€œ') ? (
                          <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('Ã¢Å“â€œ') ? (
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

            {/* Section Focus Comparison */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '12px'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333' }}>
                Ã°Å¸â€œÅ  Primary Focus Areas
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px'
              }}>
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '10px' }}>The Innovator 2.0 focuses on:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>Ã¢Å“â€œ Internships (3 max) - perfect for students</li>
                    <li>Ã¢Å“â€œ Projects (4 max) - showcase portfolio work</li>
                    <li>Ã¢Å“â€œ Tech tags - highlight technical skills</li>
                    <li>Ã¢Å“â€œ Awards (4 max) - recognize achievements</li>
                    <li>Ã¢Å“â€œ Card-based design - modern, scannable</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Scholar 2.0 focuses on:</h4>
                  <ul style={{ margin: 0 }}>
                    <li>Ã¢Å“â€œ Education (white-box styling) - academic credentials</li>
                    <li>Ã¢Å“â€œ Publications (2 max) - research output</li>
                    <li>Ã¢Å“â€œ Skills (20 max) - extensive expertise</li>
                    <li>Ã¢Å“â€œ Certifications (3 max) - professional credentials</li>
                    <li>Ã¢Å“â€œ Clean academic layout - scholarly appearance</li>
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
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '15px' }}>
                  Ã¢Å“â€¦ The Innovator 2.0 - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template17.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginTop: '25px', marginBottom: '15px' }}>
                  Ã¢Å¡Â Ã¯Â¸Â The Innovator 2.0 - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template17.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  Ã¢Å“â€¦ The Scholar 2.0 - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginTop: '25px', marginBottom: '15px' }}>
                  Ã¢Å¡Â Ã¯Â¸Â The Scholar 2.0 - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.cons.map((item, index) => (
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
              Card-based internship design vs white-box academic styling
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#8b5cf6', marginBottom: '20px', textAlign: 'center' }}>
                  The Innovator 2.0 (Card-based)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template17.image}
                    alt="The Innovator 2.0 template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/17" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>
                      View Full Details Ã¢â€ â€™
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px', textAlign: 'center' }}>
                  The Scholar 2.0 (White-box Academic)
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template19.image}
                    alt="The Scholar 2.0 template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/19" style={{ color: '#2563eb', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#8b5cf6', marginBottom: '10px' }}>The Innovator 2.0</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Card-based design with shadows</li>
                    <li>Header with avatar/photo</li>
                    <li>Contact strip with icons</li>
                    <li>Tech tags for skills</li>
                    <li>Modern, scannable layout</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Scholar 2.0</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>White-box education styling</li>
                    <li>Sidebar profile with avatar</li>
                    <li>Clean academic layout</li>
                    <li>Publications section</li>
                    <li>Scholarly, professional appearance</li>
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
              Which Template Fills Your Career Stage?
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
                borderTop: '5px solid #8b5cf6'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#8b5cf6', marginBottom: '20px' }}>
                  The Innovator 2.0
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template17.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#ede9fe',
                      color: '#6d28d9',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Innovator 2.0 is built for students, interns, and entry-level tech professionals. Its internship-focused design and extensive project showcase (4 projects) helps early-career candidates demonstrate potential when experience is limited. Perfect for college career fairs, internship applications, and junior developer roles.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Stage:</strong> Student, Intern, Entry-Level (0-3 years)
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #2563eb'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px' }}>
                  The Scholar 2.0
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template19.industries.map((industry, index) => (
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
                  The Scholar 2.0 is designed for academics, researchers, and educators. Its white-box education styling puts academic credentials front and center. The publications section is essential for faculty applications, while the extensive skills display (20 skills) showcases research expertise. Ideal for PhD candidates, postdocs, and professor positions.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
                  <strong>Career Stage:</strong> PhD Candidate to Professor
                </div>
              </div>
            </div>

            {/* Career Stage Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Career Stage Decision Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '10px' }}>Choose The Innovator 2.0 if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're a student or recent graduate</li>
                    <li style={{ marginBottom: '8px' }}>You're applying for internships</li>
                    <li style={{ marginBottom: '8px' }}>You have multiple projects to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You're targeting tech or startup roles</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>Choose The Scholar 2.0 if:</h4>
                  <ul style={{ margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>You're in academia or research</li>
                    <li style={{ marginBottom: '8px' }}>You have publications to highlight</li>
                    <li style={{ marginBottom: '8px' }}>You need to emphasize education credentials</li>
                    <li style={{ marginBottom: '8px' }}>You're applying for faculty positions</li>
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
                background: 'linear-gradient(135deg, #ede9fe 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #c4b5fd'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>Ã°Å¸Å¡â‚¬</div>
                <h3 style={{ fontSize: '1.5rem', color: '#8b5cf6', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Innovator 2.0
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Innovator 2.0 is the ultimate template for students, interns, and early-career professionals. Its internship focus and extensive project showcase (4 projects) help you demonstrate potential when you have limited work experience. The modern card-based design and tech tags appeal to startups and tech companies looking for fresh talent. If you're just starting your career and need to stand out, this is your template.
                </p>
                <Link 
                  href="/editor/17"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#8b5cf6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Innovator 2.0
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #93c5fd'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>Ã°Å¸â€œÅ¡</div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Scholar 2.0
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Scholar 2.0 is purpose-built for academic careers. Its white-box education styling makes your degrees and certifications stand out, while the publications section is essential for showcasing research output. The clean, scholarly layout communicates professionalism and attention to detail that search committees expect. If you're pursuing faculty positions, postdoctoral fellowships, or research roles, this template helps your academic credentials shine.
                </p>
                <Link 
                  href="/editor/19"
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
                  Create Resume with The Scholar 2.0
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
                Ã°Å¸â€™Â¡ Expert Tip: Know Your Audience
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                The choice between these templates often comes down to your target industry and career stage. Students applying to tech internships will find The Innovator 2.0's project showcase invaluable. PhD candidates applying to faculty positions need The Scholar 2.0's publications section. Consider not just where you are now, but where you want to go - and choose the template that best tells that story.
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
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#8b5cf6' }}>The Innovator 2.0</div>
                <div style={{ fontWeight: 'bold', padding: '10px', background: '#f8f9fa', color: '#2563eb' }}>The Scholar 2.0</div>
                
                <div>Internship applications</div>
                <div style={{ color: '#8b5cf6' }}>Ã¢Å“â€œÃ¢Å“â€œ Perfect (3 max)</div>
                <div style={{ color: '#2563eb' }}>Ã¢Å“â€œ Good (2 max)</div>
                
                <div>Project portfolio</div>
                <div style={{ color: '#8b5cf6' }}>Ã¢Å“â€œÃ¢Å“â€œ 4 projects max</div>
                <div style={{ color: '#2563eb' }}>Ã¢Å“â€œ 3 projects max</div>
                
                <div>Publications</div>
                <div style={{ color: '#999' }}>Ã¢Å“â€” Not available</div>
                <div style={{ color: '#2563eb' }}>Ã¢Å“â€œÃ¢Å“â€œ Yes (2 max)</div>
                
                <div>Education emphasis</div>
                <div style={{ color: '#8b5cf6' }}>Ã¢Å“â€œ Standard</div>
                <div style={{ color: '#2563eb' }}>Ã¢Å“â€œÃ¢Å“â€œ White-box styling</div>
                
                <div>Skills display</div>
                <div style={{ color: '#8b5cf6' }}>15 skills max</div>
                <div style={{ color: '#2563eb' }}>20 skills max</div>
                
                <div>Tech industry focus</div>
                <div style={{ color: '#8b5cf6' }}>Ã¢Å“â€œÃ¢Å“â€œ Perfect</div>
                <div style={{ color: '#999' }}>Ã¢Å“â€” Too academic</div>
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
                q: 'Which template is better for students applying for internships?',
                a: 'The Innovator 2.0 is specifically designed for students and interns. With 3 internship slots and 4 project showcases, it helps early-career candidates demonstrate potential when work experience is limited.'
              },
              {
                q: 'Which template is better for PhD candidates applying for faculty positions?',
                a: 'The Scholar 2.0 is ideal for academic job applications. Its publications section is essential for showcasing research output, and the white-box education styling puts your degrees front and center.'
              },
              {
                q: 'Can I add publications to The Innovator 2.0?',
                a: 'No, The Innovator 2.0 does not include a publications section. If you need to highlight research publications, choose The Scholar 2.0 instead.'
              },
              {
                q: 'Which template has more space for projects?',
                a: 'The Innovator 2.0 supports up to 4 projects, while The Scholar 2.0 supports 3. For project-heavy portfolios, The Innovator 2.0 is the better choice.'
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
