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
      </div>
    )
  }

  // If artwork is available
  return (
    <>
      <div className="artwork-actions">
        {artwork.stripeLink ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <a 
              href={artwork.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-available"
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none',
                backgroundColor: '#D4AF37', // Gold color for Buy Now
                borderColor: '#B8860B',
                width: '100%'
              }}
            >
              💳 Buy Now
            </a>
            <button 
              className="btn-secondary"
              style={{ width: '100%' }}
              onClick={() => setShowContact(true)}
            >
              ✉️ Ask a Question
            </button>
          </div>
        ) : (
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
        )}
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
