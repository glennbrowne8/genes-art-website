'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'
import ContactModal from './ContactModal'

export default function ArtworkActions({ artwork }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [showContact, setShowContact] = useState(false)

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
