// pages/professions/healthcare.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function HealthcareExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 healthcare resume examples
  const resumeExamples = [
    {
      id: 1,
      title: 'Registered Nurse (RN) Resume',
      level: 'senior',
      specialization: 'nursing',
      experience: '8+ years',
      description: 'Sample resume for a registered nurse with critical care and emergency room experience, featuring CCRN certification and ICU expertise.',
      skills: ['Critical Care', 'Patient Assessment', 'EMR Systems', 'Wound Care', 'Medication Administration', 'Ventilator Management'],
      template: {
        name: 'PRIYA SHARMA',
        credentials: 'RN, BSN, CCRN',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43216',
        linkedin: 'linkedin.com/in/priyasharma',
        license: 'Registered Nurse License #RN123456 | Valid till 2028',
        summary: 'Registered Nurse with 8+ years of experience in critical care and emergency medicine. Skilled in patient assessment, care planning, and interdisciplinary collaboration. Dedicated to providing compassionate, evidence-based patient care.',
        education: {
          degree: 'Bachelor of Science in Nursing (BSN)',
          institution: 'Christian Medical College (CMC), Vellore',
          year: '2012-2016',
          gpa: '8.7/10',
          clinicalRotations: ['Critical Care', 'Emergency Medicine', 'Pediatrics', 'Obstetrics', 'Community Health', 'Psychiatric Nursing']
        },
        certifications: [
          'CCRN (Critical Care Registered Nurse) - American Association of Critical-Care Nurses',
          'BLS (Basic Life Support) - American Heart Association',
          'ACLS (Advanced Cardiovascular Life Support) - American Heart Association',
          'PALS (Pediatric Advanced Life Support) - American Heart Association',
          'NIH Stroke Scale Certification',
          'TNCC (Trauma Nursing Core Course)'
        ],
        skills: {
          clinical: ['Patient Assessment', 'IV Insertion', 'Wound Care', 'Medication Administration', 'Ventilator Management', 'Central Line Care', 'Tracheostomy Care', 'ECG Interpretation'],
          systems: ['Epic', 'Cerner', 'Meditech', 'Allscripts', 'Picis'],
          specialties: ['Critical Care', 'Emergency Room', 'Post-Anesthesia Care Unit (PACU)', 'Medical-Surgical', 'Telemetry'],
          soft: ['Compassion', 'Communication', 'Team Collaboration', 'Stress Management', 'Critical Thinking', 'Patient Advocacy']
        },
        experience: [
          {
            title: 'Senior Registered Nurse - Critical Care',
            facility: 'Apollo Hospitals, Delhi',
            period: '2020-Present',
            points: [
              'Provide care to critically ill patients in a 20-bed ICU, managing 4-6 patients per shift',
              'Monitor vital signs, administer medications, and manage ventilators for patients with complex conditions',
              'Collaborate with multidisciplinary team of 15+ physicians and specialists to develop treatment plans',
              'Mentor and train 10+ new graduate nurses and nursing students annually',
              'Implemented new patient assessment protocol reducing medication errors by 25%',
              'Achieved 98% patient satisfaction scores through compassionate, patient-centered care'
            ]
          },
          {
            title: 'Staff Nurse - Emergency Department',
            facility: 'Fortis Hospital, Mumbai',
            period: '2016-2020',
            points: [
              'Treated 50+ emergency patients daily in a Level 1 Trauma Center',
              'Performed rapid patient triage and prioritization based on acuity using ESI system',
              'Assisted in 200+ emergency procedures including intubations, central line placements, and chest tubes',
              'Received "Emergency Nurse of the Year" award for exceptional performance in high-stress situations',
              'Trained 5 new staff members on emergency protocols and trauma care procedures'
            ]
          }
        ],
        achievements: [
          'Nurse of the Year 2024 - Apollo Hospitals',
          'Emergency Nurse of the Year 2018 - Fortis Hospital',
          'Published article in "Indian Journal of Nursing" on critical care best practices',
          'Volunteer nurse for disaster relief missions (COVID-19 response, flood relief)',
          'Excellence in Patient Care Award - 3 consecutive years'
        ],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Malayalam (Conversational)', 'Tamil (Basic)']
      }
    },
    {
      id: 2,
      title: 'Healthcare Administrator Resume',
      level: 'mid',
      specialization: 'administration',
      experience: '6 years',
      description: 'Sample resume for a healthcare administrator with hospital operations experience, featuring NABH accreditation and budget management expertise.',
      skills: ['Hospital Operations', 'Healthcare Compliance', 'Budget Management', 'Staff Supervision', 'Patient Relations', 'Quality Improvement'],
      template: {
        name: 'RAJESH KUMAR',
        credentials: 'MBA, MHA',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43217',
        linkedin: 'linkedin.com/in/rajeshkumar',
        summary: 'Healthcare Administrator with 6+ years of experience in hospital operations and healthcare management. Skilled in optimizing workflows, managing budgets, and ensuring regulatory compliance. Proven track record of improving patient satisfaction and operational efficiency.',
        education: [
          {
            degree: 'Master of Hospital Administration (MHA)',
            institution: 'Tata Institute of Social Sciences (TISS), Mumbai',
            year: '2016-2018',
            gpa: '8.5/10'
          },
          {
            degree: 'Bachelor of Business Administration (BBA)',
            institution: 'Christ University, Bangalore',
            year: '2013-2016',
            gpa: '8.2/10'
          }
        ],
        certifications: [
          'Certified Healthcare Administrator (CHA) - Indian Healthcare Association',
          'Lean Six Sigma Green Belt',
          'Project Management Professional (PMP) - in progress',
          'HIPAA Compliance Certification',
          'NABH Assessor Training Program'
        ],
        skills: {
          core: ['Hospital Operations', 'Healthcare Compliance', 'Budget Planning', 'Staff Management', 'Quality Improvement', 'Strategic Planning'],
          software: ['MS Office', 'Tally', 'SAP Healthcare', 'HIS Software', 'Epic', 'Meditech'],
          regulations: ['NABH Standards', 'Clinical Establishments Act', 'Biomedical Waste Rules', 'Patient Safety Standards', 'Clinical Governance'],
          soft: ['Leadership', 'Problem Solving', 'Communication', 'Crisis Management', 'Team Building', 'Negotiation']
        },
        experience: [
          {
            title: 'Assistant Hospital Administrator',
            facility: 'Manipal Hospitals, Bangalore',
            period: '2020-Present',
            points: [
              'Oversee daily operations of 350-bed multi-specialty hospital with 500+ staff members',
              'Assist in managing ₹150Cr annual budget and identified ₹5Cr cost savings opportunities',
              'Reduced patient wait times by 35% through workflow redesign and process optimization',
              'Ensure compliance with NABH accreditation standards, achieving 95% compliance score',
              'Led implementation of new electronic health record system across 5 departments',
              'Improved patient satisfaction scores from 82% to 91% within 18 months'
            ]
          },
          {
            title: 'Hospital Operations Coordinator',
            facility: 'Columbia Asia Hospital, Pune',
            period: '2018-2020',
            points: [
              'Coordinated daily operations including patient flow and bed management for 150-bed facility',
              'Improved patient satisfaction scores from 78% to 86% through service improvements',
              'Reduced average discharge time from 4 hours to 2.5 hours through streamlined processes',
              'Managed scheduling for 50+ physicians across 12 departments',
              'Implemented staff scheduling system reducing overtime costs by 20%'
            ]
          }
        ],
        achievements: [
          'Excellence in Healthcare Administration Award 2025',
          'Successfully led hospital through NABH accreditation with 95% compliance',
          'Implemented telemedicine services during COVID-19 pandemic, serving 5,000+ patients',
          'Published case study on operational efficiency in hospitals in Healthcare Management Journal',
          'Cost Saving Champion Award - Manipal Hospitals (2024)'
        ],
        projects: [
          {
            title: 'OPD Workflow Optimization',
            description: 'Led project to reduce patient wait times and improve outpatient experience',
            results: [
              'Reduced average wait time from 45 minutes to 25 minutes',
              'Increased daily patient capacity from 200 to 350 patients',
              'Implemented digital queue management system with real-time tracking',
              'Achieved 92% patient satisfaction rating for OPD services'
            ]
          }
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
        "name": "Resume Examples",
        "item": "https://freeresumemakers.com/examples"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Healthcare Resumes",
        "item": "https://freeresumemakers.com/professions/healthcare"
      }
    ]
  };

  // ItemList schema for examples
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Healthcare Resume Examples",
    "description": "Browse professional healthcare resume examples for registered nurses, ICU nurses, and healthcare administrators. Sample resumes with clinical skills, certifications, and operational achievements for 2026 hiring season.",
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
          title={`${selectedExample.title} | Healthcare Resume Example 2026 | Free Sample Template`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience. Includes ${selectedExample.skills.slice(0, 3).join(', ')} and more. Download as template or customize with our free resume builder for healthcare professionals.`}
          keywords={`${selectedExample.title.toLowerCase()}, healthcare resume, nursing resume, registered nurse resume, ICU nurse resume, hospital administrator resume, medical resume, clinical resume, healthcare management CV, RN resume examples, healthcare resume 2026, CCRN resume`}
          canonical={`https://freeresumemakers.com/professions/healthcare/${selectedExample.id}`}
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
            <Link href="/professions/healthcare" style={{ color: '#666', textDecoration: 'none' }}>Healthcare Resumes</Link>
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
            ← Back to All Healthcare Resume Examples
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
                Professional resume template for {selectedExample.specialization === 'nursing' ? 'registered nurses and critical care professionals' : 'healthcare administration and hospital management'} | Updated for 2026 hiring season
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
                {selectedExample.specialization === 'nursing' ? 'Clinical Nursing' : 'Hospital Administration'}
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
              {selectedExample.template.license && (
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
                  {selectedExample.template.license}
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
              {Array.isArray(selectedExample.template.education) ? (
                selectedExample.template.education.map((edu, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {edu.degree}
                    </p>
                    <p style={{ color: '#666', marginBottom: '2px' }}>
                      {edu.institution} | {edu.year}
                    </p>
                    <p style={{ color: '#666' }}>
                      CGPA: {edu.gpa}
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {selectedExample.template.education.degree}
                  </p>
                  <p style={{ color: '#666', marginBottom: '4px' }}>
                    {selectedExample.template.education.institution} | {selectedExample.template.education.year}
                  </p>
                  <p style={{ color: '#666', marginBottom: '4px' }}>
                    CGPA: {selectedExample.template.education.gpa}
                  </p>
                  {selectedExample.template.education.clinicalRotations && (
                    <p style={{ color: '#666' }}>
                      <strong>Clinical Rotations:</strong> {selectedExample.template.education.clinicalRotations.join(', ')}
                    </p>
                  )}
                </div>
              )}
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
                PROFESSIONAL CERTIFICATIONS & LICENSES
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
                CLINICAL & PROFESSIONAL SKILLS
              </h2>
              {selectedExample.template.skills.clinical && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Clinical Skills:</strong> {selectedExample.template.skills.clinical.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.systems && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>EMR & Healthcare Systems:</strong> {selectedExample.template.skills.systems.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.specialties && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Clinical Specialties:</strong> {selectedExample.template.skills.specialties.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.core && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Core Competencies:</strong> {selectedExample.template.skills.core.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.software && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Software & Tools:</strong> {selectedExample.template.skills.software.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.regulations && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Regulatory Knowledge:</strong> {selectedExample.template.skills.regulations.join(', ')}
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
                      {exp.title} | {exp.facility}
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
            {selectedExample.template.projects && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  KEY PROJECTS & INITIATIVES
                </h2>
                {selectedExample.template.projects.map((project, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{project.title}</p>
                    <p style={{ color: '#666', marginBottom: '4px' }}>{project.description}</p>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {project.results.map((result, i) => (
                        <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{result}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
              This is a sample healthcare resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized healthcare resume with 20+ ATS-friendly templates designed for nurses, administrators, and medical professionals.
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
        title="Healthcare Resume Examples | Professional Nursing & Medical Resumes 2026 | Free Samples"
        description="Browse 20+ professional healthcare resume examples for registered nurses, ICU nurses, nurse practitioners, and healthcare administrators. Sample resumes with clinical skills, certifications (CCRN, ACLS, BLS), patient care metrics, and operational achievements. Learn from real examples to create your winning healthcare resume for 2026 hiring season."
        keywords="healthcare resume, nursing resume, registered nurse resume, ICU nurse resume, hospital administrator resume, medical resume, clinical resume, healthcare management CV, RN resume examples, nursing CV, critical care nurse resume, nurse practitioner resume, healthcare resume 2026, CCRN resume, ACLS certification resume"
        canonical="https://freeresumemakers.com/professions/healthcare"
        image="https://freeresumemakers.com/images/professions/healthcare-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Healthcare Resumes</span>
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
            More healthcare resume examples are being added weekly. Check back soon for additional samples including nurse practitioners, medical assistants, and physical therapists.
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
            Healthcare Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional resume samples for healthcare professionals, from registered nurses to hospital administrators.
            Each example includes clinical skills, certifications, patient care metrics, and operational achievements that hiring managers seek.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Registered Nurses | ICU Nurses | Emergency Room Nurses | Nurse Practitioners | Healthcare Administrators | Hospital Operations Managers | Clinical Directors
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
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>RN • ICU • ER</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Clinical & Admin Roles</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>CCRN • ACLS • BLS</div>
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
                    {example.specialization === 'nursing' ? 'Clinical Nursing' : 'Healthcare Administration'}
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
            Tips for Creating Effective Healthcare Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>List Active Certifications & Licenses</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include all active licenses (RN, LPN) with license numbers and expiration dates. List professional certifications prominently: CCRN, ACLS, BLS, PALS, TNCC, NIH Stroke Scale. Certifications demonstrate your commitment to professional development.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Clinical Specialties</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Mention specific departments: Intensive Care Unit (ICU), Emergency Room (ER), Post-Anesthesia Care Unit (PACU), Medical-Surgical, Pediatrics, Telemetry. Include patient-to-nurse ratios and acuity levels managed.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Patient Care Metrics</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific numbers: "Managed 4-6 ICU patients per shift", "Reduced medication errors by 25%", "Achieved 98% patient satisfaction scores", "Treated 50+ emergency patients daily". Numbers demonstrate clinical competence and quality outcomes.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include EMR & Technology Skills</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List electronic medical record (EMR) systems proficiency: Epic, Cerner, Meditech, Allscripts. Healthcare technology skills are increasingly important in modern healthcare settings.</p>
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
            Build Your Professional Healthcare Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for nurses, healthcare administrators, and medical professionals. Get hired faster with a resume that showcases your clinical excellence and patient care achievements.
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