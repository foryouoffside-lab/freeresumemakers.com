// ============================================
// utils/pdfGenerator.js
// FIXED: Adds clickable links to PDF generated with html2canvas
// ============================================

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (resumeData, templateId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log removed for production
      
      // Try multiple methods to find the template
      let template = null;
      
      // Method 1: Use global ref from Preview.js
      if (window.__resumeTemplateElement) {
        template = window.__resumeTemplateElement;
        // console.log removed for production
      }
      
      // Method 2: Find by template ID
      if (!template) {
        template = document.querySelector(`[data-template="${templateId}"]`);
        // console.log removed for production
      }
      
      // Method 3: Find by common template classes
      if (!template) {
        const possibleClasses = [
          '.modern-template',
          '[class*="template"]',
          '.template1-container',
          '.template17-container',
          '.template18-container',
          '.template19-container',
          '.template20-container',
          '[data-template-locked="true"]'
        ];
        
        for (const selector of possibleClasses) {
          template = document.querySelector(selector);
          if (template) {
            // console.log removed for production
            break;
          }
        }
      }
      
      // Method 4: Look in preview container
      if (!template) {
        const previewContainer = document.querySelector('.preview-container, .preview, [class*="preview"]');
        if (previewContainer) {
          template = previewContainer.querySelector('[class*="template"], [data-template-locked="true"]');
          // console.log removed for production
        }
      }
      
      if (!template) {
        throw new Error('Template element not found - please check selectors');
      }

      // STEP 1: Extract all link information BEFORE capturing
      const links = [];
      
      const extractLinks = (element, parentPath = '') => {
        // Find all anchor tags
        const anchorTags = element.querySelectorAll('a');
        
        anchorTags.forEach((link, index) => {
          const href = link.getAttribute('href');
          if (!href || href === '' || href === '#') return;
          
          // Get the position of the link element
          const rect = link.getBoundingClientRect();
          const originalRect = template.getBoundingClientRect();
          
          // Get the text content (for debugging)
          const text = link.textContent.trim();
          const icon = link.querySelector('[style*="contactIcon"]')?.textContent || '';
          
          // Parse the href to determine type
          let url = href;
          let type = 'external';
          
          if (href.startsWith('mailto:')) {
            type = 'email';
          } else if (href.startsWith('tel:')) {
            type = 'phone';
          } else if (href.includes('linkedin.com')) {
            type = 'linkedin';
          } else if (href.includes('github.com')) {
            type = 'github';
          } else if (!href.startsWith('http')) {
            url = `https://${href}`;
          }
          
          // Store link information
          links.push({
            id: `link_${Date.now()}_${index}`,
            href: url,
            type: type,
            text: text,
            icon: icon,
            x: rect.left - originalRect.left,
            y: rect.top - originalRect.top,
            width: rect.width,
            height: rect.height,
            page: 0 // Will be set after PDF generation
          });
          
          // console.log removed for production
        });
      };
      
      // Extract all links from the template
      extractLinks(template);
      // console.log removed for production

      // STEP 2: Create a container with exact A4 dimensions
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '210mm';
      container.style.height = '297mm';
      container.style.background = '#ffffff';
      container.style.zIndex = '9999';
      container.style.overflow = 'hidden';
      container.style.padding = '0';
      container.style.margin = '0';
      container.style.boxSizing = 'border-box';

      // Clone the template
      const templateClone = template.cloneNode(true);
      
      // CRITICAL: Preserve all inline styles
      const originalElements = template.querySelectorAll('*');
      const clonedElements = templateClone.querySelectorAll('*');
      
      // Apply computed styles to clone
      originalElements.forEach((originalEl, index) => {
        if (clonedElements[index]) {
          const computedStyle = window.getComputedStyle(originalEl);
          const cloneEl = clonedElements[index];
          
          const styleProps = [
            'color', 'backgroundColor', 'fontSize', 'fontWeight', 'fontFamily',
            'lineHeight', 'textAlign', 'padding', 'margin', 'border',
            'borderRadius', 'boxShadow', 'background', 'backgroundImage',
            'display', 'position', 'width', 'height', 'top', 'left',
            'right', 'bottom', 'flexDirection', 'justifyContent',
            'alignItems', 'gap', 'gridTemplateColumns', 'gridGap',
            'letterSpacing', 'textTransform', 'whiteSpace', 'overflow',
            'textOverflow', 'borderLeft', 'borderRight', 'borderTop',
            'borderBottom', 'borderColor', 'opacity', 'transform'
          ];
          
          styleProps.forEach(prop => {
            const value = computedStyle[prop];
            if (value && value !== 'none' && value !== 'auto' && !value.includes('px')) {
              cloneEl.style[prop] = value;
            }
          });
          
          // Special handling for gradients
          if (computedStyle.background && computedStyle.background !== 'none') {
            cloneEl.style.background = computedStyle.background;
          }
          
          // Force print color adjustment
          cloneEl.style.webkitPrintColorAdjust = 'exact';
          cloneEl.style.printColorAdjust = 'exact';
          cloneEl.style.colorAdjust = 'exact';
        }
      });
      
      // Apply root template styles
      templateClone.style.cssText = template.style.cssText;
      templateClone.style.width = '100%';
      templateClone.style.height = '100%';
      templateClone.style.margin = '0';
      templateClone.style.padding = '0';
      templateClone.style.overflow = 'hidden';
      templateClone.style.background = '#ffffff';
      templateClone.style.boxSizing = 'border-box';
      templateClone.style.position = 'relative';

      // Remove loading elements
      const loadingElements = templateClone.querySelectorAll('[class*="loading"], [class*="spinner"]');
      loadingElements.forEach(el => {
        if (el) el.style.display = 'none';
      });

      container.appendChild(templateClone);
      document.body.appendChild(container);

      // Wait for rendering
      await new Promise(resolve => setTimeout(resolve, 1000));

      // console.log removed for production
      
      // Calculate optimal scale
      const targetWidth = 2480; // A4 width at 300 DPI
      const scale = targetWidth / container.offsetWidth;
      
      const canvas = await html2canvas(container, {
        scale: scale,
        dpi: 300,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: container.offsetWidth,
        height: container.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        imageTimeout: 15000,
        removeContainer: false,
        
        onclone: (clonedDoc, element) => {
          // Add styles to enhance text contrast
          const style = clonedDoc.createElement('style');
          style.textContent = `
            * {
              animation: none !important;
              transition: none !important;
              transform: none !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              text-rendering: geometricPrecision !important;
            }
            
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
            }
          `;
          clonedDoc.head.appendChild(style);
          
          // Force print color adjustment
          clonedDoc.querySelectorAll('*').forEach(el => {
            el.style.webkitPrintColorAdjust = 'exact';
            el.style.printColorAdjust = 'exact';
            el.style.colorAdjust = 'exact';
          });
        },
        
        quality: 1,
        cacheBust: true,
        foreignObjectRendering: false,
        windowWidth: container.offsetWidth,
        windowHeight: container.offsetHeight,
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
      });

      // Clean up container
      document.body.removeChild(container);

      // console.log removed for production

      // STEP 3: Create PDF with the image
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
        precision: 16
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate scaling factors
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const scaleX = pdfWidth / canvasWidth;
      const scaleY = pdfHeight / canvasHeight;
      
      // Add the image to PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage({
        imageData: imgData,
        format: 'PNG',
        x: 0,
        y: 0,
        width: pdfWidth,
        height: pdfHeight,
        compression: 'FAST'
      });
      
      // STEP 4: Add clickable annotations/links to the PDF
      // console.log removed for production
      
      links.forEach(link => {
        // Convert pixel coordinates to PDF coordinates
        const x = link.x * scaleX;
        const y = link.y * scaleY;
        const width = link.width * scaleX;
        const height = link.height * scaleY;
        
        // console.log removed for production size (${width}, ${height})
        
        // Add the link annotation to the PDF
        try {
          pdf.link(x, y, width, height, { url: link.href });
        } catch (error) {
          console.error(`Failed to add link for ${link.href}:`, error);
        }
      });
      
      // console.log removed for production

      // STEP 5: Save the PDF
      const fileName = resumeData?.personalInfo?.fullName 
        ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`
        : `resume_template_${templateId}.pdf`;
      
      pdf.save(fileName);

      // console.log removed for production
      resolve();

    } catch (error) {
      console.error('PDF generation error:', error);
      reject(new Error(`Failed to generate PDF: ${error.message}`));
    }
  });
};

// Helper function to debug links in template
export const debugLinks = () => {
  const template = document.querySelector('[data-template-locked="true"]');
  if (!template) return [];
  
  const links = [];
  const anchorTags = template.querySelectorAll('a');
  
  anchorTags.forEach((link, index) => {
    const href = link.getAttribute('href');
    const rect = link.getBoundingClientRect();
    const text = link.textContent.trim();
    const icon = link.querySelector('[style*="contactIcon"]')?.textContent || '';
    
    links.push({
      index,
      text,
      icon,
      href,
      position: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
      isValid: href && href !== '' && href !== '#'
    });
  });
  
  console.table(links.map(l => ({
    text: l.text,
    href: l.href,
    hasPosition: l.position.width > 0,
    isValid: l.isValid
  })));
  
  return links;
};

export default generatePDF;