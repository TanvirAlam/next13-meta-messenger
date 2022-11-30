import './globals.css'
import Header from './Header/Header'
import Providers from './providers'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
