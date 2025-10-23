import './globals.css'
import Navigation from '../Components/Components/Navigation'
import Footer from '../Components/footer/Footer'
import PathLogger from '../Components/Components/PathLogger'
import ThemeProvider from '../Components/Components/ThemeProvider'

export const metadata = {
  title: 'Book My Chef',
  description: 'Book your personal chef',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/removeb_sxbskt.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/removeb_sxbskt.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          <PathLogger />
          <main style={{ paddingTop: '81px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}