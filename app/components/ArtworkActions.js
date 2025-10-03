'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

export default function ArtworkActions({ artwork }) {
  const [showCheckout, setShowCheckout] = useState(false)

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
        <button 
          className="btn-primary btn-available"
          onClick={() => setShowCheckout(true)}
        >
          ✅ Available
        </button>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal 
          artwork={artwork} 
          onClose={() => setShowCheckout(false)} 
        />
      )}
    </>
  )
}
