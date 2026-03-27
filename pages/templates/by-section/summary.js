import React from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionSummary() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the summary section
  const templates = [
    {
      id: 1,
      name: 'Executive Summary Profile',
      style: 'executive',
      bestFor: 'Senior Leaders, C-Suite Executives, and Directors',
      description: 'An executive-level template featuring a prominent professional summary section for showcasing leadership experience, strategic vision, and career highlights. Perfect for senior professionals who need to make a strong first impression.',
      features: ['Executive Summary Placement', 'Leadership Highlights', 'Strategic Vision Statements', 'Career Achievement Bullets', 'Professional Branding'],
      summaryFormat: 'Strategic overview with leadership achievements and career highlights',
      summarySpecs: 'Supports 3-5 sentence summary with key leadership metrics'
    },
    {
      id: 2,
      name: 'Professional Profile Summary',
      style: 'modern',
      bestFor: 'Mid-Level Professionals and Career Changers',
      description: 'A modern template with a clean, impactful professional summary section. Designed to highlight core competencies, key achievements, and career progression in a concise format.',
      features: ['Professional Summary Statement', 'Core Competencies Integration', 'Key Achievement Highlights', 'Career Narrative Flow', 'ATS-Optimized Format'],
      summaryFormat: 'Concise professional statement with key competencies',
      summarySpecs: 'Supports 2-3 sentence summary with core skills and experience'
    },
    {
      id: 3,
      name: 'Skills-Focused Summary',
      style: 'technical',
      bestFor: 'Technical Professionals, Developers, and Engineers',
      description: 'A technical-focused template combining a professional summary with key technical competencies. Perfect for highlighting technical expertise, programming languages, and technology stack expertise.',
      features: ['Technical Summary Statement', 'Technology Stack Highlights', 'Programming Language Expertise', 'Project Impact Metrics', 'Certification Integration'],
      summaryFormat: 'Technical summary with technology stack and expertise highlights',
      summarySpecs: 'Supports technical expertise summary with key technologies'
    },
    {
      id: 4,
      name: 'Creative Brand Statement',
      style: 'creative',
      bestFor: 'Designers, Artists, and Creative Professionals',
      description: 'A visually engaging template with a creative brand statement summary section. Designed to showcase your unique creative voice, artistic vision, and professional identity.',
      features: ['Personal Brand Statement', 'Creative Voice Showcase', 'Portfolio Highlights', 'Artistic Vision Integration', 'Unique Value Proposition'],
      summaryFormat: 'Creative brand statement with portfolio context',
      summarySpecs: 'Supports personalized brand statement with creative elements'
    },
    {
      id: 5,
      name: 'Academic Research Summary',
      style: 'academic',
      bestFor: 'Researchers, Academics, and Graduate Students',
      description: 'An academic-focused template with a comprehensive research summary section. Perfect for highlighting research interests, publications, grants, and scholarly contributions.',
      features: ['Research Focus Statement', 'Publication Highlights', 'Grant Funding Information', 'Academic Expertise Areas', 'Teaching Philosophy Integration'],
      summaryFormat: 'Academic summary with research focus and scholarly achievements',
      summarySpecs: 'Supports research interests, publications, and academic contributions'
    },
    {
      id: 6,
      name: 'Career Highlights Summary',
      style: 'results-focused',
      bestFor: 'Sales, Marketing, and Results-Driven Professionals',
      description: 'A results-focused template emphasizing career achievements and quantifiable results in the summary section. Perfect for professionals who want to showcase their impact and accomplishments.',
      features: ['Quantifiable Achievements', 'Revenue/Impact Metrics', 'Career Progression Highlights', 'Key Performance Indicators', 'Value Proposition Statement'],
      summaryFormat: 'Results-focused summary with quantifiable achievements',
      summarySpecs: 'Supports metrics-driven summary with KPIs and impact statements'
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
        "name": "Summary Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/summary"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Summary Section",
    "description": "Browse professional resume templates that feature a dedicated summary section for showcasing your professional brand, career highlights, and key achievements. Choose from executive, modern, technical, creative, academic, and results-focused layouts designed to make a strong first impression and capture recruiter attention.",
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
          title={`${selectedTemplate.name} | Resume Template with Summary Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.summaryFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes professional summary placement and career highlights.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with summary section, professional summary resume, ${selectedTemplate.style} resume, executive summary resume, career summary template, professional profile resume`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/summary/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/summary" style={{ color: '#666', textDecoration: 'none' }}>Summary Section</Link>
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
            ← Back to All Summary Section Templates
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
                {selectedTemplate.name}: Resume Template with Summary Section
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
                Summary Focus
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
              {/* Simulated Summary Section Preview */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '16px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  PROFESSIONAL SUMMARY
                </h3>
              </div>

              {/* Summary Preview */}
              <div style={{
                background: '#f8f9fa',
                padding: '24px',
                borderRadius: '12px',
                borderLeft: '4px solid #0070f3',
                marginBottom: '30px'
              }}>
                <p style={{ margin: 0, color: '#333', fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "Results-driven Digital Marketing Manager with 8+ years of experience driving brand growth and customer engagement through strategic digital channels. Expertise in SEO, PPC, and social media strategy, with a proven track record of increasing organic traffic by 150% and managing $2M+ marketing budgets achieving 3.5x ROAS. Skilled in team leadership, data analysis, and campaign optimization."
                </p>
              </div>

              {/* Summary Section Description */}
              <div style={{
                background: '#f0f7ff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
                border: '1px solid #bbdefb'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontWeight: 500, marginBottom: '8px' }}>
                  Summary Section Format
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {selectedTemplate.summaryFormat}
                </p>
                <p style={{ margin: '12px 0 0 0', color: '#666', fontSize: '13px' }}>
                  <strong>Supports:</strong> {selectedTemplate.summarySpecs}
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
              <strong>Summary Format:</strong> {selectedTemplate.summaryFormat}
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
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Professional Summary with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and craft a compelling professional summary that captures recruiter attention.
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
        title="Resume Templates with Summary Section | Professional Summary Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated summary section for showcasing your professional brand, career highlights, and key achievements. Choose from executive, modern, technical, creative, academic, and results-focused layouts designed to make a strong first impression and capture recruiter attention. Perfect for senior executives, mid-level professionals, technical experts, creative professionals, and career changers who need to showcase their unique value proposition."
        keywords="resume templates with summary section, professional summary resume, executive summary template, career summary resume, professional profile template, resume summary examples, summary section layout, executive resume template, modern summary resume, technical summary resume, creative summary resume"
        canonical="https://freeresumemaker.xyz/templates/by-section/summary"
        image="https://freeresumemaker.xyz/images/templates/summary-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Summary Section</span>
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
            Resume Templates with Summary Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Make a powerful first impression with templates designed to showcase your professional summary.
            Perfect for highlighting your unique value proposition and career achievements.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Ideal for: Senior Executives | Mid-Level Professionals | Technical Experts | Creative Professionals | Career Changers | Recent Graduates
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
            <div style={{ fontSize: '14px', color: '#666' }}>Summary-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Executive • Modern • Technical</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Summary Styles</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>First Impression</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Capture Recruiter Attention</div>
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
              {/* Preview Summary Indicator */}
              <div style={{
                width: '100%',
                height: '100px',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                position: 'relative'
              }}>
                <div style={{
                  background: 'white',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#0070f3',
                  textAlign: 'center',
                  lineHeight: '1.4',
                  maxWidth: '90%'
                }}>
                  "Experienced professional with 8+ years of expertise..."
                </div>
              </div>

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
                    {template.summaryFormat.split(' ').slice(0, 3).join(' ')}...
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
            How to Write an Effective Resume Summary
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Keep It Concise and Impactful</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Aim for 3-4 sentences or 50-100 words maximum. Recruiters spend only 6-8 seconds scanning resumes, so make every word count.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Your Achievements</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include specific metrics: "Increased revenue by 40%", "Managed $2M budget", "Led teams of 15+ people". Numbers grab attention and validate claims.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Tailor to the Job Description</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use keywords from the job posting in your summary. This improves ATS compatibility and shows you understand the role requirements.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Your Unique Value</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>What sets you apart? Include your unique combination of skills, years of experience, industry expertise, or notable achievements that make you the ideal candidate.</p>
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
            Create Your Professional Summary Today
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates with summary sections and craft a compelling professional profile that captures recruiter attention. Perfect for making a strong first impression.
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
            <Link href="/blog/how-to-write-resume-summary" style={{ color: '#0070f3' }}>How to Write a Resume Summary →</Link>
            <Link href="/blog/resume-summary-examples" style={{ color: '#0070f3' }}>20+ Resume Summary Examples →</Link>
            <Link href="/templates/by-section/experience" style={{ color: '#0070f3' }}>Templates with Experience Section →</Link>
            <Link href="/blog/executive-resume-tips" style={{ color: '#0070f3' }}>Executive Resume Tips →</Link>
          </div>
        </div>
      </div>
    </>
  );
}