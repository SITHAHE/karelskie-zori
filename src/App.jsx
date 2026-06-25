import { useEffect, useState } from 'react'
import { MotionConfig, motion, AnimatePresence } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Rooms from './components/Rooms.jsx'
import Activities from './components/Activities.jsx'
import Fishing from './components/Fishing.jsx'
import Reviews from './components/Reviews.jsx'
import Location from './components/Location.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    // iOS Safari игнорирует смену <meta theme-color> через JS и сам подбирает
    // цвет статус-бара под фон страницы (и делает это плавно). Поэтому на iOS
    // мы НЕ задаём theme-color — даём Safari самому брать цвет секции.
    // На Android/desktop Chrome theme-color через JS работает — обновляем его.
    const isIOS =
      /iP(hone|ad|od)/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    let meta = null
    if (!isIOS) {
      meta = document.querySelector('meta[name="theme-color"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'theme-color')
        document.head.appendChild(meta)
      }
    }

    // Цвет фона каждой секции — под него красим верхнюю полосу.
    const sections = [
      ['top', '#243a2f'],       // hero — тёмно-зелёный
      ['about', '#f4efe6'],     // cream
      ['rooms', '#1f2421'],     // forest-900
      ['activities', '#f4efe6'],
      ['fishing', '#243a2f'],   // тёмный параллакс
      ['reviews', '#f4efe6'],
      ['location', '#f3f6f3'],  // forest-50
      ['booking', '#1f2421'],   // forest-900 (и футер тоже тёмный)
    ]
    let current = ''
    const apply = () => {
      let color = '#243a2f'
      for (const [id, c] of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= 2 && r.bottom > 2) {
          color = c
          break
        }
      }
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
        color = '#1f2421'
      }
      if (color !== current) {
        current = color
        // Синхронизируем фон html/body — это и источник цвета для авто-подбора
        // на iOS, и страховка при overscroll.
        document.documentElement.style.backgroundColor = color
        document.body.style.backgroundColor = color
        if (meta) meta.setAttribute('content', color)
      }
    }
    const onScroll = () => {
      setShowTop(window.scrollY > window.innerHeight)
      requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', apply, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', apply)
    }
  }, [])

  return (
    // reducedMotion="user" — Framer Motion сам отключит анимации,
    // если в системе включено «уменьшить движение».
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Activities />
        <Fishing />
        <Reviews />
        <Location />
        <Booking />
      </main>
      <Footer />

      {/* Кнопка «наверх» */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Наверх"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-forest-700 text-cream shadow-lg shadow-forest-900/30 transition-colors hover:bg-forest-600"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 15 6-6 6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
