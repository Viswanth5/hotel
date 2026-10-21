import React from 'react';

export default function Dishes() {
  const dishes = [
    {
      num: '01',
      name: 'Kuzhi Paniyaram',
      tamil: 'குழி பணியாரம்',
      desc: 'Fermented rice and urad dumplings seared in cast iron until crisp, served with a coconut chutney emulsion and a bright oil of fresh curry leaf from the kitchen garden.',
      tags: ['Cast Iron', 'Coconut', 'Curry Leaf'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Kuzhi paniyaram served in a cast-iron pan',
    },
    {
      num: '02',
      name: 'Vazhaipoo',
      tamil: 'வாழைப்பூ',
      desc: 'Banana blossom simmered in a two-day sambar reduction, finished with jaggery caramel, roasted urad powder and a scatter of curry leaf crisps.',
      tags: ['Banana Blossom', 'Sambar', 'Jaggery'],
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
      alt: 'Banana blossom with sambar emulsion',
    },
    {
      num: '03',
      name: 'Kathal Biryani',
      tamil: 'கதலி பிரியாணி',
      desc: 'Young jackfruit braised with stone-ground masala, layered with seeraga samba rice and served alongside a coconut kuruma and crisp fried shallots.',
      tags: ['Jackfruit', 'Seeraga Samba', 'Kuruma'],
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
      alt: 'Jackfruit biryani with seeraga samba rice',
    },
  ];

  return (
    <>
      <section className="section section--tight" id="dishes">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">02 — Signature Dishes <span className="tamil">சிறப்பு உணவு</span></span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            Three plates that define <em>the season</em>.
          </h2>

          <div className="dishes__list">
            {dishes.map((dish) => (
              <article key={dish.num} className="dish" data-reveal>
                <div className="dish__media arch-wrap">
                  <div className="arch">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="dish__body">
                  <span className="dish__num">{dish.num}</span>
                  <h3 className="dish__name">
                    {dish.name}
                    <span className="dish__tamil">{dish.tamil}</span>
                  </h3>
                  <p className="dish__desc">{dish.desc}</p>
                  <ul className="tags">
                    {dish.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="kolam-rule" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="8" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="32" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="8" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="32" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <path d="M20 3 Q26 13 20 20 Q14 27 20 37 Q26 27 20 20 Q14 13 20 3Z" />
          <path d="M3 20 Q13 26 20 20 Q27 14 37 20 Q27 26 20 20 Q13 14 3 20Z" />
        </svg>
      </div>
    </>
  );
}
