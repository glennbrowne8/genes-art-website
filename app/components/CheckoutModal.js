'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

function CheckoutModalContent({ artwork, settings, onClose }) {
  const [selectedShipping, setSelectedShipping] = useState('pickup')
  const [includeInsurance, setIncludeInsurance] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  // Construct Shipping Options from Settings
  // Use defaults if settings are missing (fallback safety)
  const shippingRates = settings?.shipping || {
    pickupLabel: '🏠 Pickup (Earlville, QLD)',
    localPrice: 10,
    localText: '🚗 Local Delivery (within 50km of Cairns)',
    standardPrice: 20,
    expressPrice: 35
  }

  const SHIPPING_OPTIONS = [
    {
      id: 'pickup',
      label: shippingRates.pickupLabel || '🏠 Pickup (Earlville, QLD)',
      description: 'Free pickup from our studio. Gene will contact you to arrange a time.',
      price: 0,
      priceLabel: 'FREE'
    },
    {
      id: 'local',
      label: shippingRates.localText || '🚗 Local Delivery',
      description: 'Gene will deliver to your door.',
      price: (shippingRates.localPrice || 10) * 100, // Convert to cents
      priceLabel: `$${(shippingRates.localPrice || 10).toFixed(2)}`
    },
    {
      id: 'standard',
      label: '📦 Standard Shipping',
      description: 'Australia Post (5-7 business days). Tracking included.',
      price: (shippingRates.standardPrice || 20) * 100,
      priceLabel: `$${(shippingRates.standardPrice || 20).toFixed(2)}`
    },
    {
      id: 'express',
      label: '📦 Express Shipping',
      description: 'Australia Post Express (2-3 business days). Priority handling.',
      price: (shippingRates.expressPrice || 35) * 100,
      priceLabel: `$${(shippingRates.expressPrice || 35).toFixed(2)}`
    }
  ]

  const selectedOption = SHIPPING_OPTIONS.find(opt => opt.id === selectedShipping)
  const artworkPrice = Math.round(artwork.price * 100) // Convert to cents
  const shippingPrice = selectedOption.price
  
  // Calculate insurance: 10% of artwork price OR $15 minimum
  const insurancePrice = includeInsurance 
    ? Math.max(Math.round(artworkPrice * 0.10), 1500) // $15 minimum
    : 0
  
  const totalPrice = artworkPrice + shippingPrice + insurancePrice

  const formatPrice = (cents) => {
    return `$${(cents / 100).toFixed(2)}`
  }

  const handleCheckout = async () => {
    setIsProcessing(true)
    setError(null)

    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
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
          includeInsurance: includeInsurance,
          insurancePrice: insurancePrice,
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

        {/* Shipping Insurance */}
        <div className="checkout-section">
          <div className="insurance-option-wrapper">
            <label className="insurance-option-label">
              <input
                type="checkbox"
                checked={includeInsurance}
                onChange={(e) => setIncludeInsurance(e.target.checked)}
                className="insurance-checkbox"
              />
              <div className="insurance-details">
                <div className="insurance-header">
                  <span className="insurance-title">📦 Add Shipping Insurance</span>
                  <span className="insurance-price">{formatPrice(Math.max(Math.round(artworkPrice * 0.10), 1500))}</span>
                </div>
                <p className="insurance-description">
                  Protect your artwork during transit. Covers loss or damage up to full value.
                  {selectedShipping === 'pickup' && ' (Not needed for pickup)'}
                </p>
              </div>
            </label>
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
            {includeInsurance && (
              <div className="price-row">
                <span>Shipping Insurance</span>
                <span>{formatPrice(insurancePrice)} AUD</span>
              </div>
            )}
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

export default function CheckoutModal({ artwork, settings, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [portalTarget, setPortalTarget] = useState(null)

  useEffect(() => {
    setMounted(true)
    // Ensure we have a valid DOM element to portal into
    setPortalTarget(document.body)
  }, [])

  // Only render portal on client side after mount and when we have a target
  if (!mounted || !portalTarget) return null

  // Render modal using portal to document.body
  return createPortal(
    <CheckoutModalContent artwork={artwork} settings={settings} onClose={onClose} />,
    portalTarget
  )
}