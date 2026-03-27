// pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../../components/SEO';

export default function BlogPage() {
  // Enhanced Schema markup for blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Resume Writing Blog | Expert Career Advice & Resume Tips",
    "description": "Expert advice on resume writing, career development, and job search strategies. Learn how to create an effective resume that helps you land your dream job.",
    "url": "https://freeresumemaker.xyz/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Maker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumemaker.xyz/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": []
    }
  };

  // Blog posts data with honest information - NO fake stats
  const blogPosts = [
    {
      id: 'how-to-write-resume',
      title: 'How to Write a Resume: Step-by-Step Guide',
      excerpt: 'Learn the essential steps to create a resume that effectively communicates your skills and experience to employers.',
      author: 'Sarah Johnson',
      date: '2026-02-15',
      readTime: '8 min read',
      category: 'Resume Tips'
    },
    {
      id: 'ats-resume-tips-2026',
      title: 'ATS Resume Tips for 2026',
      excerpt: 'Learn how to optimize your resume for Applicant Tracking Systems with practical formatting and keyword tips.',
      author: 'Michael Chen',
      date: '2026-02-10',
      readTime: '6 min read',
      category: 'ATS'
    },
    {
      id: 'resume-mistakes-to-avoid',
      title: '10 Common Resume Mistakes to Avoid',
      excerpt: 'Learn about common resume mistakes and how to avoid them to improve your job applications.',
      author: 'Emily Rodriguez',
      date: '2026-02-05',
      readTime: '5 min read',
      category: 'Mistakes'
    },
    {
      id: 'action-verbs-for-resume',
      title: '200+ Action Verbs for Your Resume',
      excerpt: 'A curated list of action verbs to help you describe your achievements and responsibilities more effectively.',
      author: 'David Kim',
      date: '2026-01-28',
      readTime: '4 min read',
      category: 'Writing'
    },
    {
      id: 'resume-formatting-guide',
      title: 'Resume Formatting Guide',
      excerpt: 'Tips and best practices for formatting your resume for readability and ATS compatibility.',
      author: 'Lisa Thompson',
      date: '2026-01-20',
      readTime: '7 min read',
      category: 'Formatting'
    },
    {
      id: 'resume-for-career-change',
      title: 'How to Write a Resume for a Career Change',
      excerpt: 'Tips for creating a resume that highlights transferable skills when switching to a new industry.',
      author: 'James Wilson',
      date: '2026-01-15',
      readTime: '6 min read',
      category: 'Career Change'
    },
    {
      id: 'remote-work-resume-tips',
      title: 'Resume Tips for Remote Work Positions',
      excerpt: 'How to highlight remote work skills and experience in your resume for remote job applications.',
      author: 'Amanda Lee',
      date: '2026-01-08',
      readTime: '5 min read',
      category: 'Remote Work'
    },
    {
      id: 'resume-objective-vs-summary',
      title: 'Resume Objective vs Summary: Which One to Use?',
      excerpt: 'Understand the difference between a resume objective and summary, and when each is appropriate.',
      author: 'Robert Brown',
      date: '2026-01-02',
      readTime: '4 min read',
      category: 'Basics'
    },
    {
      id: 'cv-vs-resume-difference',
      title: 'CV vs Resume: What\'s the Difference?',
      excerpt: 'Learn the key differences between a CV and a resume, and which document is appropriate for your situation.',
      author: 'Patricia Garcia',
      date: '2025-12-28',
      readTime: '5 min read',
      category: 'Basics'
    },
    {
      id: 'fresher-resume-guide',
      title: 'How to Write a Resume as a Fresher',
      excerpt: 'A guide for recent graduates on creating a resume that highlights education, projects, and skills.',
      author: 'Kevin Zhang',
      date: '2025-12-20',
      readTime: '7 min read',
      category: 'Freshers'
    }
  ];

  return (
    <>
      <SEO 
        title="Resume Writing Blog | Expert Career Advice & Resume Tips"
        description="Expert advice on resume writing, career development, and job search strategies. Learn how to create an effective resume that helps you land your dream job. Free tips from career experts."
        keywords="resume blog, resume tips, career advice, job search tips, resume writing, interview tips, career guidance, ATS tips, resume formatting, cover letter tips, career development"
        canonical="https://freeresumemaker.xyz/blog"
        image="https://freeresumemaker.xyz/images/blog/og-blog.jpg"
        type="website"
      />
      
      {/* Additional structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <meta name="author" content="Resume Maker Team" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation with Schema */}
        <nav aria-label="Breadcrumb" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Resume Writing Blog</span>
        </nav>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Resume Writing Blog
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Practical advice and tips to help you create effective resumes, navigate your job search, 
            and advance your career. All articles are written by experienced professionals.
          </p>
        </header>

        {/* Development Notice */}
        <div style={{
          background: '#fff3cd',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.95rem',
          border: '1px solid #ffc107',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          <p style={{margin: 0, color: '#856404'}}>
            ðŸš§ New articles are being added regularly. Check back soon for more content.
          </p>
        </div>

        {/* Featured Post */}
        <section aria-label="Featured Article" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '50px',
          color: 'white'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '40px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: '120px',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '20px'
            }}>
              ðŸ“˜
            </div>
            <div>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '30px',
                fontSize: '14px',
                marginBottom: '16px',
                display: 'inline-block'
              }}>
                Featured Article
              </span>
              <h2 style={{
                fontSize: '36px',
                margin: '16px 0',
                color: 'white',
                lineHeight: '1.2'
              }}>
                The Ultimate Resume Guide 2026
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                A comprehensive guide covering everything from formatting to content. Learn how to create 
                an effective resume that communicates your qualifications clearly.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <Link 
                  href="/blog/ultimate-resume-guide-2026"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    background: 'white',
                    color: '#667eea',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
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
                  Read Full Guide
                  <span style={{ fontSize: '20px' }}>â†’</span>
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section aria-label="Latest Articles">
          <h2 style={{
            fontSize: '28px',
            marginBottom: '30px',
            color: '#333',
            borderBottom: '2px solid #0070f3',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Latest Articles
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <article style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef',
                  padding: '24px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
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
                  {/* Title */}
                  <h3 style={{
                    fontSize: '20px',
                    margin: '0 0 12px 0',
                    color: '#1a1a1a',
                    lineHeight: '1.4',
                    fontWeight: 600
                  }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                    flex: 1
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Metadata */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #e9ecef',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#0070f3',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {post.author.charAt(0)}
                      </div>
                      <span style={{
                        fontSize: '13px',
                        color: '#666',
                        fontWeight: 500
                      }}>
                        {post.author}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      fontSize: '13px',
                      color: '#999'
                    }}>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <span>â€¢</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section aria-label="Newsletter Subscription" style={{
          background: '#f8f9fa',
          borderRadius: '20px',
          padding: '50px',
          textAlign: 'center',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>ðŸ“¬</div>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px',
            color: '#333'
          }}>
            Get Resume Tips in Your Inbox
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#666',
            maxWidth: '500px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Subscribe to receive updates when we publish new articles. We send emails occasionally, and you can unsubscribe anytime.
          </p>
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              style={{
                padding: '12px 20px',
                width: '300px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
            <button
              onClick={() => alert('Newsletter functionality coming soon!')}
              aria-label="Subscribe to newsletter"
              style={{
                padding: '12px 30px',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0060d6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0070f3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Subscribe
            </button>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#999',
            marginTop: '15px'
          }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </section>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
          marginTop: '30px',
          borderTop: '1px solid #eee',
          paddingTop: '30px'
        }}>
          <p>Â© {new Date().getFullYear()} Free Resume Maker. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
