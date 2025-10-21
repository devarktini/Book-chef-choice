import './globals.css'
import Navigation from '../Components/Components/Navigation'
import Footer from '../Components/footer/Footer'
import PathLogger from '../Components/Components/PathLogger'
import ThemeProvider from '../Components/Components/ThemeProvider'

export const metadata = {
  title: 'Book My Chef',
  description: 'Book your personal chef',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          <PathLogger />
          <main style={{ paddingTop: '100px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
