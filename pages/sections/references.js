import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ReferencesSectionGuide() {
  // Enhanced structured data: Article + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/references#article",
        "headline": "References on Resume: Should You Include Them? Complete Guide 2026",
        "description": "Complete guide to references on resumes. Learn when to include them, how to format a reference list, and the professional standard 'References Available Upon Request' for 2026 job applications.",
        "image": "https://freeresumemaker.xyz/images/references-guide-2026.jpg",
        "datePublished": "2026-01-28T08:00:00+00:00",
        "dateModified": "2026-03-24T10:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "url": "https://freeresumemaker.xyz"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://freeresumemaker.xyz/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://freeresumemaker.xyz/sections/references"
        },
        "keywords": "references on resume, professional references, reference list, available upon request, resume references, job references, reference format, who to use as references"
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/references#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I include references on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, standard practice in 2026 is to NOT include references on your resume. Use 'References available upon request' or provide them separately when asked. This saves valuable space and protects your references' privacy."
            }
          },
          {
            "@type": "Question",
            "name": "How many references should I have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most employers ask for 3 professional references. Academic positions may require 3-5 references, while executive and senior-level roles often need 4-6 references. Always have at least 3 prepared."
            }
          },
          {
            "@type": "Question",
            "name": "Who should I choose as references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose former managers, supervisors, professors, or colleagues who can speak to your skills and work ethic. Always ask permission first and give them a heads-up when they might be contacted."
            }
          },
          {
            "@type": "Question",
            "name": "When should I provide references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Provide references only when requested by the employer. This typically happens late in the hiring process, after initial interviews and when you're a final candidate. Some applications may require them upfront—follow the instructions."
            }
          },
          {
            "@type": "Question",
            "name": "Should I use 'References available upon request' on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is optional in 2026. It's acceptable to include at the bottom of your resume, but not required. Many recruiters assume references are available. If you have limited space, omit it entirely."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/references#breadcrumb",
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "References Guide",
            "item": "https://freeresumemaker.xyz/sections/references"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "Should I include references on my resume?",
      a: "No, standard practice in 2026 is to NOT include references on your resume. Use 'References available upon request' or provide them separately when asked. This saves valuable space (1-2 pages max), protects your references' privacy, and follows modern hiring conventions."
    },
    {
      q: "How many references should I have?",
      a: "Most employers ask for 3 professional references. Academic positions typically require 3-5 references, while executive and senior-level roles often need 4-6 references. Always have at least 3 prepared, even if not immediately requested."
    },
    {
      q: "Who should I choose as references?",
      a: "Choose former managers or supervisors (best choice), current managers (with permission), professors or academic advisors, colleagues from significant projects, clients (for consultants/freelancers), or mentors who can speak to your growth. Always ask permission first."
    },
    {
      q: "When should I provide references?",
      a: "Provide references only when requested by the employer. This typically happens late in the hiring process, after initial interviews and when you're a final candidate. Some applications may require them upfront—always follow the specific application instructions."
    },
    {
      q: "Should I use 'References available upon request' on my resume?",
      a: "This is optional in 2026. It's acceptable to include at the bottom of your resume, but not required. Many recruiters assume references are available. If you have limited space, omit it entirely—it doesn't add value to your qualifications."
    },
    {
      q: "What information should I include for each reference?",
      a: "Include: Full name, job title, company/organization, professional email address, phone number, and a brief note on your relationship (e.g., 'Direct Manager, 2021-2023' or 'Thesis Advisor'). Ensure all contact information is current and verified."
    },
    {
      q: "Can I use a current manager as a reference?",
      a: "Yes, but always ask permission first. Some candidates prefer not to involve current managers until later in the process to avoid jeopardizing their current position. If concerned, use former managers or colleagues instead."
    },
    {
      q: "Should I include character references?",
      a: "Only for entry-level positions with limited professional experience. For most professional roles, use professional references who can speak to your work performance, skills, and accomplishments rather than personal character."
    }
  ];

  // Reference type guidelines
  const referenceTypes = [
    { type: "Former Manager/Supervisor", bestFor: "All professional roles", description: "Best choice—can speak directly to your work performance, skills, and achievements." },
    { type: "Current Manager", bestFor: "When you have permission", description: "Use with caution; ask permission first and consider timing in your job search." },
    { type: "Professor/Academic Advisor", bestFor: "Recent graduates, academic roles", description: "Excellent for entry-level candidates; can speak to your academic performance and potential." },
    { type: "Colleague/Peer", bestFor: "Team collaboration roles", description: "Good for showcasing teamwork, collaboration, and day-to-day work relationships." },
    { type: "Client", bestFor: "Consultants, freelancers, agencies", description: "Shows client satisfaction and project success; get written permission first." },
    { type: "Mentor", bestFor: "Career development roles", description: "Can speak to your growth, learning ability, and long-term potential." }
  ];

  // Situations requiring references
  const referenceSituations = [
    { situation: "Job application specifically requests references", action: "Include on separate page, not on main resume. Follow format instructions exactly." },
    { situation: "Academic applications (faculty, research)", action: "Usually required (3-5 references with full contact details). Provide as requested." },
    { situation: "Government positions", action: "Follow specific application instructions carefully—often require detailed reference forms." },
    { situation: "Executive/Senior-level roles", action: "Prepare 4-6 references; often contacted multiple times throughout process." },
    { situation: "Entry-level with limited experience", action: "Use 'References available' line at bottom; prepare academic and internship references." }
  ];

  return (
    <>
      <SEO 
        title="References on Resume: Should You Include Them? Complete Guide 2026 | FreeResumeMakers"
        description="Complete guide to references on resumes. Learn when to include them, how to format a reference list, and the professional standard 'References Available Upon Request' for 2026 job applications."
        keywords="references on resume, professional references, reference list, available upon request, resume references, job references, reference format, who to use as references"
        canonical="https://freeresumemaker.xyz/sections/references"
        type="article"
        publishedTime="2026-01-28T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/references" />
        <meta name="description" content="Learn the professional standard for references on resumes in 2026. When to include them, how to format a reference list, and best practices for choosing professional references." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: '#0070f3' }} aria-current="page">References Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            References on Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>📅 Updated: March 24, 2026</span>
            <span>⏱️ 8 min read</span>
            <span>👁️ 35,000+ readers</span>
            <span>⭐ 3-5 References Standard</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            The references section is one of the most misunderstood parts of resume writing. 
            <strong>78% of hiring managers prefer references provided upon request rather than on the resume</strong>. 
            Learn the professional standard for handling references in 2026 and when to provide them.
          </p>
        </header>

        {/* Table of Contents */}
        <div style={{
          background: '#f8f9fa',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: 0 }}>📚 Table of Contents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="#why-not" style={{ color: '#0070f3', textDecoration: 'none' }}>• Why Not Include References</a>
            <a href="#when-to-include" style={{ color: '#0070f3', textDecoration: 'none' }}>• When to Include</a>
            <a href="#how-to-format" style={{ color: '#0070f3', textDecoration: 'none' }}>• How to Format</a>
            <a href="#who-to-choose" style={{ color: '#0070f3', textDecoration: 'none' }}>• Who to Choose</a>
            <a href="#best-practices" style={{ color: '#0070f3', textDecoration: 'none' }}>• Best Practices</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>• FAQ</a>
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #fff3e0 0%, #ffe8cc 100%)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '40px',
          borderLeft: '6px solid #ff9800'
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>⭐ 2026 Standard Practice:</strong> Do NOT include references on your resume. 
            Use the phrase <strong>"References available upon request"</strong> or simply omit any reference mention entirely. 
            Provide a separate reference list only when explicitly requested by the employer—typically after initial interviews.
          </p>
        </div>

        {/* Why Not Include References Section */}
        <section id="why-not">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Why You Shouldn't Include References
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
            marginTop: '20px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>📄</div>
              <strong>Valuable Space</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Every line of your resume is valuable—use it for qualifications, achievements, and skills, not contact information that will be requested later.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔒</div>
              <strong>Privacy Protection</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Your references may not want their contact information shared widely. Protect their privacy by providing it only when necessary.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>⏰</div>
              <strong>Timing Matters</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Employers typically ask for references late in the process, not during initial screening. Providing them too early is unnecessary.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🤖</div>
              <strong>ATS Compatibility</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Contact information in the references section can confuse ATS parsing systems and may not align with standard resume formats.</p>
            </div>
          </div>
        </section>

        {/* When to Include Section */}
        <section id="when-to-include">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            When to Include References
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', width: '35%' }}>Situation</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Recommendation</th>
                  </tr>
              </thead>
              <tbody>
                {referenceSituations.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '14px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.situation}</td>
                    <td style={{ padding: '14px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Format Reference List Section */}
        <section id="how-to-format">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            How to Format a Reference List (Separate Page)
          </h2>
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '16px' }}>Standard Reference Format:</p>
            <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px dashed #ddd' }}>
                <strong>Dr. Jane Smith</strong><br/>
                Professor of Computer Science<br/>
                Stanford University<br/>
                jane.smith@stanford.edu<br/>
                (555) 123-4567<br/>
                <em style={{ color: '#0070f3' }}>Relationship: Thesis Advisor (2022-2024)</em>
              </div>
              
              <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px dashed #ddd' }}>
                <strong>John Doe</strong><br/>
                Senior Engineering Manager<br/>
                Google<br/>
                john.doe@google.com<br/>
                (555) 987-6543<br/>
                <em style={{ color: '#0070f3' }}>Relationship: Direct Manager (2021-2023)</em>
              </div>
              
              <div>
                <strong>Sarah Johnson</strong><br/>
                Lead Product Designer<br/>
                Microsoft<br/>
                sarah.johnson@microsoft.com<br/>
                (555) 456-7890<br/>
                <em style={{ color: '#0070f3' }}>Relationship: Cross-functional Project Lead (2022-2024)</em>
              </div>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
              Tip: Keep references on a separate document from your resume. Use the same header with your name and contact information for consistency.
            </p>
          </div>
        </section>

        {/* Who to Choose Section */}
        <section id="who-to-choose">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Who to Choose as References
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            {referenceTypes.map((ref, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#0070f3', fontSize: '18px' }}>{ref.type}</h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#2e7d32', fontWeight: '500' }}>Best for: {ref.bestFor}</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{ref.description}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #2e7d32' }}>
            <p style={{ margin: 0, fontSize: '15px' }}>
              <strong>✓ Pro Tip:</strong> Always ask permission before listing someone as a reference. 
              Give them a heads-up about the role you're applying for and what skills you'd like them to highlight. 
              Send a thank-you note after they help you!
            </p>
          </div>
        </section>

        {/* How Many References Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            How Many References to Prepare
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#0070f3' }}>3</div>
              <p style={{ margin: '8px 0 0 0', fontWeight: '600' }}>Standard Professional</p>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Most common request across industries</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#0070f3' }}>3-5</div>
              <p style={{ margin: '8px 0 0 0', fontWeight: '600' }}>Academic/Research</p>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Faculty, postdoc, and research positions</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#0070f3' }}>4-6</div>
              <p style={{ margin: '8px 0 0 0', fontWeight: '600' }}>Executive/Senior Level</p>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>C-suite, director, and VP roles</p>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section id="best-practices">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            Best Practices for References (2026)
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>✓ Ask permission first</strong> - Always confirm before listing someone as a reference</li>
              <li><strong>✓ Prepare your references</strong> - Share job description so they know what to highlight</li>
              <li><strong>✓ Keep them updated</strong> - Let them know when they might be contacted</li>
              <li><strong>✓ Thank them afterward</strong> - Send a thank-you note or small gift after they help you</li>
              <li><strong>✓ Verify contact info</strong> - Ensure emails and phone numbers are current before submitting</li>
              <li><strong>✓ Use professional emails</strong> - Work emails preferred over personal emails when possible</li>
              <li><strong>✓ Include relationship context</strong> - Briefly state how you know each reference</li>
            </ul>
          </div>
        </section>

        {/* "References Available Upon Request" Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            "References Available Upon Request"
          </h2>
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '30px' }}>
            <p>If you choose to include this line on your resume, place it at the very bottom:</p>
            <div style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px', 
              marginTop: '16px', 
              marginBottom: '16px',
              textAlign: 'center',
              border: '1px dashed #0070f3',
              fontStyle: 'italic'
            }}>
              "References available upon request"
            </div>
            <p>or simply</p>
            <div style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px', 
              marginTop: '16px',
              textAlign: 'center',
              border: '1px dashed #0070f3',
              fontStyle: 'italic'
            }}>
              "References available"
            </div>
            <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
              Note: This line is optional in 2026. Many recruiters assume references are available. If you need to save space, omit it entirely.
            </p>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            🤖 ATS-Friendly References Handling
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Do NOT include references on your main resume:</strong> Keep your resume focused on skills and achievements</li>
              <li><strong>Create a separate reference document:</strong> Have it ready but only submit when requested</li>
              <li><strong>Use consistent formatting:</strong> Match your resume header style for the reference page</li>
              <li><strong>Include full contact details:</strong> Name, title, company, email, phone, and relationship</li>
              <li><strong>Save as PDF:</strong> Submit reference list as a separate PDF file when requested</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ marginBottom: '40px', marginTop: '20px' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '24px', borderBottom: '1px solid #e9ecef', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#1a1a1a' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          marginTop: '50px'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
            Ready to Build Your Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Create a professional resume that follows 2026 standards.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '40px',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Build Your Resume Now →
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '50px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1a1a1a' }}>📚 Related Resume Guides</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/faq" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Resume FAQ →</Link>
            <Link href="/blog/how-to-write-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>How to Write a Resume →</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 →</Link>
            <Link href="/sections/summary" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Professional Summary Guide →</Link>
          </div>
        </div>
      </main>
    </>
  );
}