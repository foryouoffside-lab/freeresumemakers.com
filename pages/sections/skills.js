import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function SkillsSectionGuide() {
  // Enhanced structured data: Article + HowTo + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/skills#article",
        "headline": "How to List Skills on Resume: Complete Guide with Examples 2026",
        "description": "Learn how to list skills on your resume effectively. Includes hard skills vs soft skills, technical skills examples, and templates for different industries. Boost your ATS score and land more interviews.",
        "image": "https://freeresumemaker.xyz/images/skills-guide-2026.jpg",
        "datePublished": "2026-01-15T08:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/skills"
        },
        "keywords": "resume skills, skills section, hard skills, soft skills, technical skills, resume skills list, skills for resume, professional skills, ATS keywords"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/skills#howto",
        "name": "How to List Skills on Your Resume",
        "description": "Complete guide to listing skills on your resume with hard skills vs soft skills examples by industry.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Identify Relevant Skills from Job Descriptions",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Review 3-5 job descriptions for your target role. Identify recurring hard skills, technical requirements, and soft skills mentioned. Create a master list of keywords."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Categorize Your Skills Strategically",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Group skills into categories like Technical Skills, Soft Skills, Languages, and Certifications. Use clear headings for easy scanning by recruiters and ATS systems."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Add Proficiency Levels (Optional)",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "For technical skills, add proficiency levels like 'Advanced,' 'Intermediate,' or 'Expert' to give recruiters context about your experience level."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Provide Context in Experience Section",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Showcase your skills in action within your experience section. For each key skill, include a bullet point demonstrating how you used it to achieve results."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Tailor for Each Application",
            "position": 5,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Customize your skills section for each job application by prioritizing the skills mentioned in the job description. This improves your ATS match rate significantly."
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/skills#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many skills should I list on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "List 10-15 relevant skills on your resume. Quality matters more than quantityâ€”focus on skills that match the job description and demonstrate your qualifications."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between hard skills and soft skills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard skills are teachable, technical abilities like programming, data analysis, or foreign languages. Soft skills are interpersonal attributes like communication, leadership, and problem-solving. Both are important for a well-rounded resume."
            }
          },
          {
            "@type": "Question",
            "name": "Where should I put the skills section on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Place your skills section near the top of your resumeâ€”either after your professional summary or in a sidebar for modern templates. Recruiters scan for skills first, so make them prominent."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/skills#breadcrumb",
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
            "name": "Skills Guide",
            "item": "https://freeresumemaker.xyz/sections/skills"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "How many skills should I list on my resume?",
      a: "List 10-15 relevant skills on your resume. Quality matters more than quantityâ€”focus on skills that match the job description and demonstrate your qualifications. For technical roles, you may list up to 20 skills if they're all relevant."
    },
    {
      q: "What's the difference between hard skills and soft skills?",
      a: "Hard skills are teachable, technical abilities like programming, data analysis, foreign languages, or certifications. Soft skills are interpersonal attributes like communication, leadership, adaptability, and problem-solving. The best resumes showcase a balanced mix of both."
    },
    {
      q: "Where should I put the skills section on my resume?",
      a: "Place your skills section near the top of your resumeâ€”either after your professional summary or in a sidebar for modern templates. Recruiters scan for skills first, so make them prominent and easy to find. For ATS optimization, include a dedicated 'Skills' section with clear headings."
    },
    {
      q: "Should I include proficiency levels for my skills?",
      a: "Yes, for technical and hard skills, adding proficiency levels like 'Advanced,' 'Intermediate,' or 'Expert' provides helpful context. For soft skills, proficiency levels are less common. Avoid using visual skill bars (stars or circles) as they don't work with ATS systems."
    },
    {
      q: "How do I choose the right skills for a job application?",
      a: "Analyze the job description for keywords and required skills. Match your skills to those keywords. Include 80% hard skills mentioned and 20% relevant soft skills. Use the exact terminology from the job posting when possible to improve ATS matching."
    },
    {
      q: "Should I list outdated skills on my resume?",
      a: "No, only include current, relevant skills. Listing outdated technologies (like Windows XP, Flash, or deprecated software) can make you appear behind the times. Focus on skills that are actively used in your target industry."
    }
  ];

  // Industry skills expanded with more detail
  const industrySkills = [
    {
      industry: "ðŸ’» Technology & IT",
      hardSkills: "React, Node.js, Python, Java, AWS, Docker, Kubernetes, SQL, MongoDB, TypeScript, Git, CI/CD, GraphQL, TensorFlow, Spring Boot",
      softSkills: "Problem Solving, Analytical Thinking, Team Collaboration, Agile Methodology, Technical Communication, Debugging, Code Review"
    },
    {
      industry: "ðŸ“ˆ Business & Management",
      hardSkills: "Strategic Planning, Budget Management, Data Analysis, Excel, Salesforce, Tableau, Power BI, Financial Modeling, Supply Chain, CRM",
      softSkills: "Leadership, Communication, Decision Making, Negotiation, Stakeholder Management, Strategic Thinking, Conflict Resolution"
    },
    {
      industry: "ðŸ¥ Healthcare",
      hardSkills: "Patient Care, Medical Terminology, EMR Systems (Epic, Cerner), Clinical Procedures, BLS/ACLS, HIPAA Compliance, Phlebotomy",
      softSkills: "Empathy, Communication, Attention to Detail, Crisis Management, Team Collaboration, Patience, Active Listening"
    },
    {
      industry: "ðŸŽ¨ Creative & Design",
      hardSkills: "Adobe Creative Suite, Figma, Sketch, UI/UX Design, Typography, Branding, Motion Graphics, After Effects, InDesign, Prototyping",
      softSkills: "Creativity, Visual Communication, Collaboration, Client Management, Feedback Reception, Storytelling, Time Management"
    },
    {
      industry: "ðŸ“Š Marketing & Sales",
      hardSkills: "SEO/SEM, Google Analytics, Content Strategy, Social Media Management, CRM (Salesforce, HubSpot), Email Marketing, PPC, Copywriting",
      softSkills: "Persuasion, Relationship Building, Negotiation, Adaptability, Creativity, Data-Driven Decision Making, Presentation Skills"
    },
    {
      industry: "ðŸ’° Finance & Accounting",
      hardSkills: "Financial Analysis, QuickBooks, Excel (Advanced), SAP, GAAP, Tax Preparation, Auditing, Risk Management, Financial Modeling",
      softSkills: "Attention to Detail, Analytical Thinking, Integrity, Organization, Time Management, Problem Solving, Ethics"
    }
  ];

  // Skill categories with proficiency examples
  const skillCategories = [
    { name: "Programming Languages", skills: "Python (Advanced), JavaScript (Advanced), Java (Intermediate), TypeScript (Intermediate)" },
    { name: "Frameworks & Libraries", skills: "React, Node.js, Express, Django, Spring Boot, Next.js" },
    { name: "Cloud & DevOps", skills: "AWS (Advanced), Docker, Kubernetes, Terraform, CI/CD (Jenkins, GitHub Actions)" },
    { name: "Databases", skills: "PostgreSQL, MongoDB, MySQL, Redis, DynamoDB" },
    { name: "Soft Skills", skills: "Strategic Leadership, Cross-functional Collaboration, Stakeholder Management, Agile Facilitation" }
  ];

  // Format examples
  const formatExamples = [
    {
      title: "Simple Bulleted List",
      style: "simple",
      content: `<strong>Technical Skills</strong><br/>
â€¢ React, Node.js, Python, TypeScript<br/>
â€¢ AWS, Docker, Kubernetes, Terraform<br/>
â€¢ PostgreSQL, MongoDB, Redis<br/>
<br/>
<strong>Soft Skills</strong><br/>
â€¢ Leadership & Team Management<br/>
â€¢ Strategic Planning & Execution<br/>
â€¢ Cross-functional Communication`
    },
    {
      title: "Categorized with Proficiency Levels",
      style: "proficiency",
      content: `<strong>Programming Languages:</strong> Python (Advanced), JavaScript (Advanced), Java (Intermediate), TypeScript (Intermediate)<br/>
<strong>Frameworks:</strong> React (Expert), Node.js (Advanced), Django (Intermediate)<br/>
<strong>Cloud & DevOps:</strong> AWS (Advanced), Docker (Advanced), Kubernetes (Intermediate)<br/>
<strong>Soft Skills:</strong> Technical Leadership, Agile Methodology, Cross-team Collaboration`
    },
    {
      title: "Two-Column Format (Modern)",
      style: "columns",
      content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
<div><strong>Technical</strong><br/>â€¢ React/Next.js<br/>â€¢ Node.js/Python<br/>â€¢ AWS/DevOps<br/>â€¢ PostgreSQL/MongoDB</div>
<div><strong>Professional</strong><br/>â€¢ Project Leadership<br/>â€¢ Agile/Scrum<br/>â€¢ Technical Writing<br/>â€¢ Client Relations</div>
</div>`
    }
  ];

  return (
    <>
      <SEO 
        title="How to List Skills on Resume: Complete Guide with Examples 2026 | FreeResumeMakers"
        description="Learn how to list skills on your resume effectively. Includes hard skills vs soft skills, technical skills examples, and templates for different industries. Boost your ATS score and land more interviews."
        keywords="resume skills, skills section, hard skills, soft skills, technical skills, resume skills list, skills for resume, professional skills, ATS keywords, how to list skills on resume"
        canonical="https://freeresumemaker.xyz/sections/skills"
        type="article"
        publishedTime="2026-01-15T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/skills" />
        <meta name="description" content="Complete guide to listing skills on your resume. Learn hard skills vs soft skills, technical skills examples, and formatting tips to pass ATS and impress recruiters." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Skills Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to List Skills on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>ðŸ“… Updated: March 24, 2026</span>
            <span>â±ï¸ 10 min read</span>
            <span>ðŸ‘ï¸ 52,000+ readers</span>
            <span>ðŸ“Š 100+ Skill Examples</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            Your skills section is often the first thing recruiters scanâ€”and it's critical for passing ATS systems. 
            <strong>Resumes with skills tailored to job descriptions receive 47% more interview calls</strong>. 
            Learn how to showcase your abilities effectively and land your dream role.
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
            <a href="#hard-vs-soft" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Hard vs Soft Skills</a>
            <a href="#industry-skills" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Skills by Industry</a>
            <a href="#formatting" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Format Examples</a>
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
            <strong>ðŸ’¡ 2026 Pro Tip:</strong> Tailor your skills to each job application. Use keywords from the job descriptionâ€”ATS systems rank resumes higher when skills match the posting. 
            Create a master skills list, then select the most relevant 10-15 for each application.
          </p>
        </div>

        {/* Hard Skills vs Soft Skills Section */}
        <section id="hard-vs-soft">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Hard Skills vs Soft Skills
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '30px', marginTop: '20px' }}>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>ðŸ“š</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#0070f3' }}>Hard Skills</h3>
              <p style={{ marginBottom: '12px', color: '#666' }}>Technical abilities you learn through education, training, or certification. These are measurable and often job-specific.</p>
              <ul style={{ lineHeight: '1.8', margin: 0 }}>
                <li>Programming (Python, Java, React)</li>
                <li>Data Analysis (SQL, Excel, Tableau)</li>
                <li>Project Management (Agile, Scrum, Jira)</li>
                <li>Foreign Languages (Spanish, French, Mandarin)</li>
                <li>Certifications (PMP, AWS, CPA)</li>
                <li>Cloud Platforms (AWS, Azure, GCP)</li>
                <li>Design Tools (Figma, Adobe Creative Suite)</li>
              </ul>
            </div>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>ðŸ¤</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#0070f3' }}>Soft Skills</h3>
              <p style={{ marginBottom: '12px', color: '#666' }}>Personal attributes that affect how you work with others. These are transferable across roles and industries.</p>
              <ul style={{ lineHeight: '1.8', margin: 0 }}>
                <li>Communication & Presentation</li>
                <li>Leadership & Team Management</li>
                <li>Problem Solving & Critical Thinking</li>
                <li>Adaptability & Resilience</li>
                <li>Time Management & Organization</li>
                <li>Emotional Intelligence & Empathy</li>
                <li>Conflict Resolution & Negotiation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills by Industry Section */}
        <section id="industry-skills">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Top Skills by Industry (2026)
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
            {industrySkills.map((ind, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0070f3' }}>{ind.industry}</h3>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#2e7d32' }}>Hard Skills:</p>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>{ind.hardSkills}</p>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#ed6c02' }}>Soft Skills:</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{ind.softSkills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Format Examples Section */}
        <section id="formatting">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            How to Format Your Skills Section
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>Simple Bulleted List</h3>
              <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                <strong>Technical Skills</strong><br/>
                â€¢ React, Node.js, Python, TypeScript<br/>
                â€¢ AWS, Docker, Kubernetes<br/>
                â€¢ PostgreSQL, MongoDB<br/>
                <br/>
                <strong>Soft Skills</strong><br/>
                â€¢ Leadership & Team Management<br/>
                â€¢ Strategic Planning<br/>
                â€¢ Cross-functional Communication
              </div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>With Proficiency Levels</h3>
              <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                <strong>Programming:</strong> Python (Advanced), JavaScript (Advanced), Java (Intermediate)<br/>
                <strong>Frameworks:</strong> React (Expert), Node.js (Advanced), Django (Intermediate)<br/>
                <strong>Cloud:</strong> AWS (Advanced), Docker (Advanced), Kubernetes (Intermediate)<br/>
                <strong>Soft Skills:</strong> Technical Leadership, Agile Facilitation, Stakeholder Management
              </div>
            </div>
          </div>

          <div style={{ background: '#e8f5e9', padding: '16px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>âš ï¸ Note:</strong> Avoid using visual skill bars (stars, circles, progress bars) in your skills section. 
              These don't work with ATS systems and can make your resume harder to parse. Stick to text-based formatting.
            </p>
          </div>
        </section>

        {/* Skills Categories with Proficiency */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Skill Categories with Proficiency Examples
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            {skillCategories.map((cat, idx) => (
              <p key={idx} style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.6' }}>
                <strong>{cat.name}:</strong> {cat.skills}
              </p>
            ))}
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section id="mistakes">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            âŒ Common Skills Section Mistakes
          </h2>
          <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #ff9800' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>âŒ Listing too many skills</strong> - Keep to 10-15 relevant skills. More than 20 looks cluttered and unfocused.</li>
              <li><strong>âŒ Including outdated technologies</strong> - Skills like Flash, Windows XP, or deprecated frameworks make you look behind the times.</li>
              <li><strong>âŒ Not categorizing skills</strong> - Mixing hard and soft skills without organization makes it harder for recruiters to scan.</li>
              <li><strong>âŒ Listing soft skills without evidence</strong> - Every soft skill should be backed up with achievements in your experience section.</li>
              <li><strong>âŒ Using generic terms like 'hardworking'</strong> - Be specific about what you excel at (e.g., 'Cross-functional Team Leadership' vs 'Team Player').</li>
              <li><strong>âŒ Missing ATS keywords</strong> - Failing to include keywords from the job description reduces your chances of passing screening.</li>
              <li><strong>âŒ Using visual skill bars</strong> - Stars and progress bars don't work with ATS systems and waste valuable space.</li>
            </ul>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section id="ats-tips">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ¤– ATS-Friendly Skills Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Skills," "Technical Skills," or "Core Competencies"</li>
              <li><strong>Include exact keywords from job description:</strong> Mirror the language used in the posting</li>
              <li><strong>Use comma-separated lists:</strong> ATS systems parse comma-separated lists efficiently</li>
              <li><strong>Avoid tables and columns:</strong> Simple bulleted lists work best for ATS parsing</li>
              <li><strong>Place skills section near top:</strong> ATS algorithms weight information higher when placed earlier</li>
              <li><strong>Spell out acronyms:</strong> "Project Management Professional (PMP)" rather than just "PMP"</li>
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
            Ready to Showcase Your Skills?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Add skills, proficiency levels, and land more interviews.
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
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>200+ Action Verbs â†’</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 â†’</Link>
            <Link href="/sections/certifications" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Certifications Guide â†’</Link>
          </div>
        </div>
      </main>
    </>
  );
}
