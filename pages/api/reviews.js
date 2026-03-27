// pages/api/reviews.js
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Helper function to read reviews
const readReviews = () => {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
};

// Helper function to write reviews
const writeReviews = (reviews) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing reviews:', error);
    return false;
  }
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET reviews
  if (req.method === 'GET') {
    try {
      const { templateId, limit = 100 } = req.query;
      let reviews = readReviews();
      
      // Filter by templateId if provided
      if (templateId && templateId !== 'all') {
        reviews = reviews.filter(review => review.templateId === templateId);
      }
      
      // Sort by date (newest first)
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      // Apply limit
      if (limit) {
        reviews = reviews.slice(0, parseInt(limit));
      }
      
      return res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  }

  // POST review
  if (req.method === 'POST') {
    try {
      const { name, comment, templateId, parentId, rating } = req.body;
      
      // VALIDATION - FIXED
      if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Name is required' });
      }
      
      if (!comment || !comment.trim()) {
        return res.status(400).json({ error: 'Comment is required' });
      }
      
      if (comment.length < 3) {
        return res.status(400).json({ error: 'Comment must be at least 3 characters' });
      }
      
      if (comment.length > 1000) {
        return res.status(400).json({ error: 'Comment cannot exceed 1000 characters' });
      }
      
      if (name.length > 50) {
        return res.status(400).json({ error: 'Name cannot exceed 50 characters' });
      }
      
      // Create new review
      const newReview = {
        id: Date.now().toString(),
        name: name.trim(),
        comment: comment.trim(),
        templateId: templateId || 'all',
        parentId: parentId || null,
        rating: rating || 0,
        date: new Date().toISOString()
      };
      
      const reviews = readReviews();
      reviews.push(newReview);
      
      const saved = writeReviews(reviews);
      
      if (saved) {
        return res.status(201).json({
          success: true,
          message: 'Review posted successfully',
          review: newReview
        });
      } else {
        return res.status(500).json({ error: 'Failed to save review' });
      }
      
    } catch (error) {
      console.error('Error posting review:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}