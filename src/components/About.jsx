import { Reveal } from './motion.jsx'
import SmartImage from './SmartImage.jsx'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-content">
        {/* Вступление */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-sand-500" />
              О гостевом доме
              <span className="h-px w-8 bg-sand-500" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
              Уединение в объятьях <em className="italic text-forest-600">северной природы</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg font-light leading-relaxed text-forest-800/80">
              Отдохнуть от шума мегаполиса, вдалеке от городов, на берегу лесного озера —
              мечта, которую здесь легко исполнить. Наши ещё не тронутые цивилизацией места
              созданы для тихого отдыха, который наполняет энергией и оставляет самые тёплые
              воспоминания.
            </p>
          </Reveal>
        </div>

        {/* Изображение + текст о локации */}
        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal y={36}>
            <SmartImage
              src="img/aerial.webp"
              blur="img/aerial-blur.webp"
              alt="Вид с высоты на гостевой дом и посёлок Лендеры на берегу озера"
              className="rounded-3xl shadow-2xl shadow-forest-900/15"
              imgClassName="hover:scale-[1.04] transition-transform duration-[1400ms] ease-out-expo"
              ratio="4 / 3"
            />
          </Reveal>

          <div className="lg:pl-4">
            <Reveal delay={0.1}>
              <h3 className="text-3xl font-medium text-forest-900">
                Старинный карельский посёлок Лендеры
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 leading-relaxed text-forest-800/80">
                Первое упоминание о посёлке относится к&nbsp;1611&nbsp;году. Дом стоит на берегу,
                всего в&nbsp;40&nbsp;метрах от озера Лендерское (карел.&nbsp;<i>Lendierjärvi</i>),
                в&nbsp;15&nbsp;километрах от российско-финской границы. Из окон открывается
                потрясающий вид на воду.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 leading-relaxed text-forest-800/80">
                Рядом — почта, отделение банка, фельдшерский пункт, пекарня, магазины и
                заправка. Цивилизация под рукой, а вокруг — настоящая дикая тайга.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: '1611', l: 'год основания' },
                  { v: '2018', l: 'дом построен' },
                  { v: '15 км', l: 'до границы' },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-forest-200 bg-white/60 px-4 py-5 text-center">
                    <div className="font-serif text-2xl text-forest-700">{s.v}</div>
                    <div className="mt-1 text-xs text-forest-800/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
