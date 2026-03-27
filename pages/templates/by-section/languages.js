import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionLanguages() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the languages section
  const templates = [
    {
      id: 1,
      name: 'Multilingual Professional Resume',
      style: 'modern',
      bestFor: 'International Business and Global Roles',
      description: 'A clean, modern template with a dedicated languages section for showcasing multiple language proficiencies. Perfect for professionals working in international business, diplomacy, or global organizations.',
      features: ['Language Proficiency Scale', 'Native/Fluent/Conversational Levels', 'Certification Badges', 'Clean Sidebar Layout', 'ATS-Friendly Format'],
      languageFormat: 'CEFR scale with proficiency levels (A1-C2)',
      languageSpecs: 'Supports 5+ languages with proficiency indicators'
    },
    {
      id: 2,
      name: 'Global Executive Resume',
      style: 'executive',
      bestFor: 'Senior Leaders and International Executives',
      description: 'An executive-level template featuring a prominent languages section for global leaders. Showcases language capabilities alongside international experience and cross-cultural competencies.',
      features: ['Executive Language Section', 'International Experience Integration', 'Cultural Competency Highlights', 'Business Language Proficiency', 'Global Network Indicators'],
      languageFormat: 'Business proficiency with context-specific indicators',
      languageSpecs: 'Detailed language usage context and professional applications'
    },
    {
      id: 3,
      name: 'Technical Bilingual Resume',
      style: 'technical',
      bestFor: 'Tech Professionals and Developers',
      description: 'A technical-focused template with integrated languages section for bilingual or multilingual developers. Perfect for global tech companies and remote international teams.',
      features: ['Technical Language Proficiency', 'Code-Switching Capabilities', 'Documentation Language Skills', 'Global Team Experience', 'Remote Work Readiness'],
      languageFormat: 'Technical and conversational proficiency levels',
      languageSpecs: 'Programming languages separate from spoken languages'
    },
    {
      id: 4,
      name: 'Creative Language Resume',
      style: 'creative',
      bestFor: 'Translators, Interpreters, and Linguists',
      description: 'A visually engaging template designed for language professionals. Features detailed language section with proficiency breakdowns, certifications, and translation experience.',
      features: ['Detailed Language Grid', 'Certification Highlights', 'Translation Experience', 'Interpretation Skills', 'Language Pair Specifications'],
      languageFormat: 'Detailed breakdown with certification references',
      languageSpecs: 'Language pairs, specializations, and certification details'
    },
    {
      id: 5,
      name: 'Academic Language Resume',
      style: 'academic',
      bestFor: 'Educators, Researchers, and Academics',
      description: 'An academic-focused template with comprehensive languages section for scholars and educators. Highlights language teaching experience, research language proficiency, and academic language certifications.',
      features: ['Academic Language Proficiency', 'Teaching Experience', 'Research Language Skills', 'Scholarly Publications', 'Language Assessment Scores'],
      languageFormat: 'Academic proficiency with test scores (TOEFL, IELTS, DELF)',
      languageSpecs: 'Standardized test scores and academic language certifications'
    },
    {
      id: 6,
      name: 'Customer-Facing Language Resume',
      style: 'customer-focused',
      bestFor: 'Customer Service, Sales, and Hospitality',
      description: 'A customer-centric template highlighting multilingual capabilities for client-facing roles. Perfect for sales, customer success, and hospitality professionals serving diverse clientele.',
      features: ['Customer Language Skills', 'Client Interaction Experience', 'Multilingual Support', 'Cultural Awareness', 'Communication Highlights'],
      languageFormat: 'Practical communication proficiency levels',
      languageSpecs: 'Conversational fluency and customer interaction context'
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
        "name": "Languages Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/languages"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Languages Section",
    "description": "Browse professional resume templates that feature a dedicated languages section for showcasing multilingual capabilities. Perfect for international business professionals, translators, global executives, and customer-facing roles who need to highlight language proficiency.",
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
          title={`${selectedTemplate.name} | Resume Template with Languages Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.languageFormat}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes proficiency scales and language certification integration.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with languages section, multilingual resume template, bilingual resume, language proficiency resume, ${selectedTemplate.style} resume, language skills resume, professional resume with languages`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/languages/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/languages" style={{ color: '#666', textDecoration: 'none' }}>Languages Section</Link>
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
            ← Back to All Languages Section Templates
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
                {selectedTemplate.name}: Resume Template with Languages Section
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
                Multilingual
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
              {/* Simulated Languages Section Preview */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '16px', 
                  color: '#1a1a1a',
                  borderBottom: '2px solid #0070f3',
                  display: 'inline-block',
                  paddingBottom: '4px'
                }}>
                  LANGUAGES
                </h3>
              </div>

              {/* Languages Section Preview */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>English</div>
                  <div style={{ color: '#0070f3', fontWeight: 500, marginBottom: '4px' }}>Native / Bilingual</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>C2 Proficiency (IELTS: 8.5)</div>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>Hindi</div>
                  <div style={{ color: '#0070f3', fontWeight: 500, marginBottom: '4px' }}>Native Speaker</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Professional Writing and Speaking</div>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>French</div>
                  <div style={{ color: '#0070f3', fontWeight: 500, marginBottom: '4px' }}>Professional Working Proficiency</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>DELF B2 Certified</div>
                </div>
              </div>

              {/* Languages Section Description */}
              <div style={{
                background: '#f0f7ff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
                border: '1px solid #bbdefb'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontWeight: 500, marginBottom: '8px' }}>
                  Languages Section Format
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {selectedTemplate.languageFormat}
                </p>
                <p style={{ margin: '12px 0 0 0', color: '#666', fontSize: '13px' }}>
                  <strong>Supports:</strong> {selectedTemplate.languageSpecs}
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
              <strong>Language Format:</strong> {selectedTemplate.languageFormat}
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
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Multilingual Resume with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and showcase your language skills and cultural competencies.
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
        title="Resume Templates with Languages Section | Multilingual Resume Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated languages section for showcasing multilingual capabilities. Choose from modern, executive, technical, creative, academic, and customer-focused layouts designed to highlight your language proficiency, certifications, and global experience. Perfect for international business professionals, translators, global executives, and bilingual candidates."
        keywords="resume templates with languages section, multilingual resume template, bilingual resume, language proficiency resume, resume with language skills, languages section resume, international resume template, global executive resume, translator resume template, language skills resume"
        canonical="https://freeresumemaker.xyz/templates/by-section/languages"
        image="https://freeresumemaker.xyz/images/templates/languages-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Languages Section</span>
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
            Resume Templates with Languages Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Showcase your multilingual capabilities with templates designed to highlight language proficiency.
            Perfect for international business, global roles, and bilingual professionals.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Ideal for: International Business Professionals | Translators and Interpreters | Global Executives | Bilingual Customer Service | Multilingual Sales Teams | Language Educators
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
            <div style={{ fontSize: '14px', color: '#666' }}>Language-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>CEFR • Native • Professional</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Proficiency Formats</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Global Ready</div>
            <div style={{ fontSize: '14px', color: '#666' }}>International Standards</div>
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
              {/* Preview Language Indicator */}
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
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  English
                </div>
                <div style={{
                  background: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  Hindi
                </div>
                <div style={{
                  background: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0070f3'
                }}>
                  French
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
                    {template.languageFormat.split(' ').slice(0, 3).join(' ')}...
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
            How to Showcase Language Skills on Your Resume
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Use Standard Proficiency Levels</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use internationally recognized scales like CEFR (A1-C2), ILR, or simple categories: Native, Fluent, Professional Working, Conversational, Basic.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Language Certifications</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Mention certifications like TOEFL, IELTS, DELF/DALF, DELE, JLPT, or HSK scores to validate your proficiency with official credentials.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Contextualize Your Language Skills</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Explain how you use languages professionally - business negotiations, technical documentation, customer support, or translation work.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Be Honest About Proficiency</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Never exaggerate language skills. Recruiters may test your proficiency during interviews. Be accurate about your speaking, writing, reading, and listening abilities.</p>
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
            Create Your Multilingual Resume Today
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates with languages sections and build your multilingual resume in minutes. Perfect for international opportunities.
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
            <Link href="/blog/how-to-list-languages-on-resume" style={{ color: '#0070f3' }}>How to List Languages on Your Resume →</Link>
            <Link href="/blog/language-proficiency-levels-guide" style={{ color: '#0070f3' }}>Language Proficiency Levels Guide →</Link>
            <Link href="/templates/by-section/skills" style={{ color: '#0070f3' }}>Templates with Skills Section →</Link>
            <Link href="/blog/international-resume-tips" style={{ color: '#0070f3' }}>International Resume Tips →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
