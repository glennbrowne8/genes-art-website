'use client'

import { useState, useEffect } from 'react'

/**
 * A component to protect contact information from simple bots and scrapers.
 * It renders a "Reveal" button/link that, when clicked, shows the actual
 * contact information and enables the click-to-call or click-to-email functionality.
 */
export default function ContactShield({ value, type, label }) {
  const [revealed, setRevealed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Use useEffect to ensure we only run this on the client
  // and avoid any hydration mismatch issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span>{label}: [Protected]</span>
  }

  const handleReveal = (e) => {
    e.preventDefault()
    setRevealed(true)
  }

  if (!revealed) {
    return (
      <span className="contact-shield">
        <strong>{label}:</strong>{' '}
        <button 
          onClick={handleReveal}
          className="reveal-button"
          title={`Click to reveal ${label.toLowerCase()}`}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-primary)',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit',
            fontWeight: 'normal'
          }}
        >
          [Click to show {label.toLowerCase()}]
        </button>
      </span>
    )
  }

  // Once revealed, show the actual link
  const href = type === 'email' 
    ? `mailto:${value}` 
    : `tel:${value.replace(/\s/g, '')}`

  return (
    <span className="contact-shield">
      <strong>{label}:</strong>{' '}
      <a href={href} className="revealed-contact">
        {value}
      </a>
    </span>
  )
}
