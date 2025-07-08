import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              {/* <ThemeSwitcher /> */}
              <CursorPointer />
              {children}
              <SpeedInsights />
              {/* <ViewCanvas/> */}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
