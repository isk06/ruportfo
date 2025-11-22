import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Iskander Daraev - Portfolio',
  description: 'Design and storytelling for consulting & corporate finance presentations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <header className="header">
            <div>
              <h1>Iskander Daraev</h1>
              <p className="lead">Consulting and Corporate Finance Presentations - Design & Storytelling</p>
            </div>
            <nav className="links" aria-label="social">
              <a href="http://www.linkedin.com/in/iskdaraev" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="http://www.behance.net/iskdaraev" target="_blank" rel="noreferrer">Behance</a>
            </nav>
          </header>

          {children}
        </main>
      </body>
    </html>
  )
}
