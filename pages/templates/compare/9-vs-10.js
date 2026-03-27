import React from 'react';
// pages/templates/compare/9-vs-10.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareTemplate9vs10() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Template Comparison: The Modernist vs The Essential",
    "description": "Compare Template 9 (The Modernist) and Template 10 (The Essential) side by side. Find out which resume template is best for your career level.",
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
      "ratingCount": "143"
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
        "name": "The Modernist vs The Essential",
        "item": "https://freeresumemaker.xyz/templates/compare/9-vs-10"
      }
    ]
  };

  // Template data based on TemplateSelector.js
  const template9 = {
    id: 9,
    name: 'The Modernist',
    category: 'Contemporary/Universal',
    description: 'Fresh contemporary design with equal spacing and modern typography. Balanced layout for all industries.',
    longDescription: 'The Modernist template embodies contemporary design principles with perfect symmetry and equal spacing throughout. Its modern typography and balanced layout make it versatile enough for any industry while maintaining a fresh, current aesthetic. This template is perfect for professionals who want a modern look without being too trendy or conservative.',
    features: [
      'Equal spacing throughout',
      'Modern typography',
      'Balanced two-column layout',
      'ATS-friendly structure',
      'Clean section dividers',
      'Professional color accents',
      'Multiple experience entries',
      'Skills grid with modern styling'
    ],
    image: '/assets/template-previews/template-9.png',
    experienceCount: '3',
    skillsCount: '8',
    languagesCount: '3',
    layout: 'Two-column with equal spacing',
    color: 'Fresh Teal',
    bestFor: ['Mid-level professionals', 'Career changers', 'Recent graduates', 'Versatile job seekers'],
    industries: ['Technology', 'Business', 'Creative', 'Education', 'Healthcare'],
    pros: [
      'Versatile design works across industries',
      'Modern but professional appearance',
      'Excellent visual hierarchy with equal spacing',
      'Supports multiple experience entries',
      'ATS-friendly while looking contemporary'
    ],
    cons: [
      'May not stand out as much as more creative templates',
      'Limited color customization options'
    ]
  };

  const template10 = {
    id: 10,
    name: 'The Essential',
    category: 'Entry-Level/Focused',
    description: 'Clean, focused design showing exactly one experience. Ideal for students, interns, and entry-level professionals.',
    longDescription: 'The Essential template takes a focused approach by highlighting a single, detailed experience entry. This makes it perfect for students, interns, and entry-level professionals who want to emphasize quality over quantity. The clean layout includes a skills grid and project showcase section, allowing fresh graduates to highlight their capabilities effectively.',
    features: [
      'Single experience focus',
      'Clean, minimal layout',
      'Skills grid display',
      'Project showcase section',
      'Education emphasis',
      'Internship highlighting',
      'Entry-level optimized',
      'Clear section organization'
    ],
    image: '/assets/template-previews/template-10.png',
    experienceCount: '1',
    skillsCount: '6',
    languagesCount: '2',
    layout: 'One-column with focused experience',
    color: 'Clean White with Blue Accents',
    bestFor: ['Students', 'Interns', 'Entry-level professionals', 'Recent graduates'],
    industries: ['All industries', 'Internships', 'Graduate programs', 'Entry-level positions'],
    pros: [
      'Perfect for limited work experience',
      'Highlights projects and education',
      'Clean, uncluttered design',
      'Great for internship applications',
      'Easy to read and scan'
    ],
    cons: [
      'Not suitable for experienced professionals',
      'Limited to one experience entry',
      'May appear too basic for senior roles'
    ]
  };

  // SEO-optimized meta description
  const metaDescription = `Compare Template 9 (The Modernist) vs Template 10 (The Essential). The Modernist offers balanced contemporary design for versatile professionals, while The Essential focuses on single experience ideal for students and entry-level. Find your perfect match.`;

  return (
    <>
      <Head>
        <title>Template 9 vs 10: The Modernist vs The Essential | Compare Resume Templates</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="compare resume templates, template 9 vs 10, The Modernist template, The Essential template, contemporary vs focused resume, best resume template for students, best resume template for entry level" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Template 9 vs 10: The Modernist vs The Essential | Compare Resume Templates" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/compare-9-vs-10.jpg" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/9-vs-10" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 9 vs 10: The Modernist vs The Essential" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/compare-9-vs-10.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/9-vs-10" />
        
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
          <span style={{ color: '#333', fontWeight: 500 }}>The Modernist vs The Essential</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Template 9 vs Template 10: <span style={{ color: '#0f766e' }}>The Modernist</span> vs <span style={{ color: '#0284c7' }}>The Essential</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Contemporary versatility meets focused simplicity. Which template matches your career stage?
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
                background: activeTab === tab ? '#0f766e' : 'white',
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
                  e.currentTarget.style.borderColor = '#0f766e';
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
              {tab === 'industry' && '🏢 Career Stage Fit'}
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
              {/* Template 9 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #0f766e'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#0f766e',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 9</span>
                  <img 
                    src={template9.image}
                    alt="The Modernist template preview"
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
                        background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 3rem; margin-bottom: 10px;">📄</div>
                          <div style="font-weight: bold; font-size: 1.2rem;">The Modernist</div>
                          <div style="font-size: 0.9rem; margin-top: 5px;">Template Preview</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#0f766e' }}>
                  {template9.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template9.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template9.description}
                </p>
                <Link 
                  href="/templates/9"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#0f766e',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 9
                </Link>
                <Link 
                  href="/editor/9"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#0f766e',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #0f766e'
                  }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Template 10 */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '2px solid #0284c7'
              }}>
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    background: '#0284c7',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>TEMPLATE 10</span>
                  <img 
                    src={template10.image}
                    alt="The Essential template preview"
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
                        background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 3rem; margin-bottom: 10px;">📄</div>
                          <div style="font-weight: bold; font-size: 1.2rem;">The Essential</div>
                          <div style="font-size: 0.9rem; margin-top: 5px;">Template Preview</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0 5px 0', color: '#0284c7' }}>
                  {template10.name}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', marginBottom: '15px' }}>
                  {template10.category}
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                  {template10.description}
                </p>
                <Link 
                  href="/templates/10"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#0284c7',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    marginRight: '10px'
                  }}
                >
                  View Template 10
                </Link>
                <Link 
                  href="/editor/10"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'white',
                    color: '#0284c7',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    border: '1px solid #0284c7'
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
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f766e' }}>
                    {template9.experienceCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0284c7' }}>
                    {template10.experienceCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Max Experience Entries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f766e' }}>
                    {template9.skillsCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0284c7' }}>
                    {template10.skillsCount}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>Skills Display</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f766e' }}>
                    {template9.languagesCount}
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#666' }}>vs</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0284c7' }}>
                    {template10.languagesCount}
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
                <h3 style={{ fontSize: '1.3rem', color: '#0f766e', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template9.bestFor.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0284c7', marginBottom: '15px' }}>
                  Best For:
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template10.bestFor.map((item, index) => (
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
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#0f766e' }}>The Modernist</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.1rem', color: '#0284c7' }}>The Essential</th>
                   </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Layout Style', t1: 'Two-column with equal spacing', t2: 'One-column focused layout' },
                    { feature: 'Experience Entries', t1: '✓ Multiple (up to 3)', t2: '✓ Single, detailed focus' },
                    { feature: 'Project Showcase', t1: '✗ No dedicated section', t2: '✓ Yes, included' },
                    { feature: 'Skills Display', t1: 'Grid layout (8 skills)', t2: 'Grid layout (6 skills)' },
                    { feature: 'Education Emphasis', t1: 'Standard education section', t2: '✓ Enhanced for students' },
                    { feature: 'Internship Highlighting', t1: 'Standard experience', t2: '✓ Internship optimized' },
                    { feature: 'Entry-Level Focus', t1: '✗ General purpose', t2: '✓ Yes, specialized' },
                    { feature: 'Equal Spacing Design', t1: '✓ Yes, signature feature', t2: '✗ No' },
                    { feature: 'Modern Typography', t1: '✓ Yes', t2: '✓ Yes' },
                    { feature: 'Languages Section', t1: '✓ Yes (3 max)', t2: '✓ Yes (2 max)' },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: index < 9 ? '1px solid #e9ecef' : 'none' }}>
                      <td style={{ padding: '15px 20px', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t1.includes('✓') ? (
                          <span style={{ color: '#0f766e', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t1}</span>
                        ) : (
                          <span style={{ color: '#333' }}>{row.t1}</span>
                        )}
                      </td>
                      <td style={{ padding: '15px 20px', textAlign: 'center' }}>
                        {row.t2.includes('✓') ? (
                          <span style={{ color: '#0284c7', fontWeight: 'bold', fontSize: '1.2rem' }}>{row.t2}</span>
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
                <h3 style={{ fontSize: '1.3rem', color: '#0f766e', marginBottom: '15px' }}>
                  ✓ The Modernist - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template9.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0f766e', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Modernist - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template9.cons.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#0284c7', marginBottom: '15px' }}>
                  ✓ The Essential - Pros
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template10.pros.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '1.3rem', color: '#0284c7', marginTop: '25px', marginBottom: '15px' }}>
                  ⚠️ The Essential - Cons
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {template10.cons.map((item, index) => (
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
                <h3 style={{ fontSize: '1.5rem', color: '#0f766e', marginBottom: '20px', textAlign: 'center' }}>
                  The Modernist
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template9.image}
                    alt="The Modernist template full preview"
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
                        background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 4rem; margin-bottom: 15px;">📄</div>
                          <div style="font-weight: bold; font-size: 1.5rem;">The Modernist</div>
                          <div style="margin-top: 10px;">Template Preview</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/9" style={{ color: '#0f766e', textDecoration: 'underline' }}>
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#0284c7', marginBottom: '20px', textAlign: 'center' }}>
                  The Essential
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={template10.image}
                    alt="The Essential template full preview"
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
                        background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 8px;
                        box-sizing: border-box;
                      `;
                      fallback.innerHTML = `
                        <div>
                          <div style="font-size: 4rem; margin-bottom: 15px;">📄</div>
                          <div style="font-weight: bold; font-size: 1.5rem;">The Essential</div>
                          <div style="margin-top: 10px;">Template Preview</div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/templates/10" style={{ color: '#0284c7', textDecoration: 'underline' }}>
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
                  <h4 style={{ color: '#0f766e', marginBottom: '10px' }}>The Modernist</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Equal spacing creates perfect symmetry</li>
                    <li>Modern, clean typography</li>
                    <li>Two-column balanced layout</li>
                    <li>Fresh teal color accents</li>
                    <li>Multiple experience sections</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#0284c7', marginBottom: '10px' }}>The Essential</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Clean, minimal one-column design</li>
                    <li>Single experience focus</li>
                    <li>Dedicated project showcase</li>
                    <li>Blue accent colors</li>
                    <li>Education and skills emphasis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career Stage Fit Tab */}
        {activeTab === 'industry' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Which Template Fits Your Career Stage?
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
                borderTop: '5px solid #0f766e'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#0f766e', marginBottom: '20px' }}>
                  The Modernist
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Perfect Career Stages:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {['Mid-Level', 'Career Changer', 'Experienced', 'Versatile'].map((stage, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e6fffa',
                      color: '#0f766e',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {stage}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Modernist is your go-to template if you have 3-10 years of experience or are changing careers. Its balanced layout showcases multiple roles effectively while maintaining a contemporary look that appeals to modern employers across industries.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: '#f1f5f9', borderRadius: '8px' }}>
                  <strong style={{ color: '#0f766e' }}>Ideal if you have:</strong> 3+ years experience, multiple positions, diverse skill set
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '30px',
                borderTop: '5px solid #0284c7'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: '#0284c7', marginBottom: '20px' }}>
                  The Essential
                </h3>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  <strong>Perfect Career Stages:</strong>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {['Student', 'Intern', 'Fresh Graduate', 'Entry-Level'].map((stage, index) => (
                    <span key={index} style={{
                      padding: '5px 15px',
                      background: '#e0f2fe',
                      color: '#0284c7',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {stage}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  The Essential is specifically designed for those starting their careers. Its focused layout lets you highlight internships, projects, and education - the things that matter most when you have limited work experience. Perfect for college students and recent graduates.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: '#f1f5f9', borderRadius: '8px' }}>
                  <strong style={{ color: '#0284c7' }}>Ideal if you have:</strong> 0-2 years experience, internships, academic projects, coursework
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
                Quick Career Stage Guide
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ color: '#0f766e', marginBottom: '10px' }}>Choose The Modernist if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You have 3+ years of experience</li>
                    <li style={{ marginBottom: '8px' }}>You're changing careers</li>
                    <li style={{ marginBottom: '8px' }}>You need to showcase multiple roles</li>
                    <li style={{ marginBottom: '8px' }}>You want a versatile, professional look</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#0284c7', marginBottom: '10px' }}>Choose The Essential if:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>You're a student or recent graduate</li>
                    <li style={{ marginBottom: '8px' }}>You're applying for internships</li>
                    <li style={{ marginBottom: '8px' }}>You want to highlight projects</li>
                    <li style={{ marginBottom: '8px' }}>You have one key experience to showcase</li>
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
                background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #99f6e4'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🎯</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0f766e', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Modernist
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Modernist is your perfect choice if you're an established professional who needs a versatile, contemporary template that works across industries. Its balanced design and equal spacing create a sophisticated look that appeals to modern employers while maintaining professional credibility.
                </p>
                <Link 
                  href="/editor/9"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#0f766e',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Modernist
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>🌱</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0284c7', textAlign: 'center', marginBottom: '15px' }}>
                  Choose The Essential
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                  The Essential is designed for your success as you start your career journey. Its focused, clean layout lets you make the most of internships, projects, and education. When you have one great experience to highlight, this template makes it shine.
                </p>
                <Link 
                  href="/editor/10"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    background: '#0284c7',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  Create Resume with The Essential
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
                💡 Career Growth Tip
              </h3>
              <p style={{ color: '#856404', lineHeight: '1.7', margin: 0 }}>
                Your resume needs evolve with your career. Start with The Essential as a student or intern, then transition to The Modernist as you gain experience. Both templates are free, so you can update your resume as you grow professionally!
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
                  e.currentTarget.style.borderColor = '#0f766e';
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
                q: 'Can I use The Essential if I have more than one job experience?',
                a: 'The Essential is optimized for a single detailed experience. If you have multiple positions, The Modernist would be a better choice as it supports up to 3 experience entries.'
              },
              {
                q: 'Which template is better for ATS systems?',
                a: 'Both templates are ATS-friendly. The Modernist uses a standard two-column layout that most systems handle well, while The Essential\'s clean one-column design is universally compatible.'
              },
              {
                q: 'Can I upgrade from The Essential to The Modernist later?',
                a: 'Absolutely! Our free resume builder lets you create unlimited resumes. You can start with The Essential and switch to The Modernist as your career progresses.'
              },
              {
                q: 'Are these templates really free?',
                a: 'Yes! All 20 templates are completely free with no hidden costs. You can create, download, and print as many resumes as you need.'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.2rem', color: '#0f766e', marginBottom: '8px' }}>
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