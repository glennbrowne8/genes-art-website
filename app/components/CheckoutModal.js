'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

const SHIPPING_OPTIONS = [
  {
    id: 'pickup',
    label: '🏠 Pickup (Earlville, QLD)',
    description: 'Free pickup from our studio. Gene will contact you to arrange a time.',
    price: 0,
    priceLabel: 'FREE'
  },
  {
    id: 'local',
    label: '🚗 Local Delivery',
    description: 'Within 50km of Cairns. Gene will deliver to your door.',
    price: 1000, // $10.00 in cents
    priceLabel: '$10.00'
  },
  {
    id: 'standard',
    label: '📦 Standard Shipping',
    description: 'Australia Post (5-7 business days). Tracking included.',
    price: 2000, // $20.00 in cents
    priceLabel: '$20.00'
  },
  {
    id: 'express',
    label: '📦 Express Shipping',
    description: 'Australia Post Express (2-3 business days). Priority handling.',
    price: 3500, // $35.00 in cents
    priceLabel: '$35.00'
  }
]

function CheckoutModalContent({ artwork, onClose }) {
  const [selectedShipping, setSelectedShipping] = useState('pickup')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  const selectedOption = SHIPPING_OPTIONS.find(opt => opt.id === selectedShipping)
  const artworkPrice = Math.round(artwork.price * 100) // Convert to cents
  const shippingPrice = selectedOption.price
  const totalPrice = artworkPrice + shippingPrice

  const formatPrice = (cents) => {
    return `$${(cents / 100).toFixed(2)}`
  }

  const handleCheckout = async () => {
    setIsProcessing(true)
    setError(null)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artworkId: artwork.slug,
          artworkTitle: artwork.title,
          artworkPrice: artworkPrice,
          artworkImage: artwork.image,
          shippingOption: selectedShipping,
          shippingPrice: shippingPrice,
          shippingLabel: selectedOption.label,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setIsProcessing(false)
        return
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Something went wrong. Please try again.')
      setIsProcessing(false)
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Reset processing state when user returns from Stripe
  useEffect(() => {
    // When user navigates back, reset the processing state
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsProcessing(false)
        setError(null)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('pageshow', () => {
      setIsProcessing(false)
      setError(null)
    })

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        
        <h2 className="modal-title">Complete Your Purchase</h2>

        {/* Artwork Summary */}
        <div className="checkout-artwork-summary">
          {artwork.image && (
            <div className="checkout-artwork-image">
              <img src={artwork.image} alt={artwork.title} />
            </div>
          )}
          <div className="checkout-artwork-details">
            <h3>{artwork.title}</h3>
            <p className="artwork-category">{artwork.category}</p>
            {artwork.dimensions && (
              <p className="artwork-dimensions">{artwork.dimensions}</p>
            )}
            <p className="artwork-price-large">{formatPrice(artworkPrice)} AUD</p>
          </div>
        </div>

        {/* Shipping Options */}
        <div className="checkout-section">
          <h3 className="checkout-section-title">Select Delivery Method</h3>
          <div className="shipping-options">
            {SHIPPING_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`shipping-option ${selectedShipping === option.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="shipping"
                  value={option.id}
                  checked={selectedShipping === option.id}
                  onChange={(e) => setSelectedShipping(e.target.value)}
                />
                <div className="shipping-option-content">
                  <div className="shipping-option-header">
                    <span className="shipping-option-label">{option.label}</span>
                    <span className="shipping-option-price">{option.priceLabel}</span>
                  </div>
                  <p className="shipping-option-description">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="checkout-section">
          <div className="price-breakdown">
            <div className="price-row">
              <span>Artwork</span>
              <span>{formatPrice(artworkPrice)} AUD</span>
            </div>
            <div className="price-row">
              <span>Delivery</span>
              <span>{formatPrice(shippingPrice)} AUD</span>
            </div>
            <div className="price-row price-total">
              <span>Total</span>
              <span>{formatPrice(totalPrice)} AUD</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="checkout-error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="checkout-actions">
          <button
            className="btn-secondary"
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            className="btn-primary btn-checkout"
            onClick={handleCheckout}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="checkout-trust">
          <p>🔒 Secure checkout powered by Stripe</p>
          <p className="checkout-trust-note">
            You'll be redirected to Stripe's secure payment page
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutModal({ artwork, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render portal on client side after mount
  if (!mounted) return null

  // Render modal using portal to document.body
  return createPortal(
    <CheckoutModalContent artwork={artwork} onClose={onClose} />,
    document.body
  )
}
