import React from 'react';
// components/ReviewSystem.js
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function ReviewSystem({ templateId = 'all' }) {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedReplies, setExpandedReplies] = useState(new Set());

  useEffect(() => {
    fetchReviews();
  }, [templateId]);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/reviews?templateId=${templateId}&limit=50`);
      const data = await response.json();
      const structuredComments = structureComments(Array.isArray(data) ? data : []);
      setReviews(structuredComments);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const structureComments = (comments) => {
    if (!Array.isArray(comments)) return [];
    
    const commentMap = new Map();
    const roots = [];

    comments.forEach(comment => {
      if (comment && comment.id) {
        commentMap.set(comment.id, {
          ...comment,
          replies: [],
          createdAt: comment.date ? new Date(comment.date).getTime() : Date.now()
        });
      }
    });

    comments.forEach(comment => {
      if (!comment || !comment.id) return;
      
      const node = commentMap.get(comment.id);
      if (node) {
        if (comment.parentId && commentMap.has(comment.parentId)) {
          commentMap.get(comment.parentId).replies.push(node);
        } else {
          roots.push(node);
        }
      }
    });

    return roots.sort((a, b) => b.createdAt - a.createdAt);
  };

  const handleSubmit = async (e, parentId = null, replyText = null) => {
    e.preventDefault();
    
    const name = parentId ? (formData.name || 'Anonymous') : formData.name;
    const comment = parentId ? replyText : formData.comment;
    
    // Validation
    if (!comment || !comment.trim()) {
      setMessage({ type: 'error', text: 'Please enter your review' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    
    if (!parentId && (!name || !name.trim())) {
      setMessage({ type: 'error', text: 'Please enter your name' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    
    setSubmitting(true);
    setMessage(null);

    const submitData = {
      name: name?.trim() || 'Anonymous',
      comment: comment.trim(),
      templateId,
      parentId: parentId || null,
      rating: 0
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
        setShowForm(false);
        fetchReviews();
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
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
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Recently';
    
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

  const getAvatarColor = (name) => {
    const colors = ['#667eea', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec489a', '#06b6d4'];
    const index = (name?.length || 0) % colors.length;
    return colors[index];
  };

  const Comment = ({ comment, depth = 0 }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyText, setReplyText] = useState('');
    const maxDepth = 3;

    if (!comment) return null;

    const handleLocalReply = async (e) => {
      e.preventDefault();
      if (!replyText.trim()) return;
      await handleSubmit(e, comment.id, replyText);
      setReplyText('');
      setShowReplyForm(false);
    };

    const hasReplies = comment.replies && comment.replies.length > 0;
    const isExpanded = expandedReplies.has(comment.id);
    const canNest = depth < maxDepth;

    return (
      <div style={{ marginLeft: depth > 0 ? '48px' : '0', marginTop: depth > 0 ? '12px' : '0' }}>
        <div style={{
          background: depth === 0 ? 'white' : '#fafbfc',
          borderRadius: '12px',
          padding: '16px',
          border: depth === 0 ? '1px solid #e9ecef' : 'none'
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
                {(comment.name?.charAt(0) || 'A').toUpperCase()}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{comment.name || 'Anonymous'}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>• {formatDate(comment.date)}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '52px', marginBottom: '12px' }}>
            <p style={{ margin: 0, color: '#334155', lineHeight: '1.5' }}>{comment.comment || ''}</p>
          </div>

          <div style={{ marginLeft: '52px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            {canNest && (
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
                  fontSize: '13px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Reply
              </button>
            )}

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
                {isExpanded ? '▼' : '▶'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>

          {showReplyForm && canNest && (
            <form onSubmit={handleLocalReply} style={{ marginLeft: '52px', marginTop: '12px' }}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
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
                  disabled={submitting || !replyText.trim()}
                  style={{
                    padding: '6px 16px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    opacity: (submitting || !replyText.trim()) ? 0.5 : 1
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
          <div>
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <LoadingSpinner size="md" text="Loading reviews..." />
      </div>
    );
  }

  return (
    <div style={{
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
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>
          Reviews
        </h2>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
          Share your experience with this template
        </p>
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
            gap: '8px'
          }}
        >
          {showForm ? '✕ Cancel' : '✍ Write a Review'}
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
              opacity: submitting ? 0.5 : 1
            }}
          >
            {submitting ? 'Submitting...' : 'Post Review'}
          </button>
        </form>
      )}

      {/* Reviews Section */}
      <div style={{ padding: '24px' }}>
        {reviews.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6c757d'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>💬</div>
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
    </div>
  );
}