// components/templates/TemplateSelector.js
import React, { useState } from 'react';
import Link from 'next/link';

// Update image imports to use public folder paths
const template1Preview = '/assets/template-previews/template-1.png';
const template2Preview = '/assets/template-previews/template-2.png';
const template3Preview = '/assets/template-previews/template-3.png';
const template4Preview = '/assets/template-previews/template-4.png';
const template5Preview = '/assets/template-previews/template-5.png';
const template6Preview = '/assets/template-previews/template-6.png';
const template7Preview = '/assets/template-previews/template-7.png';
const template8Preview = '/assets/template-previews/template-8.png';
const template9Preview = '/assets/template-previews/template-9.png';
const template10Preview = '/assets/template-previews/template-10.png';
const template11Preview = '/assets/template-previews/template-11.png';
const template12Preview = '/assets/template-previews/template-12.png';
const template13Preview = '/assets/template-previews/template-13.png';
const template14Preview = '/assets/template-previews/template-14.png';
const template15Preview = '/assets/template-previews/template-15.png';
const template16Preview = '/assets/template-previews/template-16.png';
const template17Preview = '/assets/template-previews/template-17.png';
const template18Preview = '/assets/template-previews/template-18.png';
const template19Preview = '/assets/template-previews/template-19.png';
const template20Preview = '/assets/template-previews/template-20.png';

// Create a preview image mapping
const getTemplatePreview = (id) => {
  const previews = {
    1: template1Preview,
    2: template2Preview,
    3: template3Preview,
    4: template4Preview,
    5: template5Preview,
    6: template6Preview,
    7: template7Preview,
    8: template8Preview,
    9: template9Preview,
    10: template10Preview,
    11: template11Preview,
    12: template12Preview,
    13: template13Preview,
    14: template14Preview,
    15: template15Preview,
    16: template16Preview,
    17: template17Preview,
    18: template18Preview,
    19: template19Preview,
    20: template20Preview,
  };
  
  return previews[id] || template1Preview;
};

// Complete Template Catalog with 20 professionally named templates
const TEMPLATES = [
  // === TEMPLATE 1 - The Professional ===
  { 
    id: 1, 
    name: 'The Professional', 
    description: 'Classic two-column layout with gradient header and experience type filtering. Perfect for business, finance, and law professionals.',
    features: ['Experience filtering', 'Classic serif fonts', 'Gradient header', '2-column layout']
  },
  
  // === TEMPLATE 2 - The Innovator ===
  {
    id: 2,
    name: 'The Innovator',
    description: 'Modern two-column design with visual connectors and centered header. Ideal for tech, marketing, and creative roles.',
    features: ['Visual connectors', 'Centered header', 'Modern typography', 'Contact pills']
  },
  
  // === TEMPLATE 3 - The Executive ===
  {
    id: 3,
    name: 'The Executive',
    description: 'Sophisticated dark theme with sidebar focus on certifications. Designed for senior executives and directors.',
    features: ['Dark premium theme', 'Certifications focus', 'Density scaling', 'Accent colors']
  },
  
  // === TEMPLATE 4 - The Strategist ===
  {
    id: 4,
    name: 'The Strategist',
    description: 'Timeline-based layout with square markers showing career progression. Perfect for consultants and project managers.',
    features: ['Timeline markers', 'Career visualization', 'Clean sidebar', 'Structured content']
  },
  
  // === TEMPLATE 5 - The Minimalist ===
  {
    id: 5,
    name: 'The Minimalist',
    description: 'Ultra-clean isolated sections with perfect contrast. Optimized for ATS and modern tech companies.',
    features: ['Isolated sections', 'ATS-optimized', 'Minimalist design', 'Dark/light contrast']
  },
  
  // === TEMPLATE 6 - The Architect ===
  {
    id: 6,
    name: 'The Architect',
    description: 'Structured technical template with side-by-side education boxes and professional timeline. Built for engineers and architects.',
    features: ['Education grid', 'Professional timeline', 'Type badges', 'Connector lines']
  },
  
  // === TEMPLATE 7 - The Scholar ===
  {
    id: 7,
    name: 'The Scholar',
    description: 'Elegant geometric design with sidebar achievements and professional timeline. Perfect for academics and researchers.',
    features: ['Geometric accents', 'Timeline design', 'Sidebar achievements', 'Professional layout']
  },
  
  // === TEMPLATE 8 - The Traditionalist ===
  {
    id: 8,
    name: 'The Traditionalist',
    description: 'Clean black & white design with side-by-side education layout. Trusted by traditional industries and government roles.',
    features: ['Black & white', 'Side-by-side education', 'Contact sidebar', 'ATS-optimized']
  },
  
  // === TEMPLATE 9 - The Modernist ===
  {
    id: 9,
    name: 'The Modernist',
    description: 'Fresh contemporary design with equal spacing and modern typography. Balanced layout for all industries.',
    features: ['Equal spacing', 'Modern typography', 'Balanced layout', 'ATS-friendly']
  },
  
  // === TEMPLATE 10 - The Essential ===
  {
    id: 10,
    name: 'The Essential',
    description: 'Clean, focused design showing exactly one experience. Ideal for students, interns, and entry-level professionals.',
    features: ['Single experience focus', 'Clean layout', 'Skills grid', 'Project showcase']
  },
  
  // === TEMPLATE 11 - The Composer ===
  {
    id: 11,
    name: 'The Composer',
    description: 'Elegant serif-based design with clear hierarchy and professional spacing. Perfect for humanities, arts, and traditional roles.',
    features: ['Serif typography', 'Professional spacing', 'Clear hierarchy', 'Classic design']
  },
  
  // === TEMPLATE 12 - The Blueprint ===
  {
    id: 12,
    name: 'The Blueprint',
    description: 'Structured blueprint-style layout with color-coded sections. Designed for engineers, architects, and technical roles.',
    features: ['Blueprint style', 'Color-coded sections', 'Structured layout', 'Professional timeline']
  },
  
  // === TEMPLATE 13 - The Timeline ===
  {
    id: 13,
    name: 'The Timeline',
    description: 'Visual timeline-based design with clear progression markers. Perfect for project managers and career progression focus.',
    features: ['Visual timeline', 'Progression markers', 'Career path focus', 'Structured layout']
  },
  
  // === TEMPLATE 14 - The Monochrome ===
  {
    id: 14,
    name: 'The Monochrome',
    description: 'Bold black & white design with strong visual hierarchy. Ideal for legal, government, and formal roles.',
    features: ['Monochrome design', 'Strong hierarchy', 'Black headings', 'Professional layout']
  },
  
  // === TEMPLATE 15 - The Compact ===
  {
    id: 15,
    name: 'The Compact',
    description: 'Space-efficient design with tight spacing and streamlined sections. Perfect for experienced professionals with lots of content.',
    features: ['Space efficient', 'Streamlined sections', 'Tight spacing', 'Content-dense']
  },
  
  // === TEMPLATE 16 - The Minimal ===
  {
    id: 16,
    name: 'The Minimal',
    description: 'Ultra-minimalist design with avatar initials and clean layout. Focuses purely on content with no distractions.',
    features: ['Avatar initials', 'Minimalist design', 'Clean layout', 'Content focus']
  },
  
  // === TEMPLATE 17 - The Innovator 2.0 ===
  {
    id: 17,
    name: 'The Innovator 2.0',
    description: 'Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.',
    features: ['Card-based design', 'Internship focus', 'Project showcase', 'Tech tags']
  },
  
  // === TEMPLATE 18 - The Code ===
  {
    id: 18,
    name: 'The Code',
    description: 'Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.',
    features: ['Project links', 'Tech tags', 'Code-friendly icons', 'Developer focus']
  },
  
  // === TEMPLATE 19 - The Scholar 2.0 ===
  {
    id: 19,
    name: 'The Scholar 2.0',
    description: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    features: ['White-box education', 'Academic focus', 'Clean layout', 'Research showcase']
  },
  
  // === TEMPLATE 20 - The Engineer ===
  {
    id: 20,
    name: 'The Engineer',
    description: 'Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads.',
    features: ['Project-first layout', 'Role-based display', 'Tech skills focus', 'Clean structure']
  }
];

const TemplateSelector = ({ onTemplateSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter templates based on search term
  const getFilteredTemplates = () => {
    let filtered = TEMPLATES;

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(template =>
        template.name.toLowerCase().includes(term) ||
        template.description.toLowerCase().includes(term) ||
        template.features.some(feature => feature.toLowerCase().includes(term))
      );
    }

    return filtered;
  };

  const filteredTemplates = getFilteredTemplates();

  // Handle template click with navigation
  const handleTemplateClick = (e, templateId) => {
    if (onTemplateSelect) {
      onTemplateSelect(templateId.toString());
    }
  };

  return (
    <div className="template-selector-container" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <div className="template-selector-header" style={{ 
        textAlign: 'center', 
        padding: '60px 20px 40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        marginBottom: '40px',
        position: 'relative'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
          marginBottom: '20px', 
          color: 'white',
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Choose Your Perfect Resume Template
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'rgba(255,255,255,0.95)', 
          maxWidth: '700px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Browse {TEMPLATES.length} professionally designed templates. All templates are ATS-friendly and ready to download as PDF.
        </p>
        
        {/* Decorative Wave */}
        <div style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
        }}></div>
      </div>
      
      {/* Search Bar Only */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '-20px auto 30px',
        position: 'relative',
        zIndex: 10,
        padding: '0 20px'
      }}>
        <div style={{ 
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: 0 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              background: '#f8f9fa',
              border: '2px solid #e1e5e9',
              borderRadius: '50px',
              padding: '8px 8px 8px 20px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#667eea';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(102,126,234,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e1e5e9';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '12px', color: '#667eea' }}></span>
              <input
                type="text"
                placeholder="Search templates by name, features, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  background: 'transparent',
                  padding: '12px 0'
                }}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  style={{
                    background: '#667eea',
                    border: 'none',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#764ba2';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: '0 10px 25px rgba(102,126,234,0.3)'
        }}>
          <span style={{ 
            background: 'white', 
            color: '#667eea',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {filteredTemplates.length}
          </span>
          <span>Templates Found</span>
        </div>
      </div>

      {/* No Results Message */}
      {filteredTemplates.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '20px'
          }}></div>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>No templates found</h3>
          <p style={{ marginBottom: '25px', color: '#666' }}>
            Try adjusting your search term
          </p>
          <button 
            onClick={() => setSearchTerm('')}
            style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Templates Grid */}
      {filteredTemplates.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 20px 60px'
        }}>
          {filteredTemplates.map(template => (
            <Link
              key={template.id}
              href={`/templates/${template.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
              onClick={(e) => handleTemplateClick(e, template.id)}
            >
              <div 
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 40px rgba(102,126,234,0.15)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                {/* Template Preview */}
                <div style={{ 
                  position: 'relative', 
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                  padding: '30px',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1/1.414',
                    background: 'white',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={getTemplatePreview(template.id)} 
                      alt={`${template.name} template preview`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const fallback = document.createElement('div');
                        fallback.style.cssText = `
                          width: 100%;
                          height: 100%;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          justify-content: center;
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          color: white;
                          padding: 20px;
                          text-align: center;
                          box-sizing: border-box;
                        `;
                        fallback.innerHTML = `
                          <div style="font-size: 3rem; margin-bottom: 15px;"></div>
                          <div style="font-weight: bold; font-size: 1.3rem; margin-bottom: 8px;">${template.name}</div>
                          <div style="font-size: 0.9rem; opacity: 0.9;">${template.description.substring(0, 50)}...</div>
                        `;
                        parent.appendChild(fallback);
                      }}
                    />
                    {/* Hover Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: 'white'
                    }}
                    className="template-overlay"
                    >
                      <div style={{
                        textAlign: 'center',
                        padding: '20px'
                      }}>
                        <div style={{
                          fontSize: '1.3rem',
                          fontWeight: 'bold',
                          marginBottom: '8px'
                        }}>View Template Details</div>
                        <div style={{
                          fontSize: '1rem',
                          opacity: 0.9
                        }}>Click to explore</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div style={{ padding: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: '1.5rem',
                      color: '#333',
                      fontWeight: 700
                    }}>
                      {template.name}
                    </h3>
                  </div>

                  <p style={{ 
                    margin: '0 0 15px 0',
                    color: '#666',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {template.description}
                  </p>

                  <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '15px'
                  }}>
                    {template.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        style={{
                          background: '#f0f7ff',
                          color: '#667eea',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div style={{ 
                    display: 'flex',
                    gap: '10px',
                    paddingTop: '15px',
                    borderTop: '1px solid #e9ecef'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      A4
                    </span>
                    <span style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      ATS-Friendly
                    </span>
                    <span style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      PDF Ready
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Add enhanced hover effect CSS */}
      <style jsx>{`
        .template-selector-container {
          font-family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        }
        
        .template-overlay {
          opacity: 0;
        }
        
        div[style*="transform: translateY(-10px)"] .template-overlay {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .template-selector-header {
            padding: 40px 20px !important;
          }
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default TemplateSelector;