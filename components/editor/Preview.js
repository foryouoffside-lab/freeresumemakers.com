// ============================================
// components/editor/Preview.js
// FIXED: Shows message asking for desktop view on small screens with PDF disturbance warning
// ============================================

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';
import Head from 'next/head';
import ReviewSystem from '../ReviewSystem';

// Import ALL templates (1-20)
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';
import Template8 from '../templates/Template8';
import Template9 from '../templates/Template9';
import Template10 from '../templates/Template10';
import Template11 from '../templates/Template11';
import Template12 from '../templates/Template12';
import Template13 from '../templates/Template13';
import Template14 from '../templates/Template14';
import Template15 from '../templates/Template15';
import Template16 from '../templates/Template16';
import Template17 from '../templates/Template17';
import Template18 from '../templates/Template18';
import Template19 from '../templates/Template19';
import Template20 from '../templates/Template20';

import { generatePDF } from '../../lib/pdfGenerator';

const Preview = ({ templateId, isInline = false, showNavigation = false, onPrev, onNext, currentStep, totalSteps, onDownloadComplete }) => {
  const { state } = useResume();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const previewRef = useRef();
  const containerRef = useRef();
  const templateRef = useRef();
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(() => Template1);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [pdfReady, setPdfReady] = useState(false);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);
  const [currentTemplateId, setCurrentTemplateId] = useState(null);
  
  // UPI Payment State
  const [showSupport, setShowSupport] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // YOUR UPI ID
  const myUpiId = 'biradarsangmesh91@okicici';
  
  // Check if device is mobile and screen is too small
  const [showDesktopMessage, setShowDesktopMessage] = useState(false);
  const [userProceeded, setUserProceeded] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent) || window.innerWidth < 1024;
      setIsMobile(isMobileDevice);
      
      // Show desktop message if screen width is less than 1024px (tablet/mobile)
      // or if it's a mobile device AND user hasn't proceeded
      setShowDesktopMessage((window.innerWidth < 1024 || isMobileDevice) && !userProceeded);
    };
    
    checkDevice();
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const isMobileDevice = window.innerWidth < 1024;
      setIsMobile(isMobileDevice);
      if (!userProceeded) {
        setShowDesktopMessage(window.innerWidth < 1024);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [userProceeded]);
  
  // Zoom state - default scale based on screen width
  const getDefaultScale = () => {
    if (typeof window === 'undefined') return 0.6;
    const width = window.innerWidth;
    if (width < 480) return 0.32;
    if (width < 640) return 0.38;
    if (width < 768) return 0.45;
    if (width < 1024) return 0.55;
    return 0.6;
  };
  
  const [previewScale, setPreviewScale] = useState(getDefaultScale);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [showDragHint, setShowDragHint] = useState(true);
  const lastTouchRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setPreviewScale(getDefaultScale());
      setPosition({ x: 0, y: 0 });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Templates map
  const templates = {
    1: Template1, 2: Template2, 3: Template3, 4: Template4,
    5: Template5, 6: Template6, 7: Template7, 8: Template8,
    9: Template9, 10: Template10, 11: Template11, 12: Template12,
    13: Template13, 14: Template14, 15: Template15, 16: Template16,
    17: Template17, 18: Template18, 19: Template19, 20: Template20
  };

  useEffect(() => {
    if (templateId && templateId !== currentTemplateId) {
      setCurrentTemplateId(templateId);
    }
  }, [templateId]);

  useEffect(() => {
    const tid = currentTemplateId || templateId;
    if (tid && templates[tid]) {
      setSelectedTemplate(() => templates[tid]);
    } else if (tid) {
      setSelectedTemplate(() => Template1);
    }
    setPosition({ x: 0, y: 0 });
    setPdfReady(false);
  }, [currentTemplateId, templateId]);

  useEffect(() => {
    if (templateRef.current && currentTemplateId) {
      window.__resumeTemplateElement = templateRef.current;
      const templateIdAttr = `template-${currentTemplateId}`;
      templateRef.current.setAttribute('data-pdf-template', templateIdAttr);
      window[`__pdfTemplate_${currentTemplateId}`] = templateRef.current;
      
      if (!window.__pdfTemplates) window.__pdfTemplates = [];
      window.__pdfTemplates.push({
        id: currentTemplateId,
        element: templateRef.current,
        timestamp: Date.now()
      });
      
      setPdfReady(true);
    }
    
    return () => {
      if (window.__pdfTemplates && currentTemplateId) {
        window.__pdfTemplates = window.__pdfTemplates.filter(t => t.id !== currentTemplateId);
      }
      if (window.__resumeTemplateElement === templateRef.current) {
        window.__resumeTemplateElement = null;
      }
    };
  }, [templateRef.current, currentTemplateId]);

  const handleDownloadPDF = async () => {
    const tid = currentTemplateId || templateId;
    
    if (!tid) {
      setDownloadStatus('Error: Template ID missing');
      setTimeout(() => setDownloadStatus(''), 3000);
      return;
    }
    
    setIsGenerating(true);
    setDownloadStatus('Preparing PDF...');
    
    try {
      if (!window.__resumeTemplateElement && templateRef.current) {
        window.__resumeTemplateElement = templateRef.current;
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setDownloadStatus('Generating PDF...');
      await generatePDF(state, tid);
      setDownloadStatus('✓ PDF downloaded!');
      
      if (onDownloadComplete) {
        await onDownloadComplete(tid);
        setShowReviewSuccess(true);
        setTimeout(() => setShowReviewSuccess(false), 5000);
      }
      
      setTimeout(() => setDownloadStatus(''), 3000);
    } catch (error) {
      console.error('PDF generation error:', error);
      setDownloadStatus('Error. Please try again.');
      setTimeout(() => setDownloadStatus(''), 3000);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUPIPayment = () => {
    const upiUrl = `upi://pay?pa=${myUpiId}&pn=Resume%20Builder&cu=INR&tn=Support%20for%20Resume%20Builder`;
    window.location.href = upiUrl;
    
    setTimeout(() => {
      setShowThanks(true);
      setShowSupport(false);
      setTimeout(() => setShowThanks(false), 5000);
    }, 1000);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(myUpiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getQRCodeUrl = () => {
    const upiData = `upi://pay?pa=${myUpiId}&pn=Resume%20Builder&cu=INR&tn=Support%20for%20Resume%20Builder`;
    return `https://quickchart.io/qr?text=${encodeURIComponent(upiData)}&size=200&margin=2&dark=000000&light=ffffff`;
  };

  const zoomIn = () => setPreviewScale(Math.min(previewScale + 0.08, 1.2));
  const zoomOut = () => setPreviewScale(Math.max(previewScale - 0.08, 0.25));
  const resetZoom = () => {
    setPreviewScale(getDefaultScale());
    setPosition({ x: 0, y: 0 });
  };

  // Drag handlers - only enabled on larger screens or when zoomed in
  const enableDrag = previewScale > 0.6 || (!isMobile && previewScale > 0.5);
  
  const handleMouseDown = (e) => {
    if (!enableDrag) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
    setShowDragHint(false);
  };

  const handleTouchStart = (e) => {
    if (!enableDrag) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    setIsDragging(true);
    const touch = e.touches[0];
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    setStartPosition({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
    setShowDragHint(false);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  }, [isDragging, startPosition]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastTouchRef.current.x;
    const deltaY = touch.clientY - lastTouchRef.current.y;
    setPosition({
      x: position.x + deltaX,
      y: position.y + deltaY
    });
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) e.preventDefault();
  }, [isDragging, position]);

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove]);

  const renderTemplate = () => {
    const TemplateComponent = selectedTemplate;
    const tid = currentTemplateId || templateId;
    
    return (
      <div 
        ref={templateRef}
        data-template-id={tid}
        data-pdf-ready="true"
        style={{
          width: '210mm',
          minWidth: '210mm',
          height: '297mm',
          minHeight: '297mm',
          overflow: 'visible',
          position: 'relative',
          background: 'white',
          transform: 'none',
          animation: 'none',
          transition: 'none',
          boxSizing: 'border-box'
        }}
      >
        <TemplateComponent 
          {...state} 
          isExporting={isGenerating} 
          personalInfo={state.personalInfo}
          education={state.education}
          skills={state.skills}
          professionalSummary={state.professionalSummary}
          projects={state.projects}
          certifications={state.certifications}
          awards={state.awards}
          internships={state.internships}
          languages={state.languages}
          coreStrengths={state.coreStrengths}
          tools={state.tools}
          hobbies={state.hobbies}
          reference={state.reference}
        />
      </div>
    );
  };

  const isSmallMobile = windowWidth < 480;
  const isMobileDevice = isMobile || windowWidth < 768;
  
  const fontSizes = {
    h1: isSmallMobile ? '20px' : isMobileDevice ? '22px' : '28px',
    h2: isSmallMobile ? '18px' : isMobileDevice ? '20px' : '24px',
    body: isSmallMobile ? '12px' : isMobileDevice ? '13px' : '14px',
    small: isSmallMobile ? '10px' : isMobileDevice ? '11px' : '12px'
  };

  const spacing = {
    section: isSmallMobile ? '8px' : isMobileDevice ? '12px' : '16px',
    card: isSmallMobile ? '12px' : isMobileDevice ? '16px' : '20px'
  };

  const displayTemplateId = currentTemplateId || templateId || '?';
  
  // Calculate container height based on scale
  const containerHeight = `calc(297mm * ${previewScale} + 40px)`;

  // If screen is too small, show desktop view message with PDF disturbance warning
  if (showDesktopMessage) {
    return (
      <>
        <Head>
          <title>Desktop Mode Required | Resume Preview</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
          <div style={{
            maxWidth: '550px',
            width: '100%',
            background: 'white',
            borderRadius: '24px',
            padding: '32px 28px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'slideUp 0.5s ease'
          }}>
            {/* Warning Icon */}
            <div style={{
              fontSize: '70px',
              marginBottom: '16px'
            }}>
              ⚠️
            </div>
            
            <h1 style={{
              fontSize: '26px',
              fontWeight: '700',
              color: '#dc2626',
              marginBottom: '12px'
            }}>
              Desktop Mode Required!
            </h1>
            
            {/* Critical Warning Message */}
            <div style={{
              background: '#fff5f5',
              borderLeft: '4px solid #dc2626',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              <p style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#991b1b',
                marginBottom: '8px'
              }}>
                ⚡ IMPORTANT WARNING:
              </p>
              <p style={{
                fontSize: '14px',
                color: '#7f1a1a',
                margin: 0,
                lineHeight: '1.5'
              }}>
                On mobile devices or small screens, <strong>your PDF will be DISTURBED</strong> - 
                formatting will break, text will overflow, and the layout will appear incorrect.
                <span style={{ display: 'block', marginTop: '8px', fontWeight: '600' }}>
                  DO NOT download PDF in mobile view!
                </span>
              </p>
            </div>
            
            {/* Solutions Section */}
            <div style={{
              background: '#fef3c7',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#92400e',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🔧</span> Solutions:
              </h3>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '12px'
                }}>
                  <span style={{ fontSize: '28px' }}>🔄</span>
                  <div>
                    <strong style={{ color: '#92400e' }}>Rotate to Landscape</strong>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#78350f' }}>
                      Turn your phone sideways for a wider view
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '12px'
                }}>
                  <span style={{ fontSize: '28px' }}>🌐</span>
                  <div>
                    <strong style={{ color: '#92400e' }}>Request Desktop Site</strong>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#78350f' }}>
                      In browser settings, enable "Desktop Site" mode
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '12px'
                }}>
                  <span style={{ fontSize: '28px' }}>💻</span>
                  <div>
                    <strong style={{ color: '#92400e' }}>Use Desktop/Laptop</strong>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#78350f' }}>
                      Open this page on a computer for best results
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* PDF Warning Badge */}
            <div style={{
              background: '#fee2e2',
              borderRadius: '12px',
              padding: '12px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '20px' }}>📄</span>
              <span style={{ fontSize: '13px', color: '#991b1b', fontWeight: '500' }}>
                PDF will be DISTURBED if downloaded now
              </span>
            </div>
            
            {/* Rotate Button (Quick Action) */}
            {typeof window !== 'undefined' && window.screen?.orientation && (
              <button
                onClick={() => {
                  if (window.screen.orientation && window.screen.orientation.lock) {
                    window.screen.orientation.lock('landscape').catch(() => {});
                  }
                }}
                style={{
                  width: '100%',
                  background: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'all 0.2s ease'
                }}
              >
                🔄 Rotate to Landscape Mode
              </button>
            )}
            
            {/* Download PDF button with strong warning */}
            <button
              onClick={() => {
                if (confirm('⚠️ WARNING: Your PDF may be DISTURBED and appear broken if downloaded on mobile. Are you sure you want to continue?')) {
                  setUserProceeded(true);
                  setShowDesktopMessage(false);
                  setTimeout(() => handleDownloadPDF(), 500);
                }
              }}
              disabled={isGenerating}
              style={{
                width: '100%',
                background: isGenerating ? '#94a3b8' : '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                marginBottom: '12px',
                transition: 'all 0.2s ease'
              }}
            >
              {isGenerating ? '⏳ Generating...' : '⚠️ Download PDF (Not Recommended)'}
            </button>
            
            {/* Continue button with warning */}
            <button
              onClick={() => {
                if (confirm('⚠️ Your PDF will be DISTURBED if downloaded. You can preview but download may break. Continue anyway?')) {
                  setUserProceeded(true);
                  setShowDesktopMessage(false);
                }
              }}
              style={{
                width: '100%',
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Continue Preview (Download Not Recommended)
            </button>
            
            <p style={{
              fontSize: '11px',
              color: '#999',
              marginTop: '20px',
              padding: '12px',
              background: '#faf5ff',
              borderRadius: '8px'
            }}>
              📌 <strong>Why?</strong> Resume templates are designed for A4 paper size (210mm x 297mm). 
              Mobile screens cannot display this correctly, causing PDF formatting issues.
            </p>
          </div>
        </div>
        
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Resume Preview & PDF Download | Free Resume Builder</title>
        <meta name="description" content="Preview your resume in real-time before downloading as PDF. Zoom and pan to inspect every detail." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
      </Head>

      <main 
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: spacing.section,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: '#ffffff',
          minHeight: '100vh',
          boxSizing: 'border-box'
        }}
      >
        {/* Header with Warning Banner for Mobile Users Who Proceeded */}
        {(isMobileDevice || windowWidth < 1024) && (
          <div style={{
            background: '#fff5f5',
            border: '1px solid #fecaca',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '20px' }}>⚠️</span>
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#991b1b', fontSize: '13px' }}>PDF Warning:</strong>
              <span style={{ fontSize: '12px', color: '#7f1a1a', marginLeft: '8px' }}>
                Downloading PDF on mobile may cause formatting issues. Use desktop mode or rotate to landscape.
              </span>
            </div>
            <button
              onClick={() => {
                if (window.screen?.orientation?.lock) {
                  window.screen.orientation.lock('landscape').catch(() => {});
                }
              }}
              style={{
                background: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              🔄 Rotate
            </button>
          </div>
        )}
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px',
          padding: isSmallMobile ? '12px' : '16px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          borderRadius: '12px',
          border: '1px solid #e9ecef'
        }}>
          <div>
            <h1 style={{
              fontSize: fontSizes.h1,
              margin: 0,
              color: '#1a1a1a',
              fontWeight: 700
            }}>
              Resume Preview
            </h1>
            <p style={{
              fontSize: fontSizes.small,
              color: '#6c757d',
              margin: '4px 0 0 0'
            }}>
              Template {displayTemplateId} • A4 Format • {Math.round(previewScale * 100)}%
            </p>
          </div>
          
          {/* Device Mode Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: (isMobileDevice || windowWidth < 1024) ? '#fee2e2' : '#e8f0fe',
            padding: '6px 12px',
            borderRadius: '20px'
          }}>
            <span style={{ fontSize: '14px' }}>{(isMobileDevice || windowWidth < 1024) ? '📱' : '💻'}</span>
            <span style={{ fontSize: fontSizes.small, color: (isMobileDevice || windowWidth < 1024) ? '#dc2626' : '#1a73e8' }}>
              {(isMobileDevice || windowWidth < 1024) ? 'Mobile Mode - PDF May Break' : 'Desktop Mode'}
            </span>
          </div>
        </div>

        {/* Preview Container - Template stays constant */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: spacing.card,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0',
          marginBottom: '24px'
        }}>
          {/* Controls Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <h2 style={{
              fontSize: fontSizes.h2,
              fontWeight: 600,
              color: '#0f172a',
              margin: 0
            }}>
              Template Preview
            </h2>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#f8fafc',
                padding: '4px',
                borderRadius: '30px',
                border: '1px solid #e2e8f0'
              }}>
                <button
                  onClick={zoomOut}
                  style={{
                    width: isSmallMobile ? '28px' : '32px',
                    height: isSmallMobile ? '28px' : '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: isSmallMobile ? '14px' : '16px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  −
                </button>
                <span style={{ minWidth: '45px', textAlign: 'center', fontSize: fontSizes.small }}>
                  {Math.round(previewScale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  style={{
                    width: isSmallMobile ? '28px' : '32px',
                    height: isSmallMobile ? '28px' : '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: isSmallMobile ? '14px' : '16px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  +
                </button>
                <button
                  onClick={resetZoom}
                  style={{
                    width: isSmallMobile ? '28px' : '32px',
                    height: isSmallMobile ? '28px' : '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: isSmallMobile ? '12px' : '14px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  ↺
                </button>
              </div>

              <button
                onClick={() => {
                  if ((isMobileDevice || windowWidth < 1024) && !confirm('⚠️ Warning: PDF may be DISTURBED on mobile. Download anyway?')) {
                    return;
                  }
                  handleDownloadPDF();
                }}
                disabled={isGenerating}
                style={{
                  background: isGenerating ? '#94a3b8' : (isMobileDevice || windowWidth < 1024) ? '#ef4444' : '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: isSmallMobile ? '8px 16px' : '10px 20px',
                  fontSize: fontSizes.body,
                  fontWeight: 600,
                  cursor: isGenerating ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap'
                }}
              >
                {isGenerating ? '⏳' : (isMobileDevice || windowWidth < 1024) ? '⚠️' : '📄'} 
                {isSmallMobile ? 'PDF' : 'Download PDF'}
              </button>
            </div>
          </div>

          {/* Status Message */}
          {downloadStatus && (
            <div style={{
              marginBottom: '16px',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: fontSizes.small,
              textAlign: 'center',
              background: downloadStatus.includes('Error') ? '#fef2f2' : 
                         downloadStatus.includes('✓') ? '#f0fdf4' : '#f8fafc',
              border: `1px solid ${downloadStatus.includes('Error') ? '#fee2e2' : '#bbf7d0'}`,
              color: downloadStatus.includes('Error') ? '#991b1b' : '#166534'
            }}>
              {downloadStatus}
            </div>
          )}

          {/* Preview Area - Scrollable, template stays constant */}
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              height: `calc(297mm * ${previewScale} + 80px)`,
              minHeight: '400px',
              maxHeight: isMobileDevice ? '70vh' : '80vh',
              background: 'linear-gradient(45deg, #f8fafc 25%, #ffffff 25%, #ffffff 50%, #f8fafc 50%, #f8fafc 75%, #ffffff 75%, #ffffff)',
              backgroundSize: '20px 20px',
              borderRadius: '12px',
              padding: spacing.card,
              boxSizing: 'border-box',
              overflow: 'auto',
              border: '2px solid #e2e8f0'
            }}
          >
            <div style={{
              width: '100%',
              minHeight: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div
                ref={previewRef}
                style={{
                  position: 'relative',
                  transform: `translate(${position.x}px, ${position.y}px) scale(${previewScale})`,
                  transformOrigin: 'center',
                  transition: isDragging ? 'none' : 'transform 0.1s ease',
                  cursor: enableDrag ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  userSelect: 'none',
                  display: 'inline-block'
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {renderTemplate()}
              </div>
            </div>
          </div>
          
          {/* Hint for users */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '12px',
            flexWrap: 'wrap'
          }}>
            <p style={{
              fontSize: fontSizes.small,
              color: '#94a3b8',
              margin: 0
            }}>
              🖱️ {enableDrag ? 'Drag to pan • ' : ''}🔍 Use buttons to zoom
            </p>
            <p style={{
              fontSize: fontSizes.small,
              color: '#94a3b8',
              margin: 0
            }}>
              📄 Template stays at A4 size (210mm x 297mm)
            </p>
          </div>
        </div>

        {/* UPI SUPPORT SECTION - Mobile Optimized */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: spacing.card,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <span style={{ fontSize: isSmallMobile ? '22px' : '24px' }}>💝</span>
            <div>
              <h3 style={{ margin: 0, fontSize: isSmallMobile ? '15px' : '16px', fontWeight: 600, color: '#0f172a' }}>
                Support My Work
              </h3>
              <p style={{ margin: '2px 0 0 0', fontSize: fontSizes.small, color: '#64748b' }}>
                Pay any amount you wish
              </p>
            </div>
          </div>

          {!showSupport && !showThanks && (
            <div style={{ textAlign: 'center', padding: isSmallMobile ? '12px' : '16px' }}>
              <button
                onClick={() => setShowSupport(true)}
                style={{
                  background: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  padding: isSmallMobile ? '10px 24px' : '12px 32px',
                  borderRadius: '30px',
                  fontSize: isSmallMobile ? '14px' : '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: isSmallMobile ? '100%' : 'auto'
                }}
              >
                ❤️ Support via UPI
              </button>
            </div>
          )}

          {showSupport && !showThanks && (
            <div style={{ padding: isSmallMobile ? '12px' : '16px' }}>
              <div style={{
                textAlign: 'center',
                padding: isSmallMobile ? '12px' : '16px',
                background: '#f8fafc',
                borderRadius: '12px',
                marginBottom: '16px'
              }}>
                <img
                  src={getQRCodeUrl()}
                  alt="UPI QR Code"
                  style={{
                    width: isSmallMobile ? '150px' : '180px',
                    height: isSmallMobile ? '150px' : '180px',
                    margin: '0 auto',
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                  onClick={handleUPIPayment}
                />
                <p style={{ fontSize: fontSizes.small, color: '#64748b', marginTop: '8px' }}>
                  Scan with UPI app
                </p>
              </div>

              <div style={{
                background: '#f1f5f9',
                borderRadius: '12px',
                padding: '12px',
                textAlign: 'center',
                marginBottom: '16px'
              }}>
                <code style={{
                  background: 'white',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: isSmallMobile ? '11px' : '12px',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all'
                }}>
                  {myUpiId}
                </code>
                <button
                  onClick={copyUpiId}
                  style={{
                    marginLeft: '8px',
                    padding: '6px 16px',
                    background: copied ? '#10b981' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: fontSizes.small,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {copied ? '✓' : 'Copy'}
                </button>
              </div>

              <button
                onClick={handleUPIPayment}
                style={{
                  width: '100%',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: isSmallMobile ? '12px' : '14px',
                  borderRadius: '30px',
                  fontSize: isSmallMobile ? '14px' : '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: '12px'
                }}
              >
                💳 Pay via UPI App
              </button>

              <button
                onClick={() => setShowSupport(false)}
                style={{
                  width: '100%',
                  background: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  padding: isSmallMobile ? '10px' : '12px',
                  borderRadius: '30px',
                  fontSize: fontSizes.small,
                  cursor: 'pointer'
                }}
              >
                Maybe Later
              </button>
            </div>
          )}

          {showThanks && (
            <div style={{
              textAlign: 'center',
              padding: '24px 12px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🙏</div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: '#10b981' }}>
                Thank you!
              </h4>
              <p style={{ color: '#64748b', margin: 0, fontSize: fontSizes.small }}>
                Your support means the world to me.
              </p>
            </div>
          )}
        </div>

        {/* REVIEW SYSTEM SECTION */}
        <div style={{
          marginTop: '24px',
          marginBottom: '24px'
        }}>
          <ReviewSystem templateId={displayTemplateId} />
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid #e2e8f0'
          }}>
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={currentStep === 0}
                style={{
                  padding: isSmallMobile ? '10px 20px' : '12px 24px',
                  background: currentStep === 0 ? '#e2e8f0' : 'white',
                  color: currentStep === 0 ? '#94a3b8' : '#0f172a',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: fontSizes.body,
                  fontWeight: 500,
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                  flex: isMobileDevice ? 1 : 'auto'
                }}
              >
                ← Previous
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                style={{
                  padding: isSmallMobile ? '10px 20px' : '12px 24px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: fontSizes.body,
                  fontWeight: 500,
                  cursor: 'pointer',
                  flex: isMobileDevice ? 1 : 'auto'
                }}
              >
                {currentStep === totalSteps - 1 ? 'Finish' : 'Next'} →
              </button>
            )}
          </div>
        )}

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media print {
            .no-print { display: none !important; }
          }
          * {
            -webkit-tap-highlight-color: transparent;
          }
          /* Ensure template content never changes layout */
          [data-template-id] {
            width: 210mm !important;
            min-width: 210mm !important;
            max-width: 210mm !important;
          }
        `}</style>
      </main>
    </>
  );
};

export default Preview;