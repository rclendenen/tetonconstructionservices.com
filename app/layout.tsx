import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Teton Construction Services | DFW General Contractor',
    template: '%s | Teton Construction Services'
  },
  description: 'A+ BBB Rated general contractor serving the DFW area since 2005. Specializing in residential and commercial construction with flexible payment options and referral-only service.',
  keywords: ['construction', 'general contractor', 'DFW', 'Mansfield TX', 'residential construction', 'commercial construction', 'home renovation', 'building contractor'],
  authors: [{ name: 'Teton Construction Services' }],
  creator: 'Teton Construction Services',
  publisher: 'Teton Construction Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tetonconstructionservices.com'),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Teton Construction Services | DFW General Contractor',
    description: 'A+ BBB Rated general contractor serving the DFW area since 2005.',
    url: 'https://tetonconstructionservices.com',
    siteName: 'Teton Construction Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Teton Construction Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teton Construction Services | DFW General Contractor',
    description: 'A+ BBB Rated general contractor serving the DFW area since 2005.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

