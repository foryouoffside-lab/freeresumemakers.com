// ============================================
// components/editor/Preview.js
// UPI PAYMENT - KEEP PAY VIA UPI BUTTON FOR ALL
// REMOVED DOWNLOAD COUNTER
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
  const [showOrientationWarning, setShowOrientationWarning] = useState(false);
  
  // YOUR UPI ID
  const myUpiId = 'biradarsangmesh91@okicici';
  
  // Check if device is mobile and show warning
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);
      setIsMobile(isMobileDevice);
      
      // Show orientation warning only for mobile users
      if (isMobileDevice) {
        setShowOrientationWarning(true);
      }
    };
    checkMobile();
  }, []);
  
  // Draggable state
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [previewScale, setPreviewScale] = useState(0.5);
  const [showDragHint, setShowDragHint] = useState(true);
  const lastTouchRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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
    setDownloadStatus('Preparing PDF generation...');
    
    try {
      if (!window.__resumeTemplateElement && templateRef.current) {
        window.__resumeTemplateElement = templateRef.current;
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setDownloadStatus('Generating high-quality PDF...');
      await generatePDF(state, tid);
      setDownloadStatus('PDF downloaded successfully!');
      
      if (onDownloadComplete) {
        await onDownloadComplete(tid);
        setShowReviewSuccess(true);
        setTimeout(() => setShowReviewSuccess(false), 5000);
      }
      
      setTimeout(() => setDownloadStatus(''), 3000);
    } catch (error) {
      console.error('❌ PDF generation error:', error);
      setDownloadStatus('Error generating PDF. Please try again.');
      setTimeout(() => setDownloadStatus(''), 3000);
    } finally {
      setIsGenerating(false);
    }
  };

  // Direct UPI Payment - Opens UPI App
  const handleUPIPayment = () => {
    const upiUrl = `upi://pay?pa=${myUpiId}&pn=Resume%20Builder&cu=INR&tn=Support%20for%20Resume%20Builder`;
    window.location.href = upiUrl;
    
    setTimeout(() => {
      setShowThanks(true);
      setShowSupport(false);
      setTimeout(() => setShowThanks(false), 5000);
    }, 1000);
  };

  // Copy UPI ID
  const copyUpiId = () => {
    navigator.clipboard.writeText(myUpiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate UPI QR Code
  const getQRCodeUrl = () => {
    const upiData = `upi://pay?pa=${myUpiId}&pn=Resume%20Builder&cu=INR&tn=Support%20for%20Resume%20Builder`;
    return `https://quickchart.io/qr?text=${encodeURIComponent(upiData)}&size=300&margin=2&dark=000000&light=ffffff`;
  };

  // Drag handlers
  const handleMouseDown = (e) => {
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

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setPreviewScale(Math.max(0.3, Math.min(1, previewScale + delta)));
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [previewScale]);

  const renderTemplate = () => {
    const TemplateComponent = selectedTemplate;
    const tid = currentTemplateId || templateId;
    
    return (
      <div 
        ref={templateRef}
        data-template-id={tid}
        data-pdf-ready="true"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
          position: 'relative',
          background: 'white',
          transform: 'none',
          animation: 'none',
          transition: 'none'
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

  const zoomIn = () => setPreviewScale(Math.min(previewScale + 0.1, 1));
  const zoomOut = () => setPreviewScale(Math.max(previewScale - 0.1, 0.3));
  const resetZoom = () => { setPreviewScale(0.5); setPosition({ x: 0, y: 0 }); };

  const isMobileDevice = windowWidth < 768 || isMobile;
  const fontSizes = {
    h1: windowWidth < 480 ? '24px' : windowWidth < 768 ? '26px' : '28px',
    h2: windowWidth < 480 ? '20px' : windowWidth < 768 ? '22px' : '24px',
    body: windowWidth < 480 ? '13px' : '14px',
    small: windowWidth < 480 ? '11px' : '12px'
  };

  const spacing = {
    section: windowWidth < 480 ? '12px' : '16px',
    card: windowWidth < 480 ? '16px' : '20px'
  };

  const displayTemplateId = currentTemplateId || templateId || '?';

  return (
    <>
      <Head>
        <title>Resume Preview & PDF Download | Real-Time Resume Viewer</title>
        <meta name="description" content="Preview your resume in real-time with our interactive viewer. Zoom, pan, and inspect every detail before downloading as a professional PDF." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Orientation Warning for Mobile Users */}
      {showOrientationWarning && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '32px 24px',
            maxWidth: '320px',
            width: '85%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px'
            }}>
              📱🔄
            </div>
            <h2 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              margin: '0 0 12px 0',
              color: '#1e293b'
            }}>
              Rotate Your Device
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#475569',
              margin: '0 0 20px 0'
            }}>
              For the best preview experience and to ensure your PDF downloads correctly, please rotate your phone to landscape mode or switch to desktop mode in your browser.
            </p>
            <button
              onClick={() => setShowOrientationWarning(false)}
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#005cc5';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0070f3';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              OK, Got it
            </button>
          </div>
        </div>
      )}

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
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
          padding: '16px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <div>
            <h1 style={{
              fontSize: fontSizes.h1,
              margin: 0,
              color: '#1a1a1a',
              fontWeight: 700
            }}>
              Preview Your <span style={{ color: '#0070f3' }}>Resume</span>
            </h1>
            <p style={{
              fontSize: fontSizes.small,
              color: '#6c757d',
              margin: '8px 0 0 0'
            }}>
              Template {displayTemplateId} • Real-time preview • A4 format
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '24px',
          padding: spacing.card,
          background: '#f8f9fa',
          borderRadius: '16px',
          border: '1px solid #e9ecef',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '24px', fontWeight: 700, color: '#0070f3' }}>
              {Math.round(previewScale * 100)}%
            </span>
            <span style={{ fontSize: fontSizes.small, color: '#6c757d' }}>Zoom Level</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '24px', fontWeight: 700, color: '#10b981' }}>
              A4
            </span>
            <span style={{ fontSize: fontSizes.small, color: '#6c757d' }}>Page Size</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '24px', fontWeight: 700, color: '#8b5cf6' }}>
              {state.personalInfo?.fullName ? '✓' : '○'}
            </span>
            <span style={{ fontSize: fontSizes.small, color: '#6c757d' }}>Content Ready</span>
          </div>
        </div>

        {/* Preview Container */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: spacing.card,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0',
          marginBottom: '32px'
        }}>
          {/* Controls Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '16px',
            paddingBottom: '16px',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <h2 style={{
              fontSize: fontSizes.h2,
              fontWeight: 600,
              color: '#0f172a',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>👁️</span>
              Interactive Preview
            </h2>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* Zoom Controls */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f8fafc',
                padding: '4px',
                borderRadius: '30px',
                border: '1px solid #e2e8f0'
              }}>
                <button
                  onClick={zoomOut}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  −
                </button>
                <span style={{ minWidth: '60px', textAlign: 'center', fontSize: fontSizes.small }}>
                  {Math.round(previewScale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  +
                </button>
                <button
                  onClick={resetZoom}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  ↺
                </button>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                style={{
                  background: isGenerating ? '#94a3b8' : '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  fontSize: fontSizes.body,
                  fontWeight: 600,
                  cursor: isGenerating ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  boxShadow: hoveredBtn === 'download' ? '0 4px 12px rgba(0,112,243,0.3)' : 'none',
                  transform: hoveredBtn === 'download' ? 'translateY(-2px)' : 'none'
                }}
                onMouseEnter={() => setHoveredBtn('download')}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                {isGenerating ? '⏳ Generating...' : '📄 Download PDF'}
              </button>
            </div>
          </div>

          {/* Status Message */}
          {downloadStatus && (
            <div style={{
              marginBottom: '20px',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: fontSizes.small,
              textAlign: 'center',
              background: downloadStatus.includes('Error') ? '#fef2f2' : 
                         downloadStatus.includes('success') ? '#f0fdf4' : '#f8fafc',
              border: `1px solid ${downloadStatus.includes('Error') ? '#fee2e2' : '#bbf7d0'}`,
              color: downloadStatus.includes('Error') ? '#991b1b' : '#166534'
            }}>
              {downloadStatus}
            </div>
          )}

          {/* Review Success Message */}
          {showReviewSuccess && (
            <div style={{
              marginBottom: '20px',
              padding: '12px 16px',
              borderRadius: '8px',
              background: '#d1fae5',
              border: '1px solid #10b981',
              color: '#065f46',
              textAlign: 'center',
              fontSize: fontSizes.small,
              animation: 'slideIn 0.3s ease-out'
            }}>
              ✨ Thank you for downloading! Please share your experience below ✨
            </div>
          )}

          {/* Preview Area */}
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: isMobileDevice ? '400px' : '600px',
              background: 'linear-gradient(45deg, #f8fafc 25%, #ffffff 25%, #ffffff 50%, #f8fafc 50%, #f8fafc 75%, #ffffff 75%, #ffffff)',
              backgroundSize: '20px 20px',
              borderRadius: '12px',
              padding: spacing.card,
              boxSizing: 'border-box',
              overflow: 'hidden',
              border: '2px dashed #cbd5e1',
              touchAction: 'none',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {showDragHint && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '30px',
                  fontSize: fontSizes.small,
                  backdropFilter: 'blur(4px)',
                  pointerEvents: 'none',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}>
                  🖱️ Drag to move • Ctrl+Scroll to zoom
                </div>
              )}
              <div
                ref={previewRef}
                style={{
                  width: '210mm',
                  minWidth: '210mm',
                  height: '297mm',
                  minHeight: '297mm',
                  background: 'white',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                  position: 'relative',
                  transformOrigin: 'center',
                  transform: `translate(${position.x}px, ${position.y}px) scale(${previewScale})`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>

        {/* UPI SUPPORT SECTION */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: spacing.card,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <span style={{ fontSize: '28px' }}>💝</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#0f172a' }}>
                Support My Work
              </h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>
                Pay any amount you wish
              </p>
            </div>
          </div>

          {!showSupport && !showThanks && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <button
                onClick={() => setShowSupport(true)}
                style={{
                  background: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  padding: '12px 32px',
                  borderRadius: '30px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d97706';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f59e0b';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>❤️</span>
                Support via UPI
              </button>
            </div>
          )}

          {showSupport && !showThanks && (
            <div style={{ padding: '20px' }}>
              {/* QR Code */}
              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: '#f8fafc',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <img
                  src={getQRCodeUrl()}
                  alt="UPI QR Code"
                  style={{
                    width: '250px',
                    height: '250px',
                    margin: '0 auto',
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                  onClick={handleUPIPayment}
                />
                <p style={{ fontSize: '12px', color: '#64748b', marginTop: '12px' }}>
                  Scan with any UPI app
                </p>
              </div>

              {/* UPI ID Display */}
              <div style={{
                background: '#f1f5f9',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <code style={{
                    background: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}>
                    {myUpiId}
                  </code>
                  <button
                    onClick={copyUpiId}
                    style={{
                      padding: '8px 20px',
                      background: copied ? '#10b981' : '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 500
                    }}
                  >
                    {copied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Pay via UPI App Button - KEPT FOR ALL USERS */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
                <button
                  onClick={handleUPIPayment}
                  style={{
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    padding: '14px 32px',
                    borderRadius: '30px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#059669';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#10b981';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span>💳</span>
                  Pay via UPI App
                </button>
              </div>

              {/* Instructions for desktop users */}
              {!isMobile && (
                <div style={{
                  background: '#fef3c7',
                  borderRadius: '12px',
                  padding: '12px',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#92400e' }}>
                    💡 On desktop: Click "Pay via UPI App" to see QR code<br />
                    💳 Or scan the QR code with your phone
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setShowSupport(false)}
                  style={{
                    background: '#f3f4f6',
                    color: '#374151',
                    border: 'none',
                    padding: '12px 32px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e5e7eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                  }}
                >
                  Maybe Later
                </button>
              </div>
            </div>
          )}

          {showThanks && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              animation: 'fadeIn 0.5s ease'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>🙏</div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 600, color: '#10b981' }}>
                Thank you so much!
              </h4>
              <p style={{ color: '#64748b', marginBottom: '0' }}>
                Your support means the world to me. 🙏
              </p>
            </div>
          )}
        </div>

        {/* REVIEW SYSTEM SECTION */}
        <div style={{
          marginTop: '32px',
          marginBottom: '32px'
        }}>
          <ReviewSystem templateId={displayTemplateId} />
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid #e2e8f0'
          }}>
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={currentStep === 0}
                style={{
                  padding: '12px 24px',
                  background: currentStep === 0 ? '#e2e8f0' : 'white',
                  color: currentStep === 0 ? '#94a3b8' : '#0f172a',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: fontSizes.body,
                  fontWeight: 500,
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                ← Previous
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                style={{
                  padding: '12px 24px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: fontSizes.body,
                  fontWeight: 500,
                  cursor: 'pointer'
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
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media print {
            .no-print { display: none !important; }
          }
          @media (max-width: 768px) {
            .preview-header { flex-direction: column; align-items: flex-start; }
          }
        `}</style>
      </main>
    </>
  );
};

export default Preview;