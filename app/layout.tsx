import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
 import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: 'AlignersFit',
  description: 'AlignersFit is a platform for finding the best aligners for your teeth',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
               
              <CursorPointer />
              {children}
              <SpeedInsights />
             
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
