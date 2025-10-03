'use client'

import { useState, useEffect } from 'react'
import CheckoutModal from './CheckoutModal'
import ContactModal from './ContactModal'

export default function ArtworkActions({ artwork }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  // Close modals when user navigates back from external page (like Stripe)
  useEffect(() => {
    const handlePageShow = (event) => {
      // If page was restored from cache (user hit back button)
      if (event.persisted) {
        setShowCheckout(false)
        setShowContact(false)
      }
    }

    const handleVisibilityChange = () => {
      // Reset modals when page becomes visible again
      if (document.visibilityState === 'visible') {
        setShowCheckout(false)
        setShowContact(false)
      }
    }

    window.addEventListener('pageshow', handlePageShow)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // If artwork is sold/unavailable
  if (!artwork.available) {
    return (
      <div className="artwork-actions">
        <button className="btn-out-of-stock" disabled>
          Out of Stock
        </button>
        <button 
          className="btn-secondary btn-inquire"
          onClick={() => setShowContact(true)}
        >
          ✉️ Ask a Question
        </button>
      </div>
    )
  }

  // If artwork is available
  return (
    <>
      <div className="artwork-actions">
        <button 
          className="btn-primary btn-available"
          onClick={() => setShowCheckout(true)}
        >
          ✅ Available
        </button>
        <button 
          className="btn-secondary btn-inquire"
          onClick={() => setShowContact(true)}
        >
          ✉️ Ask a Question
        </button>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal 
          artwork={artwork} 
          onClose={() => setShowCheckout(false)} 
        />
      )}

      {/* Contact Modal */}
      {showContact && (
        <ContactModal 
          artwork={artwork} 
          onClose={() => setShowContact(false)} 
        />
      )}
    </>
  )
}
