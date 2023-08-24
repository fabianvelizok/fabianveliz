import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabian Veliz',
  description: 'Personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main style={{ background: 'gray'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
