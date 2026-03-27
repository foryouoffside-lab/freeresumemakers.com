import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../../components/SEO';
import { getTemplateSections, getSectionDisplayName, getSectionLimit } from '../../lib/templateConfig';

const TEMPLATE_NAMES = {
  17: "The Innovator 2.0",
  18: "The Code",
  19: "The Scholar 2.0",
  20: "The Engineer"
};

const TEMPLATE_DESCRIPTIONS = {
  17: "Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.",
  18: "Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.",
  19: "Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.",
  20: "Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads."
};

const TEMPLATE_KEYWORDS = {
  17: "resume template, student resume, intern resume, junior developer resume, modern resume design",
  18: "software engineer resume, developer resume, tech resume, coding resume, programmer CV",
  19: "academic resume, researcher CV, educator resume, scholar template, education resume",
  20: "tech lead resume, senior developer CV, engineering resume, programmer template, developer CV"
};

const TEMPLATE_BENEFITS = {
  17: [
    "ATS-friendly formatting ensures your resume passes automated screening systems",
    "Clean card-based layout highlights internships and projects effectively",
    "Perfect for highlighting academic achievements and extracurricular activities"
  ],
  18: [
    "Optimized for showcasing GitHub projects and technical contributions",
    "Tech tag system makes skills instantly scannable by recruiters",
    "Code-friendly icons add visual appeal for tech industry applications"
  ],
  19: [
    "White-box education styling emphasizes academic credentials",
    "Perfect for publication listings and research experience",
    "Clean format ideal for academic and research positions"
  ],
  20: [
    "Project-first layout prioritizes your best technical work",
    "Optimized for leadership roles and technical management positions",
    "Clear hierarchy showcases career progression and achievements"
  ]
};

const TEMPLATE_FAQ = {
  17: [
    {
      question: "Is The Innovator 2.0 template ATS-friendly?",
      answer: "Yes, The Innovator 2.0 is fully ATS-optimized with clean formatting, standard section headers, and no complex design elements that might confuse automated systems."
    },
    {
      question: "Who should use The Innovator 2.0 template?",
      answer: "This template is ideal for students, interns, and junior developers who want to highlight their internship experience, academic projects, and emerging skills in a modern format."
    },
    {
      question: "How many entries can I add per section?",
      answer: "Each section has specific limits to maintain optimal formatting. Check the sections list above for maximum entries per section."
    }
  ],
  18: [
    {
      question: "What makes The Code template developer-friendly?",
      answer: "The Code template features tech tags, project link support, code-friendly icons, and a layout that emphasizes technical skills and GitHub projects over traditional work experience."
    },
    {
      question: "Is this template suitable for senior developer roles?",
      answer: "Absolutely. While great for all developers, the template's focus on project impact and technical skills makes it excellent for senior roles requiring deep technical expertise."
    },
    {
      question: "Can I add my GitHub profile link?",
      answer: "Yes, the template includes dedicated space for GitHub and other developer platform links, making it easy for recruiters to review your code contributions."
    }
  ],
  19: [
    {
      question: "Is The Scholar 2.0 suitable for tenure-track applications?",
      answer: "Yes, this template is designed specifically for academic positions, with emphasis on publications, research experience, teaching history, and academic credentials."
    },
    {
      question: "Can I list multiple publications?",
      answer: "The template supports comprehensive publication listings with options to format citations in academic style, including journals, conferences, and books."
    },
    {
      question: "Does it work for postdoc applications?",
      answer: "Yes, The Scholar 2.0 is perfect for postdoctoral applications, highlighting research contributions, technical skills, and academic achievements effectively."
    }
  ],
  20: [
    {
      question: "How is The Engineer template different from The Code?",
      answer: "The Engineer template focuses more on project leadership, technical architecture decisions, and team impact, making it ideal for senior engineers and tech leads."
    },
    {
      question: "Can I showcase system design projects?",
      answer: "Yes, the project-first layout allows you to detail system architecture, technical decisions, and the impact of your engineering work."
    },
    {
      question: "Is this template good for FAANG applications?",
      answer: "Yes, this template is optimized for top tech companies with its emphasis on project impact, technical complexity, and leadership responsibilities."
    }
  ]
};

export default function TemplateInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const templateId = parseInt(id);
  const templateName = TEMPLATE_NAMES[templateId] || "Resume Template";
  const description = TEMPLATE_DESCRIPTIONS[templateId] || "Professional ATS-friendly resume template.";
  const keywords = TEMPLATE_KEYWORDS[templateId] || "resume template, CV template, professional resume";
  const benefits = TEMPLATE_BENEFITS[templateId] || [];
  const faqs = TEMPLATE_FAQ[templateId] || TEMPLATE_FAQ[17];
  
  const sections = getTemplateSections(templateId);
  
  // Generate structured data for the template
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${templateName} Resume Template`,
    "description": description,
    "category": "Resume Template",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly"
    },
    "audience": {
      "@type": "Audience",
      "name": benefits.length > 0 ? benefits[0].split(" ").slice(0, 3).join(" ") : "Job Seekers"
    }
  };
  
  // Handle case when templateId is invalid or sections is undefined
  if (!sections || sections.length === 0) {
    return (
      <>
        <SEO 
          title="Resume Template Not Found | Free Resume Makers"
          description="The requested resume template could not be found. Browse our collection of professional ATS-friendly resume templates."
          canonical="https://freeresumemaker.xyz/templates/"
          type="website"
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <h1>Template Not Found</h1>
          <p>The template you're looking for doesn't exist or may have been moved.</p>
          <Link href="/templates/" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Browse All Templates →
          </Link>
        </div>
      </>
    );
  }
  
  const sectionListItems = sections.map(section => ({
    name: getSectionDisplayName(section),
    maxItems: getSectionLimit(templateId, section)
  }));
  
  return (
    <>
      <SEO 
        title={`${templateName} Resume Template | Professional ${sectionListItems.length}-Section ATS-Friendly CV`}
        description={`${description} ${benefits.slice(0, 2).join(" ")} Complete guide with ${sectionListItems.length} sections: ${sectionListItems.map(s => s.name).join(", ")}.`}
        canonical={`https://freeresumemaker.xyz/template-info/${id}`}
        type="article"
        keywords={keywords}
      />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Free Resume Makers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://freeresumemaker.xyz/template-info/${id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta property="og:title" content={`${templateName} Resume Template - ${sectionListItems.length} Section ATS-Friendly Design`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://freeresumemaker.xyz/images/templates/${id}-preview.jpg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta property="twitter:title" content={`${templateName} Resume Template - Professional ATS-Friendly CV`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`https://freeresumemaker.xyz/images/templates/${id}-preview.jpg`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="keywords" content={keywords} />
        <meta name="description" content={`${description} Features ${sectionListItems.length} sections: ${sectionListItems.map(s => s.name).join(", ")}. ${benefits[0] || ""}`} />
      </Head>
      
      <div className="template-info-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', fontSize: '14px' }}>
          <ol style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px' }}>
            <li><Link href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/templates/" style={{ textDecoration: 'none', color: '#0070f3' }}>Templates</Link></li>
            <li>/</li>
            <li aria-current="page" style={{ color: '#666' }}>{templateName}</li>
          </ol>
        </nav>
        
        {/* Header Section */}
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {templateName} Resume Template
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem' }}>
            {description}
          </p>
        </header>
        
        {/* Key Features Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Why Choose This Template?</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#0070f3' }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
        
        {/* Required Sections */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Sections Included</h2>
          <p>This template includes {sections.length} carefully curated sections optimized for ATS screening:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sectionListItems.map((section, index) => (
              <li key={index} style={{ marginBottom: '12px', paddingLeft: '24px', borderLeft: '3px solid #0070f3' }}>
                <strong style={{ fontSize: '1.1rem' }}>{section.name}</strong>
                {section.maxItems && (
                  <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>
                    Maximum {section.maxItems} {section.maxItems === 1 ? 'entry' : 'entries'}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
        
        {/* How to Use Section */}
        <section style={{ marginBottom: '2.5rem', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>How to Use This Template</h2>
          <ol style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Fill in your personal information and contact details</li>
            <li style={{ marginBottom: '10px' }}>Complete each section with your relevant experience and achievements</li>
            <li style={{ marginBottom: '10px' }}>Respect section limits for optimal formatting</li>
            <li style={{ marginBottom: '10px' }}>Download your finished resume in PDF or DOCX format</li>
            <li style={{ marginBottom: '10px' }}>Review and customize further as needed</li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>
                  {faq.question}
                </h3>
                <p style={{ lineHeight: '1.6', color: '#555' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: '#f0f7ff', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Ready to Create Your Professional Resume?</h2>
          <Link 
            href="/builder/" 
            style={{ 
              display: 'inline-block', 
              padding: '14px 32px', 
              backgroundColor: '#0070f3', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Start Building Your Resume →
          </Link>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            Or <Link href="/templates/" style={{ color: '#0070f3' }}>browse all templates</Link> to find the perfect fit for your career
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .template-info-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        @media (max-width: 768px) {
          .template-info-container {
            padding: 20px 16px;
          }
          h1 {
            font-size: 1.8rem !important;
          }
          h2 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </>
  );
}
