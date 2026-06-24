import { Reveal } from './motion.jsx'
import SmartImage from './SmartImage.jsx'
import { ACTIVITIES, YARD } from '../data.jsx'

export default function Activities() {
  return (
    <section id="activities" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-sand-500" /> Отдых и услуги <span className="h-px w-8 bg-sand-500" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
              Чем заняться <em className="italic text-forest-600">в Карелии</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg font-light leading-relaxed text-forest-800/80">
              Баня на дровах, рыбалка, прогулки на лодке летом и снегоход зимой, грибы и ягоды
              в тайге. Казан, коптильня и мангал с шампурами — для гостей бесплатно.
            </p>
          </Reveal>
        </div>

        {/* Карточки активностей */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.1} y={36}>
              <article className="group relative h-[380px] overflow-hidden rounded-3xl shadow-xl shadow-forest-900/10 sm:h-[440px]">
                <SmartImage
                  src={a.img}
                  alt={a.title}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="group-hover:scale-110 transition-transform duration-[1600ms] ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sand-500/90 text-white backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                    <a.icon width={24} height={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-white">{a.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">{a.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Двор / инфраструктура */}
        <Reveal>
          <div className="mt-12 rounded-3xl border border-forest-200 bg-white/60 p-8 text-center sm:p-10">
            <h3 className="font-serif text-2xl text-forest-900">На территории</h3>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {YARD.map((y) => (
                <li
                  key={y}
                  className="rounded-full border border-forest-300/60 bg-cream px-5 py-2 text-sm font-medium text-forest-700 transition-colors duration-300 hover:border-sand-500 hover:text-sand-600"
                >
                  {y}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
