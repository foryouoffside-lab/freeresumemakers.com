import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';

// Import ALL templates (1-16)
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

import { generatePDF } from '../../utils/pdfGenerator';

const Preview = ({ templateId, isInline = false, showNavigation = false, onPrev, onNext, currentStep, totalSteps }) => {
  const { state } = useResume();
  const previewRef = useRef();
  const containerRef = useRef();
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');
  
  // All available templates (1-16)
  const templates = {
    1: Template1,
    2: Template2,
    3: Template3,
    4: Template4,
    5: Template5,
    6: Template6,
    7: Template7,
    8: Template8,
    9: Template9,
    10: Template10,
    11: Template11,
    12: Template12,
    13: Template13,
    14: Template14,
    15: Template15,
    16: Template16
  };

  // Get the correct template to use
  const getTemplateToUse = () => {
    // Priority: 1. prop templateId, 2. state.selectedTemplate, 3. default to 1
    const effectiveTemplateId = parseInt(templateId) || parseInt(state?.selectedTemplate) || 1;
    console.log("Preview using template:", effectiveTemplateId);
    return templates[effectiveTemplateId] || Template1;
  };

  const selectedTemplate = getTemplateToUse();

  // ... REST OF THE FILE KEEP AS IS (all the dragging, zooming code) ...
