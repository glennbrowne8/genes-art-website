'use client'

import { useEffect, useRef } from 'react'

/**
 * A client-side component that renders policy content and 
 * protects contact info from bots.
 */
export default function ClientPolicyContent({ content }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return

    // Find and replace email and phone text with interactive reveal links
    // This is a simple but effective protection for static markdown content
    
    // 1. Emails
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi
    
    // 2. Australian Phone (matches 04XX XXX XXX and variants)
    const phoneRegex = /(04\d{2}\s?\d{3}\s?\d{3})/g

    const container = contentRef.current
    
    // We'll iterate through all text nodes to find matches
    // This avoids breaking HTML structures
    const walk = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false)
    let node
    const replacements = []

    while(node = walk.nextNode()) {
      if (emailRegex.test(node.nodeValue) || phoneRegex.test(node.nodeValue)) {
        replacements.push(node)
      }
    }

    replacements.forEach(textNode => {
      const span = document.createElement('span')
      let html = textNode.nodeValue
      
      // Replace emails
      html = html.replace(emailRegex, (match) => {
        return `<span class="reveal-link" data-type="email" data-value="${match}" style="color: #8B4513; text-decoration: underline; cursor: pointer;">[Click to show email]</span>`
      })

      // Replace phones
      html = html.replace(phoneRegex, (match) => {
        return `<span class="reveal-link" data-type="phone" data-value="${match}" style="color: #8B4513; text-decoration: underline; cursor: pointer;">[Click to show phone]</span>`
      })

      span.innerHTML = html
      textNode.parentNode.replaceChild(span, textNode)
    })

    // Add click listeners to reveal links
    container.addEventListener('click', (e) => {
      const target = e.target
      if (target.classList.contains('reveal-link')) {
        const type = target.dataset.type
        const value = target.dataset.value
        const href = type === 'email' ? `mailto:${value}` : `tel:${value.replace(/\s/g, '')}`
        
        target.outerHTML = `<a href="${href}" style="color: #8B4513; text-decoration: underline;">${value}</a>`
      }
    })
  }, [content])

  return (
    <div 
      ref={contentRef}
      className="policy-text"
      dangerouslySetInnerHTML={{ __html: content }}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '1.8',
        fontSize: '1.1rem'
      }}
    />
  )
}
