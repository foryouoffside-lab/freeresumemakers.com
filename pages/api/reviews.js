import fs from 'fs';
import path from 'path';

const REVIEWS_FILE = path.join(process.cwd(), 'data', 'reviews.json');

// Initialize reviews file with validation
function initializeReviewsFile() {
  try {
    if (!fs.existsSync(REVIEWS_FILE)) {
      fs.writeFileSync(REVIEWS_FILE, JSON.stringify([]));
      return [];
    }
    
    const content = fs.readFileSync(REVIEWS_FILE, 'utf-8');
    const cleanContent = content.replace(/^\uFEFF/, '');
    const reviews = JSON.parse(cleanContent);
    
    if (!Array.isArray(reviews)) {
      throw new Error('Reviews file is not an array');
    }
    
    return reviews;
  } catch (error) {
    console.error('Error initializing reviews file:', error);
    if (fs.existsSync(REVIEWS_FILE)) {
      const backupPath = `${REVIEWS_FILE}.backup.${Date.now()}`;
      fs.copyFileSync(REVIEWS_FILE, backupPath);
      
    }
    fs.writeFileSync(REVIEWS_FILE, JSON.stringify([]));
    return [];
  }
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    // Add new review or reply - NO RESTRICTIONS
    try {
      const { name, rating, comment, templateId, parentId } = req.body;
      
      if (!name || !comment) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const reviews = initializeReviewsFile();
      
      const newReview = {
        id: Date.now(),
        name: name.substring(0, 50),
        rating: parentId ? 0 : (parseInt(rating) || 0),
        comment: comment.substring(0, 500),
        templateId: templateId || 'all',
        parentId: parentId || null,
        date: new Date().toISOString()
      };
      
      reviews.unshift(newReview);
      fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
      
      res.status(200).json(newReview);
    } catch (error) {
      console.error('Error saving review:', error);
      res.status(500).json({ error: 'Failed to save review' });
    }
  } 
  else if (req.method === 'GET') {
    // Get reviews
    try {
      const { templateId, limit = 100 } = req.query;
      let reviews = initializeReviewsFile();
      
      if (templateId && templateId !== 'all') {
        reviews = reviews.filter(r => r.templateId === templateId || r.templateId === 'all');
      }
      
      // Sort by date (newest first)
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      res.status(200).json(reviews.slice(0, parseInt(limit)));
    } catch (error) {
      console.error('Error reading reviews:', error);
      res.status(500).json({ error: 'Failed to read reviews' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
