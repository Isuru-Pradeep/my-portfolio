import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isuru Pradeep',
  description: 'Isuru Pradeep - AI Engineer | Full Stack Developer',
  keywords: ['AI Engineer', 'Full Stack Developer', 'Software Engineer'],
  authors: [{ name: 'Isuru Pradeep' }],
  openGraph: {
    title: 'Isuru Pradeep',
    description: 'Isuru Pradeep - AI Engineer | Full Stack Developer',
    url: 'https://isurupradeep.me',
    siteName: 'Isuru Pradeep',
    images: [
      {
        url: 'https://isurupradeep.me/images/isuru.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}