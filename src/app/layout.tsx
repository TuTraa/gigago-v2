import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Gigago eSIM | Local and International eSIM plans for travellers',
  description:
    'Having online international travel eSIM and save roaming. No SIM cards switching. Get unlimited high-speed 4G & 5G mobile data in 200 countries with Gigago eSIM.',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Gigago eSIM | Local and International eSIM plans for travellers',
    description:
      'Having online international travel eSIM and save roaming. No SIM cards switching. Get unlimited high-speed 4G & 5G mobile data in 200 countries with Gigago eSIM.',
    url: 'https://gigago.com/',
    siteName: 'Gigago',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gigago eSIM | Local and International eSIM plans for travellers',
    description:
      'Having online international travel eSIM and save roaming. No SIM cards switching. Get unlimited high-speed 4G & 5G mobile data in 200 countries with Gigago eSIM.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
