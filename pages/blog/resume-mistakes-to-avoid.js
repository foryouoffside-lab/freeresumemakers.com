import React from 'react';
// pages/blog/resume-mistakes-to-avoid.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function ResumeMistakesToAvoid() {
  const [authorImageError, setAuthorImageError] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState(false);

  // Schema markup for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "15 Resume Mistakes to Avoid in 2026 | Common CV Errors That Cost Interviews",
    "description": "Learn the most common resume mistakes that can affect your job applications. Avoid typos, poor formatting, irrelevant information, and other errors with our comprehensive guide.",
    "image": "https://freeresumemaker.xyz/images/blog/resume-mistakes-to-avoid.jpg",
    "author": {
      "@type": "Person",
      "name": "Emily Rodriguez",
      "jobTitle": "Resume Review Specialist",
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
    "datePublished": "2026-02-20",
    "dateModified": "2026-02-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid"
    },
    "keywords": "resume mistakes, CV errors, resume tips, common resume mistakes, avoid resume errors, resume writing mistakes",
    "articleSection": "Resume Tips"
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
        "name": "Resume Mistakes to Avoid",
        "item": "https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid"
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
        "name": "What are the most common resume mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common resume mistakes include typos and grammar errors, unprofessional email addresses, including irrelevant information, wrong resume length, poor formatting, generic content, missing keywords, and not quantifying achievements."
        }
      },
      {
        "@type": "Question",
        "name": "How do I avoid typos on my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proofread multiple times, read your resume aloud, use grammar-checking tools, and ask someone else to review it. Reading it backwards or printing it out can also help catch errors."
        }
      },
      {
        "@type": "Question",
        "name": "How long should a resume be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entry-level: 1 page. Mid-level (3-10 years): 1-2 pages. Senior (10+ years): 2 pages max. Academic CVs may be longer. Every word should be relevant and add value."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include hobbies on my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only include hobbies if they are relevant to the job or demonstrate valuable skills. Generally, it's better to use the space for professional experience and achievements."
        }
      }
    ]
  };

  const handleDownloadClick = () => {
    setDownloadAlert(true);
    setTimeout(() => setDownloadAlert(false), 2000);
  };

  const mistakes = [
    {
      id: 1,
      title: 'Typos and Grammatical Errors',
      mistake: 'Spelling mistakes, incorrect grammar, or punctuation errors.',
      why: 'Typos can create a negative impression and suggest a lack of attention to detail. They may distract from your qualifications.',
      fix: 'Proofread multiple times, read your resume aloud, use grammar-checking tools, and ask someone else to review it.'
    },
    {
      id: 2,
      title: 'Using an Unprofessional Email',
      mistake: 'Emails like "partyguy123@email.com" or "coolcat@domain.com".',
      why: 'An unprofessional email address may not convey the appropriate image for a professional setting.',
      fix: 'Create a professional email using your name: first.last@email.com. Free options include Gmail, Outlook, or ProtonMail.'
    },
    {
      id: 3,
      title: 'Including Irrelevant Information',
      mistake: 'Listing unrelated hobbies, outdated achievements, or positions from many years ago.',
      why: 'Irrelevant information takes up space that could be used for more relevant qualifications and may distract from your core message.',
      fix: 'Only include information relevant to the job you\'re applying for. Ask yourself if each item supports your candidacy.'
    },
    {
      id: 4,
      title: 'Wrong Length (Too Long or Too Short)',
      mistake: 'Overly long resumes for entry-level positions or too-short resumes for experienced professionals.',
      why: 'Resumes that are too long may not be read thoroughly; those that are too short may appear to lack sufficient experience.',
      fix: 'Entry-level: 1 page. Mid-level (3-10 years): 1-2 pages. Senior (10+ years): 2 pages max. Focus on relevant, recent experience.'
    },
    {
      id: 5,
      title: 'Poor Formatting',
      mistake: 'Inconsistent fonts, spacing, or bullet styles. Hard-to-read layouts.',
      why: 'Poor formatting can make your resume difficult to read and may suggest a lack of attention to detail.',
      fix: 'Use consistent fonts, spacing, and bullet styles. Choose a clean, professional layout. Test readability on different devices.'
    },
    {
      id: 6,
      title: 'Generic Content',
      mistake: 'Using the same resume for every job application without tailoring.',
      why: 'Generic resumes may not effectively highlight how your skills match specific job requirements.',
      fix: 'Customize your resume for each application. Highlight skills and experiences most relevant to the position.'
    },
    {
      id: 7,
      title: 'Missing Keywords',
      mistake: 'Not including industry-specific terms from the job description.',
      why: 'ATS systems scan for keywords. Missing them may result in your resume not passing initial screening.',
      fix: 'Review the job description and include relevant keywords naturally in your resume, especially in the skills and experience sections.'
    },
    {
      id: 8,
      title: 'Exaggerating or Misrepresenting Information',
      mistake: 'Inflating job titles, responsibilities, or achievements.',
      why: 'Exaggerations can be discovered during reference checks or interviews, potentially damaging your credibility.',
      fix: 'Be honest about your experience. Focus on accurately describing your actual responsibilities and achievements.'
    },
    {
      id: 9,
      title: 'Bad File Format',
      mistake: 'Saving in formats that may not be compatible, like Pages or image files.',
      why: 'Recruiters may not be able to open certain file formats, or formatting may be lost.',
      fix: 'Save as PDF unless another format is specifically requested. Name the file professionally: "FirstName_LastName_Resume_2026.pdf"'
    },
    {
      id: 10,
      title: 'No Quantifiable Results',
      mistake: 'Listing responsibilities without showing impact or achievements.',
      why: 'Without context or results, it\'s harder for employers to understand your contributions.',
      fix: 'Where possible, include numbers, percentages, or specific outcomes to demonstrate your impact.'
    },
    {
      id: 11,
      title: 'Gaps Not Addressed',
      mistake: 'Leaving unexplained employment gaps without context.',
      why: 'Unexplained gaps may raise questions for employers reviewing your work history.',
      fix: 'Briefly address significant gaps in your cover letter or consider including relevant activities during that time, such as volunteering or education.'
    },
    {
      id: 12,
      title: 'Wrong Tense Usage',
      mistake: 'Using past tense for current jobs or mixing tenses inconsistently.',
      why: 'Inconsistent tense can be distracting and may appear careless.',
      fix: 'Use past tense for previous positions and present tense for your current role. Be consistent throughout.'
    },
    {
      id: 13,
      title: 'Contact Information Missing or Incorrect',
      mistake: 'Missing phone number, email, or having outdated contact details.',
      why: 'If employers can\'t reach you, you won\'t get interview calls.',
      fix: 'Double-check all contact information. Include phone, email, and LinkedIn profile if relevant.'
    },
    {
      id: 14,
      title: 'Unprofessional Layout',
      mistake: 'Using too many colors, fonts, or distracting design elements.',
      why: 'Overly designed resumes may be hard to read and may not be ATS-friendly.',
      fix: 'Keep layout clean and professional. Use standard fonts and minimal design elements.'
    },
    {
      id: 15,
      title: 'Generic File Name',
      mistake: 'Saving as "resume.pdf" or "myresume.docx"',
      why: 'Generic file names make it harder for recruiters to identify your document.',
      fix: 'Use a clear naming convention: "FirstName_LastName_Resume_2026.pdf"'
    }
  ];

  const relatedArticles = [
    {
      href: '/blog/how-to-write-resume',
      title: 'How to Write a Resume: Complete Guide',
      author: 'Sarah Johnson',
      readTime: '10 min'
    },
    {
      href: '/blog/resume-formatting-guide',
      title: 'Resume Formatting Guide',
      author: 'Lisa Thompson',
      readTime: '6 min'
    },
    {
      href: '/blog/action-verbs-for-resume',
      title: '200+ Action Verbs for Resume',
      author: 'David Kim',
      readTime: '7 min'
    },
    {
      href: '/blog/ats-resume-tips-2026',
      title: 'ATS Resume Tips for 2026',
      author: 'Michael Chen',
      readTime: '5 min'
    }
  ];

  return (
    <>
      <SEO 
        title="15 Resume Mistakes to Avoid in 2026 | Common CV Errors That Cost Interviews"
        description="Learn the most common resume mistakes that can affect your job applications. Avoid typos, poor formatting, irrelevant information, and other errors with our comprehensive guide."
        keywords="resume mistakes, CV errors, resume tips, common resume mistakes, avoid resume errors, resume writing mistakes, resume advice, CV mistakes"
        canonical="https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid"
        image="https://freeresumemaker.xyz/images/blog/resume-mistakes-to-avoid.jpg"
        type="article"
        publishedTime="2026-02-20"
        author="Emily Rodriguez"
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
          <span>&gt;</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>&gt;</span>
          <span style={{ color: '#0070f3' }}>Resume Mistakes to Avoid</span>
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
            15 Resume Mistakes That Can Affect Your Job Applications
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
                  src="/images/authors/emily-rodriguez.jpg" 
                  alt="Emily Rodriguez" 
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
                  ER
                </div>
              )}
              <span><strong>Emily Rodriguez</strong> | Resume Review Specialist</span>
            </div>
            <span>February 20, 2026</span>
            <span>7 min read</span>
            <span>Resume Tips</span>
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
              Small errors on your resume can impact your job search. This guide covers common mistakes 
              and how to address them to present your qualifications effectively.
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
            15 Mistakes (Click to jump):
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '10px'
          }}>
            {mistakes.map((item) => (
              <a 
                key={item.id}
                href={`#mistake-${item.id}`}
                style={{
                  color: '#0070f3',
                  textDecoration: 'none',
                  fontSize: '14px',
                  padding: '5px 0',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#004ba0'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                {item.id}. {item.title}
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
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>
            Avoiding common resume mistakes can help you present your qualifications more effectively. Here are 15 errors to watch for.
          </p>

          {/* Mistakes 1-15 */}
          <div style={{ marginBottom: '40px' }}>
            {mistakes.map((item) => (
              <section
                key={item.id}
                id={`mistake-${item.id}`}
                style={{
                  background: '#fff8e7',
                  borderRadius: '16px',
                  padding: '25px',
                  marginBottom: '20px',
                  borderLeft: '4px solid #f39c12',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <span style={{
                    background: '#f39c12',
                    color: 'white',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {item.id}
                  </span>
                  <h3 style={{ fontSize: '22px', margin: 0, color: '#333' }}>{item.title}</h3>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>The mistake:</strong> {item.mistake}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Why it matters:</strong> {item.why}
                </div>
                <div>
                  <strong>How to address it:</strong> {item.fix}
                </div>
              </section>
            ))}
          </div>

          {/* Bonus Checklist */}
          <section style={{
            background: '#f0f7ff',
            borderRadius: '16px',
            padding: '30px',
            margin: '40px 0',
            border: '1px solid #bbdefb'
          }}>
            <h2 style={{ fontSize: '26px', marginBottom: '20px', color: '#0070f3' }}>
              Quick Review Checklist
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {[
                'Proofread carefully for errors',
                'Professional email address',
                'Information relevant to the job',
                'Appropriate resume length',
                'Consistent formatting',
                'Keywords from job description',
                'Quantified achievements where possible',
                'Contact information is correct',
                'Professional file name',
                'Saved as PDF (unless otherwise requested)'
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'white',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <span style={{ color: '#2e7d32', fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '14px' }}>{item}</span>
                </div>
              ))}
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
                  q: 'What are the most common resume mistakes?',
                  a: 'Common resume mistakes include typos, unprofessional email addresses, irrelevant information, wrong resume length, poor formatting, generic content, missing keywords, and not quantifying achievements.'
                },
                {
                  q: 'How do I avoid typos on my resume?',
                  a: 'Proofread multiple times, read your resume aloud, use grammar-checking tools, and ask someone else to review it. Reading it backwards or printing it out can also help catch errors.'
                },
                {
                  q: 'How long should a resume be?',
                  a: 'Entry-level: 1 page. Mid-level (3-10 years): 1-2 pages. Senior (10+ years): 2 pages max. Academic CVs may be longer. Focus on relevant, recent experience.'
                },
                {
                  q: 'Should I include hobbies on my resume?',
                  a: 'Only include hobbies if they are relevant to the job or demonstrate valuable skills. Generally, it\'s better to use the space for professional experience and achievements.'
                },
                {
                  q: 'What file format should I use for my resume?',
                  a: 'PDF is generally recommended as it preserves formatting across devices. Use DOCX only if the employer specifically requests it.'
                },
                {
                  q: 'How important are keywords in a resume?',
                  a: 'Keywords from the job description can help your resume get past ATS screening. Include relevant terms naturally, especially in the skills and experience sections.'
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
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free Resume Review Checklist</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
              Download our printable checklist to review your resume for common mistakes before submitting applications.
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

          {/* Conclusion */}
          <section style={{ margin: '40px 0' }}>
            <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>
              Present Your Qualifications Effectively
            </h2>
            <p>
              Avoiding common resume mistakes can help you present your qualifications more clearly. Our resume builder 
              provides templates and guidance to help you create a professional resume.
            </p>
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
            ER
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>About Emily Rodriguez</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              Emily specializes in resume review and has helped professionals across various industries improve their 
              job applications. She focuses on practical advice to help candidates present their experience effectively.
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
              { name: 'Twitter', icon: '🐦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('15 Resume Mistakes to Avoid in 2026')}&url=https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid` },
              { name: 'LinkedIn', icon: '💼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid` },
              { name: 'Facebook', icon: '📘', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid` },
              { name: 'Email', icon: '📧', url: `mailto:?subject=${encodeURIComponent('Resume Mistakes to Avoid')}&body=${encodeURIComponent('Check out this guide: https://freeresumemaker.xyz/blog/resume-mistakes-to-avoid')}` }
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
            {relatedArticles.map((post, index) => (
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
                    By {post.author} • {post.readTime} read
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
            Create Your Resume
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
            Use our resume builder with templates designed to help you avoid common formatting mistakes.
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
          <p>Last updated: February 20, 2026 | © {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}