import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { FISH } from '../data.jsx'
import { IconFish } from '../icons.jsx'

export default function Fishing() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} id="fishing" className="relative scroll-mt-24 overflow-hidden">
      {/* Параллакс-фон */}
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0 will-change-transform">
        <img
          src="img/fishing.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest-900/75" />

      <div className="container-content relative py-24 text-cream sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow text-sand-300">
                <span className="h-px w-8 bg-sand-400" /> Рыбалка
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
                Райские места <em className="italic text-sand-300">для рыбака</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg font-light leading-relaxed text-cream/80">
                Быстрые реки, труднодоступные озёра и одно из крупнейших озёр Карелии —
                Лексозеро. Вода чистейшая, рыба живёт в идеальных условиях и нагуливает
                достойный вес. Организацией займёмся мы: подскажем лучшие места и дадим
                моторную лодку.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 leading-relaxed text-cream/65">
                Любителям «глухих» речек предложим выезд в лесную заимку в&nbsp;50&nbsp;км от
                Лендер — на берегу живописного озера, вдали от любой цивилизации.
              </p>
            </Reveal>
          </div>

          {/* Виды рыбы */}
          <div className="lg:pt-4">
            <Reveal>
              <h3 className="mb-5 flex items-center gap-3 font-serif text-2xl text-cream">
                <IconFish width={28} height={28} className="text-sand-300" />
                Что водится в водоёмах
              </h3>
            </Reveal>
            <Stagger className="flex flex-wrap gap-2.5" stagger={0.05}>
              {FISH.map((f) => (
                <StaggerItem key={f}>
                  <span className="inline-block rounded-full border border-cream/20 bg-cream/[0.06] px-4 py-2 text-sm text-cream/90 backdrop-blur-sm transition-colors duration-300 hover:border-sand-400/60 hover:text-sand-200">
                    {f}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-cream/15 bg-cream/[0.05] p-5 backdrop-blur-sm">
                <div className="font-serif text-5xl text-sand-300">17+</div>
                <p className="text-sm leading-relaxed text-cream/75">
                  видов рыбы в озёрах и реках рядом с домом — от хариуса и кумжи до судака и
                  щуки.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
