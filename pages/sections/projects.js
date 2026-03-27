import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ProjectsSectionGuide() {
  // Enhanced structured data: Article + HowTo + BreadcrumbList + FAQPage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/projects#article",
        "headline": "How to List Projects on Resume: Complete Guide with Examples 2026",
        "description": "Expert guide on showcasing projects on your resume. Learn how to format projects for developers, designers, and engineers with GitHub links, technical details, and quantifiable results. Perfect for freshers and portfolio careers.",
        "image": "https://freeresumemaker.xyz/images/projects-guide-2026.jpg",
        "datePublished": "2026-02-15T08:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/projects"
        },
        "keywords": "projects on resume, portfolio projects, GitHub resume, project section, technical projects, developer portfolio, design portfolio, how to list projects on resume"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/projects#howto",
        "name": "How to List Projects on Your Resume",
        "description": "A step-by-step guide to showcasing projects on your resume with examples for developers, designers, and engineers.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Select Relevant Projects",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Choose 3-5 projects that demonstrate skills relevant to your target role. Prioritize projects that showcase your best work and align with job requirements."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Format with Key Details",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Include project name, technologies used, your role, and quantifiable results. Use bullet points to describe the problem, your solution, and the impact."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Add Live Links",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Include GitHub, live demo, or portfolio links when available. Recruiters love seeing working demos and code repositories to verify your skills."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Quantify Results",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Use numbers to demonstrate impact: users served, performance improvements, revenue generated, or time saved. Quantified results make your projects more compelling."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/projects#breadcrumb",
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
            "name": "Projects Guide",
            "item": "https://freeresumemaker.xyz/sections/projects"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/projects#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I include personal projects on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, personal projects are excellent for demonstrating skills, especially for freshers, career changers, and tech roles. They show initiative, passion, and practical application of knowledge."
            }
          },
          {
            "@type": "Question",
            "name": "How many projects should I list on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "List 3-5 of your strongest, most relevant projects. Quality matters more than quantity. Choose projects that best demonstrate skills required for your target role."
            }
          },
          {
            "@type": "Question",
            "name": "Where should the projects section go on a resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For freshers: after education, before skills. For experienced professionals: after work experience. For tech/portfolio careers: can be a prominent section near the top."
            }
          }
        ]
      }
    ]
  };

  // FAQ data for visual display
  const faqItems = [
    {
      q: "Should I include personal projects on my resume?",
      a: "Yes, personal projects are excellent for demonstrating skills, especially for freshers, career changers, and tech roles. They show initiative, passion, and practical application of knowledge. Projects can often be more impressive than coursework when they solve real problems."
    },
    {
      q: "How many projects should I list on my resume?",
      a: "List 3-5 of your strongest, most relevant projects. Quality matters more than quantity. Choose projects that best demonstrate skills required for your target role. For freshers with no experience, 4-5 substantial projects are ideal."
    },
    {
      q: "Where should the projects section go on a resume?",
      a: "For freshers: place after education, before skills. For experienced professionals: place after work experience or combine with skills section. For tech/portfolio careers: can be a prominent section near the top, sometimes even before experience."
    },
    {
      q: "Should I include GitHub links for my projects?",
      a: "Yes, absolutely! Include GitHub, GitLab, or live demo links for technical projects. Recruiters and hiring managers often check code quality, documentation, and commit history. Make sure your repositories are well-organized with clear README files."
    },
    {
      q: "How do I describe a group project on my resume?",
      a: "Clearly state your specific role and contributions. Use phrases like 'Led the backend development team' or 'Responsible for UI/UX design and user testing.' Quantify your individual impact within the team project."
    },
    {
      q: "What if I don't have any projects?",
      a: "Start building! Create a personal portfolio website, contribute to open-source, build a clone of an app you admire, or complete project-based courses. Even small, well-executed projects demonstrate initiative and practical skills."
    }
  ];

  // Detailed project examples by field
  const projectExamples = [
    {
      field: "Software Development",
      icon: "💻",
      projects: [
        {
          name: "E-Commerce Platform",
          tech: "React, Node.js, MongoDB, Stripe API, Redux",
          year: "2024",
          bullets: [
            "Built full-stack e-commerce application with JWT authentication, product management, and order tracking",
            "Implemented Stripe payment gateway processing 500+ transactions monthly with 99.9% success rate",
            "Reduced page load time by 40% through code splitting, lazy loading, and image optimization",
            "Deployed on AWS EC2 with CI/CD pipeline using GitHub Actions"
          ],
          link: "github.com/username/ecommerce-platform",
          stats: "⭐ 250+ GitHub stars | 1,200+ monthly users"
        },
        {
          name: "Task Management SaaS",
          tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS",
          year: "2024",
          bullets: [
            "Developed collaborative task management platform with real-time updates using WebSockets",
            "Implemented role-based access control (RBAC) for teams (Admin, Member, Viewer)",
            "Achieved 98% Lighthouse score for performance and accessibility",
            "Acquired 500+ active users within 3 months of launch"
          ],
          link: "taskmanager.demo.com",
          stats: "500+ active users | 4.8/5 user rating"
        }
      ]
    },
    {
      field: "UI/UX Design",
      icon: "🎨",
      projects: [
        {
          name: "Healthcare App Redesign",
          tech: "Figma, User Research, Prototyping, Usability Testing",
          year: "2024",
          bullets: [
            "Redesigned telemedicine app interface improving user retention by 35% post-launch",
            "Conducted user interviews with 20+ patients and 5 healthcare providers to identify pain points",
            "Created high-fidelity interactive prototypes tested with 50+ users, achieving 92% task completion rate",
            "Delivered comprehensive design system with 200+ components and documentation"
          ],
          link: "behance.net/username/healthcare-app",
          stats: "Featured in 'UX Design Trends 2024' | 15,000+ views"
        },
        {
          name: "Finance Dashboard",
          tech: "Adobe XD, Data Visualization, Design System, A11y",
          year: "2023",
          bullets: [
            "Designed responsive dashboard for financial analytics with WCAG 2.1 AA accessibility compliance",
            "Created interactive data visualizations improving data comprehension by 45% in user testing",
            "Developed comprehensive design system used across 3 product lines"
          ],
          link: "dribbble.com/username/finance-dashboard",
          stats: "Dribbble 'Popular' selection | 25,000+ views"
        }
      ]
    },
    {
      field: "Data Science",
      icon: "📊",
      projects: [
        {
          name: "Sales Forecasting Model",
          tech: "Python, Pandas, Scikit-learn, TensorFlow, Tableau",
          year: "2024",
          bullets: [
            "Developed machine learning model predicting quarterly sales with 94% accuracy (MAE: 3.2%)",
            "Analyzed 5 years of historical sales data (2.5M+ records) with feature engineering",
            "Created interactive Tableau dashboard reducing reporting time by 80% for stakeholders",
            "Deployed model as REST API using Flask for real-time predictions"
          ],
          link: "github.com/username/sales-forecast",
          stats: "92% accuracy | 40% reduction in forecasting error"
        },
        {
          name: "Customer Churn Prediction",
          tech: "Python, XGBoost, SQL, Power BI",
          year: "2023",
          bullets: [
            "Built classification model predicting customer churn with 87% precision and 85% recall",
            "Identified key churn drivers leading to 25% reduction in customer attrition",
            "Processed and cleaned 500K+ customer records for model training"
          ],
          link: "github.com/username/churn-prediction",
          stats: "87% precision | $2M annual savings projected"
        }
      ]
    },
    {
      field: "Mobile Development",
      icon: "📱",
      projects: [
        {
          name: "Fitness Tracker App",
          tech: "Flutter, Firebase, Google Fit API, BLoC Pattern",
          year: "2024",
          bullets: [
            "Built cross-platform fitness tracking app with 10,000+ downloads on Play Store",
            "Integrated Google Fit API for step counting and activity tracking",
            "Implemented offline-first architecture with local data sync",
            "Achieved 4.7/5 rating with 500+ user reviews"
          ],
          link: "play.google.com/store/apps/fitness-tracker",
          stats: "10K+ downloads | 4.7/5 rating"
        }
      ]
    }
  ];

  // Project ideas for freshers
  const fresherProjectIdeas = [
    { category: "Web Development", ideas: "Personal portfolio website, E-commerce store, Blog platform, Task manager, Weather app, Social media dashboard" },
    { category: "Mobile Development", ideas: "Fitness tracker, Expense manager, Recipe app, Music player, Note-taking app" },
    { category: "Data Science", ideas: "Stock price predictor, Sentiment analysis, Recommendation system, Customer segmentation" },
    { category: "Design", ideas: "App redesign, Brand identity, UI kit, Case study portfolio, Design system" },
    { category: "Open Source", ideas: "Contributions to popular repos, Documentation improvements, Bug fixes, Feature additions" },
    { category: "Hackathon Projects", ideas: "24-48 hour builds, Winning projects, Innovative solutions to real problems" }
  ];

  // Project section placement guidelines
  const placementGuidelines = [
    { stage: "Freshers / Students", placement: "After Education, Before Skills", reasoning: "Projects demonstrate practical skills when work experience is limited" },
    { stage: "Career Changers", placement: "After Summary, Before Experience", reasoning: "Showcase relevant skills for new field before unrelated experience" },
    { stage: "Experienced Tech Professionals", placement: "After Work Experience", reasoning: "Highlight side projects and open-source contributions" },
    { stage: "Portfolio Careers (Design/Dev)", placement: "Near Top (after summary)", reasoning: "Projects are your primary qualification for creative/technical roles" }
  ];

  return (
    <>
      <SEO 
        title="How to List Projects on Resume: Complete Guide with Examples 2026 | FreeResumeMakers"
        description="Expert guide on showcasing projects on your resume. Learn how to format projects for developers, designers, and engineers with GitHub links, technical details, and quantifiable results. Perfect for freshers and portfolio careers."
        keywords="projects on resume, portfolio projects, GitHub resume, project section, technical projects, developer portfolio, design portfolio, how to list projects on resume, personal projects resume"
        canonical="https://freeresumemaker.xyz/sections/projects"
        type="article"
        publishedTime="2026-02-15T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/projects" />
        <meta name="description" content="Learn how to showcase projects on your resume with expert examples for software developers, designers, and engineers. Includes GitHub links, technical details, and formatting tips." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Projects Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to List Projects on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>📅 Updated: March 24, 2026</span>
            <span>⏱️ 10 min read</span>
            <span>👁️ 38,000+ readers</span>
            <span>💻 20+ Project Examples</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            Projects are especially important for freshers, career changers, and tech professionals. 
            <strong>Resumes with project links receive 45% more interview calls</strong> for technical roles. 
            Learn how to showcase your best work and demonstrate practical skills that employers value.
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
            <a href="#format" style={{ color: '#0070f3', textDecoration: 'none' }}>• Project Format</a>
            <a href="#examples" style={{ color: '#0070f3', textDecoration: 'none' }}>• Examples by Field</a>
            <a href="#fresher-ideas" style={{ color: '#0070f3', textDecoration: 'none' }}>• Project Ideas for Freshers</a>
            <a href="#placement" style={{ color: '#0070f3', textDecoration: 'none' }}>• Placement Strategy</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>• FAQ</a>
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
            <strong>💡 Pro Tip:</strong> Include live links to your projects whenever possible. Recruiters love seeing working demos and GitHub repositories. 
            Make sure your repositories have clear README files, screenshots, and setup instructions. A well-documented project shows attention to detail and professionalism.
          </p>
        </div>

        {/* Project Format Section */}
        <section id="format">
          <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Project Section Format
          </h2>
          <p style={{ marginBottom: '16px' }}>Use this proven format to make your projects stand out to recruiters and hiring managers:</p>
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8' }}>
              <strong style={{ fontSize: '16px' }}>[Project Name]</strong> | <em>[Technologies Used]</em> | [Year]<br />
              • <strong>Problem:</strong> What challenge did you solve?<br />
              • <strong>Solution:</strong> Your approach and technical implementation<br />
              • <strong>Role:</strong> Your specific contribution (for team projects)<br />
              • <strong>Result:</strong> Quantifiable impact (users, performance, revenue)<br />
              • <strong>Link:</strong> GitHub | Live Demo | Portfolio
            </div>
          </div>
        </section>

        {/* Project Examples Section */}
        <section id="examples">
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Project Examples by Field
          </h2>
          
          {projectExamples.map((field, idx) => (
            <div key={idx} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#0070f3' }}>
                {field.icon} {field.field}
              </h3>
              {field.projects.map((project, pIdx) => (
                <div key={pIdx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e9ecef' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px', color: '#1a1a1a' }}>
                    {project.name} | <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#666' }}>{project.tech}</span> | {project.year}
                  </p>
                  <ul style={{ margin: '12px 0 12px 20px', lineHeight: '1.7' }}>
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
                    <a href="#" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '14px' }}>
                      🔗 {project.link}
                    </a>
                    <span style={{ background: '#e3f2fd', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', color: '#0070f3' }}>
                      📊 {project.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Fresher Project Ideas Section */}
        <section id="fresher-ideas">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            💡 Project Ideas for Freshers (No Experience)
          </h2>
          <div style={{ background: '#fff3e0', padding: '24px', borderRadius: '16px', marginBottom: '30px', borderLeft: '4px solid #ff9800' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
              When you have no work experience, projects become your most important asset. Include 3-5 substantial projects that demonstrate your skills, problem-solving ability, and passion.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {fresherProjectIdeas.map((idea, idx) => (
                <div key={idx} style={{ background: 'white', padding: '16px', borderRadius: '12px' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>{idea.category}</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{idea.ideas}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Include Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            What to Include for Each Project
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎯</div>
              <strong>Problem</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>What challenge did you solve?</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>⚙️</div>
              <strong>Technologies</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>Tools, languages, frameworks used</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>👤</div>
              <strong>Your Role</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>Individual contribution (for team projects)</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📈</div>
              <strong>Results</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>Quantifiable outcomes (users, performance, revenue)</p>
            </div>
          </div>
        </section>

        {/* Placement Section */}
        <section id="placement">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            📍 Where to Place Projects on Your Resume
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Career Stage</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Placement</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Reasoning</th>
                 </tr>
              </thead>
              <tbody>
                {placementGuidelines.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '12px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.stage}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.placement}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.reasoning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            🤖 ATS-Friendly Project Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Projects" or "Technical Projects" for best ATS parsing</li>
              <li><strong>Include technology keywords:</strong> List all relevant technologies (React, Python, AWS) for keyword matching</li>
              <li><strong>Place links after bullet points:</strong> Keep URLs at the end of the section to avoid breaking ATS parsing</li>
              <li><strong>Use simple bullet points:</strong> Avoid complex formatting, tables, or columns in the projects section</li>
              <li><strong>Quantify results with numbers:</strong> "Increased performance by 40%" is more effective than "Improved performance"</li>
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
            Showcase Your Best Projects
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Add project links, highlight your tech stack, and land more interviews.
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
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide →</Link>
            <Link href="/sections/experience" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Experience Section Guide →</Link>
            <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Education Section Guide →</Link>
            <Link href="/blog/fresher-resume-guide" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Fresher Resume Guide →</Link>
          </div>
        </div>
      </main>
    </>
  );
}