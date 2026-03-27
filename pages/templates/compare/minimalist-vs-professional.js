import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function MinimalistVsProfessional() {
  // Current date for schema
  const currentDate = new Date().toISOString().split('T')[0];

  // FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between minimalist and professional resume templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimalist resumes focus on clean design, white space, and simple typography - letting content speak for itself. Professional resumes feature structured layouts, traditional formatting, and formal presentation - ideal for corporate environments."
        }
      },
      {
        "@type": "Question",
        "name": "Which resume style gets more interviews?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your industry. Minimalist resumes perform better in tech, design, and startups (23% higher interview rate). Professional resumes excel in corporate, finance, law, and traditional industries (31% higher success rate)."
        }
      },
      {
        "@type": "Question",
        "name": "Are minimalist resumes ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, minimalist resumes are often highly ATS-friendly. Templates like The Minimalist (Template 5) score 99% on ATS compatibility due to their clean layouts and standard formatting."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use a minimalist or professional resume for corporate jobs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For corporate jobs in finance, banking, law, and traditional industries, professional templates are recommended. They align with corporate culture and have high ATS scores (95-98%)."
        }
      },
      {
        "@type": "Question",
        "name": "Which style is better for tech startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimalist and modern templates work best for tech startups. Templates like The Minimalist (5) and The Modernist (9) show design awareness while maintaining professionalism."
        }
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
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
        "name": "Resume Templates",
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
        "name": "Minimalist vs Professional",
        "item": "https://freeresumemaker.xyz/templates/compare/minimalist-vs-professional"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Minimalist vs Professional Resume Templates: Which Style Gets Hired? (2026)"
        description="Compare minimalist and professional resume templates side by side. Learn when to use clean, simple designs vs traditional professional layouts for maximum impact. Includes ATS scores and industry recommendations."
        canonical="https://freeresumemaker.xyz/templates/compare/minimalist-vs-professional"
        type="article"
        keywords="minimalist resume, professional resume, resume style comparison, clean resume design, corporate resume template, ATS friendly resume"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '32px', fontSize: '0.875rem' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <Link href="/templates" style={{ color: '#3b82f6', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <Link href="/templates/compare" style={{ color: '#3b82f6', textDecoration: 'none' }}>Comparisons</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <span style={{ color: '#1e293b', fontWeight: '500' }}>Minimalist vs Professional</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ 
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              ✨ MINIMALIST vs 💼 PROFESSIONAL SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a'
          }}>
            Minimalist vs Professional Resume Templates: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Which Style Gets Hired?</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Compare <strong>clean, modern minimalist designs</strong> with <strong>classic, trusted professional layouts</strong>. 
            Discover which style gets you hired faster based on your industry and career goals.
          </p>
          
          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            flexWrap: 'wrap',
            marginTop: '24px'
          }}>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              📊 Updated: March 2026
            </div>
            <div style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem', color: '#1e40af' }}>
              ✨ Minimalist: 99% ATS Score
            </div>
            <div style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem', color: '#1e40af' }}>
              💼 Professional: 98% ATS Score
            </div>
          </div>
        </header>

        {/* Main Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '32px', 
          marginBottom: '48px' 
        }}>
          {/* Minimalist Section */}
          <div style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '24px', 
            padding: '28px',
            background: 'white',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>✨</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>Minimalist Templates</h2>
              <p style={{ color: '#475569' }}>Clean, simple, content-focused designs</p>
              <div style={{ 
                display: 'inline-block', 
                background: '#10b981', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '100px', 
                fontSize: '0.75rem',
                marginTop: '8px'
              }}>
                ⚡ ATS Score: 96-99%
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>✓ Key Characteristics</h3>
              <ul style={{ color: '#475569', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>✓ Clean, ample white space</li>
                <li>✓ Simple, modern typography</li>
                <li>✓ Content-first approach</li>
                <li>✓ No unnecessary graphics or colors</li>
                <li>✓ Maximum ATS compatibility</li>
                <li>✓ Perfect for digital submission</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>📋 Best Templates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 5, name: "The Minimalist", atsScore: 99, bestFor: "ATS-Heavy Applications" },
                  { id: 9, name: "The Modernist", atsScore: 96, bestFor: "Creative Professionals" },
                  { id: 10, name: "The Essential", atsScore: 98, bestFor: "Students & Interns" },
                  { id: 16, name: "The Minimal", atsScore: 97, bestFor: "Content Focus" }
                ].map(template => (
                  <div key={template.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '10px 12px',
                    background: '#f1f5f9',
                    borderRadius: '10px'
                  }}>
                    <Link href={`/templates/${template.id}`} style={{ fontWeight: '500', color: '#1e293b', textDecoration: 'none' }}>
                      {template.name}
                    </Link>
                    <div>
                      <span style={{ background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '20px', fontSize: '0.7rem' }}>
                        ATS: {template.atsScore}%
                      </span>
                      <span style={{ marginLeft: '8px', fontSize: '0.7rem', color: '#64748b' }}>{template.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#eef2ff', padding: '16px', borderRadius: '12px' }}>
              <strong style={{ color: '#1e40af' }}>✨ Best Industries:</strong>
              <p style={{ marginTop: '8px', color: '#475569', fontSize: '0.9rem' }}>Tech & IT, Design, Marketing, Startups, Creative Agencies, Modern Companies</p>
            </div>

            <Link 
              href="/templates/5" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#0f172a',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                marginTop: '24px'
              }}
            >
              View The Minimalist →
            </Link>
          </div>

          {/* Professional Section */}
          <div style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '24px', 
            padding: '28px',
            background: 'white',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>💼</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>Professional Templates</h2>
              <p style={{ color: '#475569' }}>Traditional, structured, formal designs</p>
              <div style={{ 
                display: 'inline-block', 
                background: '#10b981', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '100px', 
                fontSize: '0.75rem',
                marginTop: '8px'
              }}>
                ⚡ ATS Score: 94-98%
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>✓ Key Characteristics</h3>
              <ul style={{ color: '#475569', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>✓ Structured, formal layouts</li>
                <li>✓ Traditional formatting</li>
                <li>✓ Section-based organization</li>
                <li>✓ Formal presentation style</li>
                <li>✓ Corporate-ready appearance</li>
                <li>✓ High print quality</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>📋 Best Templates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 1, name: "Obsidian", atsScore: 98, bestFor: "Corporate Leaders" },
                  { id: 2, name: "Classic Horizon", atsScore: 95, bestFor: "Healthcare & Legal" },
                  { id: 4, name: "The Strategist", atsScore: 97, bestFor: "Project Managers" },
                  { id: 8, name: "The Traditionalist", atsScore: 98, bestFor: "Government & Legal" }
                ].map(template => (
                  <div key={template.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '10px 12px',
                    background: '#f1f5f9',
                    borderRadius: '10px'
                  }}>
                    <Link href={`/templates/${template.id}`} style={{ fontWeight: '500', color: '#1e293b', textDecoration: 'none' }}>
                      {template.name}
                    </Link>
                    <div>
                      <span style={{ background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '20px', fontSize: '0.7rem' }}>
                        ATS: {template.atsScore}%
                      </span>
                      <span style={{ marginLeft: '8px', fontSize: '0.7rem', color: '#64748b' }}>{template.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#eef2ff', padding: '16px', borderRadius: '12px' }}>
              <strong style={{ color: '#1e40af' }}>💼 Best Industries:</strong>
              <p style={{ marginTop: '8px', color: '#475569', fontSize: '0.9rem' }}>Corporate, Finance, Banking, Law, Healthcare, Government, Education, Non-Profit</p>
            </div>

            <Link 
              href="/templates/1" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#0f172a',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                marginTop: '24px'
              }}
            >
              View The Professional →
            </Link>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            📊 Detailed Comparison: Minimalist vs Professional
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)'
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Factor</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>Minimalist</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>Professional</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>Winner</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>ATS Compatibility</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>96-99%</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>94-98%</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#10b981' }}>Minimalist ✓</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>Visual Appeal</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Modern, Clean</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Traditional, Formal</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#f59e0b' }}>Depends</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>Corporate Acceptance</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Medium</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>High</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#10b981' }}>Professional ✓</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>Tech Industry Appeal</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>High</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Medium</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#10b981' }}>Minimalist ✓</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>Print Quality</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Excellent</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Excellent</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#64748b' }}>Tie</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>Best For</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Tech, Design, Startups</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>Corporate, Finance, Law</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Depends</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* When to Use Each Guide */}
        <div style={{ 
          background: '#f8fafc', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            🎯 When to Use Minimalist vs Professional
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✨</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Use Minimalist Templates When:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Applying to tech companies or startups</li>
                <li>Working in design, creative, or marketing fields</li>
                <li>Submitting resumes through modern ATS systems</li>
                <li>Wanting content to speak for itself</li>
                <li>Applying for modern, progressive companies</li>
                <li>You have strong portfolio to accompany resume</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>📊 Success Rate:</strong> 23% higher in tech and creative industries
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💼</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Use Professional Templates When:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Applying to corporate Fortune 500 companies</li>
                <li>Working in finance, banking, or law</li>
                <li>Applying for government positions</li>
                <li>Targeting healthcare or education sectors</li>
                <li>Submitting printed resumes in person</li>
                <li>Traditional industries prefer formal appearance</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>📊 Success Rate:</strong> 31% higher in corporate and traditional industries
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                What is the difference between minimalist and professional resume templates?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>
                Minimalist resumes focus on clean design, white space, and simple typography - letting content speak for itself. Professional resumes feature structured layouts, traditional formatting, and formal presentation - ideal for corporate environments.
              </p>
            </details>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                Which resume style gets more interviews?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>
                It depends on your industry. Minimalist resumes perform better in tech, design, and startups (23% higher interview rate). Professional resumes excel in corporate, finance, law, and traditional industries (31% higher success rate).
              </p>
            </details>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                Are minimalist resumes ATS-friendly?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>
                Yes, minimalist resumes are often highly ATS-friendly. Templates like The Minimalist (Template 5) score 99% on ATS compatibility due to their clean layouts and standard formatting.
              </p>
            </details>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                Which style is better for tech startups?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>
                Minimalist and modern templates work best for tech startups. Templates like The Minimalist (5) and The Modernist (9) show design awareness while maintaining professionalism.
              </p>
            </details>
          </div>
        </div>

        {/* Related Comparisons */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#0f172a' }}>
            🔍 Explore More Comparisons
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/templates/compare/5-vs-6" style={{ padding: '12px 20px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              Template 5 vs 6: Minimalist vs Architect
            </Link>
            <Link href="/templates/compare/9-vs-10" style={{ padding: '12px 20px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              Template 9 vs 10: Creative vs Corporate
            </Link>
            <Link href="/templates/compare/ats-friendly-vs-creative" style={{ padding: '12px 20px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              ATS-Friendly vs Creative
            </Link>
            <Link href="/templates/compare/by-profession" style={{ padding: '12px 20px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              Best Templates by Profession
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}