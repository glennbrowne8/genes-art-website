'use client'

import { useEffect } from 'react'

export default function StripeReturnHandler() {
  useEffect(() => {
    // Disable browser back-forward cache to prevent frozen state
    // This ensures page always reloads fresh when navigating back
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was restored from bfcache - force reload
        window.location.reload()
      }
    })
  }, [])

  return null
}
