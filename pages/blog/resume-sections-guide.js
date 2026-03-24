// pages/blog/resume-sections-guide.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';
import { getAllTemplateIds, getTemplateSections } from '../../lib/templateConfig';

// Template data for best-for descriptions
const templateData = {
  1: { name: 'The Professional', bestFor: 'Business, Finance, Law, Management', icon: '📊' },
  2: { name: 'The Innovator', bestFor: 'Tech, Marketing, Creative, Design', icon: '💡' },
  3: { name: 'The Executive', bestFor: 'Senior Executives, Directors, Leadership', icon: '👔' },
  4: { name: 'The Strategist', bestFor: 'Consultants, Project Managers, Analysts', icon: '📈' },
  5: { name: 'The Minimalist', bestFor: 'Tech, Startups, Modern Companies', icon: '⚪' },
  6: { name: 'The Architect', bestFor: 'Engineers, Architects, Technical Roles', icon: '🏗️' },
  7: { name: 'The Scholar', bestFor: 'Academics, Researchers, Educators', icon: '📚' },
  8: { name: 'The Traditionalist', bestFor: 'Government, Legal, Conservative Industries', icon: '🏛️' },
  9: { name: 'The Modernist', bestFor: 'Creative, Marketing, General Professional', icon: '✨' },
  10: { name: 'The Essential', bestFor: 'Students, Interns, Entry-Level', icon: '🎓' },
  11: { name: 'The Composer', bestFor: 'Humanities, Arts, Writing, Traditional Roles', icon: '🎵' },
  12: { name: 'The Blueprint', bestFor: 'Engineers, Architects, Technical Designers', icon: '📐' },
  13: { name: 'The Timeline', bestFor: 'Project Managers, Career Progression Focus', icon: '⏱️' },
  14: { name: 'The Monochrome', bestFor: 'Legal, Government, Formal Roles', icon: '⚫' },
  15: { name: 'The Compact', bestFor: 'Experienced Professionals, Dense Content', icon: '📦' },
  16: { name: 'The Minimal', bestFor: 'Creative, Design, Content-Focused Roles', icon: '🌙' },
  17: { name: 'The Innovator 2.0', bestFor: 'Students, Interns, Junior Developers', icon: '🚀' },
  18: { name: 'The Code', bestFor: 'Software Engineers, Developers, Programmers', icon: '👨‍💻' },
  19: { name: 'The Scholar 2.0', bestFor: 'Academics, Researchers, Educators', icon: '📖' },
  20: { name: 'The Engineer', bestFor: 'Software Engineers, Tech Leads, Developers', icon: '⚙️' },
};

export default function ResumeSectionsGuide() {
  const [authorImageError, setAuthorImageError] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState(false);
  const templateIds = getAllTemplateIds();

  // Schema markup for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Resume Sections: What to Include in Your Resume (2026)",
    "description": "Comprehensive guide to all resume sections: personal info, experience, education, skills, projects, and more. Learn what each template includes and get expert tips.",
    "image": "https://freeresumemakers.com/images/blog/resume-sections-guide.jpg",
    "author": {
      "@type": "Person",
      "name": "Lisa Thompson",
      "jobTitle": "Resume Formatting Expert",
      "url": "https://freeresumemakers.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemakers.com/logo.png"
      }
    },
    "datePublished": "2026-02-24",
    "dateModified": "2026-02-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemakers.com/blog/resume-sections-guide"
    },
    "keywords": "resume sections, resume parts, CV sections, what to include in resume, resume structure, resume format sections",
    "articleSection": "Resume Structure"
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
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://freeresumemakers.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Resume Sections Guide",
        "item": "https://freeresumemakers.com/blog/resume-sections-guide"
      }
    ]
  };

  // FAQ Schema for featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What sections should be included in a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential resume sections include Contact Information, Professional Summary, Work Experience, Education, and Skills. Optional sections can include Projects, Certifications, Languages, Publications, Awards, and Volunteer Experience."
        }
      },
      {
        "@type": "Question",
        "name": "What order should resume sections be in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most professionals: Contact Information, Professional Summary, Work Experience, Skills, Education. For students: Education may come before experience. For career changers: Skills may come before experience."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include a skills section on my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a skills section is recommended for most resumes. It helps both ATS systems and human recruiters quickly identify your qualifications. Organize skills by category (Technical, Soft, Languages) for better readability."
        }
      },
      {
        "@type": "Question",
        "name": "What optional sections can I add to my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optional sections include Projects, Certifications, Languages, Publications, Awards, Volunteer Experience, and Professional Memberships. Choose sections that are relevant to the job and add value to your application."
        }
      }
    ]
  };

  const handleDownloadClick = () => {
    setDownloadAlert(true);
    setTimeout(() => setDownloadAlert(false), 2000);
  };

  // Section descriptions
  const sections = [
    { 
      id: 'personal-info', 
      name: 'Personal Information', 
      description: 'Your name, contact details, and professional links.',
      requiredBy: 'All templates',
      tips: 'Use a professional email address. Include LinkedIn profile if relevant. Add city and state/country.'
    },
    { 
      id: 'summary', 
      name: 'Professional Summary', 
      description: 'Brief overview of your experience, skills, and career goals.',
      requiredBy: [1,2,3,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      tips: 'Keep it 2-3 sentences. Focus on what you can offer rather than what you want.'
    },
    { 
      id: 'experience', 
      name: 'Work Experience', 
      description: 'Your professional history, including job titles, companies, dates, and responsibilities.',
      requiredBy: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20],
      tips: 'List in reverse chronological order. Focus on achievements and results rather than just duties.'
    },
    { 
      id: 'education', 
      name: 'Education', 
      description: 'Degrees, institutions, graduation dates, and academic achievements.',
      requiredBy: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      tips: 'Include degree name, institution, and graduation year. Add GPA if above 3.5/4.0.'
    },
    { 
      id: 'skills', 
      name: 'Skills', 
      description: 'Technical and soft skills relevant to the position.',
      requiredBy: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      tips: 'Group similar skills together. Include proficiency levels for languages and tools where relevant.'
    },
    { 
      id: 'languages', 
      name: 'Languages', 
      description: 'Additional languages you speak and your proficiency level.',
      requiredBy: [1,2,3,4,7,8,11,12,14,15,16,17,18,19,20],
      tips: 'Specify level (Native, Fluent, Conversational, Basic) for each language.'
    },
    { 
      id: 'projects', 
      name: 'Projects', 
      description: 'Personal, academic, or professional projects that demonstrate your skills.',
      requiredBy: [5,6,7,9,10,11,12,15,16,17,18,19,20],
      tips: 'Include project title, technologies used, and your role. Add links to GitHub or live demos if available.'
    },
    { 
      id: 'certifications', 
      name: 'Certifications', 
      description: 'Professional certifications, licenses, and credentials.',
      requiredBy: [3,4,8,9,10,11,12,13,14,15,16,17,18,19,20],
      tips: 'Include the certifying organization and completion date. List relevant certifications for the job.'
    },
    { 
      id: 'awards', 
      name: 'Awards & Achievements', 
      description: 'Recognition, awards, scholarships, and professional achievements.',
      requiredBy: [4,7,8,13,14,15,16,17,18,19,20],
      tips: 'Include the context of the award (e.g., "Selected from 200+ candidates").'
    },
    { 
      id: 'publications', 
      name: 'Publications', 
      description: 'Articles, papers, books, or research you have authored.',
      requiredBy: [4,7,13,14,16,17,18,19,20],
      tips: 'Use a standard citation format. Include links if available.'
    },
    { 
      id: 'references', 
      name: 'References', 
      description: 'Professional references who can speak to your work.',
      requiredBy: [2,8,11,14,16,17,18,19,20],
      tips: 'List 2-3 references with name, title, company, and contact information. Always ask permission first.'
    },
    { 
      id: 'volunteer', 
      name: 'Volunteer Experience', 
      description: 'Non-profit work, community service, and volunteer roles.',
      requiredBy: [5,6,9,10,11,12,15,16,17,18,19,20],
      tips: 'Describe your role and impact similarly to work experience. Highlight transferable skills.'
    },
  ];

  return (
    <>
      <SEO 
        title="Complete Guide to Resume Sections: What to Include in Your Resume (2026)"
        description="Comprehensive guide to all resume sections: personal info, experience, education, skills, projects, and more. Learn what each section is for and get tips on what to include."
        keywords="resume sections, resume parts, CV sections, what to include in resume, resume structure, resume format sections, resume organization"
        canonical="https://freeresumemakers.com/blog/resume-sections-guide"
        image="https://freeresumemakers.com/images/blog/resume-sections-guide.jpg"
        type="article"
        publishedTime="2026-02-24"
        author="Lisa Thompson"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Resume Sections Guide</span>
        </div>

        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700,
            maxWidth: '900px'
          }}>
            Complete Guide to Resume Sections
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: '#666',
            fontSize: '14px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {!authorImageError ? (
                <img 
                  src="/images/authors/lisa-thompson.jpg" 
                  alt="Lisa Thompson" 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  onError={() => setAuthorImageError(true)}
                />
              ) : (
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#0070f3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}>
                  LT
                </div>
              )}
              <span><strong>Lisa Thompson</strong> | Resume Formatting Expert</span>
            </div>
            <span>February 24, 2026</span>
            <span>8 min read</span>
            <span>Resume Structure</span>
          </div>

          {/* Featured Snippet Optimization */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '32px',
            color: 'white',
            marginTop: '20px'
          }}>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: 500
            }}>
              Different resume sections serve different purposes. This guide explains common resume sections, 
              which ones may be relevant for your situation, and how to organize them effectively.
            </p>
          </div>
        </header>

        {/* Development Notice */}
        <div style={{
          background: '#fff3cd',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.95rem',
          border: '1px solid #ffc107',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          <p style={{margin: 0, color: '#856404'}}>
            Template sections are being updated. Section lists may vary as templates evolve.
          </p>
        </div>

        {/* Table of Contents */}
        <nav style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>
            In This Guide:
          </h2>
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            {[
              { href: '#sections', name: 'All Sections Explained' },
              { href: '#template-comparison', name: 'Template Comparison' },
              { href: '#required-by-template', name: 'Sections by Template' },
              { href: '#section-order', name: 'Section Order Guide' },
              { href: '#quick-reference', name: 'Quick Reference' }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href}
                style={{
                  padding: '8px 16px',
                  background: 'white',
                  borderRadius: '30px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* All Sections Explained */}
        <section id="sections" style={{ scrollMarginTop: '100px' }}>
          <h2 style={{ 
            fontSize: '32px', 
            margin: '0 0 20px 0',
            borderBottom: '3px solid #0070f3',
            paddingBottom: '10px'
          }}>
            All Resume Sections Explained
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {sections.map((section, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0070f3' }}>
                  {index + 1}. {section.name}
                </h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>{section.description}</p>
                
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>Included in: </span>
                  {typeof section.requiredBy === 'string' ? (
                    <span style={{ color: '#0070f3' }}>{section.requiredBy}</span>
                  ) : (
                    <span style={{ color: '#0070f3' }}>{section.requiredBy.length} templates</span>
                  )}
                </div>
                
                <div>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>Tips: </span>
                  <span style={{ color: '#666' }}>{section.tips}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Template Comparison Table */}
        <section id="template-comparison" style={{ scrollMarginTop: '100px' }}>
          <h2 style={{ 
            fontSize: '32px', 
            margin: '50px 0 20px 0',
            borderBottom: '3px solid #0070f3',
            paddingBottom: '10px'
          }}>
            Template Comparison
          </h2>
          
          <div style={{
            overflowX: 'auto',
            marginBottom: '40px',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px',
              background: 'white'
            }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0070f3' }}>Template</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0070f3' }}>Name</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0070f3' }}>Sections</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0070f3' }}>Suitable For</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0070f3' }}>Preview</th>
                 </tr>
              </thead>
              <tbody>
                {templateIds.map((id, index) => {
                  const template = templateData[id] || { name: `Template ${id}`, bestFor: 'General Professional', icon: '📄' };
                  const sectionsList = getTemplateSections(id);
                  
                  return (
                    <tr key={id} style={{ 
                      background: index % 2 === 0 ? '#f9f9f9' : 'white',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>
                        <Link href={`/templates/${id}`} style={{ color: '#0070f3', textDecoration: 'none' }}>
                          Template {id}
                        </Link>
                      </td>
                      <td style={{ padding: '12px', border: '1px solid #ddd' }}>{template.name}</td>
                      <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                        <span style={{
                          background: '#e6f7ff',
                          color: '#0070f3',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontWeight: 'bold'
                        }}>
                          {sectionsList.length}
                        </span>
                      </td>
                      <td style={{ padding: '12px', border: '1px solid #ddd', fontSize: '13px' }}>{template.bestFor}</td>
                      <td style={{ padding: '12px', border: '1px solid #ddd', fontSize: '24px', textAlign: 'center' }}>
                        <Link href={`/templates/${id}`} style={{ textDecoration: 'none' }}>
                          {template.icon}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sections by Template */}
        <section id="required-by-template" style={{ scrollMarginTop: '100px' }}>
          <h2 style={{ 
            fontSize: '32px', 
            margin: '50px 0 20px 0',
            borderBottom: '3px solid #0070f3',
            paddingBottom: '10px'
          }}>
            Sections by Template
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {templateIds.map(id => {
              const template = templateData[id] || { name: `Template ${id}`, icon: '📄' };
              const sectionsList = getTemplateSections(id);
              
              return (
                <div key={id} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                }}
                >
                  <Link href={`/templates/${id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>
                      {template.icon} Template {id}: {template.name}
                    </h3>
                  </Link>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>{sectionsList.length} sections included:</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {sectionsList.map((section, i) => (
                      <span key={i} style={{
                        background: '#f0f7ff',
                        color: '#0070f3',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        border: '1px solid #bbdefb'
                      }}>
                        {section}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Order Guide */}
        <section id="section-order" style={{ scrollMarginTop: '100px' }}>
          <h2 style={{ 
            fontSize: '32px', 
            margin: '50px 0 20px 0',
            borderBottom: '3px solid #0070f3',
            paddingBottom: '10px'
          }}>
            Section Order Guide
          </h2>
          
          <div style={{
            background: '#f8f9fa',
            borderRadius: '16px',
            padding: '30px',
            marginBottom: '40px'
          }}>
            <p style={{ marginBottom: '20px' }}>
              The order of sections can be adjusted based on your experience level and what you want to emphasize:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>For Students/Freshers</h3>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Contact Information</li>
                  <li>Professional Summary</li>
                  <li>Education</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Experience (if any)</li>
                  <li>Certifications</li>
                  <li>Languages</li>
                </ol>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>For Experienced</h3>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Contact Information</li>
                  <li>Professional Summary</li>
                  <li>Work Experience</li>
                  <li>Skills</li>
                  <li>Education</li>
                  <li>Certifications</li>
                  <li>Projects</li>
                  <li>Languages</li>
                </ol>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>For Career Changers</h3>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Contact Information</li>
                  <li>Professional Summary</li>
                  <li>Skills</li>
                  <li>Certifications</li>
                  <li>Projects</li>
                  <li>Work Experience</li>
                  <li>Education</li>
                  <li>Languages</li>
                </ol>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>For Academic Roles</h3>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Contact Information</li>
                  <li>Education</li>
                  <li>Publications</li>
                  <li>Research Experience</li>
                  <li>Teaching Experience</li>
                  <li>Awards & Honors</li>
                  <li>Skills</li>
                  <li>References</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section id="quick-reference" style={{ scrollMarginTop: '100px' }}>
          <div style={{
            background: '#f0f7ff',
            borderRadius: '16px',
            padding: '30px',
            marginBottom: '40px',
            border: '1px solid #bbdefb'
          }}>
            <h2 style={{ fontSize: '26px', marginBottom: '20px', color: '#0070f3' }}>
              Quick Reference
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Essential Sections</h3>
                <ul style={{ margin: 0 }}>
                  <li>✓ Contact Information</li>
                  <li>✓ Education</li>
                  <li>✓ Skills</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Common Sections</h3>
                <ul style={{ margin: 0 }}>
                  <li>✓ Work Experience</li>
                  <li>✓ Professional Summary</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Optional Sections</h3>
                <ul style={{ margin: 0 }}>
                  <li>✓ Projects</li>
                  <li>✓ Certifications</li>
                  <li>✓ Languages</li>
                  <li>✓ Awards</li>
                  <li>✓ Volunteer Experience</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Industry-Specific</h3>
                <ul style={{ margin: 0 }}>
                  <li>✓ Publications (academic)</li>
                  <li>✓ References (executive)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ margin: '50px 0' }}>
          <h2 style={{ 
            fontSize: '28px', 
            margin: '0 0 20px 0',
            color: '#333'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '15px'
          }}>
            {[
              {
                q: 'What sections should be included in a resume?',
                a: 'Essential resume sections include Contact Information, Education, and Skills. Common sections include Work Experience and Professional Summary. Optional sections can include Projects, Certifications, Languages, and Volunteer Experience depending on your background.'
              },
              {
                q: 'What order should resume sections be in?',
                a: 'For most professionals: Contact Information, Professional Summary, Work Experience, Skills, Education. For students: Education may come before experience. For career changers: Skills may come before experience.'
              },
              {
                q: 'Should I include a skills section on my resume?',
                a: 'Yes, a skills section is recommended for most resumes. It helps both ATS systems and human recruiters quickly identify your qualifications. Organize skills by category for better readability.'
              },
              {
                q: 'What optional sections can I add to my resume?',
                a: 'Optional sections include Projects, Certifications, Languages, Publications, Awards, Volunteer Experience, and Professional Memberships. Choose sections that are relevant to the job.'
              },
              {
                q: 'How many sections should my resume have?',
                a: 'Most resumes have 5-8 sections. Include essential sections first, then add optional sections that strengthen your application without making the resume too long.'
              },
              {
                q: 'Should I include references on my resume?',
                a: 'It\'s generally better to provide references separately when requested. Use the space for more relevant information about your qualifications.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                borderRadius: '10px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>{faq.q}</h3>
                <p style={{ margin: 0, color: '#666' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '40px',
          margin: '50px 0',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📥</div>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free Resume Sections Checklist</h2>
          <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
            Download our printable checklist to ensure your resume includes all relevant sections for your target role.
          </p>
          <button
            onClick={handleDownloadClick}
            style={{
              padding: '14px 32px',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Download Free Checklist
          </button>
          {downloadAlert && (
            <div style={{
              marginTop: '15px',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px'
            }}>
              PDF download coming soon!
            </div>
          )}
        </section>

        {/* CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          margin: '40px 0',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/editor"
            style={{
              padding: '16px 32px',
              background: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '18px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0060d6';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,112,243,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0070f3';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Build Your Resume
          </Link>
          
          <Link 
            href="/templates"
            style={{
              padding: '16px 32px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '18px',
              border: '2px solid #0070f3',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0f7ff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Browse Templates
          </Link>
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
          marginTop: '30px'
        }}>
          <p>Last updated: February 24, 2026 | © {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}