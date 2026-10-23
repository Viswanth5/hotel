import React from 'react';

export default function SignatureFlavours({ onOpenFullMenu }) {
  const heroCategory = {
    num: '01',
    name: 'South Indian Classics',
    tamil: 'தென்னிந்திய உணவுகள்',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    alt: 'South Indian classics with idli, vada, and chutneys',
  };

  const topCategories = [
    {
      num: '02',
      name: 'Dosa Specialities',
      tamil: 'தோசை வகைகள்',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crispy South Indian dosa served with sambar and chutneys',
    },
    {
      num: '03',
      name: 'Traditional Meals',
      tamil: 'பாரம்பரிய சாப்பாடு',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wholesome South Indian vegetarian meals spread',
    },
  ];

  const bottomCategories = [
    {
      num: '04',
      name: 'Delicious Starters',
      tamil: 'சுவையான தொடக்கங்கள்',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      alt: 'Golden crispy vegetarian starters',
    },
    {
      num: '05',
      name: 'Fresh Juices & Beverages',
      tamil: 'பழச்சாறுகள் & குளிர்பானங்கள்',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      alt: 'Refreshing fresh fruit juices and Jigarthanda beverage',
    },
    {
      num: '06',
      name: 'Sweet Endings',
      tamil: 'இனிப்புகள்',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
      alt: 'Delicious sweet desserts and treats',
    },
  ];

  const renderCard = (cat, cardModifier = '') => (
    <article
      key={cat.num}
      className={`lux-card lux-card--${cat.num} ${cardModifier}`}
      onClick={onOpenFullMenu}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenFullMenu && onOpenFullMenu(e);
        }
      }}
    >
      <div className="lux-card__bg">
        <img
          src={cat.image}
          alt={cat.alt}
          loading="lazy"
          decoding="async"
        />
        <div className="lux-card__overlay" aria-hidden="true" />
      </div>

      <div className="lux-card__caption">
        <h3 className="lux-card__name">
          {cat.name}
          <span className="lux-card__tamil">{cat.tamil}</span>
        </h3>
      </div>
    </article>
  );

  return (
    <>
      <section className="section section--flavours-luxury" id="flavours">
        <div className="container">
          <div className="sec-head">
            <span className="label">
              03 — Signature Flavours <span className="tamil">சுவை அனுபவம்</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <div className="flavours__header-row">
            <h2 className="display sec-title">
              A Celebration of <em>Authentic Flavours</em>
            </h2>
            <p className="lede flavours__lede">
              From comforting South Indian classics to beloved contemporary favourites, time-honoured recipes crafted with fresh ingredients.
            </p>
          </div>

          <div className="flavours__luxury-bento">
            <div className="flavours__bento-left">
              {renderCard(heroCategory, 'lux-card--hero')}
            </div>

            <div className="flavours__bento-right">
              <div className="flavours__bento-row flavours__bento-row--top">
                {topCategories.map((cat) =>
                  renderCard(cat, 'lux-card--mid')
                )}
              </div>
              <div className="flavours__bento-row flavours__bento-row--bottom">
                {bottomCategories.map((cat) =>
                  renderCard(cat, 'lux-card--compact')
                )}
              </div>
            </div>
          </div>

          <div className="flavours__cta">
            <button
              type="button"
              className="btn btn--solid magnetic"
              onClick={onOpenFullMenu}
            >
              <span>Explore Our Complete Menu</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </button>
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
