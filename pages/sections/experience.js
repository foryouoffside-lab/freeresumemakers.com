import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ExperienceSectionGuide() {
  // Enhanced structured data: Article + HowTo + BreadcrumbList + FAQPage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemakers.com/sections/experience#article",
        "headline": "How to Write Work Experience on Resume: Complete Guide with Examples 2026",
        "description": "Expert guide on writing work experience on your resume. Learn the STAR method, powerful action verbs, and how to quantify achievements with real examples. Land more interviews with a compelling experience section.",
        "image": "https://freeresumemakers.com/images/work-experience-guide-2026.jpg",
        "datePublished": "2026-01-05T08:00:00+00:00",
        "dateModified": "2026-03-23T10:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "url": "https://freeresumemakers.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://freeresumemakers.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://freeresumemakers.com/sections/experience"
        },
        "keywords": "work experience resume, resume experience section, job history resume, employment history, achievements resume, STAR method resume, how to write work experience"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemakers.com/sections/experience#howto",
        "name": "How to Write Work Experience on Your Resume",
        "description": "Step-by-step guide to writing compelling work experience bullet points that showcase your achievements and land interviews.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "totalTime": "PT15M",
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "List of your past jobs and achievements"
          },
          {
            "@type": "HowToSupply",
            "name": "Job description for your target role"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Use the STAR Method",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Structure each bullet point using Situation, Task, Action, Result format. This creates compelling, achievement-focused descriptions."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Start with Powerful Action Verbs",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Begin each bullet with strong action verbs like Led, Managed, Achieved, Created, Optimized, or Transformed to grab attention."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Quantify Your Achievements",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Use numbers, percentages, dollar amounts, and timeframes to demonstrate your impact. Quantified achievements increase interview rates by 40%."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Focus on Accomplishments, Not Duties",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Instead of listing job responsibilities, highlight specific achievements and results you delivered in each role."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Tailor to the Job Description",
            "position": 5,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Customize your experience section for each application by incorporating keywords and relevant achievements from the job posting."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemakers.com/sections/experience#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freeresumemakers.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resume Sections",
            "item": "https://freeresumemakers.com/sections"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Work Experience Guide",
            "item": "https://freeresumemakers.com/sections/experience"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemakers.com/sections/experience#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many years of work experience should I include on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically include 10-15 years of relevant work experience. For older roles, summarize or omit them to avoid age discrimination and keep your resume focused on recent, relevant experience."
            }
          },
          {
            "@type": "Question",
            "name": "How many bullet points per job should I include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use 4-6 bullet points for your current or most recent role, 3-4 for previous roles, and 2-3 for older positions. Focus on quality over quantity—each bullet should demonstrate a significant achievement."
            }
          },
          {
            "@type": "Question",
            "name": "How do I write work experience with no experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Include internships, volunteer work, academic projects, and extracurricular activities. Focus on transferable skills and achievements. Use the same STAR method and quantify results where possible."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include work experience that's not relevant to the job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Focus on relevant experience. If you have unrelated jobs, you can omit them or briefly summarize to avoid gaps. Highlight transferable skills like customer service, leadership, or project management."
            }
          }
        ]
      }
    ]
  };

  // FAQ data for visual display
  const faqItems = [
    {
      q: "How many years of work experience should I include on my resume?",
      a: "Typically include 10-15 years of relevant work experience. For older roles (beyond 15 years), summarize them briefly or omit them to keep your resume focused on recent, relevant experience. This also helps avoid age discrimination in hiring."
    },
    {
      q: "How many bullet points per job should I include?",
      a: "Use 4-6 bullet points for your current or most recent role, 3-4 for previous roles, and 2-3 for older positions. Focus on quality over quantity—each bullet should demonstrate a significant, quantifiable achievement rather than routine duties."
    },
    {
      q: "How do I write work experience with no experience?",
      a: "Include internships, volunteer work, academic projects, extracurricular leadership, and freelance work. Focus on transferable skills and use the same STAR method to structure achievements. Quantify results where possible (e.g., 'Organized event with 200+ attendees')."
    },
    {
      q: "Should I include work experience that's not relevant to the job?",
      a: "Focus on relevant experience. If you have unrelated jobs, you can omit them or briefly summarize to avoid employment gaps. Highlight transferable skills like customer service, leadership, or project management that apply to your target role."
    },
    {
      q: "What's the best format for work experience dates?",
      a: "Use consistent formatting throughout your resume. Options include: 'January 2022 - Present,' 'Jan 2022 - Present,' or '2022 - Present.' For current roles, use 'Present' rather than the current date. For short-term roles, include months for clarity."
    },
    {
      q: "How do I explain employment gaps?",
      a: "Be honest and focus on productive activities during the gap. You can list 'Career Break: Family Care' or 'Professional Development: Completed Certification in Digital Marketing.' In your cover letter, briefly explain the gap positively and emphasize your readiness to return."
    }
  ];

  // Action verbs categorized
  const actionVerbCategories = [
    { title: "Leadership & Management", verbs: "Led, Managed, Directed, Supervised, Coordinated, Orchestrated, Headed, Oversaw, Guided, Mentored" },
    { title: "Achievement & Results", verbs: "Achieved, Exceeded, Generated, Increased, Reduced, Delivered, Saved, Boosted, Improved, Accelerated" },
    { title: "Creation & Development", verbs: "Created, Developed, Designed, Built, Launched, Established, Founded, Implemented, Pioneered, Engineered" },
    { title: "Improvement & Optimization", verbs: "Improved, Optimized, Streamlined, Enhanced, Upgraded, Revamped, Transformed, Restructured, Modernized, Automated" },
    { title: "Communication & Collaboration", verbs: "Presented, Negotiated, Collaborated, Facilitated, Advised, Persuaded, Mediated, Articulated, Authored, Corresponded" },
    { title: "Analysis & Strategy", verbs: "Analyzed, Strategized, Forecasted, Evaluated, Assessed, Researched, Audited, Diagnosed, Synthesized, Quantified" }
  ];

  // Before vs After examples with detailed explanations
  const beforeAfterExamples = [
    {
      before: "Responsible for managing social media accounts and creating content.",
      after: "Led social media strategy across 5 platforms, creating 50+ posts monthly that increased engagement by 75% and grew followers from 10K to 50K in 6 months."
    },
    {
      before: "Handled customer service calls and resolved issues.",
      after: "Resolved 50+ customer issues daily, maintaining 98% satisfaction rating and reducing average call time by 25% through improved troubleshooting protocols."
    },
    {
      before: "Worked on sales team and helped grow revenue.",
      after: "Generated $2.3M in new revenue (38% YoY growth) by developing key accounts and implementing data-driven sales strategies across the Northeast region."
    },
    {
      before: "Managed a team of developers.",
      after: "Led team of 8 developers through complete product redesign, delivering 3 major releases ahead of schedule and reducing bug reports by 45%."
    }
  ];

  // Complete experience examples by role type
  const completeExamples = [
    {
      title: "Marketing Professional",
      role: "Senior Marketing Manager | TechCorp Solutions | 2021 - Present",
      bullets: [
        "Led digital marketing team of 8, increasing annual revenue by 45% ($2.5M) through data-driven multi-channel campaigns",
        "Launched new product line generating $1.2M in first quarter, exceeding targets by 30% and capturing 12% market share",
        "Optimized Google Ads campaigns reducing CPA by 40% while maintaining volume, saving $200K annually",
        "Developed content strategy that grew organic traffic from 50K to 200K monthly visitors (300% increase)",
        "Implemented marketing automation platform, improving lead nurturing efficiency by 60%"
      ]
    },
    {
      title: "Software Engineer",
      role: "Senior Software Engineer | InnovateTech | 2022 - Present",
      bullets: [
        "Architected and deployed microservices architecture serving 500K+ daily users with 99.99% uptime",
        "Reduced API response time by 65% through database optimization and caching strategies",
        "Led migration of legacy system to cloud infrastructure, cutting operational costs by 35% ($150K/year)",
        "Mentored 4 junior engineers, conducting code reviews and technical workshops"
      ]
    },
    {
      title: "Sales Professional",
      role: "Regional Sales Manager | Global Enterprises | 2020 - Present",
      bullets: [
        "Exceeded annual quota by 45% ($3.2M) for 3 consecutive years, ranking top 5% nationally",
        "Expanded territory revenue from $4M to $8.5M (112% growth) through strategic account management",
        "Developed and trained 12 sales representatives, increasing team performance by 35%",
        "Negotiated 7-figure enterprise contracts with 3 Fortune 500 companies"
      ]
    },
    {
      title: "Customer Service",
      role: "Customer Success Manager | ServiceFirst | 2021 - Present",
      bullets: [
        "Managed portfolio of 150+ enterprise accounts with 98% retention rate ($4.5M ARR)",
        "Reduced average response time from 4 hours to 30 minutes by implementing new ticketing system",
        "Achieved CSAT score of 4.8/5 across 1,200+ customer reviews",
        "Created knowledge base reducing support tickets by 25% and improving self-service adoption"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="How to Write Work Experience on Resume: Complete Guide with Examples 2026 | FreeResumeMakers"
        description="Expert guide on writing work experience on your resume. Learn the STAR method, powerful action verbs, and how to quantify achievements with real examples. Improve your job applications and land more interviews."
        keywords="work experience resume, resume experience section, job history resume, employment history, achievements resume, STAR method resume, how to write work experience, resume bullet points"
        canonical="https://freeresumemakers.com/sections/experience"
        type="article"
        publishedTime="2026-01-05T08:00:00+00:00"
        modifiedTime="2026-03-23T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemakers.com/sections/experience" />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Work Experience Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to Write Work Experience on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>📅 Updated: March 23, 2026</span>
            <span>⏱️ 12 min read</span>
            <span>👁️ 45,000+ readers</span>
            <span>📊 40% More Interviews</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            Your work experience section is the most important part of your resume—it's where you prove your value to employers. 
            <strong>Resumes with quantified achievements receive 40% more interview calls</strong> than those listing only job duties. 
            Learn how to write compelling bullet points that showcase your accomplishments and land interviews.
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
          <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: 0 }}>📖 Table of Contents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="#star-method" style={{ color: '#0070f3', textDecoration: 'none' }}>• STAR Method</a>
            <a href="#action-verbs" style={{ color: '#0070f3', textDecoration: 'none' }}>• Action Verbs</a>
            <a href="#formula" style={{ color: '#0070f3', textDecoration: 'none' }}>• The Formula</a>
            <a href="#before-after" style={{ color: '#0070f3', textDecoration: 'none' }}>• Before vs After</a>
            <a href="#examples" style={{ color: '#0070f3', textDecoration: 'none' }}>• Complete Examples</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>• FAQ</a>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #f0f7ff 100%)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#0070f3' }}>6-7</div>
            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '8px' }}>Seconds recruiters spend scanning</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Make every word count</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #f0f9f0 100%)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#2e7d32' }}>40%</div>
            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '8px' }}>More interviews with quantified achievements</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Use numbers, percentages, and metrics</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#ed6c02' }}>3-6</div>
            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '8px' }}>Bullet points per role</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Focus on quality over quantity</div>
          </div>
        </div>

        {/* STAR Method Section */}
        <section id="star-method">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            The STAR Method: Framework for Powerful Bullet Points
          </h2>
          <p style={{ marginBottom: '20px' }}>The STAR method (Situation, Task, Action, Result) helps you structure achievement-focused bullet points that tell a compelling story:</p>
          
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', width: '15%' }}>Letter</th>
                  <th style={{ padding: '14px', textAlign: 'left', width: '20%' }}>Meaning</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', background: '#f0f7ff' }}>S</td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>Situation</td>
                  <td style={{ padding: '12px' }}>Customer satisfaction scores were declining due to slow response times</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', background: '#f0f7ff' }}>T</td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>Task</td>
                  <td style={{ padding: '12px' }}>Needed to improve response times by 50% within 3 months</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', background: '#f0f7ff' }}>A</td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>Action</td>
                  <td style={{ padding: '12px' }}>Implemented new CRM system, automated workflows, and trained 20 team members</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', background: '#f0f7ff' }}>R</td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>Result</td>
                  <td style={{ padding: '12px' }}>Improved satisfaction by 40%, reduced response time by 65%, saved $100K annually</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>
              <strong>💡 Pro Tip:</strong> Not every bullet needs to include all four STAR elements. Focus on Action and Result—these are what employers care about most. 
              Combine them with quantifiable metrics for maximum impact.
            </p>
          </div>
        </section>

        {/* The Formula Section */}
        <section id="formula">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            The Winning Formula
          </h2>
          <div style={{ 
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffe8cc 100%)', 
            padding: '24px', 
            borderRadius: '16px', 
            marginBottom: '30px',
            textAlign: 'center',
            border: '1px solid #ffd699'
          }}>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
              <span style={{ color: '#0070f3' }}>Action Verb</span> + <span style={{ color: '#2e7d32' }}>What You Did</span> + <span style={{ color: '#ed6c02' }}>How You Did It</span> + <span style={{ color: '#9c27b0' }}>Quantifiable Result</span>
            </p>
          </div>
          
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '15px', lineHeight: '1.6' }}>
              ✅ <strong>Led</strong> cross-functional team of 12 <strong>to implement</strong> agile methodology, <strong>resulting in</strong> 35% faster delivery times and $500K cost savings.
            </p>
          </div>
        </section>

        {/* Action Verbs Section */}
        <section id="action-verbs">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Powerful Action Verbs by Category
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            {actionVerbCategories.map((cat, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0070f3', fontSize: '18px' }}>{cat.title}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#4a5568' }}>{cat.verbs}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before vs After Examples */}
        <section id="before-after">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Before vs After: Transforming Weak Bullets
          </h2>
          
          {beforeAfterExamples.map((example, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <div style={{ background: '#fee2e2', padding: '16px', borderRadius: '12px', marginBottom: '12px', borderLeft: '4px solid #dc2626' }}>
                <p style={{ margin: 0, fontWeight: '600', color: '#991b1b' }}>❌ Before (Weak):</p>
                <p style={{ margin: '8px 0 0 0', fontStyle: 'italic' }}>"{example.before}"</p>
              </div>
              <div style={{ background: '#d1fae5', padding: '16px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                <p style={{ margin: 0, fontWeight: '600', color: '#065f46' }}>✅ After (Strong):</p>
                <p style={{ margin: '8px 0 0 0', fontStyle: 'italic' }}>"{example.after}"</p>
              </div>
            </div>
          ))}
        </section>

        {/* Complete Work Experience Examples */}
        <section id="examples">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Complete Work Experience Examples by Role
          </h2>
          
          {completeExamples.map((example, idx) => (
            <div key={idx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #e9ecef' }}>
              <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px', color: '#1a1a1a' }}>
                {example.role}
              </p>
              <ul style={{ margin: '12px 0 0 20px', lineHeight: '1.8' }}>
                {example.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Formatting Tips Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            📝 Formatting Best Practices
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>✓ Reverse Chronological Order</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>List your most recent job first, working backwards through your career history.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>✓ Include Key Details</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Company name, location, job title, and dates (month/year format recommended).</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>✓ Tailor to Job Description</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Highlight achievements that match keywords and requirements from the job posting.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>✓ Be Consistent</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Use consistent formatting for dates, punctuation, and bullet style throughout.</p>
            </div>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            🤖 ATS-Friendly Experience Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Work Experience" or "Professional Experience"</li>
              <li><strong>Include job titles exactly as they appear:</strong> Matches keyword searches in ATS databases</li>
              <li><strong>Use simple bullet points (•):</strong> Avoid complex symbols that may not parse correctly</li>
              <li><strong>Include months for dates:</strong> ATS systems prefer "January 2022 - Present" over "2022 - Present"</li>
              <li><strong>Avoid graphics and tables:</strong> Stick to simple text formatting for ATS parsing</li>
              <li><strong>Use standard fonts:</strong> Arial, Calibri, Helvetica, or Times New Roman for best compatibility</li>
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
            Ready to Write Your Work Experience?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Write compelling bullet points and land more interviews.
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
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>200+ Action Verbs →</Link>
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide →</Link>
            <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Education Section Guide →</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 →</Link>
          </div>
        </div>
      </main>
    </>
  );
}