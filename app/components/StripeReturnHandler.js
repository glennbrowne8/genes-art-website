'use client'

import { useEffect } from 'react'

export default function StripeReturnHandler() {
  useEffect(() => {
    // Check if we just came from a back/forward navigation
    const navigationType = performance.getEntriesByType('navigation')[0]?.type
    
    // Only reload if:
    // 1. It's a back_forward navigation AND
    // 2. We haven't already reloaded (check sessionStorage flag)
    if (navigationType === 'back_forward') {
      const hasReloaded = sessionStorage.getItem('bfcache-reloaded')
      
      if (!hasReloaded) {
        // Set flag before reloading to prevent infinite loop
        sessionStorage.setItem('bfcache-reloaded', 'true')
        window.location.reload()
      } else {
        // Clear the flag after successful hydration
        sessionStorage.removeItem('bfcache-reloaded')
      }
    }

    // Also handle pageshow event for bfcache restoration
    const handlePageShow = (event) => {
      if (event.persisted) {
        const hasReloaded = sessionStorage.getItem('bfcache-reloaded')
        if (!hasReloaded) {
          sessionStorage.setItem('bfcache-reloaded', 'true')
          window.location.reload()
        }
      }
    }

    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return null
}
