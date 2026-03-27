// ============================================
// components/editor/Summary.js
// ENHANCED VERSION - 10+ EXAMPLES PER CATEGORY
// WITH ALL FUNCTIONALITY FIXES AND IMPROVEMENTS
// ============================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';
import Head from 'next/head';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const InfoIcon = ({ tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      style={{ 
        position: 'relative', 
        cursor: 'help', 
        flexShrink: 0, 
        marginLeft: '8px',
        display: 'inline-flex'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      role="button"
      tabIndex={0}
      aria-label={`Information: ${tooltip}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      {showTooltip && (
        <span 
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            width: '220px',
            padding: '10px',
            background: '#333',
            color: 'white',
            borderRadius: '8px',
            fontSize: '12px',
            lineHeight: '1.5',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textAlign: 'left',
            fontWeight: 'normal',
            marginTop: '8px'
          }}
          role="tooltip"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

// Helper function to truncate text to 300 characters while preserving sentences
const truncateTo300Chars = (text) => {
  if (!text) return '';
  if (text.length <= 300) return text;
  
  // Try to cut at a sentence boundary
  const truncated = text.substring(0, 297);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastPeriod > 150) {
    // Cut at the last sentence
    return text.substring(0, lastPeriod + 1);
  } else if (lastSpace > 200) {
    // Cut at the last word
    return text.substring(0, lastSpace) + '...';
  } else {
    // Just truncate
    return truncated + '...';
  }
};

// Enhanced profession templates with 10+ examples each, all under 300 characters
const professionTemplates = {
  'software-engineer': {
    title: 'Software Engineer',
    examples: [
      "Senior Full Stack Engineer with 8+ years building scalable web apps using React, Node.js, and AWS. Led development of products serving 2M+ users, driving 45% revenue growth. Expert in microservices, CI/CD, and Agile. Reduced deployment time by 60% through optimization.",
      
      "Frontend Engineer with 6 years creating responsive apps using React and TypeScript. Spearheaded UI improvements that increased engagement by 55%. Built component libraries reused across 12+ projects. Achieved 95+ PageSpeed scores through performance optimization.",
      
      "Backend Engineer specializing in distributed systems with 7 years using Java and Spring Boot. Designed APIs handling 500K+ daily requests with 99.99% uptime. Optimized queries for 70% faster response times. Led microservices migration with zero downtime.",
      
      "DevOps Engineer with 5 years bridging development and operations. Implemented CI/CD pipelines reducing deployment time from 4 hours to 15 minutes. Containerized 30+ apps with Docker and Kubernetes, improving resource utilization by 50%.",
      
      "ML Engineer with 4 years developing AI applications. Built recommendation systems increasing engagement by 65%. Created NLP models with 92% accuracy. Experience deploying models to production using AWS SageMaker.",
      
      "Full Stack Developer with 9 years experience in MERN stack and cloud architecture. Built e-commerce platform processing $50M+ annually. Mentored 8 junior developers. Achieved 40% performance improvement through code optimization.",
      
      "iOS Developer with 6 years building native apps for iPhone and iPad. Created 15+ apps with 2M+ total downloads. Implemented Core ML features for image recognition. Maintained 4.8+ App Store rating across portfolio.",
      
      "Android Developer with 7 years expertise in Kotlin and Java. Developed apps for 500K+ users. Implemented Jetpack Compose reducing UI development time by 40%. Published 10+ apps with 4.7+ average rating.",
      
      "Game Developer with 8 years creating Unity and Unreal Engine games. Shipped 5 titles with 1M+ downloads. Optimized rendering achieving 60 FPS on mobile devices. Implemented multiplayer networking for 50+ concurrent players.",
      
      "Embedded Systems Engineer with 10 years in IoT and firmware development. Designed systems for 100K+ devices. Implemented security protocols reducing vulnerabilities by 85%. Achieved 99.99% uptime across deployed systems."
    ]
  },
  
  'data-scientist': {
    title: 'Data Scientist',
    examples: [
      "Senior Data Scientist with 7 years in predictive modeling using Python and SQL. Developed churn models reducing customer loss by 35%, saving $3M annually. Created recommendation algorithms increasing cross-sell revenue by 45%. Expert in NLP and A/B testing.",
      
      "Data Science Manager with 9 years leading analytics teams. Built reporting systems reducing report time from 3 days to 2 hours. Implemented fraud detection identifying $2.5M in fraudulent transactions. Mentored 12+ junior data scientists.",
      
      "ML Engineer with 6 years in computer vision and deep learning. Developed object detection models with 98% accuracy for autonomous vehicles. Optimized inference reducing latency by 85%. Published 3 papers and hold 2 patents.",
      
      "Healthcare Data Scientist with 5 years analyzing electronic health records. Developed readmission models reducing hospital returns by 28%, saving $4.2M. Created sepsis detection algorithms with 94% sensitivity, improving patient outcomes.",
      
      "Marketing Analytics Manager with 8 years driving data-informed strategies. Built attribution models optimizing spend across 15 channels, increasing ROAS by 120%. Created customer segments improving conversion rates by 35%.",
      
      "Business Intelligence Analyst with 6 years transforming data into actionable insights. Built dashboards used by 500+ stakeholders. Automated reporting saving 200+ hours monthly. Increased data accuracy by 40% through validation protocols.",
      
      "Quantitative Analyst with 10 years in financial modeling and risk analysis. Developed trading algorithms generating 25% annual returns. Managed $500M portfolio. Reduced risk exposure by 35% through predictive models.",
      
      "Research Scientist with 8 years in computational biology. Published 15+ papers in peer-reviewed journals. Developed ML models for drug discovery accelerating research by 60%. Secured $2M in research grants.",
      
      "Data Engineer with 7 years building scalable data pipelines. Processed 5TB+ daily data across 50+ sources. Reduced ETL time by 70% through optimization. Implemented real-time streaming with Kafka and Spark.",
      
      "AI Ethics Researcher with 5 years ensuring responsible AI development. Developed fairness metrics reducing bias by 45%. Published guidelines adopted by 20+ organizations. Consulted for Fortune 500 companies on ethical AI practices."
    ]
  },
  
  'project-manager': {
    title: 'Project Manager',
    examples: [
      "Senior Project Manager with PMP certification and 10+ years leading $5M+ enterprise software implementations. Delivered 25+ projects on time with 95% client satisfaction. Implemented Agile across 5 teams, increasing productivity by 40%.",
      
      "Technical Project Manager with 7 years managing cloud migration projects. Led migration of 200+ apps to AWS, achieving 40% cost reduction and 99.99% uptime. Managed $2M+ budgets and teams of 25+ engineers.",
      
      "IT Project Manager specializing in cybersecurity with 8 years. Implemented SIEM, DLP, and IAM systems reducing incidents by 75%. Achieved ISO 27001 compliance. Managed $3M budgets and 20+ security professionals.",
      
      "Agile Project Manager with 6 years transforming teams to Agile methodologies. Coached 8 Scrum teams, resulting in 50% faster delivery cycles. Implemented Jira and Confluence for streamlined tracking. SAFe certified.",
      
      "Construction Project Manager with 12 years overseeing $10M+ commercial projects. Managed all phases from planning to completion. Negotiated contracts achieving 15% cost savings. Maintained perfect safety record across 20+ projects.",
      
      "Product Development Manager with 9 years leading cross-functional teams. Launched 15+ products generating $25M in revenue. Reduced time-to-market by 35% through lean methodologies. Managed teams of 30+ across 3 countries.",
      
      "Digital Transformation Manager with 8 years driving organizational change. Led digital initiatives reducing operational costs by 25%. Implemented 20+ new technologies across 10 departments. Achieved 98% user adoption rate.",
      
      "Infrastructure Project Manager with 10 years managing data center builds. Completed 12 major facilities totaling 500K sq ft. Managed $50M budgets and 100+ contractors. Achieved LEED Gold certification for sustainability.",
      
      "Marketing Project Manager with 7 years coordinating global campaigns. Managed 50+ campaigns across 15 markets. Achieved 200% ROI through strategic planning. Coordinated with 20+ agencies and 100+ stakeholders.",
      
      "R&D Project Manager with 11 years managing innovation portfolios. Led 30+ research projects with 40% commercialization rate. Secured $10M in grant funding. Managed intellectual property portfolio of 50+ patents."
    ]
  },
  
  'marketing-manager': {
    title: 'Marketing Manager',
    examples: [
      "Digital Marketing Manager with 9 years driving B2B/B2C growth. Increased organic traffic by 300% through SEO. Managed $2M PPC budget with 4.5x ROAS. Led rebranding that increased brand awareness by 65%.",
      
      "Content Marketing Director with 7 years developing data-driven strategies for SaaS. Generated 50K+ monthly organic visitors and 2,500+ qualified leads. Built and managed team of 8 content creators. Increased engagement by 400%.",
      
      "Brand Marketing Manager with 8 years building consumer brands. Led campaigns increasing brand awareness by 85% and driving $5M in revenue. Managed creative development across TV, digital, and social channels.",
      
      "Product Marketing Manager with 6 years launching B2B SaaS products. Successfully launched 5 products generating $8M ARR. Developed positioning and messaging based on market research and competitive analysis.",
      
      "Social Media Manager with 5 years building communities on Instagram and LinkedIn. Grew following from 0 to 500K+ with 5% engagement rate. Managed influencer partnerships generating $1.2M in revenue.",
      
      "Email Marketing Specialist with 7 years optimizing customer journeys. Managed database of 500K+ subscribers. Increased open rates by 45% through personalization. Generated $3M in attributed revenue through automated campaigns.",
      
      "Growth Marketing Manager with 6 years driving user acquisition. Scaled user base from 10K to 500K in 18 months. Achieved 3x ROAS across paid channels. Implemented viral loop strategy reducing CAC by 60%.",
      
      "PR & Communications Director with 10 years managing corporate reputation. Secured 500+ media placements including Forbes, WSJ, and TechCrunch. Managed crisis communications for 20+ incidents. Increased brand sentiment by 55%.",
      
      "Performance Marketing Manager with 8 years optimizing paid media. Managed $5M annual budget across Google, Facebook, and LinkedIn. Achieved 35% YoY growth with consistent 4x ROAS. Reduced CPA by 40% through optimization.",
      
      "Marketing Operations Manager with 9 years streamlining processes. Implemented Marketo and Salesforce integration. Automated lead scoring improving conversion by 45%. Reduced campaign setup time from 2 weeks to 2 days."
    ]
  },
  
  'sales-executive': {
    title: 'Sales Executive',
    examples: [
      "Enterprise Sales Executive with 10+ years selling SaaS to Fortune 500. Exceeded quotas by 150%, generating $12M in new revenue. Closed 25+ six-figure deals. Top performer for 8 quarters and 4-time President's Club winner.",
      
      "Sales Director with 12 years building high-performing teams. Grew revenue from $5M to $25M in 4 years. Recruited and mentored 15 reps. Reduced sales cycle by 40% and increased win rate from 25% to 42%.",
      
      "B2B Sales Manager with 8 years in technology services. Ranked in top 5% nationally, achieving 200% of quota. Closed $8M in new business. Increased customer lifetime value by 65% through strategic account planning.",
      
      "SaaS Sales Representative with 5 years selling to enterprise clients. Generated $2.5M ARR in first year, exceeding quota by 135%. Maintained 95% retention rate. Ranked #1 out of 50 reps for 4 consecutive quarters.",
      
      "Sales Operations Manager with 7 years optimizing processes. Implemented Salesforce CPQ reducing quote-to-close time by 60%. Developed forecasting models with 95% accuracy. Trained 100+ reps on CRM best practices.",
      
      "Channel Sales Manager with 9 years building partner ecosystems. Recruited 50+ partners generating $15M in indirect revenue. Developed partner programs increasing engagement by 80%. Managed relationships with 20+ strategic partners.",
      
      "Account Executive with 6 years in hardware and software sales. Closed $20M in total contract value across 3 years. Achieved 120% average quota attainment. Named Rookie of the Year and 2-time Presidents Club winner.",
      
      "Business Development Director with 11 years identifying strategic opportunities. Secured 15 strategic partnerships generating $30M in revenue. Expanded into 5 new international markets. Negotiated 20+ complex enterprise agreements.",
      
      "Customer Success Manager with 7 years ensuring client retention. Maintained 98% retention rate for 200+ enterprise accounts. Increased upsell revenue by 45% through strategic account planning. Reduced churn by 35% through proactive engagement.",
      
      "Sales Engineer with 8 years supporting complex technical sales. Supported 50+ deals totaling $100M. Demonstrated products to 500+ prospects. Achieved 85% win rate for technical presentations and proof-of-concepts."
    ]
  },
  
  'ux-designer': {
    title: 'UX Designer',
    examples: [
      "Senior UX Designer with 8 years designing digital products for Fortune 500. Led redesign increasing user satisfaction by 65% and reducing support tickets by 45%. Conducted 100+ user interviews. Expert in Figma.",
      
      "Product Designer with 6 years in B2B SaaS design. Designed features increasing adoption by 50% and reducing churn by 25%. Created prototypes reducing development rework by 40%. Ensured WCAG 2.1 AA compliance.",
      
      "UX Research Lead with 7 years conducting research for enterprise products. Planned 50+ studies with 500+ participants across 5 countries. Shaped product strategy influencing $2M+ investment decisions.",
      
      "Interaction Designer with 5 years creating micro-interactions and animations. Designed motion systems increasing engagement by 35%. Created prototypes in Principle and Framer. Winner of 2 design awards.",
      
      "Design Systems Lead with 6 years building scalable design systems. Created component libraries used by 50+ designers across 30 products. Reduced design time by 70% through reusable components.",
      
      "UX Writer with 5 years crafting microcopy and content strategy. Improved user comprehension by 40% through clear communication. Reduced support tickets by 25% through improved onboarding flows. Defined voice and tone guidelines.",
      
      "Mobile UX Designer with 7 years specializing in iOS and Android. Designed apps for 5M+ users across 50+ countries. Reduced user drop-off by 35% through intuitive navigation. Achieved 4.8+ App Store ratings.",
      
      "Accessibility Specialist with 6 years ensuring inclusive design. Achieved WCAG 2.1 AAA compliance for 20+ products. Conducted 200+ accessibility audits. Increased user base by 25% through improved accessibility features.",
      
      "UX Manager with 9 years leading design teams. Managed 15 designers across 3 locations. Improved design quality by 50% through standardized processes. Launched mentorship program developing 5 junior designers to senior roles.",
      
      "Service Designer with 8 years designing end-to-end experiences. Mapped 50+ customer journeys across 10 service lines. Reduced service delivery time by 40% through process optimization. Saved $2M annually through efficiency improvements."
    ]
  },
  
  'product-manager': {
    title: 'Product Manager',
    examples: [
      "Senior Product Manager with 8 years leading B2B SaaS products. Launched 10+ products generating $15M ARR. Increased user engagement by 80% through feature optimization. Managed roadmap prioritization for 50+ features annually.",
      
      "Technical Product Manager with 7 years in API and platform products. Launched developer platform with 10K+ active users. Reduced integration time from weeks to hours. Managed product for 50+ enterprise clients.",
      
      "AI Product Manager with 6 years leading ML products. Launched 3 AI features used by 2M+ users. Increased model accuracy by 35% through data improvements. Managed cross-functional teams of 25+ engineers and data scientists.",
      
      "Mobile Product Manager with 9 years in consumer apps. Grew user base from 100K to 5M in 3 years. Improved retention by 45% through personalization. Monetized app generating $8M annual revenue.",
      
      "E-commerce Product Manager with 10 years optimizing shopping experiences. Increased conversion rate by 35% through A/B testing. Reduced cart abandonment by 40% through checkout improvements. Managed $50M product catalog.",
      
      "Enterprise Product Manager with 8 years serving Fortune 500 clients. Achieved 98% client retention through strategic roadmap alignment. Increased average contract value by 60% through feature packaging. Managed $10M product line.",
      
      "Platform Product Manager with 7 years building scalable infrastructure. Launched API platform processing 1B+ requests monthly. Reduced development time by 70% through self-service tools. Supported 500+ internal and external developers.",
      
      "Growth Product Manager with 6 years driving user acquisition. Increased activation rate by 55% through onboarding optimization. Reduced churn by 40% through engagement features. Scaled user base to 1M+ monthly active users.",
      
      "Hardware Product Manager with 12 years in consumer electronics. Launched 5 products generating $200M revenue. Managed end-to-end lifecycle from concept to manufacturing. Reduced time-to-market by 25% through supply chain optimization.",
      
      "FinTech Product Manager with 9 years in payments and banking. Launched mobile banking app with 500K+ users. Reduced transaction fees by 30% through new partnerships. Achieved SOC2 Type II compliance."
    ]
  }
};

const Summary = ({ onDataChange, data, navigationButtons, onContinue }) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const textareaRef = useRef(null);
  
  const context = useResume();
  
  // Initialize summary from props or context
  const [summary, setSummary] = useState(() => {
    // Priority: props.data > context.state.professionalSummary > localStorage
    if (data && typeof data === 'string') return truncateTo300Chars(data);
    if (context?.state?.professionalSummary) return truncateTo300Chars(context.state.professionalSummary);
    
    // Check localStorage as fallback
    try {
      const saved = localStorage.getItem('resumeData');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.professionalSummary) return truncateTo300Chars(parsed.professionalSummary);
        if (parsed.summary) return truncateTo300Chars(parsed.summary);
      }
    } catch (error) {
      console.error('Failed to load summary from localStorage:', error);
    }
    
    return '';
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState('software-engineer');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync with context when component mounts or when context changes
  useEffect(() => {
    if (context?.state?.professionalSummary !== undefined && 
        context.state.professionalSummary !== summary) {
      const truncatedSummary = truncateTo300Chars(context.state.professionalSummary);
      setSummary(truncatedSummary);
    }
  }, [context?.state?.professionalSummary]);

  // Measure content height
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [summary, selectedProfession, isGenerating]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save to context and localStorage with debounce
  const saveSummary = useCallback((text) => {
    // Ensure text doesn't exceed 300 characters
    const safeText = truncateTo300Chars(text);
    
    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set saving indicator
    setIsSaving(true);
    setSaveError('');

    // Debounce the save to prevent too many updates
    saveTimeoutRef.current = setTimeout(() => {
      try {
        // Update context using multiple methods
        if (context) {
          // Method 1: setSummary if available
          if (typeof context.setSummary === 'function') {
            context.setSummary(safeText);
          }
          
          // Method 2: updateTemplateSection if available
          if (typeof context.updateTemplateSection === 'function') {
            context.updateTemplateSection('summary', safeText);
          }
          
          // Method 3: direct state update if available
          if (context.state && typeof context.setState === 'function') {
            context.setState(prev => ({
              ...prev,
              professionalSummary: safeText
            }));
          }
        }
        
        // Call parent callback
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(safeText);
        }

        // Save to localStorage directly as backup
        const currentState = JSON.parse(localStorage.getItem('resumeData') || '{}');
        const newState = { 
          ...currentState, 
          professionalSummary: safeText,
          summary: safeText,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        // Dispatch storage event for cross-tab synchronization
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
      } catch (error) {
        console.error('Save failed:', error);
        setSaveError('Failed to save. Please try again.');
      } finally {
        setIsSaving(false);
      }
    }, 500);
  }, [context, onDataChange]);

  const handleChange = (e) => {
    const newText = e.target.value;
    // Enforce 300 character limit
    if (newText.length <= 300) {
      setSummary(newText);
      saveSummary(newText);
    } else {
      // Show temporary error for exceeding limit
      setSaveError('Character limit exceeded. Maximum 300 characters.');
      setTimeout(() => setSaveError(''), 2000);
    }
  };

  // Generate summary with 300 character limit
  const generateSummaryWithLimit = (baseText) => {
    return truncateTo300Chars(baseText);
  };

  const handleGenerateSuggestion = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let generatedSummary = '';
      
      if (selectedProfession && professionTemplates[selectedProfession]) {
        const examples = professionTemplates[selectedProfession].examples;
        const randomIndex = Math.floor(Math.random() * examples.length);
        const randomExample = examples[randomIndex];
        generatedSummary = generateSummaryWithLimit(randomExample);
        
        
      } else {
        const examples = professionTemplates['software-engineer'].examples;
        const randomExample = examples[Math.floor(Math.random() * examples.length)];
        generatedSummary = generateSummaryWithLimit(randomExample);
      }
      
      setSummary(generatedSummary);
      saveSummary(generatedSummary);
      setIsGenerating(false);
      
      // Focus textarea after generation
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 600);
  };

  const handleUseExample = (exampleText) => {
    const truncatedExample = generateSummaryWithLimit(exampleText);
    setSummary(truncatedExample);
    saveSummary(truncatedExample);
    
    // Focus textarea after using example
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Handle continue button click
  const handleContinue = () => {
    // Save immediately before continuing
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveSummary(summary);
    
    // Call the parent's onContinue after a tiny delay to ensure save completes
    setTimeout(() => {
      if (onContinue && typeof onContinue === 'function') {
        onContinue();
      }
    }, 100);
  };

  const wordCount = summary.trim() ? summary.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
  const charactersLeft = 300 - summary.length;

  // Device detection
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  
  // Calculate if content fills the viewport
  const isContentShort = contentHeight < windowHeight * 0.6;

  // Responsive grid template
  const getProfessionGridTemplate = () => {
    if (windowWidth < 480) return 'repeat(2, 1fr)';
    if (windowWidth < 768) return 'repeat(3, 1fr)';
    return 'repeat(3, 1fr)';
  };

  // Dynamic spacing based on device
  const getSpacing = () => {
    if (isMobile) {
      return {
        containerPadding: '8px 8px 0 8px',
        heroPadding: '16px 12px',
        heroMargin: '16px',
        mainGap: '20px',
        sectionMargin: '16px',
        buttonMarginTop: '8px',
        statusMarginTop: '8px',
        textareaMinHeight: '150px'
      };
    } else if (isTablet) {
      return {
        containerPadding: '12px 12px 0 12px',
        heroPadding: '20px 16px',
        heroMargin: '24px',
        mainGap: '24px',
        sectionMargin: '20px',
        buttonMarginTop: '12px',
        statusMarginTop: '10px',
        textareaMinHeight: '160px'
      };
    } else {
      return {
        containerPadding: '16px 12px 0 12px',
        heroPadding: '24px 16px',
        heroMargin: '32px',
        mainGap: '40px',
        sectionMargin: '24px',
        buttonMarginTop: '16px',
        statusMarginTop: '12px',
        textareaMinHeight: '180px'
      };
    }
  };

  const spacing = getSpacing();

  // Create modified navigation buttons with save functionality
  const enhancedNavButtons = navigationButtons ? React.cloneElement(navigationButtons, {
    onContinue: handleContinue
  }) : null;

  // Get character limit color
  const getCharacterLimitColor = () => {
    if (charactersLeft < 0) return '#e74c3c';
    if (charactersLeft < 30) return '#f39c12';
    return '#666';
  };

  // Determine recommended minimum
  const recommendedMin = 60; // About 10-15 words
  const isValidSummary = summary.length >= recommendedMin && summary.length <= 300;

  return (
    <>
      <Head>
        <title>Professional Summary Generator | Resume Builder</title>
        <meta name="title" content="Professional Summary Generator | Resume Builder" />
        <meta name="description" content="Create powerful professional summaries with our free generator. Includes 70+ examples for software engineers, data scientists, project managers, and more." />
        <meta name="keywords" content="resume summary, professional summary, CV summary, career summary, resume generator" />
        <meta property="og:title" content="Professional Summary Generator | Resume Builder" />
        <meta property="og:description" content="Create powerful professional summaries with 70+ examples for various professions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main 
        ref={contentRef}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: spacing.containerPadding,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: '#ffffff',
          minHeight: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ flex: '1 0 auto' }}>
          <header style={{
            textAlign: 'center',
            padding: spacing.heroPadding,
            marginBottom: spacing.heroMargin,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
              marginBottom: '8px',
              color: '#1a1a1a',
              fontWeight: 700,
              lineHeight: '1.3'
            }}>
              Craft Your <span style={{
                color: '#0070f3',
                background: 'linear-gradient(135deg, #0070f3, #0060d6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Professional Summary</span>
            </h1>
            <p style={{
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
              color: '#666',
              margin: '0 auto',
              lineHeight: '1.5',
              padding: '0 4px',
              maxWidth: '800px'
            }}>
              {isMobile ? 'Create a powerful introduction' : 'Create a powerful introduction that captures attention'}
            </p>
            {isSaving && (
              <div style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#0070f3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  border: '2px solid #0070f3',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Saving...
              </div>
            )}
            {saveError && (
              <div style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#e74c3c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}>
                <AlertIcon />
                {saveError}
              </div>
            )}
          </header>

          <div style={{
            display: 'flex',
            flexDirection: isMobile || isTablet ? 'column' : 'row',
            gap: spacing.mainGap,
            marginBottom: spacing.sectionMargin,
            width: '100%'
          }}>
            <section style={{ flex: '1.5', width: '100%' }} aria-label="Summary writing area">
              <div style={{ position: 'relative', width: '100%' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: isMobile ? '12px' : '16px',
                  width: '100%'
                }}>
                  <label htmlFor="professional-summary" style={{
                    fontSize: isMobile ? '16px' : isTablet ? '17px' : '18px',
                    fontWeight: 600,
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flex: 1
                  }}>
                    Professional Summary
                  </label>
                  <InfoIcon tooltip="A compelling summary can increase interview chances. Maximum 300 characters. Click Generate to get AI-powered examples (under 300 characters each)." />
                </div>
                
                {/* Character Counter - Enhanced with visual feedback */}
                <div style={{
                  marginBottom: isMobile ? '12px' : '16px',
                  padding: isMobile ? '12px' : '16px',
                  background: charactersLeft < 0 ? '#ffebee' : charactersLeft < 30 ? '#fff4e6' : '#f8f9fa',
                  borderRadius: '10px',
                  border: `1px solid ${charactersLeft < 0 ? '#ffcdd2' : charactersLeft < 30 ? '#ffe0b2' : '#e9ecef'}`,
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '4px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 700, color: charactersLeft < 0 ? '#e74c3c' : '#0070f3' }}>{summary.length}</span>
                    <span style={{ fontSize: isMobile ? '16px' : '18px', color: '#999' }}>/</span>
                    <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 600, color: '#333' }}>300</span>
                    <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#666', marginLeft: '4px' }}>characters</span>
                    {summary.length >= 250 && (
                      <span style={{
                        fontSize: isMobile ? '10px' : '11px',
                        background: '#fff4e6',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        color: '#f39c12'
                      }}>
                        Near limit
                      </span>
                    )}
                  </div>
                  
                  {/* Progress bar for character limit */}
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: '#e9ecef',
                    borderRadius: '2px',
                    marginTop: '8px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${Math.min((summary.length / 300) * 100, 100)}%`,
                      height: '100%',
                      background: charactersLeft < 0 ? '#e74c3c' : charactersLeft < 30 ? '#f39c12' : '#0070f3',
                      borderRadius: '2px',
                      transition: 'width 0.2s ease'
                    }} />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '8px',
                    fontSize: isMobile ? '11px' : '12px'
                  }}>
                    <span style={{ color: getCharacterLimitColor() }}>
                      {charactersLeft >= 0 ? `${charactersLeft} characters left` : 'Character limit exceeded!'}
                    </span>
                    <span style={{ color: summary.length >= 250 ? '#f39c12' : '#666' }}>
                      {wordCount} words
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: isMobile ? '16px' : '20px', width: '100%' }}>
                  <textarea
                    id="professional-summary"
                    ref={textareaRef}
                    name="professional-summary"
                    value={summary}
                    onChange={handleChange}
                    placeholder={isMobile ? "Write your professional summary..." : "Write your professional summary here. Aim for 2-3 sentences highlighting your key achievements and skills... (Max 300 characters)"}
                    rows={6}
                    maxLength={300}
                    aria-label="Professional summary text"
                    style={{
                      width: '100%',
                      minHeight: spacing.textareaMinHeight,
                      padding: isMobile ? '12px' : '16px',
                      border: `2px solid ${summary.length >= 300 ? '#e74c3c' : summary.length >= 250 ? '#f39c12' : '#e1e5e9'}`,
                      borderRadius: '10px',
                      fontSize: isMobile ? '14px' : '15px',
                      color: '#333',
                      background: 'white',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      lineHeight: '1.6',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.outline = 'none';
                      e.target.style.borderColor = '#0070f3';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 112, 243, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = summary.length >= 300 ? '#e74c3c' : summary.length >= 250 ? '#f39c12' : '#e1e5e9';
                      e.target.style.boxShadow = 'none';
                      // Save on blur as well
                      saveSummary(summary);
                    }}
                  />
                </div>

                <div style={{ marginBottom: isMobile ? '12px' : '16px', width: '100%' }}>
                  <h4 style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: isMobile ? '8px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span aria-hidden="true">📋</span> Select Profession
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: getProfessionGridTemplate(),
                    gap: isMobile ? '6px' : '8px',
                    width: '100%'
                  }} role="group" aria-label="Profession selection">
                    {Object.entries(professionTemplates).map(([key, profession]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedProfession(key)}
                        aria-pressed={selectedProfession === key}
                        style={{
                          padding: isMobile ? '8px 2px' : '10px 6px',
                          background: selectedProfession === key ? '#0070f3' : '#f8f9fa',
                          border: selectedProfession === key ? '1px solid #0070f3' : '1px solid #e9ecef',
                          borderRadius: '6px',
                          fontSize: isMobile ? '11px' : isTablet ? '12px' : '13px',
                          fontWeight: 500,
                          color: selectedProfession === key ? 'white' : '#333',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      >
                        {isMobile ? profession.title.split(' ')[0] : profession.title}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleGenerateSuggestion}
                  disabled={isGenerating}
                  aria-label={isGenerating ? "Generating summary..." : "Generate professional summary"}
                  style={{
                    width: '100%',
                    padding: isMobile ? '12px' : '16px',
                    background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: isMobile ? '14px' : '15px',
                    fontWeight: 600,
                    cursor: isGenerating ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxSizing: 'border-box',
                    opacity: isGenerating ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isGenerating && !isMobile) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 112, 243, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isGenerating ? (
                    <>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Generating (under 300 chars)...
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: '16px' }} aria-hidden="true">✨</span>
                      {isMobile ? 'Generate' : `Generate ${professionTemplates[selectedProfession]?.title || 'Professional'} Summary`}
                    </>
                  )}
                </button>
                
                <p style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#666',
                  marginTop: '12px',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  ✨ {Object.values(professionTemplates).reduce((sum, p) => sum + p.examples.length, 0)} examples available • All under 300 characters
                </p>
              </div>
            </section>

            <aside style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }} aria-label="Summary examples">
              <section style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #e9ecef',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '16px' : isTablet ? '17px' : '18px',
                  fontWeight: 600,
                  color: '#333',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span aria-hidden="true">📝</span> 
                  {isMobile ? 'Examples' : `${professionTemplates[selectedProfession]?.title || 'Software Engineer'} Examples (${professionTemplates[selectedProfession]?.examples.length} available)`}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: isMobile ? '12px' : '16px',
                  maxHeight: isMobile ? 'none' : '600px',
                  overflowY: isMobile ? 'visible' : 'auto',
                  paddingRight: isMobile ? '0' : '8px'
                }}>
                  {professionTemplates[selectedProfession]?.examples.map((example, index) => {
                    const displayExample = generateSummaryWithLimit(example);
                    return (
                      <article key={index} style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: isMobile ? '12px' : '16px',
                        border: '1px solid #e9ecef',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        ':hover': {
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <header style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '8px',
                          flexWrap: 'wrap',
                          gap: '6px'
                        }}>
                          <span style={{
                            padding: '4px 8px',
                            background: '#0070f3',
                            color: 'white',
                            borderRadius: '20px',
                            fontSize: isMobile ? '11px' : '12px',
                            fontWeight: 600
                          }}>Example {index + 1}</span>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ 
                              fontSize: isMobile ? '10px' : '11px', 
                              color: example.length > 250 ? '#f39c12' : '#666',
                              background: '#f8f9fa',
                              padding: '2px 6px',
                              borderRadius: '12px'
                            }}>
                              {example.length} chars
                            </span>
                          </div>
                        </header>
                        <p style={{
                          fontSize: isMobile ? '12px' : '13px',
                          color: '#555',
                          lineHeight: '1.6',
                          marginBottom: '12px'
                        }}>{displayExample}</p>
                        <div style={{
                          display: 'flex',
                          gap: '8px',
                          justifyContent: 'flex-end'
                        }}>
                          <button 
                            onClick={() => handleUseExample(example)}
                            style={{
                              padding: isMobile ? '6px 12px' : '8px 16px',
                              background: 'white',
                              color: '#0070f3',
                              border: '2px solid #0070f3',
                              borderRadius: '6px',
                              fontSize: isMobile ? '12px' : '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              flex: 1
                            }}
                            onMouseEnter={(e) => {
                              if (!isMobile) {
                                e.currentTarget.style.background = '#0070f3';
                                e.currentTarget.style.color = 'white';
                              }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'white';
                              e.currentTarget.style.color = '#0070f3';
                            }}
                          >
                            Use This Example
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
                
                <p style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#666',
                  marginTop: '16px',
                  textAlign: 'center',
                  padding: '8px',
                  background: '#e9ecef',
                  borderRadius: '6px'
                }}>
                  📊 {professionTemplates[selectedProfession]?.examples.length} examples available • All under 300 characters
                </p>
              </section>
            </aside>
          </div>
        </div>

        <nav style={{
          marginTop: spacing.buttonMarginTop,
          width: '100%',
          paddingBottom: isContentShort && !isMobile ? '20px' : (isMobile ? '8px' : '0')
        }} aria-label="Form navigation">
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            gap: isMobile ? '8px' : '16px',
            marginBottom: spacing.statusMarginTop,
            width: '100%'
          }}>
            {enhancedNavButtons || navigationButtons}
          </div>
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '10px' : '12px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: isMobile ? '12px' : '14px',
            width: '100%',
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            boxSizing: 'border-box'
          }} role="status" aria-live="polite">
            {isValidSummary ? (
              <div style={{ color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <CheckIcon /> {isMobile ? 'Ready!' : 'Summary is ready!'}
                {summary.length >= 250 && (
                  <span style={{ color: '#f39c12', fontSize: '11px' }}>
                    ({300 - summary.length} chars left)
                  </span>
                )}
              </div>
            ) : summary.length > 0 ? (
              <div style={{ color: '#e74c3c', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <AlertIcon /> {isMobile ? `Need ${recommendedMin - summary.length} more chars` : `Aim for ${recommendedMin}-300 characters for best results (currently ${summary.length})`}
              </div>
            ) : (
              <div style={{ color: '#0070f3', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '16px' }} aria-hidden="true">ℹ️</span>
                {isMobile ? 'Write or generate' : 'Write a compelling summary or use our generator (70+ under 300 char examples)'}
              </div>
            )}
          </div>
        </nav>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </main>
    </>
  );
};

export default Summary;