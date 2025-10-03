import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import ArtworkActions from './components/ArtworkActions'
import ContactForm from './components/ContactForm'

// Function to get site settings
function getSettings() {
  const settingsPath = path.join(process.cwd(), 'content/settings/general.json')
  const settingsData = fs.readFileSync(settingsPath, 'utf-8')
  return JSON.parse(settingsData)
}

// Function to get all artwork
function getArtwork() {
  const artworkDir = path.join(process.cwd(), 'content/artwork')
  
  if (!fs.existsSync(artworkDir)) {
    return []
  }
  
  const files = fs.readdirSync(artworkDir)
  
  const artwork = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(artworkDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      
      return {
        ...data,
        slug: filename.replace('.md', ''),
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  
  return artwork
}

export default function Home() {
  const settings = getSettings()
  const artwork = getArtwork()
  
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">{settings.title}</div>
            <nav className="nav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <h1>{settings.heroHeadline}</h1>
            <p>{settings.heroSubtext}</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            
            <div className="gallery-grid">
              {artwork.length === 0 ? (
                <p style={{ textAlign: 'center', gridColumn: '1 / -1', fontSize: '1.2rem', color: '#666' }}>
                  No artwork available yet. Login to the admin panel to add your first piece!
                </p>
              ) : (
                artwork.map((piece, index) => (
                  <article key={index} className="artwork-card">
                    <div className="artwork-image">
                      {piece.image ? (
                        <img 
                          src={piece.image} 
                          alt={piece.title}
                          loading="lazy"
                        />
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
                      <div className="artwork-details">
                        <span className="artwork-price">${piece.price} AUD</span>
                      </div>
                      <ArtworkActions artwork={piece} />
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About the Artist</h2>
            <div className="about-content">
              <div className="about-image">
                Artist Photo
              </div>
              <div className="about-text">
                {settings.about.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Artist:</strong> {settings.artistName}</p>
                <p><strong>Phone:</strong> {settings.phone}</p>
                <p><strong>Email:</strong> {settings.email}</p>
                <p><strong>Location:</strong> {settings.location}</p>
                
                <h3 style={{ marginTop: '2rem' }}>Commission Work</h3>
                <p>Custom pieces available! I love creating personalized artwork that captures your vision of Australian heritage. Contact me to discuss your ideas.</p>
                
                <h3 style={{ marginTop: '2rem' }}>Delivery & Shipping</h3>
                <p>Local delivery available. Interstate shipping can be arranged for all artwork. Contact me for a quote.</p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {settings.title}. All rights reserved. | Celebrating Australian culture through authentic artwork</p>
        </div>
      </footer>
    </>
  )
}
