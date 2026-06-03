import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Head from 'next/head';

const tools = [
  {
    id: 'ats-scanner',
    name: 'ATS Resume Scanner',
    description: 'Scan your resume against a job description to check compatibility, matching keywords, and formatting score.',
    icon: '🔍'
  },
  {
    id: 'keywords-finder',
    name: 'Resume Keywords Finder',
    description: 'Extract crucial keywords and technical terms from any job posting to optimize your resume.',
    icon: '🔑'
  },
  {
    id: 'resume-checker',
    name: 'Free Resume Checker',
    description: 'Instantly check your resume for common formatting mistakes, spelling errors, and general readability.',
    icon: '📊'
  },
  {
    id: 'resume-review',
    name: 'Instant Resume Review',
    description: 'Get actionable suggestions and structural improvement tips to optimize your resume for recruiters.',
    icon: '💡'
  }
];

export default function ResumeToolsIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemaker.xyz/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Tools",
        "item": "https://freeresumemaker.xyz/tools"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Optimization Tools Directory",
    "description": "A collection of free tools to check, scan, and optimize your resume for ATS and recruiters.",
    "numberOfItems": tools.length,
    "itemListElement": tools.map((tool, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": tool.name,
      "url": `https://freeresumemaker.xyz/tools/${tool.id}`
    }))
  };

  return (
    <>
      <SEO 
        title="Free Resume Tools: ATS Scanner, Keywords Finder & Checker | Free Resume Builder"
        description="Optimize your resume with our free tools. Run an ATS compatibility scan, extract job keywords, and check formatting to get more interviews."
        keywords="resume tools, free resume tools, ATS checker, resume scanner, job keyword finder, CV review tool, resume optimizer"
        canonical="https://freeresumemaker.xyz/tools"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Resume Tools</span>
        </nav>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            Free Resume Optimization Tools
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Boost your interview chances. Use our suite of free online tools to audit, analyze, scan, and optimize your resume for ATS success.
          </p>
        </div>

        {/* Tools Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {tools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div 
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 112, 243, 0.08)';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '16px',
                  width: '50px',
                  height: '50px',
                  background: '#f0f7ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0070f3'
                }}>
                  {tool.icon}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 10px 0', color: '#1a1a1a' }}>
                  {tool.name}
                </h3>
                
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5', margin: 0, flex: 1 }}>
                  {tool.description}
                </p>
                
                <div style={{ marginTop: '20px', color: '#0070f3', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}>
                  Open Free Tool →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Banner */}
        <div style={{
          background: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '50px',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px 0' }}>Why optimizing for ATS is critical</h3>
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
            Over 95% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter resumes before a human recruiter ever sees them. Our tools help you check for common formatting traps, scan for key match parameters, and structure your CV so that it reaches human hands.
          </p>
        </div>
      </div>
    </>
  );
}
