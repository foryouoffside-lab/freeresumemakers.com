import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function SummarySectionGuide() {
  // Enhanced structured data: Article + HowTo + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/summary#article",
        "headline": "How to Write a Resume Summary: Complete Guide with Examples 2026",
        "description": "Learn how to write a powerful resume summary that grabs attention in 3-5 seconds. Includes examples for different industries, tips for experienced professionals, and common mistakes to avoid.",
        "image": "https://freeresumemaker.xyz/images/summary-guide-2026.jpg",
        "datePublished": "2026-01-20T08:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/summary"
        },
        "keywords": "resume summary, professional summary, CV summary, resume objective, career summary, profile summary, executive summary, how to write resume summary"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/summary#howto",
        "name": "How to Write a Resume Summary",
        "description": "Step-by-step guide to writing a powerful resume summary with examples for different industries.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Identify Your Key Qualifications",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "List your years of experience, job title, key skills, and top 2-3 achievements. Focus on what makes you unique and valuable to employers."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Tailor to the Job Description",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Analyze the job posting for keywords and required skills. Mirror this language in your summary to show you're the ideal candidate and improve ATS match rate."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Quantify Your Achievements",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Include numbers, percentages, and specific results. 'Increased sales by 45%' is more powerful than 'Responsible for sales growth.'"
            }
          },
          {
            "@type": "HowToStep",
            "name": "Keep It Concise",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Limit your summary to 3-4 sentences or 2-3 bullet points. Recruiters spend only 6-7 seconds scanning your resumeâ€”make every word count."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Avoid First Person",
            "position": 5,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Remove 'I,' 'my,' and 'me' from your summary. Write in a professional third-person style that focuses on your value proposition."
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/summary#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What's the difference between a resume summary and a resume objective?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A resume summary highlights your experience, skills, and achievementsâ€”what you offer the employer. A resume objective states your career goalsâ€”what you're seeking. Summaries are best for experienced professionals; objectives are better for freshers and career changers."
            }
          },
          {
            "@type": "Question",
            "name": "How long should a resume summary be?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Keep your resume summary to 3-4 sentences (50-80 words) or 2-3 bullet points. It should be scannable in 3-5 seconds and highlight your most compelling qualifications."
            }
          },
          {
            "@type": "Question",
            "name": "Should I use a resume summary for entry-level positions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For entry-level positions, you can use a resume objective or a skills-focused summary. Highlight your education, internships, and transferable skills. Recent graduates often benefit from emphasizing academic achievements and relevant coursework."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/summary#breadcrumb",
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
            "name": "Summary Guide",
            "item": "https://freeresumemaker.xyz/sections/summary"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "What's the difference between a resume summary and a resume objective?",
      a: "A resume summary highlights your experience, skills, and achievementsâ€”what you offer the employer. A resume objective states your career goalsâ€”what you're seeking. Summaries are best for experienced professionals (3+ years); objectives are better for freshers, career changers, and recent graduates."
    },
    {
      q: "How long should a resume summary be?",
      a: "Keep your resume summary to 3-4 sentences (50-80 words) or 2-3 bullet points. It should be scannable in 3-5 seconds and highlight your most compelling qualifications. For senior-level roles, you may extend to 4-5 sentences."
    },
    {
      q: "Should I use a resume summary for entry-level positions?",
      a: "For entry-level positions, use a resume objective or a skills-focused summary. Highlight your education, internships, relevant coursework, and transferable skills. Example: 'Recent Marketing graduate with honors and 2 internship experiences. Skilled in social media management, content creation, and Google Analytics.'"
    },
    {
      q: "How do I tailor my summary for each job application?",
      a: "Analyze the job description for keywords, required skills, and company values. Mirror this language in your summary. If the job emphasizes 'project management' and 'stakeholder communication,' include those exact terms. This improves ATS match rate by up to 30%."
    },
    {
      q: "Should I include numbers in my resume summary?",
      a: "Yes! Quantified achievements are much more powerful. Instead of 'Experienced in sales,' write 'Sales professional with 8+ years of experience generating $5M+ in annual revenue (25% YoY growth).' Numbers grab attention and prove your impact."
    },
    {
      q: "What if I have gaps in my employment history?",
      a: "Focus your summary on skills, achievements, and what you bring to the role. You don't need to address employment gaps in the summaryâ€”address them in your cover letter or interview if asked. Keep the summary positive and forward-focused."
    }
  ];

  // Industry examples expanded with more roles
  const industryExamples = [
    {
      title: "ðŸ‘¨â€ðŸ’» Software Engineer / Developer",
      summary: "Results-driven Software Engineer with 7+ years of experience in full-stack development. Proven track record of delivering scalable applications used by 2M+ users. Expert in React, Node.js, Python, and AWS cloud architecture. Reduced server costs by 35% through optimization. Seeking to leverage technical expertise to build innovative solutions at a forward-thinking tech company."
    },
    {
      title: "ðŸ’¼ Marketing Manager / Director",
      summary: "Creative Marketing Manager with 8 years of experience driving brand growth and customer engagement. Increased social media engagement by 150% and generated $2.8M in revenue through integrated digital campaigns. Expertise in content strategy, SEO/SEM, and team leadership of 12+ marketing professionals. MBA from Northwestern University."
    },
    {
      title: "ðŸ¥ Registered Nurse / Healthcare",
      summary: "Compassionate Registered Nurse with 6 years of critical care experience at Level 1 trauma center. Maintained 100% patient satisfaction score while managing 5+ patients per shift. BLS, ACLS, and CCRN certified. Recognized with 'Nurse of the Year' award (2024). Seeking to provide exceptional patient care in a fast-paced hospital environment."
    },
    {
      title: "ðŸ“Š Data Analyst / Data Scientist",
      summary: "Analytical Data Analyst with 4 years of experience turning complex data into actionable insights. Improved operational efficiency by 25% ($1.2M savings) through data-driven recommendations. Proficient in SQL, Python, Tableau, and advanced Excel. Passionate about using machine learning to solve business problems."
    },
    {
      title: "ðŸ“ˆ Sales Executive / Account Manager",
      summary: "High-performing Sales Executive with 10+ years of experience in B2B SaaS. Exceeded annual quota by 45% for 3 consecutive years, generating $8.5M in new revenue. Expertise in enterprise account management, strategic negotiations, and building C-level relationships. Top 5% performer nationally."
    },
    {
      title: "ðŸŽ“ Entry-Level / Recent Graduate",
      summary: "Recent Computer Science graduate with honors (3.8 GPA) from Stanford University. Developed 3 full-stack applications during internships at Google and Amazon. Proficient in Python, React, TypeScript, and AWS. Hackathon winner (2025). Seeking software engineering role to apply technical skills and passion for innovation."
    },
    {
      title: "ðŸ“‹ Project Manager / PMP",
      summary: "Certified Project Manager (PMP) with 9 years of experience leading complex IT projects. Successfully delivered 15+ projects valued at $20M+, completing 95% on time and under budget. Expert in Agile, Scrum, and stakeholder management. Improved team velocity by 40% through process optimization."
    },
    {
      title: "ðŸ’° Financial Analyst / Accountant",
      summary: "Detail-oriented Financial Analyst with 5 years of experience in corporate finance. Reduced operational costs by 18% ($3.2M) through financial modeling and budget optimization. CPA certified. Proficient in SAP, Excel (advanced), and Power BI. Strong background in forecasting and variance analysis."
    },
    {
      title: "ðŸŽ¨ UX/UI Designer",
      summary: "Creative UX/UI Designer with 6 years of experience designing user-centered digital products. Increased user engagement by 65% through redesign of mobile app used by 500K+ customers. Expert in Figma, Adobe XD, and user research. Portfolio includes work for Fortune 500 clients."
    },
    {
      title: "ðŸ“š Human Resources Manager",
      summary: "Strategic HR Manager with 8 years of experience in talent acquisition, employee relations, and organizational development. Reduced turnover by 35% through engagement initiatives. Implemented DEI program increasing diverse hires by 50%. SHRM-SCP certified."
    }
  ];

  // Summary vs Objective comparison
  const summaryVsObjective = [
    { aspect: "Purpose", summary: "Highlights your experience, skills, and achievements", objective: "States your career goals and what you're seeking" },
    { aspect: "Best For", summary: "Experienced professionals (3+ years)", objective: "Freshers, career changers, recent graduates" },
    { aspect: "Length", summary: "3-4 sentences (50-80 words)", objective: "1-2 sentences (20-40 words)" },
    { aspect: "Focus", summary: "What you offer the employer", objective: "What you're seeking from the employer" },
    { aspect: "Example", summary: "Marketing Manager with 8+ years of experience driving $5M+ in revenue.", objective: "Seeking marketing role to apply creative skills in a growth-oriented company." }
  ];

  // Summary formula variations
  const summaryFormulas = [
    {
      title: "The Experience-Focused Formula",
      formula: "[Job Title] with [X] years of experience in [industry/field]. Proven track record of [key achievement]. Expert in [key skills]. Seeking to leverage expertise as [role] at [company type]."
    },
    {
      title: "The Achievement-Focused Formula",
      formula: "[Job Title] recognized for [specific achievement/award]. Successfully [quantified accomplishment] resulting in [business impact]. Skilled in [key skills]. Passionate about [professional interest]."
    },
    {
      title: "The Skills-Focused Formula (Entry-Level)",
      formula: "Recent [degree] graduate from [university] with [GPA/honors]. Completed [X] internships/projects in [field]. Proficient in [key skills]. Seeking [role] to apply [skills] and contribute to [company goal]."
    },
    {
      title: "The Leadership-Focused Formula (Senior Roles)",
      formula: "Seasoned [job title] with [X] years of experience leading [size] teams and driving [business outcomes]. Expertise in [strategic areas]. Consistently delivered [quantified results]. Fellow of [professional organization]."
    }
  ];

  return (
    <>
      <SEO 
        title="How to Write a Resume Summary: Complete Guide with Examples 2026 | FreeResumeMakers"
        description="Learn how to write a powerful resume summary that grabs attention in 3-5 seconds. Includes examples for software engineers, marketing managers, nurses, entry-level roles, and more. ATS-friendly tips included."
        keywords="resume summary, professional summary, CV summary, resume objective, career summary, profile summary, executive summary, how to write resume summary, resume summary examples"
        canonical="https://freeresumemaker.xyz/sections/summary"
        type="article"
        publishedTime="2026-01-20T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/summary" />
        <meta name="description" content="Complete guide to writing a powerful resume summary. Learn the formula, see examples for 10+ industries, and avoid common mistakes. Boost your interview rate with a compelling professional summary." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Summary Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to Write a Powerful Resume Summary: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>ðŸ“… Updated: March 24, 2026</span>
            <span>â±ï¸ 9 min read</span>
            <span>ðŸ‘ï¸ 45,000+ readers</span>
            <span>â­ 10+ Industry Examples</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            A strong resume summary grabs attention in 3-5 seconds and convinces recruiters to read further. 
            <strong>Resumes with targeted professional summaries receive 35% more interview calls</strong>. 
            Learn how to write one that gets resultsâ€”whether you're an experienced professional or just starting your career.
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
          <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: 0 }}>ðŸ“– Table of Contents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="#summary-vs-objective" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Summary vs Objective</a>
            <a href="#formula" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ The Winning Formula</a>
            <a href="#examples" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Industry Examples</a>
            <a href="#mistakes" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Common Mistakes</a>
            <a href="#ats-tips" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ ATS Optimization</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ FAQ</a>
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f7ff 100%)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '40px',
          borderLeft: '6px solid #0070f3'
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>ðŸ’¡ 2026 Pro Tip:</strong> Place your summary at the top of your resume, right under your contact information. 
            It's the first thing recruiters seeâ€”make it compelling. Use keywords from the job description to improve ATS match rate. 
            For senior roles, consider using a "Professional Profile" heading instead of "Summary."
          </p>
        </div>

        {/* Summary vs Objective Section */}
        <section id="summary-vs-objective">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Resume Summary vs Objective: What's the Difference?
          </h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '30px', marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', width: '25%' }}>Aspect</th>
                  <th style={{ padding: '14px', textAlign: 'left', width: '37.5%' }}>Resume Summary</th>
                  <th style={{ padding: '14px', textAlign: 'left', width: '37.5%' }}>Resume Objective</th>
                 </tr>
              </thead>
              <tbody>
                {summaryVsObjective.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '14px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.aspect}</td>
                    <td style={{ padding: '14px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.summary}</td>
                    <td style={{ padding: '14px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Formula Section */}
        <section id="formula">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            The Winning Resume Summary Formula
          </h2>
          
          <div style={{ background: '#fff3e0', padding: '28px', borderRadius: '16px', marginBottom: '30px', textAlign: 'center', border: '1px solid #ffd699' }}>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', lineHeight: '1.5' }}>
              <span style={{ color: '#0070f3' }}>[Job Title]</span> with <span style={{ color: '#2e7d32' }}>[X+ Years]</span> of experience in <span style={{ color: '#ed6c02' }}>[Industry/Field]</span>.<br/>
              Proven track record of <span style={{ color: '#9c27b0' }}>[Key Achievement with Number]</span>. Expert in <span style={{ color: '#0070f3' }}>[Key Skills]</span>.<br/>
              Seeking to leverage expertise as <span style={{ color: '#2e7d32' }}>[Role]</span> at <span style={{ color: '#ed6c02' }}>[Company Type]</span>.
            </p>
          </div>

          <h3 style={{ fontSize: '22px', marginBottom: '16px', color: '#1a1a1a', marginTop: '24px' }}>Summary Formula Variations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '30px' }}>
            {summaryFormulas.map((formula, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#0070f3', fontSize: '16px' }}>{formula.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{formula.formula}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Examples Section */}
        <section id="examples">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Resume Summary Examples by Industry
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
            {industryExamples.map((example, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>{example.title}</h3>
                <p style={{ margin: 0, fontStyle: 'italic', color: '#1a1a1a', lineHeight: '1.6' }}>"{example.summary}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Entry-Level vs Experienced Comparison */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Entry-Level vs Experienced Professional Summaries
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '30px' }}>
            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', border: '1px solid #c8e6c9' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#2e7d32' }}>ðŸŽ“ Entry-Level / Fresher</h3>
              <p style={{ margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
                "Recent Computer Science graduate with honors (3.8 GPA) from Stanford University. 
                Completed 3 internships developing full-stack applications. Proficient in Python, React, and AWS. 
                Seeking software engineering role to apply technical skills and passion for innovation."
              </p>
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#2e7d32' }}>
                âœ… Focus: Education, internships, skills, potential
              </p>
            </div>
            <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '12px', border: '1px solid #bbdef5' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0070f3' }}>ðŸ’¼ Experienced Professional</h3>
              <p style={{ margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
                "Senior Software Engineer with 8+ years of experience building scalable applications used by 5M+ users. 
                Led team of 12 engineers, reduced server costs by 35%, and delivered 15+ successful product launches. 
                Expert in React, Node.js, and AWS architecture. Seeking to drive technical innovation as Lead Engineer."
              </p>
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#0070f3' }}>
                âœ… Focus: Years of experience, leadership, quantifiable results, expertise
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section id="mistakes">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            âŒ Common Resume Summary Mistakes to Avoid
          </h2>
          <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #ff9800' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>âŒ Too vague:</strong> "Hardworking professional seeking opportunities" â€” adds no value</li>
              <li><strong>âŒ Too long:</strong> Keep it to 3-4 lines maximum; recruiters won't read paragraphs</li>
              <li><strong>âŒ Generic and not tailored:</strong> Same summary for every job application misses opportunities</li>
              <li><strong>âŒ Missing keywords:</strong> Not including terms from job description reduces ATS match rate</li>
              <li><strong>âŒ Using first person:</strong> Remove "I," "my," and "me" from your summary</li>
              <li><strong>âŒ Listing responsibilities:</strong> Focus on achievements and results instead of duties</li>
              <li><strong>âŒ No numbers or metrics:</strong> "Increased sales" vs "Increased sales by 45% ($2.3M)" â€” always quantify</li>
              <li><strong>âŒ Using clichÃ©s:</strong> Avoid "go-getter," "team player," "think outside the box" without evidence</li>
            </ul>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section id="ats-tips">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ¤– ATS-Friendly Summary Optimization
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Professional Summary" or "Executive Summary" â€” avoid creative headings</li>
              <li><strong>Include keywords from job description:</strong> Mirror the exact terminology used in the posting</li>
              <li><strong>Place summary at the top:</strong> Right after contact information for maximum ATS visibility</li>
              <li><strong>Keep formatting simple:</strong> Avoid tables, columns, or special characters in the summary section</li>
              <li><strong>Use sentence case:</strong> Not all caps â€” "Professional Summary" not "PROFESSIONAL SUMMARY"</li>
              <li><strong>Include job title keywords:</strong> If you're a "Marketing Manager," include that exact phrase</li>
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
            Ready to Write Your Perfect Summary?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Create a compelling professional summary that gets noticed.
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
            Build Your Resume Now â†’
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '50px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1a1a1a' }}>ðŸ“š Related Resume Guides</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/sections/experience" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Experience Section Guide â†’</Link>
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide â†’</Link>
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>200+ Action Verbs â†’</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 â†’</Link>
          </div>
        </div>
      </main>
    </>
  );
}
