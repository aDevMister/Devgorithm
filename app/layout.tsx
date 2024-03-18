import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import '../styles/globals.css'
// import { Footer, NavBar } from '@/components/layouts'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devgorithm',
  description: 'A dynamic software platform seamlessly integrating advanced algorithms to optimize and streamline development processes, enhancing efficiency and innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  )
}
