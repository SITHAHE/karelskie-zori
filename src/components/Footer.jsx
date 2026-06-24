import { NAV_LINKS, CONTACTS } from '../data.jsx'
import { IconPin, IconPhone, IconMail, IconVK } from '../icons.jsx'

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <footer className="bg-forest-900 text-cream/80">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Бренд */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 text-cream">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="text-sand-300">
                <circle cx="16" cy="13" r="6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M16 3v2M16 21v2M6 13H4M28 13h-2M9 6 7.5 4.5M23 6l1.5-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4 26h24M7 29h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-2xl font-semibold">Карельские зори</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Гостевой дом из карельской сосны на берегу Лендерского озера. Уединённый отдых
              в северной тайге — рыбалка, баня и тишина в любое время года.
            </p>
            <a
              href={CONTACTS.vk}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Группа ВКонтакте"
              className="group mt-5 inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-2.5 text-sm font-medium text-cream/80 transition-colors duration-300 hover:border-[#0077FF]/60 hover:bg-[#0077FF] hover:text-white"
            >
              <IconVK width={18} height={18} className="text-[#5b9bff] transition-colors duration-300 group-hover:text-white" />
              ВКонтакте
            </a>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-serif text-lg text-cream">Разделы</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={(e) => go(e, l.id)} className="transition-colors hover:text-sand-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-serif text-lg text-cream">Контакты</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {CONTACTS.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex items-center gap-2.5 transition-colors hover:text-sand-300">
                    <IconPhone width={16} height={16} className="text-sand-300" />
                    {p.number} · {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-2.5 transition-colors hover:text-sand-300">
                  <IconMail width={16} height={16} className="text-sand-300" />
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin width={16} height={16} className="text-sand-300" />
                Карелия, посёлок Лендеры
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Гостевой дом «Карельские зори». Все права защищены.</span>
          <span>Сделано с любовью к северной природе</span>
        </div>
      </div>
    </footer>
  )
}
