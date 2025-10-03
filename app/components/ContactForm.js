'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form">
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
        Send a Message
      </h3>

      {submitStatus === 'success' && (
        <div className="form-message success">
          <strong>Thank you!</strong> Your message has been sent successfully. 
          I'll get back to you soon!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-message error">
          <strong>Oops!</strong> Something went wrong. Please try again or 
          contact me directly via email or phone.
        </div>
      )}

      <form 
        name="contact" 
        method="POST" 
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formState.name}
            onChange={handleChange}
            required 
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formState.email}
            onChange={handleChange}
            required 
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formState.phone}
            onChange={handleChange}
            placeholder="Optional - for faster response"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formState.message}
            onChange={handleChange}
            required
            placeholder="Tell me about the artwork you're interested in, or ask any questions..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
