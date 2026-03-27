// ============================================
// components/ReviewSystem.js
// SIMPLE REVIEW SYSTEM - NO RATINGS AT ALL
// ============================================

import { useState, useEffect } from 'react';

export default function ReviewSystem({ templateId = 'all' }) {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [expandedReplies, setExpandedReplies] = useState(new Set());

  useEffect(() => {
    fetchReviews();
    // Refresh every 30 seconds
    const interval = setInterval(fetchReviews, 30000);
    return () => clearInterval(interval);
  }, [templateId]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/reviews?templateId=${templateId}&limit=100`);
      const data = await response.json();
      const structuredComments = structureComments(data);
      setReviews(structuredComments);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const structureComments = (comments) => {
    const commentMap = new Map();
    const roots = [];

    comments.forEach(comment => {
      commentMap.set(comment.id, {
        ...comment,
        replies: [],
        createdAt: new Date(comment.date).getTime()
      });
    });

    comments.forEach(comment => {
      const node = commentMap.get(comment.id);
      if (comment.parentId && commentMap.has(comment.parentId)) {
        commentMap.get(comment.parentId).replies.push(node);
      } else {
        roots.push(node);
      }
    });

    // Sort by newest first (default)
    return roots.sort((a, b) => b.createdAt - a.createdAt);
  };

  const handleSubmit = async (e, parentId = null) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const submitData = {
      name: formData.name,
      rating: 0, // No ratings
      comment: parentId ? replyText : formData.comment,
      templateId,
      parentId: parentId || null
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: parentId ? 'Reply posted!' : 'Thank you for your review!' });
        setFormData({ name: '', comment: '' });
        setReplyText('');
        setReplyingTo(null);
        setShowForm(false);
        fetchReviews();
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit' });
    } finally {
      setSubmitting(false);
    }
  };

  const toggleReplies = (reviewId) => {
    setExpandedReplies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  const calculateStats = () => {
    const allComments = [];
    const flatten = (comments) => {
      comments.forEach(comment => {
        allComments.push(comment);
        if (comment.replies?.length) flatten(comment.replies);
      });
    };
    flatten(reviews);
    
    return { totalComments: allComments.length };
  };

  const stats = calculateStats();

  const Comment = ({ comment, depth = 0 }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [localReplyText, setLocalReplyText] = useState('');
    const maxDepth = 5;

    const handleLocalReply = async (e) => {
      e.preventDefault();
      if (!localReplyText.trim()) return;
      
      setSubmitting(true);
      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name || 'Anonymous',
            rating: 0,
            comment: localReplyText,
            templateId,
            parentId: comment.id
          })
        });
        
        if (response.ok) {
          setLocalReplyText('');
          setShowReplyForm(false);
          fetchReviews();
        }
      } catch (error) {
        console.error('Error posting reply:', error);
      } finally {
        setSubmitting(false);
      }
    };

    const hasReplies = comment.replies && comment.replies.length > 0;
    const isExpanded = expandedReplies.has(comment.id);
    const canNest = depth < maxDepth;

    const getAvatarColor = (name) => {
      const colors = ['#667eea', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec489a', '#06b6d4'];
      const index = name.length % colors.length;
      return colors[index];
    };

    return (
      <div className="comment-thread" style={{ marginLeft: depth > 0 ? '48px' : '0' }}>
        <div className="comment-item" style={{
          background: depth === 0 ? 'white' : '#fafbfc',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px',
          border: depth === 0 ? '1px solid #e9ecef' : 'none',
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: getAvatarColor(comment.name),
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{comment.name}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>â€¢ {formatDate(comment.date)}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '52px', marginBottom: '12px' }}>
            <p style={{ margin: 0, color: '#334155', lineHeight: '1.5' }}>{comment.comment}</p>
          </div>

          <div style={{ marginLeft: '52px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '20px',
                color: '#64748b',
                fontSize: '13px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Reply
            </button>

            {hasReplies && (
              <button
                onClick={() => toggleReplies(comment.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '20px',
                  color: '#3b82f6',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                {isExpanded ? 'â–¼' : 'â–¶'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>

          {showReplyForm && canNest && (
            <form onSubmit={handleLocalReply} style={{ marginLeft: '52px', marginTop: '12px' }}>
              <textarea
                value={localReplyText}
                onChange={(e) => setLocalReplyText(e.target.value)}
                placeholder={`Reply to ${comment.name}...`}
                rows={2}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  marginBottom: '8px'
                }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="submit"
                  disabled={submitting || !localReplyText.trim()}
                  style={{
                    padding: '6px 16px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    opacity: (submitting || !localReplyText.trim()) ? 0.5 : 1
                  }}
                >
                  {submitting ? 'Posting...' : 'Reply'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowReplyForm(false)}
                  style={{
                    padding: '6px 16px',
                    background: '#f1f5f9',
                    color: '#475569',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {hasReplies && isExpanded && (
          <div className="replies-container">
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="review-system" style={{
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '24px',
        color: 'white'
      }}>
        <div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>
            ðŸ’¬ Reviews
          </h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
            Share your experience with this template
          </p>
        </div>
      </div>

      {/* Write Review Button */}
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e9ecef',
        display: 'flex',
        justifyContent: 'flex-end',
        background: '#fafbfc'
      }}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: '10px 20px',
            background: showForm ? '#ef4444' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          {showForm ? 'âœ– Cancel' : 'âœï¸ Write a Review'}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{
          padding: '24px',
          background: '#f9fafb',
          borderBottom: '1px solid #e9ecef'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
              placeholder="Enter your name"
              maxLength={50}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
              Your Review *
            </label>
            <textarea
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={4}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none'
              }}
              placeholder="Share your experience with this template..."
              maxLength={500}
            />
          </div>

          {message && (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              borderRadius: '8px',
              background: message.type === 'success' ? '#d1fae5' : '#fee2e2',
              color: message.type === 'success' ? '#065f46' : '#991b1b',
              fontSize: '13px'
            }}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              background: '#10b981',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              opacity: submitting ? 0.5 : 1,
              transition: 'background 0.2s'
            }}
          >
            {submitting ? 'Submitting...' : 'Post Review'}
          </button>
        </form>
      )}

      {/* Reviews Section */}
      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>
            {stats.totalComments} {stats.totalComments === 1 ? 'Review' : 'Reviews'}
          </span>
        </div>

        {reviews.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6c757d'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>ðŸ’¬</div>
            <h3 style={{ margin: '0 0 8px 0' }}>No reviews yet</h3>
            <p style={{ margin: 0 }}>Be the first to share your experience!</p>
          </div>
        ) : (
          <div>
            {reviews.map(review => (
              <Comment key={review.id} comment={review} depth={0} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .review-system {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .comment-thread {
          transition: all 0.2s ease;
        }
        
        .comment-item {
          transition: all 0.2s ease;
        }
        
        .comment-item:hover {
          background: #f8fafc;
        }
        
        @media (max-width: 768px) {
          .comment-item {
            padding: 12px !important;
          }
          
          .comment-thread {
            margin-left: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}