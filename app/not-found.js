import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>G'day! Looks like you've wandered off the track.</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist. It might have been moved, or perhaps it was just a bush mirage.
        </p>
        <Link href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Back to the Gallery
        </Link>
      </div>
    </div>
  )
}
