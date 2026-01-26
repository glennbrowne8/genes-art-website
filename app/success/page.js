import Link from 'next/link'
import fs from 'fs'
import path from 'path'

function getSettings() {
  try {
    const settingsPath = path.join(process.cwd(), 'content/settings/general.json')
    const settingsData = fs.readFileSync(settingsPath, 'utf-8')
    return JSON.parse(settingsData)
  } catch (error) {
    return {
      email: 'gene.pratt@hotmail.com',
      phone: '+61 413 863 485'
    }
  }
}

export default function SuccessPage() {
  const settings = getSettings()

  return (
    <div className="success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h1>Payment Successful!</h1>
          <p className="success-message">
            Thank you for your purchase! Your order has been confirmed.
          </p>
          
          <div className="success-details">
            <h2>What Happens Next?</h2>
            <ul>
              <li>
                📧 You'll receive a confirmation email with your order details and receipt
              </li>
              <li>
                📞 Gene will contact you within 24 hours to:
                <ul>
                  <li>Confirm your order details</li>
                  <li>Arrange delivery or pickup time</li>
                  <li>Answer any questions you may have</li>
                </ul>
              </li>
              <li>
                🎨 Your artwork will be carefully packaged and ready for delivery
              </li>
            </ul>
          </div>

          <div className="success-contact">
            <h3>Questions About Your Order?</h3>
            <p>
              Feel free to contact Gene directly:
            </p>
            <p>
              <strong>Email:</strong> {settings.email}<br />
              <strong>Phone:</strong> {settings.phone}
            </p>
          </div>

          <div className="success-actions">
            <Link href="/" className="btn-primary">
              Return to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
