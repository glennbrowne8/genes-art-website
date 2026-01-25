'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'
import ContactModal from './ContactModal'

export default function ArtworkActions({ artwork, settings }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  // If artwork is sold/unavailable
  if (!artwork.available) {
    return (
      <div className="artwork-actions">
        <button className="btn-out-of-stock" disabled>
          Out of Stock
        </button>
      </div>
    )
  }

  // If artwork is available
  return (
    <>
      <div className="artwork-actions">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <button 
            className="btn-primary btn-available"
            style={{ width: '100%' }}
            onClick={() => setShowCheckout(true)}
          >
            Available
          </button>
          <button 
            className="btn-secondary"
            style={{ width: '100%' }}
            onClick={() => setShowContact(true)}
          >
            ✉️ Ask a Question
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal 
          artwork={artwork} 
          settings={settings}
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
