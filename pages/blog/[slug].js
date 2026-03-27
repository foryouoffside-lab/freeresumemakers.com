import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';

// Blog post data with enhanced SEO fields
const blogPosts = {
  'how-to-write-resume': {
    title: 'How to Write a Resume: The Ultimate Step-by-Step Guide',
    description: 'Learn how to write a professional resume that gets interviews. This comprehensive guide covers formatting, content, keywords, and proven strategies for 2026.',
    metaDescription: 'Complete guide to writing a professional resume in 2026. Step-by-step instructions with examples, formatting tips, and expert advice to land more interviews.',
    keywords: 'how to write a resume, resume writing guide, resume tips, resume format, professional resume, CV writing, job application tips',
    category: 'Resume Writing',
    author: 'Sarah Johnson',
    authorBio: 'Senior Career Advisor with 10+ years of experience helping professionals land their dream jobs',
    date: '2026-01-15',
    updatedDate: '2026-06-15',
    readTime: '8 min read',
    featuredImage: '/images/blog/how-to-write-resume.jpg',
    content: `
      <h2>Introduction</h2>
      <p>Writing a resume can feel overwhelming, but with the right approach, you can create a document that opens doors. This guide will walk you through every step of creating a professional resume that gets noticed by both recruiters and ATS systems.</p>
      
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
    `,
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'step-1', title: 'Choose the Right Format' },
      { id: 'step-2', title: 'Contact Information' },
      { id: 'step-3', title: 'Professional Summary' },
      { id: 'step-4', title: 'Work Experience' }
    ]
  },
  'ats-resume-tips-2026': {
    title: 'ATS Resume Tips for 2026: How to Pass Applicant Tracking Systems',
    description: 'Learn how to optimize your resume for ATS in 2026. Expert tips on keywords, formatting, and strategies to get past automated screening.',
    metaDescription: 'Master ATS resume optimization with expert tips for 2026. Learn keyword strategies, formatting rules, and proven techniques to get your resume past automated filters.',
    keywords: 'ATS resume, applicant tracking system, resume optimization, ATS tips, resume keywords, ATS friendly resume, job application tips',
    category: 'ATS Tips',
    author: 'Michael Chen',
    authorBio: 'HR Technology Specialist and ATS Optimization Expert',
    date: '2026-03-01',
    updatedDate: '2026-06-01',
    readTime: '9 min read',
    featuredImage: '/images/blog/ats-resume-tips.jpg',
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
  }
  // Add more blog posts with similar enhanced structure
};

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [estimatedReadingTime, setEstimatedReadingTime] = useState(0);

  useEffect(() => {
    if (slug && blogPosts[slug]) {
      // Calculate reading time based on content length
      const content = blogPosts[slug].content;
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      setEstimatedReadingTime(minutes);
      
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

  return (
    <>
      <SEO 
        title={post.title}
        description={post.metaDescription || post.description}
        canonical={`https://freeresumemaker.xyz/blog/${slug}`}
        image={post.featuredImage}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updatedDate}
        author={post.author}
        keywords={post.keywords}
        article={true}
      />
      
      {/* Additional Article Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.metaDescription || post.description,
              "image": post.featuredImage || "https://freeresumemaker.xyz/images/blog/default.jpg",
              "author": {
                "@type": "Person",
                "name": post.author,
                "description": post.authorBio
              },
              "publisher": {
                "@type": "Organization",
                "name": "Free Resume Maker",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://freeresumemaker.xyz/logo.png"
                }
              },
              "datePublished": post.date,
              "dateModified": post.updatedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://freeresumemaker.xyz/blog/${slug}`
              },
              "wordCount": post.content.split(/\s+/).length,
              "timeRequired": `PT${estimatedReadingTime}M`
            })
          }}
        />
      </Head>

      <div style={{
        maxWidth: '900px',
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
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          <span>›</span>
          <Link href={`/blog?category=${encodeURIComponent(post.category)}`} style={{ color: '#666', textDecoration: 'none' }}>
            {post.category}
          </Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>{post.title}</span>
        </nav>

        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Link 
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: '#e3f2fd',
                color: '#0070f3',
                textDecoration: 'none',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              {post.category}
            </Link>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '20px',
            color: '#666',
            fontSize: '14px'
          }}>
            <span>📅 {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>⏱️ {post.readTime || `${estimatedReadingTime} min read`}</span>
            <span>👤 By {post.author}</span>
          </div>

          {/* Author Bio */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            borderLeft: '4px solid #0070f3',
            marginTop: '20px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
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
              <div style={{ fontSize: '13px', color: '#666' }}>{post.authorBio || 'Resume Expert & Career Advisor'}</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div style={{ marginBottom: '40px' }}>
            <img 
              src={post.featuredImage} 
              alt={post.title}
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              loading="eager"
            />
          </div>
        )}

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div style={{
            background: '#f8f9fa',
            padding: '20px 24px',
            borderRadius: '12px',
            marginBottom: '40px'
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#333' }}>📑 Table of Contents</h3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {post.tableOfContents.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <a href={`#${item.id}`} style={{ color: '#0070f3', textDecoration: 'none' }}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

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
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Twitter', icon: '🐦', color: '#1DA1F2', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://freeresumemaker.xyz/blog/${slug}` },
              { name: 'LinkedIn', icon: '💼', color: '#0077B5', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://freeresumemaker.xyz/blog/${slug}` },
              { name: 'Facebook', icon: '📘', color: '#1877F2', url: `https://www.facebook.com/sharer/sharer.php?u=https://freeresumemaker.xyz/blog/${slug}` },
              { name: 'Email', icon: '📧', color: '#666', url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://freeresumemaker.xyz/blog/${slug}`)}` }
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
                  e.currentTarget.style.background = social.color;
                  e.currentTarget.style.borderColor = social.color;
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
              Related Articles You Might Like
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e9ecef';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8f9fa';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
                      {relatedPost.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                      {relatedPost.description.substring(0, 100)}...
                    </p>
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      {relatedPost.readTime || '5 min read'} • {relatedPost.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div style={{
          marginTop: '50px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Get More Career Tips</h3>
          <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9 }}>
            Subscribe to get weekly resume tips and career advice delivered to your inbox
          </p>
          <form style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '12px 16px',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Call to Action */}
        <div style={{
          marginTop: '40px',
          background: '#0070f3',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Ready to Build Your Resume?</h3>
          <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9 }}>
            Use our free resume builder to create a professional resume in minutes
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'white',
              color: '#0070f3',
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
          paddingTop: '30px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
          <Link href="/templates" style={{ color: '#0070f3', textDecoration: 'none' }}>
            Browse Resume Templates →
          </Link>
        </div>
      </div>
    </>
  );
}