# Project Architecture

## Tech Stack
- **Framework**: Next.js 16 (Turbopack)
- **UI Library**: React 18
- **State Management**: React Context API
- **Styling**: CSS Modules + Inline styles
- **PDF Generation**: jsPDF + html2canvas
- **Hosting**: Vercel
- **Language**: JavaScript (ES6+)

## Folder Structure
freeresumemaker.xyz/
├── pages/ # Next.js pages & API routes (100+ files)
│ ├── index.js # Homepage
│ ├── 404.js # Custom 404 page
│ ├── _app.js # App wrapper with SEO and providers
│ ├── _document.js # Document wrapper for HTML structure
│ ├── about.js # About page
│ ├── contact.js # Contact page
│ ├── faq.js # FAQ page
│ ├── privacy-policy.js # Privacy policy
│ ├── terms-of-service.js # Terms of service
│ ├── support.js # Support page
│ ├── resume-builder.js # Resume builder landing page
│ ├── how-to-make-resume.js # Guide page
│ ├── free-resume-templates.js # Templates landing page
│ ├── free-ats-resume-templates.js # ATS templates landing page
│ ├── sitemap.xml.js # Dynamic sitemap generator
│ │
│ ├── blog/ # Blog section
│ │ ├── index.js # Blog listing
│ │ ├── [slug].js # Dynamic blog post
│ │ └── *.js # Individual blog posts (12+)
│ │
│ ├── editor/ # Resume builder editor
│ │ ├── index.js # Template selector
│ │ ├── template-selector.js # SEO-optimized template picker
│ │ └── [templateId]/ # Dynamic template routes
│ │ ├── index.js # Template editor landing
│ │ ├── preview.js # Resume preview
│ │ └── [sectionName].js # Section editor (personalInfo, experience, etc.)
│ │
│ ├── templates/ # Template showcase
│ │ ├── index.js # All templates listing
│ │ ├── [templateId]/index.js # Individual template page
│ │ ├── compare/ # Template comparison pages
│ │ │ ├── index.js # Comparisons landing
│ │ │ └── *.js # Individual comparisons (30+)
│ │ └── by-section/ # Browse templates by section
│ │ ├── index.js # Sections landing
│ │ └── *.js # Section-specific pages
│ │
│ ├── professions/ # Industry-specific pages
│ │ ├── [slug].js # Dynamic profession page
│ │ └── *.js # Individual profession pages (8+)
│ │
│ ├── sections/ # Resume section guides
│ │ └── *.js # Section guides (13 files)
│ │
│ ├── tools/ # Free tools
│ │ ├── ats-scanner.js # ATS resume scanner
│ │ ├── keywords-finder.js # Keyword extractor
│ │ ├── resume-checker.js # Resume analyzer
│ │ └── resume-review.js # AI resume review
│ │
│ ├── examples/ # Resume examples
│ │ └── index.js # Examples by profession
│ │
│ └── template-info/ # Template details
│ ├── [id].js # Dynamic template info
│ └── 17.js, 18.js, 19.js, 20.js # Individual template info
│
├── components/ # Reusable React components
│ ├── SEO.js # SEO component with structured data
│ ├── Header.js # Navigation header
│ ├── Footer.js # Site footer
│ ├── LoadingSpinner.js # Loading indicator
│ ├── DownloadCounter.js # Template download counter
│ ├── PaymentScanner.js # Payment scanner (placeholder)
│ ├── ReviewSystem.js # Review system
│ │
│ ├── editor/ # Resume editor components
│ │ ├── PersonalInfo.js # Personal information form
│ │ ├── Summary.js # Professional summary editor
│ │ ├── Experience.js # Work experience editor
│ │ ├── Education.js # Education editor
│ │ ├── Skills.js # Skills editor
│ │ ├── Projects.js # Projects editor
│ │ ├── Internships.js # Internships editor
│ │ ├── Certifications.js # Certifications editor
│ │ ├── Awards.js # Awards editor
│ │ ├── ImageSection.js # Profile photo uploader
│ │ ├── Preview.js # Resume preview component
│ │ ├── GuidedForm.js # Step-by-step form
│ │ └── ResumeEditor.js # Main editor controller
│ │
│ └── templates/ # Resume template components
│ ├── TemplateSelector.js # Template picker UI
│ └── Template1.js - Template20.js # Individual template renderers
│
├── context/ # State management
│ └── ResumeContext.js # Global resume state with localStorage persistence
│
├── lib/ # Utilities & configurations
│ ├── templateConfig.js # Template sections, limits, and metadata
│ ├── pdfGenerator.js # PDF generation with clickable links
│ └── constants.js # App-wide constants
│
├── public/ # Static assets
│ ├── assets/ # Images and fonts
│ │ └── template-previews/ # Template preview images (1-20.png)
│ ├── favicon.ico # Site favicon
│ ├── og-image.jpg # Open Graph image
│ ├── robots.txt # Search engine crawler instructions
│ └── sitemap.xml # Sitemap (generated)
│
├── data/ # Data files
│ ├── download-counts.json # Template download statistics
│ └── reviews.json # User reviews data
│
├── docs/ # Documentation
│ ├── ARCHITECTURE.md # Architecture documentation
│ ├── CONTEXT-API.md # Context API reference
│ ├── CONTEXT-CODE-REFERENCE.md # Code reference
│ └── DEPLOYMENT.md # Deployment guide
│
├── next.config.js # Next.js configuration
├── package.json # Dependencies
├── postcss.config.js # PostCSS config
├── eslint.config.mjs # ESLint config
└── README.md # Project README



## Key Features

| Feature | Description |
|---------|-------------|
| **20+ Templates** | Professionally designed, ATS-friendly templates for every industry |
| **Real-time Preview** | See changes instantly as you type |
| **PDF Export** | High-quality PDF generation with clickable links |
| **No Signup** | 100% free, no account needed |
| **ATS-Friendly** | All templates designed to pass Applicant Tracking Systems |
| **SEO Optimized** | Complete SEO with structured data, sitemap, and meta tags |
| **Mobile Responsive** | Works perfectly on all devices |
| **Privacy First** | No data storage, everything stays in browser |

## Data Flow
┌─────────────────────────────────────────────────────────────────┐
│ USER INTERACTION │
└─────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────┐
│ EDITOR COMPONENTS │
│ PersonalInfo │ Experience │ Education │ Skills │ Projects │
│ Certifications │ Awards │ Internships │ Summary │
└─────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────┐
│ RESUME CONTEXT (State) │
│ • Centralized state management │
│ • Auto-save to localStorage │
│ • Load on page refresh │
└─────────────────────────────────────────────────────────────────┘
│
┌───────────────┴───────────────┐
▼ ▼
┌───────────────────────────────┐ ┌───────────────────────────────┐
│ PREVIEW COMPONENT │ │ PDF GENERATOR │
│ • Real-time rendering │ │ • Capture with html2canvas │
│ • Template selection │ │ • Generate with jsPDF │
│ • Live updates │ │ • Add clickable links │
└───────────────────────────────┘ └───────────────────────────────┘


## State Management (Context API)

```javascript
// ResumeContext.js structure
const initialState = {
  personalInfo: {},      // Name, email, phone, location, LinkedIn
  professionalSummary: '', // Career summary
  experience: [],         // Work experience entries
  education: [],          // Education entries
  skills: [],             // Skills list
  projects: [],           // Project entries
  internships: [],        // Internship entries
  certifications: [],     // Certification entries
  awards: [],             // Award entries
  languages: [],          // Language entries
  selectedTemplate: null, // Selected template ID
  // ... more sections
};

// Key functions
- updatePersonalInfo()    // Update contact details
- setExperience()         // Add/edit work experience
- setEducation()          // Add/edit education
- setSkills()             // Update skills list
- setSummary()            // Update professional summary
- setProjects()           // Update projects
- updateTemplateSection() // Generic section updater
- importData()            // Import saved data
- resetResumeData()       // Clear all data

1. User clicks "Download PDF"
         │
         ▼
2. Find template element in DOM
   • Check global ref (__resumeTemplateElement)
   • Query by data-template attribute
   • Search by class selectors
         │
         ▼
3. Extract all links (a tags) with positions
   • Get bounding client rect
   • Store coordinates for later
         │
         ▼
4. Clone template with preserved styles
   • Copy computed styles
   • Apply print color adjustment
         │
         ▼
5. Render with html2canvas (high DPI)
         │
         ▼
6. Generate PDF with jsPDF
         │
         ▼
7. Add clickable annotations/links
         │
         ▼
8. Save as PDF file
