// pages/professions/software-engineering.js
import SEO from '../../components/SEO';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function SoftwareEngineeringExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 software engineering resume examples with complete template data
  const resumeExamples = [
    {
      id: 1,
      title: 'Senior Frontend Engineer Resume',
      level: 'senior',
      specialization: 'frontend',
      experience: '8+ years',
      description: 'Professional resume sample for a Senior Frontend Engineer with expertise in React, TypeScript, and modern frontend architecture. Features experience building scalable web applications, performance optimization, and team leadership.',
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'GraphQL', 'Tailwind CSS', 'Jest', 'Webpack'],
      template: {
        name: 'RAHUL SHARMA',
        credentials: 'Senior Frontend Engineer | React Specialist',
        email: 'rahul.sharma@email.com',
        phone: '+91 98765 43210',
        linkedin: 'linkedin.com/in/rahulsharma',
        location: 'Bangalore, India',
        summary: 'Senior Frontend Engineer with 8+ years of experience building scalable web applications using React, TypeScript, and modern frontend technologies. Expertise in performance optimization, component architecture, and mentoring engineering teams. Led development of 5+ production applications serving 1M+ users.',
        education: [
          {
            degree: 'Bachelor of Technology in Computer Science',
            institution: 'Indian Institute of Technology (IIT), Delhi',
            year: '2014-2018',
            score: '8.7/10'
          },
          {
            degree: 'Master of Science in Computer Science',
            institution: 'International Institute of Information Technology (IIIT), Bangalore',
            year: '2018-2020',
            score: '8.9/10'
          }
        ],
        certifications: [
          'Meta Frontend Developer Professional Certificate',
          'AWS Certified Developer - Associate',
          'Google Mobile Web Specialist Certification',
          'React Advanced Patterns Certification - Frontend Masters',
          'TypeScript Professional Certification'
        ],
        skills: {
          languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'GraphQL'],
          frameworks: ['React', 'Next.js', 'Redux', 'Zustand', 'React Query', 'Vue.js'],
          tools: ['Git', 'Webpack', 'Vite', 'Jest', 'React Testing Library', 'Cypress', 'Storybook', 'Figma'],
          soft: ['Technical Leadership', 'Mentorship', 'Code Review', 'Agile Methodology', 'Cross-Functional Collaboration', 'System Design']
        },
        experience: [
          {
            title: 'Senior Frontend Engineer',
            company: 'TechCorp Solutions, Bangalore',
            period: '2022-Present',
            points: [
              'Led frontend development for 5 enterprise-scale applications serving 1M+ monthly active users',
              'Architected reusable component library used across 8 teams, reducing development time by 40%',
              'Implemented performance optimizations achieving 95+ Lighthouse scores and 50% reduction in load time',
              'Mentored 4 junior frontend engineers, with 2 promoted to mid-level roles',
              'Introduced TypeScript across codebase, reducing runtime errors by 65%',
              'Collaborated with product and design teams to implement responsive, accessible interfaces meeting WCAG 2.1 AA standards'
            ]
          },
          {
            title: 'Frontend Engineer',
            company: 'Digital Innovations, Mumbai',
            period: '2018-2022',
            points: [
              'Built and maintained 10+ React-based applications for e-commerce and fintech clients',
              'Reduced bundle size by 35% through code splitting and lazy loading implementation',
              'Implemented CI/CD pipeline using GitHub Actions, reducing deployment time from 2 hours to 15 minutes',
              'Created comprehensive testing suite with 85% code coverage using Jest and React Testing Library',
              'Collaborated with backend team to design GraphQL APIs, improving data fetching efficiency by 40%'
            ]
          }
        ],
        projects: [
          {
            title: 'Enterprise Design System',
            technologies: 'React, TypeScript, Storybook, Tailwind CSS',
            points: [
              'Developed comprehensive component library with 50+ reusable components',
              'Reduced UI development time by 60% across engineering organization',
              'Maintained detailed documentation with Storybook, adopted by 12 product teams',
              'Achieved 100% accessibility compliance for all components'
            ]
          },
          {
            title: 'Real-Time Analytics Dashboard',
            technologies: 'React, GraphQL, WebSockets, D3.js',
            points: [
              'Built interactive dashboard displaying real-time metrics with 100ms latency',
              'Implemented custom data visualization components processing 10K+ data points',
              'Reduced initial page load time from 3.2s to 0.8s through optimized data fetching'
            ]
          }
        ],
        achievements: [
          'Best Engineering Impact Award - TechCorp Solutions (2023)',
          'Speaker at React India Conference 2024 on "Advanced React Performance Patterns"',
          'Published article on frontend architecture in TechCrunch (2023)',
          'Open source contributor to Next.js and React Query libraries',
          'Mentor at Women Who Code - Frontend Development Program'
        ],
        tools: ['React', 'TypeScript', 'Next.js', 'Redux', 'GraphQL', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Storybook', 'Figma', 'GitHub Actions'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Spanish (Conversational)']
      }
    },
    {
      id: 2,
      title: 'Full Stack Developer Resume',
      level: 'mid',
      specialization: 'fullstack',
      experience: '5 years',
      description: 'Professional resume sample for a Full Stack Developer with MERN stack expertise and AWS cloud experience. Features full-stack application development, microservices architecture, and cloud deployment skills.',
      skills: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS', 'PostgreSQL', 'Docker', 'REST APIs'],
      template: {
        name: 'PRIYA PATEL',
        credentials: 'Full Stack Developer | AWS Certified',
        email: 'priya.patel@email.com',
        phone: '+91 98765 43211',
        linkedin: 'linkedin.com/in/priyapatel',
        location: 'Hyderabad, India',
        summary: 'Full Stack Developer with 5+ years of experience building scalable web applications using the MERN stack and cloud technologies. Expertise in microservices architecture, database optimization, and end-to-end feature development. AWS Certified Developer with strong focus on performance and security.',
        education: [
          {
            degree: 'Master of Computer Applications',
            institution: 'National Institute of Technology (NIT), Trichy',
            year: '2017-2020',
            score: '9.2/10'
          },
          {
            degree: 'Bachelor of Computer Applications',
            institution: 'Christ University, Bangalore',
            year: '2014-2017',
            score: '8.5/10'
          }
        ],
        certifications: [
          'AWS Certified Developer - Associate',
          'MongoDB University Certification',
          'Node.js Certified Developer - OpenJS Foundation',
          'Docker Mastery Certification',
          'GraphQL Developer Certification - Apollo'
        ],
        skills: {
          languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'GraphQL'],
          frameworks: ['Node.js', 'Express', 'React', 'Next.js', 'Django', 'Spring Boot'],
          tools: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
          soft: ['Project Management', 'Client Communication', 'Team Collaboration', 'System Architecture', 'Technical Documentation']
        },
        experience: [
          {
            title: 'Full Stack Developer',
            company: 'TechCorp Solutions, Hyderabad',
            period: '2021-Present',
            points: [
              'Developed and maintained 8 production applications serving 500,000+ users across e-commerce and SaaS platforms',
              'Led migration from monolithic architecture to microservices, improving system reliability by 40%',
              'Designed and implemented RESTful and GraphQL APIs handling 10K+ requests per second',
              'Optimized database queries reducing average response time from 800ms to 120ms',
              'Mentored 3 junior developers through code reviews and pair programming sessions',
              'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70%'
            ]
          },
          {
            title: 'Software Developer',
            company: 'Innovative Solutions, Pune',
            period: '2019-2021',
            points: [
              'Built full-stack applications using React and Node.js for 15+ clients in fintech and healthcare sectors',
              'Implemented authentication and authorization using JWT and OAuth 2.0',
              'Managed AWS infrastructure including EC2, S3, RDS, and Lambda functions',
              'Reduced server costs by 35% through EC2 instance optimization and auto-scaling',
              'Created comprehensive API documentation using Swagger/OpenAPI'
            ]
          }
        ],
        projects: [
          {
            title: 'E-Commerce Platform',
            technologies: 'React, Node.js, MongoDB, AWS, Redis',
            points: [
              'Developed full-stack e-commerce platform handling 50,000+ products and 10,000+ daily users',
              'Implemented payment gateway integration with Stripe and PayPal',
              'Built real-time inventory management system with WebSocket notifications',
              'Deployed on AWS with auto-scaling, achieving 99.99% uptime',
              'Implemented Redis caching reducing database load by 60%'
            ]
          },
          {
            title: 'Task Management Application',
            technologies: 'React, Express, PostgreSQL, Docker, Kubernetes',
            points: [
              'Built real-time task management application with 5,000+ active users across 200+ teams',
              'Implemented role-based access control with 5 distinct user permission levels',
              'Containerized application with Docker and orchestrated with Kubernetes',
              'Achieved 98% test coverage with Jest and Supertest'
            ]
          }
        ],
        achievements: [
          'Employee of the Month (3 times) - TechCorp Solutions',
          'Best Project Award - Company Hackathon 2022',
          'Published technical blog post on Microservices Architecture (15,000+ reads)',
          'Contributed to open source MongoDB Node.js driver with 3 merged PRs',
          'Speaker at AWS User Group Hyderabad on "Serverless Architecture Patterns"'
        ],
        tools: ['Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'Kafka', 'GitHub Actions', 'Jenkins'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Telugu (Conversational)']
      }
    }
  ];

  // Breadcrumb schema for structured data
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
        "name": "Resume Examples",
        "item": "https://freeresumemaker.xyz/examples"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Software Engineering Resumes",
        "item": "https://freeresumemaker.xyz/professions/software-engineering"
      }
    ]
  };

  // ItemList schema for examples listing
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Software Engineering Resume Examples",
    "description": "Browse professional software engineering resume examples for frontend engineers and full stack developers. Sample resumes with React, TypeScript, Node.js, AWS, and system design expertise. Learn from real examples to create your winning software engineering resume for 2026.",
    "numberOfItems": resumeExamples.length,
    "itemListElement": resumeExamples.map((example, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": example.title,
      "description": example.description,
      "url": `https://freeresumemaker.xyz/professions/software-engineering/${example.id}`
    }))
  };

  const handleViewExample = (example) => {
    setSelectedExample(example);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExamples = () => {
    setSelectedExample(null);
  };

  // If an example is selected, show the detailed template view
  if (selectedExample) {
    return (
      <>
        <SEO 
          title={`${selectedExample.title} | Software Engineering Resume Example 2026 | Professional Sample`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience in ${selectedExample.specialization === 'frontend' ? 'frontend development with React, TypeScript' : 'full stack development with MERN stack, AWS'}. Includes projects, technical skills, and professional achievements. Customize with our free resume builder.`}
          keywords={`${selectedExample.title.toLowerCase()}, software engineer resume, frontend developer resume, full stack developer resume, ${selectedExample.specialization} developer resume, tech resume, software engineering CV, programming resume, developer resume 2026, ATS friendly tech resume`}
          canonical={`https://freeresumemaker.xyz/professions/software-engineering/${selectedExample.id}`}
          noindex={false}
        />

        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </Head>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '40px 20px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}>
          {/* Breadcrumb Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span>â€º</span>
            <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
            <span>â€º</span>
            <Link href="/professions/software-engineering" style={{ color: '#666', textDecoration: 'none' }}>Software Engineering Resumes</Link>
            <span>â€º</span>
            <span style={{ color: '#0070f3' }}>{selectedExample.title}</span>
          </nav>

          {/* Back button */}
          <button
            onClick={handleBackToExamples}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#666',
              textDecoration: 'none',
              marginBottom: '30px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef';
              e.currentTarget.style.color = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
              e.currentTarget.style.color = '#666';
            }}
          >
            â† Back to All Software Engineering Resume Examples
          </button>

          {/* Template Header */}
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #e9ecef',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h1 style={{ fontSize: '24px', marginBottom: '8px', color: '#1a1a1a' }}>
                {selectedExample.title}: Complete Sample with {selectedExample.experience} Experience
              </h1>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                Professional software engineering resume template for {selectedExample.specialization === 'frontend' ? 'frontend engineering roles' : 'full stack development positions'} | Updated for 2026 hiring season
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <span style={{
                background: '#e3f2fd',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'capitalize'
              }}>
                {selectedExample.specialization === 'frontend' ? 'Frontend Engineering' : 'Full Stack Development'}
              </span>
            </div>
          </div>

          {/* Resume Template */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '32px', marginBottom: '4px', color: '#1a1a1a' }}>
                {selectedExample.template.name}
              </h1>
              {selectedExample.template.credentials && (
                <p style={{ fontSize: '16px', color: '#0070f3', marginBottom: '8px', fontWeight: 500 }}>
                  {selectedExample.template.credentials}
                </p>
              )}
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span>{selectedExample.template.email}</span>
                <span>|</span>
                <span>{selectedExample.template.phone}</span>
                <span>|</span>
                <span>{selectedExample.template.linkedin}</span>
              </div>
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
                {selectedExample.template.location}
              </div>
              
              {/* Professional Summary */}
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                borderLeft: '4px solid #0070f3'
              }}>
                <p style={{ margin: 0, color: '#333', fontStyle: 'italic' }}>
                  {selectedExample.template.summary}
                </p>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                EDUCATION
              </h2>
              {selectedExample.template.education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>{edu.degree}</p>
                  <p style={{ color: '#666', marginBottom: '2px' }}>{edu.institution} | {edu.year}</p>
                  {edu.score && <p style={{ color: '#666' }}>CGPA: {edu.score}</p>}
                </div>
              ))}
            </div>

            {/* Professional Certifications */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                PROFESSIONAL CERTIFICATIONS
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {selectedExample.template.certifications.map((cert, index) => (
                  <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{cert}</li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                TECHNICAL SKILLS
              </h2>
              {selectedExample.template.skills.languages && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Programming Languages:</strong> {selectedExample.template.skills.languages.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.frameworks && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Frameworks & Libraries:</strong> {selectedExample.template.skills.frameworks.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.tools && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Tools & Technologies:</strong> {selectedExample.template.skills.tools.join(', ')}
                </p>
              )}
              <p style={{ marginBottom: '4px' }}>
                <strong>Professional Competencies:</strong> {selectedExample.template.skills.soft.join(', ')}
              </p>
            </div>

            {/* Work Experience */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                PROFESSIONAL EXPERIENCE
              </h2>
              {selectedExample.template.experience.map((exp, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '2px' }}>
                      {exp.title} | {exp.company}
                    </p>
                    <p style={{ color: '#666', fontSize: '14px' }}>{exp.period}</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                KEY PROJECTS
              </h2>
              {selectedExample.template.projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {project.title} | {project.technologies}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {project.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {selectedExample.template.achievements && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  ACHIEVEMENTS & AWARDS
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Developer Tools & Technologies */}
            {selectedExample.template.tools && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  DEVELOPMENT TOOLS & TECHNOLOGIES
                </h2>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {selectedExample.template.tools.map((tool, index) => (
                    <span key={index} style={{
                      background: '#f0f7ff',
                      color: '#0070f3',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {selectedExample.template.languages && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  LANGUAGE PROFICIENCY
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.languages.map((lang, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Note about templates */}
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #e9ecef',
            fontSize: '14px',
            color: '#666'
          }}>
            <p style={{ margin: 0 }}>
              This is a sample software engineering resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized software engineering resume with 20+ ATS-friendly templates designed for tech professionals.
            </p>
          </div>
        </div>
      </>
    );
  }

  // Main listing page
  return (
    <>
      <SEO 
        title="Software Engineering Resume Examples | Frontend & Full Stack Developer Resumes 2026"
        description="Browse professional software engineering resume examples for frontend engineers, full stack developers, backend engineers, and DevOps professionals. Sample resumes with React, TypeScript, Node.js, AWS, system design, and microservices architecture. Learn from real examples to create your winning software engineering resume for the 2026 hiring season."
        keywords="software engineer resume, frontend developer resume, full stack developer resume, backend engineer resume, programming resume, tech resume, software engineering CV, React developer resume, Node.js developer resume, AWS developer resume, developer resume examples, software engineer resume 2026"
        canonical="https://freeresumemaker.xyz/professions/software-engineering"
        image="https://freeresumemaker.xyz/images/professions/software-engineering-og.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
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
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>Software Engineering Resumes</span>
        </nav>

        {/* Development Notice */}
        <div style={{
          background: '#fff3cd',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.95rem',
          border: '1px solid #ffc107'
        }}>
          <p style={{margin: 0, color: '#856404'}}>
            More software engineering resume examples are being added weekly. Check back soon for additional samples including Backend Engineers, DevOps Specialists, Mobile Developers, and Engineering Managers.
          </p>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Software Engineering Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional software engineering resume samples for frontend, full stack, and backend roles.
            Each example includes technical projects, programming languages, and quantifiable achievements that tech recruiters look for.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Frontend Engineers | Full Stack Developers | Backend Engineers | DevOps Specialists | Mobile Developers | Software Architects | Engineering Managers
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '40px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>{resumeExamples.length}+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Sample Resumes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>React â€¢ Node.js â€¢ AWS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Modern Tech Stack</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>System Design</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Scalable Architecture</div>
          </div>
        </div>

        {/* Examples Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {resumeExamples.map(example => (
            <div
              key={example.id}
              onClick={() => handleViewExample(example)}
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={{
                marginBottom: '16px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  marginBottom: '8px',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {example.title}
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: '8px'
                }}>
                  <span style={{
                    background: '#e6f7ff',
                    color: '#0070f3',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {example.level}
                  </span>
                  <span style={{
                    background: '#f0f4f8',
                    color: '#666',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px'
                  }}>
                    {example.experience} experience
                  </span>
                  <span style={{
                    background: '#f0f4f8',
                    color: '#666',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    textTransform: 'capitalize'
                  }}>
                    {example.specialization === 'frontend' ? 'Frontend Engineering' : 'Full Stack Development'}
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {example.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {example.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} style={{
                    background: '#f0f7ff',
                    color: '#0070f3',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {skill}
                  </span>
                ))}
                {example.skills.length > 4 && (
                  <span style={{
                    color: '#999',
                    fontSize: '12px',
                    padding: '4px 0'
                  }}>
                    +{example.skills.length - 4} more
                  </span>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #e9ecef',
                paddingTop: '16px'
              }}>
                <span style={{
                  color: '#0070f3',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  View Complete Resume â†’
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            Tips for Creating Effective Software Engineering Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Technical Projects with GitHub Links</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include links to your GitHub repositories and describe your contributions to open source or personal projects. Recruiters want to see your actual code quality and problem-solving approach.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Modern Technologies</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List specific programming languages, frameworks, and tools you're proficient in. Include React, TypeScript, Node.js, Python, AWS, Docker, and Kubernetes to demonstrate current technical expertise.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Achievements with Metrics</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use concrete numbers: "Improved performance by 50%", "Reduced load time from 3s to 0.8s", "Built applications serving 1M+ users", "Mentored 4 junior engineers with 2 promoted".</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include System Design and Architecture</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Demonstrate your ability to design scalable systems by mentioning microservices architecture, database optimization, caching strategies, and cloud infrastructure you've worked with.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px'
          }}>
            Build Your Professional Software Engineering Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for software engineers and developers. Create a resume that showcases your technical skills, projects, and system design expertise.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Create Your Resume Now â†’
          </Link>
        </div>

       
        
      </div>
    </>
  );
}
