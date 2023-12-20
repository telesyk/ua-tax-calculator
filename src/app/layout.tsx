import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UA Tax calculator',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-gradient-to-t from-yellow-300/50 to-cyan-300/50 dark:from-amber-950/40 dark:to-sky-950/40">
        <Providers>
          <div className="min-h-screen flex flex-col items-center justify-between">
            <main className="max-w-5xl w-full grow p-4 sm:p-10">
              <section className="p-4 sm:p-10 lg:p-16 rounded-lg backdrop-blur-lg bg-slate-100/60 dark:bg-slate-900/60">
                {children}
              </section>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
