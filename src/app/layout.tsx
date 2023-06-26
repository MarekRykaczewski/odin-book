import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OdinBook',
  description: 'Social media app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar  />
        {children}
        </div>
      </body>
    </html>
  )
}
