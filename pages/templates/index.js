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
          <span style={{ margin: '0 8px' }}>Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }}>Resume Templates</span>
        </nav>

        {/* Development Notice */}
        <div style={{
          background: '#fff3cd',
          padding: '12px 20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.95rem',
          border: '1px solid #ffc107',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{ margin: 0, color: '#856404' }}>
            Ã°Å¸Å¡Â§ New templates are being added regularly. Check back for more designs.
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
            fontSize: '28px',
            marginBottom: '24px',
            color: '#1a1a1a',
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
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>Ã°Å¸Â¤â€“</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>ATS-Friendly Designs</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>All templates are optimized to pass Applicant Tracking Systems</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>Ã°Å¸â€™Â»</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Fully Customizable</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Edit every section, font, and color to match your style</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>Ã°Å¸â€œâ€ž</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>PDF Download</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Download your resume as PDF instantly with one click</p>
            </div>
          </div>

          {/* Template Comparison Table */}
          <div style={{ overflowX: 'auto' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px', textAlign: 'center' }}>
              Template Comparison Guide
            </h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Template Type</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Best For</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Key Features</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '12px', fontWeight: 500 }}>Professional</td>
                  <td style={{ padding: '12px' }}>Corporate, Business, Finance</td>
                  <td style={{ padding: '12px' }}>Clean layout, standard sections, formal design</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0', background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', fontWeight: 500 }}>Creative</td>
                  <td style={{ padding: '12px' }}>Design, Marketing, Creative Roles</td>
                  <td style={{ padding: '12px' }}>Modern fonts, unique layouts, portfolio-friendly</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '12px', fontWeight: 500 }}>Executive</td>
                  <td style={{ padding: '12px' }}>Senior Management, Directors</td>
                  <td style={{ padding: '12px' }}>Sophisticated design, achievement-focused</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', fontWeight: 500 }}>Minimalist</td>
                  <td style={{ padding: '12px' }}>Tech, Startups, Entry-Level</td>
                  <td style={{ padding: '12px' }}>Clean, simple, ATS-optimized</td>
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
              ATS Resume Tips Ã¢â€ â€™
            </Link>
            <Link href="/templates/compare" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Compare Templates Ã¢â€ â€™
            </Link>
            <Link href="/blog/how-to-write-resume" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Resume Writing Guide Ã¢â€ â€™
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
          <p>Ã‚Â© {new Date().getFullYear()} Free Resume Maker | 20+ ATS-Friendly Templates | 100% Free</p>
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
