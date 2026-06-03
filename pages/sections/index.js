import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Head from 'next/head';

const sections = [
  {
    id: 'personal-info',
    name: 'Contact Information',
    description: 'Guidelines and best practices for listing your name, phone number, email, and social profiles.',
    icon: '👤'
  },
  {
    id: 'summary',
    name: 'Professional Summary',
    description: 'Learn how to write a compelling summary that grabs a recruiter\'s attention in 6 seconds.',
    icon: '📝'
  },
  {
    id: 'experience',
    name: 'Work Experience',
    description: 'The core of your resume. Showcase your achievements, job duties, and impact effectively.',
    icon: '💼'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'How to list degrees, GPA, academic honors, and coursework for students and professionals.',
    icon: '🎓'
  },
  {
    id: 'skills',
    name: 'Skills Section',
    description: 'How to list hard and soft skills, technical keywords, and match job descriptions to pass ATS.',
    icon: '💻'
  },
  {
    id: 'projects',
    name: 'Projects Showcase',
    description: 'Highlight personal, academic, or professional projects to demonstrate practical skills.',
    icon: '🚀'
  },
  {
    id: 'certifications',
    name: 'Certifications',
    description: 'Showcase your industry certifications, training courses, and verified professional credentials.',
    icon: '📜'
  },
  {
    id: 'awards',
    name: 'Awards & Honors',
    description: 'Display academic honors, industry awards, and key recognitions on your resume.',
    icon: '🏆'
  },
  {
    id: 'languages',
    name: 'Languages',
    description: 'Guidelines for listing foreign languages and proficiency levels for global roles.',
    icon: '🗣️'
  },
  {
    id: 'publications',
    name: 'Publications',
    description: 'For research and academic resumes. Format research papers, articles, and book chapters.',
    icon: '📚'
  },
  {
    id: 'references',
    name: 'References',
    description: 'When and how to prepare professional references, and formatting a separate reference list.',
    icon: '🤝'
  },
  {
    id: 'core-strengths',
    name: 'Core Strengths',
    description: 'Highlight your key professional competencies and career highlights to stand out.',
    icon: '⚡'
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    description: 'List technical tools, software packages, and development platforms you excel in.',
    icon: '🔧'
  }
];

export default function ResumeSectionsIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemaker.xyz/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Sections",
        "item": "https://freeresumemaker.xyz/sections"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Sections Guide Directory",
    "description": "Complete directory of guides for each section of a professional resume.",
    "numberOfItems": sections.length,
    "itemListElement": sections.map((section, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": section.name,
      "url": `https://freeresumemaker.xyz/sections/${section.id}`
    }))
  };

  return (
    <>
      <SEO 
        title="How to Write Resume Sections: Guides & Examples | Free Resume Builder"
        description="Learn how to write every section of your resume. Expert guides, layout options, and examples for contact information, summary, experience, education, skills, and more."
        keywords="resume sections, write resume sections, resume layout guide, resume experience section, resume summary, resume skills section, CV parts guide"
        canonical="https://freeresumemaker.xyz/sections"
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
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Resume Sections</span>
        </nav>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            How to Write Resume Sections
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explore our comprehensive, step-by-step guides for every single section of your resume. Optimize your formatting and choose key achievements to impress recruiters.
          </p>
        </div>

        {/* Guides Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {sections.map((section) => (
            <Link key={section.id} href={`/sections/${section.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div 
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 112, 243, 0.08)';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '16px',
                  width: '50px',
                  height: '50px',
                  background: '#f0f7ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0070f3'
                }}>
                  {section.icon}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 10px 0', color: '#1a1a1a' }}>
                  {section.name}
                </h3>
                
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5', margin: 0, flex: 1 }}>
                  {section.description}
                </p>
                
                <div style={{ marginTop: '20px', color: '#0070f3', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}>
                  Read Guide & Examples →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 15px 30px rgba(0, 112, 243, 0.2)'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 700 }}>Ready to Build Your Resume?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '24px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Choose a professional ATS-friendly template and build your resume in minutes. No sign-up required.
          </p>
          <Link 
            href="/editor" 
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Create Your Resume Now
          </Link>
        </div>
      </div>
    </>
  );
}
