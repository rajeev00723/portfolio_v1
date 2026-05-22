import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Rajeev Ranjan Sinha | Portfolio & Blog',
  description: 'Professional portfolio and personal blog showcasing projects, insights, and expertise.',
  openGraph: {
    title: 'Rajeev Ranjan Sinha | Portfolio & Blog',
    description: 'Professional portfolio and personal blog',
    url: 'https://rajeevranjansinha.com',
    siteName: 'Rajeev Ranjan Sinha',
    images: [
      {
        url: 'https://rajeevranjansinha.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  )
}
