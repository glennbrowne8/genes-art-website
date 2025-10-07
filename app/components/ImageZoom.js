'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ImageZoom({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }
      document.addEventListener('keydown', handleEsc)
      
      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleEsc)
      }
    }
  }, [isOpen])

  const handleOpen = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
        title="Click to zoom"
      />

      {mounted && isOpen && createPortal(
        <div className="zoom-overlay" onMouseDown={e => e.stopPropagation()}>
          <div className="zoom-image-wrapper">
            <button 
              className="zoom-close" 
              onClick={handleClose}
              title="Close (or press ESC)"
            >
              ×
            </button>
            <img 
              src={src} 
              alt={alt} 
              className="zoom-image"
              onMouseDown={e => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
