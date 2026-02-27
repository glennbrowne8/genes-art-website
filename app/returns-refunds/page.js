import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import ClientPolicyContent from '../components/ClientPolicyContent'

// Function to get site settings
function getSettings() {
  const settingsPath = path.join(process.cwd(), 'content/settings/general.json')
  const settingsData = fs.readFileSync(settingsPath, 'utf-8')
  return JSON.parse(settingsData)
}

// Function to get return policy content
function getPolicyContent() {
  const policyPath = path.join(process.cwd(), 'content/pages/returns-refunds.md')
  
  if (!fs.existsSync(policyPath)) {
    return {
      title: 'Returns & Refunds',
      content: '<p>Return policy not found.</p>'
    }
  }
  
  const fileContent = fs.readFileSync(policyPath, 'utf-8')
  const { data, content } = matter(fileContent)
  const htmlContent = marked(content)
  
  return {
    title: data.title || 'Returns & Refunds',
    content: htmlContent
  }
}

export const metadata = {
  title: 'Returns & Refunds - Gene\'s Australian Art',
  description: 'Our return and refund policy for handmade Australian artwork.'
}

export default function ReturnsPage() {
  const settings = getSettings()
  const policy = getPolicyContent()

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">{settings.title}</div>
            <nav className="nav">
              <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#gallery">Gallery</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/returns-refunds" className="active">Returns Policy</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Policy Content */}
        <section className="section">
          <div className="container">
            <div className="policy-content">
              <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                {policy.title}
              </h1>
              
              {/* Use client-side protected content component */}
              <ClientPolicyContent content={policy.content} />
              
              {/* Back to Home Button */}
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a 
                  href="/#gallery" 
                  className="btn-primary"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none'
                  }}
                >
                  Back to Gallery
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {settings.title}. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Celebrating Australian culture through authentic artwork
          </p>
        </div>
      </footer>
    </>
  )
}
