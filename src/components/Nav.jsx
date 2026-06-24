import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, CONTACTS } from '../data.jsx'
import { IconPhone } from '../icons.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // блокируем скролл при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`container-content flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'border-forest-700/10 bg-cream/85 shadow-lg shadow-forest-900/5 backdrop-blur-md'
            : 'border-white/20 bg-white/10 backdrop-blur-sm'
        }`}
      >
        {/* Лого */}
        <a
          href="#top"
          onClick={(e) => go(e, 'top')}
          className={`flex items-center gap-2.5 transition-colors ${
            scrolled ? 'text-forest-800' : 'text-white'
          }`}
        >
          <Logo className={scrolled ? 'text-sand-500' : 'text-sand-300'} />
          <span className="font-serif text-xl font-semibold leading-none tracking-wide">
            Карельские&nbsp;зори
          </span>
        </a>

        {/* Десктоп-меню */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? 'text-forest-700 hover:text-forest-900' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACTS.phones[0].tel}`}
            className={`hidden items-center gap-2 text-sm font-semibold md:inline-flex ${
              scrolled ? 'text-forest-800' : 'text-white'
            }`}
          >
            <IconPhone width={16} height={16} />
            {CONTACTS.phones[0].number}
          </a>
          <a href="#booking" onClick={(e) => go(e, 'booking')} className="btn-primary hidden !px-5 !py-2.5 text-xs sm:inline-flex">
            Забронировать
          </a>

          {/* Бургер */}
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              scrolled || open ? 'text-forest-800' : 'text-white'
            }`}
          >
            <span className="sr-only">Меню</span>
            <div className="flex flex-col gap-[5px]">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-900/95 backdrop-blur-lg lg:hidden"
          >
            <motion.ul
              className="flex h-full flex-col items-center justify-center gap-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {NAV_LINKS.map((l) => (
                <motion.li
                  key={l.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => go(e, l.id)}
                    className="font-serif text-3xl text-cream transition-colors hover:text-sand-300"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-4 flex flex-col items-center gap-3">
                {CONTACTS.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="text-lg text-cream/80">
                    {p.name}: {p.number}
                  </a>
                ))}
                <a href="#booking" onClick={(e) => go(e, 'booking')} className="btn-primary mt-2">
                  Оставить заявку
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Logo({ className = '' }) {
  // Стилизованное солнце над водой («зори»)
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="13" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 3v2M16 21v2M6 13H4M28 13h-2M9 6 7.5 4.5M23 6l1.5-1.5"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 26h24M7 29h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
