import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ToolsSectionGuide() {
  // Enhanced structured data: Article + HowTo + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/tools#article",
        "headline": "How to List Tools on Resume: Software & Technology Examples 2026",
        "description": "Complete guide to listing software tools, technologies, and applications on your resume. Includes examples for design, development, project management, data analysis, and more. Boost your technical resume and pass ATS systems.",
        "image": "https://freeresumemaker.xyz/images/tools-guide-2026.jpg",
        "datePublished": "2026-02-20T08:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/tools"
        },
        "keywords": "tools on resume, software skills, technical tools, design tools, development tools, project management software, resume tools section, Figma, Photoshop, Excel, Salesforce, Jira, AWS, Git"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/tools#howto",
        "name": "How to List Tools on Your Resume",
        "description": "Complete guide to listing software tools, technologies, and applications on your resume with examples by industry.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Identify Relevant Tools from Job Description",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Analyze the job posting for specific software and tools mentioned. List tools you've used that match these requirements. Prioritize tools explicitly listed in the job description."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Categorize by Function",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Group similar tools together (Design Tools, Development Tools, Project Management, Data Analytics). This makes your skills section scannable and organized."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Add Proficiency Levels",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Indicate your skill level for key tools: Advanced (3+ years), Intermediate (1-2 years), or Working Knowledge. Avoid visual skill bars that don't work with ATS."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Showcase Tools in Experience Section",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Don't just list toolsâ€”demonstrate how you used them to achieve results. Example: 'Used Salesforce to increase lead conversion by 35%.'"
            }
          },
          {
            "@type": "HowToStep",
            "name": "Keep Tools Section Updated",
            "position": 5,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Regularly update your tools list with new software you've mastered. Remove outdated tools that are no longer relevant to your target roles."
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/tools#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I create a separate tools section on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you have 5+ relevant technical tools to list. A dedicated 'Tools & Technologies' section makes your technical expertise immediately visible to recruiters and ATS systems. For fewer tools, integrate them into your skills section."
            }
          },
          {
            "@type": "Question",
            "name": "How do I list proficiency levels for tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use clear terms like 'Advanced,' 'Intermediate,' or 'Working Knowledge.' For example: 'Photoshop (Advanced), Figma (Advanced), Sketch (Intermediate).' Avoid visual skill bars (stars, circles) as they don't work with ATS systems."
            }
          },
          {
            "@type": "Question",
            "name": "What tools should I list on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "List tools that are relevant to your target role and mentioned in job descriptions. Include industry-standard tools like Adobe Creative Suite for designers, Git for developers, Salesforce for sales, or Excel for analysts. Quality over quantityâ€”focus on tools you can confidently use."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/tools#breadcrumb",
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
            "name": "Tools Guide",
            "item": "https://freeresumemaker.xyz/sections/tools"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "Should I create a separate tools section on my resume?",
      a: "Yes, if you have 5+ relevant technical tools to list. A dedicated 'Tools & Technologies' section makes your technical expertise immediately visible to recruiters and ATS systems. For fewer tools (2-4), integrate them into your skills section with categories."
    },
    {
      q: "How do I list proficiency levels for tools?",
      a: "Use clear, text-based terms: 'Advanced' (3+ years, can train others), 'Intermediate' (1-2 years, independent work), or 'Working Knowledge' (basic proficiency). Example: 'Photoshop (Advanced), Figma (Advanced), Sketch (Intermediate).' Avoid visual skill barsâ€”they don't work with ATS."
    },
    {
      q: "What tools should I list on my resume?",
      a: "List tools that are relevant to your target role and mentioned in job descriptions. Include industry-standard tools: Adobe Creative Suite for designers, Git/VS Code for developers, Salesforce for sales, Excel/Tableau for analysts. Focus on tools you can confidently use in interviews."
    },
    {
      q: "Should I include tools I used in previous jobs but am not expert in?",
      a: "Yes, include them with honest proficiency levels. Even intermediate skills demonstrate familiarity and adaptability. Example: 'Worked with Docker and Kubernetes (basic deployment experience).' Always be truthfulâ€”you may be tested in interviews."
    },
    {
      q: "How do I list tools if I'm applying for different industries?",
      a: "Create a master list of all tools you know, then customize for each application. Prioritize tools mentioned in the job description and relevant to that specific role. For hybrid roles (e.g., Product Manager), list both technical and project management tools."
    },
    {
      q: "Should I include Microsoft Office on my resume?",
      a: "Only include if the job explicitly requires it or if you have advanced skills. Basic Microsoft Office proficiency is assumed for most office roles. If you're an Excel expert with VBA and pivot tables, definitely highlight that as a specific skill."
    }
  ];

  // Extended tool categories with detailed examples
  const toolCategories = [
    {
      icon: "ðŸŽ¨",
      title: "Design & Creative Tools",
      tools: [
        { category: "Adobe Creative Suite", items: "Photoshop (Advanced), Illustrator (Advanced), InDesign (Intermediate), After Effects (Intermediate), Premiere Pro (Intermediate), Lightroom (Advanced)" },
        { category: "UI/UX Design", items: "Figma (Advanced), Sketch (Intermediate), Adobe XD (Advanced), InVision, Miro, Framer, Axure RP" },
        { category: "3D & Animation", items: "Blender, Cinema 4D, Maya, After Effects, Unity" },
        { category: "Video & Audio", items: "Final Cut Pro, DaVinci Resolve, Premiere Pro, Audition, Logic Pro" }
      ]
    },
    {
      icon: "ðŸ’»",
      title: "Development & DevOps Tools",
      tools: [
        { category: "Version Control", items: "Git (Advanced), GitHub (Advanced), GitLab, Bitbucket" },
        { category: "IDEs & Editors", items: "VS Code (Advanced), IntelliJ IDEA, PyCharm, Sublime Text, WebStorm, Vim" },
        { category: "DevOps & Cloud", items: "AWS (Advanced), Docker (Advanced), Kubernetes, Jenkins, Terraform, Azure, Google Cloud, GitHub Actions" },
        { category: "Testing & QA", items: "Jest, Mocha, Selenium, Cypress, Postman (Advanced), JUnit, PyTest" },
        { category: "Databases", items: "PostgreSQL, MongoDB (Advanced), MySQL, Redis, Firebase, Elasticsearch, DynamoDB" },
        { category: "APIs & Integration", items: "REST APIs (Advanced), GraphQL, Postman, Swagger, Zapier" }
      ]
    },
    {
      icon: "ðŸ“Š",
      title: "Data & Analytics Tools",
      tools: [
        { category: "Data Visualization", items: "Tableau (Advanced), Power BI, Looker, Google Data Studio, D3.js" },
        { category: "Analytics Platforms", items: "Google Analytics (Advanced), Mixpanel, Amplitude, Heap, Adobe Analytics, Hotjar" },
        { category: "Big Data", items: "Spark, Hadoop, Hive, Kafka, Airflow" },
        { category: "ML & AI", items: "TensorFlow, PyTorch, scikit-learn, Jupyter Notebooks, Hugging Face" },
        { category: "Spreadsheets", items: "Excel (Advanced - PivotTables, VLOOKUP, Macros, Power Query), Google Sheets, Airtable" }
      ]
    },
    {
      icon: "ðŸ“‹",
      title: "Project Management & Collaboration",
      tools: [
        { category: "Project Management", items: "Jira (Advanced), Asana, Trello, Monday.com, ClickUp, Basecamp, Notion" },
        { category: "Agile Tools", items: "Jira Agile, VersionOne, Rally, Azure DevOps" },
        { category: "Documentation", items: "Confluence (Advanced), Notion, SharePoint, Google Workspace (Docs, Sheets, Slides)" },
        { category: "Communication", items: "Slack (Advanced), Microsoft Teams, Zoom, Discord, Skype" }
      ]
    },
    {
      icon: "ðŸ“ˆ",
      title: "Marketing & CRM Tools",
      tools: [
        { category: "CRM Systems", items: "Salesforce (Advanced), HubSpot, Zoho CRM, Pipedrive, Microsoft Dynamics" },
        { category: "Email Marketing", items: "Mailchimp, Constant Contact, Klaviyo, SendGrid, ActiveCampaign, Marketo" },
        { category: "SEO & SEM", items: "SEMrush, Ahrefs, Moz, Google Search Console, Google Ads, Keyword Planner" },
        { category: "Social Media", items: "Hootsuite, Buffer, Sprout Social, Later, Meta Business Suite" },
        { category: "Marketing Automation", items: "HubSpot, Marketo, Pardot, Eloqua" }
      ]
    },
    {
      icon: "ðŸ¥",
      title: "Healthcare Tools",
      tools: [
        { category: "EMR/EHR Systems", items: "Epic, Cerner, Allscripts, Meditech, Athenahealth" },
        { category: "Medical Software", items: "Practice Fusion, DrChrono, Kareo, NextGen" },
        { category: "Billing & Coding", items: "AdvancedMD, athenahealth, CureMD" }
      ]
    }
  ];

  // Format examples with proficiency levels
  const formatExamples = [
    {
      title: "Categorized with Proficiency Levels",
      style: "proficiency",
      content: `<strong>Design Tools:</strong> Figma (Advanced), Adobe XD (Advanced), Sketch (Intermediate), Photoshop (Advanced)<br/>
<strong>Prototyping:</strong> InVision (Advanced), Framer (Intermediate), Proto.io<br/>
<strong>Collaboration:</strong> Miro (Advanced), Notion, Slack (Advanced), Zoom<br/>
<strong>Version Control:</strong> Git (Advanced), GitHub (Advanced)`
    },
    {
      title: "Simple Bulleted List",
      style: "simple",
      content: `<strong>Technical Tools & Technologies</strong><br/>
â€¢ Git, GitHub, GitLab<br/>
â€¢ Docker, Kubernetes, Jenkins<br/>
â€¢ AWS (EC2, S3, Lambda, RDS)<br/>
â€¢ Jira, Confluence, Asana<br/>
â€¢ Figma, Miro, Notion`
    },
    {
      title: "Two-Column Format (Modern)",
      style: "columns",
      content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
<div><strong>Design & Creative</strong><br/>â€¢ Figma (Advanced)<br/>â€¢ Adobe Creative Suite<br/>â€¢ Sketch<br/>â€¢ Miro</div>
<div><strong>Development & DevOps</strong><br/>â€¢ Git/GitHub<br/>â€¢ Docker/Kubernetes<br/>â€¢ AWS<br/>â€¢ VS Code</div>
</div>`
    },
    {
      title: "Skills Section Integration",
      style: "integrated",
      content: `<strong>Technical Skills</strong><br/>
<strong>Programming:</strong> Python, JavaScript, TypeScript, Java<br/>
<strong>Frameworks:</strong> React, Node.js, Django, Spring Boot<br/>
<strong>Tools:</strong> Git, Docker, AWS, Jira, Figma<br/>
<strong>Databases:</strong> PostgreSQL, MongoDB, Redis`
    }
  ];

  return (
    <>
      <SEO 
        title="How to List Tools on Resume: Software & Technology Examples 2026 | FreeResumeMakers"
        description="Complete guide to listing software tools, technologies, and applications on your resume. Includes examples for design, development, project management, data analysis, and more. Boost your technical resume and pass ATS systems."
        keywords="tools on resume, software skills, technical tools, design tools, development tools, project management software, resume tools section, Figma, Photoshop, Excel, Salesforce, Jira, AWS, Git, Docker, Tableau"
        canonical="https://freeresumemaker.xyz/sections/tools"
        type="article"
        publishedTime="2026-02-20T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/tools" />
        <meta name="description" content="Learn how to list tools, software, and technologies on your resume. Includes examples for design, development, project management, and data analysis tools. Boost your technical resume with expert formatting tips." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Tools Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to List Tools on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>ðŸ“… Updated: March 24, 2026</span>
            <span>â±ï¸ 10 min read</span>
            <span>ðŸ‘ï¸ 38,000+ readers</span>
            <span>ðŸ› ï¸ 100+ Tools Examples</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            Demonstrating proficiency with industry tools and software is crucial for technical roles. 
            <strong>Resumes with categorized tool sections receive 42% more interview calls</strong> for technical positions. 
            Learn how to showcase your tool expertise effectively to pass ATS systems and impress recruiters.
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
            <a href="#format" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Format Examples</a>
            <a href="#categories" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Tools by Category</a>
            <a href="#organization" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ How to Organize</a>
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
            <strong>ðŸ’¡ 2026 Pro Tip:</strong> Don't just list toolsâ€”showcase them in action within your experience section. 
            Instead of "Figma (Advanced)," write "Used Figma to design responsive prototypes that reduced development time by 30%." 
            This demonstrates practical application and results, not just tool familiarity.
          </p>
        </div>

        {/* Format Examples Section */}
        <section id="format">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Tools Section Format Examples
          </h2>
          
          {formatExamples.map((example, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0070f3' }}>{example.title}</h3>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e9ecef',
                fontSize: '14px',
                lineHeight: '1.8'
              }} dangerouslySetInnerHTML={{ __html: example.content }} />
            </div>
          ))}
        </section>

        {/* Tools by Category Section */}
        <section id="categories">
          <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#1a1a1a', marginTop: '40px' }}>
            Tools by Category (2026 Update)
          </h2>
          
          {toolCategories.map((category, idx) => (
            <div key={idx} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px', color: '#0070f3', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '28px' }}>{category.icon}</span> {category.title}
              </h3>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                {category.tools.map((tool, tIdx) => (
                  <div key={tIdx} style={{ marginBottom: tIdx < category.tools.length - 1 ? '16px' : 0 }}>
                    <strong style={{ color: '#1a1a1a' }}>{tool.category}:</strong>
                    <span style={{ color: '#4a5568' }}> {tool.items}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* How to Organize Section */}
        <section id="organization">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            How to Organize Tools on Your Resume
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>ðŸ“‚</div>
              <strong>By Category</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Group similar tools together (Design Tools, Development Tools, Project Management, Data Analytics). This makes your skills section scannable and organized.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>â­</div>
              <strong>By Proficiency</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Indicate skill level for key tools: Advanced (3+ years), Intermediate (1-2 years), Working Knowledge. Avoid visual skill bars.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>ðŸŽ¯</div>
              <strong>By Relevance</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>List tools most relevant to the job first, especially those explicitly mentioned in the job description.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>ðŸ“</div>
              <strong>In Context</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Mention tools within experience bullets to show practical application: "Used Jira to manage sprint planning, increasing team velocity by 25%."</p>
            </div>
          </div>
        </section>

        {/* When to Create a Separate Tools Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            When to Create a Separate Tools Section
          </h2>
          <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #2e7d32' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>âœ“</strong> You have 5+ relevant technical tools to list</li>
              <li><strong>âœ“</strong> The job description emphasizes specific software requirements</li>
              <li><strong>âœ“</strong> You're in a technical field (design, development, data analysis, IT, marketing operations)</li>
              <li><strong>âœ“</strong> Tools are critical to performing the job effectively</li>
              <li><strong>âœ“</strong> You want to quickly demonstrate technical expertise to recruiters</li>
              <li><strong>âœ“</strong> Your skills section would otherwise be too cluttered</li>
            </ul>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section id="ats-tips">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ¤– ATS-Friendly Tools Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Tools & Technologies," "Technical Tools," or "Software Proficiency"</li>
              <li><strong>Include exact tool names:</strong> "Adobe Creative Suite" not "Adobe" alone</li>
              <li><strong>Use text-based proficiency levels:</strong> "Advanced," "Intermediate" (avoid visual skill bars)</li>
              <li><strong>Comma-separated lists work best:</strong> ATS systems parse comma-separated lists efficiently</li>
              <li><strong>Avoid tables and columns:</strong> Simple bulleted lists work best for ATS parsing</li>
              <li><strong>Spell out acronyms:</strong> "Amazon Web Services (AWS)" rather than just "AWS"</li>
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
            Showcase Your Technical Tools
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Add tool categories, proficiency levels, and land more interviews.
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
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide â†’</Link>
            <Link href="/blog/action-verbs-for-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Action Verbs for Tech Resumes â†’</Link>
            <Link href="/professions/software-engineering" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Software Engineer Resume Examples â†’</Link>
            <Link href="/professions/ux-designer" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>UX Designer Resume Examples â†’</Link>
          </div>
        </div>
      </main>
    </>
  );
}
