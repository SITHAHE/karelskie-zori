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
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
