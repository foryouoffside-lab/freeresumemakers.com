# Project Architecture

## Tech Stack
- **Framework**: Next.js 16
- **UI Library**: React 18
- **State Management**: Context API
- **Styling**: CSS Modules + Inline styles
- **PDF Generation**: jsPDF + html2canvas

## Folder Structure
  
/
├── pages/          # Next.js pages & API routes
├── components/     # Reusable React components
├── context/        # State management
├── lib/            # Utilities & configurations
├── public/         # Static assets
├── docs/           # Documentation
└── styles/         # Global CSS files
  

## Key Features
- **17+ Templates**: Professionally designed ATS-friendly templates
- **Real-time Preview**: See changes as you type
- **PDF Export**: High-quality PDF generation
- **No Signup**: 100% free, no account needed

## Data Flow
1. User inputs data in editor components
2. Context API updates global state
3. Preview component reflects changes
4. PDF generator captures final resume
