import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { CONTACTS } from '../data.jsx'
import { IconPhone, IconMail, IconArrow, IconVK } from '../icons.jsx'

export default function Booking() {
  return (
    <section id="booking" className="relative scroll-mt-24 overflow-hidden bg-forest-900 py-24 sm:py-32">
      {/* Фоновое фото */}
      <div className="absolute inset-0">
        <img src="img/aurora.webp" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 via-forest-900/75 to-forest-900" />
      </div>

      <div className="container-content relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-sand-300">
              <span className="h-px w-8 bg-sand-400" /> Бронирование <span className="h-px w-8 bg-sand-400" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Забронируйте отдых <em className="italic text-sand-300">в Карелии</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg font-light leading-relaxed text-cream/75">
              Свяжитесь с нами по телефону или электронной почте — подтвердим даты, расскажем о
              маршруте и поможем спланировать рыбалку или баню. Аренда возможна на любой период;
              праздничные даты бронируйте заранее.
            </p>
          </Reveal>
        </div>

        {/* Карточки контактов */}
        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {CONTACTS.phones.map((p) => (
            <StaggerItem key={p.tel}>
              <a
                href={`tel:${p.tel}`}
                className="group flex h-full flex-col items-center rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 text-center transition-colors duration-300 hover:border-sand-400/40 hover:bg-cream/[0.08]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-sand-300 transition-colors duration-300 group-hover:bg-sand-500 group-hover:text-white">
                  <IconPhone width={24} height={24} />
                </span>
                <span className="mt-5 text-sm text-cream/55">{p.name}</span>
                <span className="mt-1 font-serif text-2xl text-cream">{p.number}</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sand-300">
                  Позвонить
                  <IconArrow width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </StaggerItem>
          ))}

          <StaggerItem>
            <a
              href={`mailto:${CONTACTS.email}`}
              className="group flex h-full flex-col items-center rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 text-center transition-colors duration-300 hover:border-sand-400/40 hover:bg-cream/[0.08]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-sand-300 transition-colors duration-300 group-hover:bg-sand-500 group-hover:text-white">
                <IconMail width={24} height={24} />
              </span>
              <span className="mt-5 text-sm text-cream/55">Электронная почта</span>
              <span className="mt-1 break-all font-serif text-xl text-cream">{CONTACTS.email}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sand-300">
                Написать
                <IconArrow width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-center text-sm text-cream/50">
              Также пишите в личные сообщения нашей группы — ответим на все вопросы по заезду и
              досугу.
            </p>
            <a
              href={CONTACTS.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.04] px-6 py-3 text-sm font-semibold text-cream transition-colors duration-300 hover:border-[#0077FF]/60 hover:bg-[#0077FF] hover:text-white"
            >
              <IconVK width={20} height={20} className="text-[#5b9bff] transition-colors duration-300 group-hover:text-white" />
              Наша группа ВКонтакте
              <IconArrow width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
