import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/photo-modal.css'

export const metadata: Metadata = {
  title: 'Airbnb Clone - Find unique stays and experiences',
  description: 'Discover and book unique accommodations around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}