import Head from 'next/head';
import Link from 'next/link';

export default function CompareIndex() {
  const comparisons = [
    { 
      path: '1-vs-2', 
      title: 'Template 1 vs 2: Obsidian vs Classic Horizon',
      description: 'Professional two-column with image support vs Traditional layout with languages section',
      category: 'Professional vs Traditional',
      bestFor: 'Corporate vs Healthcare/Legal',
      popular: true
    },
    { 
      path: '1-vs-3', 
      title: 'Template 1 vs 3: Obsidian vs Global Pro',
      description: 'Classic professional layout vs Modern dark-themed tech resume',
      category: 'Professional vs Modern',
      bestFor: 'Executives vs Tech Professionals',
      popular: true
    },
    { 
      path: '1-vs-4', 
      title: 'Template 1 vs 4: Obsidian vs The Strategist',
      description: 'Comprehensive executive layout vs Timeline-based career progression',
      category: 'Executive vs Timeline',
      bestFor: 'Senior Leaders vs Project Managers'
    },
    { 
      path: '2-vs-3', 
      title: 'Template 2 vs 3: Classic Horizon vs Global Pro',
      description: 'Traditional healthcare/law resume vs Modern tech/creative design',
      category: 'Traditional vs Modern',
      bestFor: 'Conservative Industries vs Creative Fields',
      popular: true
    },
    { 
      path: '3-vs-4', 
      title: 'Template 3 vs 4: Global Pro vs The Strategist',
      description: 'Modern tech-focused design vs Executive timeline layout',
      category: 'Tech vs Executive',
      bestFor: 'Developers vs Managers'
    },
    { 
      path: '5-vs-6', 
      title: 'Template 5 vs 6: The Minimalist vs The Architect',
      description: 'Ultra-clean ATS-optimized vs Comprehensive technical layout',
      category: 'Minimalist vs Technical',
      bestFor: 'ATS-Heavy Applications vs Engineering Roles'
    },
    { 
      path: '7-vs-8', 
      title: 'Template 7 vs 8: The Scholar vs The Traditionalist',
      description: 'Academic achievements focus vs Classic black & white professional',
      category: 'Academic vs Professional',
      bestFor: 'Researchers vs Government/Legal'
    },
    { 
      path: '9-vs-10', 
      title: 'Template 9 vs 10: The Modernist vs The Essential',
      description: 'Creative contemporary design vs Clean entry-level corporate',
      category: 'Creative vs Corporate',
      bestFor: 'Designers vs Students/Entry-Level',
      popular: true
    },
    { 
      path: 'ats-friendly-vs-creative', 
      title: 'ATS-Friendly vs Creative Resume Templates',
      description: 'Complete guide comparing ATS-optimized vs design-forward templates',
      category: 'Style Guide',
      bestFor: 'All Job Seekers',
      featured: true
    },
    { 
      path: 'by-profession', 
      title: 'Best Templates by Profession',
      description: 'Industry-specific recommendations for Tech, Business, Healthcare, Legal, and more',
      category: 'Industry Guide',
      bestFor: 'Profession-Specific',
      featured: true
    },
    { 
      path: 'minimalist-vs-professional', 
      title: 'Minimalist vs Professional Designs',
      description: 'Clean simple layouts vs Traditional corporate formats',
      category: 'Style Comparison',
      bestFor: 'ATS vs Corporate Applications'
    }
  ];

  const categories = {
    'Professional vs Traditional': comparisons.filter(c => c.category === 'Professional vs Traditional'),
    'Traditional vs Modern': comparisons.filter(c => c.category === 'Traditional vs Modern'),
    'Executive vs Timeline': comparisons.filter(c => c.category === 'Executive vs Timeline'),
    'Tech vs Executive': comparisons.filter(c => c.category === 'Tech vs Executive'),
    'Minimalist vs Technical': comparisons.filter(c => c.category === 'Minimalist vs Technical'),
    'Academic vs Professional': comparisons.filter(c => c.category === 'Academic vs Professional'),
    'Creative vs Corporate': comparisons.filter(c => c.category === 'Creative vs Corporate'),
    'Style Guide': comparisons.filter(c => c.category === 'Style Guide'),
    'Industry Guide': comparisons.filter(c => c.category === 'Industry Guide'),
    'Style Comparison': comparisons.filter(c => c.category === 'Style Comparison')
  };

  return (
    <>
      <Head>
        <title>Resume Template Comparisons: Find Your Perfect Match (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare all our resume templates side by side. Find the perfect template for your industry, experience level, and personal style. Expert comparisons with ATS scores and industry recommendations." />
        <meta name="keywords" content="resume template comparison, compare resumes, best resume template, template side by side, obsidian vs classic horizon, minimalist vs professional, ats friendly vs creative" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare" />
        
        <meta property="og:title" content="Resume Template Comparisons: Find Your Perfect Match" />
        <meta property="og:description" content="Compare all our resume templates side by side. Expert comparisons with ATS scores and industry recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Template Comparisons: Find Your Perfect Match" />
        <meta name="twitter:description" content="Compare all our resume templates side by side. Expert comparisons with ATS scores and industry recommendations." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Resume Template Comparisons",
            "description": "Complete guide to comparing resume templates to find your perfect match",
            "numberOfItems": comparisons.length,
            "itemListElement": comparisons.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.title,
              "url": `https://freeresumemakers.com/templates/compare/${item.path}`
            }))
          })}
        </script>
      </Head>

      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '40px 24px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '32px', fontSize: '0.875rem' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <Link href="/templates" style={{ color: '#3b82f6', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <span style={{ color: '#1e293b', fontWeight: '500' }}>Comparisons</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a'
          }}>
            Resume Template <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Comparisons</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Find the perfect resume template for your career. Compare designs side by side based on your 
            <strong> industry, experience level, and personal style</strong>. Expert comparisons with ATS scores included.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            flexWrap: 'wrap',
            marginTop: '24px'
          }}>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              📊 11+ Expert Comparisons
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ⭐ ATS Scores Included
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              🎯 Industry Recommendations
            </div>
          </div>
        </header>

        {/* Quick Filter by Category */}
        <div style={{ 
          background: '#f8fafc', 
          padding: '20px', 
          borderRadius: '16px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>Filter by Category:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            <button 
              onClick={() => {
                const cards = document.querySelectorAll('.comparison-card');
                cards.forEach(card => card.style.display = 'block');
              }}
              style={{ padding: '6px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              All
            </button>
            {Object.keys(categories).filter(k => categories[k].length > 0).map(category => (
              <button 
                key={category}
                onClick={() => {
                  const cards = document.querySelectorAll('.comparison-card');
                  cards.forEach(card => {
                    if (card.getAttribute('data-category') === category) {
                      card.style.display = 'block';
                    } else {
                      card.style.display = 'none';
                    }
                  });
                }}
                style={{ padding: '6px 16px', background: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '30px', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Comparisons Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea, #764ba2)', 
          padding: '24px',
          borderRadius: '20px',
          marginBottom: '40px',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'white' }}>⭐ Most Popular Comparisons</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {comparisons.filter(c => c.popular).map(item => (
              <Link 
                key={item.path}
                href={`/templates/compare/${item.path}`}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  padding: '10px 20px', 
                  borderRadius: '40px', 
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                {item.title.split(':')[0]}
              </Link>
            ))}
          </div>
        </div>

        {/* Comparisons Grid */}
        <div style={{ display: 'grid', gap: '24px' }}>
          {Object.entries(categories).map(([category, items]) => (
            items.length > 0 && (
              <div key={category}>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '20px', 
                  color: '#0f172a',
                  borderLeft: '4px solid #667eea',
                  paddingLeft: '16px'
                }}>
                  {category}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                  {items.map((item) => (
                    <Link 
                      key={item.path}
                      href={`/templates/compare/${item.path}`}
                      className="comparison-card"
                      data-category={category}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '16px', 
                        padding: '24px',
                        background: 'white',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = '#667eea';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                      }}
                      >
                        {item.featured && (
                          <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '20px',
                            background: '#f59e0b',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.7rem',
                            fontWeight: '600'
                          }}>
                            FEATURED
                          </div>
                        )}
                        {item.popular && !item.featured && (
                          <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '20px',
                            background: '#10b981',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.7rem',
                            fontWeight: '600'
                          }}>
                            POPULAR
                          </div>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <div style={{ fontSize: '1.8rem' }}>
                            {category.includes('Professional') ? '💼' : 
                             category.includes('Modern') ? '🌙' : 
                             category.includes('Tech') ? '💻' : 
                             category.includes('Minimalist') ? '✨' : 
                             category.includes('Academic') ? '📚' : 
                             category.includes('Creative') ? '🎨' : '📊'}
                          </div>
                          <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>{item.title}</h3>
                        </div>
                        <p style={{ margin: '8px 0', color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {item.description}
                        </p>
                        <div style={{ 
                          display: 'flex', 
                          gap: '12px', 
                          marginTop: '16px',
                          paddingTop: '12px',
                          borderTop: '1px solid #e2e8f0'
                        }}>
                          <span style={{ 
                            background: '#eef2ff', 
                            color: '#1e40af', 
                            padding: '4px 10px', 
                            borderRadius: '20px', 
                            fontSize: '0.7rem',
                            fontWeight: '500'
                          }}>
                            🎯 {item.bestFor}
                          </span>
                        </div>
                        <div style={{ marginTop: '16px', color: '#667eea', fontSize: '0.85rem', fontWeight: '500' }}>
                          Compare now →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Comparison Guide */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginTop: '48px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', color: '#0f172a', textAlign: 'center' }}>
            📋 How to Choose the Right Template
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>1️⃣</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Consider Your Industry</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Creative fields need modern designs; corporate roles prefer traditional layouts</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>2️⃣</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Check ATS Compatibility</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Higher ATS scores (95%+) ensure your resume passes automated screening</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>3️⃣</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Match Your Experience Level</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Entry-level vs executive templates have different section focuses</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>4️⃣</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Compare Side by Side</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Use our detailed comparisons to see features, sections, and limits</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>How do I choose between professional and creative templates?</summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>Choose professional templates for corporate, finance, legal, and healthcare roles. Choose creative templates for design, marketing, tech startups, and creative industries where visual appeal matters.</p>
            </details>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>What ATS score do I need?</summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>For corporate and government jobs, aim for 95%+. Our ATS-friendly templates score 95-99%, while creative templates score 85-92%. Higher scores increase chances of passing automated screening.</p>
            </details>
            <details style={{ background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>Which template is best for my experience level?</summary>
              <p style={{ marginTop: '12px', color: '#475569' }}>Entry-level: Template 10 (The Essential). Mid-level: Template 5 (The Minimalist) or Template 9 (The Modernist). Executive: Template 1 (Obsidian) or Template 4 (The Strategist).</p>
            </details>
          </div>
        </div>

        {/* Related Resources */}
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#0f172a' }}>
            🔍 More Resources
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/templates" style={{ padding: '10px 20px', background: 'white', borderRadius: '10px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
              All Resume Templates
            </Link>
            <Link href="/guides/resume-writing" style={{ padding: '10px 20px', background: 'white', borderRadius: '10px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
              Resume Writing Guide
            </Link>
            <Link href="/guides/ats-tips" style={{ padding: '10px 20px', background: 'white', borderRadius: '10px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
              ATS Optimization Tips
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}