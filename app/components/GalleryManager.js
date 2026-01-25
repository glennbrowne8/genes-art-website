'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArtworkActions from './ArtworkActions'
import ImageZoom from './ImageZoom'

export default function GalleryManager({ artwork, categories, pageContent, settings }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const isHolidayMode = settings.holidayMode?.enabled || false

  // Filter artwork based on selection
  const filteredArtwork = selectedCategory === 'All' 
    ? artwork 
    : artwork.filter(piece => piece.category === selectedCategory)

  // Get the display image for a category (first available artwork or just first artwork)
  const getCategoryCover = (categoryName) => {
    const categoryPieces = artwork.filter(p => p.category === categoryName)
    // Try to find an available one first, otherwise just the first one
    return categoryPieces.find(p => p.available) || categoryPieces[0]
  }

  // Handle Category Click from Bubble or Card
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName)
    // Optional: Scroll to top of gallery
    const gallerySection = document.getElementById('gallery')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="gallery-manager">
      {/* Category Bubbles Navigation */}
      <div className="category-bubbles-container">
        <div className="category-bubbles">
          <button 
            className={`bubble ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('All')}
          >
            All Categories
          </button>
          {categories.map((cat, index) => (
            <button 
              key={index}
              className={`bubble ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      {selectedCategory === 'All' ? (
        /* VIEW 1: CATEGORY CARDS (The "Example" view) */
        <div className="gallery-grid">
          {categories.map((cat, index) => {
            const coverArt = getCategoryCover(cat.name)
            
            // Skip categories with no artwork? Or show placeholder?
            // Let's show them but with a placeholder if needed
            
            return (
              <div 
                key={index} 
                className="artwork-card category-card"
                onClick={() => handleCategorySelect(cat.name)}
                style={{ cursor: 'pointer' }}
              >
                <div className="artwork-image">
                  {coverArt && coverArt.image ? (
                    <img 
                      src={coverArt.image} 
                      alt={cat.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="placeholder-image">No images yet</div>
                  )}
                </div>
                <div className="artwork-content" style={{ textAlign: 'center' }}>
                  <h3 className="artwork-title">{cat.name}</h3>
                  <p className="artwork-description" style={{ fontSize: '0.9rem' }}>
                    {cat.description || `Browse our collection of ${cat.name}`}
                  </p>
                  <button className="btn-secondary" style={{ marginTop: '1rem', width: 'auto' }}>
                    View Collection
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        /* VIEW 2: ARTWORK GRID (Specific Category) */
        <div>
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#8B4513' }}>
              Viewing: {selectedCategory}
            </h3>
            <span style={{ color: '#666' }}>({filteredArtwork.length} items)</span>
          </div>

          <div className="gallery-grid">
            {filteredArtwork.length === 0 ? (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', fontSize: '1.2rem', color: '#666' }}>
                No artwork found in this category.
              </p>
            ) : (
              filteredArtwork.map((piece, index) => (
                <article key={index} className="artwork-card">
                  <div className="artwork-image">
                    {piece.image ? (
                      <ImageZoom src={piece.image} alt={piece.title} />
                    ) : (
                      <div className="placeholder-image">No Image</div>
                    )}
                  </div>
                  <div className="artwork-content">
                    <div className="artwork-category">{piece.category}</div>
                    <h3 className="artwork-title">{piece.title}</h3>
                    <p className="artwork-description">{piece.description}</p>
                    {piece.dimensions && (
                      <p className="artwork-dimensions">Dimensions: {piece.dimensions}</p>
                    )}
                    {piece.weight && (
                      <p className="artwork-weight">Weight: {piece.weight} kg</p>
                    )}
                    <div className="artwork-details">
                      <span className="artwork-price">${piece.price} AUD</span>
                    </div>
                    
                    {!isHolidayMode ? (
                      <ArtworkActions artwork={piece} settings={settings} />
                    ) : (
                      piece.available && (
                        <div style={{
                          padding: '12px',
                          backgroundColor: '#FFF4E6',
                          border: '1px solid #F4A460',
                          borderRadius: '8px',
                          textAlign: 'center',
                          marginTop: '12px'
                        }}>
                          <p style={{ fontSize: '14px', color: '#8B4513', fontStyle: 'italic', margin: 0 }}>
                            💬 Contact me when I return to purchase
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
