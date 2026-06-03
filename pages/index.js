import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [activeFaq, setActiveFaq] = useState(null);

  // Enhanced schema markup for search engines
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Resume Maker",
    "description": "Create professional ATS-friendly resumes with our free resume builder. No sign up required. 20+ templates, instant PDF download.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "ATS-friendly templates, Real-time preview, PDF download, No sign up required, Mobile responsive"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this resume builder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our resume builder is 100% free with no hidden charges. You can create, edit, and download your resume without any payment or sign-up requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are your resume templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our templates are designed to be ATS-friendly, using clean formatting, standard fonts, and proper section headings that Applicant Tracking Systems can easily parse."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account required. You can start building your resume immediately. Your information stays in your browser and is cleared when you close the tab."
        }
      }
    ]
  };

  const templatesList = [
    { num: 1, name: 'The Professional', tag: 'Corporate', desc: 'Obsidian styling with experience type badges.' },
    { num: 2, name: 'The Innovator', tag: 'Creative/Tech', desc: 'Timeline layout with unique visual connectors.' },
    { num: 3, name: 'The Executive', tag: 'Executive', desc: 'Polished serif typography for leadership roles.' },
    { num: 4, name: 'The Strategist', tag: 'Modern', desc: 'High visual-density structured design.' },
    { num: 5, name: 'The Minimalist', tag: 'Minimal', desc: 'Ultra clean layout focusing purely on core text.' },
    { num: 6, name: 'The Architect', tag: 'Tech/Dev', desc: 'Monochrome lines perfect for engineering.' },
  ];

  return (
    <>
      <SEO 
        title="Free Resume Maker - Create Professional Resumes Online in Minutes"
        description="Build professional, ATS-friendly resumes instantly with our free resume builder. No sign-up required. Choose from 20+ templates, edit in real-time, and download as PDF. Trusted by job seekers worldwide."
        keywords="free resume builder, online resume maker, ATS friendly resume, professional resume templates, CV builder, resume creator, job application tool, free CV maker"
        canonical="https://freeresumemaker.xyz/"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* Main Container */}
      <div style={{ background: '#fafcff', overflow: 'hidden' }}>
        
        {/* HERO SECTION - Deep Sleek Dark Backdrop with glowing overlays */}
        <section style={{
          background: 'radial-gradient(circle at 80% 20%, #1e293b 0%, #030712 100%)',
          color: 'white',
          padding: '100px 24px 80px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle gradient light flares */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'rgba(0, 112, 243, 0.15)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            top: '-100px',
            right: '-50px',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'rgba(121, 40, 202, 0.12)',
            filter: 'blur(80px)',
            borderRadius: '50%',
            bottom: '-50px',
            left: '-50px',
            pointerEvents: 'none'
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center'
          }} className="animate-slide-up">
            
            {/* Hero Left */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#60a5fa',
                marginBottom: '24px'
              }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></span>
                100% Free Forever • No Sign Up Required
              </div>
              
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                lineHeight: '1.1',
                fontWeight: 900,
                marginBottom: '20px',
                letterSpacing: '-1.5px'
              }}>
                Build a <span className="gradient-text-primary">Billion-Dollar</span> Resume in Minutes
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: '#94a3b8',
                maxWidth: '650px',
                lineHeight: '1.6',
                marginBottom: '40px'
              }}>
                Create a high-impact, ATS-optimized professional resume. Choose from our designer templates, customize in real-time, and download a pixel-perfect PDF instantly.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/editor" className="premium-btn-primary pulse-glow" style={{ fontSize: '18px', padding: '16px 36px' }}>
                  Create My Resume
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link href="/templates" className="premium-btn-secondary" style={{ fontSize: '18px', padding: '16px 36px' }}>
                  Browse Templates
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>98%</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>ATS Pass Rate</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>20+</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>Modern Templates</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Instant</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>PDF Generation</div>
                </div>
              </div>
            </div>

            {/* Hero Right - Floating Mockup Card */}
            <div className="animate-float" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="dark-mode-card glow-effect" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '24px',
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%' }}></span>
                    <span style={{ width: '12px', height: '12px', background: '#eab308', borderRadius: '50%' }}></span>
                    <span style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%' }}></span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>editor.js</span>
                </div>
                
                {/* Simulated Editor Blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ height: '8px', width: '40%', background: '#60a5fa', borderRadius: '4px', marginBottom: '8px' }}></div>
                    <div style={{ height: '12px', width: '80%', background: '#fff', opacity: 0.8, borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ height: '8px', width: '50%', background: '#a78bfa', borderRadius: '4px', marginBottom: '8px' }}></div>
                    <div style={{ height: '12px', width: '90%', background: '#fff', opacity: 0.8, borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ height: '8px', width: '30%', background: '#34d399', borderRadius: '4px', marginBottom: '8px' }}></div>
                    <div style={{ height: '12px', width: '70%', background: '#fff', opacity: 0.8, borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    color: '#60a5fa',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    <span>⚡ Live Rendering...</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STATS STRIP */}
        <section style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: '24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span><svg style={{ width: '24px', height: '24px', color: '#0070f3', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
              <span style={{ color: '#334155', fontWeight: 600 }}>Designed by Recruiting Experts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span><svg style={{ width: '24px', height: '24px', color: '#0070f3', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <span style={{ color: '#334155', fontWeight: 600 }}>100% Privacy - Local Browser Storage</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span><svg style={{ width: '24px', height: '24px', color: '#0070f3', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"></path></svg></span>
              <span style={{ color: '#334155', fontWeight: 600 }}>Highest 8K PDF Export Quality</span>
            </div>
          </div>
        </section>

        {/* FEATURES GRID - Lifts on Hover with custom SVGs */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Engineered for Career Success
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              Every feature is optimized to bypass modern screening technologies and make recruiters take notice.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {/* Feature 1 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#eff6ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 11 2 2 4-4"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>ATS-Friendly Blueprints</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                All templates pass through automated resume readers with high scores, using optimized header systems, clear structures, and standard font categories.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#faf5ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7c3aed',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>Absolute Privacy</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Your data stays strictly in your browser. We do not store, view, or sell any of your personal details, and the workspace is wiped immediately upon tab closure.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#ecfdf5',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>100% Free Forever</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                No paywalls, premium templates, hidden billing, or watermarks. Every builder feature, template, and PDF download option is completely open to everyone.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#fef3c7',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>Fully Mobile Responsive</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Construct, update, and manage your CV directly on the go. The entire editor interface collapses elegantly onto smartphone layouts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#fff1f2',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f43f5e',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>20+ Curated Layouts</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Choose layouts styled for Software Engineers, Executives, Artists, Academics, Healthcare Specialists, or Managers. Swap templates in one click.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="premium-card">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#f0fdfa',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d9488',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>High-Speed PDF Exports</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Trigger professional print-quality PDF downloads natively. Preserves design fidelity, scale bounds, and text parameters perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background: '#f8fafc', padding: '80px 24px', borderTop: '1px solid #edf2f7', borderBottom: '1px solid #edf2f7' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Three Steps to Your Dream Interview
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#475569' }}>
                Building a modern professional resume has never been this simple.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', position: 'relative' }}>
              
              {/* Step 1 */}
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(59, 130, 246, 0.2)'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Pick Your Template</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Explore our selection of 20+ expert-verified ATS templates. Select the one matching your professional tier.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(124, 58, 237, 0.2)'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Fill in Your Story</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Input your career background, education layers, projects, and skills. Check layout changes in real time.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #059669, #34d399)',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(5, 150, 105, 0.2)'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Download Your PDF</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Hit 'Download PDF' and get a clean, professionally formatted file ready to send to hiring managers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* TEMPLATES PREVIEW GRID */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Stunning Designer Layouts
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              Preview our premium blueprints. Swappable seamlessly at any point in your resume build.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}>
            {templatesList.map((tpl) => (
              <div key={tpl.num} className="premium-card" style={{ padding: '16px' }}>
                <div style={{
                  background: '#f1f5f9',
                  borderRadius: '12px',
                  padding: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e2e8f0',
                  marginBottom: '20px'
                }}>
                  <img 
                    src={`/assets/template-previews/template-${tpl.num}.png`}
                    alt={`${tpl.name} layout preview`}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#0070f3',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}>
                    {tpl.tag}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '8px' }}>{tpl.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>{tpl.desc}</p>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link href={`/templates/${tpl.num}`} style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: '#334155',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    Info & Limits
                  </Link>
                  <Link href={`/editor?template=${tpl.num}`} style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    background: '#0070f3',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
                    Use Template
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/templates" style={{
              color: '#0070f3',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              View All 20+ Templates
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>

        {/* CAREER ADVICE BLOG HIGHLIGHTS */}
        <section style={{ background: '#f8fafc', padding: '80px 24px', borderTop: '1px solid #edf2f7', borderBottom: '1px solid #edf2f7' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Expert Career Advice
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#475569' }}>
                Explore structural strategies, formatting tips, and templates designed to land jobs.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {[
                { title: 'How to Write a Resume', link: '/blog/how-to-write-resume', tag: 'Guide', readTime: '5 min read' },
                { title: 'ATS Resume Tips for 2026', link: '/blog/ats-resume-tips-2026', tag: 'Strategy', readTime: '7 min read' },
                { title: 'Resume Mistakes to Avoid', link: '/blog/resume-mistakes-to-avoid', tag: 'Mistakes', readTime: '4 min read' },
                { title: 'Action Verbs for Resume', link: '/blog/action-verbs-for-resume', tag: 'Writing', readTime: '6 min read' }
              ].map((post, idx) => (
                <Link key={idx} href={post.link} style={{ textDecoration: 'none' }}>
                  <div className="premium-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{
                          background: '#eff6ff',
                          color: '#3b82f6',
                          padding: '4px 12px',
                          borderRadius: '50px',
                          fontSize: '12px',
                          fontWeight: 600
                        }}>{post.tag}</span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{post.readTime}</span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px', lineHeight: '1.4' }}>{post.title}</h3>
                      <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                        Learn structural guidelines and writing heuristics to pass automatic filters.
                      </p>
                    </div>
                    <span style={{
                      color: '#0070f3',
                      fontWeight: 600,
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/blog" style={{
                color: '#0070f3',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Explore All Articles
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Interactive Dropdown */}
        <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569' }}>
              Got questions? We have answers.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "Is this resume builder really 100% free?",
                a: "Absolutely. Our builder is fully open-source and free to use. There are no hidden subscription charges, watermark fees, or premium tiers. You can download unlimited resumes without paying a single cent."
              },
              {
                q: "How does the privacy mechanism work?",
                a: "We prioritize user privacy. We do not store any of your data on external databases. All fields you fill are stored directly inside your browser's local sandbox (localStorage). When you close the builder tab, your session is secure, and clearing browser cookies deletes your data completely."
              },
              {
                q: "What makes these templates ATS-friendly?",
                a: "Applicant Tracking Systems read resumes by converting layout files into text layers. Complex columns, graphics, or non-standard heading tags can disrupt this parsing. Our templates utilize standard layouts, clear text hierarchies, and parsing paths to guarantee that ATS bots read your details with maximum score."
              },
              {
                q: "Can I download my resume as a PDF file?",
                a: "Yes. Once you complete filling in your details, our PDF rendering engine structures your resume and triggers a pixel-perfect, printer-friendly PDF file download directly onto your device."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div style={{
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: '#0f172a',
                  userSelect: 'none'
                }}>
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: '18px',
                    transition: 'transform 0.2s',
                    transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>
                    ＋
                  </span>
                </div>
                <div style={{
                  maxHeight: activeFaq === index ? '300px' : '0',
                  opacity: activeFaq === index ? 1 : 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: activeFaq === index ? '0 24px 20px' : '0 24px',
                  color: '#475569',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA HERO SECTION */}
        <section style={{ padding: '0 24px 80px' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'radial-gradient(circle at 10% 20%, #1e293b 0%, #030712 100%)',
            borderRadius: '32px',
            padding: '80px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'rgba(0, 112, 243, 0.12)',
              filter: 'blur(80px)',
              borderRadius: '50%',
              top: '-150px',
              right: '-150px',
              pointerEvents: 'none'
            }} />
            
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px', letterSpacing: '-1px' }}>
              Launch Your Career Today
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
              Join thousands of job seekers using our resume creator to land interviews at top companies. Free, fast, and entirely secure.
            </p>
            
            <Link href="/editor" className="premium-btn-primary pulse-glow" style={{ fontSize: '18px', padding: '16px 40px' }}>
              Start Building Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}