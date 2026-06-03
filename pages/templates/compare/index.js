import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const TEMPLATE_NAMES = {
  1: "The Professional",
  2: "The Innovator",
  3: "The Executive",
  4: "The Strategist",
  5: "The Minimalist",
  6: "The Architect",
  7: "The Scholar",
  8: "The Traditionalist",
  9: "The Modernist",
  10: "The Essential",
  11: "The Composer",
  12: "The Blueprint",
  13: "The Timeline",
  14: "The Monochrome",
  15: "The Compact",
  16: "The Minimal",
  17: "The Innovator 2.0",
  18: "The Code",
  19: "The Scholar 2.0",
  20: "The Engineer"
};

const comparisons = [
  { id: '1-vs-2', title: 'Professional vs Innovator', templates: [1, 2], category: 'Corporate vs Creative' },
  { id: '1-vs-3', title: 'Professional vs Executive', templates: [1, 3], category: 'Corporate vs Executive' },
  { id: '1-vs-4', title: 'Professional vs Strategist', templates: [1, 4], category: 'Corporate vs Balanced' },
  { id: '2-vs-3', title: 'Innovator vs Executive', templates: [2, 3], category: 'Creative vs Executive' },
  { id: '3-vs-4', title: 'Executive vs Strategist', templates: [3, 4], category: 'Executive vs Balanced' },
  { id: '5-vs-6', title: 'Minimalist vs Architect', templates: [5, 6], category: 'Minimal vs Structured' },
  { id: '7-vs-8', title: 'Scholar vs Traditionalist', templates: [7, 8], category: 'Academic vs Classic' },
  { id: '9-vs-10', title: 'Modernist vs Essential', templates: [9, 10], category: 'Modern vs Simple' },
  { id: '17-vs-18', title: 'Innovator 2.0 vs Code', templates: [17, 18], category: 'Tech vs Developer' },
  { id: '18-vs-19', title: 'Code vs Scholar 2.0', templates: [18, 19], category: 'Developer vs Academic' },
  { id: '19-vs-20', title: 'Scholar 2.0 vs Engineer', templates: [19, 20], category: 'Academic vs Tech' },
  { id: 'ats-friendly-vs-creative', title: 'ATS-Friendly vs Creative', templates: [5, 2], category: 'ATS vs Design' },
  { id: 'by-profession', title: 'Templates by Profession', templates: [], category: 'Profession Guide' },
  { id: 'minimalist-vs-professional', title: 'Minimalist vs Professional', templates: [5, 1], category: 'Minimal vs Corporate' }
];

export default function CompareIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freeresumemaker.xyz" },
      { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": "https://freeresumemaker.xyz/templates" },
      { "@type": "ListItem", "position": 3, "name": "Compare Templates", "item": "https://freeresumemaker.xyz/templates/compare" }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Template Comparisons",
    "description": "Compare the best resume templates side by side to find the perfect one for your career",
    "numberOfItems": comparisons.length,
    "itemListElement": comparisons.map((comp, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": comp.title,
      "url": `https://freeresumemaker.xyz/templates/compare/${comp.id}`
    }))
  };

  return (
    <>
      <SEO 
        title="Compare Resume Templates | Find the Best ATS-Friendly Template for Your Career 2026"
        description="Compare professional resume templates side by side. Find the perfect ATS-friendly template for your industry - corporate, creative, tech, executive, and more. See which template suits your career best."
        keywords="compare resume templates, resume template comparison, best resume template, ATS friendly templates, professional resume comparison, resume template reviews"
        canonical="https://freeresumemaker.xyz/templates/compare"
        type="website"
      />
      
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Compare Templates</span>
        </nav>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: '#eff6ff',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: '#0070f3'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"></path>
              <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"></path>
            </svg>
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', color: '#1a1a1a', fontWeight: 700 }}>
            Compare Resume Templates
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Not sure which template is right for you? Compare our templates side by side to find the perfect fit for your industry and career level.
          </p>
        </div>

        <div style={{ 
          background: '#e3f2fd', 
          padding: '20px', 
          borderRadius: '12px', 
          marginBottom: '40px', 
          borderLeft: '4px solid #0070f3' 
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>Pro Tip:</strong> The right template can make your resume stand out. Compare templates based on your industry, experience level, and whether you need an ATS-friendly design.
          </p>
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#1a1a1a' }}>
          Popular Comparisons
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {comparisons.map((comp, idx) => (
            <Link key={idx} href={`/templates/compare/${comp.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}>
                <span style={{
                  display: 'inline-block',
                  background: '#f1f5f9',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#475569',
                  marginBottom: '12px'
                }}>
                  {comp.category}
                </span>
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>{comp.title}</h3>
                {comp.templates.length === 2 && (
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>
                    {TEMPLATE_NAMES[comp.templates[0]]} vs {TEMPLATE_NAMES[comp.templates[1]]}
                  </p>
                )}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0070f3', fontSize: '14px', fontWeight: '500' }}>
                  Compare Now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#1a1a1a' }}>
          Comparison Guides by Category
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div className="premium-card">
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0f172a' }}>Corporate & Executive</h3>
            <p style={{ color: '#666', marginBottom: '16px', fontSize: '0.9rem' }}>Best templates for business, finance, law, and leadership roles</p>
            <Link href="/templates/compare/1-vs-3" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 600 }}>Professional vs Executive →</Link>
          </div>
          <div className="premium-card">
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0f172a' }}>Tech & Developer</h3>
            <p style={{ color: '#666', marginBottom: '16px', fontSize: '0.9rem' }}>Best templates for software engineers, developers, and IT pros</p>
            <Link href="/templates/compare/17-vs-18" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 600 }}>Innovator 2.0 vs Code →</Link>
          </div>
          <div className="premium-card">
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0f172a' }}>Creative & Design</h3>
            <p style={{ color: '#666', marginBottom: '16px', fontSize: '0.9rem' }}>Best templates for designers, artists, and creative roles</p>
            <Link href="/templates/compare/ats-friendly-vs-creative" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 600 }}>ATS-Friendly vs Creative →</Link>
          </div>
          <div className="premium-card">
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0f172a' }}>Academic & Research</h3>
            <p style={{ color: '#666', marginBottom: '16px', fontSize: '0.9rem' }}>Best templates for academics, researchers, and educators</p>
            <Link href="/templates/compare/7-vs-8" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 600 }}>Scholar vs Traditionalist →</Link>
          </div>
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '32px', color: '#1a1a1a', textAlign: 'center' }}>
          How to Choose the Right Template
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#0070f3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 auto 16px'
            }}>1</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Consider Your Industry</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Corporate templates for business, creative templates for design, tech templates for developers</p>
          </div>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#0070f3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 auto 16px'
            }}>2</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Check ATS Compatibility</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Some templates are optimized for ATS systems with clean, simple formatting</p>
          </div>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#0070f3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 auto 16px'
            }}>3</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Match Your Experience Level</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Entry-level templates focus on skills, executive templates highlight achievements</p>
          </div>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#0070f3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 auto 16px'
            }}>4</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Read Comparison Guides</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>See side-by-side comparisons to understand the differences</p>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Ready to Build Your Resume?</h2>
          <p style={{ fontSize: '16px', marginBottom: '24px', opacity: 0.9 }}>
            Once you've chosen the perfect template, start building your professional resume today.
          </p>
          <Link href="/editor" style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'white',
            color: '#0070f3',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            Start Building Now →
          </Link>
        </div>
      </div>
    </>
  );
}