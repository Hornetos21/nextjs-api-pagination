import './globals.css'
import { Inter } from 'next/font/google'
import HeaderComp from '../components/Header/Header.comp'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spaceflight News',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComp />
        <main className="container">{children}</main>
        {/*<FooterComp />*/}
      </body>
    </html>
  )
}
