import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionSkills() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the skills section
  const templates = [
    {
      id: 1,
      name: 'Technical Skills Showcase',
      style: 'technical',
      bestFor: 'Software Engineers, Developers, and IT Professionals',
      description: 'A technical-focused template with a comprehensive skills section for showcasing programming languages, frameworks, tools, and technologies. Perfect for developers who need to highlight their technical expertise.',
      features: ['Programming Language Badges', 'Framework Proficiency Levels', 'Tool Expertise Indicators', 'Technical Certification Integration', 'Skill Categorization'],
      skillsFormat: 'Categorized with proficiency levels and technology badges',
      skillsSpecs: 'Supports 20+ skills with visual proficiency indicators'
    },
    {
      id: 2,
      name: 'Creative Skills Portfolio',
      style: 'creative',
      bestFor: 'Designers, Artists, and Creative Professionals',
      description: 'A visually engaging template designed for creative professionals to showcase their creative skills, software proficiency, and artistic capabilities. Features visual skill indicators and creative tool expertise.',
      features: ['Visual Skill Indicators', 'Software Proficiency Levels', 'Creative Tool Expertise', 'Design Methodology Highlights', 'Portfolio Integration'],
      skillsFormat: 'Visual rating system with creative tool badges',
      skillsSpecs: 'Supports Adobe Creative Suite, Figma, Sketch, and creative tools'
    },
    {
      id: 3,
      name: 'Business Skills Matrix',
      style: 'professional',
      bestFor: 'Business Professionals, Managers, and Executives',
      description: 'A professional template featuring a skills matrix for business competencies, leadership abilities, and strategic capabilities. Perfect for showcasing management and business skills.',
      features: ['Leadership Competencies', 'Strategic Skills Matrix', 'Business Acumen Indicators', 'Industry Expertise Tags', 'Certification Highlights'],
      skillsFormat: 'Matrix format with competency levels and examples',
      skillsSpecs: 'Supports leadership, management, and strategic business skills'
    },
    {
      id: 4,
      name: 'Soft Skills Focus',
      style: 'modern',
      bestFor: 'Customer Service, Sales, and People-Focused Roles',
      description: 'A modern template emphasizing soft skills, interpersonal abilities, and communication competencies. Perfect for professionals in client-facing and collaborative roles.',
      features: ['Communication Skill Indicators', 'Teamwork Capabilities', 'Problem-Solving Highlights', 'Emotional Intelligence Focus', 'Interpersonal Skills Grid'],
      skillsFormat: 'Descriptive with real-world application examples',
      skillsSpecs: 'Supports soft skills with situational examples and context'
    },
    {
      id: 5,
      name: 'Academic Skills Profile',
      style: 'academic',
      bestFor: 'Researchers, Academics, and Educators',
      description: 'An academic-focused template highlighting research skills, teaching competencies, and scholarly expertise. Features academic specializations and methodological skills.',
      features: ['Research Methodology Skills', 'Teaching Competencies', 'Academic Writing Expertise', 'Grant Writing Abilities', 'Specialized Knowledge Areas'],
      skillsFormat: 'Academic-focused with research and teaching emphasis',
      skillsSpecs: 'Supports academic specializations, research methods, and publications'
    },
    {
      id: 6,
      name: 'Comprehensive Skills Grid',
      style: 'versatile',
      bestFor: 'Multi-Disciplinary Professionals and Generalists',
      description: 'A versatile template featuring a comprehensive skills grid that combines technical, soft, and industry-specific skills. Perfect for professionals with diverse skill sets.',
      features: ['Multi-Category Skills Grid', 'Proficiency Level Indicators', 'Skill Strength Visualization', 'Industry-Specific Tags', 'Continuous Learning Highlights'],
      skillsFormat: 'Grid layout with multiple categories and proficiency levels',
      skillsSpecs: 'Supports 30+ skills across 5+ categories'
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
        "name": "Skills Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/skills"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Skills Section",
    "description": "Browse professional resume templates that feature a dedicated skills section for showcasing your technical expertise, soft skills, and professional competencies. Choose from technical, creative, business, soft skills, academic, and comprehensive layouts designed to highlight your unique skill set and qualifications.",
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
          title={`${selectedTemplate.name} | Resume Template with Skills Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.skillsFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes skill categorization, proficiency indicators, and professional competencies.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with skills section, skills-focused resume, ${selectedTemplate.style} resume, technical skills resume, professional skills template, competency-based resume`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/skills/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/skills" style={{ color: '#666', textDecoration: 'none' }}>Skills Section</Link>
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
            ← Back to All Skills Section Templates
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
                {selectedTemplate.name}: Resume Template with Skills Section
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
                Skills Focus
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
              {/* Simulated Skills Section Preview */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '16px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  SKILLS & EXPERTISE
                </h3>
              </div>

              {/* Skills Grid Preview */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginBottom: '30px'
              }}>
                {/* Programming Languages Category */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#0070f3', marginBottom: '12px' }}>Programming Languages</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>JavaScript (Advanced)</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>TypeScript (Advanced)</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Python (Intermediate)</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Java (Intermediate)</span>
                  </div>
                </div>

                {/* Frameworks & Libraries Category */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#0070f3', marginBottom: '12px' }}>Frameworks & Libraries</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>React.js</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Next.js</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Node.js</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Express.js</span>
                  </div>
                </div>

                {/* Tools & Technologies Category */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#0070f3', marginBottom: '12px' }}>Tools & Technologies</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Git</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Docker</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>AWS</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>MongoDB</span>
                  </div>
                </div>

                {/* Soft Skills Category */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#0070f3', marginBottom: '12px' }}>Professional Competencies</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Team Leadership</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Agile Methodology</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Problem Solving</span>
                    <span style={{ background: '#e3f2fd', color: '#0070f3', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>Communication</span>
                  </div>
                </div>
              </div>

              {/* Skills Section Description */}
              <div style={{
                background: '#f0f7ff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
                border: '1px solid #bbdefb'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontWeight: 500, marginBottom: '8px' }}>
                  Skills Section Format
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {selectedTemplate.skillsFormat}
                </p>
                <p style={{ margin: '12px 0 0 0', color: '#666', fontSize: '13px' }}>
                  <strong>Supports:</strong> {selectedTemplate.skillsSpecs}
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
              <strong>Skills Format:</strong> {selectedTemplate.skillsFormat}
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
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Skills-Focused Resume with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and showcase your unique skills and competencies.
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
        title="Resume Templates with Skills Section | Professional Skills-Focused Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated skills section for showcasing your technical expertise, soft skills, and professional competencies. Choose from technical, creative, business, soft skills, academic, and comprehensive layouts designed to highlight your unique skill set, proficiency levels, and qualifications. Perfect for developers, designers, managers, and professionals across all industries."
        keywords="resume templates with skills section, skills-focused resume, technical skills resume, professional skills template, competency-based resume, skills matrix template, soft skills resume, developer skills resume, creative skills portfolio, business skills resume, ATS friendly skills resume"
        canonical="https://freeresumemaker.xyz/templates/by-section/skills"
        image="https://freeresumemaker.xyz/images/templates/skills-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Skills Section</span>
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
            Resume Templates with Skills Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Showcase your expertise with templates designed to highlight your technical skills, soft skills, and professional competencies.
            Perfect for professionals who want to make their qualifications stand out.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Ideal for: Software Developers | Designers | Business Professionals | Managers | Customer Service | Educators | Multi-Disciplinary Experts
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
            <div style={{ fontSize: '14px', color: '#666' }}>Skills-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Technical • Soft • Business</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Skill Categories</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>ATS Optimized</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Keyword-Friendly Design</div>
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
              {/* Preview Skills Indicator */}
              <div style={{
                width: '100%',
                height: '100px',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                padding: '12px',
                position: 'relative'
              }}>
                <span style={{
                  background: 'white',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  JavaScript
                </span>
                <span style={{
                  background: 'white',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  React
                </span>
                <span style={{
                  background: 'white',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  Python
                </span>
                <span style={{
                  background: 'white',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  Leadership
                </span>
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
                    {template.skillsFormat.split(' ').slice(0, 3).join(' ')}...
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
            How to Create an Effective Skills Section
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Categorize Your Skills</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Group skills into logical categories: Technical Skills, Soft Skills, Industry-Specific, Language Skills. This makes it easier for recruiters to quickly identify relevant qualifications.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Proficiency Levels</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Indicate your proficiency level (Expert, Advanced, Intermediate, Basic) for key technical skills. Be honest about your capabilities to maintain credibility.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Align with Job Description</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Tailor your skills section to match keywords in the job description. This improves ATS compatibility and shows you're a good fit for the role.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Balance Hard and Soft Skills</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include both technical competencies and soft skills. Employers value communication, teamwork, and problem-solving alongside technical expertise.</p>
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
            Create Your Skills-Focused Resume Today
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates with skills sections and build a resume that showcases your unique expertise. Perfect for highlighting your qualifications.
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
            <Link href="/blog/how-to-list-skills-on-resume" style={{ color: '#0070f3' }}>How to List Skills on Your Resume →</Link>
            <Link href="/blog/technical-skills-for-resume" style={{ color: '#0070f3' }}>Top Technical Skills for Resume →</Link>
            <Link href="/templates/by-section/experience" style={{ color: '#0070f3' }}>Templates with Experience Section →</Link>
            <Link href="/blog/ats-keyword-optimization" style={{ color: '#0070f3' }}>ATS Keyword Optimization Guide →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
