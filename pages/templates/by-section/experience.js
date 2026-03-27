import React from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionExperience() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the experience section
  const templates = [
    {
      id: 1,
      name: 'Professional Experience Focus',
      style: 'modern',
      bestFor: 'Mid to Senior Level Professionals',
      description: 'A clean, modern template designed to highlight your professional experience with achievement-focused bullet points. Features a prominent experience section with space for quantifiable results and career progression.',
      features: ['Prominent Experience Section', 'Achievement-Focused Bullet Points', 'Career Progression Timeline', 'Skills Summary Sidebar', 'ATS-Friendly Format'],
      experienceFormat: 'Reverse-chronological with achievement metrics'
    },
    {
      id: 2,
      name: 'Chronological Experience',
      style: 'classic',
      bestFor: 'Professionals with Consistent Career Growth',
      description: 'A classic template emphasizing career progression and consistent growth. The experience section is front and center, showcasing each role with detailed responsibilities and key accomplishments.',
      features: ['Clear Career Timeline', 'Detailed Role Descriptions', 'Company/Organization Focus', 'Accomplishment Highlights', 'Traditional Layout'],
      experienceFormat: 'Detailed chronological with company focus'
    },
    {
      id: 3,
      name: 'Metrics-Driven Experience',
      style: 'data-focused',
      bestFor: 'Sales, Marketing, and Operations Professionals',
      description: 'A data-focused template designed to showcase quantifiable achievements. The experience section is structured around KPIs, metrics, and measurable results that demonstrate impact.',
      features: ['KPI Dashboard Layout', 'Metric-Focused Bullet Points', 'Results Visualization', 'Performance Highlights', 'Impact Statements'],
      experienceFormat: 'Metrics-driven with KPI emphasis'
    },
    {
      id: 4,
      name: 'Executive Experience',
      style: 'executive',
      bestFor: 'Senior Leaders and C-Suite Executives',
      description: 'An executive-level template emphasizing leadership experience, strategic initiatives, and organizational impact. The experience section focuses on high-level achievements and team leadership.',
      features: ['Strategic Initiative Focus', 'Team Leadership Metrics', 'Organizational Impact', 'Board-Level Experience', 'Executive Summary'],
      experienceFormat: 'Leadership-focused with strategic achievements'
    },
    {
      id: 5,
      name: 'Technical Experience',
      style: 'technical',
      bestFor: 'Software Engineers and IT Professionals',
      description: 'A technical template designed for developers and IT professionals. The experience section highlights technologies used, projects delivered, and technical achievements.',
      features: ['Technology Stack Listings', 'Project Deliverables', 'Code/System Architecture Focus', 'Technical Achievements', 'GitHub/Portfolio Links'],
      experienceFormat: 'Project-based with technology emphasis'
    },
    {
      id: 6,
      name: 'Creative Portfolio Experience',
      style: 'creative',
      bestFor: 'Designers, Writers, and Creative Professionals',
      description: 'A visually engaging template for creative professionals. The experience section blends professional history with portfolio highlights and creative achievements.',
      features: ['Visual Portfolio Integration', 'Creative Project Highlights', 'Client/Project Showcase', 'Awards and Recognition', 'Visual Timeline'],
      experienceFormat: 'Project-based with visual elements'
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
        "name": "Experience Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/experience"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Experience Section",
    "description": "Browse professional resume templates that feature a dedicated experience section. Perfect for showcasing your work history, career progression, and quantifiable achievements. Each template is designed to highlight your professional experience effectively.",
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
          title={`${selectedTemplate.name} | Resume Template with Experience Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features a ${selectedTemplate.experienceFormat} format, perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes achievement-focused bullet points and ATS-friendly design.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with experience section, professional resume template, ${selectedTemplate.style} resume, experience section template, resume layout, ATS friendly resume template`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/experience/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/experience" style={{ color: '#666', textDecoration: 'none' }}>Experience Section</Link>
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
            ← Back to All Experience Section Templates
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
                {selectedTemplate.name}: Experience-Focused Resume Template
              </h1>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                {selectedTemplate.style.charAt(0).toUpperCase() + selectedTemplate.style.slice(1)} style template | Best for {selectedTemplate.bestFor}
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
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
                ATS Friendly
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
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Simulated Experience Section Preview */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '4px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  WORK EXPERIENCE
                </h3>
              </div>

              {/* Experience Section Preview */}
              <div style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: '#1a1a1a' }}>Senior Marketing Manager</h4>
                      <p style={{ color: '#666', marginBottom: '4px' }}>GrowthX Digital | Mumbai</p>
                    </div>
                    <p style={{ color: '#0070f3', fontWeight: 500 }}>2022-Present</p>
                  </div>
                  <ul style={{ margin: '12px 0 0 20px', padding: 0 }}>
                    <li style={{ marginBottom: '8px', color: '#666' }}><strong>Achievement:</strong> Increased organic website traffic by <strong style={{ color: '#0070f3' }}>150%</strong> through SEO optimization and content strategy</li>
                    <li style={{ marginBottom: '8px', color: '#666' }}><strong>Impact:</strong> Managed <strong style={{ color: '#0070f3' }}>$2M+</strong> annual marketing budget achieving <strong style={{ color: '#0070f3' }}>3.5x ROAS</strong></li>
                    <li style={{ marginBottom: '8px', color: '#666' }}><strong>Leadership:</strong> Led team of 5 marketing specialists, achieving <strong style={{ color: '#0070f3' }}>140%</strong> of quarterly targets</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: '#1a1a1a' }}>Digital Marketing Specialist</h4>
                      <p style={{ color: '#666', marginBottom: '4px' }}>BrandBuzz Agency | Bangalore</p>
                    </div>
                    <p style={{ color: '#0070f3', fontWeight: 500 }}>2018-2022</p>
                  </div>
                  <ul style={{ margin: '12px 0 0 20px', padding: 0 }}>
                    <li style={{ marginBottom: '8px', color: '#666' }}>Executed PPC campaigns generating <strong style={{ color: '#0070f3' }}>$3M+</strong> revenue with <strong style={{ color: '#0070f3' }}>4.2x ROAS</strong></li>
                    <li style={{ marginBottom: '8px', color: '#666' }}>Improved email marketing conversion rates from <strong style={{ color: '#0070f3' }}>2.1% to 5.8%</strong> through A/B testing</li>
                  </ul>
                </div>
              </div>

              <div style={{
                background: '#f0f7ff',
                padding: '16px',
                borderRadius: '8px',
                marginTop: '20px',
                textAlign: 'center',
                border: '1px dashed #0070f3'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontSize: '14px' }}>
                  {selectedTemplate.experienceFormat} format with achievement-focused bullet points
                </p>
              </div>
            </div>
          </div>

          {/* Template Details */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px', color: '#1a1a1a' }}>Template Features</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              {selectedTemplate.features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 0'
                }}>
                  <span style={{ color: '#0070f3', fontSize: '18px' }}>✓</span>
                  <span style={{ color: '#666' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best For Section */}
          <div style={{
            background: '#f8f9fa',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#1a1a1a' }}>Best For</h2>
            <p style={{ color: '#666', marginBottom: 0 }}>{selectedTemplate.bestFor}</p>
            <p style={{ color: '#666', marginTop: '12px' }}>
              <strong>Experience Format:</strong> {selectedTemplate.experienceFormat}
            </p>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Resume with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and showcase your professional experience.
            </p>
            <Link 
              href="/editor"
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
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Use This Template →
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Main listing page
  return (
    <>
      <SEO 
        title="Resume Templates with Experience Section | Professional Experience-Focused Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated experience section. Choose from chronological, metrics-driven, executive, and technical layouts designed to showcase your work history, career progression, and quantifiable achievements. All templates are ATS-friendly and optimized for 2026 hiring standards."
        keywords="resume templates with experience section, professional resume templates, experience section resume, chronological resume template, metrics-driven resume, executive resume template, technical resume template, ATS friendly resume templates, resume layout with experience, work history resume templates"
        canonical="https://freeresumemaker.xyz/templates/by-section/experience"
        image="https://freeresumemaker.xyz/images/templates/experience-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Experience Section</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Resume Templates with Experience Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Showcase your professional journey with templates designed to highlight your work experience.
            Choose from chronological, metrics-driven, and specialized layouts that make your achievements stand out.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for professionals at any career stage who want to emphasize their work history, career progression, and measurable achievements.
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '40px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>{templates.length}+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Experience-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Chronological • Metrics • Executive</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Formats</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>100% ATS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Applicant Tracking System Friendly</div>
          </div>
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
              <div style={{
                marginBottom: '16px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  marginBottom: '8px',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {template.name}
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: '8px'
                }}>
                  <span style={{
                    background: '#e6f7ff',
                    color: '#0070f3',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {template.style}
                  </span>
                  <span style={{
                    background: '#f0f4f8',
                    color: '#666',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px'
                  }}>
                    {template.experienceFormat}
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {template.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {template.features.slice(0, 3).map((feature, i) => (
                  <span key={i} style={{
                    background: '#f0f7ff',
                    color: '#0070f3',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {feature}
                  </span>
                ))}
                {template.features.length > 3 && (
                  <span style={{
                    color: '#999',
                    fontSize: '12px',
                    padding: '4px 0'
                  }}>
                    +{template.features.length - 3} more
                  </span>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #e9ecef',
                paddingTop: '16px'
              }}>
                <span style={{
                  color: '#0070f3',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  View Template Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            How to Optimize Your Resume Experience Section
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Use Quantifiable Achievements</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Instead of listing responsibilities, focus on measurable results. Use numbers, percentages, and concrete outcomes to demonstrate your impact.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Prioritize Recent Experience</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List your work experience in reverse chronological order. Provide more detail for recent roles (last 10-15 years) and summarize earlier positions.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Tailor to the Job Description</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Highlight experience and achievements that align with the specific job requirements. Use keywords from the job description to pass ATS screening.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Career Progression</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Show promotions and increasing responsibilities to demonstrate growth. Use consistent formatting for company names, titles, and dates.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px'
          }}>
            Create Your Experience-Focused Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates and build your resume in minutes. All templates are ATS-friendly and optimized for 2026 hiring standards.
          </p>
          <Link 
            href="/editor"
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
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Building Now →
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Related Resume Resources</h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/blog/how-to-write-work-experience-section" style={{ color: '#0070f3' }}>How to Write Your Work Experience Section →</Link>
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3' }}>Powerful Action Verbs for Resumes →</Link>
            <Link href="/templates/by-section/skills" style={{ color: '#0070f3' }}>Templates with Skills Section →</Link>
            <Link href="/blog/ats-friendly-resume-tips" style={{ color: '#0070f3' }}>ATS-Friendly Resume Tips →</Link>
          </div>
        </div>
      </div>
    </>
  );
}