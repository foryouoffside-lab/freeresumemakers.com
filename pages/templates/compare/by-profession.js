// pages/templates/compare/by-profession.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CompareByProfession() {
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState('tech');

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Templates by Profession Guide",
    "description": "Find the best resume template for your profession. Complete guide with recommendations for tech, business, creative, academic, legal, and healthcare careers.",
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
        "name": "Compare",
        "item": "https://freeresumemakers.com/templates/compare"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Templates by Profession",
        "item": "https://freeresumemakers.com/templates/compare/by-profession"
      }
    ]
  };

  // Profession data with template recommendations
  const professionData = {
    tech: {
      name: 'Technology / IT',
      icon: '💻',
      color: '#2563eb',
      lightColor: '#dbeafe',
      description: 'For software engineers, developers, IT managers, and tech professionals.',
      tips: [
        'Highlight technical skills prominently',
        'Include GitHub/portfolio links',
        'Showcase projects and technologies',
        'Use modern, clean designs'
      ],
      recommendedTemplates: [
        { id: 2, name: 'The Innovator', reason: 'Modern design with tech-friendly layout' },
        { id: 5, name: 'The Minimalist', reason: 'Clean, ATS-friendly for developer applications' },
        { id: 17, name: 'The Innovator 2.0', reason: 'Card-based design perfect for project showcase' },
        { id: 18, name: 'The Code', reason: 'Developer-focused with tech tags and project links' },
        { id: 20, name: 'The Engineer', reason: 'Project-first layout for software engineers' }
      ],
      atsPreference: 'balanced',
      experienceLevels: {
        entry: [17, 5],
        mid: [2, 18],
        senior: [20, 3]
      }
    },
    business: {
      name: 'Business / Management',
      icon: '💼',
      color: '#0056b3',
      lightColor: '#cce5ff',
      description: 'For managers, executives, consultants, and business professionals.',
      tips: [
        'Focus on achievements and metrics',
        'Use professional, structured layout',
        'Highlight leadership experience',
        'Keep design conservative but polished'
      ],
      recommendedTemplates: [
        { id: 1, name: 'The Professional', reason: 'Classic corporate design trusted by recruiters' },
        { id: 3, name: 'The Executive', reason: 'Premium dark theme for senior leaders' },
        { id: 4, name: 'The Strategist', reason: 'Timeline layout perfect for consultants' },
        { id: 9, name: 'The Modernist', reason: 'Balanced contemporary design' },
        { id: 13, name: 'The Timeline', reason: 'Visual progression for management roles' }
      ],
      atsPreference: 'ats-friendly',
      experienceLevels: {
        entry: [9, 1],
        mid: [4, 13],
        senior: [3, 1]
      }
    },
    creative: {
      name: 'Creative / Design',
      icon: '🎨',
      color: '#8b5cf6',
      lightColor: '#ede9fe',
      description: 'For designers, artists, creative directors, and marketing creatives.',
      tips: [
        'Showcase visual design skills',
        'Include portfolio links prominently',
        'Use creative layouts that reflect your style',
        'Balance creativity with readability'
      ],
      recommendedTemplates: [
        { id: 2, name: 'The Innovator', reason: 'Visual connectors show creative thinking' },
        { id: 6, name: 'The Architect', reason: 'Structured yet visually interesting' },
        { id: 7, name: 'The Scholar', reason: 'Elegant geometric design' },
        { id: 16, name: 'The Minimal', reason: 'Avatar initials for minimalist portfolios' },
        { id: 17, name: 'The Innovator 2.0', reason: 'Card-based design for creative portfolios' }
      ],
      atsPreference: 'creative',
      experienceLevels: {
        entry: [16, 17],
        mid: [2, 6],
        senior: [7, 2]
      }
    },
    academic: {
      name: 'Academic / Research',
      icon: '📚',
      color: '#059669',
      lightColor: '#d1fae5',
      description: 'For professors, researchers, PhD candidates, and educators.',
      tips: [
        'Emphasize publications and research',
        'Include teaching experience',
        'List conferences and grants',
        'Use scholarly, professional design'
      ],
      recommendedTemplates: [
        { id: 7, name: 'The Scholar', reason: 'Elegant design with sidebar achievements' },
        { id: 11, name: 'The Composer', reason: 'Serif typography for academic elegance' },
        { id: 19, name: 'The Scholar 2.0', reason: 'White-box education styling for credentials' },
        { id: 3, name: 'The Executive', reason: 'Certifications focus for senior academics' },
        { id: 9, name: 'The Modernist', reason: 'Clean layout for research-focused CVs' }
      ],
      atsPreference: 'balanced',
      experienceLevels: {
        entry: [19, 11],
        mid: [7, 9],
        senior: [3, 7]
      }
    },
    legal: {
      name: 'Legal / Government',
      icon: '⚖️',
      color: '#4b5563',
      lightColor: '#e5e7eb',
      description: 'For lawyers, paralegals, judges, and government employees.',
      tips: [
        'Use conservative, traditional formatting',
        'Emphasize credentials and bar admissions',
        'Avoid colors and creative elements',
        'Ensure perfect ATS compatibility'
      ],
      recommendedTemplates: [
        { id: 8, name: 'The Traditionalist', reason: 'Black & white design trusted by law firms' },
        { id: 1, name: 'The Professional', reason: 'Classic corporate style for legal' },
        { id: 14, name: 'The Monochrome', reason: 'Bold black & white with strong hierarchy' },
        { id: 10, name: 'The Essential', reason: 'Clean, no-frills design for government' },
        { id: 5, name: 'The Minimalist', reason: 'ATS-optimized for government applications' }
      ],
      atsPreference: 'ats-friendly',
      experienceLevels: {
        entry: [10, 5],
        mid: [8, 1],
        senior: [14, 8]
      }
    },
    healthcare: {
      name: 'Healthcare / Medical',
      icon: '🏥',
      color: '#0d9488',
      lightColor: '#ccfbf1',
      description: 'For doctors, nurses, healthcare administrators, and medical professionals.',
      tips: [
        'Highlight certifications and licenses',
        'Include clinical experience clearly',
        'Use clean, professional design',
        'Emphasize patient care metrics'
      ],
      recommendedTemplates: [
        { id: 5, name: 'The Minimalist', reason: 'Clean design for medical applications' },
        { id: 1, name: 'The Professional', reason: 'Trusted format for healthcare systems' },
        { id: 8, name: 'The Traditionalist', reason: 'Conservative design for hospitals' },
        { id: 10, name: 'The Essential', reason: 'Focused layout for clinical experience' },
        { id: 19, name: 'The Scholar 2.0', reason: 'Certifications focus for medical credentials' }
      ],
      atsPreference: 'ats-friendly',
      experienceLevels: {
        entry: [10, 5],
        mid: [1, 19],
        senior: [8, 3]
      }
    },
    engineering: {
      name: 'Engineering',
      icon: '🔧',
      color: '#d97706',
      lightColor: '#fef3c7',
      description: 'For mechanical, civil, electrical, and chemical engineers.',
      tips: [
        'Showcase technical projects',
        'Include relevant certifications',
        'Use structured, organized layout',
        'Highlight problem-solving skills'
      ],
      recommendedTemplates: [
        { id: 6, name: 'The Architect', reason: 'Technical layout perfect for engineers' },
        { id: 4, name: 'The Strategist', reason: 'Timeline for project-based experience' },
        { id: 12, name: 'The Blueprint', reason: 'Blueprint-style for engineering roles' },
        { id: 15, name: 'The Compact', reason: 'Space-efficient for technical details' },
        { id: 20, name: 'The Engineer', reason: 'Project-first design for engineers' }
      ],
      atsPreference: 'balanced',
      experienceLevels: {
        entry: [12, 6],
        mid: [4, 15],
        senior: [20, 6]
      }
    },
    sales: {
      name: 'Sales / Marketing',
      icon: '📊',
      color: '#dc2626',
      lightColor: '#fee2e2',
      description: 'For sales representatives, account executives, and marketing professionals.',
      tips: [
        'Highlight quota achievement and metrics',
        'Showcase revenue growth',
        'Use achievement-focused bullet points',
        'Professional but approachable design'
      ],
      recommendedTemplates: [
        { id: 2, name: 'The Innovator', reason: 'Modern design for marketing roles' },
        { id: 9, name: 'The Modernist', reason: 'Balanced for sales achievements' },
        { id: 4, name: 'The Strategist', reason: 'Timeline for career progression' },
        { id: 13, name: 'The Timeline', reason: 'Visual growth for sales careers' },
        { id: 1, name: 'The Professional', reason: 'Corporate style for enterprise sales' }
      ],
      atsPreference: 'balanced',
      experienceLevels: {
        entry: [9, 2],
        mid: [4, 13],
        senior: [1, 3]
      }
    },
    education: {
      name: 'Education / Teaching',
      icon: '📖',
      color: '#7c3aed',
      lightColor: '#ede9fe',
      description: 'For teachers, administrators, and education professionals.',
      tips: [
        'Emphasize teaching philosophy',
        'Highlight classroom achievements',
        'Include certifications and credentials',
        'Clean, professional design'
      ],
      recommendedTemplates: [
        { id: 7, name: 'The Scholar', reason: 'Academic-focused design' },
        { id: 11, name: 'The Composer', reason: 'Elegant serif for education' },
        { id: 19, name: 'The Scholar 2.0', reason: 'White-box education styling' },
        { id: 5, name: 'The Minimalist', reason: 'Clean focus on teaching experience' },
        { id: 9, name: 'The Modernist', reason: 'Balanced layout for educators' }
      ],
      atsPreference: 'balanced',
      experienceLevels: {
        entry: [19, 11],
        mid: [7, 9],
        senior: [7, 3]
      }
    }
  };

  // Profession list for navigation
  const professions = [
    { id: 'tech', name: 'Technology / IT', icon: '💻' },
    { id: 'business', name: 'Business / Management', icon: '💼' },
    { id: 'creative', name: 'Creative / Design', icon: '🎨' },
    { id: 'academic', name: 'Academic / Research', icon: '📚' },
    { id: 'legal', name: 'Legal / Government', icon: '⚖️' },
    { id: 'healthcare', name: 'Healthcare / Medical', icon: '🏥' },
    { id: 'engineering', name: 'Engineering', icon: '🔧' },
    { id: 'sales', name: 'Sales / Marketing', icon: '📊' },
    { id: 'education', name: 'Education / Teaching', icon: '📖' }
  ];

  // SEO-optimized meta description
  const metaDescription = `Find the best resume template for your profession. Expert recommendations for tech, business, creative, academic, legal, healthcare, engineering, sales, and education careers. Compare templates by industry.`;

  return (
    <>
      <Head>
        <title>Resume Templates by Profession: Find the Perfect Template for Your Career | Free Resume Builder</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="resume templates by profession, best resume for tech, business resume templates, creative resume designs, academic CV templates, legal resume format, healthcare resume templates, engineering resume, sales resume, teaching resume, industry-specific resumes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Templates by Profession: Find the Perfect Template for Your Career" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://freeresumemakers.com/assets/og/by-profession.jpg" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/by-profession" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Free Resume Builder" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Templates by Profession: Find the Perfect Template for Your Career" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://freeresumemakers.com/assets/og/by-profession.jpg" />
        <meta name="twitter:creator" content="@freeresumebuilder" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/by-profession" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Additional SEO meta */}
        <meta name="author" content="Free Resume Builder" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
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
          <span style={{ color: '#333', fontWeight: 500 }}>Templates by Profession</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 15px 0',
            color: '#1a1a1a',
            lineHeight: '1.2'
          }}>
            Resume Templates by Profession
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Different careers need different resume styles. Find the perfect template for your industry, 
            experience level, and career goals with our profession-specific recommendations.
          </p>
        </div>

        {/* Profession Pills Navigation */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {professions.map((prof) => (
            <button
              key={prof.id}
              onClick={() => setSelectedProfession(prof.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '40px',
                border: 'none',
                background: selectedProfession === prof.id ? professionData[prof.id].color : '#f8f9fa',
                color: selectedProfession === prof.id ? 'white' : '#333',
                fontSize: '1rem',
                fontWeight: selectedProfession === prof.id ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedProfession === prof.id ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedProfession !== prof.id) {
                  e.currentTarget.style.background = '#e9ecef';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedProfession !== prof.id) {
                  e.currentTarget.style.background = '#f8f9fa';
                }
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{prof.icon}</span>
              <span>{prof.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Profession Content */}
        {professionData[selectedProfession] && (
          <div>
            {/* Profession Header */}
            <div style={{
              background: professionData[selectedProfession].lightColor,
              borderRadius: '16px',
              padding: '30px',
              marginBottom: '30px',
              border: `1px solid ${professionData[selectedProfession].color}30`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <span style={{
                  fontSize: '3rem',
                  background: 'white',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {professionData[selectedProfession].icon}
                </span>
                <div>
                  <h2 style={{
                    fontSize: '2rem',
                    margin: '0 0 5px 0',
                    color: professionData[selectedProfession].color
                  }}>
                    {professionData[selectedProfession].name}
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#555', margin: 0 }}>
                    {professionData[selectedProfession].description}
                  </p>
                </div>
              </div>

              {/* ATS Preference Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'white',
                borderRadius: '30px',
                marginTop: '10px'
              }}>
                <span style={{ fontWeight: 'bold' }}>ATS Preference:</span>
                {professionData[selectedProfession].atsPreference === 'ats-friendly' && (
                  <>
                    <span style={{ color: '#0056b3', fontWeight: 'bold' }}>ATS-Friendly</span>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>(prioritize ATS compatibility)</span>
                  </>
                )}
                {professionData[selectedProfession].atsPreference === 'creative' && (
                  <>
                    <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Creative Designs</span>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>(stand out visually)</span>
                  </>
                )}
                {professionData[selectedProfession].atsPreference === 'balanced' && (
                  <>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Balanced</span>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>(both styles work well)</span>
                  </>
                )}
              </div>
            </div>

            {/* Professional Tips */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '25px',
              marginBottom: '30px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: professionData[selectedProfession].color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>💡</span> Professional Tips for {professionData[selectedProfession].name}
              </h3>
              <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px',
                paddingLeft: '20px'
              }}>
                {professionData[selectedProfession].tips.map((tip, index) => (
                  <li key={index} style={{ color: '#555', lineHeight: '1.6' }}>{tip}</li>
                ))}
              </ul>
            </div>

            {/* Top Recommended Templates */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: professionData[selectedProfession].color
              }}>
                Top 5 Recommended Templates
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {professionData[selectedProfession].recommendedTemplates.map((template, index) => (
                  <Link
                    key={template.id}
                    href={`/templates/${template.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: '12px',
                      border: `1px solid ${professionData[selectedProfession].color}30`,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = `0 10px 25px ${professionData[selectedProfession].color}20`;
                      e.currentTarget.style.borderColor = professionData[selectedProfession].color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = `${professionData[selectedProfession].color}30`;
                    }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: professionData[selectedProfession].color,
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        height: '140px',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: `1px solid ${professionData[selectedProfession].color}20`
                      }}>
                        <div style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '8px',
                          background: professionData[selectedProfession].lightColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2rem',
                          color: professionData[selectedProfession].color
                        }}>
                          📄
                        </div>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h4 style={{
                          fontSize: '1.2rem',
                          margin: '0 0 8px 0',
                          color: professionData[selectedProfession].color
                        }}>
                          {template.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '12px' }}>
                          {template.reason}
                        </p>
                        <div style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          background: professionData[selectedProfession].lightColor,
                          color: professionData[selectedProfession].color,
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          View Template →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Experience Level Recommendations */}
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '25px',
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                color: professionData[selectedProfession].color,
                textAlign: 'center'
              }}>
                Recommendations by Experience Level
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {/* Entry Level */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px'
                  }}>🌱</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Entry Level</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {professionData[selectedProfession].experienceLevels.entry.map((id) => {
                      const template = professionData[selectedProfession].recommendedTemplates.find(t => t.id === id);
                      return template ? (
                        <Link
                          key={id}
                          href={`/templates/${id}`}
                          style={{
                            padding: '8px',
                            background: professionData[selectedProfession].lightColor,
                            color: professionData[selectedProfession].color,
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '500'
                          }}
                        >
                          {template.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Mid Level */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px'
                  }}>📈</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Mid Level</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {professionData[selectedProfession].experienceLevels.mid.map((id) => {
                      const template = professionData[selectedProfession].recommendedTemplates.find(t => t.id === id);
                      return template ? (
                        <Link
                          key={id}
                          href={`/templates/${id}`}
                          style={{
                            padding: '8px',
                            background: professionData[selectedProfession].lightColor,
                            color: professionData[selectedProfession].color,
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '500'
                          }}
                        >
                          {template.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Senior Level */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px'
                  }}>👑</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Senior / Executive</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {professionData[selectedProfession].experienceLevels.senior.map((id) => {
                      const template = professionData[selectedProfession].recommendedTemplates.find(t => t.id === id);
                      return template ? (
                        <Link
                          key={id}
                          href={`/templates/${id}`}
                          style={{
                            padding: '8px',
                            background: professionData[selectedProfession].lightColor,
                            color: professionData[selectedProfession].color,
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '500'
                          }}
                        >
                          {template.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Comparison Note */}
            <div style={{
              background: '#fff3cd',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #ffc107',
              marginBottom: '40px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🔍</span> Not sure if this is your industry?
              </h4>
              <p style={{ color: '#856404', marginBottom: '15px' }}>
                Many careers overlap industries. If you work in a specialized field, consider which category best matches 
                your day-to-day responsibilities and the culture of companies you're targeting.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center'
              }}>
                {professions.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => setSelectedProfession(prof.id)}
                    style={{
                      padding: '6px 12px',
                      background: 'white',
                      border: '1px solid #ffc107',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      color: '#856404'
                    }}
                  >
                    {prof.icon} {prof.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Templates Quick Reference */}
        <div style={{
          marginTop: '40px',
          padding: '30px',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            Quick Reference: Best Templates by Profession
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {professions.map((prof) => {
              const data = professionData[prof.id];
              return (
                <div key={prof.id} style={{
                  padding: '15px',
                  background: data.lightColor,
                  borderRadius: '8px',
                  border: `1px solid ${data.color}30`
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{data.icon}</span>
                    <h4 style={{ margin: 0, color: data.color }}>{data.name}</h4>
                  </div>
                  <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    <strong>Top Pick:</strong>{' '}
                    <Link href={`/templates/${data.recommendedTemplates[0].id}`} style={{ color: data.color, textDecoration: 'underline' }}>
                      {data.recommendedTemplates[0].name}
                    </Link>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>
                    Also try: {data.recommendedTemplates.slice(1, 3).map(t => t.name).join(', ')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
              { id: 'ats-friendly-vs-creative', name: 'ATS-Friendly vs Creative' },
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
                q: 'Does my profession really affect which template I should choose?',
                a: 'Yes! Different industries have different expectations. Corporate fields prefer conservative designs, creative fields expect visual flair, and academia values publications. Choosing a template that matches your industry shows you understand professional norms.'
              },
              {
                q: 'Can I use a creative template for a corporate job?',
                a: 'It\'s risky. Corporate recruiters and ATS systems may reject creative formatting. If you love a creative template, consider keeping a simple version for online applications and using the creative version for in-person interviews.'
              },
              {
                q: 'What if my career spans multiple industries?',
                a: 'Choose based on your target role and company culture. If you\'re moving from tech to business, lean toward more conservative designs. You can always create multiple versions for different applications.'
              },
              {
                q: 'How important is ATS compatibility for my profession?',
                a: 'Critical for corporate, government, healthcare, and legal fields. Less critical for creative roles, startups, and when emailing resumes directly. Check if companies you\'re applying to use ATS.'
              },
              {
                q: 'Should I use different templates for different applications?',
                a: 'Absolutely! Many successful job seekers maintain 2-3 versions of their resume and choose based on the company. Our free builder lets you create unlimited resumes.'
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