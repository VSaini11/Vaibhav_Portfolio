import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vaibhav Saini | Full Stack Developer Portfolio',
  description: 'A cinematic portfolio of a final-year engineering student focused on building real products and solving complex problems. Explore my work in full-stack development, system design, and innovative solutions.',
  keywords: [
    'Vaibhav Saini',
    'Vaibhav Saini portfolio',
    'Vaibhav Saini developer',
    'full stack developer portfolio',
    'software engineer portfolio',
    'portfolio',
    'developer portfolio',
    'software engineer',
    'full-stack developer',
    'systems thinker',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'engineering student',
    'software development',
    'UI/UX design',
    'problem solver',
  ],
  authors: [{ name: 'Vaibhav Saini' }], // Update with your actual name
  creator: 'Vaibhav Saini',
  publisher: 'Vaibhav Saini',
  generator: 'Next.js',
  metadataBase: new URL('https://vaibhavsaini.vercel.app/'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaibhavsaini.vercel.app/', // Update with your actual domain
    title: 'Vaibhav Saini | Full Stack Developer Portfolio',
    description: 'Vaibhav Saini is a Full Stack Developer and software engineer focused on building real products, scalable systems, and impactful solutions.',
    siteName: 'Vaibhav Saini Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to /public
        width: 1200,
        height: 630,
        alt: 'Vaibhav Saini - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Saini | Full Stack Developer Portfolio',
    description: 'Vaibhav Saini is a Full Stack Developer and software engineer focused on building real products, scalable systems, and impactful solutions.',
    creator: 'https://x.com/Vaibhav11032004', // Update with your Twitter handle
    images: ['/og-image.jpg'], // Same as Open Graph image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'VrEmnNqA7SezugBRvYNegJyz__fvvrpT83slChVPMRo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vaibhav Saini', // Update with your actual name
    jobTitle: 'Software Engineer & Systems Thinker',
    description: 'Final-year engineering student focused on building real products and solving complex problems',
    url: 'https://vaibhavsaini.vercel.app/', // Update with your actual domain
    image: '/og-image.png', // Update with your profile image URL
    sameAs: [
      'https://github.com/VSaini11', // Update with your actual GitHub
      'https://www.linkedin.com/in/vaibhav-saini-522398252/', // Update with your actual LinkedIn
      'https://x.com/Vaibhav11032004', // Update with your actual Twitter
    ],
    knowsAbout: [
      'Software Development',
      'Full-Stack Development',
      'System Design',
      'React',
      'Next.js',
      'TypeScript',
      'Web Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Your University', // Update with your university
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
