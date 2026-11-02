// app/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'

export const metadata = {
  title: 'Shoply — маркетплейс гаджетов',
  description: 'Гаджеты, аксессуары и электроника',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}