import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { REVIEWS } from '../data.jsx'
import { IconStar, IconQuote } from '../icons.jsx'

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-sand-500" /> Отзывы гостей <span className="h-px w-8 bg-sand-500" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
              Возвращаются <em className="italic text-forest-600">снова и снова</em>
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <StaggerItem key={r.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-forest-200 bg-white/70 p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest-900/5">
                <IconQuote width={34} height={34} className="text-sand-400/60" />
                <div className="mt-3 flex gap-0.5 text-sand-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <IconStar key={i} width={16} height={16} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-forest-800/85">
                  «{r.text}»
                </blockquote>
                <figcaption className="mt-6 border-t border-forest-200 pt-4">
                  <div className="font-serif text-lg text-forest-900">{r.name}</div>
                  <div className="text-sm text-forest-800/55">{r.place}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
