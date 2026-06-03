import React from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionCertifications() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the certifications section
  const templates = [
    {
      id: 3,
      name: 'The Executive',
      style: 'executive',
      bestFor: 'Managers, Directors, and Senior Professionals',
      description: 'A sophisticated template designed with a dedicated sidebar that puts certifications, credentials, and achievements right next to your professional summary.',
      features: ['Dedicated sidebar highlights', 'High-contrast design', 'Executive layout structure', 'Space-optimized achievements list'],
      certificationFormat: 'Sidebar badges and bold authority layout',
      certificationSpecs: 'Accentuates leadership and high-value professional credentials'
    },
    {
      id: 18,
      name: 'Developer Focus (The Code)',
      style: 'technical',
      bestFor: 'Software Engineers, Cloud Architects, and DevOps Engineers',
      description: 'Perfect for tech professionals who need to list technical credentials (AWS, Scrum, Google Cloud) in a prominent and clean tech-friendly layout.',
      features: ['Tech icon integration', 'Keywords-rich certification tags', 'Direct link to certificate authority', 'Compact design'],
      certificationFormat: 'Clean tags with issue dates and links',
      certificationSpecs: 'Optimized for AWS, Azure, Google Cloud, and technical certs'
    }
  ];

  // Breadcrumb schema for structured data
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
        "name": "Templates by Section",
        "item": "https://freeresumemaker.xyz/templates/by-section"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Certifications Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/certifications"
      }
    ]
  };

  const handleViewTemplate = (template) => {
    setSelectedTemplate(template);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToTemplates = () => {
    setSelectedTemplate(null);
  };

  // If a template is selected, show detailed view
  if (selectedTemplate) {
    return (
      <>
        <SEO 
          title={`${selectedTemplate.name} | Resume Template with Certifications Focus | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.certificationFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with certifications, credentials resume, PM template`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/certifications`}
          noindex={false}
        />

        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </Head>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '40px 20px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}>
          {/* Breadcrumb Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
            <span>›</span>
            <Link href="/templates/by-section" style={{ color: '#666', textDecoration: 'none' }}>Templates by Section</Link>
            <span>›</span>
            <Link href="/templates/by-section/certifications" style={{ color: '#666', textDecoration: 'none' }}>Certifications Section</Link>
            <span>›</span>
            <span style={{ color: '#0070f3' }}>{selectedTemplate.name}</span>
          </nav>

          {/* Back button */}
          <button
            onClick={handleBackToTemplates}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#666',
              textDecoration: 'none',
              marginBottom: '30px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef';
              e.currentTarget.style.color = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
              e.currentTarget.style.color = '#666';
            }}
          >
            ← Back to All Certifications Templates
          </button>

          {/* Template Header */}
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #e9ecef',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h1 style={{ fontSize: '24px', marginBottom: '8px', color: '#1a1a1a' }}>
                {selectedTemplate.name}
              </h1>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                {selectedTemplate.style.charAt(0).toUpperCase() + selectedTemplate.style.slice(1)} style template | Best for {selectedTemplate.bestFor}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{
                background: '#e3f2fd',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'capitalize'
              }}>
                {selectedTemplate.style}
              </span>
              <span style={{
                background: '#e8f5e9',
                color: '#2e7d32',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500
              }}>
                Certifications
              </span>
            </div>
          </div>

          {/* Template Preview Section */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            overflow: 'hidden',
            marginBottom: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              background: '#f8f9fa',
              padding: '16px 24px',
              borderBottom: '1px solid #e9ecef'
            }}>
              <h2 style={{ fontSize: '18px', margin: 0, color: '#1a1a1a' }}>Template Preview</h2>
            </div>
            <div style={{
              padding: '40px',
              background: '#fff',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '16px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  CERTIFICATIONS & LICENSES
                </h3>
              </div>

              {/* Certifications Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 'bold', fontSize: '15px' }}>
                    <span>Project Management Professional (PMP)</span>
                    <span>2024</span>
                  </div>
                  <div style={{ color: '#0070f3', fontSize: '14px', margin: '4px 0' }}>Project Management Institute (PMI)</div>
                </div>
                
                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 'bold', fontSize: '15px' }}>
                    <span>AWS Certified Solutions Architect – Professional</span>
                    <span>2025</span>
                  </div>
                  <div style={{ color: '#0070f3', fontSize: '14px', margin: '4px 0' }}>Amazon Web Services (AWS)</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Build Your Resume Now</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Select Template {selectedTemplate.id} to customize your professional credentials.
            </p>
            <Link 
              href={`/editor/${selectedTemplate.id}`}
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: 'white',
                color: '#0070f3',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'transform 0.2s'
              }}
            >
              Use This Template →
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Resume Templates with Certifications | Credential-Focused CV Layouts"
        description="Browse professional resume templates designed to highlight your certifications, credentials, and achievements. Ideal for managers, project leads, and engineers."
        keywords="resume templates with certifications, certified resume, credential CV template, PM resume"
        canonical="https://freeresumemaker.xyz/templates/by-section/certifications"
        type="website"
      />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
          <span>›</span>
          <Link href="/templates/by-section" style={{ color: '#666', textDecoration: 'none' }}>Templates by Section</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Certifications Section</span>
        </nav>

        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', color: '#1a1a1a', fontWeight: 700 }}>
            Resume Templates with Certifications Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Showcase your industry certifications, training courses, and verified credentials with layouts optimized for recruiters.
          </p>
        </div>

        {/* Templates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {templates.map(template => (
            <div
              key={template.id}
              onClick={() => handleViewTemplate(template)}
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#1a1a1a', fontWeight: 600 }}>
                {template.name}
              </h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>
                {template.description}
              </p>
              <span style={{ color: '#0070f3', fontSize: '14px', fontWeight: 600 }}>
                View Template Details →
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
