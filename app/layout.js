import './globals.css'

export const metadata = {
  title: "Gene's Australian Heritage Art",
  description: 'Authentic Australian bush art - Corrugated iron paintings, drawings, and clay sculptures inspired by Ned Kelly and the outback',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
