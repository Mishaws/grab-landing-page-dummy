import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grab - Your Everything App',
  description: 'Grab is Southeast Asia\'s leading on-demand platform. Ride, food delivery, package delivery, payments - all in one app.',
  keywords: ['Grab', 'Ride', 'Food Delivery', 'Express', 'GrabPay', 'Southeast Asia'],
  openGraph: {
    title: 'Grab - Your Everything App',
    description: 'The most convenient way to travel, eat, send and pay in Southeast Asia',
    url: 'https://www.grab.com',
    siteName: 'Grab',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
