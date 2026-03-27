// pages/blog/cv-vs-resume-difference.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function CVvsResumeDifference() {
  const [authorImageError, setAuthorImageError] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState(false);

  // Schema markup for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CV vs Resume: Key Differences, Length, Format & When to Use Each (2026 Guide)",
    "description": "Complete guide to CV vs Resume differences. Learn about length (CV: 2+ pages, Resume: 1-2 pages), content, format, and when to use each for jobs in US, Europe, and academia.",
    "image": "https://freeresumemaker.xyz/images/blog/cv-vs-resume-difference.jpg",
    "author": {
      "@type": "Person",
      "name": "Patricia Garcia",
      "jobTitle": "Career Advisor",
      "url": "https://freeresumemaker.xyz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Maker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png"
      }
    },
    "datePublished": "2026-02-12",
    "dateModified": "2026-02-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/blog/cv-vs-resume-difference"
    },
    "keywords": "CV vs resume, curriculum vitae difference, resume vs CV, CV format, resume format, job application documents, academic CV, industry resume",
    "articleSection": "Career Advice"
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
        "name": "Blog",
        "item": "https://freeresumemaker.xyz/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "CV vs Resume Difference",
        "item": "https://freeresumemaker.xyz/blog/cv-vs-resume-difference"
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
        "name": "What is the main difference between a CV and a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CV (Curriculum Vitae) is a comprehensive document detailing your entire academic and professional history, often 2+ pages. A resume is a concise summary of relevant experience, typically 1-2 pages, tailored for specific jobs."
        }
      },
      {
        "@type": "Question",
        "name": "When should I use a CV instead of a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a CV for academic positions (professor, researcher), medical fields, scientific research, and international applications, especially in Europe. Use a resume for corporate jobs in the US, Canada, and Australia."
        }
      },
      {
        "@type": "Question",
        "name": "How long should a CV be vs a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CV can be 2+ pages with no upper limit, including all academic achievements, publications, and research. A resume should be 1-2 pages maximum, focusing only on relevant experience for the specific job."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include a photo on my CV or resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the US and Canada, never include a photo on either document. In Europe and Asia, photos are often required on CVs. Always research the norms for your target country and industry."
        }
      }
    ]
  };

  const handleDownloadClick = () => {
    setDownloadAlert(true);
    setTimeout(() => setDownloadAlert(false), 2000);
  };

  return (
    <>
      <SEO 
        title="CV vs Resume: Key Differences, Length, Format & When to Use Each (2026 Guide)"
        description="Complete guide to CV vs Resume differences. Learn about length (CV: 2+ pages, Resume: 1-2 pages), content, format, and when to use each for jobs in US, Europe, and academia. Free comparison table included."
        keywords="CV vs resume, curriculum vitae difference, resume vs CV, CV format, resume format, job application documents, academic CV, industry resume, CV length, resume length, international job applications"
        canonical="https://freeresumemaker.xyz/blog/cv-vs-resume-difference"
        image="https://freeresumemaker.xyz/images/blog/cv-vs-resume-difference.jpg"
        type="article"
        publishedTime="2026-02-12"
        author="Patricia Garcia"
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
        maxWidth: '1000px',
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
          <span>Ã¢â‚¬Âº</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }}>CV vs Resume Difference</span>
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
            CV vs Resume: Key Differences, Length, Format & When to Use Each
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
                  src="/images/authors/patricia-garcia.jpg" 
                  alt="Patricia Garcia" 
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
                  P
                </div>
              )}
              <span><strong>Patricia Garcia</strong> | Career Advisor</span>
            </div>
            <span>February 12, 2026</span>
            <span>8 min read</span>
            <span>Career Advice</span>
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
              One of the most common questions job seekers ask: Should I use a CV or a resume? 
              The answer depends on where you're applying, what position you're seeking, and international norms. 
              This guide breaks down all the key differences to help you choose the right document.
            </p>
          </div>
        </header>

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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '12px'
          }}>
            {[
              { name: 'Quick Comparison Table', href: '#comparison' },
              { name: 'What is a CV?', href: '#what-is-cv' },
              { name: 'What is a Resume?', href: '#what-is-resume' },
              { name: 'When to Use a CV', href: '#when-cv' },
              { name: 'When to Use a Resume', href: '#when-resume' },
              { name: 'International Differences', href: '#international' },
              { name: 'CV to Resume Conversion', href: '#conversion' },
              { name: 'Industry Examples', href: '#examples' }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: 'white',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e9ecef'
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

        {/* Main Content */}
        <article style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#333'
        }}>
          <p style={{ fontSize: '20px', marginBottom: '30px', fontWeight: 500 }}>
            While the terms "CV" and "resume" are often used interchangeably, they refer to two distinct documents 
            with different purposes, lengths, and content. Using the wrong one can hurt your chances of landing an interview.
          </p>

          {/* Section 1 - Quick Comparison Table */}
          <section id="comparison" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '0 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              Quick Comparison: CV vs Resume
            </h2>
            
            <div style={{
              overflowX: 'auto',
              margin: '30px 0',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '16px',
                background: 'white'
              }}>
                <thead>
                  <tr style={{ background: '#0070f3', color: 'white' }}>
                    <th style={{ padding: '16px', border: '1px solid #0070f3', textAlign: 'left' }}>Feature</th>
                    <th style={{ padding: '16px', border: '1px solid #0070f3', textAlign: 'left' }}>CV (Curriculum Vitae)</th>
                    <th style={{ padding: '16px', border: '1px solid #0070f3', textAlign: 'left' }}>Resume</th>
                   </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#f9f9f9' }}>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Length</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>2+ pages (unlimited, comprehensive)</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>1-2 pages (concise, targeted)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Purpose</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Academic, research, medical, international positions</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Industry jobs, business, corporate, tech</td>
                  </tr>
                  <tr style={{ background: '#f9f9f9' }}>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Content</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Complete academic history, publications, presentations, research, teaching experience, grants, awards, fellowships</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Relevant work experience, skills, achievements, education summary</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Geographic Use</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Europe, Asia, Africa, Middle East, academic positions worldwide</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>United States, Canada, Australia, corporate jobs globally</td>
                  </tr>
                  <tr style={{ background: '#f9f9f9' }}>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Update Frequency</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Continuously updated with every new achievement</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Customized and tailored for each job application</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Personal Details</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>May include age, nationality, marital status (common outside US)</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Name and contact information only (US standard)</td>
                  </tr>
                  <tr style={{ background: '#f9f9f9' }}>
                    <td style={{ padding: '16px', border: '1px solid #ddd', fontWeight: 'bold' }}>Photo</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Often required in Europe and Asia</td>
                    <td style={{ padding: '16px', border: '1px solid #ddd' }}>Never include a photo (US/Canada standard)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 - What is a CV */}
          <section id="what-is-cv" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              What is a CV (Curriculum Vitae)?
            </h2>
            <p>
              <strong>Curriculum Vitae</strong> is Latin for "course of life." A CV is a comprehensive document that details your 
              entire academic and professional history. Unlike a resume, there's no page limitÃ¢â‚¬â€CVs can be 2, 5, or even 10+ pages 
              depending on your experience and achievements.
            </p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#0070f3' }}>A typical CV includes:</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '15px'
              }}>
                {[
                  'Contact Information',
                  'Education (with thesis titles)',
                  'Publications (books, articles, papers)',
                  'Research Experience',
                  'Teaching Experience',
                  'Presentations & Conferences',
                  'Grants & Fellowships',
                  'Awards & Honors',
                  'Professional Memberships',
                  'Service & Committees',
                  'References'
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{ color: '#0070f3' }}>Ã¢Å“â€œ</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - What is a Resume */}
          <section id="what-is-resume" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              What is a Resume?
            </h2>
            <p>
              <strong>Resume</strong> comes from the French word for "summary." A resume is a concise, targeted document 
              highlighting your most relevant skills and experiences for a specific job. In the US and Canada, resumes are 
              strictly 1-2 pages.
            </p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#0070f3' }}>A standard resume includes:</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '15px'
              }}>
                {[
                  'Contact Information',
                  'Professional Summary',
                  'Work Experience',
                  'Skills (Technical & Soft)',
                  'Education (brief)',
                  'Certifications',
                  'Projects',
                  'Languages',
                  'Volunteer Work (optional)'
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{ color: '#0070f3' }}>Ã¢Å“â€œ</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 - When to Use a CV */}
          <section id="when-cv" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              When to Use a CV
            </h2>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Academic Positions:</h3>
              <ul style={{ marginBottom: '25px' }}>
                <li>Professor / Faculty (tenure-track, adjunct, visiting)</li>
                <li>Researcher (postdoctoral fellow, research scientist)</li>
                <li>Graduate School (PhD applications, fellowships)</li>
                <li>Academic Administrator (dean, department chair)</li>
              </ul>

              <h3 style={{ fontSize: '20px', margin: '20px 0 15px' }}>Medical & Scientific Fields:</h3>
              <ul style={{ marginBottom: '25px' }}>
                <li>Physician / Surgeon (hospital positions, medical research)</li>
                <li>Nurse Practitioner / Physician Assistant</li>
                <li>Clinical Research (coordinator, trial manager)</li>
                <li>Scientific Researcher (lab work, publications)</li>
              </ul>

              <h3 style={{ fontSize: '20px', margin: '20px 0 15px' }}>International Applications:</h3>
              <ul>
                <li>Europe (UK, Germany, France, Spain, Italy)</li>
                <li>Asia (India, China, Japan, Singapore)</li>
                <li>Middle East (UAE, Saudi Arabia, Qatar)</li>
                <li>Africa (South Africa, Kenya, Nigeria)</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - When to Use a Resume */}
          <section id="when-resume" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              When to Use a Resume
            </h2>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Corporate & Industry Jobs:</h3>
              <ul style={{ marginBottom: '25px' }}>
                <li>Business (finance, marketing, sales, HR, operations)</li>
                <li>Technology (software engineer, product manager, data scientist)</li>
                <li>Creative (graphic designer, content writer, video editor)</li>
                <li>Non-profit and government positions</li>
              </ul>

              <h3 style={{ fontSize: '20px', margin: '20px 0 15px' }}>US & Canada:</h3>
              <ul style={{ marginBottom: '25px' }}>
                <li>Private sector companies of all sizes</li>
                <li>Startups and tech companies</li>
                <li>Corporate positions in all industries</li>
              </ul>

              <h3 style={{ fontSize: '20px', margin: '20px 0 15px' }}>Entry-Level & Career Changers:</h3>
              <ul>
                <li>Recent graduates (1-page resume)</li>
                <li>Internships and co-op positions</li>
                <li>Career transitions (functional or combination format)</li>
              </ul>
            </div>
          </section>

          {/* Section 6 - International Differences */}
          <section id="international" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              International Differences: What to Know
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>United States</h3>
                <p><strong>Use:</strong> Resume for industry, CV for academia/research</p>
                <p><strong>Length:</strong> Resume: 1-2 pages, CV: unlimited</p>
                <p><strong>Photo:</strong> Never include</p>
                <p><strong>Personal details:</strong> Name only</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>United Kingdom</h3>
                <p><strong>Use:</strong> CV for all positions (resume term rarely used)</p>
                <p><strong>Length:</strong> 2 pages typically</p>
                <p><strong>Photo:</strong> Not required</p>
                <p><strong>Personal details:</strong> Name, contact only</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Germany</h3>
                <p><strong>Use:</strong> CV (Lebenslauf) with photo</p>
                <p><strong>Length:</strong> 1-2 pages</p>
                <p><strong>Photo:</strong> Required, professional headshot</p>
                <p><strong>Personal details:</strong> Include date of birth, nationality</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>France</h3>
                <p><strong>Use:</strong> CV with photo standard</p>
                <p><strong>Length:</strong> 1-2 pages</p>
                <p><strong>Photo:</strong> Expected</p>
                <p><strong>Personal details:</strong> Age, marital status common</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Australia</h3>
                <p><strong>Use:</strong> Resume for most roles</p>
                <p><strong>Length:</strong> 2-3 pages common</p>
                <p><strong>Photo:</strong> Not required</p>
                <p><strong>Personal details:</strong> Name and contact only</p>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>India</h3>
                <p><strong>Use:</strong> CV or resume (terms used interchangeably)</p>
                <p><strong>Length:</strong> 2-3 pages typical</p>
                <p><strong>Photo:</strong> Often included</p>
                <p><strong>Personal details:</strong> Date of birth, gender common</p>
              </div>
            </div>
          </section>

          {/* Section 7 - CV to Resume Conversion */}
          <section id="conversion" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              How to Convert a CV to a Resume
            </h2>
            <p>Moving from academia to industry? Here's how to transform your lengthy CV into a powerful 1-2 page resume:</p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <ol style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}><strong>Cut to 1-2 pages:</strong> Be selective. Remove anything not relevant to the specific job.</li>
                <li style={{ marginBottom: '12px' }}><strong>Summarize publications:</strong> Replace detailed lists with "Authored 10+ peer-reviewed publications"</li>
                <li style={{ marginBottom: '12px' }}><strong>Focus on transferable skills:</strong> Leadership, project management, communication, data analysis</li>
                <li style={{ marginBottom: '12px' }}><strong>Add a professional summary:</strong> 2-3 sentences highlighting your value proposition</li>
                <li style={{ marginBottom: '12px' }}><strong>Quantify achievements:</strong> "Secured $500K in research funding" Ã¢â€ â€™ "Managed $500K budget and resources"</li>
                <li style={{ marginBottom: '12px' }}><strong>Use industry keywords:</strong> Research job descriptions and incorporate relevant terms</li>
                <li style={{ marginBottom: '12px' }}><strong>Remove academic jargon:</strong> Translate for non-academic readers</li>
                <li style={{ marginBottom: '12px' }}><strong>Add skills section:</strong> Technical skills, software, tools, languages</li>
              </ol>
            </div>
          </section>

          {/* Section 8 - Industry Examples */}
          <section id="examples" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              Industry Examples: CV vs Resume
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '25px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '25px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#0070f3' }}>Academic CV Example</h3>
                <div style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                  fontFamily: 'monospace',
                  fontSize: '14px'
                }}>
                  <p><strong>EDUCATION</strong><br />
                  PhD in Computer Science, Stanford University, 2020<br />
                  MS in Computer Science, Stanford University, 2016<br />
                  BS in Computer Science, MIT, 2014</p>
                  
                  <p><strong>PUBLICATIONS</strong><br />
                  "Machine Learning Algorithms," Journal of AI, 2023<br />
                  "Neural Networks," IEEE Transactions, 2022<br />
                  "Deep Learning Applications," NeurIPS, 2021<br />
                  (12 total publications)</p>
                  
                  <p><strong>RESEARCH</strong><br />
                  Principal Investigator, NSF Grant $500K, 2021-2024<br />
                  Research Fellow, Google AI, 2019-2020</p>
                  
                  <p><strong>TEACHING</strong><br />
                  Professor, Machine Learning (CS 234), 2020-2024<br />
                  Teaching Assistant, Introduction to AI, 2016-2018</p>
                  
                  <p><strong>PRESENTATIONS</strong><br />
                  Keynote Speaker, AI Conference 2023<br />
                  Workshop Leader, NeurIPS 2022<br />
                  Panelist, Women in Tech Summit 2021</p>
                </div>
              </div>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '25px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#0070f3' }}>Industry Resume Example</h3>
                <div style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                  fontFamily: 'monospace',
                  fontSize: '14px'
                }}>
                  <p><strong>PROFESSIONAL SUMMARY</strong><br />
                  AI Research Scientist with 5+ years experience in machine learning and deep learning. PhD in Computer Science with 12 publications. Expert in Python, TensorFlow, and production ML systems.</p>
                  
                  <p><strong>EXPERIENCE</strong><br />
                  Senior ML Engineer, TechCorp, 2022-Present<br />
                  Ã¢â‚¬Â¢ Developed recommendation system increasing user engagement by 35%<br />
                  Ã¢â‚¬Â¢ Led team of 5 engineers on computer vision projects<br />
                  Ã¢â‚¬Â¢ Managed $500K research budget, delivered 3 patents</p>
                  
                  <p><strong>SKILLS</strong><br />
                  Languages: Python, Java, C++<br />
                  Frameworks: TensorFlow, PyTorch, Keras<br />
                  Tools: AWS, Docker, Kubernetes, Git</p>
                  
                  <p><strong>EDUCATION</strong><br />
                  PhD Computer Science, Stanford University, 2020<br />
                  BS Computer Science, MIT, 2014</p>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Guide */}
          <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '30px',
            margin: '50px 0',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Which One Do You Need?</h2>
            <p style={{ fontSize: '18px', marginBottom: '25px', opacity: 0.95 }}>
              Still unsure? Here's a simple guide:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '20px',
                borderRadius: '12px'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Use a CV if:</h3>
                <ul style={{ margin: 0 }}>
                  <li>Applying for academic positions</li>
                  <li>Applying for research roles</li>
                  <li>Applying for medical positions</li>
                  <li>Applying internationally (Europe/Asia)</li>
                  <li>You have extensive publications</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '20px',
                borderRadius: '12px'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Use a Resume if:</h3>
                <ul style={{ margin: 0 }}>
                  <li>Applying for corporate jobs</li>
                  <li>Applying in US/Canada/Australia</li>
                  <li>Applying for entry-level positions</li>
                  <li>Changing careers</li>
                  <li>Applying to startups or tech companies</li>
                </ul>
              </div>
            </div>
            <p style={{ fontSize: '16px', marginTop: '25px', opacity: 0.9, fontStyle: 'italic' }}>
              When in doubt, check the job postingÃ¢â‚¬â€it will usually specify whether they want a CV or resume. 
              If it's unclear, you can reach out to the recruiter or hiring manager to ask.
            </p>
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
                  q: 'What is the main difference between a CV and a resume?',
                  a: 'A CV (Curriculum Vitae) is a comprehensive document detailing your entire academic and professional history, often 2+ pages. A resume is a concise summary of relevant experience, typically 1-2 pages, tailored for specific jobs.'
                },
                {
                  q: 'When should I use a CV instead of a resume?',
                  a: 'Use a CV for academic positions (professor, researcher), medical fields, scientific research, and international applications, especially in Europe. Use a resume for corporate jobs in the US, Canada, and Australia.'
                },
                {
                  q: 'How long should a CV be vs a resume?',
                  a: 'A CV can be 2+ pages with no upper limit, including all academic achievements, publications, and research. A resume should be 1-2 pages maximum, focusing only on relevant experience for the specific job.'
                },
                {
                  q: 'Should I include a photo on my CV or resume?',
                  a: 'In the US and Canada, never include a photo on either document. In Europe and Asia, photos are often required on CVs. Always research the norms for your target country and industry.'
                },
                {
                  q: 'Can I use a CV for a corporate job in the US?',
                  a: 'Generally no. US employers expect concise 1-2 page resumes for corporate positions. Submitting a lengthy CV may suggest you don\'t understand local hiring practices.'
                },
                {
                  q: 'Do I need both a CV and a resume?',
                  a: 'If you\'re in academia or research, maintain both: a comprehensive CV for academic applications and a tailored resume for any industry positions you pursue.'
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
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>Ã°Å¸â€œÂ¥</div>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free CV vs Resume Comparison Guide</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
              Download our printable comparison guide with country-specific requirements and templates.
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
              Download Free Guide
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
        </article>

        {/* Author Bio */}
        <section style={{
          margin: '50px 0',
          padding: '30px',
          background: '#f8f9fa',
          borderRadius: '16px',
          border: '1px solid #e9ecef',
          display: 'flex',
          gap: '25px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            color: 'white'
          }}>
            PG
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>About Patricia Garcia</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              Patricia is a Career Advisor with 10+ years of experience helping professionals navigate international 
              job markets. She specializes in cross-cultural career transitions and has worked with clients in 20+ countries. 
              Her advice has helped thousands of job seekers choose the right document for their target roles.
            </p>
          </div>
        </section>

        {/* Share Section */}
        <div style={{
          margin: '50px 0',
          padding: '30px',
          background: '#f8f9fa',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>
            Share This Guide
          </h3>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            {[
              { name: 'Twitter', icon: 'Ã°Å¸ÂÂ¦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('CV vs Resume: Key Differences - Complete Guide 2026')}&url=https://freeresumemaker.xyz/blog/cv-vs-resume-difference` },
              { name: 'LinkedIn', icon: 'Ã°Å¸â€™Â¼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/cv-vs-resume-difference` },
              { name: 'Facebook', icon: 'Ã°Å¸â€œËœ', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/cv-vs-resume-difference` },
              { name: 'Email', icon: 'Ã°Å¸â€œÂ§', url: `mailto:?subject=${encodeURIComponent('CV vs Resume Guide')}&body=${encodeURIComponent('Check out this guide: https://freeresumemaker.xyz/blog/cv-vs-resume-difference')}` }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0070f3';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div style={{
          marginTop: '50px',
          paddingTop: '40px',
          borderTop: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '30px', color: '#333' }}>
            You Might Also Like
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              { href: '/blog/how-to-write-resume', title: 'How to Write a Resume: Complete Guide', author: 'Sarah Johnson', readTime: '10 min' },
              { href: '/blog/resume-formatting-guide', title: 'Resume Formatting Guide', author: 'Lisa Thompson', readTime: '6 min' },
              { href: '/blog/action-verbs-for-resume', title: '200+ Action Verbs for Resume', author: 'David Kim', readTime: '7 min' },
              { href: '/blog/ultimate-resume-guide-2026', title: 'Ultimate Resume Guide 2026', author: 'Sarah Johnson', readTime: '12 min' }
            ].map((post, index) => (
              <Link 
                key={index}
                href={post.href}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,112,243,0.1)';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#1a1a1a', fontWeight: 600 }}>
                    {post.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    By {post.author} Ã¢â‚¬Â¢ {post.readTime} read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '50px',
          margin: '50px 0',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
            Ready to Build Your Document?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
            Choose the right tool for your needs. Create a professional resume or CV in minutes with our builder.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/editor"
              style={{
                padding: '16px 32px',
                background: 'white',
                color: '#0070f3',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '18px',
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
              Build Your Resume
            </Link>
            <Link 
              href="/templates"
              style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '18px',
                border: '2px solid white',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
          marginTop: '30px'
        }}>
          <p>Last updated: February 12, 2026 | Ã‚Â© {new Date().getFullYear()} Free Resume Maker. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
