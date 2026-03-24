import fs from 'fs';
import path from 'path';

const COUNTER_FILE = path.join(process.cwd(), 'data', 'download-counts.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'data'));
}

// Initialize counter file if it doesn't exist
if (!fs.existsSync(COUNTER_FILE)) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ total: 0, templates: {} }));
}

export default function handler(req, res) {
  // Enable CORS for better compatibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    // Increment counter
    try {
      const { templateId } = req.body;
      let counts;
      
      try {
        counts = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
      } catch (err) {
        counts = { total: 0, templates: {} };
      }
      
      counts.total += 1;
      if (templateId) {
        counts.templates[templateId] = (counts.templates[templateId] || 0) + 1;
      }
      
      fs.writeFileSync(COUNTER_FILE, JSON.stringify(counts, null, 2));
      
      res.status(200).json({ success: true, counts });
    } catch (error) {
      console.error('Error tracking download:', error);
      res.status(500).json({ error: 'Failed to track download' });
    }
  } 
  else if (req.method === 'GET') {
    // Get current counts
    try {
      let counts;
      try {
        counts = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
      } catch (err) {
        counts = { total: 0, templates: {} };
      }
      res.status(200).json(counts);
    } catch (error) {
      console.error('Error reading counts:', error);
      res.status(500).json({ error: 'Failed to read counts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}