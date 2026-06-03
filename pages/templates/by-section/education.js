import React from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionEducation() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the education section
  const templates = [
    {
      id: 19,
      name: 'Academic Excellence (The Scholar 2.0)',
      style: 'academic',
      bestFor: 'PhD Candidates, Researchers, and Academics',
      description: 'An education-focused template with white-box styling for displaying credentials, honors, GPA, thesis titles, and major details. Perfect for research-heavy and academic roles.',
      features: ['White-box education cards', 'Thesis / Dissertation highlights', 'Advisor details block', 'Academic achievements list', 'GPA scale visualization'],
      educationFormat: 'Double-row card boxes with detailed academic achievements',
      educationSpecs: 'Highlights major, GPA, thesis title, advisors, and honors'
    },
    {
      id: 10,
      name: 'Recent Graduate (The Essential)',
      style: 'minimal',
      bestFor: 'Students, Interns, and Entry-Level Professionals',
      description: 'A clean, modern layout that places education near the top, making it ideal for recent graduates who want to emphasize coursework and GPA over limited work experience.',
      features: ['Top-page placement', 'Relevant coursework tags', 'Dean\'s list badges', 'Extracurricular achievements', 'Clean spacing'],
      educationFormat: 'Single-row clean text blocks with highlight tags',
      educationSpecs: 'Puts education at the top with relevant coursework and GPA'
    },
    {
      id: 7,
      name: 'The Scholar',
      style: 'traditional',
      bestFor: 'Teachers, Lecturers, and Education Administrators',
      description: 'An elegant geometric design highlighting professional certifications and academic background. Perfect for education-industry professionals.',
      features: ['Elegant side achievements', 'Structured layout', 'Degree-first hierarchy', 'Clear institution badges'],
      educationFormat: 'Structured list with clear graduation years',
      educationSpecs: 'Displays degrees, institutions, locations, and honors cleanly'
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
        "name": "Education Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/education"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Education Focus",
    "description": "Browse professional resume templates designed to highlight your academic background and education section.",
    "numberOfItems": templates.length,
    "itemListElement": templates.map((template, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": template.name,
      "description": template.description,
      "url": `https://freeresumemaker.xyz/templates/${template.id}`
    }))
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
          title={`${selectedTemplate.name} | Resume Template with Education Focus | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.educationFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with education, student resume, academic CV template`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/education`}
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
            <Link href="/templates/by-section/education" style={{ color: '#666', textDecoration: 'none' }}>Education Section</Link>
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
            ← Back to All Education Section Templates
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
                Education Focus
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
              minHeight: '400px',
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
                  EDUCATION
                </h3>
              </div>

              {/* Education Grid Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 'bold', fontSize: '16px' }}>
                    <span>Stanford University</span>
                    <span>2022 - 2026</span>
                  </div>
                  <div style={{ color: '#0070f3', fontWeight: '600', margin: '4px 0' }}>B.S. in Computer Science</div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#666' }}>
                    GPA: 3.92/4.0 | Major GPA: 4.0<br/>
                    <strong>Honors:</strong> Dean's List (all quarters), Tau Beta Pi Honor Society<br/>
                    <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Artificial Intelligence, Software Engineering.
                  </p>
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
              Select Template {selectedTemplate.id} to edit and customize your academic background.
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
        title="Resume Templates with Education Section | Academic & Graduate Layouts"
        description="Browse professional resume templates designed to highlight your academic background and education. Ideal for graduates, students, and researchers."
        keywords="resume templates with education, academic CV templates, student resume designs, graduate CV builder"
        canonical="https://freeresumemaker.xyz/templates/by-section/education"
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
          <span style={{ color: '#0070f3' }}>Education Section</span>
        </nav>

        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', color: '#1a1a1a', fontWeight: 700 }}>
            Resume Templates with Education Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Browse professional templates designed to highlight your education background, coursework, honors, and GPA.
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
