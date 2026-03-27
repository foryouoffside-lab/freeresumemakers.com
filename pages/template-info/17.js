import React from 'react';
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

const TEMPLATE_LONG_DESCRIPTIONS = {
  17: "The Innovator 2.0 is a modern, ATS-friendly resume template featuring a clean card-based layout that highlights internships, projects, and academic achievements. Perfect for students, interns, and junior developers looking to make a strong impression.",
  18: "The Code template is specifically designed for software engineers and developers, featuring prominent project links, tech tags, and developer-friendly icons that showcase technical skills and GitHub contributions effectively.",
  19: "The Scholar 2.0 template offers an education-focused design with white-box styling that emphasizes academic credentials, research experience, and publications. Ideal for academics, researchers, and educators.",
  20: "The Engineer template provides a project-first layout optimized for software engineering roles, featuring clear hierarchy for technical achievements, system designs, and leadership experience."
};

const TEMPLATE_KEYWORDS = {
  17: "student resume template, intern resume, junior developer CV, modern resume design, ATS friendly resume, college graduate resume",
  18: "software engineer resume, developer CV, tech resume template, programmer resume, coding portfolio, GitHub resume",
  19: "academic CV template, researcher resume, educator CV, scholar resume, faculty application, postdoc resume",
  20: "tech lead resume, senior developer CV, engineering manager resume, software architect CV, technical lead template"
};

const TEMPLATE_BENEFITS = {
  17: [
    "ATS-friendly formatting ensures your resume passes automated screening systems",
    "Clean card-based layout highlights internships and projects effectively",
    "Perfect for highlighting academic achievements and extracurricular activities",
    "Modern design that stands out to recruiters while maintaining professional standards"
  ],
  18: [
    "Optimized for showcasing GitHub projects and technical contributions",
    "Tech tag system makes skills instantly scannable by recruiters",
    "Code-friendly icons add visual appeal for tech industry applications",
    "Built-in support for linking to code repositories and portfolio sites"
  ],
  19: [
    "White-box education styling emphasizes academic credentials",
    "Perfect for publication listings and research experience",
    "Clean format ideal for academic and research positions",
    "Comprehensive section for teaching experience and grants"
  ],
  20: [
    "Project-first layout prioritizes your best technical work",
    "Optimized for leadership roles and technical management positions",
    "Clear hierarchy showcases career progression and achievements",
    "Designed to highlight system architecture and technical decision-making"
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
    },
    {
      question: "Can I customize the colors and fonts?",
      answer: "Yes, all templates are fully customizable. You can adjust colors, fonts, and layout elements to match your personal brand."
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
    },
    {
      question: "Does it support showcasing open source contributions?",
      answer: "Yes, you can highlight open source projects, contributions to popular repositories, and community involvement in the projects section."
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
    },
    {
      question: "Can I include grant funding and awards?",
      answer: "Yes, there are dedicated sections for grants, fellowships, and academic awards to showcase your funding success and recognition."
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
    },
    {
      question: "Does it support highlighting technical leadership?",
      answer: "Yes, the experience section is designed to showcase team leadership, mentoring, and cross-functional collaboration achievements."
    }
  ]
};

export default function TemplateInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const templateId = parseInt(id);
  const templateName = TEMPLATE_NAMES[templateId] || "Professional Resume Template";
  const description = TEMPLATE_DESCRIPTIONS[templateId] || "Professional ATS-friendly resume template.";
  const longDescription = TEMPLATE_LONG_DESCRIPTIONS[templateId] || description;
  const keywords = TEMPLATE_KEYWORDS[templateId] || "resume template, CV template, professional resume, ATS friendly resume";
  const benefits = TEMPLATE_BENEFITS[templateId] || TEMPLATE_BENEFITS[17];
  const faqs = TEMPLATE_FAQ[templateId] || TEMPLATE_FAQ[17];
  
  const sections = getTemplateSections(templateId);
  
  // Generate structured data for the template
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${templateName} Resume Template`,
    "description": longDescription,
    "category": "Resume Template",
    "image": `https://freeresumemaker.xyz/images/templates/${id}-preview.jpg`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "brand": {
      "@type": "Brand",
      "name": "Free Resume Builder"
    },
    "audience": {
      "@type": "Audience",
      "name": templateId === 17 ? "Students & Interns" : 
                 templateId === 18 ? "Software Developers" :
                 templateId === 19 ? "Academics & Researchers" :
                 "Tech Professionals"
    }
  };
  
  // Generate breadcrumb structured data
  const breadcrumbData = {
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
        "name": "Resume Templates",
        "item": "https://freeresumemaker.xyz/templates/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": templateName,
        "item": `https://freeresumemaker.xyz/template-info/${id}`
      }
    ]
  };
  
  // Handle case when templateId is invalid or sections is undefined
  if (!sections || sections.length === 0) {
    return (
      <>
        <SEO 
          title="Resume Template Not Found | Free Resume Builder"
          description="The requested resume template could not be found. Browse our collection of professional ATS-friendly resume templates."
          canonical="https://freeresumemaker.xyz/templates/"
          type="website"
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
          <h1>Template Not Found</h1>
          <p>The template you're looking for doesn't exist or may have been moved.</p>
          <Link href="/templates/" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
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
        title={`${templateName} Resume Template | ${sectionListItems.length}-Section ATS-Friendly CV Guide 2026`}
        description={`${longDescription} Includes ${sectionListItems.length} essential sections: ${sectionListItems.map(s => s.name).slice(0, 5).join(", ")}${sectionListItems.length > 5 ? " and more" : ""}. Download free, ATS-optimized resume template.`}
        canonical={`https://freeresumemaker.xyz/template-info/${id}`}
        type="article"
        keywords={keywords}
      />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Free Resume Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://freeresumemaker.xyz/template-info/${id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta property="og:title" content={`${templateName} Resume Template - ${sectionListItems.length} Section ATS-Friendly Design`} />
        <meta property="og:description" content={longDescription} />
        <meta property="og:image" content={`https://freeresumemaker.xyz/images/templates/${id}-preview.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Free Resume Builder" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta name="twitter:title" content={`${templateName} Resume Template - Professional ATS-Friendly CV`} />
        <meta name="twitter:description" content={longDescription} />
        <meta name="twitter:image" content={`https://freeresumemaker.xyz/images/templates/${id}-preview.jpg`} />
        <meta name="twitter:site" content="@freeresumemaker" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="keywords" content={keywords} />
        <meta name="description" content={`${longDescription} Features ${sectionListItems.length} sections: ${sectionListItems.map(s => s.name).join(", ")}. ${benefits[0] || ""}`} />
      </Head>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '14px' }}>
          <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <li><Link href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Home</Link></li>
            <li style={{ color: '#666' }}>/</li>
            <li><Link href="/templates/" style={{ textDecoration: 'none', color: '#0070f3' }}>Templates</Link></li>
            <li style={{ color: '#666' }}>/</li>
            <li aria-current="page" style={{ color: '#333', fontWeight: 500 }}>{templateName}</li>
          </ol>
        </nav>
        
        {/* Header Section */}
        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 700, color: '#1a1a1a' }}>
            {templateName} Resume Template
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555', marginBottom: '24px' }}>
            {longDescription}
          </p>
          
          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            flexWrap: 'wrap', 
            padding: '20px 0', 
            borderTop: '1px solid #e9ecef', 
            borderBottom: '1px solid #e9ecef',
            marginTop: '8px'
          }}>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>{sectionListItems.length}</strong>
              <span style={{ color: '#666' }}>Sections</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>ATS-Friendly</strong>
              <span style={{ color: '#666' }}>Optimized</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>100% Free</strong>
              <span style={{ color: '#666' }}>Download</span>
            </div>
          </div>
        </header>
        
        {/* Key Features Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>Why Choose This Template?</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative', lineHeight: '1.5', color: '#555' }}>
                <span style={{ position: 'absolute', left: 0, color: '#0070f3', fontSize: '18px' }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
        
        {/* Required Sections */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>Sections Included</h2>
          <p style={{ marginBottom: '20px', color: '#555' }}>
            This template includes {sections.length} carefully curated sections optimized for ATS screening:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
            {sectionListItems.map((section, index) => (
              <div key={index} style={{ 
                padding: '14px 18px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px', 
                borderLeft: '4px solid #0070f3'
              }}>
                <strong style={{ fontSize: '1rem' }}>{section.name}</strong>
                {section.maxItems && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginTop: '6px' }}>
                    Maximum: {section.maxItems} {section.maxItems === 1 ? 'entry' : 'entries'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* How to Use Section */}
        <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '28px', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>How to Use This Template</h2>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: '1.5' }}>
              <strong>Select this template</strong> - Start building your resume with {templateName}
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: '1.5' }}>
              <strong>Fill in your information</strong> - Complete each section with your experience and skills
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: '1.5' }}>
              <strong>Respect section limits</strong> - Each section has optimal limits for professional formatting
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: '1.5' }}>
              <strong>Download and review</strong> - Export your finished resume in PDF format
            </li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '28px', fontWeight: 600, color: '#1a1a1a' }}>Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 600, color: '#333' }}>
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
        <div style={{ 
          textAlign: 'center', 
          marginTop: '48px', 
          padding: '40px 24px', 
          backgroundColor: '#0070f3', 
          borderRadius: '16px', 
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: 700, color: 'white' }}>Ready to Create Your Professional Resume?</h2>
          <p style={{ marginBottom: '28px', fontSize: '1rem', opacity: 0.95 }}>
            Start building your resume with {templateName} today
          </p>
          <Link 
            href="/builder/" 
            style={{ 
              display: 'inline-block', 
              padding: '14px 36px', 
              backgroundColor: 'white', 
              color: '#0070f3', 
              textDecoration: 'none', 
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            Start Building Your Resume →
          </Link>
          <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.9 }}>
            Or <Link href="/templates/" style={{ color: 'white', textDecoration: 'underline' }}>browse all templates</Link> to find the perfect fit for your career
          </p>
        </div>
      </div>
    </>
  );
}