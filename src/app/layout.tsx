import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'

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
          <div className='navbarContainer'>
            <Navbar  />
          </div>
          <div className='sidebarContainer'>
            <Sidebar />
          </div>
          <div className='childrenContainer'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
