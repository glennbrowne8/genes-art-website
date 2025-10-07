import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import ArtworkActions from './components/ArtworkActions'
import ContactForm from './components/ContactForm'
import ImageZoom from './components/ImageZoom'

// Function to get site settings
function getSettings() {
  const settingsPath = path.join(process.cwd(), 'content/settings/general.json')
  const settingsData = fs.readFileSync(settingsPath, 'utf-8')
  return JSON.parse(settingsData)
}

// Function to get page content
function getPageContent() {
  const contentPath = path.join(process.cwd(), 'content/settings/page-content.json')
  try {
    const contentData = fs.readFileSync(contentPath, 'utf-8')
    return JSON.parse(contentData)
  } catch (error) {
    // Return defaults if file doesn't exist yet
    return {
      contact: {
        title: "Get In Touch",
        commissionHeading: "Commission Work",
        commissionText: "Custom pieces available! I love creating personalized artwork that captures your vision of Australian heritage. Contact me to discuss your ideas.",
        shippingHeading: "Delivery & Shipping",
        shippingText: "Local delivery available. Interstate shipping can be arranged for all artwork. Contact me for a quote."
      },
      gallery: {
        title: "Gallery",
        emptyMessage: "No artwork available yet. Login to the admin panel to add your first piece!"
      },
      about: {
        title: "About the Artist"
      },
      footer: {
        text: "All rights reserved. | Celebrating Australian culture through authentic artwork"
      }
    }
  }
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
  const pageContent = getPageContent()
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
            <h2 className="section-title">{pageContent.gallery.title}</h2>
            
            <div className="gallery-grid">
              {artwork.length === 0 ? (
                <p style={{ textAlign: 'center', gridColumn: '1 / -1', fontSize: '1.2rem', color: '#666' }}>
                  {pageContent.gallery.emptyMessage}
                </p>
              ) : (
                artwork.map((piece, index) => (
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
            <h2 className="section-title">{pageContent.about.title}</h2>
            <div className="about-content">
              <div className="about-image">
                {settings.artistPhoto ? (
                  <img 
                    src={settings.artistPhoto} 
                    alt={settings.artistName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  'Artist Photo'
                )}
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
            <h2 className="section-title">{pageContent.contact.title}</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Artist:</strong> {settings.artistName}</p>
                <p><strong>Phone:</strong> {settings.phone}</p>
                <p><strong>Email:</strong> {settings.email}</p>
                <p><strong>Location:</strong> {settings.location}</p>
                
                <h3 style={{ marginTop: '2rem' }}>{pageContent.contact.commissionHeading}</h3>
                <p>{pageContent.contact.commissionText}</p>
                
                <h3 style={{ marginTop: '2rem' }}>{pageContent.contact.shippingHeading}</h3>
                <p>{pageContent.contact.shippingText}</p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {settings.title}. {pageContent.footer.text}</p>
        </div>
      </footer>
    </>
  )
}
