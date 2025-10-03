import './globals.css'

export const metadata = {
  title: "Gene's Australian Heritage Art",
  description: 'Authentic Australian bush art - Corrugated iron paintings, drawings, and clay sculptures inspired by Ned Kelly and the outback',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
        {/* Hidden form for Netlify Forms detection */}
        <form 
          name="contact" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field" 
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable bfcache by adding unload listener
              window.addEventListener('unload', function() {});
              
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
