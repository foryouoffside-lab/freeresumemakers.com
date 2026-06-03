// pages/templates/index.js
import React from 'react';
import Head from 'next/head';
import SEO from '../../components/SEO';
import TemplateSelector from '../../components/templates/TemplateSelector';
import Link from 'next/link';

export default function TemplatesPage() {
  // Organization schema for better branding
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Maker",
    "url": "https://freeresumemaker.xyz/templates",
    "logo": "https://freeresumemaker.xyz/logo.png",
    "description": "Browse 20 professional, ATS-friendly resume templates. Find the perfect template for your career."
  };

  // ItemList schema for template collection
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Resume Templates",
    "description": "Collection of 20 ATS-friendly resume templates",
    "numberOfItems": 20,
    "itemListElement": Array.from({ length: 20 }, (_, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `Template ${i + 1}`,
      "url": `https://freeresumemaker.xyz/templates/${i + 1}`
    }))
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
      }
    ]
  };

  return (
    <>
      <SEO 
        title="20+ Free Resume Templates 2026 | Professional ATS-Friendly CV Designs"
        description="Browse 20+ professional, ATS-friendly resume templates for 2026. Find the perfect template for your career - corporate, creative, executive, and entry-level designs. Free download."
        keywords="resume templates, free resume templates, CV templates, professional resume designs, ATS-friendly resumes, job application templates, resume designs 2026, modern resume templates"
        canonical="https://freeresumemaker.xyz/templates"
        image="https://freeresumemaker.xyz/assets/template-previews/template-collection.jpg"
        type="website"
      />
      
      {/* Additional structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 24px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '60vh'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#0070f3' }}>Resume Templates</span>
        </nav>

        {/* Development Notice */}
        <div className="premium-notice">
          <p style={{ margin: 0 }}>
            New templates are being added regularly. Check back for more designs.
          </p>
        </div>
        
        <TemplateSelector />

        {/* SEO Content Section */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '32px',
            fontWeight: 800,
            marginBottom: '24px',
            color: 'var(--text-primary-light)',
            textAlign: 'center'
          }}>
            Why Choose Our Resume Templates?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}><svg style={{ width: '32px', height: '32px', color: '#0070f3' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4M8 15h.01M16 15h.01"></path></svg></div>
              <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>ATS-Friendly Designs</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)' }}>All templates are optimized to pass Applicant Tracking Systems</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}><svg style={{ width: '32px', height: '32px', color: '#0070f3' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
              <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Fully Customizable</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)' }}>Edit every section, font, and color to match your style</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}><svg style={{ width: '32px', height: '32px', color: '#0070f3' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div>
              <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>PDF Download</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)' }}>Download your resume as PDF instantly with one click</p>
            </div>
          </div>

          {/* Template Comparison Table */}
          <div style={{ overflowX: 'auto', marginTop: '40px' }}>
            <h3 style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: '24px',
              fontWeight: 800,
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary-light)'
            }}>
              Template Comparison Guide
            </h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              border: '1px solid var(--border-light)'
            }}>
              <thead>
                <tr style={{ background: 'var(--primary-gradient)', color: 'white' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Template Type</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Best For</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Key Features</th>
                  </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-primary-light)' }}>Professional</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Corporate, Business, Finance</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Clean layout, standard sections, formal design</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)', background: 'var(--card-light)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-primary-light)' }}>Creative</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Design, Marketing, Creative Roles</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Modern fonts, unique layouts, portfolio-friendly</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-primary-light)' }}>Executive</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Senior Management, Directors</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Sophisticated design, achievement-focused</td>
                </tr>
                <tr style={{ background: 'var(--card-light)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-primary-light)' }}>Minimalist</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Tech, Startups, Entry-Level</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary-light)' }}>Clean, simple, ATS-optimized</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Pages */}
        <div style={{
          marginTop: '60px',
          padding: '32px',
          background: '#f0f7ff',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1a1a1a' }}>
            Need Help Choosing?
          </h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none' }}>
              ATS Resume Tips →
            </Link>
            <Link href="/templates/compare" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Compare Templates →
            </Link>
            <Link href="/blog/how-to-write-resume" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Resume Writing Guide →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.9rem',
          borderTop: '1px solid #eee',
          paddingTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Maker | 20+ ATS-Friendly Templates | 100% Free</p>
          <div style={{ marginTop: '10px' }}>
            <Link href="/templates" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>All Templates</Link>
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