import './globals.css'
import Navigation from '../Components/Components/Navigation'
import Footer from '../Components/footer/Footer'
import PathLogger from '../Components/Components/PathLogger'

export const metadata = {
  title: 'Book My Chef',
  description: 'Book your personal chef',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <PathLogger />
        {children}
        <Footer />
      </body>
    </html>
  )
}
