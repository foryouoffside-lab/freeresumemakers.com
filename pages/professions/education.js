// pages/professions/education.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function EducationExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 education resume examples with enhanced metrics
  const resumeExamples = [
    {
      id: 1,
      title: 'School Teacher Resume',
      level: 'senior',
      specialization: 'teaching',
      experience: '10+ years',
      description: 'Sample resume for a school teacher specializing in Mathematics and Science education, featuring curriculum development and student achievement expertise.',
      skills: ['Lesson Planning', 'Classroom Management', 'Curriculum Development', 'Student Assessment', 'Parent Communication', 'Differentiated Instruction'],
      template: {
        name: 'ANITA SHARMA',
        credentials: 'B.Ed, M.Sc (Mathematics)',
        email: 'anita.sharma@email.com',
        phone: '+91 98765 43218',
        linkedin: 'linkedin.com/in/anitasharma',
        location: 'Delhi NCR',
        certification: 'Central Teacher Eligibility Test (CTET) Qualified | 2014',
        summary: 'Dedicated Mathematics teacher with 10+ years of experience in secondary education. Proven track record of improving student performance through innovative teaching methods. Expertise in curriculum development and fostering a positive learning environment.',
        education: [
          {
            degree: 'Bachelor of Education (B.Ed)',
            institution: 'Lady Shri Ram College for Women, Delhi University',
            year: '2012-2014',
            specialization: 'Mathematics & Science',
            percentage: '87%'
          },
          {
            degree: 'M.Sc in Mathematics',
            institution: 'Hindu College, Delhi University',
            year: '2010-2012',
            percentage: '85%',
            rank: 'University Gold Medalist'
          },
          {
            degree: 'B.Sc in Mathematics (Hons)',
            institution: 'Hindu College, Delhi University',
            year: '2007-2010',
            percentage: '82%'
          }
        ],
        certifications: [
          'CTET (Central Teacher Eligibility Test) - Qualified',
          'Cambridge International Certificate in Teaching English',
          'Google Certified Educator Level 1',
          'Child Protection and Safeguarding Certification',
          'Microsoft Innovative Educator Expert'
        ],
        skills: {
          teaching: ['Lesson Planning', 'Curriculum Design', 'Student Assessment', 'Classroom Management', 'Differentiated Instruction', 'Project-Based Learning'],
          subjects: ['Mathematics (Algebra, Calculus, Geometry)', 'General Science', 'Physics', 'Statistics'],
          technology: ['Google Classroom', 'Microsoft Teams', 'Smart Boards', 'Zoom', 'Kahoot!', 'Edmodo', 'Canva'],
          soft: ['Communication', 'Patience', 'Empathy', 'Leadership', 'Creativity', 'Conflict Resolution']
        },
        experience: [
          {
            title: 'PGT Mathematics',
            school: 'Delhi Public School (DPS), RK Puram',
            period: '2018-Present',
            points: [
              'Teach Mathematics to 120+ students in classes 11th and 12th (CBSE curriculum)',
              'Developed innovative teaching methods improving average student scores by 25%',
              'Mentored 15 students for Olympiad exams, with 3 students achieving national rankings',
              'Coordinate curriculum across the Mathematics department for 8 teachers',
              'Organized annual Mathematics exhibition attracting 500+ participants',
              'Achieved 100% pass rate for 5 consecutive years with 40% students scoring 90%+'
            ]
          },
          {
            title: 'TGT Mathematics & Science',
            school: 'Army Public School, Dhaula Kuan',
            period: '2014-2018',
            points: [
              'Taught Mathematics and Science to 200+ students in classes 6th-10th',
              'Introduced activity-based learning methods, increasing student engagement by 50%',
              'Coordinated Science Fair with 100+ student projects',
              'Received "Best Teacher Award" for innovative teaching methods in 2017',
              'Improved average class performance from 68% to 82% within 2 years'
            ]
          }
        ],
        achievements: [
          'Best Teacher Award - Army Public School (2017)',
          'Innovative Teaching Excellence Award - DPS Society (2022)',
          'Published article on Mathematics teaching in Education Times (circulation: 100,000+)',
          'Resource Person for CBSE Teacher Training Workshops (2023) - Trained 200+ teachers',
          'Developed mathematics curriculum adopted by 5 schools in Delhi NCR'
        ],
        subjects: [
          'Mathematics (Classes 6-12)',
          'Science (Classes 6-10)',
          'Physics (Classes 9-10)',
          'Statistics (Class 11-12)'
        ],
        extracurricular: [
          'Coordinator - Mathematics Club (2018-Present)',
          'Coach - School Quiz Team (Won 3 inter-school competitions)',
          'Organizer - Annual Science Exhibition (5 years)',
          'Member - School Academic Council (2020-Present)',
          'Founder - Peer Tutoring Program (Mentored 50+ students)'
        ]
      }
    },
    {
      id: 2,
      title: 'University Professor Resume',
      level: 'senior',
      specialization: 'higher-education',
      experience: '12+ years',
      description: 'Sample resume for an Associate Professor of Economics with PhD and research experience, featuring publications and PhD supervision expertise.',
      skills: ['University Teaching', 'Research', 'PhD Supervision', 'Academic Publishing', 'Curriculum Design', 'Econometrics'],
      template: {
        name: 'DR. VIKRAM SINGH',
        credentials: 'PhD, M.Phil, MA (Economics)',
        email: 'vikram.singh@email.com',
        phone: '+91 98765 43219',
        linkedin: 'linkedin.com/in/drvikramsingh',
        location: 'Mumbai, India',
        summary: 'Associate Professor of Economics with 12+ years of experience in higher education. Published 25+ research papers in peer-reviewed journals. Successfully supervised 8 PhD scholars and 25+ master\'s theses. Expertise in econometrics and development economics.',
        education: [
          {
            degree: 'PhD in Economics',
            institution: 'Delhi School of Economics (DSE), Delhi University',
            year: '2008-2012',
            thesis: 'Impact of Microfinance on Rural Development in India: A Panel Data Analysis',
            guide: 'Prof. Amartya Sen'
          },
          {
            degree: 'M.Phil in Economics',
            institution: 'Jawaharlal Nehru University (JNU), Delhi',
            year: '2006-2008',
            percentage: '82%',
            thesis: 'Financial Inclusion and Economic Growth in India'
          },
          {
            degree: 'MA in Economics',
            institution: 'St. Stephen\'s College, Delhi University',
            year: '2004-2006',
            percentage: '88%',
            rank: 'First Class with Distinction'
          },
          {
            degree: 'BA (Hons) Economics',
            institution: 'St. Stephen\'s College, Delhi University',
            year: '2001-2004',
            percentage: '85%'
          }
        ],
        certifications: [
          'UGC-NET Qualified (2006) - Top 1% nationally',
          'Teaching Excellence Certificate - HRDC, IIT Bombay',
          'Online Teaching Certification - SWAYAM (NPTEL)',
          'Research Methodology Workshop - IIT Bombay',
          'Advanced Econometrics Certificate - ISI Kolkata'
        ],
        skills: {
          teaching: ['Lectures', 'Seminars', 'Tutorials', 'Student Mentoring', 'Curriculum Design', 'Online Pedagogy'],
          research: ['Econometrics', 'Statistical Analysis', 'SPSS', 'STATA', 'R Programming', 'Python', 'Panel Data Analysis'],
          subjects: ['Microeconomics', 'Macroeconomics', 'Development Economics', 'Indian Economy', 'Econometrics', 'Research Methodology'],
          soft: ['Public Speaking', 'Academic Writing', 'Critical Thinking', 'Mentoring', 'Grant Writing', 'Peer Review']
        },
        experience: [
          {
            title: 'Associate Professor of Economics',
            university: 'St. Xavier\'s College (Autonomous), Mumbai',
            period: '2016-Present',
            points: [
              'Teach Microeconomics and Development Economics to 500+ undergraduate and postgraduate students annually',
              'Supervise 8 PhD scholars, with 3 completed and 5 in progress',
              'Published 18 research papers in Scopus/WoS indexed journals with 500+ citations',
              'Secured ₹50 Lakh in research grants from ICSSR, UGC, and Ministry of Education',
              'Designed and launched new curriculum for MA Economics program',
              'Organized 5 national and 2 international conferences with 1,000+ participants'
            ]
          },
          {
            title: 'Assistant Professor of Economics',
            university: 'Hindu College, Delhi University',
            period: '2010-2016',
            points: [
              'Taught Macroeconomics and Indian Economy to 800+ undergraduate students',
              'Published 12 research papers in national and international journals',
              'Co-authored textbook "Indian Economy: Principles and Policies" used in 15+ universities',
              'Organized 3 national-level seminars and conferences',
              'Received "Young Economist Award" from Indian Economic Association (2015)',
              'Mentored 25+ master\'s thesis students with 5 receiving university medals'
            ]
          }
        ],
        publications: [
          {
            title: '"Digital Transformation of Indian Banking: Challenges and Opportunities"',
            journal: 'Journal of Economic Studies (Scopus Indexed, Impact Factor: 2.8)',
            year: '2023',
            authors: 'Singh, V., Sharma, P.',
            citations: '15'
          },
          {
            title: '"Impact of GST on Small and Medium Enterprises in India"',
            journal: 'Economic & Political Weekly (Scopus Indexed)',
            year: '2022',
            authors: 'Singh, V.',
            citations: '28'
          },
          {
            title: '"Microfinance and Women Empowerment: Evidence from Rural India"',
            journal: 'Indian Journal of Economics (ABDC Rank B)',
            year: '2021',
            authors: 'Singh, V., Gupta, A.',
            citations: '42'
          },
          {
            title: '"Book: Indian Economy: Principles and Policies"',
            publisher: 'Oxford University Press',
            year: '2020',
            authors: 'Singh, V., Kumar, R.',
            isbn: '978-0190123456'
          }
        ],
        conferences: [
          'Presented paper at World Economic Conference, London (2023)',
          'Keynote Speaker at Indian Economic Association Annual Meet (2022)',
          'Panelist at "Future of Higher Education" - FICCI Higher Education Summit (2023)',
          'Resource Person for UGC-HRDC Faculty Development Programs (5 workshops)',
          'Session Chair at International Conference on Development Economics, IIT Delhi (2021)'
        ],
        achievements: [
          'Young Economist Award - Indian Economic Association (2015)',
          'Best Research Paper Award - Indian Journal of Economics (2021)',
          'Excellence in Teaching Award - St. Xavier\'s College (2019, 2022)',
          'Member - Board of Studies, Mumbai University (2021-Present)',
          'Recipient of ICSSR Senior Research Fellowship (2023)'
        ],
        grants: [
          'ICSSR Research Grant: ₹25 Lakh for project on "Digital Economy and Employment" (2022-24)',
          'UGC Major Research Project: ₹15 Lakh for "Microfinance Impact Study" (2019-22)',
          'Ministry of Education Grant: ₹10 Lakh for curriculum development (2021)'
        ]
      }
    }
  ];

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Examples",
        "item": "https://freeresumemakers.com/examples"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Education",
        "item": "https://freeresumemakers.com/professions/education"
      }
    ]
  };

  // ItemList schema for examples
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Education Resume Examples",
    "description": "Browse professional education resume examples for school teachers and university professors. Sample resumes with teaching experience, research publications, and student achievement metrics.",
    "numberOfItems": resumeExamples.length,
    "itemListElement": resumeExamples.map((example, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": example.title,
      "description": example.description
    }))
  };

  const handleViewExample = (example) => {
    setSelectedExample(example);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExamples = () => {
    setSelectedExample(null);
  };

  // If an example is selected, show the template
  if (selectedExample) {
    return (
      <>
        <SEO 
          title={`${selectedExample.title} | Education Resume Example 2026 | Free Sample Template`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience. Includes ${selectedExample.skills.slice(0, 3).join(', ')} and more. Download as template or customize with our free resume builder.`}
          keywords={`${selectedExample.title.toLowerCase()}, education resume, teaching resume, ${selectedExample.specialization} resume, school teacher CV, university professor resume, academic CV sample, teacher resume example, professor CV template, education resume 2026`}
          canonical={`https://freeresumemakers.com/professions/education/${selectedExample.id}`}
          noindex={false}
        />

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
            <span>›</span>
            <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
            <span>›</span>
            <Link href="/professions/education" style={{ color: '#666', textDecoration: 'none' }}>Education Resumes</Link>
            <span>›</span>
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
            ← Back to All Education Resume Examples
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
                Professional resume template for {selectedExample.specialization === 'teaching' ? 'K-12 educators' : 'higher education faculty'} | Updated for 2026 hiring season
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
                {selectedExample.specialization === 'teaching' ? 'K-12 Teacher' : 'University Professor'}
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
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                {selectedExample.template.location}
              </div>
              {selectedExample.template.certification && (
                <div style={{
                  background: '#e6f7ff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginBottom: '15px',
                  fontSize: '14px',
                  color: '#0070f3',
                  fontWeight: 500,
                  border: '1px solid #bbdefb'
                }}>
                  {selectedExample.template.certification}
                </div>
              )}
              
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
                <div key={index} style={{ marginBottom: '15px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {edu.degree}
                  </p>
                  <p style={{ color: '#666', marginBottom: '2px' }}>
                    {edu.institution} | {edu.year}
                  </p>
                  {edu.thesis && (
                    <p style={{ color: '#666', marginBottom: '2px', fontStyle: 'italic' }}>
                      Thesis: {edu.thesis}
                      {edu.guide && ` (Guide: ${edu.guide})`}
                    </p>
                  )}
                  {edu.specialization && (
                    <p style={{ color: '#666', marginBottom: '2px' }}>
                      Specialization: {edu.specialization}
                    </p>
                  )}
                  {edu.percentage && (
                    <p style={{ color: '#666', marginBottom: '2px' }}>
                      Percentage: {edu.percentage}
                    </p>
                  )}
                  {edu.rank && (
                    <p style={{ color: '#666' }}>
                      <strong>Achievement:</strong> {edu.rank}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                CERTIFICATIONS & QUALIFICATIONS
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {selectedExample.template.certifications.map((cert, index) => (
                  <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{cert}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                PROFESSIONAL SKILLS
              </h2>
              {selectedExample.template.skills.teaching && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Teaching & Instruction:</strong> {selectedExample.template.skills.teaching.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.research && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Research & Analysis:</strong> {selectedExample.template.skills.research.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.subjects && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Subject Matter Expertise:</strong> {selectedExample.template.skills.subjects.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.technology && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Educational Technology:</strong> {selectedExample.template.skills.technology.join(', ')}
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
                      {exp.title} | {exp.school || exp.university}
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

            {/* Publications (for Professor) */}
            {selectedExample.template.publications && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  SELECTED PUBLICATIONS
                </h2>
                {selectedExample.template.publications.map((pub, index) => (
                  <div key={index} style={{ marginBottom: '12px' }}>
                    <p style={{ margin: 0, color: '#666' }}>
                      <strong>"{pub.title}"</strong>
                    </p>
                    <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>
                      {pub.journal || pub.publisher}, {pub.year}
                      {pub.authors && ` | Authors: ${pub.authors}`}
                      {pub.citations && ` | Citations: ${pub.citations}`}
                      {pub.isbn && ` | ISBN: ${pub.isbn}`}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Conferences (for Professor) */}
            {selectedExample.template.conferences && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  CONFERENCES & PRESENTATIONS
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.conferences.map((conf, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{conf}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Grants (for Professor) */}
            {selectedExample.template.grants && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  RESEARCH GRANTS & FUNDING
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.grants.map((grant, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{grant}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Subjects Taught (for Teacher) */}
            {selectedExample.template.subjects && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  SUBJECTS TAUGHT
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.subjects.map((subject, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Extracurricular (for Teacher) */}
            {selectedExample.template.extracurricular && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  EXTRACURRICULAR INVOLVEMENT & LEADERSHIP
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.extracurricular.map((item, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

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
              This is a sample education resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized teaching or academic resume with 20+ ATS-friendly templates designed for education professionals.
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
        title="Education Resume Examples | Professional Teaching & Academic Resumes 2026"
        description="Browse 20+ professional education resume examples for school teachers, university professors, administrators, and academic professionals. Sample resumes with teaching experience, curriculum development, research publications, student achievement metrics, and certifications like CTET, UGC-NET. Learn from real examples to create your winning education resume and land your dream teaching or academic job in 2026."
        keywords="education resume, teaching resume, teacher resume, professor resume, academic resume, school teacher resume, university professor CV, mathematics teacher resume, economics professor resume, curriculum vitae, teacher CV example, academic CV, CTET resume, B.Ed resume, higher education resume, education resume examples 2026, teacher resume samples"
        canonical="https://freeresumemakers.com/professions/education"
        image="https://freeresumemakers.com/images/professions/education-og.jpg"
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
          <span>›</span>
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Education Resumes</span>
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
            More education resume examples are being added weekly. Check back soon for additional samples including school administrators, special education teachers, and college instructors.
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
            Education Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional resume samples for educators, from K-12 teachers to university professors. 
            Each example includes teaching experience, student outcomes, certifications, and skills that hiring managers look for.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Classroom Teachers | Subject Matter Experts | School Administrators | University Faculty | Academic Researchers | Curriculum Developers
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
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>K-12 • Higher Ed</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Teaching & Research Roles</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>CTET • UGC-NET • PhD</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Professional Certifications</div>
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
                    {example.specialization === 'teaching' ? 'K-12 Teacher' : 'University Professor'}
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
                  View Complete Resume →
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
            Tips for Creating Effective Education Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Student Outcomes</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific metrics: "Improved class scores by 25%", "100% pass rate for 5 consecutive years", "Mentored 15 Olympiad students with 3 achieving national rankings". Numbers make your impact tangible to hiring committees.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Professional Certifications</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include teaching credentials like CTET, TET, state teaching licenses, and professional development certifications such as Google Certified Educator or Cambridge Teaching Certificate.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Research & Publications</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>For academic roles, list peer-reviewed publications with citation counts, conference presentations, research grants received, and PhD/master's supervision experience.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Extracurricular Leadership</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Schools value well-rounded educators. Include coaching roles, club sponsorships, committee memberships, and community involvement to demonstrate initiative beyond classroom teaching.</p>
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
            Build Your Professional Education Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for teachers, professors, and education professionals. Get hired faster with a resume that showcases your teaching excellence.
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
            Create Your Resume Now →
          </Link>
        </div>

       
      </div>
    </>
  );
}