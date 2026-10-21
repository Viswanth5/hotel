import React from 'react';

export default function Experience() {
  const experiences = [
    {
      index: 'i',
      title: 'The Room',
      desc: 'Twelve tables set beneath granite pillars and brass lamps. Oak, raw linen, jasmine from the market, and the quiet hum of a room designed for conversation.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
      alt: 'The dining room at The Temple City',
      delay: undefined,
    },
    {
      index: 'ii',
      title: 'The Service',
      desc: (
        <>
          No scripts and no ceremony — only people who have spent years
          learning <span className="tamil">விருந்தோம்பல்</span>, the Tamil art of
          hospitality, and who know when a glass needs filling.
        </>
      ),
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80',
      alt: 'Service in the dining room',
      delay: '.08s',
    },
    {
      index: 'iii',
      title: 'The Harvest',
      desc: 'Everything begins on one hectare along the Vaigai, where our growers plant by the Tamil almanac and harvest by hand each morning.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80',
      alt: 'Vegetables from the Vaigai farm',
      delay: '.16s',
    },
    {
      index: 'iv',
      title: 'The Craft',
      desc: 'Ferments aged in clay, broths reduced for days, spices ground on stone each morning. Vegetables treated with the precision of a pastry kitchen.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      alt: 'Plating in the kitchen',
      delay: '.24s',
    },
  ];

  return (
    <>
      <section className="section" id="experience">
        <div className="container">
          <div className="exp__grid">
            <div className="exp__intro">
              <div className="sec-head" data-reveal>
                <span className="label">04 — The Experience <span className="tamil">அனுபவம்</span></span>
              </div>
              <h2 className="display" data-reveal style={{ '--d': '.08s' }}>
                An evening composed in <em>four movements</em>.
              </h2>
              <p className="lede" data-reveal style={{ '--d': '.16s' }}>
                Twelve tables. Nine people in the room. Three and a half hours.
                Everything at The Temple City is built to slow the evening down.
              </p>
            </div>

            <div className="exp__list">
              {experiences.map((exp) => (
                <article
                  key={exp.index}
                  className="exp__item"
                  data-reveal
                  style={exp.delay ? { '--d': exp.delay } : undefined}
                >
                  <span className="exp__index">{exp.index}</span>
                  <div>
                    <h3>{exp.title}</h3>
                    <p>{exp.desc}</p>
                  </div>
                  <div className="exp__thumb">
                    <img
                      src={exp.image}
                      alt={exp.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="tile-band" aria-hidden="true"></div>
    </>
  );
}
