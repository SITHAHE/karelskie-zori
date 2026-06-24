import { Reveal } from './motion.jsx'
import { ROUTES, CONTACTS } from '../data.jsx'
import { IconPin, IconArrow } from '../icons.jsx'

export default function Location() {
  return (
    <section id="location" className="relative scroll-mt-24 bg-forest-50 py-24 sm:py-32">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Текст */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-sand-500" /> Как добраться
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
                Посёлок Лендеры, <em className="italic text-forest-600">берег озера</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 leading-relaxed text-forest-800/80">
                Республика Карелия, Муезерский район. Дом — в&nbsp;40&nbsp;метрах от берега
                Лендерского озера.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {ROUTES.map((r, i) => (
                <Reveal key={r.title} delay={0.2 + i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-forest-200 bg-white/70 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-600">
                      <IconPin width={22} height={22} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-forest-900">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-forest-800/70">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <a
                href={`tel:${CONTACTS.phones[0].tel}`}
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-sand-600 hover:text-sand-700"
              >
                Уточнить маршрут по телефону
                <IconArrow width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Карта */}
          <Reveal y={36}>
            <div className="overflow-hidden rounded-3xl border border-forest-200 shadow-2xl shadow-forest-900/10">
              <iframe
                title="Гостевой дом «Карельские зори» на Яндекс.Картах"
                className="h-[420px] w-full lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://yandex.ru/map-widget/v1/?ll=31.177568%2C63.417310&z=16&mode=search&ol=biz&oid=130459904540"
                allowFullScreen
              />
              <div className="flex items-center justify-between gap-3 bg-white px-5 py-3 text-sm">
                <span className="flex items-center gap-2 text-forest-800">
                  <IconPin width={16} height={16} className="text-sand-500" />
                  «Карельские зори», Лендеры
                </span>
                <a
                  href="https://yandex.ru/maps/org/karelskiye_zori/130459904540/?ll=31.177568%2C63.417310&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sand-600 hover:text-sand-700"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
