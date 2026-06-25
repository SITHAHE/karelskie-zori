import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import SmartImage from './SmartImage.jsx'
import { AMENITIES, ACCOMMODATION } from '../data.jsx'
import { IconArrow } from '../icons.jsx'

const GALLERY = [
  { src: 'img/rainbow-lake.webp', blur: 'img/rainbow-lake-blur.webp', alt: 'Радуга над лесным озером после дождя', span: 'sm:col-span-2 sm:row-span-2' },
  { src: 'img/aurora.webp', blur: 'img/aurora-blur.webp', alt: 'Северное сияние над замёрзшим озером зимой' },
  { src: 'img/aerial.webp', blur: 'img/aerial-blur.webp', alt: 'Вид с высоты на посёлок и дома у озера' },
  { src: 'img/snowmobile.webp', blur: 'img/snowmobile-blur.webp', alt: 'Снегоход на льду замёрзшего озера зимой' },
  { src: 'img/fishing.webp', blur: 'img/fishing-blur.webp', alt: 'Рыбалка со спиннингом на закате' },
]

export default function Rooms() {
  return (
    <section id="rooms" className="relative scroll-mt-24 bg-forest-900 py-24 text-cream sm:py-32">
      <div className="container-content">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-sand-300">
              <span className="h-px w-8 bg-sand-400" /> Дома и номера
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Три дома на берегу <em className="italic text-sand-300">озера</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg font-light leading-relaxed text-cream/75">
              Большой дом из карельской сосны и два уютных домика рядом — всего до 17&nbsp;гостей.
              Выбирайте формат под свою компанию: просторный сруб для большой семьи или
              отдельный домик для уединённого отдыха.
            </p>
          </Reveal>
        </div>

        {/* Варианты размещения */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ACCOMMODATION.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1} y={36}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.04]">
                <SmartImage
                  src={a.img}
                  blur={a.blur}
                  alt={a.title}
                  className="h-64 w-full sm:h-72"
                  imgClassName="group-hover:scale-105 transition-transform duration-[1600ms] ease-out-expo"
                />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-sand-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {a.tag}
                    </span>
                    <span className="text-right leading-tight">
                      <span className="font-serif text-2xl text-sand-300">{a.price}</span>
                      <span className="block text-xs text-cream/55">{a.priceNote}</span>
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-cream">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{a.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-cream/10 pt-5">
                    {a.specs.map((s) => (
                      <li key={s.label} className="flex items-center gap-2 text-sm text-cream/85">
                        <s.icon width={18} height={18} className="text-sand-300" />
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Удобства */}
        <Reveal>
          <h3 className="mt-20 mb-2 font-serif text-3xl text-cream">Удобства во всех домах</h3>
          <p className="mb-8 text-cream/60">Комфорт в любое время года</p>
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a) => (
            <StaggerItem key={a.title}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors duration-300 hover:border-sand-400/40 hover:bg-cream/[0.07]">
                <a.icon className="text-sand-300 transition-transform duration-300 group-hover:scale-110" width={32} height={32} />
                <h3 className="mt-4 font-serif text-xl text-cream">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{a.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Галерея */}
        <Reveal>
          <div className="mt-20 mb-8 flex items-end justify-between">
            <h3 className="font-serif text-3xl text-cream">Галерея</h3>
            <span className="text-sm text-cream/50">Озеро · дом · сезоны</span>
          </div>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:auto-rows-[210px]">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06} className={`${g.span || ''} h-full`}>
              <SmartImage
                src={g.src}
                blur={g.blur}
                alt={g.alt}
                className="group h-full w-full rounded-2xl"
                imgClassName="group-hover:scale-110 transition-transform duration-[1600ms] ease-out-expo"
              />
            </Reveal>
          ))}
        </div>

        {/* Цена */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-sand-400/30 bg-gradient-to-br from-forest-800 to-forest-900 p-8 sm:flex-row sm:p-10">
            <div>
              <p className="text-sm uppercase tracking-widest2 text-sand-300">Стоимость аренды · дом целиком</p>
              <p className="mt-2 font-serif text-4xl text-cream sm:text-5xl">
                от 6 000&nbsp;₽ <span className="text-xl font-light text-cream/60">в сутки</span>
              </p>
              <p className="mt-2 text-sm text-cream/60">
                Большой дом — 9 000&nbsp;₽, малый домик — 6 000&nbsp;₽ в сутки. Аренда на любой
                период; праздничные даты бронируйте заранее.
              </p>
            </div>
            <a href="#booking" onClick={smooth('booking')} className="btn-primary group whitespace-nowrap">
              Связаться с нами
              <IconArrow width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function smooth(id) {
  return (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
