// pages/blog/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Blog post data - In a real app, this would come from a CMS or API
const blogPosts = {
  'how-to-write-resume': {
    title: 'How to Write a Resume: The Ultimate Step-by-Step Guide',
    description: 'Learn how to write a professional resume that gets interviews. This comprehensive guide covers formatting, content, keywords, and proven strategies for 2024.',
    keywords: 'how to write a resume, resume writing guide, resume tips, resume format, professional resume',
    category: 'Resume Writing',
    author: 'Resume Expert',
    date: '2024-01-15',
    readTime: '8 min read',
    content: `
      <h2>Introduction</h2>
      <p>Writing a resume can feel overwhelming, but with the right approach, you can create a document that opens doors. This guide will walk you through every step of creating a professional resume that gets noticed.</p>
      
      <h2>Step 1: Choose the Right Format</h2>
      <p>The first decision you'll make is which resume format to use. The three most common formats are:</p>
      <ul>
        <li><strong>Chronological:</strong> Lists your work history in reverse chronological order. Best for those with consistent work experience.</li>
        <li><strong>Functional:</strong> Focuses on skills rather than work history. Ideal for career changers or those with gaps.</li>
        <li><strong>Combination:</strong> Mixes both approaches. Good for experienced professionals with diverse skills.</li>
      </ul>
      
      <h2>Step 2: Start with Your Contact Information</h2>
      <p>Your resume should begin with your name, phone number, email, and location. Include your LinkedIn profile if relevant.</p>
      
      <h2>Step 3: Write a Compelling Summary</h2>
      <p>A professional summary is a 2-3 sentence overview of your experience and key achievements. Tailor this to each job application.</p>
      
      <h2>Step 4: Detail Your Work Experience</h2>
      <p>For each role, include your job title, company, dates, and 3-5 bullet points highlighting your achievements. Use action verbs and quantify results where possible.</p>
      
      <h2>Step 5: List Your Education</h2>
      <p>Include your degrees, institutions, and graduation years. You can also list relevant coursework or academic achievements.</p>
      
      <h2>Step 6: Showcase Your Skills</h2>
      <p>Create a skills section that highlights both technical and soft skills relevant to the job you're applying for.</p>
      
      <h2>Step 7: Add Optional Sections</h2>
      <p>Depending on your background, you might include certifications, languages, projects, or volunteer work.</p>
      
      <h2>Step 8: Proofread and Format</h2>
      <p>Review your resume for errors and ensure consistent formatting. Consider using our free resume builder for a professional result.</p>
    `
  },
  'resume-formatting-guide': {
    title: 'Resume Formatting Guide: Best Practices for 2024',
    description: 'Master resume formatting with our expert guide. Learn about font choices, margins, file types, and ATS-friendly formatting tips.',
    keywords: 'resume formatting, resume format, ATS-friendly resume, resume layout, resume design',
    category: 'Resume Tips',
    author: 'Resume Expert',
    date: '2024-02-01',
    readTime: '6 min read',
    content: `
      <h2>Why Formatting Matters</h2>
      <p>Even the most impressive experience can be overlooked if your resume is poorly formatted. This guide covers everything you need to know about resume formatting.</p>
      
      <h2>Font Choices</h2>
      <p>Stick to professional, readable fonts like Arial, Calibri, Helvetica, or Times New Roman. Use 10-12 point size for body text.</p>
      
      <h2>Margins and Spacing</h2>
      <p>Use 0.5-1 inch margins and consistent spacing throughout. Aim for 1.15-1.5 line spacing for readability.</p>
      
      <h2>File Format</h2>
      <p>PDF is the safest choice for preserving formatting. Save as PDF before submitting to employers.</p>
      
      <h2>ATS-Friendly Formatting</h2>
      <p>Avoid tables, columns, and graphics that might confuse applicant tracking systems. Stick to simple, clean layouts.</p>
    `
  },
  'action-verbs-for-resume': {
    title: '200+ Powerful Action Verbs for Your Resume',
    description: 'Enhance your resume with powerful action verbs. This comprehensive list includes verbs for leadership, achievement, communication, and more.',
    keywords: 'action verbs for resume, resume verbs, resume power words, resume keywords',
    category: 'Career Advice',
    author: 'Resume Expert',
    date: '2024-02-15',
    readTime: '7 min read',
    content: `
      <h2>Why Action Verbs Matter</h2>
      <p>Action verbs make your resume more dynamic and engaging. They help you stand out and demonstrate your impact.</p>
      
      <h2>Leadership Verbs</h2>
      <ul>
        <li>Led</li>
        <li>Managed</li>
        <li>Directed</li>
        <li>Supervised</li>
        <li>Coordinated</li>
      </ul>
      
      <h2>Achievement Verbs</h2>
      <ul>
        <li>Accomplished</li>
        <li>Achieved</li>
        <li>Delivered</li>
        <li>Generated</li>
        <li>Improved</li>
      </ul>
      
      <h2>Communication Verbs</h2>
      <ul>
        <li>Presented</li>
        <li>Negotiated</li>
        <li>Collaborated</li>
        <li>Authored</li>
        <li>Facilitated</li>
      </ul>
    `
  },
  'ats-resume-tips-2026': {
    title: 'ATS Resume Tips for 2026: How to Pass Applicant Tracking Systems',
    description: 'Learn how to optimize your resume for ATS in 2026. Expert tips on keywords, formatting, and strategies to get past automated screening.',
    keywords: 'ATS resume, applicant tracking system, resume optimization, ATS tips, resume keywords',
    category: 'ATS Tips',
    author: 'Resume Expert',
    date: '2024-03-01',
    readTime: '9 min read',
    content: `
      <h2>Understanding ATS</h2>
      <p>Applicant Tracking Systems (ATS) are used by most large employers to screen resumes. Learn how to optimize yours to get through.</p>
      
      <h2>Keyword Optimization</h2>
      <p>Include relevant keywords from the job description. Use exact phrases and variations naturally throughout your resume.</p>
      
      <h2>Formatting for ATS</h2>
      <p>Avoid complex formatting like tables, columns, and graphics. Stick to standard fonts and simple layouts.</p>
      
      <h2>File Type Matters</h2>
      <p>PDF is generally safe, but check the job posting for preferred format. Some older ATS prefer Word documents.</p>
    `
  },
  'cv-vs-resume-difference': {
    title: 'CV vs Resume: What\'s the Difference?',
    description: 'Understand the key differences between a CV and resume. Learn when to use each and what to include for international job applications.',
    keywords: 'CV vs resume, curriculum vitae, resume difference, CV format, resume format',
    category: 'Career Advice',
    author: 'Resume Expert',
    date: '2024-03-15',
    readTime: '5 min read',
    content: `
      <h2>CV vs Resume: Key Differences</h2>
      <p>While often used interchangeably, CVs and resumes serve different purposes. Learn which one you need.</p>
      
      <h2>Resume Basics</h2>
      <p>A resume is a concise summary of your skills and experience, typically 1-2 pages. Used for most job applications.</p>
      
      <h2>CV Basics</h2>
      <p>A CV is a comprehensive document detailing your entire career, often used in academia, research, or international applications.</p>
      
      <h2>International Considerations</h2>
      <p>Different countries have different expectations. Research the standard in your target country before applying.</p>
    `
  },
  'fresher-resume-guide': {
    title: 'Fresher Resume Guide: How to Write Your First Resume',
    description: 'New to the job market? Learn how to create a compelling fresher resume with no experience. Tips on format, content, and highlighting your potential.',
    keywords: 'fresher resume, entry-level resume, no experience resume, student resume, graduate resume',
    category: 'Freshers',
    author: 'Resume Expert',
    date: '2024-04-01',
    readTime: '6 min read',
    content: `
      <h2>Starting from Scratch</h2>
      <p>Writing your first resume can be daunting. This guide helps you highlight your potential even without work experience.</p>
      
      <h2>Focus on Education</h2>
      <p>Your education is your strongest asset. Include your degree, institution, GPA, and relevant coursework.</p>
      
      <h2>Highlight Projects and Internships</h2>
      <p>Include academic projects, internships, or volunteer work that demonstrate your skills.</p>
      
      <h2>Showcase Skills</h2>
      <p>List technical skills, languages, and soft skills that are relevant to the job.</p>
    `
  },
  'remote-work-resume-tips': {
    title: 'Remote Work Resume Tips: How to Stand Out',
    description: 'Learn how to tailor your resume for remote jobs. Highlight remote work skills, self-management, and virtual collaboration.',
    keywords: 'remote work resume, work from home resume, remote job tips, virtual work, telecommuting',
    category: 'Remote Work',
    author: 'Resume Expert',
    date: '2024-04-15',
    readTime: '5 min read',
    content: `
      <h2>Remote Work is Different</h2>
      <p>Remote jobs require different skills. Learn how to showcase your ability to work independently and collaborate virtually.</p>
      
      <h2>Highlight Remote-Ready Skills</h2>
      <p>Emphasize self-management, communication tools proficiency, and experience with remote collaboration.</p>
      
      <h2>Show Remote Experience</h2>
      <p>If you've worked remotely before, highlight that experience. Include tools you've used like Slack, Zoom, or Asana.</p>
    `
  },
  'resume-for-career-change': {
    title: 'Resume for Career Change: How to Pivot Successfully',
    description: 'Switching careers? Learn how to write a resume that highlights transferable skills and convinces employers to take a chance on you.',
    keywords: 'career change resume, career pivot, transferable skills, career transition, resume for career switcher',
    category: 'Career Change',
    author: 'Resume Expert',
    date: '2024-05-01',
    readTime: '7 min read',
    content: `
      <h2>Making the Leap</h2>
      <p>Changing careers is exciting but challenging. Your resume needs to bridge the gap between your past and future.</p>
      
      <h2>Identify Transferable Skills</h2>
      <p>Look for skills that apply to your new field, like communication, project management, or leadership.</p>
      
      <h2>Use a Functional or Combination Format</h2>
      <p>These formats emphasize skills over chronological work history, making them ideal for career changers.</p>
      
      <h2>Address the Change</h2>
      <p>Use your summary to explain your career change and show enthusiasm for your new path.</p>
    `
  },
  'resume-mistakes-to-avoid': {
    title: '10 Resume Mistakes to Avoid in 2024',
    description: 'Don\'t let common resume mistakes cost you interviews. Learn the top 10 errors and how to fix them.',
    keywords: 'resume mistakes, resume errors, resume tips, resume advice, common resume mistakes',
    category: 'Resume Tips',
    author: 'Resume Expert',
    date: '2024-05-15',
    readTime: '6 min read',
    content: `
      <h2>Mistake #1: Typos and Grammar Errors</h2>
      <p>Nothing undermines your professionalism like spelling mistakes. Always proofread multiple times.</p>
      
      <h2>Mistake #2: Using an Unprofessional Email</h2>
      <p>Create a professional email address using your name, not nicknames or numbers.</p>
      
      <h2>Mistake #3: Including Irrelevant Information</h2>
      <p>Keep your resume focused on what matters for the job you want.</p>
      
      <h2>Mistake #4: Being Too Vague</h2>
      <p>Use specific examples and metrics to demonstrate your achievements.</p>
    `
  },
  'resume-objective-vs-summary': {
    title: 'Resume Objective vs Summary: Which One Should You Use?',
    description: 'Learn the difference between a resume objective and summary, and when to use each based on your career stage.',
    keywords: 'resume objective, resume summary, professional summary, career objective, resume header',
    category: 'Resume Writing',
    author: 'Resume Expert',
    date: '2024-06-01',
    readTime: '4 min read',
    content: `
      <h2>Resume Summary</h2>
      <p>A resume summary highlights your experience and key achievements. Best for experienced professionals.</p>
      
      <h2>Resume Objective</h2>
      <p>A resume objective states your career goals. Ideal for entry-level candidates or career changers.</p>
      
      <h2>When to Use Each</h2>
      <p>Choose based on your experience level and career situation. This guide helps you decide.</p>
    `
  },
  'resume-sections-guide': {
    title: 'Resume Sections Guide: What to Include and Why',
    description: 'Complete guide to resume sections. Learn which sections are essential and which can help you stand out.',
    keywords: 'resume sections, resume parts, resume structure, resume organization',
    category: 'Resume Writing',
    author: 'Resume Expert',
    date: '2024-06-15',
    readTime: '7 min read',
    content: `
      <h2>Essential Sections</h2>
      <p>Contact Information, Summary, Work Experience, Education, Skills</p>
      
      <h2>Optional Sections</h2>
      <p>Certifications, Languages, Projects, Volunteer Work, Awards</p>
      
      <h2>Industry-Specific Sections</h2>
      <p>Some industries expect additional sections like publications for academia or portfolios for design.</p>
    `
  },
  'ultimate-resume-guide-2026': {
    title: 'The Ultimate Resume Guide for 2026',
    description: 'The most comprehensive resume guide for 2026. Everything you need to create a resume that lands interviews.',
    keywords: 'ultimate resume guide, complete resume guide, resume handbook, resume master guide',
    category: 'Resume Writing',
    author: 'Resume Expert',
    date: '2024-07-01',
    readTime: '12 min read',
    content: `
      <h2>Your Complete Resume Resource</h2>
      <p>This guide combines everything you need to know about resume writing in one place.</p>
      
      <h2>Formatting</h2>
      <p>Learn the best practices for resume formatting in 2026.</p>
      
      <h2>Content</h2>
      <p>Master writing compelling content for every section.</p>
      
      <h2>Optimization</h2>
      <p>Optimize your resume for both humans and ATS.</p>
    `
  }
};

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug && blogPosts[slug]) {
      // Find related posts in the same category
      const currentCategory = blogPosts[slug].category;
      const related = Object.entries(blogPosts)
        .filter(([key, post]) => key !== slug && post.category === currentCategory)
        .slice(0, 3)
        .map(([key, post]) => ({ slug: key, ...post }));
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!slug) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
          <div style={{ color: '#666' }}>Loading article...</div>
        </div>
      </div>
    );
  }

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Article Not Found</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          The blog post you're looking for doesn't exist or may have been moved.
        </p>
        <Link 
          href="/blog"
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
          Browse All Articles
        </Link>
      </div>
    );
  }

  // Format title for meta tags
  const pageTitle = `${post.title} | Resume Writing Tips & Career Advice`;

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://yourdomain.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://yourdomain.com/blog/${slug}`
      }
    ]
  };

  // Generate article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `https://yourdomain.com/images/blog/${slug}.jpg`,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://yourdomain.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${slug}`
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="author" content={post.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://yourdomain.com/blog/${slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`https://yourdomain.com/images/blog/${slug}.jpg`} />
        <meta property="og:site_name" content="Resume Builder" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`https://yourdomain.com/images/blog/${slug}.jpg`} />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '900px',
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
          <span>&gt;</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>&gt;</span>
          <span style={{ color: '#0070f3' }}>{post.category}</span>
        </div>

        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '20px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px',
            color: '#666',
            fontSize: '14px'
          }}>
            <span>📅 {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>⏱️ {post.readTime}</span>
            <span>📂 Category: {post.category}</span>
          </div>

          {/* Author Bio */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            borderLeft: '4px solid #0070f3'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#0070f3',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#333' }}>{post.author}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Resume Expert & Career Advisor</div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article 
          style={{
            lineHeight: '1.8',
            color: '#333',
            fontSize: '18px'
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Buttons */}
        <div style={{
          marginTop: '50px',
          padding: '30px',
          background: '#f8f9fa',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>Share This Article</h3>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            {[
              { name: 'Twitter', icon: '🐦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://yourdomain.com/blog/${slug}` },
              { name: 'LinkedIn', icon: '💼', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://yourdomain.com/blog/${slug}` },
              { name: 'Facebook', icon: '📘', url: `https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/blog/${slug}` },
              { name: 'Email', icon: '📧', url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://yourdomain.com/blog/${slug}`)}` }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0070f3';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '50px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '30px', color: '#333' }}>
              Related Articles
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e9ecef';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8f9fa';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#333' }}>
                      {post.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                      {post.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          marginTop: '50px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Ready to Build Your Resume?</h3>
          <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9 }}>
            Use our free resume builder to create a professional resume in minutes.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 600
            }}
          >
            Start Building Now
          </Link>
        </div>

        {/* Footer Navigation */}
        <div style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
          <Link href="/templates" style={{ color: '#0070f3', textDecoration: 'none' }}>
            Browse Templates →
          </Link>
        </div>
      </div>
    </>
  );
}