import './globals.css'
import Navigation from '../Components/Components/Navigation'
import Footer from '../Components/footer/Footer'
import PathLogger from '../Components/Components/PathLogger'
import ThemeSwitcher from '../Components/Components/ThemeSwitcher'

export const metadata = {
  title: 'Book My Chef',
  description: 'Book your personal chef',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="current">
      <body>
        <Navigation />
        <PathLogger />
        <ThemeSwitcher />
        <div style={{ paddingTop: '100px' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
