import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import SEO from '../components/SEO';

export default function ResumeBuilderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call - In production, this would save to localStorage
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSaving(false);
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
        "name": "Resume Builder Guide",
        "item": "https://freeresumemaker.xyz/resume-builder"
      }
    ]
  };

  // HowTo schema for step-by-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build a Professional Resume",
    "description": "Step-by-step guide to creating a professional, ATS-friendly resume that gets interviews.",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Template",
        "text": "Select from 20+ professionally designed, ATS-friendly templates optimized for different industries and career levels.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Add Personal Information",
        "text": "Include your full name, professional email address, phone number, location, and LinkedIn profile URL.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Write Professional Summary",
        "text": "Create a 3 to 4 sentence summary highlighting your key qualifications, experience, and career goals.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Showcase Work Experience",
        "text": "Use the STAR method to write impactful bullet points with quantifiable achievements for each role.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "List Education",
        "text": "Include degrees, institutions, graduation dates, relevant honors, and coursework.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Highlight Skills",
        "text": "Categorize technical and soft skills relevant to your target role and industry.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Add Optional Sections",
        "text": "Include certifications, projects, languages, volunteer work, or awards as relevant to your career.",
        "position": 7
      },
      {
        "@type": "HowToStep",
        "name": "Download PDF",
        "text": "Review your resume for accuracy and download as a professional PDF file.",
        "position": 8
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Resume Builder Guide 2026 - How to Create a Professional Resume | Step-by-Step Tutorial"
        description="Learn how to build a professional, ATS-friendly resume with our free step-by-step guide. Includes expert tips, examples for each section, and 20+ templates. Updated for 2026 hiring standards."
        keywords="resume builder online, free resume builder 2026, create resume online, build resume, resume maker, online resume creator, ATS friendly resume builder, how to make a resume"
        canonical="https://freeresumemaker.xyz/resume-builder"
        image="https://freeresumemaker.xyz/assets/og-resume-builder.jpg"
        type="article"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </Head>

      <main style={{ 
        maxWidth: '1000px', 
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
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Resume Builder Guide</span>
        </nav>

        {/* Loading State */}
        {isLoading ? (
          <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <LoadingSpinner 
              size="lg" 
              color="#0070f3" 
              text="Loading resume builder..." 
            />
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                marginBottom: '20px',
                color: '#1a1a1a',
                fontWeight: 700,
                lineHeight: '1.2'
              }}>
                How to Build a Winning Resume: Complete Step-by-Step Guide for 2026
              </h1>
              <p style={{
                fontSize: '18px',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Create a professional, ATS-friendly resume with our free builder. 
                Follow these expert tips to land more interviews. Updated for 2026 job market.
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
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>20+</div>
                <div style={{ fontSize: '14px', color: '#666' }}>ATS-Friendly Templates</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>5-10</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Minutes to Complete</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>Free</div>
                <div style={{ fontSize: '14px', color: '#666' }}>No Sign-Up Required</div>
              </div>
            </div>

            {/* Step 1 */}
            <section style={{ marginBottom: '60px' }}>
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
                  Choose the Right Template for Your Career
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Select from <strong>20+ professionally designed templates</strong> optimized for different industries and experience levels. All templates are ATS-friendly and ready for PDF download.
                </p>
                
                <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                  Template Categories
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                  gap: '12px', 
                  marginBottom: '20px' 
                }}>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <strong>Executive Templates</strong><br />
                    The Professional, The Executive, The Strategist, The Traditionalist
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <strong>Technology Templates</strong><br />
                    The Innovator, The Minimalist, The Code, The Engineer
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <strong>Academic Templates</strong><br />
                    The Scholar, The Scholar 2.0, The Composer
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <strong>Creative Templates</strong><br />
                    The Modernist, The Innovator 2.0, The Minimal
                  </div>
                </div>
                
                <Link href="/templates" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  Browse All 20+ Templates →
                </Link>
              </div>
            </section>

            {/* Step 2 */}
            <section style={{ marginBottom: '60px' }}>
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
                  Add Your Personal Information
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Start with your contact details. This section is the first thing recruiters see.
                </p>
                <ul style={{ marginBottom: '20px', lineHeight: '1.8', color: '#444', paddingLeft: '20px' }}>
                  <li><strong>Full Name</strong> - Use your legal name as it appears on official documents</li>
                  <li><strong>Professional Email</strong> - firstname.lastname@email.com</li>
                  <li><strong>Phone Number</strong> - Include country code for international applications</li>
                  <li><strong>Location</strong> - City and state or country is sufficient</li>
                  <li><strong>LinkedIn Profile</strong> - Customize your URL</li>
                  <li><strong>Portfolio or GitHub</strong> - Include if relevant to your role</li>
                </ul>
                <Link href="/sections/personal-info" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  Learn More About Contact Information →
                </Link>
              </div>
            </section>

            {/* Step 3 */}
            <section style={{ marginBottom: '60px' }}>
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
                  Write a Powerful Professional Summary
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Your summary should be 3 to 4 sentences highlighting your key qualifications and career goals.
                </p>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e9ecef' }}>
                  <p style={{ margin: 0, fontStyle: 'italic', color: '#444', lineHeight: '1.6' }}>
                    "Results-driven software engineer with 5+ years of experience in full-stack development. 
                    Proven track record of delivering scalable applications. Expert in React, Node.js, and cloud architecture. 
                    Seeking to leverage technical expertise to drive innovation at a fast-growing technology company."
                  </p>
                </div>
                <Link href="/sections/summary" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  More Summary Examples by Industry →
                </Link>
              </div>
            </section>

            {/* Step 4 */}
            <section style={{ marginBottom: '60px' }}>
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
                  Showcase Your Work Experience
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Use the STAR method to write impactful bullet points:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#444' }}>
                  <li><strong>S</strong>ituation - The context or challenge</li>
                  <li><strong>T</strong>ask - What needed to be done</li>
                  <li><strong>A</strong>ction - What you did</li>
                  <li><strong>R</strong>esult - The outcome (quantify it whenever possible)</li>
                </ul>
                
                <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', fontWeight: 600, color: '#1a1a1a' }}>
                  Weak Example
                </h3>
                <div style={{ background: '#fee2e2', padding: '16px', borderRadius: '12px', marginBottom: '15px', border: '1px solid #f5c6cb' }}>
                  "Responsible for managing social media accounts and creating content."
                </div>
                
                <h3 style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 600, color: '#1a1a1a' }}>
                  Strong Example
                </h3>
                <div style={{ background: '#d1fae5', padding: '16px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #a7f3d0' }}>
                  "Led social media strategy across 5 platforms, creating 50+ posts monthly that increased 
                  engagement by 75% and grew followers from 10,000 to 50,000 in 6 months."
                </div>
                
                <Link href="/sections/experience" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  Learn to Write Better Experience Bullets →
                </Link>
              </div>
            </section>

            {/* Step 5 */}
            <section style={{ marginBottom: '60px' }}>
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
                  List Your Education
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Include your degrees in reverse chronological order:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#444' }}>
                  <li>Degree name and field of study</li>
                  <li>University or college name and location</li>
                  <li>Graduation date (or expected date)</li>
                  <li>GPA (if 3.5 or higher)</li>
                  <li>Honors, awards, and relevant coursework</li>
                </ul>
                <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  Education Section Examples →
                </Link>
              </div>
            </section>

            {/* Step 6 */}
            <section style={{ marginBottom: '60px' }}>
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
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#1a1a1a' }}>Technical Skills</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                      <li>Programming languages (Python, JavaScript, Java)</li>
                      <li>Frameworks (React, Node.js, Django)</li>
                      <li>Tools (Git, Docker, AWS)</li>
                      <li>Software (Excel, Photoshop, Figma)</li>
                    </ul>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#1a1a1a' }}>Soft Skills</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                      <li>Leadership and Team Management</li>
                      <li>Communication and Presentation</li>
                      <li>Problem Solving</li>
                      <li>Project Management</li>
                    </ul>
                  </div>
                </div>
                <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  Skills Examples by Industry →
                </Link>
              </div>
            </section>

            {/* Step 7 */}
            <section style={{ marginBottom: '60px' }}>
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
                  Add Optional Sections
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  These sections can help your resume stand out:
                </p>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  {[
                    'Certifications (PMP, AWS, CFA)',
                    'Projects (GitHub, portfolio)',
                    'Languages (include proficiency level)',
                    'Publications (academic or professional)',
                    'Awards and Honors',
                    'Volunteer Work',
                    'Professional Memberships'
                  ].map((item, idx) => (
                    <div key={idx} style={{ color: '#666', fontSize: '0.9rem' }}>
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/sections" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>
                  All Resume Sections Guide →
                </Link>
              </div>
            </section>

            {/* Step 8 */}
            <section style={{ marginBottom: '60px' }}>
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
                  8
                </div>
                <h2 style={{ fontSize: '28px', margin: 0, color: '#1a1a1a' }}>
                  Preview and Download PDF
                </h2>
              </div>
              <div style={{ paddingLeft: '64px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
                  Before downloading, review these final details:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#444' }}>
                  <li>Proofread for typos and grammatical errors</li>
                  <li>Check formatting consistency throughout</li>
                  <li>Verify all dates are accurate</li>
                  <li>Ensure contact information is correct</li>
                  <li>Save as PDF (preferred format for ATS systems)</li>
                </ul>
              </div>
            </section>

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
              <ul style={{ lineHeight: '1.9', margin: 0, paddingLeft: '20px', color: '#444' }}>
                <li><strong>Tailor your resume</strong> for each job application - use keywords from the job description</li>
                <li><strong>Quantify achievements</strong> whenever possible - use numbers, percentages, and metrics</li>
                <li><strong>Keep it concise</strong> - 1 to 2 pages maximum, focus on recent and relevant experience</li>
                <li><strong>Use action verbs</strong> - led, developed, achieved, managed, created, improved</li>
                <li><strong>ATS optimization</strong> - use standard headings and avoid complex formatting like tables</li>
                <li><strong>Proofread twice</strong> - consider asking a friend or using a proofreading tool</li>
              </ul>
            </div>

            {/* Related Resources */}
            <div style={{ 
              marginBottom: '50px', 
              padding: '32px', 
              background: '#f8fafc', 
              borderRadius: '20px',
              border: '1px solid #e9ecef'
            }}>
              <h2 style={{ 
                marginBottom: '20px',
                fontSize: '20px',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                Resume Resources for 2026
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                gap: '12px' 
              }}>
                <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  200+ Action Verbs for Resume →
                </Link>
                <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  ATS Resume Tips 2026 →
                </Link>
                <Link href="/blog/resume-formatting-guide" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  Resume Formatting Guide →
                </Link>
                <Link href="/blog/resume-mistakes-to-avoid" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  Common Resume Mistakes →
                </Link>
                <Link href="/professions/software-engineering" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  Technology Resume Examples →
                </Link>
                <Link href="/blog/ultimate-resume-guide-2026" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  Complete Resume Guide 2026 →
                </Link>
              </div>
            </div>

            {/* Interactive Demo Section - Text only */}
            <div style={{ 
              background: '#f0f9ff', 
              padding: '40px', 
              borderRadius: '20px', 
              marginBottom: '50px',
              border: '1px solid #bae6fd'
            }}>
              <h2 style={{ 
                fontSize: '24px', 
                marginBottom: '20px',
                fontWeight: 700,
                color: '#1a1a1a'
              }}>
                Try Our Free Resume Builder
              </h2>
              <p style={{ marginBottom: '25px', color: '#444', lineHeight: '1.6' }}>
                Experience how easy it is to create a professional resume. Choose a template, fill in your details, and download as PDF.
              </p>
              
              {/* Button with inline spinner - text only */}
              <button 
                onClick={handleSave}
                disabled={isSaving}
                style={{
                  padding: '12px 28px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: isSaving ? 'not-allowed' : 'pointer',
                  opacity: isSaving ? 0.7 : 1,
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {isSaving ? (
                  <>
                    <LoadingSpinner size="sm" color="#ffffff" text="" />
                    Saving Progress...
                  </>
                ) : (
                  'Save Your Progress (Demo)'
                )}
              </button>
              
              <p style={{ marginTop: '20px', fontSize: '13px', color: '#666' }}>
                Note: Data is saved locally in your browser. No account required.
              </p>
            </div>

            {/* CTA - Text only */}
            <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px' }}>
              <h2 style={{ 
                marginBottom: '20px',
                fontSize: '28px',
                fontWeight: 700,
                color: '#1a1a1a'
              }}>
                Ready to Build Your Resume?
              </h2>
              <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
                Start creating your professional, ATS-friendly resume today. Free and no sign-up required.
              </p>
              <Link 
                href="/editor"
                style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  boxShadow: '0 4px 6px rgba(0,112,243,0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Start Building Your Resume Now →
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}