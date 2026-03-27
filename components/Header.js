// components/Header.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Handle navigation - PREVENTS SAME URL NAVIGATION
  const handleLinkClick = (e, path) => {
    if (router.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    }
    setIsMenuOpen(false);
    return true;
  };

  // Style objects
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
      transition: 'all 0.3s ease',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      borderBottom: '1px solid #e9ecef'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isScrolled ? '12px 24px' : '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'padding 0.3s ease'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none'
    },
    logoIcon: {
      fontSize: '28px',
      background: 'linear-gradient(135deg, #0070f3, #00a6ff)',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      color: 'white',
      fontWeight: 'bold'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #1a1a1a, #4a4a4a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.5px'
    },
    logoHighlight: {
      background: 'linear-gradient(135deg, #0070f3, #00a6ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    nav: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#4a5568',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: 500,
      transition: 'color 0.2s ease',
      position: 'relative',
      padding: '4px 0',
      cursor: 'pointer'
    },
    activeNavLink: {
      color: '#0070f3',
      fontWeight: 600
    },
    navLinkUnderline: {
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: '2px',
      background: 'linear-gradient(135deg, #0070f3, #00a6ff)',
      borderRadius: '2px'
    },
    mobileMenuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      fontSize: '24px',
      color: '#4a5568'
    },
    mobileMenu: {
      display: isMenuOpen ? 'block' : 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'white',
      padding: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      borderTop: '1px solid #e9ecef',
      animation: 'slideDown 0.3s ease'
    },
    mobileNavLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    mobileNavItem: {
      marginBottom: '12px'
    },
    mobileNavLink: {
      display: 'block',
      padding: '12px 16px',
      color: '#4a5568',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 500,
      borderRadius: '8px',
      transition: 'background 0.2s ease'
    },
    mobileActiveNavLink: {
      background: '#f0f7ff',
      color: '#0070f3'
    },
    newBadge: {
      background: '#ff5722',
      color: 'white',
      fontSize: '10px',
      padding: '2px 6px',
      borderRadius: '10px',
      marginLeft: '6px',
      fontWeight: 'bold',
      verticalAlign: 'super'
    }
  };

  // Hover handlers
  const handleNavLinkHover = (e, isHover) => {
    if (router.pathname !== e.currentTarget.getAttribute('href')) {
      e.currentTarget.style.color = isHover ? '#0070f3' : '#4a5568';
    }
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Templates', path: '/templates' },
    { name: 'Examples', path: '/examples' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq', isNew: true }
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link 
          href="/" 
          style={styles.logoContainer}
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <span style={styles.logoIcon}>📄</span>
          <span style={styles.logoText}>
            Free<span style={styles.logoHighlight}>ResumeMaker</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={styles.nav}>
          <ul style={styles.navLinks}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.path}
                  style={{
                    ...styles.navLink,
                    ...(isActive(item.path) ? styles.activeNavLink : {})
                  }}
                  onMouseEnter={(e) => handleNavLinkHover(e, true)}
                  onMouseLeave={(e) => handleNavLinkHover(e, false)}
                  onClick={(e) => handleLinkClick(e, item.path)}
                >
                  {item.name}
                  {item.isNew && <span style={styles.newBadge}>NEW</span>}
                  {isActive(item.path) && (
                    <span style={styles.navLinkUnderline}></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            <ul style={styles.mobileNavLinks}>
              {navItems.map((item, index) => (
                <li key={index} style={styles.mobileNavItem}>
                  <Link 
                    href={item.path}
                    style={{
                      ...styles.mobileNavLink,
                      ...(isActive(item.path) ? styles.mobileActiveNavLink : {})
                    }}
                    onClick={(e) => {
                      handleLinkClick(e, item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                    {item.isNew && <span style={styles.newBadge}>NEW</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;