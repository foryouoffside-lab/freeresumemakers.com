import fs from 'fs';
import path from 'path';

const COUNTER_FILE = path.join(process.cwd(), 'data', 'download-counts.json');
const DATA_DIR = path.join(process.cwd(), 'data');
const MAX_TEMPLATE_ID_LENGTH = 50;
const CACHE_TTL = 3600000; // 1 hour in milliseconds

// In-memory cache for counts to reduce file reads
let countsCache = null;
let lastCacheUpdate = 0;

// Ensure data directory exists
function ensureDataDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating data directory:', error);
    throw new Error('Failed to initialize data directory');
  }
}

// Initialize counter file with validation
function initializeCounterFile() {
  try {
    ensureDataDirectory();
    
    if (!fs.existsSync(COUNTER_FILE)) {
      const initialData = {
        total: 0,
        templates: {},
        lastReset: new Date().toISOString(),
        version: '1.0'
      };
      fs.writeFileSync(COUNTER_FILE, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    
    // Read and validate existing file
    const content = fs.readFileSync(COUNTER_FILE, 'utf-8');
    const cleanContent = content.replace(/^\uFEFF/, '');
    const data = JSON.parse(cleanContent);
    
    // Validate structure
    if (typeof data.total !== 'number') {
      data.total = 0;
    }
    if (!data.templates || typeof data.templates !== 'object') {
      data.templates = {};
    }
    if (!data.version) {
      data.version = '1.0';
    }
    
    return data;
  } catch (error) {
    console.error('Error initializing counter file:', error);
    
    // Create backup if file exists
    if (fs.existsSync(COUNTER_FILE)) {
      const backupPath = `${COUNTER_FILE}.backup.${Date.now()}`;
      try {
        fs.copyFileSync(COUNTER_FILE, backupPath);
      } catch (backupError) {
        console.error('Failed to create backup:', backupError);
      }
    }
    
    // Return default structure
    return {
      total: 0,
      templates: {},
      lastReset: new Date().toISOString(),
      version: '1.0'
    };
  }
}

// Get counts with caching
function getCounts(useCache = true) {
  const now = Date.now();
  
  // Return cached data if valid
  if (useCache && countsCache && (now - lastCacheUpdate) < CACHE_TTL) {
    return countsCache;
  }
  
  // Read fresh data
  const counts = initializeCounterFile();
  
  // Update cache
  countsCache = counts;
  lastCacheUpdate = now;
  
  return counts;
}

// Update counts with validation
function updateCounts(templateId) {
  try {
    // Validate template ID
    let sanitizedTemplateId = null;
    if (templateId && typeof templateId === 'string') {
      sanitizedTemplateId = templateId.trim().substring(0, MAX_TEMPLATE_ID_LENGTH);
      // Remove any potentially dangerous characters
      sanitizedTemplateId = sanitizedTemplateId.replace(/[^a-zA-Z0-9_-]/g, '');
    }
    
    // Read current counts
    let counts = getCounts(false);
    
    // Update totals
    counts.total = (counts.total || 0) + 1;
    
    // Update template-specific count
    if (sanitizedTemplateId) {
      counts.templates[sanitizedTemplateId] = (counts.templates[sanitizedTemplateId] || 0) + 1;
    }
    
    // Add metadata for tracking
    counts.lastUpdated = new Date().toISOString();
    counts.lastUpdateType = sanitizedTemplateId ? 'template_download' : 'generic_download';
    
    // Write to file
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(counts, null, 2));
    
    // Update cache
    countsCache = counts;
    lastCacheUpdate = Date.now();
    
    return counts;
  } catch (error) {
    console.error('Error updating counts:', error);
    throw new Error('Failed to update download counts');
  }
}

// Format counts for response
function formatCountsResponse(counts, includeHistory = false) {
  const response = {
    success: true,
    data: {
      total: counts.total,
      templates: counts.templates,
      statistics: {
        totalDownloads: counts.total,
        uniqueTemplates: Object.keys(counts.templates || {}).length,
        mostDownloaded: null
      }
    },
    metadata: {
      version: counts.version || '1.0',
      lastUpdated: counts.lastUpdated || counts.lastReset || new Date().toISOString()
    }
  };
  
  // Calculate most downloaded template
  if (counts.templates && Object.keys(counts.templates).length > 0) {
    const mostDownloaded = Object.entries(counts.templates).reduce((max, [id, count]) => {
      return count > (max.count || 0) ? { id, count } : max;
    }, {});
    
    response.data.statistics.mostDownloaded = {
      templateId: mostDownloaded.id,
      count: mostDownloaded.count,
      percentage: ((mostDownloaded.count / counts.total) * 100).toFixed(2)
    };
  }
  
  return response;
}

// Validate POST request
function validatePostRequest(body) {
  const errors = [];
  
  if (body.templateId !== undefined && typeof body.templateId !== 'string') {
    errors.push('templateId must be a string if provided');
  }
  
  if (body.templateId && body.templateId.length > MAX_TEMPLATE_ID_LENGTH) {
    errors.push(`templateId cannot exceed ${MAX_TEMPLATE_ID_LENGTH} characters`);
  }
  
  return errors;
}

export default function handler(req, res) {
  // Enable CORS with specific headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // POST - Increment download counter
  if (req.method === 'POST') {
    try {
      const { templateId } = req.body;
      
      // Validate request
      const validationErrors = validatePostRequest(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          errors: validationErrors
        });
      }
      
      // Update counts
      const updatedCounts = updateCounts(templateId);
      
      // Return formatted response
      res.status(200).json({
        success: true,
        message: 'Download tracked successfully',
        data: {
          total: updatedCounts.total,
          templateId: templateId || null,
          templateCount: templateId ? updatedCounts.templates[templateId] : null,
          timestamp: new Date().toISOString()
        },
        statistics: {
          totalDownloads: updatedCounts.total,
          templatesCount: Object.keys(updatedCounts.templates || {}).length
        }
      });
      
    } catch (error) {
      console.error('Error tracking download:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: 'Failed to track download. Please try again later.',
        reference: `ERR_${Date.now()}`
      });
    }
  } 
  // GET - Retrieve download statistics
  else if (req.method === 'GET') {
    try {
      const { format = 'full', includeHistory = 'false' } = req.query;
      
      // Get counts with cache
      const counts = getCounts(true);
      
      // Format response based on requested format
      if (format === 'simple') {
        // Simple format for quick display
        res.status(200).json({
          success: true,
          total: counts.total,
          templates: counts.templates
        });
      } else {
        // Full format with statistics
        const formattedResponse = formatCountsResponse(counts, includeHistory === 'true');
        res.status(200).json(formattedResponse);
      }
      
    } catch (error) {
      console.error('Error reading counts:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: 'Failed to retrieve download statistics',
        reference: `ERR_${Date.now()}`
      });
    }
  } 
  // DELETE - Reset counters (admin only - implement authentication in production)
  else if (req.method === 'DELETE') {
    // This endpoint should be protected with authentication in production
    try {
      const { adminKey } = req.query;
      
      // Simple admin key check (replace with proper authentication)
      const ADMIN_KEY = process.env.ADMIN_KEY || 'admin123';
      if (adminKey !== ADMIN_KEY) {
        return res.status(403).json({
          success: false,
          error: 'Unauthorized',
          message: 'Admin access required to reset counters'
        });
      }
      
      // Reset counters
      const resetData = {
        total: 0,
        templates: {},
        lastReset: new Date().toISOString(),
        version: '1.0'
      };
      
      fs.writeFileSync(COUNTER_FILE, JSON.stringify(resetData, null, 2));
      
      // Clear cache
      countsCache = null;
      lastCacheUpdate = 0;
      
      res.status(200).json({
        success: true,
        message: 'Counters reset successfully',
        data: resetData
      });
      
    } catch (error) {
      console.error('Error resetting counters:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: 'Failed to reset counters'
      });
    }
  }
  // Handle unsupported methods
  else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: `The ${req.method} method is not supported for this endpoint`,
      supportedMethods: ['GET', 'POST', 'OPTIONS']
    });
  }
}