// ============================================
// src/components/common/Footer.js
// UPDATED - Added FAQ link
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

  // Navigation items - ADDED FAQ
  const quickLinks = [
    { name: 'Home', path: '/', working: true },
    { name: 'About', path: '/about', working: true },
    { name: 'Resume Templates', path: '/templates', working: true },
    { name: 'Resume Examples', path: '/examples', working: true },
    { name: 'Blog', path: '/blog', working: true },
    { name: 'FAQ', path: '/faq', working: true } // ADDED FAQ LINK
  ];

  // Legal pages
  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  // Share buttons
  const shareButtons = [
    { platform: 'whatsapp', icon: 'ðŸ“±', label: 'Share on WhatsApp' },
    { platform: 'facebook', icon: 'ðŸ“˜', label: 'Share on Facebook' },
    { platform: 'twitter', icon: 'ðŸ¦', label: 'Share on Twitter' },
    { platform: 'linkedin', icon: 'ðŸ’¼', label: 'Share on LinkedIn' },
    { platform: 'email', icon: 'ðŸ“§', label: 'Share via Email' },
    { platform: 'copy', icon: 'ðŸ”—', label: 'Copy link' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Grid */}
        <div style={styles.grid}>
          {/* Brand Column with Share Section */}
          <div style={styles.brandColumn}>
            <h3 style={styles.brand}>
              Resume Builder
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
                    {button.icon}
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
                ðŸ“§ Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div style={styles.bottomBar}>
          <div>
            <p style={styles.copyright}>
              Â© {currentYear} Resume Builder. All rights reserved. | 20+ Templates
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
                  {index < legalPages.length - 1 && <span style={{color: '#404040'}}>â€¢</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p style={styles.version}>
            <span>Made with â¤ï¸ for job seekers</span>
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
            "name": "Resume Builder",
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


