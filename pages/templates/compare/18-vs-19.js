// pages/templates/compare/18-vs-19.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate18vs19() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Code vs The Scholar 2.0",
    "description": "Compare Template 18 (The Code) and Template 19 (The Scholar 2.0) side by side. Find out which resume template is best for your profession - developer vs academic.",
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
        "name": "The Code vs The Scholar 2.0",
        "item": "https://freeresumemaker.xyz/templates/compare/18-vs-19"
      }
    ]
  };

  // Template data based on TemplateSelector.js
  const template18 = {
    id: 18,
    name: 'The Code',
    category: 'Developer/Technical',
    description: 'Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.',
    longDescription: 'The Code template is purpose-built for software engineers and developers. It features project links that actually work, technology tags for skills visualization, and code-friendly icons throughout. The layout prioritizes technical projects and coding expertise, making it perfect for GitHub portfolios and developer job applications.',
    features: [
      'Project links with URLs',
      'Tech tags for skills',
      'Code-friendly icons',
      'Developer-focused layout',
      'GitHub integration ready',
      'Programming language highlighting',
      'Project showcase section',
      'Technical skills grid'
    ],
    image: '/assets/template-previews/template-18.png',
    experienceCount: '3',
    skillsCount: '12',
    languagesCount: '3',
    layout: 'Two-column with project focus',
    color: 'Developer Blue',
    bestFor: ['Software Engineers', 'Web Developers', 'Programmers', 'Tech Leads', 'DevOps Engineers'],
    industries: ['Technology', 'Software Development', 'IT', 'Startups', 'Tech Companies'],
    pros: [
      'Perfect for showcasing coding projects',
      'Tech tags make skills instantly recognizable',
      'Project links allow recruiters to see your work',
      'Developer-optimized layout',
      'ATS-friendly while looking technical'
    ],
    cons: [
      'Too technical for non-development roles',
      'Limited space for traditional job descriptions',
      'May not suit management positions'
    ]
  };

  const template19 = {
    id: 19,
    name: 'The Scholar 2.0',
    category: 'Academic/Research',
    description: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    longDescription: 'The Scholar 2.0 template emphasizes academic achievements with its distinctive white-box education styling. Designed for researchers, professors, and academics, it provides dedicated space for publications, research projects, and teaching experience. The clean, scholarly layout conveys credibility in educational settings.',
    features: [
      'White-box education styling',
      'Academic focus',
      'Clean layout',
      'Research showcase',
      'Publications section',
      'Teaching experience highlighting',
      'Academic references',
      'Conference presentations'
    ],
    image: '/assets/template-previews/template-19.png',
    experienceCount: '4',
    skillsCount: '8',
    languagesCount: '4',
    layout: 'Two-column academic',
    color: 'Scholarly Navy',
    bestFor: ['Professors', 'Researchers', 'PhD Candidates', 'Educators', 'Academics'],
    industries: ['Education', 'Research', 'Universities', 'Think Tanks', 'Academic Institutions'],
    pros: [
      'Perfect for academic job applications',
      'White-box education styling highlights degrees',
      'Dedicated publications section',
      'Professional scholarly appearance',
      'Respected in academic circles'
    ],
    cons: [
      'May appear too academic for industry roles',
      'Less focus on technical projects',
      'Traditional design may not appeal to startups'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 18 (The Code) vs Template 19 (The Scholar 2.0). The Code offers developer-focused design with tech tags and project links, while The Scholar 2.0 features academic styling for researchers and educators. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 18 vs 19: The Code vs The Scholar 2.0 | Compare Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 18 vs 19, The Code template, The Scholar 2.0 template, developer vs academic resume, best resume template for software engineers, best resume template for professors" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 18 vs 19: The Code vs The Scholar 2.0 | Compare Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-18-vs-19.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/18-vs-19" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 18 vs 19: The Code vs The Scholar 2.0" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-18-vs-19.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/18-vs-19" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Code vs The Scholar 2.0</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 18 vs Template 19: <span style={{ color: '#2563eb' }}>The Code</span> vs <span style={{ color: '#1e3a8a' }}>The Scholar 2.0</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Developer toolkit meets academic excellence. Which professional path does your resume need to support?
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
              {tab === 'industry' && 'ðŸ¢ Profession Fit'}
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
                  <img 
                    src={template18.image}
                    alt="The Code template preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('div');
                      fallback.style.cssText = `
                        width: 100%;
                        aspect-ratio: 1/1.414;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 3rem; margin-bottom: 10px;">ðŸ‘¨â€ðŸ’»</div>
                          <div style="font-weight: bold; font-size: 1.2rem;">The Code</div>
                          <div style="font-size: 0.9rem; margin-top: 5px;">Developer Template</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
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

              {/* Template 19 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #1e3a8a'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#1e3a8a',
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
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('div');
                      fallback.style.cssText = `
                        width: 100%;
                        aspect-ratio: 1/1.414;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 3rem; margin-bottom: 10px;">ðŸŽ“</div>
                          <div style="font-weight: bold; font-size: 1.2rem;">The Scholar 2.0</div>
                          <div style="font-size: 0.9rem; margin-top: 5px;">Academic Template</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#1e3a8a' }}>
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
                    background: '#1e3a8a',
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
                    color: '#1e3a8a',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #1e3a8a'
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
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>
                    {template19.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Max Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>
                    {template19.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {template18.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>
                    {template19.languagesCount}
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
                <h3 style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template18.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '15px' }}>
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#2563eb' }}>The Code</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#1e3a8a' }}>The Scholar 2.0</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Primary Focus', t1: 'Software Development', t2: 'Academic Research' },
                    { feature: 'Project Links', t1: 'âœ“ Yes, clickable URLs', t2: 'âœ— No' },
                    { feature: 'Tech Tags', t1: 'âœ“ Yes (programming languages)', t2: 'âœ— No' },
                    { feature: 'Publications Section', t1: 'âœ— No', t2: 'âœ“ Yes, dedicated' },
                    { feature: 'White-Box Education', t1: 'âœ— No', t2: 'âœ“ Yes, signature feature' },
                    { feature: 'Code-Friendly Icons', t1: 'âœ“ Yes', t2: 'âœ— No' },
                    { feature: 'Research Showcase', t1: 'âœ— No', t2: 'âœ“ Yes' },
                    { feature: 'Teaching Experience', t1: 'âœ— No', t2: 'âœ“ Yes' },
                    { feature: 'GitHub Integration', t1: 'âœ“ Yes', t2: 'âœ— No' },
                    { feature: 'Conference Presentations', t1: 'âœ— No', t2: 'âœ“ Yes' },
                    { feature: 'Skills Display', t1: 'Tech tags grid (12 skills)', t2: 'Standard grid (8 skills)' },
                    { feature: 'Academic References', t1: 'âœ— No', t2: 'âœ“ Yes' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 11 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('âœ“') ? (
                          <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('âœ“') ? (
                          <span style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '15px' }}>
                  âœ… The Scholar 2.0 - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template19.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#1e3a8a', marginTop: '25px', marginBottom: '15px' }}>
                  âš ï¸ The Scholar 2.0 - Cons
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
              See how these templates look side by side
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}>
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
                  <img 
                    src={template18.image}
                    alt="The Code template full preview"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('div');
                      fallback.style.cssText = `
                        width: 100%;
                        max-width: 400px;
                        margin: 0 auto;
                        aspect-ratio: 1/1.414;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 4rem; margin-bottom: 15px;">ðŸ‘¨â€ðŸ’»</div>
                          <div style="font-weight: bold; font-size: 1.5rem;">The Code</div>
                          <div style="margin-top: 10px;">Developer Template</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/18" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                      View Full Details â†’
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>
                  The Scholar 2.0
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
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('div');
                      fallback.style.cssText = `
                        width: 100%;
                        max-width: 400px;
                        margin: 0 auto;
                        aspect-ratio: 1/1.414;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 4rem; margin-bottom: 15px;">ðŸŽ“</div>
                          <div style="font-weight: bold; font-size: 1.5rem;">The Scholar 2.0</div>
                          <div style="margin-top: 10px;">Academic Template</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/19" style={{ color: '#1e3a8a', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>The Code</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Tech tags for programming languages</li>
                    <li>Project links with URL icons</li>
                    <li>Code-friendly developer icons</li>
                    <li>Modern, technical aesthetic</li>
                    <li>GitHub-style elements</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>The Scholar 2.0</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>White-box education styling</li>
                    <li>Publications section format</li>
                    <li>Academic, scholarly appearance</li>
                    <li>Research project layout</li>
                    <li>Traditional academic hierarchy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profession Fit Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Which Template Fits Your Profession?
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
                borderTop: '5px solid #2563eb'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '20px' }}>
                  The Code
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Professions:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template18.bestFor.map((profession, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#dbeafe',
                      color: '#2563eb',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {profession}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Code template speaks the language of developers. Recruiters in tech immediately recognize the tech tags, project links, and developer-focused layout. It's designed to showcase your GitHub presence and coding projects in the most effective way possible.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: '#dbeafe', borderRadius: '8px' }}>
                  <strong style={{ color: '#2563eb' }}>Perfect for:</strong> Software engineering roles, web development positions, technical lead applications
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #1e3a8a'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#1e3a8a', marginBottom: '20px' }}>
                  The Scholar 2.0
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Ideal Professions:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {template19.bestFor.map((profession, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#dbeafe',
                      color: '#1e3a8a',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {profession}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Scholar 2.0 is trusted in academic circles. Its white-box education styling and publications section format exactly what search committees expect. Whether you're applying for tenure-track positions or research roles, this template conveys scholarly credibility.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: '#dbeafe', borderRadius: '8px' }}>
                  <strong style={{ color: '#1e3a8a' }}>Perfect for:</strong> Faculty positions, research roles, postdoctoral applications, academic conferences
                </div>
              </div>
            </div>

            {/* Profession Decision Guide */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333' }}>
                Quick Profession Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>Choose The Code if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're a software engineer or developer</li>
                    <li style={{ marginBottom: '8px' }}>You want to showcase GitHub projects</li>
                    <li style={{ marginBottom: '8px' }}>You have programming languages to highlight</li>
                    <li style={{ marginBottom: '8px' }}>You're applying to tech companies</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>Choose The Scholar 2.0 if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're a professor or researcher</li>
                    <li style={{ marginBottom: '8px' }}>You have publications to list</li>
                    <li style={{ marginBottom: '8px' }}>You're applying for academic positions</li>
                    <li style={{ marginBottom: '8px' }}>You need to highlight teaching experience</li>
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
                background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #93c5fd'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸ’»</div>
                <h3 style={{ fontSize: '1.5rem', color: '#2563eb', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Code
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  If you live and breathe code, The Code template is your professional home. It's built by developers for developers, with every element designed to showcase your technical expertise. From project links to tech tags, your resume becomes a portfolio that hiring managers at top tech companies want to see.
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

              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #93c5fd'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>ðŸŽ“</div>
                <h3 style={{ fontSize: '1.5rem', color: '#1e3a8a', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Scholar 2.0
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  When your academic credentials matter most, The Scholar 2.0 presents them with the dignity they deserve. Its white-box education styling and publications section format exactly what search committees expect. For faculty positions, research roles, and academic advancement, this template opens doors.
                </p>
                <Link 
                  href="/editor/19"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#1e3a8a',
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
              border: '1px solid #ffc107'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#856404' }}>
                ðŸ’¡ Industry Transition Tip
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                Moving between industry and academia? Keep both templates ready. Use The Code for tech industry applications and The Scholar 2.0 for academic positions. With our free builder, you can maintain multiple versions of your resume tailored to each opportunity.
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
              { id: '17-vs-18', name: 'The Innovator 2.0 vs The Code' },
              { id: '17-vs-19', name: 'The Innovator 2.0 vs The Scholar 2.0' },
              { id: '18-vs-19', name: 'The Code vs The Scholar 2.0' },
              { id: '19-vs-20', name: 'The Scholar 2.0 vs The Engineer' },
              { id: '5-vs-6', name: 'The Minimalist vs The Architect' },
              { id: '7-vs-8', name: 'The Scholar vs The Traditionalist' },
              { id: '9-vs-10', name: 'The Modernist vs The Essential' },
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
                q: 'Can I use The Code if I\'m not a developer?',
                a: 'The Code is optimized for technical roles. If you\'re in a non-technical field, The Scholar 2.0 or other templates would better showcase your experience.'
              },
              {
                q: 'Which template is better for ATS systems?',
                a: 'Both are ATS-friendly. The Code\'s tech tags are machine-readable, while The Scholar 2.0\'s clean academic structure also passes ATS checks.'
              },
              {
                q: 'Can I include both publications and GitHub projects?',
                a: 'Choose based on your audience. The Scholar 2.0 for academic roles, The Code for tech positions. Each is optimized for its specific purpose.'
              },
              {
                q: 'Are these templates really free?',
                a: 'Yes! All 20 templates are completely free with no hidden costs. You can create, download, and print as many resumes as you need.'
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
