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
  17: "student resume template, intern resume, junior developer CV, modern resume design, ATS friendly resume",
  18: "software engineer resume, developer CV, tech resume template, programmer resume, coding portfolio resume",
  19: "academic CV template, researcher resume, educator CV, scholar resume, faculty application template",
  20: "tech lead resume, senior developer CV, engineering manager resume, programmer template, software architect CV"
};

const TEMPLATE_BENEFITS = {
  17: [
    "ATS-optimized formatting that passes automated screening systems",
    "Clean card-based layout that highlights internships and academic projects",
    "Perfect for students, recent graduates, and early-career professionals"
  ],
  18: [
    "Showcase GitHub projects and technical contributions prominently",
    "Tech tag system makes technical skills instantly scannable",
    "Code-friendly icons add visual appeal for developer portfolios"
  ],
  19: [
    "White-box education styling emphasizes academic credentials",
    "Optimized for publication listings, research experience, and teaching history",
    "Clean, professional format ideal for academic and research positions"
  ],
  20: [
    "Project-first layout prioritizes technical achievements and system designs",
    "Optimized for leadership roles and technical management positions",
    "Clear career progression hierarchy for senior engineering roles"
  ]
};

const TEMPLATE_FAQ = {
  17: [
    {
      question: "Is The Innovator 2.0 template ATS-friendly?",
      answer: "Yes, The Innovator 2.0 is fully optimized for Applicant Tracking Systems with clean formatting, standard section headers, and simple layout structure that won't confuse automated resume screeners."
    },
    {
      question: "Who should use The Innovator 2.0 template?",
      answer: "This template is ideal for students, interns, junior developers, and early-career professionals who want to highlight internship experience, academic projects, and emerging technical skills."
    }
  ],
  18: [
    {
      question: "What makes The Code template developer-friendly?",
      answer: "The Code template features tech tags for skills, dedicated project link sections, code-friendly icons, and a layout that emphasizes GitHub repositories and technical achievements."
    },
    {
      question: "Can I add my GitHub and portfolio links?",
      answer: "Yes, the template includes dedicated space for GitHub, personal website, and other developer platform links to help recruiters review your code contributions."
    }
  ],
  19: [
    {
      question: "Is The Scholar 2.0 suitable for tenure-track applications?",
      answer: "Yes, this template is designed specifically for academic positions with emphasis on publications, research experience, teaching history, and academic credentials for faculty applications."
    },
    {
      question: "Can I list multiple publications and conferences?",
      answer: "The template supports comprehensive publication listings with options to format citations in academic style, including journals, conferences, books, and research papers."
    }
  ],
  20: [
    {
      question: "How is The Engineer template different from The Code?",
      answer: "The Engineer template focuses on project leadership, technical architecture decisions, and team impact, making it ideal for senior engineers and tech leads seeking management roles."
    },
    {
      question: "Is this template good for FAANG applications?",
      answer: "Yes, this template is optimized for top tech companies with its emphasis on project impact, technical complexity, system design, and measurable achievements."
    }
  ]
};

export default function TemplateInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const templateId = parseInt(id);
  const templateName = TEMPLATE_NAMES[templateId] || "Professional Resume Template";
  const description = TEMPLATE_DESCRIPTIONS[templateId] || "Professional ATS-friendly resume template designed to help you land your dream job.";
  const keywords = TEMPLATE_KEYWORDS[templateId] || "resume template, CV template, professional resume, ATS friendly resume";
  const benefits = TEMPLATE_BENEFITS[templateId] || [];
  const faqs = TEMPLATE_FAQ[templateId] || TEMPLATE_FAQ[17];
  
  const sections = getTemplateSections(templateId);
  const sectionCount = sections?.length || 0;
  const sectionItems = sections?.map(section => ({
    name: getSectionDisplayName(section),
    limit: getSectionLimit(templateId, section)
  })) || [];
  
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${templateName} Resume Template`,
    "description": description,
    "image": `https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`,
    "category": "Resume Template",
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
      "reviewCount": "1250"
    }
  };
  
  // Breadcrumb structured data
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
  
  // Handle invalid template ID
  if (!sections || sections.length === 0 || !TEMPLATE_NAMES[templateId]) {
    return (
      <>
        <SEO 
          title="Resume Template Not Found | Free Resume Templates"
          description="Browse our collection of professional ATS-friendly resume templates. Find the perfect template for your career path."
          canonical="https://freeresumemaker.xyz/templates/"
          type="website"
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Template Not Found</h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>The resume template you're looking for doesn't exist or may have been moved.</p>
          <Link href="/templates/" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>
            Browse All Templates
          </Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <SEO 
        title={`${templateName} Resume Template | ${sectionCount}-Section ATS-Friendly CV`}
        description={`${description} Includes ${sectionCount} sections: ${sectionItems.map(s => s.name).join(', ')}. ${benefits[0] || 'Professional resume template ready to download.'}`}
        canonical={`https://freeresumemaker.xyz/template-info/${id}`}
        type="article"
      />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Free Resume Makers" />
        <link rel="canonical" href={`https://freeresumemaker.xyz/template-info/${id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta property="og:title" content={`${templateName} Resume Template - Professional ATS-Friendly CV`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateName} Resume Template`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>
      
      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '14px' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ color: '#666' }}>/</li>
            <li><Link href="/templates/" style={{ color: '#0070f3', textDecoration: 'none' }}>Templates</Link></li>
            <li style={{ color: '#666' }}>/</li>
            <li style={{ color: '#333', fontWeight: 500 }}>{templateName}</li>
          </ol>
        </nav>
        
        {/* Header */}
        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.2 }}>
            {templateName} Resume Template
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: '#555', marginBottom: '24px' }}>
            {description}
          </p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>📄</span>
              <span><strong>{sectionCount}</strong> Sections</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✅</span>
              <span><strong>ATS-Friendly</strong> Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>⭐</span>
              <span><strong>4.8/5</strong> Rating (1,250+ reviews)</span>
            </div>
          </div>
        </header>
        
        {/* Benefits Section */}
        {benefits.length > 0 && (
          <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Why Choose This Template?</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {benefits.map((benefit, index) => (
                <li key={index} style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0070f3', fontSize: '18px' }}>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {/* Sections Required */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Sections Included</h2>
          <p style={{ marginBottom: '20px', color: '#555' }}>
            This {templateName} template includes the following {sectionCount} sections optimized for ATS screening:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {sectionItems.map((section, index) => (
              <div key={index} style={{ padding: '12px 16px', backgroundColor: '#f5f5f5', borderRadius: '8px', borderLeft: '3px solid #0070f3' }}>
                <strong>{section.name}</strong>
                {section.limit && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                    Max: {section.limit} {section.limit === 1 ? 'entry' : 'entries'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* How to Use */}
        <section style={{ marginBottom: '40px', backgroundColor: '#e8f0fe', padding: '24px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>How to Use This Template</h2>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><strong>Fill in your details</strong> - Add your contact information, work experience, and education</li>
            <li style={{ marginBottom: '12px' }}><strong>Customize sections</strong> - Complete each section with your achievements and skills</li>
            <li style={{ marginBottom: '12px' }}><strong>Optimize content</strong> - Use keywords relevant to your target job role</li>
            <li style={{ marginBottom: '12px' }}><strong>Review section limits</strong> - Stay within entry limits for optimal formatting</li>
            <li style={{ marginBottom: '12px' }}><strong>Download and share</strong> - Export as PDF or DOCX for job applications</li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#333' }}>
                  {faq.question}
                </h3>
                <p style={{ lineHeight: 1.6, color: '#555', margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Related Templates */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>You May Also Like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {Object.entries(TEMPLATE_NAMES).filter(([tid]) => parseInt(tid) !== templateId).map(([tid, name]) => (
              <Link 
                key={tid} 
                href={`/template-info/${tid}`}
                style={{ display: 'block', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', textDecoration: 'none', color: '#333', transition: 'all 0.2s' }}
              >
                <strong style={{ fontSize: '1rem' }}>{name}</strong>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px', marginBottom: 0 }}>
                  {TEMPLATE_DESCRIPTIONS[parseInt(tid)]?.substring(0, 60)}...
                </p>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '40px 24px', backgroundColor: '#0070f3', borderRadius: '12px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'white' }}>Ready to Create Your Professional Resume?</h2>
          <p style={{ marginBottom: '24px', opacity: 0.9 }}>
            Join thousands of job seekers who landed their dream jobs with our templates
          </p>
          <Link 
            href="/builder/"
            style={{ display: 'inline-block', padding: '14px 32px', backgroundColor: 'white', color: '#0070f3', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem' }}
          >
            Start Building Your Resume →
          </Link>
          <p style={{ marginTop: '20px', fontSize: '0.85rem', opacity: 0.8 }}>
            <Link href="/templates/" style={{ color: 'white', textDecoration: 'underline' }}>Browse all templates</Link> to find your perfect match
          </p>
        </div>
      </article>
    </>
  );
}
