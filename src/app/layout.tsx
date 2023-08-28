import './globals.css'
import { clsx } from 'clsx';
import { Inter } from 'next/font/google'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './layout.module.css';
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabian Horacio Veliz',
  description: 'Personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles.page)}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
