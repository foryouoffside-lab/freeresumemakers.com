// pages/templates/compare/19-vs-20.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate19vs20() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Scholar 2.0 vs The Engineer",
    "description": "Compare Template 19 (The Scholar 2.0) and Template 20 (The Engineer) side by side. Find out which specialized template is best for your academic or engineering career.",
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
      "ratingCount": "278"
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
        "name": "The Scholar 2.0 vs The Engineer",
        "item": "https://freeresumemakers.com/templates/compare/19-vs-20"
      }
    ]
  };

  // Template data for comparison (from TemplateSelector.js)
  const template19 = {
    id: 19,
    name: 'The Scholar 2.0',
    category: 'Academic/Research',
    description: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    longDescription: 'The Scholar 2.0 template puts education and research front and center. With its distinctive white-box education styling, this template highlights academic achievements, publications, and research experience. Ideal for professors, researchers, PhD candidates, and educators who need to showcase their scholarly work.',
    features: [
      'White-box education styling',
      'Academic focus',
      'Clean layout',
      'Research showcase',
      'Publications section',
      'Conference presentations',
      'Grants and awards',
      'Teaching experience highlight'
    ],
    image: '/assets/template-previews/template-19.png',
    publicationsCount: '5-10',
    educationCount: '3-4',
    grantsCount: '2-3',
    layout: 'Education-first with white-box styling',
    color: 'Academic Burgundy',
    bestFor: ['Professors', 'Researchers', 'PhD candidates', 'Educators', 'Academics'],
    industries: ['Higher Education', 'Research Institutions', 'Think Tanks', 'Museums', 'Educational Organizations'],
    pros: [
      'Perfect for academic job applications',
      'White-box styling makes education stand out',
      'Dedicated sections for publications and research',
      'Respected format in academic circles'
    ],
    cons: [
      'May be too academic for industry roles',
      'Less focus on traditional work experience'
    ]
  };

  const template20 = {
    id: 20,
    name: 'The Engineer',
    category: 'Software Engineering',
    description: 'Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads.',
    longDescription: 'The Engineer template is built specifically for software developers and technical leads. It features a project-first layout that prioritizes technical work, with dedicated sections for repositories, tech stacks, and development methodologies. Perfect for showcasing coding expertise and technical leadership.',
    features: [
      'Project-first layout',
      'Role-based display',
      'Tech skills focus',
      'Clean structure',
      'Repository showcase',
      'Technical leadership sections',
      'Architecture highlights',
      'Team collaboration metrics'
    ],
    image: '/assets/template-previews/template-20.png',
    projectsCount: '4-6',
    teamSize: '1-20',
    techStackCount: '8-12',
    layout: 'Project-first with technical focus',
    color: 'Engineering Blue',
    bestFor: ['Software engineers', 'Tech leads', 'System architects', 'DevOps engineers', 'Engineering managers'],
    industries: ['Tech Companies', 'SaaS Startups', 'Enterprise IT', 'Engineering Firms', 'FinTech'],
    pros: [
      'Highlights technical projects effectively',
      'Shows leadership and team impact',
      'ATS-friendly for tech recruiters',
      'Clean, professional engineering aesthetic'
    ],
    cons: [
      'Project focus may not suit non-technical roles',
      'Less emphasis on traditional education'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 19 (The Scholar 2.0) vs Template 20 (The Engineer). The Scholar 2.0 offers academic-focused design for educators and researchers, while The Engineer features project-first layout for software developers. Find your perfect specialized template.`;

  return (
    <>
      <Head>
        <title>Template 19 vs 20: The Scholar 2.0 vs The Engineer | Compare Academic & Engineering Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 19 vs 20, The Scholar 2.0 template, The Engineer template, academic resume, engineering resume, research resume, software engineer resume, PhD resume" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 19 vs 20: The Scholar 2.0 vs The Engineer | Compare Academic & Engineering Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemakers.com/assets/og/compare-19-vs-20.jpg" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/19-vs-20" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 19 vs 20: The Scholar 2.0 vs The Engineer" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemakers.com/assets/og/compare-19-vs-20.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/19-vs-20" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Scholar 2.0 vs The Engineer</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 19 vs Template 20: <span style={{ color: '#8B4513' }}>The Scholar 2.0</span> vs <span style={{ color: '#0A2472' }}>The Engineer</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Academic excellence meets engineering precision. Compare these specialized templates to find your perfect match.
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
                background: activeTab === tab ? '#0A2472' : 'white',
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
                  e.currentTarget.style.borderColor = '#0A2472';
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
              {/* Template 19 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #8B4513'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#8B4513',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 19</span>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1/1.414',
                    background: 'linear-gradient(135deg, #faf0e6 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#8B4513' }}>The Scholar 2.0</div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                      <div>PhD, Computer Science</div>
                      <div style={{ background: 'white', padding: '8px', borderRadius: '4px', marginTop: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>Publications:</span> 12
                      </div>
                    </div>
                  </div>
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#8B4513' }}>
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
                    background: '#8B4513',
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
                    color: '#8B4513',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #8B4513'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 20 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #0A2472'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#0A2472',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 20</span>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1/1.414',
                    background: 'linear-gradient(135deg, #e6f0ff 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚙️</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0A2472' }}>The Engineer</div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                      <div>Lead Software Engineer</div>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px', justifyContent: 'center' }}>
                        <span style={{ background: '#0A247220', padding: '4px 8px', borderRadius: '4px' }}>React</span>
                        <span style={{ background: '#0A247220', padding: '4px 8px', borderRadius: '4px' }}>Node.js</span>
                        <span style={{ background: '#0A247220', padding: '4px 8px', borderRadius: '4px' }}>Python</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#0A2472' }}>
                  {template20.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template20.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template20.description}
                </p>
                <Link 
                  href="/templates/20"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#0A2472',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 20
                </Link>
                <Link 
                  href="/editor/20"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#0A2472',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #0A2472'
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
                Specialized Sections Comparison
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8B4513' }}>
                    {template19.publicationsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0A2472' }}>
                    {template20.projectsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Publications vs Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8B4513' }}>
                    {template19.educationCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0A2472' }}>
                    {template20.techStackCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Education vs Tech Stack</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8B4513' }}>
                    {template19.grantsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0A2472' }}>
                    {template20.teamSize}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Grants vs Team Size</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#8B4513', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0A2472', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template20.bestFor.map((item, index) => (
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
              Specialized Feature Comparison
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#8B4513' }}>The Scholar 2.0</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#0A2472' }}>The Engineer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Primary Focus', t1: 'Academic achievements', t2: 'Technical projects' },
                    { feature: 'Education Section', t1: '✓ White-box featured styling', t2: 'Standard format' },
                    { feature: 'Publications', t1: '✓ Dedicated section with citations', t2: '✗ Not included' },
                    { feature: 'Research Grants', t1: '✓ Highlighted', t2: '✗ Not included' },
                    { feature: 'Conference Presentations', t1: '✓ Dedicated section', t2: '✗ Not included' },
                    { feature: 'Teaching Experience', t1: '✓ Featured', t2: 'Standard if included' },
                    { feature: 'Project Showcase', t1: 'Basic format', t2: '✓ Project-first layout with links' },
                    { feature: 'Tech Stack', t1: 'Basic list', t2: '✓ Comprehensive matrix' },
                    { feature: 'Team Leadership', t1: 'Standard', t2: '✓ Metrics and team size' },
                    { feature: 'Repository Links', t1: '✗ Not included', t2: '✓ GitHub integration' },
                    { feature: 'Architecture Highlights', t1: '✗ Not included', t2: '✓ Dedicated section' },
                    { feature: 'Awards & Honors', t1: '✓ Academic awards featured', t2: 'Standard format' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 11 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#8B4513', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#0A2472', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
                <h3 style={{ fontSize: '1.3rem', color: '#8B4513', marginBottom: '15px' }}>
                  ✅ The Scholar 2.0 - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#8B4513', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Scholar 2.0 - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0A2472', marginBottom: '15px' }}>
                  ✅ The Engineer - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template20.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0A2472', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Engineer - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template20.cons.map((item, index) => (
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
              See how these specialized templates look side by side
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#8B4513', marginBottom: '20px', textAlign: 'center' }}>
                  The Scholar 2.0
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                    aspectRatio: '1/1.414',
                    background: '#faf0e6',
                    borderRadius: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    padding: '25px'
                  }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#8B4513', borderBottom: '2px solid #8B4513', paddingBottom: '10px', marginBottom: '15px' }}>
                      Dr. Sarah Mitchell
                    </div>
                    
                    <div style={{ background: 'white', padding: '12px', borderRadius: '8px', marginBottom: '15px', border: '1px solid #8B4513' }}>
                      <div style={{ fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', marginBottom: '5px' }}>EDUCATION</div>
                      <div style={{ fontSize: '0.9rem' }}>PhD, Computer Science - Stanford</div>
                      <div style={{ fontSize: '0.8rem', color: '#666' }}>2018-2023</div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📚 SELECTED PUBLICATIONS</div>
                      <div style={{ fontSize: '0.8rem', marginBottom: '5px' }}>• "Neural Networks in Education" - Nature</div>
                      <div style={{ fontSize: '0.8rem' }}>• "AI Learning Models" - IEEE</div>
                    </div>

                    <div style={{ background: '#8B451310', padding: '8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                      <span style={{ fontWeight: 'bold' }}>Grants:</span> $2.5M NSF Funding
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/19" style={{ color: '#8B4513', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#0A2472', marginBottom: '20px', textAlign: 'center' }}>
                  The Engineer
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                    aspectRatio: '1/1.414',
                    background: '#e6f0ff',
                    borderRadius: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    padding: '25px'
                  }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0A2472', marginBottom: '10px' }}>
                      Michael Chen
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Lead Software Engineer</div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 FEATURED PROJECTS</div>
                      <div style={{ background: 'white', padding: '10px', borderRadius: '6px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>CloudScale Platform</div>
                        <div style={{ fontSize: '0.8rem', color: '#0A2472' }}>github.com/mchen/cloudscale</div>
                        <div style={{ fontSize: '0.8rem' }}>React, Node.js, AWS</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '15px', justifyContent: 'center' }}>
                      <span style={{ background: '#0A2472', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>React</span>
                      <span style={{ background: '#0A2472', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>TypeScript</span>
                      <span style={{ background: '#0A2472', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>Python</span>
                    </div>

                    <div style={{ fontSize: '0.8rem' }}>
                      <span style={{ fontWeight: 'bold' }}>Team Size:</span> Led 8 engineers
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/20" style={{ color: '#0A2472', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#8B4513', marginBottom: '10px' }}>The Scholar 2.0</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>White-box education styling</li>
                    <li>Academic burgundy accents</li>
                    <li>Publication citations format</li>
                    <li>Grant and award highlights</li>
                    <li>Classic, scholarly aesthetic</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#0A2472', marginBottom: '10px' }}>The Engineer</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Project-first card layout</li>
                    <li>Engineering blue palette</li>
                    <li>Repository links with icons</li>
                    <li>Tech stack matrix</li>
                    <li>Modern, technical aesthetic</li>
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
              Academic vs Engineering: Industry Fit
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
                borderTop: '5px solid #8B4513'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#8B4513', marginBottom: '20px' }}>
                  The Scholar 2.0
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Institutions:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template19.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#8B451310',
                      color: '#8B4513',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Scholar 2.0 is the gold standard for academic positions. Its white-box education styling and dedicated sections for publications, grants, and conference presentations align perfectly with academic search committees' expectations. Used by professors, researchers, and PhD candidates applying to universities worldwide.
                </p>
                <div style={{ marginTop: '20px', background: '#8B451305', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#8B4513' }}>Perfect for:</strong> Tenure-track positions, research fellowships, postdoctoral applications, academic conferences.
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #0A2472'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#0A2472', marginBottom: '20px' }}>
                  The Engineer
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template20.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#0A247210',
                      color: '#0A2472',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Engineer template speaks directly to technical recruiters and engineering managers. Its project-first layout showcases real code and technical achievements, while leadership metrics demonstrate team impact. Designed for software engineers moving up the ladder to senior and lead positions.
                </p>
                <div style={{ marginTop: '20px', background: '#0A247205', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#0A2472' }}>Perfect for:</strong> Senior engineering roles, tech lead positions, startup CTO positions, enterprise architecture.
                </div>
              </div>
            </div>

            {/* Career Path Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Career Path Decision Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#8B4513', marginBottom: '10px' }}>Choose The Scholar 2.0 if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're applying for academic positions</li>
                    <li style={{ marginBottom: '8px' }}>You have publications to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You've received research grants</li>
                    <li style={{ marginBottom: '8px' }}>You present at academic conferences</li>
                    <li style={{ marginBottom: '8px' }}>You're pursuing tenure track</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#0A2472', marginBottom: '10px' }}>Choose The Engineer if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're a software engineer/developer</li>
                    <li style={{ marginBottom: '8px' }}>You have GitHub repositories to showcase</li>
                    <li style={{ marginBottom: '8px' }}>You lead technical teams</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to tech companies</li>
                    <li style={{ marginBottom: '8px' }}>You want to highlight technical projects</li>
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
              Final Verdict: Academic Excellence or Engineering Precision?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #faf0e6 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #8B4513'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>📚</div>
                <h3 style={{ fontSize: '1.5rem', color: '#8B4513', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Scholar 2.0
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  If your career path runs through academia, The Scholar 2.0 is your essential tool. Its specialized sections for publications, grants, and teaching experience speak directly to search committees and academic reviewers. When your research matters as much as your teaching, this template ensures nothing gets overlooked.
                </p>
                <Link 
                  href="/editor/19"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#8B4513',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Scholar 2.0
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #e6f0ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #0A2472'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>⚙️</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0A2472', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Engineer
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  For the technology sector, The Engineer demonstrates that you understand what matters: shipping code, leading teams, and building systems. Its project-first approach lets your work speak for itself, while technical leadership metrics prove you can scale impact. When your GitHub tells your story better than your degree, choose The Engineer.
                </p>
                <Link 
                  href="/editor/20"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#0A2472',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Engineer
                </Link>
              </div>
            </div>

            {/* Expert Tip */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
              borderRadius: '12px',
              padding: '25px',
              border: '1px solid #667eea'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#0A2472' }}>
                💡 Expert Tip: Industry-Academia Bridge
              </h3>
              <p style={{ color: '#333', lineHeight: '1.7', margin: 0 }}>
                Are you a PhD considering industry? Or an engineer moving into research? Keep both templates! Use The Scholar 2.0 for academic applications and research positions, and The Engineer for industry roles. Many successful professionals maintain multiple versions of their resume for different career tracks.
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
              { id: '1-vs-2', name: 'The Professional vs The Innovator' },
              { id: '3-vs-4', name: 'The Executive vs The Strategist' },
              { id: '5-vs-6', name: 'The Minimalist vs The Architect' },
              { id: '7-vs-8', name: 'The Scholar vs The Traditionalist' },
              { id: '9-vs-10', name: 'The Modernist vs The Essential' },
              { id: '17-vs-18', name: 'The Innovator 2.0 vs The Code' },
              { id: '17-vs-19', name: 'The Innovator 2.0 vs The Scholar 2.0' },
              { id: '18-vs-19', name: 'The Code vs The Scholar 2.0' },
              { id: '18-vs-20', name: 'The Code vs The Engineer' },
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
                  e.currentTarget.style.borderColor = '#0A2472';
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
                q: 'Can I use The Scholar 2.0 for industry research positions?',
                a: 'Yes! The Scholar 2.0 works well for industry R&D roles, especially in pharma, tech research labs, and scientific organizations where publication records matter.'
              },
              {
                q: 'Does The Engineer template work for non-software engineers?',
                a: 'While optimized for software engineers, The Engineer template can be adapted for other engineering disciplines by modifying the project showcase sections.'
              },
              {
                q: 'Which template is better for interdisciplinary roles?',
                a: 'Consider combining elements from both templates. Our editor allows customization, so you can create a hybrid that showcases both academic achievements and technical projects.'
              },
              {
                q: 'How many publications can I list in The Scholar 2.0?',
                a: 'The Scholar 2.0 supports up to 10 publications in its main section, with the ability to add more in an extended format. It includes citation formatting and publication venues.'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.2rem', color: '#0A2472', marginBottom: '8px' }}>
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