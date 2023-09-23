'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './state/auth'
import NoSsr from './components/noSsr'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning={true} className={inter.className}>
          <main style={ {height: '100vh', width: '100vw' }}>
            <NoSsr>{children}</NoSsr>
          </main>
        </body>
      </AuthProvider>
    </html>
  )
}
