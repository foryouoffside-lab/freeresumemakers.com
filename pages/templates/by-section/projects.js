import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionProjects() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the projects section
  const templates = [
    {
      id: 1,
      name: 'Technical Project Portfolio',
      style: 'technical',
      bestFor: 'Software Engineers, Developers, and IT Professionals',
      description: 'A technical-focused template with a dedicated projects section for showcasing software development work. Perfect for developers to highlight GitHub projects, technical implementations, and code contributions.',
      features: ['GitHub Integration', 'Technology Stack Badges', 'Project Links', 'Code Repository References', 'Technical Achievements'],
      projectFormat: 'Project-based with technology stack and key contributions',
      projectSpecs: 'Supports 5+ projects with live links and repository references'
    },
    {
      id: 2,
      name: 'Creative Project Showcase',
      style: 'creative',
      bestFor: 'Designers, Artists, and Creative Professionals',
      description: 'A visually engaging template designed for creative professionals to showcase portfolio projects. Features image placeholders, project descriptions, and creative process highlights.',
      features: ['Visual Project Gallery', 'Image Placeholders', 'Creative Process Documentation', 'Client Work Examples', 'Award Highlights'],
      projectFormat: 'Visual portfolio with image thumbnails and descriptions',
      projectSpecs: 'Supports images, videos, and multimedia project links'
    },
    {
      id: 3,
      name: 'Academic Research Projects',
      style: 'academic',
      bestFor: 'Researchers, Academics, and Graduate Students',
      description: 'An academic-focused template with comprehensive projects section for research work, publications, and academic achievements. Features publication citations and research methodology highlights.',
      features: ['Publication Citations', 'Research Methodology', 'Grant Information', 'Academic Collaborations', 'Conference Presentations'],
      projectFormat: 'Research-focused with methodology and outcomes',
      projectSpecs: 'Supports academic citations, DOI links, and publication references'
    },
    {
      id: 4,
      name: 'Business Project Portfolio',
      style: 'professional',
      bestFor: 'Project Managers, Business Analysts, and Consultants',
      description: 'A professional template highlighting business projects, client engagements, and strategic initiatives. Features project scope, team size, budget, and measurable outcomes.',
      features: ['Project Scope Details', 'Budget Information', 'Team Leadership', 'Stakeholder Management', 'ROI Metrics'],
      projectFormat: 'Business-focused with KPIs and measurable outcomes',
      projectSpecs: 'Supports budget, timeline, team size, and ROI metrics'
    },
    {
      id: 5,
      name: 'Engineering Project Resume',
      style: 'engineering',
      bestFor: 'Mechanical, Civil, Electrical, and Other Engineers',
      description: 'An engineering-focused template showcasing technical projects, designs, and implementations. Features CAD references, technical specifications, and engineering outcomes.',
      features: ['Technical Specifications', 'CAD/Design References', 'Engineering Calculations', 'Project Timelines', 'Safety Compliance'],
      projectFormat: 'Engineering-focused with technical specifications',
      projectSpecs: 'Supports technical drawings, specifications, and compliance details'
    },
    {
      id: 6,
      name: 'Open Source Contributions',
      style: 'developer-focused',
      bestFor: 'Open Source Developers and Community Contributors',
      description: 'A specialized template for showcasing open source contributions and community projects. Features repository stats, pull requests, and community impact metrics.',
      features: ['Repository Statistics', 'Pull Request Highlights', 'Community Engagement', 'Mentorship Activities', 'Documentation Contributions'],
      projectFormat: 'Open source contributions with metrics and impact',
      projectSpecs: 'Supports GitHub stats, contribution graphs, and community metrics'
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
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Templates",
        "item": "https://freeresumemakers.com/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Templates by Section",
        "item": "https://freeresumemakers.com/templates/by-section"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects Section",
        "item": "https://freeresumemakers.com/templates/by-section/projects"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Projects Section",
    "description": "Browse professional resume templates that feature a dedicated projects section for showcasing your work, portfolio, and technical achievements. Perfect for developers, designers, engineers, project managers, and creative professionals who need to highlight their project experience and accomplishments.",
    "numberOfItems": templates.length,
    "itemListElement": templates.map((template, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": template.name,
      "description": template.description,
      "url": `https://freeresumemakers.com/templates/${template.id}`
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
          title={`${selectedTemplate.name} | Resume Template with Projects Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.projectFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes project showcases, technology stacks, and measurable outcomes.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with projects section, project portfolio resume, technical project resume, ${selectedTemplate.style} resume, project showcase template, portfolio resume template, developer resume template`}
          canonical={`https://freeresumemakers.com/templates/by-section/projects/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/projects" style={{ color: '#666', textDecoration: 'none' }}>Projects Section</Link>
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
            ← Back to All Projects Section Templates
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
                {selectedTemplate.name}: Resume Template with Projects Section
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
                Project Portfolio
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
              {/* Simulated Projects Section Preview */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '16px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  PROJECTS
                </h3>
              </div>

              {/* Project Cards Preview */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                marginBottom: '30px'
              }}>
                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '20px',
                  background: '#fafafa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>E-Commerce Platform</h4>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>React</span>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>Node.js</span>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>MongoDB</span>
                    </div>
                  </div>
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                    Built a full-stack e-commerce platform handling 10,000+ daily users with real-time inventory management and payment integration.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#666', fontSize: '13px' }}>
                    <li>Implemented secure payment gateway with Stripe API</li>
                    <li>Reduced page load time by 40% through code optimization</li>
                    <li>Deployed on AWS with 99.9% uptime guarantee</li>
                  </ul>
                </div>

                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '20px',
                  background: '#fafafa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>Task Management Application</h4>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>React</span>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>Express</span>
                      <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>PostgreSQL</span>
                    </div>
                  </div>
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                    Developed a real-time task management application with team collaboration features and role-based access control.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#666', fontSize: '13px' }}>
                    <li>Implemented WebSocket for real-time updates across teams</li>
                    <li>Achieved 95% test coverage with Jest and React Testing Library</li>
                    <li>Containerized with Docker for seamless deployment</li>
                  </ul>
                </div>
              </div>

              {/* Projects Section Description */}
              <div style={{
                background: '#f0f7ff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
                border: '1px solid #bbdefb'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontWeight: 500, marginBottom: '8px' }}>
                  Projects Section Format
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {selectedTemplate.projectFormat}
                </p>
                <p style={{ margin: '12px 0 0 0', color: '#666', fontSize: '13px' }}>
                  <strong>Supports:</strong> {selectedTemplate.projectSpecs}
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
              <strong>Project Format:</strong> {selectedTemplate.projectFormat}
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
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Project Portfolio Resume with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and showcase your most impressive projects and achievements.
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
        title="Resume Templates with Projects Section | Project Portfolio & Technical Showcase Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated projects section for showcasing your work, portfolio, and technical achievements. Choose from technical, creative, academic, business, engineering, and open source layouts designed to highlight your project experience, technology stacks, and measurable outcomes. Perfect for developers, designers, engineers, project managers, and creative professionals."
        keywords="resume templates with projects section, project portfolio resume, technical project resume, developer portfolio resume, creative project showcase, engineering project resume, open source contributions resume, project management resume, portfolio resume template, projects section resume"
        canonical="https://freeresumemakers.com/templates/by-section/projects"
        image="https://freeresumemakers.com/images/templates/projects-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Projects Section</span>
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
            Resume Templates with Projects Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Showcase your best work with templates designed to highlight projects, portfolios, and technical achievements.
            Perfect for developers, designers, engineers, and creative professionals.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Ideal for: Software Developers | Designers | Engineers | Project Managers | Researchers | Creative Professionals | Open Source Contributors
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
            <div style={{ fontSize: '14px', color: '#666' }}>Project-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Technical • Creative • Academic</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Portfolio Formats</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Portfolio Ready</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Showcase Your Best Work</div>
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
              {/* Preview Project Indicator */}
              <div style={{
                width: '100%',
                height: '100px',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                position: 'relative'
              }}>
                <div style={{
                  background: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0070f3',
                  textAlign: 'center'
                }}>
                  Project<br />Showcase
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
                    {template.projectFormat.split(' ').slice(0, 3).join(' ')}...
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
            How to Showcase Projects on Your Resume
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Your Best Work</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Select 3-5 most impressive projects that demonstrate your skills. Include personal projects, professional work, open source contributions, and academic research.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Technology Stack</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List the technologies, tools, and frameworks used. This helps recruiters quickly identify relevant technical skills and experience.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Project Impact</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include measurable outcomes: "Increased performance by 40%", "Handled 10,000+ users", "Reduced costs by 25%", "Completed 2 weeks ahead of schedule".</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Add Live Links and Portfolios</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include GitHub repositories, live demos, portfolio websites, or case studies. Make it easy for recruiters to see your work in action.</p>
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
            Create Your Project Portfolio Resume Today
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates with projects sections and build a portfolio resume that showcases your best work. Perfect for standing out to recruiters.
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
            <Link href="/blog/how-to-list-projects-on-resume" style={{ color: '#0070f3' }}>How to List Projects on Your Resume →</Link>
            <Link href="/blog/github-portfolio-for-developers" style={{ color: '#0070f3' }}>Creating a Developer Portfolio →</Link>
            <Link href="/templates/by-section/skills" style={{ color: '#0070f3' }}>Templates with Skills Section →</Link>
            <Link href="/blog/technical-resume-tips" style={{ color: '#0070f3' }}>Technical Resume Tips →</Link>
          </div>
        </div>
      </div>
    </>
  );
}