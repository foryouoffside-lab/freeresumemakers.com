// pages/templates/compare/17-vs-18.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate17vs18() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Innovator 2.0 vs The Code",
    "description": "Compare Template 17 (The Innovator 2.0) and Template 18 (The Code) side by side. Find out which developer-focused template is best for your tech career.",
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
      "ratingCount": "312"
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
        "name": "The Innovator 2.0 vs The Code",
        "item": "https://freeresumemaker.xyz/templates/compare/17-vs-18"
      }
    ]
  };

  // Template data for comparison (from TemplateSelector.js)
  const template17 = {
    id: 17,
    name: 'The Innovator 2.0',
    category: 'Student/Entry-Level Tech',
    description: 'Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.',
    longDescription: 'The Innovator 2.0 features a contemporary card-based layout that puts internships and projects front and center. With tech tags and a clean, modern aesthetic, this template helps entry-level tech professionals showcase their potential even without extensive work experience.',
    features: [
      'Card-based design',
      'Internship focus',
      'Project showcase',
      'Tech tags',
      'Modern typography',
      'Clean layout',
      'Education highlight',
      'Skills section with tags'
    ],
    image: '/assets/template-previews/template-17.png',
    experienceCount: '2-3',
    skillsCount: '8-10',
    projectsCount: '3-4',
    layout: 'Card-based with project focus',
    color: 'Modern Purple',
    bestFor: ['CS students', 'Internship seekers', 'Junior developers', 'Bootcamp graduates'],
    industries: ['Tech internships', 'Startups', 'Junior developer roles', 'Tech apprenticeships'],
    pros: [
      'Perfect for candidates with limited experience',
      'Card design highlights projects effectively',
      'Tech tags show technology stack at a glance',
      'Modern design that appeals to tech startups'
    ],
    cons: [
      'Less suitable for senior/executive roles',
      'Card layout may not fit traditional ATS systems'
    ]
  };

  const template18 = {
    id: 18,
    name: 'The Code',
    category: 'Software Engineering',
    description: 'Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.',
    longDescription: 'The Code template is specifically designed for software engineers and developers. It features project links, technology tags, code-friendly icons, and a layout that emphasizes technical skills and project work. Perfect for showcasing GitHub repositories, live demos, and technical proficiencies.',
    features: [
      'Project links',
      'Tech tags',
      'Code-friendly icons',
      'Developer focus',
      'GitHub integration ready',
      'Technical skills matrix',
      'Clean code aesthetics',
      'Repository showcase'
    ],
    image: '/assets/template-previews/template-18.png',
    experienceCount: '3-4',
    skillsCount: '12-15',
    projectsCount: '4-5',
    layout: 'Developer-optimized with project links',
    color: 'Technical Blue',
    bestFor: ['Software engineers', 'Full-stack developers', 'Frontend specialists', 'DevOps engineers'],
    industries: ['Tech companies', 'SaaS startups', 'Enterprise IT', 'Development agencies'],
    pros: [
      'Developer-first design philosophy',
      'Project links let recruiters see your work',
      'Comprehensive skills matrix',
      'Clean, code-inspired aesthetic'
    ],
    cons: [
      'May be too technical for non-dev roles',
      'Project focus means less space for traditional experience'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 17 (The Innovator 2.0) vs Template 18 (The Code). The Innovator 2.0 offers card-based design perfect for interns and students, while The Code features developer-focused layout with project links. Find your perfect tech resume template.`;

  return (
    <>
      <Head>
        <title>Template 17 vs 18: The Innovator 2.0 vs The Code | Compare Tech Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare tech resume templates, template 17 vs 18, The Innovator 2.0 template, The Code template, developer resume, software engineer resume, internship resume, tech resume comparison" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 17 vs 18: The Innovator 2.0 vs The Code | Compare Tech Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-17-vs-18.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/17-vs-18" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 17 vs 18: The Innovator 2.0 vs The Code" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-17-vs-18.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/17-vs-18" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Innovator 2.0 vs The Code</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 17 vs Template 18: <span style={{ color: '#9333ea' }}>The Innovator 2.0</span> vs <span style={{ color: '#2563eb' }}>The Code</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Which tech-focused resume template is right for your career stage? Compare features, layouts, and industry suitability.
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
                background: activeTab === tab ? '#2563eb' : 'white',
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
                  e.currentTarget.style.borderColor = '#2563eb';
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
              {/* Template 17 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #9333ea'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#9333ea',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 17</span>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1/1.414',
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>ðŸƒ</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#9333ea' }}>The Innovator 2.0</div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>Card-based design â€¢ Tech tags â€¢ Project showcase</div>
                  </div>
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#9333ea' }}>
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
                    background: '#9333ea',
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
                    color: '#9333ea',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #9333ea'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 18 */}
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
                  }}>TEMPLATE 18</span>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1/1.414',
                    background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>ðŸ’»</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2563eb' }}>The Code</div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>Project links â€¢ Tech tags â€¢ Developer icons</div>
                  </div>
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#2563eb' }}>
                  {template18.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template18.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template18.description}
                </p>
                <Link 
                  href="/templates/18"
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
                  View Template 18
                </Link>
                <Link 
                  href="/editor/18"
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9333ea' }}>
                    {template17.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9333ea' }}>
                    {template17.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9333ea' }}>
                    {template17.projectsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.projectsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Projects Showcase</div>
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
                <h3 style={{ fontSize: '1.3rem', color: '#9333ea', marginBottom: '15px' }}>
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
                  {template18.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#9333ea' }}>The Innovator 2.0</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#2563eb' }}>The Code</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Card-based design', t2: 'Developer-optimized with project links' },
                    { feature: 'Project Showcase', t1: 'âœ“ Cards with descriptions', t2: 'âœ“ Links to live demos/GitHub' },
                    { feature: 'Tech Tags', t1: 'âœ“ Yes', t2: 'âœ“ Yes, with hover effects' },
                    { feature: 'Internship Focus', t1: 'âœ“ Highlighted', t2: 'Standard' },
                    { feature: 'GitHub Integration', t1: 'âœ— No', t2: 'âœ“ Yes, with repository links' },
                    { feature: 'Code-Friendly Icons', t1: 'Standard icons', t2: 'âœ“ Developer-specific icons' },
                    { feature: 'Skills Matrix', t1: 'Basic tags', t2: 'Advanced with proficiency levels' },
                    { feature: 'Experience Format', t1: 'Card layout', t2: 'Traditional timeline' },
                    { feature: 'Education Section', t1: 'Highlighted for students', t2: 'Standard format' },
                    { feature: 'ATS Compatibility', t1: 'Moderate', t2: 'High' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 9 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('âœ“') ? (
                          <span style={{ color: '#9333ea', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('âœ“') ? (
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

            {/* Pros and Cons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginTop: '40px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#9333ea', marginBottom: '15px' }}>
                  âœ… The Innovator 2.0 - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template17.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#9333ea', marginTop: '25px', marginBottom: '15px' }}>
                  âš ï¸ The Innovator 2.0 - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template17.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  âœ… The Code - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template18.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginTop: '25px', marginBottom: '15px' }}>
                  âš ï¸ The Code - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template18.cons.map((item, index) => (
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
              See how these tech-focused templates look side by side
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#9333ea', marginBottom: '20px', textAlign: 'center' }}>
                  The Innovator 2.0
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
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px 20px'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '20px' }}>Jane Doe</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                      <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '0.8rem', color: '#9333ea', fontWeight: 'bold' }}>INTERNSHIP</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Software Dev</div>
                      </div>
                      <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '0.8rem', color: '#9333ea', fontWeight: 'bold' }}>PROJECT</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>E-commerce App</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <span style={{ background: '#9333ea20', color: '#9333ea', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>React</span>
                      <span style={{ background: '#9333ea20', color: '#9333ea', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>Node.js</span>
                      <span style={{ background: '#9333ea20', color: '#9333ea', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>Python</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/17" style={{ color: '#9333ea', textDecoration: 'underline' }}>
                      View Full Details â†’
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px', textAlign: 'center' }}>
                  The Code
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
                    background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px 20px'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>John Smith</div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>github.com/johnsmith â€¢ linkedin.com/in/johnsmith</div>
                    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>ðŸ’» Projects</div>
                      <div style={{ background: 'white', padding: '12px', borderRadius: '8px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 'bold' }}>TaskMaster Pro <span style={{ color: '#2563eb', fontSize: '0.8rem' }}>ðŸ”—</span></div>
                        <div style={{ fontSize: '0.8rem' }}>React, Node.js, MongoDB</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ background: '#2563eb20', color: '#2563eb', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>JavaScript</span>
                      <span style={{ background: '#2563eb20', color: '#2563eb', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>React</span>
                      <span style={{ background: '#2563eb20', color: '#2563eb', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>Python</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/18" style={{ color: '#2563eb', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#9333ea', marginBottom: '10px' }}>The Innovator 2.0</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Card-based project showcase</li>
                    <li>Internship-focused layout</li>
                    <li>Rounded corners on cards</li>
                    <li>Modern, friendly aesthetic</li>
                    <li>Colorful tech tags</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Code</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Project links with icons</li>
                    <li>GitHub integration ready</li>
                    <li>Developer-specific icons</li>
                    <li>Clean, technical aesthetic</li>
                    <li>Skills matrix layout</li>
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
              Which Template Fits Your Tech Career?
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
                borderTop: '5px solid #9333ea'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#9333ea', marginBottom: '20px' }}>
                  The Innovator 2.0
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template17.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#f3e8ff',
                      color: '#9333ea',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Innovator 2.0 is designed for students, interns, and junior developers entering the tech industry. Its card-based layout puts projects and internships front and center, helping candidates with limited experience showcase their potential. Perfect for university career fairs, internship applications, and entry-level tech roles.
                </p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #2563eb'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px' }}>
                  The Code
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Industries:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template18.industries.map((industry, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#dbeafe',
                      color: '#2563eb',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {industry}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Code template is built for professional software engineers who want to showcase their technical work. With project links, GitHub integration, and a comprehensive skills matrix, it speaks directly to technical recruiters and hiring managers. Ideal for experienced developers, full-stack engineers, and specialized tech roles.
                </p>
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
                  <h4 style={{ color: '#9333ea', marginBottom: '10px' }}>Choose The Innovator 2.0 if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're a student or recent graduate</li>
                    <li style={{ marginBottom: '8px' }}>You're applying for internships</li>
                    <li style={{ marginBottom: '8px' }}>You have 0-2 years of experience</li>
                    <li style={{ marginBottom: '8px' }}>You want to highlight academic projects</li>
                    <li style={{ marginBottom: '8px' }}>You're attending career fairs</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>Choose The Code if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're an experienced developer</li>
                    <li style={{ marginBottom: '8px' }}>You have a strong GitHub presence</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to tech companies</li>
                    <li style={{ marginBottom: '8px' }}>You want to showcase live projects</li>
                    <li style={{ marginBottom: '8px' }}>You need a comprehensive skills matrix</li>
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
                background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #e9d5ff'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸŽ“</div>
                <h3 style={{ fontSize: '1.5rem', color: '#9333ea', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Innovator 2.0
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Innovator 2.0 is your best bet if you're starting your tech career. Its card-based design helps you showcase projects and internships in a way that compensates for limited work experience. Tech recruiters at startups and innovative companies will appreciate the modern, fresh approach.
                </p>
                <Link 
                  href="/editor/17"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#9333ea',
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
                border: '1px solid #bfdbfe'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸ‘¨â€ðŸ’»</div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Code
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Code is the professional's choice for software engineering roles. With project links, GitHub integration, and a comprehensive skills matrix, it gives technical recruiters exactly what they're looking for. If you have a portfolio of work to showcase, this template will help you stand out.
                </p>
                <Link 
                  href="/editor/18"
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
                  Create Resume with The Code
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
                ðŸ’¡ Expert Tip: Career Progression Strategy
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                Many developers start with The Innovator 2.0 during their job search for internships and entry-level positions, then transition to The Code as they gain experience and build a portfolio. Both templates are free, so you can keep both versions updated for different types of applications!
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
              { id: '1-vs-3', name: 'The Professional vs The Executive' },
              { id: '2-vs-3', name: 'The Innovator vs The Executive' },
              { id: '3-vs-4', name: 'The Executive vs The Strategist' },
              { id: '5-vs-6', name: 'The Minimalist vs The Architect' },
              { id: '7-vs-8', name: 'The Scholar vs The Traditionalist' },
              { id: '9-vs-10', name: 'The Modernist vs The Essential' },
              { id: '17-vs-19', name: 'The Innovator 2.0 vs The Scholar 2.0' },
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
                  e.currentTarget.style.borderColor = '#2563eb';
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
                q: 'Which template is better for entry-level tech jobs?',
                a: 'The Innovator 2.0 is specifically designed for students, interns, and junior developers. Its card-based layout helps highlight projects and internships, making it ideal for those with limited professional experience.'
              },
              {
                q: 'Can I include links to my GitHub in The Code template?',
                a: 'Yes! The Code template is built with GitHub integration in mind. You can include links to your repositories, live demos, and other project URLs throughout the template.'
              },
              {
                q: 'Are these templates ATS-friendly for tech companies?',
                a: 'Both templates are designed to be ATS-friendly while maintaining visual appeal. The Code has a slightly more traditional structure that some ATS systems prefer, while The Innovator 2.0 uses clean card layouts that modern ATS can parse.'
              },
              {
                q: 'Which template has better skill showcase?',
                a: 'The Code features a more comprehensive skills matrix with proficiency levels, while The Innovator 2.0 uses simple tech tags. Choose The Code if you need to show skill levels, or The Innovator 2.0 for a cleaner, simpler approach.'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.2rem', color: '#2563eb', marginBottom: '8px' }}>
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
