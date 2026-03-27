// pages/blog/how-to-write-resume.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function HowToWriteResume() {
  const [authorImageError, setAuthorImageError] = useState(false);

  // Schema markup for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Write a Resume: Step-by-Step Guide with Examples (2026)",
    "description": "Learn how to write a professional resume step by step. Includes examples for each section, formatting tips, and expert advice for 2026.",
    "image": "https://freeresumemaker.xyz/images/blog/how-to-write-resume.jpg",
    "author": {
      "@type": "Person",
      "name": "Sarah Johnson",
      "jobTitle": "Resume Expert",
      "url": "https://freeresumemaker.xyz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png"
      }
    },
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/blog/how-to-write-resume"
    },
    "keywords": "how to write resume, resume writing guide, resume tips, resume format, resume examples, professional resume",
    "articleSection": "Resume Writing"
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
        "name": "How to Write a Resume",
        "item": "https://freeresumemaker.xyz/blog/how-to-write-resume"
      }
    ]
  };

  // HowTo schema for step-by-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Write a Professional Resume",
    "description": "Follow these 7 steps to create an effective resume that gets interviews.",
    "totalTime": "PT60M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose the Right Format",
        "text": "Select chronological, functional, or combination format based on your experience level."
      },
      {
        "@type": "HowToStep",
        "name": "Add Contact Information",
        "text": "Include your full name, phone number, email, LinkedIn profile, and location."
      },
      {
        "@type": "HowToStep",
        "name": "Write a Compelling Summary",
        "text": "Craft a 2-3 sentence overview highlighting your experience and key skills."
      },
      {
        "@type": "HowToStep",
        "name": "List Work Experience",
        "text": "Detail your work history with quantifiable achievements using action verbs."
      },
      {
        "@type": "HowToStep",
        "name": "Add Education",
        "text": "List your degrees, institutions, and graduation years in reverse chronological order."
      },
      {
        "@type": "HowToStep",
        "name": "Highlight Skills",
        "text": "Organize your technical and soft skills into clear categories."
      },
      {
        "@type": "HowToStep",
        "name": "Add Optional Sections",
        "text": "Include certifications, projects, publications, or volunteer work if relevant."
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
        "name": "How long should a resume be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most resumes should be 1-2 pages. Entry-level candidates should aim for 1 page, while experienced professionals may need 2 pages."
        }
      },
      {
        "@type": "Question",
        "name": "What should I include in a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential sections include contact information, professional summary, work experience, education, and skills. Optional sections can include certifications, projects, languages, and volunteer work."
        }
      },
      {
        "@type": "Question",
        "name": "How do I make my resume ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use standard fonts like Arial or Calibri, avoid tables and graphics, include keywords from the job description, and save as PDF or DOCX."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use a resume template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, using a professionally designed template can help ensure proper formatting and organization. Choose a clean, simple template that's ATS-friendly."
        }
      }
    ]
  };

  const handleDownloadClick = () => {
    alert('PDF download functionality coming soon!');
  };

  return (
    <>
      <SEO 
        title="How to Write a Resume: Step-by-Step Guide with Examples (2026)"
        description="Learn how to write a professional resume step by step. Includes examples for each section, formatting tips, and expert advice for 2026. Free templates included."
        keywords="how to write resume, resume writing guide, resume tips, resume format, resume examples, professional resume, resume writing tips, resume help, create resume, build resume"
        canonical="https://freeresumemaker.xyz/blog/how-to-write-resume"
        image="https://freeresumemaker.xyz/images/blog/how-to-write-resume.jpg"
        type="article"
        publishedTime="2026-02-15"
        author="Sarah Johnson"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
          <span>â€º</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>How to Write a Resume</span>
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
            How to Write a Resume: Complete Step-by-Step Guide
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
                  src="/images/authors/sarah-johnson.jpg" 
                  alt="Sarah Johnson" 
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
                  SJ
                </div>
              )}
              <span><strong>Sarah Johnson</strong> | Resume Expert</span>
            </div>
            <span>February 15, 2026</span>
            <span>10 min read</span>
            <span>Resume Writing</span>
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
              Follow these 7 steps to write a resume that gets you interviews. This guide includes examples for each section, 
              formatting tips, and expert advice to help you create a professional resume that stands out.
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
              { name: 'Choose the Right Format', href: '#format' },
              { name: 'Contact Information', href: '#contact' },
              { name: 'Write a Compelling Summary', href: '#summary' },
              { name: 'List Work Experience', href: '#experience' },
              { name: 'Add Education', href: '#education' },
              { name: 'Highlight Skills', href: '#skills' },
              { name: 'Optional Sections', href: '#optional' },
              { name: 'Tips for 2026', href: '#tips' }
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
          {/* Section 1 - Format */}
          <section id="format" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '0 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              1. Choose the Right Format
            </h2>
            <p>
              Selecting the right resume format is crucial for presenting your experience effectively. Here are your options:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0070f3' }}>Chronological</h3>
                <p style={{ fontSize: '15px', marginBottom: '10px' }}>
                  Lists experience in reverse chronological order.
                </p>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Best for:</strong> Experienced professionals with consistent work history
                </p>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0070f3' }}>Functional</h3>
                <p style={{ fontSize: '15px', marginBottom: '10px' }}>
                  Focuses on skills rather than work history.
                </p>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Best for:</strong> Career changers, those with employment gaps
                </p>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#0070f3' }}>Combination</h3>
                <p style={{ fontSize: '15px', marginBottom: '10px' }}>
                  Blends skills and chronological formats.
                </p>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Best for:</strong> Those with strong skills and some experience
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Contact */}
          <section id="contact" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              2. Add Contact Information
            </h2>
            <p>
              Your contact information should be clear and professional at the top of your resume:
            </p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '12px',
              padding: '25px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '15px'
              }}>
                {[
                  'Full name (professional format, no nicknames)',
                  'Phone number with country code',
                  'Professional email address',
                  'LinkedIn profile URL (customized)',
                  'City and state/country',
                  'Portfolio/website (optional but recommended)'
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{ color: '#0070f3' }}>âœ“</span>
                    <span style={{ fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - Summary */}
          <section id="summary" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              3. Write a Compelling Summary
            </h2>
            <p>
              Your professional summary should be 2-3 sentences highlighting your experience, key skills, and value proposition. 
              This is often the first thing recruiters read.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#ffebee',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #ef9a9a'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#c62828' }}>Weak Summary</h3>
                <p style={{ fontStyle: 'italic', margin: 0 }}>
                  "Experienced software developer looking for new opportunities in a challenging environment where I can grow and contribute."
                </p>
              </div>

              <div style={{
                background: '#e8f5e9',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #a5d6a7'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#2e7d32' }}>Strong Summary</h3>
                <p style={{ fontStyle: 'italic', margin: 0 }}>
                  "Results-driven software engineer with 5+ years of experience in full-stack development. Skilled in React, Node.js, and cloud technologies. Passionate about building scalable applications that solve real-world problems."
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Experience */}
          <section id="experience" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              4. List Work Experience
            </h2>
            <p>
              For each position, include these elements with quantifiable achievements:
            </p>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <ul style={{ marginBottom: '20px' }}>
                <li>Company name and location</li>
                <li>Job title</li>
                <li>Employment dates (month/year format)</li>
                <li>4-5 bullet points using strong action verbs</li>
                <li>Quantifiable achievements with numbers where possible</li>
              </ul>

              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Senior Software Engineer | Tech Company</p>
                <p style={{ margin: '5px 0 15px 0', color: '#666' }}>2021 - Present</p>
                <ul style={{ margin: 0 }}>
                  <li>Led development of new feature used by millions of users</li>
                  <li>Improved application performance through optimization</li>
                  <li>Mentored junior developers on the team</li>
                  <li>Collaborated with product managers on requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 - Education */}
          <section id="education" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              5. Add Education
            </h2>
            <p>
              List your educational background in reverse chronological order:
            </p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '12px',
              padding: '20px',
              margin: '20px 0'
            }}>
              <ul>
                <li>Degree and field of study</li>
                <li>University name and location</li>
                <li>Graduation year (or expected graduation)</li>
                <li>GPA (if 3.5 or higher)</li>
                <li>Relevant coursework (optional)</li>
              </ul>
              
              <div style={{
                background: 'white',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '15px',
                border: '1px solid #e9ecef'
              }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Bachelor of Science in Computer Science</p>
                <p style={{ margin: '5px 0', color: '#666' }}>University Name | 2020</p>
                <p style={{ margin: '5px 0 0 0' }}>Relevant Coursework: Data Structures, Algorithms, Database Systems</p>
              </div>
            </div>
          </section>

          {/* Section 6 - Skills */}
          <section id="skills" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              6. Highlight Skills
            </h2>
            <p>
              Organize your skills into categories for easy scanning:
            </p>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Technical Skills</span>
                <p>JavaScript, React, Node.js, Python, SQL, AWS</p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Soft Skills</span>
                <p>Leadership, Communication, Problem-Solving, Team Collaboration</p>
              </div>

              <div>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Languages</span>
                <p>English (Native), Spanish (Conversational)</p>
              </div>
            </div>
          </section>

          {/* Section 7 - Optional */}
          <section id="optional" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              7. Add Optional Sections
            </h2>
            <p>
              Include these sections if they strengthen your application:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '15px',
              margin: '20px 0'
            }}>
              {[
                { section: 'Certifications', example: 'AWS Certified Developer, Google Analytics' },
                { section: 'Projects', example: 'Personal or professional projects with links' },
                { section: 'Publications', example: 'Articles, research papers, books' },
                { section: 'Volunteer Work', example: 'Non-profit organizations, community involvement' },
                { section: 'Awards', example: 'Employee of the Month, Hackathon wins, Scholarships' },
                { section: 'Languages', example: 'Additional languages with proficiency levels' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <strong style={{ color: '#0070f3' }}>{item.section}</strong>
                  <p style={{ fontSize: '13px', margin: '8px 0 0 0', color: '#666' }}>{item.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 - Tips */}
          <section id="tips" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              Resume Writing Tips for 2026
            </h2>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '15px'
              }}>
                {[
                  'Use keywords from job descriptions to pass ATS filters',
                  'Quantify achievements with specific numbers where possible',
                  'Keep resume to 1-2 pages maximum',
                  'Use standard fonts like Arial, Calibri, or Times New Roman',
                  'Save as PDF unless employer specifies otherwise',
                  'Proofread multiple times and ask others to review',
                  'Tailor each resume to the specific job',
                  'Include links to LinkedIn and portfolio',
                  'Use strong action verbs: Led, Developed, Implemented',
                  'Remove outdated or irrelevant information'
                ].map((tip, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{ color: '#0070f3' }}>âœ“</span>
                    <span style={{ fontSize: '14px' }}>{tip}</span>
                  </div>
                ))}
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
                  q: 'How long should a resume be?',
                  a: 'Most resumes should be 1-2 pages. Entry-level candidates should aim for 1 page, while experienced professionals may need 2 pages.'
                },
                {
                  q: 'What should I include in a resume?',
                  a: 'Essential sections include contact information, professional summary, work experience, education, and skills. Optional sections can include certifications, projects, languages, and volunteer work.'
                },
                {
                  q: 'How do I make my resume ATS-friendly?',
                  a: 'Use standard fonts like Arial or Calibri, avoid tables and graphics, include keywords from the job description, and save as PDF or DOCX.'
                },
                {
                  q: 'Should I use a resume template?',
                  a: 'Using a professionally designed template can help ensure proper formatting and organization. Choose a clean, simple template that\'s ATS-friendly.'
                },
                {
                  q: 'How far back should my work history go?',
                  a: 'Generally, include the last 10-15 years of experience. Older roles can be summarized or omitted unless they are highly relevant.'
                },
                {
                  q: 'Should I include references on my resume?',
                  a: 'No, references should be provided separately when requested. Use the space for more relevant information.'
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
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>ðŸ“¥</div>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free Resume Writing Checklist</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
              Download our printable checklist to ensure your resume includes all essential elements.
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
            SJ
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>About Sarah Johnson</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              Sarah is a certified resume expert with over 10 years of experience helping professionals create compelling resumes. 
              She has worked with clients across various industries and has helped thousands land interviews at top companies. 
              Her advice has been featured in major career publications.
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
              { name: 'Twitter', icon: 'ðŸ¦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('How to Write a Resume: Complete Step-by-Step Guide')}&url=https://freeresumemaker.xyz/blog/how-to-write-resume` },
              { name: 'LinkedIn', icon: 'ðŸ’¼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/how-to-write-resume` },
              { name: 'Facebook', icon: 'ðŸ“˜', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/how-to-write-resume` },
              { name: 'Email', icon: 'ðŸ“§', url: `mailto:?subject=${encodeURIComponent('How to Write a Resume Guide')}&body=${encodeURIComponent('Check out this guide: https://freeresumemaker.xyz/blog/how-to-write-resume')}` }
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
              { href: '/blog/ats-resume-tips-2026', title: 'ATS Resume Tips for 2026', author: 'Michael Chen', readTime: '8 min' },
              { href: '/blog/ultimate-resume-guide-2026', title: 'Ultimate Resume Guide 2026', author: 'Sarah Johnson', readTime: '12 min' },
              { href: '/blog/resume-formatting-guide', title: 'Resume Formatting Guide', author: 'Lisa Thompson', readTime: '6 min' },
              { href: '/blog/action-verbs-for-resume', title: '200+ Action Verbs for Resume', author: 'David Kim', readTime: '7 min' }
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
                    By {post.author} â€¢ {post.readTime} read
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
            Ready to Build Your Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
            Use our resume builder with professionally designed templates and expert suggestions to create your resume in minutes.
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
              Start Building
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
          <p>Last updated: February 15, 2026 | Â© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
