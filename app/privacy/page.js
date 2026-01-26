import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px', padding: '4rem 20px' }}>
        <h1 className="section-title" style={{ textAlign: 'left' }}>Privacy Policy</h1>
        
        <div style={{ lineHeight: '1.8', color: '#444' }}>
          <p><strong>Effective Date: January 26, 2026</strong></p>
          
          <p style={{ marginTop: '1.5rem' }}>
            At Gene's Australian Heritage Art, your privacy is important to us. This policy explains how we handle your personal information when you use our website.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>1. Information We Collect</h2>
          <p>
            When you make a purchase, we collect the information necessary to process your order, including:
          </p>
          <ul>
            <li>Name and contact information (Email and Phone)</li>
            <li>Shipping and billing address</li>
            <li>Payment details (processed securely via Stripe)</li>
          </ul>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>2. How We Use Your Information</h2>
          <p>
            We use your information strictly for:
          </p>
          <ul>
            <li>Processing and delivering your artwork</li>
            <li>Communicating with you regarding your order</li>
            <li>Providing customer support</li>
          </ul>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>3. Secure Payments</h2>
          <p>
            Payment processing is handled securely by <strong>Stripe</strong>. We do not store your credit card or financial information on our servers. Stripe uses industry-standard encryption to protect your data.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>4. Data Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties, except for trusted third parties who assist us in operating our website and conducting our business (such as Stripe for payments or shipping services), so long as those parties agree to keep this information confidential.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us via the contact form on our homepage.
          </p>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
