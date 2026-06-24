import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FACTS } from '../data.jsx'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // мягкий параллакс фона и плавный уход контента
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const ease = [0.16, 1, 0.3, 1]

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Фон с параллаксом */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 will-change-transform">
        <img
          src="img/lake-pier.webp"
          alt="Деревянный причал на берегу лесного озера в Карелии на рассвете"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/55 via-forest-900/25 to-forest-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-transparent to-transparent" />
      </motion.div>

      {/* Контент */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-content relative flex h-full flex-col items-center justify-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-white backdrop-blur-sm"
        >
          Карелия · озеро Лендерское
        </motion.span>

        <h1 className="max-w-4xl text-shadow-soft font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {['Тишина,', 'к которой', 'хочется вернуться'].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.3 + i * 0.13 }}
              >
                {i === 2 ? <em className="font-normal italic text-sand-300">{line}</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="mt-7 max-w-xl text-balance text-base font-light leading-relaxed text-white/90 sm:text-lg"
        >
          Гостевой дом из карельской сосны на самом берегу озера. Баня на дровах,
          рыбалка, северная тайга и белые ночи — в сорока метрах от воды.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.05 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#booking" onClick={smooth('booking')} className="btn-primary">
            Забронировать отдых
          </a>
          <a href="#about" onClick={smooth('about')} className="btn-light">
            Узнать больше
          </a>
        </motion.div>
      </motion.div>

      {/* Полоса фактов внизу */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.2 }}
        style={{ opacity }}
        className="absolute inset-x-0 bottom-0 z-10 hidden sm:block"
      >
        <div className="container-content pb-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-forest-900/55 shadow-2xl shadow-forest-900/30 ring-1 ring-black/10 backdrop-blur-2xl sm:grid-cols-4">
            {FACTS.map((f, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4">
                <f.icon className="shrink-0 text-sand-300" width={26} height={26} />
                <div className="leading-tight">
                  <div className="font-serif text-xl text-white">{f.value}</div>
                  <div className="text-xs text-cream/80">{f.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Индикатор скролла */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity }}
        className="pointer-events-none absolute bottom-[120px] left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/80"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function smooth(id) {
  return (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
