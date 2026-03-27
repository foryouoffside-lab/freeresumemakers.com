// pages/templates/[templateId]/index.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../../../components/SEO';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { getTemplateSections, templateExists, getSectionDisplayName } from '../../../lib/templateConfig';

// Complete template data matching your TEMPLATES array from TemplateSelector
const templateData = {
  1: {
    name: 'The Professional',
    description: 'Classic two-column layout with gradient header and experience type filtering. Perfect for business, finance, and law professionals.',
    features: ['Experience filtering', 'Classic serif fonts', 'Gradient header', '2-column layout'],
    image: '/assets/template-previews/template-1.png',
    longDescription: 'The Professional template features a clean two-column design with a sophisticated gradient header. It includes experience type filtering (job, internship, project) and classic serif fonts that convey professionalism and trustworthiness. Ideal for corporate roles in business, finance, law, and management.',
    bestFor: 'Business, Finance, Law, Management',
    atsScore: 95
  },
  2: {
    name: 'The Innovator',
    description: 'Modern two-column design with visual connectors and centered header. Ideal for tech, marketing, and creative roles.',
    features: ['Visual connectors', 'Centered header', 'Modern typography', 'Contact pills'],
    image: '/assets/template-previews/template-2.png',
    longDescription: 'The Innovator template features unique visual connectors between experiences, a centered name header, and modern typography. The design stands out while maintaining readability, making it perfect for tech professionals, designers, marketers, and creative roles where visual appeal matters.',
    bestFor: 'Technology, Marketing, Design, Creative Roles',
    atsScore: 88
  },
  3: {
    name: 'The Executive',
    description: 'Sophisticated dark theme with sidebar focus on certifications. Designed for senior executives and directors.',
    features: ['Dark premium theme', 'Certifications focus', 'Density scaling', 'Accent colors'],
    image: '/assets/template-previews/template-3.png',
    longDescription: 'The Executive template features a sophisticated dark color scheme with accent colors that convey power and authority. The sidebar focuses on certifications and core strengths, ideal for showcasing leadership qualifications. Perfect for senior executives, directors, and experienced professionals with 10+ years of experience.',
    bestFor: 'Executives, Directors, Senior Management',
    atsScore: 92
  },
  4: {
    name: 'The Strategist',
    description: 'Timeline-based layout with square markers showing career progression. Perfect for consultants and project managers.',
    features: ['Timeline markers', 'Career visualization', 'Clean sidebar', 'Structured content'],
    image: '/assets/template-previews/template-4.png',
    longDescription: 'The Strategist template uses square timeline markers and visual connectors to create a strategic narrative of career growth. The clean sidebar and main content balance shows structured thinking, perfect for consultants, project managers, strategists, and roles requiring clear career progression visualization.',
    bestFor: 'Consultants, Project Managers, Strategists',
    atsScore: 90
  },
  5: {
    name: 'The Minimalist',
    description: 'Ultra-clean isolated sections with perfect contrast. Optimized for ATS and modern tech companies.',
    features: ['Isolated sections', 'ATS-optimized', 'Minimalist design', 'Dark/light contrast'],
    image: '/assets/template-previews/template-5.png',
    longDescription: 'The Minimalist template features ultra-clean dark/light contrast, isolated sections, and minimalist typography. It focuses purely on content with no decorative elements, making it perfect for software engineers, UX/UI designers, recent graduates, and professionals in modern, forward-thinking companies.',
    bestFor: 'Software Engineers, UX/UI Designers, Recent Graduates',
    atsScore: 98
  },
  6: {
    name: 'The Architect',
    description: 'Structured technical template with side-by-side education boxes and professional timeline. Built for engineers and architects.',
    features: ['Education grid', 'Professional timeline', 'Type badges', 'Connector lines'],
    image: '/assets/template-previews/template-6.png',
    longDescription: 'The Architect template features a structured technical layout with side-by-side education boxes and a professional timeline. It includes type badges and connector lines for clear career progression. Perfect for engineers, architects, and technical professionals.',
    bestFor: 'Engineers, Architects, Technical Professionals',
    atsScore: 91
  },
  7: {
    name: 'The Scholar',
    description: 'Elegant geometric design with sidebar achievements and professional timeline. Perfect for academics and researchers.',
    features: ['Geometric accents', 'Timeline design', 'Sidebar achievements', 'Professional layout'],
    image: '/assets/template-previews/template-7.png',
    longDescription: 'The Scholar template features elegant geometric accents and a sidebar achievements section. The professional timeline design showcases academic and research progression. Ideal for academics, researchers, educators, and PhD candidates.',
    bestFor: 'Academics, Researchers, Educators, PhD Candidates',
    atsScore: 89
  },
  8: {
    name: 'The Traditionalist',
    description: 'Clean black & white design with side-by-side education layout. Trusted by traditional industries and government roles.',
    features: ['Black & white', 'Side-by-side education', 'Contact sidebar', 'ATS-optimized'],
    image: '/assets/template-previews/template-8.png',
    longDescription: 'The Traditionalist template features a clean black & white design with side-by-side education layout. Trusted by legal, government, and traditional industries where conservative design is preferred. Fully ATS-optimized.',
    bestFor: 'Legal, Government, Traditional Industries',
    atsScore: 96
  },
  9: {
    name: 'The Modernist',
    description: 'Fresh contemporary design with equal spacing and modern typography. Balanced layout for all industries.',
    features: ['Equal spacing', 'Modern typography', 'Balanced layout', 'ATS-friendly'],
    image: '/assets/template-previews/template-9.png',
    longDescription: 'The Modernist template features equal spacing between all sections and modern typography. The balanced layout works well for all industries, making it a versatile choice for any professional.',
    bestFor: 'All Industries, Versatile Professionals',
    atsScore: 93
  },
  10: {
    name: 'The Essential',
    description: 'Clean, focused design showing exactly one experience. Ideal for students, interns, and entry-level professionals.',
    features: ['Single experience focus', 'Clean layout', 'Skills grid', 'Project showcase'],
    image: '/assets/template-previews/template-10.png',
    longDescription: 'The Essential template focuses on a single experience entry, making it perfect for students, interns, and entry-level professionals. The clean layout highlights skills and projects without overwhelming content.',
    bestFor: 'Students, Interns, Entry-Level Professionals',
    atsScore: 94
  },
  11: {
    name: 'The Composer',
    description: 'Elegant serif-based design with clear hierarchy and professional spacing. Perfect for humanities, arts, and traditional roles.',
    features: ['Serif typography', 'Professional spacing', 'Clear hierarchy', 'Classic design'],
    image: '/assets/template-previews/template-11.png',
    longDescription: 'The Composer template features elegant serif typography with clear hierarchy and professional spacing. Perfect for humanities, arts, and traditional roles where classic design is valued.',
    bestFor: 'Humanities, Arts, Traditional Roles',
    atsScore: 87
  },
  12: {
    name: 'The Blueprint',
    description: 'Structured blueprint-style layout with color-coded sections. Designed for engineers, architects, and technical roles.',
    features: ['Blueprint style', 'Color-coded sections', 'Structured layout', 'Professional timeline'],
    image: '/assets/template-previews/template-12.png',
    longDescription: 'The Blueprint template features a structured blueprint-style layout with color-coded sections. Designed specifically for engineers, architects, and technical roles where precision matters.',
    bestFor: 'Engineers, Architects, Technical Roles',
    atsScore: 90
  },
  13: {
    name: 'The Timeline',
    description: 'Visual timeline-based design with clear progression markers. Perfect for project managers and career progression focus.',
    features: ['Visual timeline', 'Progression markers', 'Career path focus', 'Structured layout'],
    image: '/assets/template-previews/template-13.png',
    longDescription: 'The Timeline template features visual timeline markers that clearly show career progression. Perfect for project managers, operations professionals, and anyone wanting to highlight their career trajectory.',
    bestFor: 'Project Managers, Operations, Career-Focused',
    atsScore: 89
  },
  14: {
    name: 'The Monochrome',
    description: 'Bold black & white design with strong visual hierarchy. Ideal for legal, government, and formal roles.',
    features: ['Monochrome design', 'Strong hierarchy', 'Black headings', 'Professional layout'],
    image: '/assets/template-previews/template-14.png',
    longDescription: 'The Monochrome template features bold black & white design with strong visual hierarchy. Black headings and professional spacing make it ideal for legal, government, and formal roles.',
    bestFor: 'Legal, Government, Formal Roles',
    atsScore: 95
  },
  15: {
    name: 'The Compact',
    description: 'Space-efficient design with tight spacing and streamlined sections. Perfect for experienced professionals with lots of content.',
    features: ['Space efficient', 'Streamlined sections', 'Tight spacing', 'Content-dense'],
    image: '/assets/template-previews/template-15.png',
    longDescription: 'The Compact template features space-efficient design with tight spacing and streamlined sections. Perfect for experienced professionals with extensive content who need to fit everything on one page.',
    bestFor: 'Experienced Professionals, Senior Roles',
    atsScore: 91
  },
  16: {
    name: 'The Minimal',
    description: 'Ultra-minimalist design with avatar initials and clean layout. Focuses purely on content with no distractions.',
    features: ['Avatar initials', 'Minimalist design', 'Clean layout', 'Content focus'],
    image: '/assets/template-previews/template-16.png',
    longDescription: 'The Minimal template features ultra-minimalist design with avatar initials instead of a photo. Clean layout focuses purely on content with no decorative distractions.',
    bestFor: 'Minimalists, Content-Focused Professionals',
    atsScore: 97
  },
  17: {
    name: 'The Innovator 2.0',
    description: 'Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.',
    features: ['Card-based design', 'Internship focus', 'Project showcase', 'Tech tags'],
    image: '/assets/template-previews/template-17.png',
    longDescription: 'The Innovator 2.0 features modern card-based design with internship and project focus. Tech tags and project showcases make it perfect for students, interns, and junior developers building their portfolios.',
    bestFor: 'Students, Interns, Junior Developers',
    atsScore: 88
  },
  18: {
    name: 'The Code',
    description: 'Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.',
    features: ['Project links', 'Tech tags', 'Code-friendly icons', 'Developer focus'],
    image: '/assets/template-previews/template-18.png',
    longDescription: 'The Code template is developer-focused with project links, tech tags, and code-friendly icons. Full URLs for projects and clean tech organization make it perfect for software engineers.',
    bestFor: 'Software Engineers, Developers, Programmers',
    atsScore: 92
  },
  19: {
    name: 'The Scholar 2.0',
    description: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    features: ['White-box education', 'Academic focus', 'Clean layout', 'Research showcase'],
    image: '/assets/template-previews/template-19.png',
    longDescription: 'The Scholar 2.0 features white-box education styling like certifications. Education-focused design with clean layout makes it perfect for academics, researchers, and educators.',
    bestFor: 'Academics, Researchers, Educators',
    atsScore: 90
  },
  20: {
    name: 'The Engineer',
    description: 'Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads.',
    features: ['Project-first layout', 'Role-based display', 'Tech skills focus', 'Clean structure'],
    image: '/assets/template-previews/template-20.png',
    longDescription: 'The Engineer template features software engineering optimized design with project-first layout. Role-based display and tech skills focus make it perfect for developers, programmers, and tech leads.',
    bestFor: 'Developers, Programmers, Tech Leads',
    atsScore: 93
  }
};

const getTemplateInfo = (id) => {
  return templateData[id] || {
    name: `Template ${id}`,
    description: `Professional resume template ${id} - part of our collection of 20 ATS-friendly templates.`,
    features: ['ATS-friendly', 'Professional design', 'PDF download'],
    image: `/assets/template-previews/template-${id}.png`,
    longDescription: `Template ${id} is one of 20 professionally designed, ATS-friendly resume templates. Each template is optimized for Applicant Tracking Systems and ready for instant PDF download. Perfect for creating a standout resume that gets noticed.`,
    bestFor: 'All Professions',
    atsScore: 85
  };
};

export default function TemplateDetailPage() {
  const router = useRouter();
  const { templateId } = router.query;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (templateId) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      
      // Scroll to top on page load
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      return () => clearTimeout(timer);
    }
  }, [templateId]);
  
  // Show loader while loading
  if (!templateId || isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        <LoadingSpinner size="lg" color="#0070f3" text="Loading template details..." />
      </div>
    );
  }
  
  const id = parseInt(templateId);
  
  if (!templateExists(id)) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#e9ecef',
          borderRadius: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#999'
        }}>
          ?
        </div>
        <h1 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '20px' }}>Template Not Found</h1>
        <p style={{ color: '#666', marginBottom: '30px', maxWidth: '500px', lineHeight: '1.6' }}>
          We could not find template {id}. Available templates: 1 through 20
        </p>
        <Link 
          href="/templates"
          style={{
            padding: '12px 32px',
            background: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
        >
          Browse All 20 Templates
        </Link>
      </div>
    );
  }
  
  const sections = getTemplateSections(id);
  const templateInfo = getTemplateInfo(id);
  const imageSrc = templateInfo.image;

  const handleUseTemplate = () => {
    router.push(`/editor/${id}`);
  };
  
  const handleSectionClick = (sectionName) => {
    router.push(`/editor/${id}/${sectionName}`);
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": templateInfo.name,
        "item": `https://freeresumemaker.xyz/templates/${id}`
      }
    ]
  };

  // Product schema for rich results
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": templateInfo.name,
    "description": templateInfo.description,
    "image": imageSrc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO 
        title={`${templateInfo.name} Resume Template - Free ATS-Friendly Download | Professional CV`}
        description={templateInfo.description}
        keywords={`${templateInfo.name.toLowerCase()} resume template, free resume template ${id}, ${templateInfo.bestFor.toLowerCase()} resume, ATS-friendly resume template, professional CV template`}
        canonical={`https://freeresumemaker.xyz/templates/${id}`}
        image={imageSrc}
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <Link 
            href="/templates"
            style={{
              color: '#666',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            ← Back to All Templates
          </Link>
          <span style={{ color: '#ddd' }}>|</span>
          <span style={{ color: '#999', fontSize: '0.85rem' }}>Template {id} of 20</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Left Column - Template Image */}
          <div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid #e9ecef',
              position: 'sticky',
              top: '100px'
            }}>
              {!imageLoaded && !imageError && (
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1.414',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f8fafc',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid #e9ecef',
                    borderTop: '3px solid #0070f3',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                </div>
              )}

              {imageError ? (
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1.414',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {templateInfo.name.charAt(0)}
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{templateInfo.name}</h3>
                  <p style={{ opacity: 0.9, fontSize: '0.85rem', margin: 0 }}>Template Preview</p>
                </div>
              ) : (
                <img 
                  src={imageSrc}
                  alt={`${templateInfo.name} resume template preview - ATS-friendly professional design for ${templateInfo.bestFor}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    display: imageLoaded ? 'block' : 'none'
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}

              {/* ATS Score Badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '15px'
              }}>
                <span style={{
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  ATS Score: {templateInfo.atsScore}%
                </span>
              </div>

              {/* Template Count Badge */}
              <div style={{
                textAlign: 'center',
                padding: '12px',
                background: '#e3f2fd',
                borderRadius: '12px',
                color: '#0070f3',
                fontSize: '0.85rem',
                fontWeight: 500
              }}>
                Part of our collection of 20 free ATS-friendly templates
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '20px'
              }}>
                <button
                  onClick={handleUseTemplate}
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    background: '#0070f3',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: 600,
                    textAlign: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '15px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0060d6';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,112,243,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0070f3';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Use This Template
                </button>
                
                <button
                  onClick={() => window.open(imageSrc, '_blank')}
                  style={{
                    padding: '14px 20px',
                    background: 'white',
                    color: '#333',
                    border: '1px solid #e9ecef',
                    borderRadius: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '15px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = '#0070f3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}
                >
                  View Full Size
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Template Details */}
          <div>
            <h1 style={{
              fontSize: '2.2rem',
              margin: '0 0 8px 0',
              color: '#1a1a1a',
              lineHeight: '1.2',
              fontWeight: 700
            }}>
              {templateInfo.name}
            </h1>
            
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '16px'
            }}>
              Template #{id} • Best for: {templateInfo.bestFor}
            </p>

            <p style={{
              fontSize: '1rem',
              color: '#444',
              lineHeight: '1.6',
              marginBottom: '25px'
            }}>
              {templateInfo.description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '1.1rem',
                marginBottom: '12px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                Key Features
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {templateInfo.features.map((feature, index) => (
                  <span key={index} style={{
                    padding: '6px 14px',
                    background: '#f8fafc',
                    color: '#1a1a1a',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    border: '1px solid #e9ecef'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Long Description */}
            <div style={{
              background: '#f8fafc',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e9ecef',
              marginBottom: '30px'
            }}>
              <h3 style={{
                fontSize: '1rem',
                marginBottom: '12px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                About this template
              </h3>
              <p style={{ color: '#666', lineHeight: '1.7', margin: 0, fontSize: '0.9rem' }}>
                {templateInfo.longDescription}
              </p>
            </div>

            {/* Available Sections - Clickable Links */}
            <div>
              <h3 style={{
                fontSize: '1.1rem',
                marginBottom: '12px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                Available Sections
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => handleSectionClick(section)}
                    style={{
                      padding: '12px 16px',
                      background: '#f8fafc',
                      border: '1px solid #e9ecef',
                      borderRadius: '10px',
                      color: '#1a1a1a',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#e9ecef';
                      e.currentTarget.style.borderColor = '#0070f3';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e9ecef';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{
                      width: '24px',
                      height: '24px',
                      background: '#e3f2fd',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#0070f3'
                    }}>
                      {section.charAt(0).toUpperCase()}
                    </span>
                    {getSectionDisplayName(section)}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '12px', textAlign: 'center' }}>
                Click any section to start editing your resume
              </p>
            </div>
          </div>
        </div>

        {/* Related Templates */}
        <div style={{
          marginTop: '60px',
          padding: '40px 0',
          borderTop: '1px solid #e9ecef'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '24px',
            color: '#1a1a1a',
            fontWeight: 600
          }}>
            Similar Templates You Might Like
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {[1, 2, 3, 4].map((num) => {
              const relatedId = ((id + num - 1) % 20) + 1;
              if (relatedId === id) return null;
              const relatedTemplate = templateData[relatedId];
              return (
                <Link
                  key={num}
                  href={`/templates/${relatedId}`}
                  style={{
                    padding: '20px',
                    background: '#f8fafc',
                    borderRadius: '16px',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.2s ease',
                    display: 'block',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = '#0070f3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#e3f2fd',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#0070f3'
                  }}>
                    {relatedTemplate?.name.charAt(0) || 'T'}
                  </div>
                  <h4 style={{
                    margin: '0 0 4px 0',
                    color: '#1a1a1a',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}>
                    {relatedTemplate?.name || `Template ${relatedId}`}
                  </h4>
                  <p style={{
                    margin: 0,
                    color: '#666',
                    fontSize: '0.75rem'
                  }}>
                    ATS Score: {relatedTemplate?.atsScore || 85}%
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: '#f8fafc',
          borderRadius: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 600,
            color: '#1a1a1a'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Is this template really free?', a: 'Yes, all 20 templates are 100% free. No credit card required, no sign-up needed.' },
              { q: 'Is this template ATS-friendly?', a: `Yes, ${templateInfo.name} is designed to be ATS-friendly with clean formatting and standard section headings.` },
              { q: 'Can I edit this template?', a: 'Yes. Click "Use This Template" to open our free resume builder and customize every section.' },
              { q: 'How do I download my resume?', a: 'After editing, you can download your resume as a PDF instantly with one click.' }
            ].map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{
                  fontSize: '0.95rem',
                  marginBottom: '8px',
                  color: '#1a1a1a',
                  fontWeight: 600
                }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#666', margin: 0, lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.8rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Maker. Templates 1 through 20 | 100% Free | ATS-Friendly</p>
          <div style={{ marginTop: '12px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/templates" style={{ color: '#999', textDecoration: 'none' }}>All Templates</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#999', textDecoration: 'none' }}>ATS Guide</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/how-to-make-resume" style={{ color: '#999', textDecoration: 'none' }}>Resume Guide</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}