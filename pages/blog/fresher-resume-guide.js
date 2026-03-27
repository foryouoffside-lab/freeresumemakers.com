// pages/blog/fresher-resume-guide.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function FresherResumeGuide() {
  const [authorImageError, setAuthorImageError] = useState(false);

  // Enhanced Article Schema with more complete metadata
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fresher Resume Guide: How to Write Resume with No Experience (2026)",
    "description": "Complete guide for freshers to write a resume with no work experience. Includes templates, examples for fresh graduates, and tips to land your first job in 2026.",
    "image": {
      "@type": "ImageObject",
      "url": "https://freeresumemaker.xyz/images/blog/fresher-resume-guide.jpg",
      "width": "1200",
      "height": "630"
    },
    "author": {
      "@type": "Person",
      "name": "Kevin Zhang",
      "jobTitle": "Career Coach",
      "url": "https://freeresumemaker.xyz/about",
      "sameAs": [
        "https://www.linkedin.com/in/kevin-zhang-career-coach",
        "https://twitter.com/kevinzhangcareer"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png",
        "width": "200",
        "height": "60"
      },
      "url": "https://freeresumemaker.xyz",
      "sameAs": [
        "https://www.facebook.com/freeresumemakers",
        "https://twitter.com/resumebuilder"
      ]
    },
    "datePublished": "2026-02-26",
    "dateModified": "2026-02-26",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://freeresumemaker.xyz/blog/fresher-resume-guide"
    },
    "keywords": "fresher resume, resume for freshers, no experience resume, fresh graduate resume, entry level resume, first job resume, college student resume, internship resume, campus placement resume",
    "articleSection": "Freshers Guide",
    "inLanguage": "en-US",
    "about": [
      {
        "@type": "Thing",
        "name": "Resume Writing"
      },
      {
        "@type": "Thing",
        "name": "Entry Level Job Search"
      }
    ],
    "audience": {
      "@type": "Audience",
      "name": "Fresh Graduates"
    }
  };

  // Enhanced Breadcrumb Schema with correct trailing slashes
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Blog",
        "item": "https://freeresumemaker.xyz/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fresher Resume Guide",
        "item": "https://freeresumemaker.xyz/blog/fresher-resume-guide"
      }
    ]
  };

  // Expanded FAQ Schema with 8 comprehensive questions for better featured snippet potential
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I write a resume with no work experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on your education, projects, internships, skills, and extracurricular activities. Highlight academic achievements, relevant coursework, and any practical experience from college projects or volunteer work. Use a functional or combination resume format that emphasizes skills over work history."
        }
      },
      {
        "@type": "Question",
        "name": "What should a fresher include in a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include education details (degree, university, graduation year, GPA if above average), internships, academic projects, technical and soft skills, extracurricular activities, certifications, languages, and achievements. Keep it to one page and focus on quantifiable accomplishments."
        }
      },
      {
        "@type": "Question",
        "name": "How long should a fresher resume be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fresher resume should be exactly one page. Recruiters spend only 6-7 seconds scanning a resume, so every word must be relevant and impactful. Entry-level candidates rarely have enough experience to justify a two-page resume."
        }
      },
      {
        "@type": "Question",
        "name": "What format is best for a fresher resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a reverse-chronological format that highlights education and projects. Choose a clean, ATS-friendly template with standard fonts (Arial, Calibri, Helvetica), simple formatting, and no tables, graphics, or columns. This ensures your resume passes automated screening systems."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include my GPA if it's low?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your GPA is below average (below 3.0/4.0 or 7.0/10), focus on relevant coursework, projects, and skills instead. You can omit the GPA and highlight other strengths like leadership roles, certifications, or notable projects that demonstrate your abilities."
        }
      },
      {
        "@type": "Question",
        "name": "How many projects should I include on my fresher resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include 2-3 strong projects that demonstrate relevant skills for your target role. Quality matters more than quantity. Choose projects that align with the job description, and for each project, describe technologies used, your specific role, and quantifiable outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add volunteer work to my fresher resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, volunteer work is valuable on a fresher resume. It demonstrates initiative, soft skills, and community involvement. Include volunteer roles that show leadership, teamwork, or skills relevant to your target job. Highlight specific contributions and outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common fresher resume mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common fresher resume mistakes include: exceeding one page, using unprofessional email addresses, including irrelevant personal details, listing generic skills without context, having spelling and grammar errors, using flashy templates that confuse ATS, and failing to customize the resume for each job application."
        }
      }
    ]
  };

  const handleDownloadClick = () => {
    alert('PDF download functionality coming soon!');
  };

  return (
    <>
      <SEO 
        title="Fresher Resume Guide: How to Write Resume with No Experience (2026)"
        description="Complete guide for freshers to write a resume with no work experience. Includes templates, examples for fresh graduates, and tips to land your first job in 2026. Free sample included."
        keywords="fresher resume, resume for freshers, no experience resume, fresh graduate resume, entry level resume, first job resume, college student resume, internship resume, campus placement resume, graduate CV"
        canonical="https://freeresumemaker.xyz/blog/fresher-resume-guide"
        image="https://freeresumemaker.xyz/images/blog/fresher-resume-guide.jpg"
        type="article"
        publishedTime="2026-02-26"
        author="Kevin Zhang"
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
          <span>â€º</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>Fresher Resume Guide</span>
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
            Fresher Resume Guide: Land Your First Job with No Experience (2026 Edition)
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
                  src="/images/authors/kevin-zhang.jpg" 
                  alt="Kevin Zhang" 
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
                  KZ
                </div>
              )}
              <span><strong>Kevin Zhang</strong> | Career Coach</span>
            </div>
            <span>February 26, 2026</span>
            <span>8 min read</span>
            <span>Freshers Guide</span>
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
              As a fresher, you might think you have nothing to put on your resume. That's not true! 
              Your education, projects, internships, and extracurriculars are valuable assets. 
              This guide shows you how to create a compelling resume that lands your first job in 2026.
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
            In This Guide:
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '12px'
          }}>
            {[
              { name: 'Focus on Education', href: '#education' },
              { name: 'Highlight Internships', href: '#internships' },
              { name: 'Showcase Projects', href: '#projects' },
              { name: 'List Your Skills', href: '#skills' },
              { name: 'Extracurriculars', href: '#extracurriculars' },
              { name: 'Sample Resume', href: '#sample' },
              { name: 'Tips for Success', href: '#tips' },
              { name: 'Best Templates', href: '#templates' }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: 'white',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e9ecef'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.borderColor = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                {item.name}
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
          {/* Section 1 - Education */}
          <section id="education" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '0 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              1. Focus on Your Education
            </h2>
            <p>
              Your degree is your strongest asset as a fresher. Make it stand out by including relevant details that 
              showcase your academic preparation.
            </p>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0',
              border: '1px solid #bbdefb'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#0070f3' }}>What to Include:</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '15px'
              }}>
                {[
                  'Degree name and specialization (e.g., B.Tech Computer Science)',
                  'University/college name and location',
                  'Graduation year (or expected graduation)',
                  'GPA/CGPA if impressive (above 7.5/10 or 3.5/4.0)',
                  'Relevant coursework (Data Structures, Algorithms, Web Dev)',
                  'Academic achievements (Dean\'s List, scholarships)',
                  'Thesis or dissertation title (if applicable)'
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                  }}>
                    <span style={{ color: '#0070f3', fontSize: '18px' }}>âœ“</span>
                    <span style={{ fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#fff3cd',
              borderRadius: '10px',
              padding: '15px',
              margin: '20px 0',
              border: '1px solid #ffc107'
            }}>
              <p style={{ margin: 0 }}>
                <strong>Tip:</strong> If your GPA is below average, focus on relevant coursework and projects instead. 
                Employers care more about your skills than your grades.
              </p>
            </div>
          </section>

          {/* Section 2 - Internships */}
          <section id="internships" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              2. Highlight Internships (2026 Focus)
            </h2>
            <p>
              Even unpaid internships, summer training, or industrial visits count as valuable experience. Treat them like real work experience.
            </p>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Internship Entry Format:</h3>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                fontFamily: 'monospace',
                fontSize: '15px'
              }}>
                <p><strong>Company Name</strong> | Location</p>
                <p><em>Internship Title</em> | Month Year - Month Year</p>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Developed a feature that improved team efficiency</li>
                  <li>Collaborated with team of 5 to deliver project on schedule</li>
                  <li>Presented findings to senior management</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#f0f7ff',
              borderRadius: '10px',
              padding: '15px',
              margin: '20px 0'
            }}>
              <p style={{ margin: 0 }}>
                <strong>Example Bullet Points:</strong> "Assisted in developing company website using React" â€¢ 
                "Fixed bugs and contributed to code documentation" â€¢ "Created test cases for quality assurance"
              </p>
            </div>
          </section>

          {/* Section 3 - Projects */}
          <section id="projects" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              3. Showcase Academic Projects
            </h2>
            <p>
              Projects demonstrate practical skills and initiative. Include personal, academic, or hackathon projects with clear descriptions.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Project Structure:</h3>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Project title</li>
                  <li>Technologies used</li>
                  <li>Your role</li>
                  <li>2-3 bullet points of achievements</li>
                  <li>Link to GitHub/portfolio</li>
                </ul>
              </div>

              <div style={{
                background: '#f0f7ff',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #bbdefb'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0070f3' }}>Example:</h3>
                <p><strong>E-Learning Platform</strong> | React, Node.js, MongoDB</p>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Built full-stack platform with user authentication</li>
                  <li>Implemented payment gateway integration</li>
                  <li>Deployed application for testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 - Skills */}
          <section id="skills" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              4. List Your Skills (2026 In-Demand Skills)
            </h2>
            <p>
              Organize your skills into clear categories to make them easy to scan. Include both technical and soft skills.
            </p>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Technical Skills (2026)</span>
                <p>Programming Languages: Java, Python, JavaScript, TypeScript, C++</p>
                <p>Frameworks: React, Node.js, Express, Django, Spring Boot</p>
                <p>Tools: Git, Docker, VS Code, MySQL, MongoDB, AWS, Postman</p>
                <p>AI/ML: TensorFlow, PyTorch, LangChain (for AI-focused roles)</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Soft Skills</span>
                <p>Team Leadership, Communication, Problem Solving, Time Management, Adaptability, Critical Thinking</p>
              </div>

              <div>
                <span style={{
                  background: '#0070f3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>Languages</span>
                <p>English (Fluent), Hindi (Native), Spanish (Conversational)</p>
              </div>
            </div>
          </section>

          {/* Section 5 - Extracurriculars */}
          <section id="extracurriculars" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              5. Include Extracurricular Activities
            </h2>
            <p>
              Extracurricular activities demonstrate leadership, teamwork, and passion. Include roles and achievements that show your initiative.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '15px',
              margin: '20px 0'
            }}>
              {[
                { activity: 'College Club Leadership', example: 'President of Coding Club â€¢ Organized hackathons with 200+ participants' },
                { activity: 'Volunteer Work', example: 'Taught programming to underprivileged students through NGO' },
                { activity: 'Sports Teams', example: 'Captain, University Cricket Team â€¢ Led team to championship' },
                { activity: 'Cultural Events', example: 'Coordinated annual cultural fest with 1000+ attendees' },
                { activity: 'Competitions', example: 'Winner, National Hackathon â€¢ Competed against 500+ teams' },
                { activity: 'Student Government', example: 'Class Representative â€¢ Managed student concerns' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <strong style={{ color: '#0070f3' }}>{item.activity}</strong>
                  <p style={{ fontSize: '13px', margin: '8px 0 0 0', color: '#666' }}>{item.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 - Sample Resume */}
          <section id="sample" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              6. Sample Fresher Resume Template (2026)
            </h2>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '30px',
              margin: '20px 0',
              border: '1px solid #e9ecef',
              fontFamily: 'monospace',
              fontSize: '14px',
              overflowX: 'auto'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
{`RAHUL SHARMA
ðŸ“ž +91 98765 43210 | âœ‰ï¸ rahul.sharma@email.com | ðŸ”— linkedin.com/in/rahulsharma | ðŸ’» github.com/rahulsharma

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

EDUCATION
Bachelor of Technology in Computer Science
Indian Institute of Technology (IIT), Delhi | Expected 2026
CGPA: 8.7/10 | Relevant Courses: Data Structures, Algorithms, DBMS, Web Development, Machine Learning

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

TECHNICAL SKILLS
â€¢ Languages: Java, Python, JavaScript, TypeScript, SQL
â€¢ Frameworks: React, Node.js, Express, Django, Spring Boot
â€¢ Tools: Git, Docker, VS Code, PostgreSQL, MongoDB, Postman, AWS
â€¢ AI/ML: TensorFlow, Scikit-learn, Pandas

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

PROJECTS
E-Learning Platform | React, Node.js, MongoDB
â€¢ Built full-stack platform with user authentication and course management system
â€¢ Implemented payment gateway integration with Stripe API
â€¢ Deployed on AWS EC2, serving 500+ active users during testing

Portfolio Website | HTML, CSS, JavaScript, Three.js
â€¢ Designed responsive personal portfolio website with 3D animations
â€¢ Optimized for performance achieving 95+ Lighthouse scores
â€¢ Featured in university showcase for design excellence

Task Management App | MERN Stack
â€¢ Developed collaborative task management tool with real-time updates using WebSockets
â€¢ Implemented drag-drop interface for task organization
â€¢ Reduced team coordination time by 40% during beta testing

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

INTERNSHIPS
Web Development Intern | TechSolutions Pvt Ltd | Summer 2024
â€¢ Developed reusable component library using React, reducing development time by 25%
â€¢ Fixed 30+ bugs and contributed to code documentation
â€¢ Collaborated with senior developers on client projects

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

ACHIEVEMENTS & EXTRACURRICULARS
â€¢ Winner, National Hackathon 2025 (500+ teams participated)
â€¢ Captain, College Cricket Team (2024-2025) - Led team to inter-college championship
â€¢ Teaching Volunteer, Teach for India - Taught coding to 50+ underprivileged students
â€¢ Academic Excellence Scholarship (2023-2025)

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

CERTIFICATIONS
â€¢ Meta Frontend Developer Certificate (Coursera) - 2025
â€¢ AWS Cloud Practitioner (in progress)
â€¢ Google Analytics Individual Qualification - 2024

LANGUAGES
â€¢ English: Fluent
â€¢ Hindi: Native
â€¢ Spanish: Conversational`}
              </pre>
            </div>
          </section>

          {/* Section 7 - Tips */}
          <section id="tips" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              7. Tips for Fresher Resume Success (2026)
            </h2>
            
            <div style={{
              background: '#f0f7ff',
              borderRadius: '16px',
              padding: '25px',
              margin: '20px 0'
            }}>
              <ol style={{ paddingLeft: '20px', margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><strong>Keep it to one page:</strong> Recruiters spend only 6-7 seconds scanning. Every word must count.</li>
                <li style={{ marginBottom: '12px' }}><strong>Use action verbs:</strong> Developed, created, implemented, achieved, led, designed, optimized.</li>
                <li style={{ marginBottom: '12px' }}><strong>Quantify when possible:</strong> "Increased engagement by 30%" is stronger than "Worked on engagement."</li>
                <li style={{ marginBottom: '12px' }}><strong>Customize for each job:</strong> Match keywords from the job description to pass ATS screening.</li>
                <li style={{ marginBottom: '12px' }}><strong>Proofread carefully:</strong> One typo can create a negative impression.</li>
                <li style={{ marginBottom: '12px' }}><strong>Include LinkedIn profile:</strong> Keep it updated and professional with a clear headline.</li>
                <li style={{ marginBottom: '12px' }}><strong>Add portfolio/GitHub:</strong> Show your work through links with active projects.</li>
                <li style={{ marginBottom: '12px' }}><strong>Use ATS-friendly formatting:</strong> Simple fonts (Arial, Calibri), no tables or graphics.</li>
                <li style={{ marginBottom: '12px' }}><strong>Add a professional summary:</strong> 2-3 lines highlighting your strengths and career goals.</li>
                <li style={{ marginBottom: '12px' }}><strong>Include relevant certifications:</strong> Online courses show initiative and continuous learning.</li>
              </ol>
            </div>
          </section>

          {/* Section 8 - Templates */}
          <section id="templates" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              margin: '50px 0 20px 0',
              borderBottom: '3px solid #0070f3',
              paddingBottom: '10px'
            }}>
              8. Templates Suitable for Freshers (2026)
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              {[
                { id: 2, name: 'Classic Horizon', desc: 'Traditional layout, perfect for students and campus placements' },
                { id: 5, name: 'Equinox', desc: 'Modern design with focus on skills and projects' },
                { id: 10, name: 'Simple Professional', desc: 'Clean, minimalist - ideal for ATS and general applications' },
                { id: 11, name: 'Ethereal', desc: 'Minimalist design for creative freshers and designers' }
              ].map((template, index) => (
                <Link key={index} href={`/templates/${template.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = '#0070f3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}
                  >
                    <h3 style={{ fontSize: '16px', margin: '0 0 5px 0', color: '#333' }}>Template {template.id}: {template.name}</h3>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{template.desc}</p>
                  </div>
                </Link>
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
              Frequently Asked Questions (2026 Updates)
            </h2>
            
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              {[
                {
                  q: 'How do I write a resume with no work experience?',
                  a: 'Focus on your education, projects, internships, skills, and extracurricular activities. Highlight academic achievements, relevant coursework, and any practical experience from college projects or volunteer work. Use a functional or combination resume format that emphasizes skills over work history.'
                },
                {
                  q: 'What should a fresher include in a resume?',
                  a: 'Include education details, internships, academic projects, technical and soft skills, extracurricular activities, certifications, and languages. Keep it to one page and focus on quantifiable achievements.'
                },
                {
                  q: 'How long should a fresher resume be?',
                  a: 'A fresher resume should be exactly one page. Recruiters spend only 6-7 seconds scanning a resume, so every word must be relevant and impactful. Entry-level candidates rarely have enough experience to justify a two-page resume.'
                },
                {
                  q: 'What format is best for a fresher resume?',
                  a: 'Use a reverse-chronological format that highlights education and projects. Choose a clean, ATS-friendly template with standard fonts (Arial, Calibri, Helvetica), simple formatting, and no tables, graphics, or columns.'
                },
                {
                  q: 'Should I include my GPA if it\'s low?',
                  a: 'If your GPA is below average (below 3.0/4.0 or 7.0/10), focus on relevant coursework, projects, and skills instead. You can omit the GPA and highlight other strengths like leadership roles, certifications, or notable projects.'
                },
                {
                  q: 'How many projects should I include?',
                  a: 'Include 2-3 strong projects that demonstrate relevant skills for your target role. Quality matters more than quantity. Choose projects that align with the job description and describe technologies used, your specific role, and quantifiable outcomes.'
                },
                {
                  q: 'Can I add volunteer work to my fresher resume?',
                  a: 'Yes, volunteer work is valuable on a fresher resume. It demonstrates initiative, soft skills, and community involvement. Include volunteer roles that show leadership, teamwork, or skills relevant to your target job.'
                },
                {
                  q: 'What are the most common fresher resume mistakes?',
                  a: 'Common fresher resume mistakes include: exceeding one page, using unprofessional email addresses, including irrelevant personal details, listing generic skills without context, having spelling errors, using flashy templates that confuse ATS, and failing to customize for each job.'
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
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>ðŸ“¥</div>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Free Fresher Resume Template (2026)</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 25px' }}>
              Download our printable fresher resume template with pre-filled sections and formatting tips. Updated for 2026 hiring trends.
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
              Download Free Template
            </button>
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
            KZ
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>About Kevin Zhang</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              Kevin is a Career Coach specializing in helping fresh graduates and entry-level professionals. 
              He has guided over 1,000 students through campus placements and their first job search. 
              His practical advice focuses on bridging the gap between college and career, with expertise in tech, finance, and creative industries.
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
              { name: 'Twitter', icon: 'ðŸ¦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('Fresher Resume Guide: Land Your First Job with No Experience (2026)')}&url=https://freeresumemaker.xyz/blog/fresher-resume-guide` },
              { name: 'LinkedIn', icon: 'ðŸ’¼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/fresher-resume-guide` },
              { name: 'Facebook', icon: 'ðŸ“˜', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/fresher-resume-guide` },
              { name: 'Email', icon: 'ðŸ“§', url: `mailto:?subject=${encodeURIComponent('Fresher Resume Guide 2026')}&body=${encodeURIComponent('Check out this guide: https://freeresumemaker.xyz/blog/fresher-resume-guide')}` }
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
            {[
              { href: '/blog/how-to-write-resume', title: 'How to Write a Resume: Complete Guide (2026)', author: 'Sarah Johnson', readTime: '10 min' },
              { href: '/blog/resume-objective-vs-summary', title: 'Objective vs Summary: Which to Use?', author: 'Robert Brown', readTime: '5 min' },
              { href: '/blog/action-verbs-for-resume', title: '200+ Action Verbs for Resume (2026 Update)', author: 'David Kim', readTime: '7 min' },
              { href: '/blog/ats-resume-tips-2026', title: 'ATS Resume Tips for 2026', author: 'Michael Chen', readTime: '8 min' }
            ].map((post, index) => (
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
                    By {post.author} â€¢ {post.readTime} read
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
            Ready to Build Your Fresher Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
            Use our resume builder with templates designed for freshers. Add your education, projects, and skills in minutes.
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
          <p>Last updated: February 26, 2026 | Â© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
