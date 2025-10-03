import Link from 'next/link'

export default function SuccessPage() {
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
              <strong>Email:</strong> gene@example.com<br />
              <strong>Phone:</strong> (07) XXXX XXXX
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
