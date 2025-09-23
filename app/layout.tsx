import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo OT Practice - Evidence-Based OT Services',
  description: 'Professional occupational therapy services in Windhoek, Namibia. Specializing in pediatric OT, neuro rehabilitation, hand therapy, and daily living skills for all ages.',
  keywords: 'occupational therapy, Windhoek, Namibia, pediatric OT, hand therapy, neuro rehabilitation, sensory integration, stroke recovery',
  authors: [{ name: 'Demo OT Practice' }],
  openGraph: {
    title: 'Demo OT Practice - Evidence-Based OT Services',
    description: 'Professional occupational therapy services in Windhoek, Namibia. Helping children, adults, and seniors achieve independence in daily activities.',
    url: 'https://demo-ot.com',
    siteName: 'Demo OT Practice',
    locale: 'en_NA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo OT Practice',
    description: 'Evidence-based occupational therapy services in Windhoek, Namibia',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Demo OT Practice",
              "image": "/logo.svg",
              "@id": "",
              "url": "https://demo-ot.com",
              "telephone": process.env.NEXT_PUBLIC_CLINIC_PHONE,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Independence Avenue",
                "addressLocality": "Windhoek",
                "addressRegion": "Khomas",
                "addressCountry": "NA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -22.5609,
                "longitude": 17.0658
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": []
            })
          }}
        />
        {/* Placeholder for analytics - add your tracking code here */}
        <script id="analytics-placeholder" dangerouslySetInnerHTML={{ __html: '' }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
