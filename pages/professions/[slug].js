// pages/professions/[slug].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';

// Profession data with SEO-optimized content for 10+ professions
const professionData = {
  'software-engineer': {
    name: 'Software Engineer',
    title: 'Software Engineer Resume Examples & Templates 2026 | Professional CV Guide',
    description: 'Browse professional software engineer resume examples and templates. Learn how to showcase technical skills, GitHub projects, and development experience to land your dream tech job at top companies.',
    keywords: 'software engineer resume, developer resume, coding resume, tech resume, programmer CV, software developer resume, frontend developer resume, backend developer resume, full stack developer CV',
    icon: '💻',
    count: 8,
    salary: '₹8L - ₹30L',
    jobGrowth: '22%',
    tips: [
      'Highlight programming languages and frameworks you specialize in (React, Python, Java, Node.js)',
      'Showcase GitHub projects and open-source contributions with links and metrics',
      'Include technical certifications (AWS, Azure, Google Cloud, Kubernetes)',
      'Quantify achievements with metrics like "improved performance by 40%" or "reduced load time by 50%"',
      'Mention development methodologies (Agile, Scrum, Kanban) and team collaboration tools (Jira, Git)'
    ],
    sampleSkills: ['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'MongoDB', 'Docker', 'GraphQL', 'Kubernetes', 'Java'],
    atsKeywords: ['JavaScript', 'API Development', 'CI/CD', 'Microservices', 'RESTful APIs', 'Testing', 'Git', 'Cloud Computing']
  },
  'sales-marketing': {
    name: 'Sales & Marketing',
    title: 'Sales & Marketing Resume Examples 2026 | Professional Templates for B2B & SaaS',
    description: 'Create an impactful sales and marketing resume with our professional templates. Showcase your achievements, campaigns, revenue growth, and quota attainment effectively.',
    keywords: 'sales resume, marketing resume, business development, account executive, marketing manager CV, B2B sales resume, SaaS sales resume, digital marketing resume',
    icon: '📊',
    count: 6,
    salary: '₹6L - ₹25L',
    jobGrowth: '18%',
    tips: [
      'Highlight revenue growth and quotas achieved with specific numbers (e.g., "exceeded quota by 150%")',
      'Showcase successful campaigns and ROI (e.g., "achieved 4.2x ROAS")',
      'Include CRM experience (Salesforce, HubSpot, Zoho) and sales methodologies (MEDDIC, Challenger)',
      'Mention leadership and team collaboration with team size and achievements',
      'Quantify results with specific numbers for lead generation, conversion rates, and customer acquisition'
    ],
    sampleSkills: ['Salesforce', 'HubSpot', 'Google Analytics', 'SEO/SEM', 'Lead Generation', 'Account Management', 'PPC', 'Content Strategy'],
    atsKeywords: ['B2B Sales', 'SaaS', 'Pipeline Management', 'Forecasting', 'Negotiation', 'Client Relations', 'ROI Analysis']
  },
  'healthcare': {
    name: 'Healthcare',
    title: 'Healthcare Resume Examples 2026 | Medical Professional CV Templates for Nurses & Administrators',
    description: 'Professional healthcare resume templates for doctors, nurses, and medical professionals. Highlight clinical skills, certifications, patient care experience, and healthcare administration expertise.',
    keywords: 'healthcare resume, nurse resume, medical CV, doctor resume, healthcare professional CV, registered nurse resume, hospital administrator resume, clinical resume',
    icon: '🏥',
    count: 5,
    salary: '₹4L - ₹20L',
    jobGrowth: '15%',
    tips: [
      'List certifications and licenses prominently (RN, CCRN, ACLS, BLS, PALS) with expiration dates',
      'Highlight clinical rotations and specialties (ICU, ER, Pediatrics, Cardiac Care)',
      'Include patient care metrics (patient-to-nurse ratio, patient satisfaction scores)',
      'Mention medical software proficiency (Epic, Cerner, Meditech)',
      'Showcase continuing education and specialized training'
    ],
    sampleSkills: ['Patient Care', 'EMR Systems', 'CPR Certified', 'Clinical Documentation', 'Medical Terminology', 'ICU Experience', 'Wound Care', 'Medication Administration'],
    atsKeywords: ['Critical Care', 'Patient Assessment', 'Healthcare Compliance', 'HIPAA', 'Treatment Planning', 'Multidisciplinary Team']
  },
  'business-finance': {
    name: 'Business & Finance',
    title: 'Business & Finance Resume Examples 2026 | Professional CV Templates for Analysts & Accountants',
    description: 'Professional business and finance resume templates for analysts, accountants, investment bankers, and business professionals. Showcase analytical skills, financial modeling, and business acumen.',
    keywords: 'business resume, finance resume, investment banking resume, analyst CV, accountant resume, CA resume, CFA resume, financial analyst resume',
    icon: '📈',
    count: 7,
    salary: '₹7L - ₹35L',
    jobGrowth: '16%',
    tips: [
      'Highlight financial analysis and modeling expertise (DCF, LBO, Merger Models)',
      'Showcase business achievements with deal values (e.g., "$300M+ transaction value")',
      'Include relevant certifications (CFA, CA, CPA, FRM) prominently',
      'Mention ERP systems experience (SAP, Oracle, QuickBooks)',
      'Quantify cost savings and revenue impact with specific numbers'
    ],
    sampleSkills: ['Financial Analysis', 'Excel', 'QuickBooks', 'SAP', 'Budgeting', 'Forecasting', 'Financial Modeling', 'M&A', 'Valuation'],
    atsKeywords: ['DCF Analysis', 'Due Diligence', 'Risk Management', 'Portfolio Management', 'Taxation', 'Audit', 'Ind AS', 'IFRS']
  },
  'education': {
    name: 'Education',
    title: 'Education Resume Examples 2026 | Teaching & Academic CV Templates for Educators',
    description: 'Professional education resume templates for school teachers, university professors, and academic professionals. Highlight teaching experience, curriculum development, research publications, and student achievement metrics.',
    keywords: 'education resume, teaching resume, teacher resume, professor resume, academic CV, school teacher resume, university professor CV, mathematics teacher resume',
    icon: '📚',
    count: 6,
    salary: '₹4L - ₹18L',
    jobGrowth: '12%',
    tips: [
      'Quantify student outcomes with specific metrics (e.g., "improved scores by 25%", "100% pass rate")',
      'Highlight teaching certifications (CTET, TET, B.Ed) and subject expertise',
      'For academic roles, list research publications, conference presentations, and PhD supervision',
      'Include extracurricular activities and leadership roles (club coordinator, sports coach)',
      'Showcase curriculum development and innovative teaching methods'
    ],
    sampleSkills: ['Lesson Planning', 'Classroom Management', 'Curriculum Development', 'Student Assessment', 'Research', 'PhD Supervision', 'Academic Writing'],
    atsKeywords: ['Pedagogy', 'Differentiated Instruction', 'Educational Technology', 'Student Engagement', 'Parent Communication', 'UGC-NET']
  },
  'administrative': {
    name: 'Administrative',
    title: 'Administrative Resume Examples 2026 | Executive Assistant & Office Manager CV Templates',
    description: 'Professional administrative resume templates for executive assistants, office managers, and administrative professionals. Showcase calendar management, travel coordination, facilities management, and team supervision expertise.',
    keywords: 'administrative resume, executive assistant resume, office manager resume, admin resume, office administration resume, executive support resume, administrative assistant CV',
    icon: '📋',
    count: 5,
    salary: '₹3L - ₹15L',
    jobGrowth: '10%',
    tips: [
      'Showcase efficiency improvements with metrics (e.g., "improved executive efficiency by 40%")',
      'Highlight software proficiency (MS Office, Google Workspace, SAP, Concur)',
      'Include certifications (CEA, MOS, COM, FMP) prominently',
      'Emphasize confidentiality and trust in handling sensitive information',
      'Mention event coordination and project management experience'
    ],
    sampleSkills: ['Calendar Management', 'Travel Coordination', 'Meeting Planning', 'Office Management', 'Vendor Management', 'MS Office', 'Project Management'],
    atsKeywords: ['C-Suite Support', 'Confidentiality', 'Event Planning', 'Facility Management', 'Budget Management', 'Team Supervision']
  },
  'human-resources': {
    name: 'Human Resources',
    title: 'Human Resources Resume Examples 2026 | HR Professional CV Templates for Recruiters & Managers',
    description: 'Professional human resources resume templates for recruiters, HR managers, and talent acquisition specialists. Showcase recruitment expertise, employee relations, and HR operations.',
    keywords: 'HR resume, human resources resume, recruiter resume, HR manager CV, talent acquisition resume, HR generalist resume, employee relations resume',
    icon: '👥',
    count: 4,
    salary: '₹5L - ₹22L',
    jobGrowth: '14%',
    tips: [
      'Highlight recruitment metrics (e.g., "hired 200+ employees annually", "reduced time-to-hire by 30%")',
      'Showcase HRIS software proficiency (SAP SuccessFactors, Workday, Zoho)',
      'Include HR certifications (SHRM, HRCI, CIPD)',
      'Mention employee engagement initiatives and retention rates',
      'Quantify recruitment cost savings and efficiency improvements'
    ],
    sampleSkills: ['Recruitment', 'Talent Acquisition', 'Employee Relations', 'HRIS', 'Performance Management', 'Onboarding', 'Payroll', 'Compliance'],
    atsKeywords: ['Sourcing', 'Interviewing', 'Offer Management', 'Employee Engagement', 'HR Policies', 'Labor Laws', 'Training & Development']
  },
  'customer-service': {
    name: 'Customer Service',
    title: 'Customer Service Resume Examples 2026 | Support Professional CV Templates',
    description: 'Professional customer service resume templates for support specialists, client relationship managers, and customer success professionals. Showcase communication skills, problem-solving, and client satisfaction metrics.',
    keywords: 'customer service resume, support specialist resume, client service resume, customer success resume, call center resume, client relations CV',
    icon: '🎧',
    count: 4,
    salary: '₹3L - ₹12L',
    jobGrowth: '8%',
    tips: [
      'Highlight customer satisfaction metrics (e.g., "98% satisfaction rating", "CSAT score of 4.8/5")',
      'Showcase problem-solving and conflict resolution achievements',
      'Include CRM software proficiency (Salesforce, Zendesk, Freshdesk)',
      'Mention language proficiency and communication skills',
      'Quantify response times and resolution rates'
    ],
    sampleSkills: ['Customer Support', 'Problem Solving', 'CRM Software', 'Communication', 'Conflict Resolution', 'Zendesk', 'Salesforce', 'Live Chat'],
    atsKeywords: ['Client Relations', 'Issue Resolution', 'Customer Retention', 'Upselling', 'Technical Support', 'Email Support', 'Phone Support']
  },
  'engineering': {
    name: 'Engineering',
    title: 'Engineering Resume Examples 2026 | Mechanical, Civil & Electrical Engineer CV Templates',
    description: 'Professional engineering resume templates for mechanical, civil, electrical, and industrial engineers. Showcase technical skills, project management, and engineering design expertise.',
    keywords: 'engineering resume, mechanical engineer resume, civil engineer resume, electrical engineer resume, project engineer CV, engineering manager resume',
    icon: '⚙️',
    count: 6,
    salary: '₹6L - ₹28L',
    jobGrowth: '11%',
    tips: [
      'Highlight engineering software proficiency (AutoCAD, SolidWorks, MATLAB, Revit)',
      'Showcase project management experience with budgets and timelines',
      'Include professional certifications (PE, PMP, Lean Six Sigma)',
      'Quantify project outcomes (e.g., "reduced costs by 20%", "improved efficiency by 30%")',
      'Mention safety compliance and quality assurance achievements'
    ],
    sampleSkills: ['AutoCAD', 'SolidWorks', 'Project Management', 'MATLAB', 'Civil Engineering', 'Mechanical Design', 'Electrical Systems', 'Quality Control'],
    atsKeywords: ['CAD', 'Technical Drawing', 'Site Management', 'Construction', 'Manufacturing', 'Process Improvement', 'Safety Compliance']
  },
  'design': {
    name: 'Design',
    title: 'Design Resume Examples 2026 | UI/UX & Graphic Designer CV Templates',
    description: 'Professional design resume templates for UI/UX designers, graphic designers, and creative professionals. Showcase portfolio, design tools, and user experience expertise.',
    keywords: 'design resume, UI/UX designer resume, graphic designer resume, product designer CV, creative resume, web designer resume, visual designer resume',
    icon: '🎨',
    count: 5,
    salary: '₹5L - ₹20L',
    jobGrowth: '13%',
    tips: [
      'Include portfolio link prominently with featured projects',
      'Highlight design software proficiency (Figma, Adobe Creative Suite, Sketch)',
      'Showcase user research and testing experience',
      'Quantify design impact (e.g., "increased engagement by 40%", "improved conversion by 25%")',
      'Mention collaboration with developers and stakeholders'
    ],
    sampleSkills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Responsive Design'],
    atsKeywords: ['Visual Design', 'Interaction Design', 'User Testing', 'Design Systems', 'Brand Identity', 'Typography', 'Color Theory']
  }
};

export default function ProfessionPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [profession, setProfession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug && professionData[slug]) {
      setProfession(professionData[slug]);
      setLoading(false);
    } else if (slug) {
      setLoading(false);
    }
  }, [slug]);

  // Generate breadcrumb schema dynamically
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
        "name": profession?.name || "Profession",
        "item": `https://freeresumemakers.com/professions/${slug}`
      }
    ]
  };

  // Generate FAQ schema for profession tips
  const faqSchema = profession ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": profession.tips.map((tip, index) => ({
      "@type": "Question",
      "name": `What are the key elements for a ${profession.name} resume?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": tip
      }
    }))
  } : null;

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
          <div style={{ color: '#666' }}>Loading profession data...</div>
        </div>
      </div>
    );
  }

  if (!profession) {
    return (
      <>
        <SEO 
          title="Profession Not Found | Resume Examples"
          description="We couldn't find resume examples for this profession. Browse our other profession guides for resume templates and examples."
          keywords="resume examples, resume templates, career guides"
          canonical={`https://freeresumemakers.com/professions/${slug}`}
          noindex={true}
        />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '60px 20px',
          textAlign: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Profession Not Found</h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            We couldn't find resume examples for "{slug?.replace(/-/g, ' ')}". 
            Check out our other profession guides below.
          </p>
          <Link 
            href="/examples"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 500
            }}
          >
            Browse All Professions
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={profession.title}
        description={profession.description}
        keywords={profession.keywords}
        canonical={`https://freeresumemakers.com/professions/${slug}`}
        image={`https://freeresumemakers.com/images/professions/${slug}.jpg`}
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666',
          flexWrap: 'wrap'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none', hover: { color: '#0070f3' } }}>Home</Link>
          <span>›</span>
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none', hover: { color: '#0070f3' } }}>Examples</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>{profession.name}</span>
        </nav>

        {/* Header Section */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>{profession.icon}</div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700
          }}>
            {profession.name} Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {profession.description}
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '48px',
          padding: '24px',
          background: '#f8fafc',
          borderRadius: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0070f3' }}>{profession.count}+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Templates Available</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0070f3' }}>{profession.salary}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Average Salary Range</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0070f3' }}>{profession.jobGrowth}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Job Growth (2026)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0070f3' }}>ATS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Optimized Templates</div>
          </div>
        </div>

        {/* Tips Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
            💡 Expert Tips for Your {profession.name} Resume
          </h2>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {profession.tips.map((tip, idx) => (
              <li key={idx} style={{ marginBottom: '12px', color: '#666', lineHeight: '1.6' }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* ATS Keywords Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            🔑 ATS-Friendly Keywords to Include
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
            These keywords help your resume pass through Applicant Tracking Systems
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center'
          }}>
            {profession.atsKeywords.map((keyword, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 20px',
                  background: '#e3f2fd',
                  color: '#0070f3',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Key Skills Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            🎯 Key Skills to Highlight
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
            Essential skills that top employers look for in {profession.name} candidates
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center'
          }}>
            {profession.sampleSkills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 20px',
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Templates Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            📄 Best Templates for {profession.name}
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px' }}>
            Choose from our professionally designed, ATS-friendly templates
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[1, 2, 3].map(num => (
              <Link key={num} href={`/templates/${num}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px'
                  }}>
                    📄
                  </div>
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                      {num === 1 ? 'Modern Professional' : num === 2 ? 'Classic Executive' : 'Creative Design'}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                      {profession.name} optimized • ATS-friendly • Downloadable
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link 
              href="/templates" 
              style={{ 
                color: '#0070f3', 
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View All 20+ Templates →
            </Link>
          </div>
        </div>

        {/* Sample Resume Preview Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>👀</div>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a' }}>
            See a Real {profession.name} Resume Example
          </h2>
          <p style={{ color: '#666', marginBottom: '24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Get inspired by our professionally crafted example with real metrics and achievements
          </p>
          <Link
            href={`/examples/${slug}`}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'transform 0.2s, background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = '#0050b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#0070f3';
            }}
          >
            View Sample Resume
          </Link>
        </div>

        {/* Related Professions Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            🔗 Related Professions
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center'
          }}>
            {Object.keys(professionData)
              .filter(key => key !== slug)
              .slice(0, 6)
              .map(key => (
                <Link
                  key={key}
                  href={`/professions/${key}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    background: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '40px',
                    textDecoration: 'none',
                    color: '#1a1a1a',
                    fontSize: '14px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0070f3';
                    e.currentTarget.style.color = '#0070f3';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{professionData[key].icon}</span>
                  <span>{professionData[key].name}</span>
                </Link>
              ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/examples" style={{ color: '#0070f3' }}>
              Browse All Professions →
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
            Ready to Create Your {profession.name} Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.9, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Build your professional resume in minutes with our free builder. Choose from 20+ ATS-friendly templates.
          </p>
          <Link
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Building Now →
          </Link>
        </div>
      </div>
    </>
  );
}