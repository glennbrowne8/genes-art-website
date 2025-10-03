'use client'

import { useEffect } from 'react'

export default function StripeReturnHandler() {
  useEffect(() => {
    // Force reload on any navigation back to prevent bfcache issues
    const forceReload = (event) => {
      if (event.persisted || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
        window.location.reload()
      }
    }

    // Multiple event listeners to catch all cases
    window.addEventListener('pageshow', forceReload)
    window.addEventListener('pagehide', () => {
      // Setting this can help prevent bfcache
    })
    
    // Also check on mount
    if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
      window.location.reload()
    }

    return () => {
      window.removeEventListener('pageshow', forceReload)
    }
  }, [])

  return null
}
