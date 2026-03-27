import React from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function BySectionImageSection() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Sample templates that highlight the image section
  const templates = [
    {
      id: 1,
      name: 'Professional Photo Resume',
      style: 'modern',
      bestFor: 'Corporate and Business Professionals',
      description: 'A clean, modern template with a dedicated professional photo section. Perfect for corporate roles where a professional headshot adds credibility and personal branding.',
      features: ['Professional Photo Placement', 'Clean Corporate Layout', 'Contact Information Sidebar', 'Experience-Focused Design', 'ATS-Friendly Format'],
      imagePlacement: 'Sidebar placement with professional headshot area',
      imageSpecs: 'Professional headshot, 2x2 ratio, 300x300px recommended'
    },
    {
      id: 2,
      name: 'Creative Portfolio Resume',
      style: 'creative',
      bestFor: 'Designers, Artists, and Creative Professionals',
      description: 'A visually engaging template with prominent image sections for portfolio pieces, creative work samples, and visual achievements.',
      features: ['Portfolio Image Gallery', 'Visual Project Showcase', 'Creative Layout', 'Color Accents', 'Work Sample Integration'],
      imagePlacement: 'Integrated gallery with project thumbnails',
      imageSpecs: 'Project screenshots, 16:9 ratio, 800x450px recommended'
    },
    {
      id: 3,
      name: 'Branded Profile Resume',
      style: 'branded',
      bestFor: 'Marketing, Sales, and Personal Branding',
      description: 'A branded template designed for professionals who want to showcase their personal brand. Features a prominent profile image section with brand color integration.',
      features: ['Personal Branding Focus', 'Profile Image Section', 'Brand Color Integration', 'Social Media Links', 'Tagline/Headline Area'],
      imagePlacement: 'Centered profile image with branded background',
      imageSpecs: 'Professional brand photo, 1:1 ratio, 400x400px recommended'
    },
    {
      id: 4,
      name: 'Visual Portfolio Resume',
      style: 'visual',
      bestFor: 'Photographers, Videographers, and Visual Artists',
      description: 'A visually-rich template designed for visual artists and creative professionals. Features multiple image sections to showcase your best work.',
      features: ['Multiple Image Sections', 'Portfolio Grid Layout', 'Project Case Studies', 'Client Logos Section', 'Visual Timeline'],
      imagePlacement: 'Dedicated portfolio gallery with 4-6 image slots',
      imageSpecs: 'High-resolution work samples, various ratios supported'
    },
    {
      id: 5,
      name: 'Tech Profile Resume',
      style: 'technical',
      bestFor: 'Software Engineers and Tech Professionals',
      description: 'A modern tech-focused template with a subtle profile image section and GitHub/portfolio integration. Perfect for developers who maintain a professional online presence.',
      features: ['Profile Image Section', 'GitHub Link Integration', 'QR Code for Portfolio', 'Tech Stack Visualization', 'Clean Layout'],
      imagePlacement: 'Compact profile image with QR code for digital portfolio',
      imageSpecs: 'Professional photo or avatar, 150x150px recommended'
    },
    {
      id: 6,
      name: 'Executive Profile Resume',
      style: 'executive',
      bestFor: 'Senior Leaders, C-Suite Executives',
      description: 'An executive-level template with a distinguished professional photo section. Designed to convey authority, credibility, and leadership presence.',
      features: ['Executive Photo Placement', 'Leadership Branding', 'Achievement Highlights', 'Board Experience', 'Professional Summary'],
      imagePlacement: 'Prominent executive photo with professional framing',
      imageSpecs: 'Professional executive portrait, 3:4 ratio, 600x800px recommended'
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
        "name": "Image Section",
        "item": "https://freeresumemaker.xyz/templates/by-section/image-section"
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates with Image Section",
    "description": "Browse professional resume templates that feature a dedicated image section for professional photos, portfolio pieces, and personal branding. Perfect for corporate professionals, creative artists, and tech professionals who want to add visual impact to their resume.",
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
          title={`${selectedTemplate.name} | Resume Template with Image Section | Professional Layout`}
          description={`${selectedTemplate.description} This ${selectedTemplate.style} template features ${selectedTemplate.imagePlacement}. Perfect for ${selectedTemplate.bestFor.toLowerCase()}. Includes professional photo placement and visual branding elements.`}
          keywords={`${selectedTemplate.name.toLowerCase()}, resume template with photo, resume with image section, professional resume template with photo, ${selectedTemplate.style} resume, photo resume template, resume with headshot`}
          canonical={`https://freeresumemaker.xyz/templates/by-section/image-section/${selectedTemplate.id}`}
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
            <Link href="/templates/by-section/image-section" style={{ color: '#666', textDecoration: 'none' }}>Image Section</Link>
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
            ← Back to All Image Section Templates
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
                {selectedTemplate.name}: Resume Template with Image Section
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
                Visual Resume
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
              {/* Simulated Image Section Preview */}
              <div style={{
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap',
                marginBottom: '30px'
              }}>
                {/* Image Placeholder */}
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #0070f3',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    textAlign: 'center',
                    color: '#0070f3',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    Profile<br />Photo
                  </div>
                </div>
                
                {/* Profile Info */}
                <div>
                  <h3 style={{ fontSize: '28px', marginBottom: '4px', color: '#1a1a1a' }}>John Smith</h3>
                  <p style={{ color: '#0070f3', marginBottom: '8px' }}>Marketing Director</p>
                  <p style={{ color: '#666', fontSize: '14px' }}>john.smith@email.com | +91 98765 43210</p>
                </div>
              </div>

              {/* Image Section Description */}
              <div style={{
                background: '#f0f7ff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
                border: '1px solid #bbdefb'
              }}>
                <p style={{ margin: 0, color: '#0070f3', fontWeight: 500, marginBottom: '8px' }}>
                  Image Section Placement
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {selectedTemplate.imagePlacement}
                </p>
                <p style={{ margin: '12px 0 0 0', color: '#666', fontSize: '13px' }}>
                  <strong>Recommended Image Specifications:</strong> {selectedTemplate.imageSpecs}
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
              <strong>Image Placement:</strong> {selectedTemplate.imagePlacement}
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
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Create Your Visual Resume with This Template</h2>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Use our free resume builder to customize this template and add your professional photo or portfolio images.
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
        title="Resume Templates with Image Section | Professional Photo & Portfolio Layouts 2026"
        description="Browse 20+ professional resume templates that feature a dedicated image section for professional photos, portfolio pieces, and personal branding. Choose from corporate, creative, technical, and executive layouts designed to add visual impact to your resume. Perfect for professionals who want to stand out with a polished visual presence."
        keywords="resume templates with photo, resume with image section, professional photo resume, resume with headshot, portfolio resume templates, creative resume templates, visual resume, photo resume layout, resume with profile picture, professional resume with photo"
        canonical="https://freeresumemaker.xyz/templates/by-section/image-section"
        image="https://freeresumemaker.xyz/images/templates/image-section-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Image Section</span>
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
            Resume Templates with Image Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Add visual impact to your resume with templates that feature dedicated image sections.
            Perfect for professional photos, portfolio showcases, and personal branding.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Ideal for: Corporate Professionals | Creative Artists | Tech Professionals | Executives | Personal Branding
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
            <div style={{ fontSize: '14px', color: '#666' }}>Image-Focused Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Photo • Portfolio • Branding</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Multiple Visual Formats</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Visual Impact</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Professional Presentation</div>
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
              {/* Preview Image Indicator */}
              <div style={{
                width: '100%',
                height: '120px',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ fontSize: '24px', color: '#0070f3' }}>📷</span>
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
                    {template.imagePlacement.split(' ').slice(0, 3).join(' ')}...
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
            Tips for Using Images on Your Resume
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Use Professional Photography</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Invest in a professional headshot with neutral background. Ensure good lighting, professional attire, and a friendly, approachable expression.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Match Image to Industry Standards</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Corporate roles prefer traditional headshots. Creative industries welcome portfolio images. Tech roles may use professional avatars or GitHub QR codes.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Optimize Image Quality</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use high-resolution images (300 DPI minimum). Keep file size under 2MB for digital submissions. Ensure images are clear and properly cropped.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Consider ATS Compatibility</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Some ATS systems may not process images well. Consider having both image and text-only versions of your resume for different submission methods.</p>
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
            Create Your Visual Resume Today
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Choose from our collection of professional templates with image sections and build your visual resume in minutes. Perfect for making a strong first impression.
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
            <Link href="/blog/professional-headshot-tips" style={{ color: '#0070f3' }}>Professional Headshot Tips →</Link>
            <Link href="/blog/visual-resume-guide" style={{ color: '#0070f3' }}>Guide to Visual Resumes →</Link>
            <Link href="/templates/by-section/experience" style={{ color: '#0070f3' }}>Templates with Experience Section →</Link>
            <Link href="/blog/personal-branding-resume" style={{ color: '#0070f3' }}>Personal Branding on Your Resume →</Link>
          </div>
        </div>
      </div>
    </>
  );
}