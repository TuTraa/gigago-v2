import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/layout/top-bar'
import NavigationBar from '@/components/layout/navigation-bar'
import { INavItem } from '@/types'
import OnTop from '@/components/on-top'
// import localFont from 'next/font/local'
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
const navigationItems: INavItem[] = [
  {
    text: 'Home',
    href: '/',
    isSubTabMenu: false,
    subListMenu: [],
  },
  {
    text: 'Buy eSIM',
    href: '/buy-esim',
    isSubTabMenu: true,
    subListMenu: [],
  },
  {
    text: 'Get Started',
    href: '#',
    isSubTabMenu: false,
    subListMenu: [
      {
        text: 'eSIM-compatible List',
        href: '/esim-compatible-list',
      },
      {
        text: 'How to set up eSIM',
        href: '/installation-guide',
      },
      {
        text: 'Help Center',
        href: '/help',
      },
      {
        text: 'FAQs',
        href: '/faqs',
      },
      {
        text: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    text: 'About Us',
    href: '#',
    isSubTabMenu: false,
    subListMenu: [
      {
        text: 'About Gigago',
        href: '/about-us',
      },
      {
        text: 'Partnership',
        href: '/partnership',
      },
      {
        text: 'Contact us',
        href: '/contact-use',
      },
    ],
  },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={` ${inter.className} antialiased`}>
        <TopBar />
        <NavigationBar items={navigationItems} />
        {children}
        <OnTop />
      </body>
    </html>
  )
}
