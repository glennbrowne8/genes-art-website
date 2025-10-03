'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

function ContactModalContent({ artwork, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi, I'm interested in "${artwork.title}". `
  })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // For now, this will need to be connected to Netlify Forms or another service
    // Placeholder functionality - you'll connect this to your email service
    
    try {
      // Simulate form submission
      console.log('Form data:', {
        ...formData,
        artwork: artwork.title,
        price: artwork.price
      })
      
      // TODO: Connect to Netlify Forms or Formspree
      // For Netlify Forms, you'll need to add form to HTML with data-netlify="true"
      
      setStatus('success')
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
      }, 2000)
      
    } catch (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        
        <h2 className="modal-title">Inquire About Artwork</h2>
        
        <div className="modal-artwork-info">
          <h3>{artwork.title}</h3>
          <p className="modal-artwork-price">${artwork.price} AUD</p>
          {artwork.dimensions && (
            <p className="modal-artwork-dimensions">{artwork.dimensions}</p>
          )}
        </div>

        {status === 'success' ? (
          <div className="form-success">
            <p>✅ Thank you! Your inquiry has been sent.</p>
            <p>Gene will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-modal-form">
            <div className="form-group">
              <label htmlFor="modal-name">Your Name *</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-email">Email Address *</label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-message">Message *</label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <p className="form-error">
                ❌ Sorry, there was an error. Please try emailing directly or call Gene.
              </p>
            )}

            <div className="modal-note">
              <p><strong>Note:</strong> This contact form needs to be connected to an email service (Netlify Forms or Formspree) to work. For now, please call or email Gene directly.</p>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function ContactModal({ artwork, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render portal on client side after mount
  if (!mounted) return null

  // Render modal using portal to document.body
  return createPortal(
    <ContactModalContent artwork={artwork} onClose={onClose} />,
    document.body
  )
}
