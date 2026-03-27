import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function HowToMakeResume() {
  // HowTo schema for step-by-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make a Professional Resume",
    "description": "A complete step-by-step guide to create a professional resume that lands interviews in 2026.",
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device"
      },
      {
        "@type": "HowToSupply",
        "name": "Internet connection"
      },
      {
        "@type": "HowToSupply",
        "name": "Your work history and education details"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose the Right Resume Format",
        "text": "Select from chronological, functional, or combination format based on your experience level and career goals.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Add Your Contact Information",
        "text": "Include your full name, professional email address, phone number, LinkedIn profile URL, and location.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Write a Compelling Professional Summary",
        "text": "Create a 3 to 4 sentence summary highlighting your experience, key skills, top achievements, and career objectives.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "List Your Work Experience with Achievements",
        "text": "Use the STAR method to write impactful bullet points with quantifiable achievements for each role.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Add Your Education Section",
        "text": "Include degrees earned, institution names, graduation dates, relevant coursework, and honors.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Highlight Your Skills",
        "text": "Categorize technical skills and soft skills relevant to your target role and industry.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Add Optional Sections That Stand Out",
        "text": "Include certifications, projects, languages, volunteer work, or awards as relevant to your career.",
        "position": 7
      }
    ]
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
        "name": "How to Make a Resume",
        "item": "https://freeresumemaker.xyz/how-to-make-resume"
      }
    ]
  };

  // Article schema for the guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Make a Professional Resume in 2026",
    "description": "A complete step-by-step guide to create a professional resume that gets interviews.",
    "author": {
      "@type": "Organization",
      "name": "Free Resume Builder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png"
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/how-to-make-resume"
    }
  };

  return (
    <>
      <SEO 
        title="How to Make a Resume in 2026: Complete Step-by-Step Guide | Free Templates"
        description="Learn how to make a professional resume that gets interviews. Includes 7 easy steps, free ATS-friendly templates, formatting tips, and examples for every section. Updated for 2026 hiring standards."
        keywords="how to make a resume 2026, create resume, resume writing guide, build resume, professional resume tips, resume step by step, resume format 2026, resume writing tutorial"
        canonical="https://freeresumemaker.xyz/how-to-make-resume"
        image="https://freeresumemaker.xyz/assets/guides/how-to-make-resume.jpg"
        type="article"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>How to Make a Resume</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            How to Make a Professional Resume in 2026
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            A complete step-by-step guide to create a resume that gets you interviews. 
            Follow these 7 simple steps to build your professional resume.
          </p>
        </div>

        {/* Quick Stats - Text only */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '50px',
          padding: '30px',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>7</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Simple Steps</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>10-15</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Minutes to Complete</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>ATS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Friendly Templates</div>
          </div>
        </div>

        {/* Step 1 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              1
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Choose the Right Resume Format
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              There are three main resume formats. Choose based on your experience:
            </p>
            <ul style={{ marginBottom: '20px', lineHeight: '1.8', color: '#444' }}>
              <li><strong>Chronological:</strong> Best for experienced professionals with consistent work history</li>
              <li><strong>Functional:</strong> Ideal for career changers or those with employment gaps</li>
              <li><strong>Combination:</strong> Perfect for those with strong skills and experience</li>
            </ul>
            <Link href="/templates" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              Browse templates by format â†’
            </Link>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              2
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Add Your Contact Information
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Always include:
            </p>
            <ul style={{ marginBottom: '20px', lineHeight: '1.8', color: '#444' }}>
              <li>Full Name (professional format)</li>
              <li>Professional Email (firstname.lastname@email.com)</li>
              <li>Phone Number with country code</li>
              <li>LinkedIn Profile (customized URL)</li>
              <li>Location (City, State or Country)</li>
              <li>Portfolio or GitHub (if relevant to your role)</li>
            </ul>
            <Link href="/sections/personal-info" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              Learn more about contact information â†’
            </Link>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              3
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Write a Compelling Professional Summary
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Your summary should be 3 to 4 sentences highlighting:
            </p>
            <ul style={{ marginBottom: '20px', lineHeight: '1.8', color: '#444' }}>
              <li>Years of experience and expertise</li>
              <li>Key skills and technical competencies</li>
              <li>Top achievements (quantified when possible)</li>
              <li>Career goals and what you are seeking</li>
            </ul>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: '#444', lineHeight: '1.6' }}>
                "Results-driven software engineer with 5+ years of experience in full-stack development. 
                Proven track record of building scalable applications serving 100,000+ users. Expert in React, 
                Node.js, and cloud architecture. Seeking to leverage technical expertise to drive innovation 
                at a fast-growing technology company."
              </p>
            </div>
            <Link href="/sections/summary" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              See more summary examples by industry â†’
            </Link>
          </div>
        </div>

        {/* Step 4 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              4
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              List Your Work Experience with Achievements
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Use the STAR method (Situation, Task, Action, Result) to write impactful bullet points:
            </p>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                <strong>Weak:</strong> "Responsible for managing social media accounts"<br/><br/>
                <strong>Strong:</strong> "Led social media strategy across 5 platforms, creating 50+ posts monthly that increased 
                engagement by 75% and grew followers from 10,000 to 50,000 in 6 months."
              </p>
            </div>
            <Link href="/sections/experience" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              Learn to write better experience bullets â†’
            </Link>
          </div>
        </div>

        {/* Step 5 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              5
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Add Your Education Section
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Include:
            </p>
            <ul style={{ marginBottom: '20px', lineHeight: '1.8', color: '#444' }}>
              <li>Degree name and field of study</li>
              <li>University or college name and location</li>
              <li>Graduation date (or expected date)</li>
              <li>GPA (if 3.5 or higher)</li>
              <li>Honors, awards, or relevant coursework</li>
            </ul>
            <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              Education section examples â†’
            </Link>
          </div>
        </div>

        {/* Step 6 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              6
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Highlight Your Skills
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Categorize your skills for better readability:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 600, color: '#1a1a1a' }}>Technical Skills</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                  <li>Programming languages (Python, JavaScript, Java)</li>
                  <li>Frameworks (React, Node.js, Django)</li>
                  <li>Tools (Git, Docker, AWS)</li>
                  <li>Software (Excel, Photoshop, Figma)</li>
                </ul>
              </div>
              <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 600, color: '#1a1a1a' }}>Soft Skills</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                  <li>Leadership and Team Management</li>
                  <li>Communication and Presentation</li>
                  <li>Problem Solving</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              See skills examples by industry â†’
            </Link>
          </div>
        </div>

        {/* Step 7 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              7
            </div>
            <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
              Add Optional Sections That Stand Out
            </h2>
          </div>
          <div style={{ paddingLeft: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Add these if relevant to your career:
            </p>
            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '8px',
              marginBottom: '20px',
              paddingLeft: '20px',
              lineHeight: '1.8',
              color: '#444'
            }}>
              <li>Certifications (PMP, AWS, CFA)</li>
              <li>Projects (GitHub, portfolio)</li>
              <li>Languages (include proficiency level)</li>
              <li>Volunteer Work</li>
              <li>Awards and Honors</li>
              <li>Publications</li>
              <li>Professional Memberships</li>
            </ul>
            <Link href="/sections" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>
              All resume sections guide â†’
            </Link>
          </div>
        </div>

        {/* Pro Tips Section - Text only */}
        <div style={{
          background: '#e3f2fd',
          padding: '32px',
          borderRadius: '20px',
          marginBottom: '50px',
          border: '1px solid #bbdefb'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '20px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Pro Tips for Resume Success
          </h2>
          <ul style={{ 
            lineHeight: '2', 
            margin: 0, 
            paddingLeft: '20px',
            color: '#444'
          }}>
            <li>Use keywords from the job description to pass ATS systems</li>
            <li>Quantify achievements with numbers, percentages, and metrics</li>
            <li>Keep your resume to 1 to 2 pages, focus on recent and relevant experience</li>
            <li>Use standard fonts like Arial, Calibri, or Helvetica</li>
            <li>Save as PDF to preserve formatting (unless specified otherwise)</li>
            <li>Proofread multiple times - one typo can cost you an interview</li>
            <li>Tailor your resume for each job application</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px' }}>
          <h2 style={{ 
            marginBottom: '20px',
            fontSize: '28px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Ready to Build Your Professional Resume?
          </h2>
          <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
            Use our free resume builder with 20+ ATS-friendly templates. No sign-up required.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Building Your Resume Now â†’
          </Link>
        </div>

        {/* Related Articles */}
        <div style={{ 
          marginTop: '60px', 
          padding: '32px', 
          background: '#f8fafc', 
          borderRadius: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            marginBottom: '20px', 
            fontSize: '20px',
            fontWeight: 600,
            color: '#1a1a1a'
          }}>
            More Resume Resources
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '12px'
          }}>
            <Link href="/blog/resume-formatting-guide" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Resume Formatting Guide â†’
            </Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none' }}>
              ATS Tips 2026 â†’
            </Link>
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none' }}>
              200+ Action Verbs â†’
            </Link>
            <Link href="/blog/resume-mistakes-to-avoid" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Common Mistakes to Avoid â†’
            </Link>
            <Link href="/blog/resume-sections-guide" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Complete Sections Guide â†’
            </Link>
            <Link href="/blog/ultimate-resume-guide-2026" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Ultimate Resume Guide 2026 â†’
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>Â© {new Date().getFullYear()} Free Resume Builder | Step-by-Step Resume Guide | 100% Free</p>
        </div>
      </div>
    </>
  );
}
