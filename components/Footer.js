// ============================================
// components/Footer.js
// UPDATED - Added actual icons instead of letters
// ============================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [shareTooltip, setShareTooltip] = useState('');

  // Handle window resize with SSR safety
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Share function
  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = document.title || 'Resume Builder - Create Professional Resumes';
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this resume builder: ' + url)}`,
      copy: 'copy'
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setShareTooltip('Link copied!');
        setTimeout(() => setShareTooltip(''), 2000);
      } catch (err) {
        setShareTooltip('Failed to copy');
        setTimeout(() => setShareTooltip(''), 2000);
      }
    } else {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  // Style objects
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: '#ffffff',
      padding: '48px 24px 24px',
      marginTop: '60px',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      borderTop: '1px solid #e9ecef'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginBottom: '40px'
    },
    brandColumn: {
      flex: 1
    },
    brand: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #0070f3, #00a6ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    },
    description: {
      fontSize: '14px',
      color: '#b0b0b0',
      lineHeight: '1.6',
      marginBottom: '20px',
      maxWidth: '300px'
    },
    columnTitle: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: '16px',
      color: '#ffffff'
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      marginBottom: '12px'
    },
    link: {
      color: '#b0b0b0',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s ease, transform 0.2s ease',
      display: 'inline-block',
      cursor: 'pointer'
    },
    comingSoon: {
      color: '#666',
      fontSize: '12px',
      marginLeft: '8px',
      fontStyle: 'italic'
    },
    // Share section styles
    shareSection: {
      marginTop: '20px'
    },
    shareTitle: {
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '12px',
      color: '#ffffff'
    },
    shareButtons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    shareButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#2d2d2d',
      border: '1px solid #404040',
      color: '#b0b0b0',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative'
    },
    shareTooltip: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0070f3',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      whiteSpace: 'nowrap',
      marginBottom: '8px',
      zIndex: 10
    },
    bottomBar: {
      paddingTop: '24px',
      borderTop: '1px solid #404040',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'center',
      gap: '16px'
    },
    copyright: {
      fontSize: '13px',
      color: '#808080',
      margin: 0
    },
    version: {
      fontSize: '13px',
      color: '#808080',
      margin: 0,
      display: 'flex',
      gap: '20px'
    },
    // Legal links section
    legalLinks: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    legalLink: {
      color: '#808080',
      textDecoration: 'none',
      fontSize: '13px',
      transition: 'color 0.2s ease'
    }
  };

  // Hover handlers
  const handleLinkHover = (e, isHover) => {
    e.currentTarget.style.color = isHover ? '#0070f3' : '#b0b0b0';
    e.currentTarget.style.transform = isHover ? 'translateX(4px)' : 'translateX(0)';
  };

  const handleLegalLinkHover = (e, isHover) => {
    e.currentTarget.style.color = isHover ? '#ffffff' : '#808080';
  };

  const handleShareButtonHover = (e, isHover, platform) => {
    const colors = {
      whatsapp: '#25D366',
      facebook: '#1877F2',
      twitter: '#1DA1F2',
      linkedin: '#0A66C2',
      email: '#EA4335',
      copy: '#0070f3'
    };
    
    e.currentTarget.style.background = isHover ? colors[platform] : '#2d2d2d';
    e.currentTarget.style.borderColor = isHover ? colors[platform] : '#404040';
    e.currentTarget.style.color = isHover ? 'white' : '#b0b0b0';
    e.currentTarget.style.transform = isHover ? 'translateY(-3px)' : 'translateY(0)';
  };

  // Navigation items
  const quickLinks = [
    { name: 'Home', path: '/', working: true },
    { name: 'About', path: '/about', working: true },
    { name: 'Resume Templates', path: '/templates', working: true },
    { name: 'Resume Examples', path: '/examples', working: true },
    { name: 'Blog', path: '/blog', working: true },
    { name: 'FAQ', path: '/faq', working: true }
  ];

  // Legal pages
  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  const getShareIcon = (platform) => {
    switch (platform) {
      case 'whatsapp':
        return (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.961S14.378 2.01 11.75 2.01c-5.438 0-9.863 4.422-9.867 9.86-.001 1.702.449 3.366 1.306 4.819L2.148 21.3l4.5-1.146zm11.287-6.541c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        );
      case 'copy':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Share buttons with actual icons
  const shareButtons = [
    { platform: 'whatsapp', label: 'Share on WhatsApp' },
    { platform: 'facebook', label: 'Share on Facebook' },
    { platform: 'twitter', label: 'Share on Twitter' },
    { platform: 'linkedin', label: 'Share on LinkedIn' },
    { platform: 'email', label: 'Share via Email' },
    { platform: 'copy', label: 'Copy link' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Grid */}
        <div style={styles.grid}>
          {/* Brand Column with Share Section */}
          <div style={styles.brandColumn}>
            <h3 style={styles.brand}>
              Free Resume Maker
            </h3>
            <p style={styles.description}>
              Create professional, ATS-friendly resumes in minutes. 20+ free templates, no sign-up required.
            </p>
            
            {/* Share Section */}
            <div style={styles.shareSection}>
              <h4 style={styles.shareTitle}>Share this page</h4>
              <div style={styles.shareButtons}>
                {shareButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleShare(button.platform)}
                    onMouseEnter={(e) => handleShareButtonHover(e, true, button.platform)}
                    onMouseLeave={(e) => handleShareButtonHover(e, false, button.platform)}
                    style={styles.shareButton}
                    aria-label={button.label}
                    title={button.label}
                  >
                    {getShareIcon(button.platform)}
                    {shareTooltip && button.platform === 'copy' && (
                      <span style={styles.shareTooltip}>{shareTooltip}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={styles.columnTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index} style={styles.listItem}>
                  <Link 
                    href={link.path}
                    style={styles.link}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon Section */}
          <div>
            <h4 style={styles.columnTitle}>More Coming Soon</h4>
            <ul style={styles.linkList}>
              {['Cover Letters', 'Career Advice', 'Interview Tips'].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span 
                    style={{
                      ...styles.link,
                      cursor: 'not-allowed',
                      opacity: 0.5
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${item} page coming soon!`);
                    }}
                  >
                    {item} <span style={styles.comingSoon}>(Coming Soon)</span>
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Contact Link */}
            <div style={{marginTop: '20px'}}>
              <Link 
                href="/contact"
                style={{
                  ...styles.link,
                  color: '#0070f3',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div style={styles.bottomBar}>
          <div>
            <p style={styles.copyright}>
              &copy; {currentYear} Free Resume Maker. All rights reserved. | 20+ Templates
            </p>
            {/* Legal Links */}
            <div style={styles.legalLinks}>
              {legalPages.map((page, index) => (
                <React.Fragment key={page.path}>
                  <Link 
                    href={page.path}
                    style={styles.legalLink}
                    onMouseEnter={(e) => handleLegalLinkHover(e, true)}
                    onMouseLeave={(e) => handleLegalLinkHover(e, false)}
                  >
                    {page.name}
                  </Link>
                  {index < legalPages.length - 1 && <span style={{color: '#404040'}}>&bull;</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p style={styles.version}>
            <span>Built for job seekers worldwide</span>
            <span>Version 2.0</span>
          </p>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Free Resume Maker",
            "url": "https://freeresumemaker.xyz",
            "logo": "https://freeresumemaker.xyz/logo.png",
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourpage",
              "https://linkedin.com/company/yourpage"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "foryouoffside@gmail.com",
              "url": "https://freeresumemaker.xyz/contact"
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;