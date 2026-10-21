import React from 'react';

export default function SignatureFlavours({ onOpenFullMenu }) {
  const categories = [
    {
      num: '01',
      name: 'South Indian Classics',
      tamil: 'தென்னிந்திய உணவுகள்',
      desc: 'Traditional idli, pongal, poori, appam, and other comforting favourites prepared with authentic flavours.',
      tags: ['Steamed Idli', 'Ven Pongal', 'Poori Masala', 'Fresh Appam'],
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
      alt: 'South Indian classics with idli, vada, and chutneys',
    },
    {
      num: '02',
      name: 'Dosa Specialities',
      tamil: 'தோசை வகைகள்',
      desc: 'Discover crispy plain dosas, ghee podi dosa, masala dosa, rava dosa, and our delicious range of signature varieties.',
      tags: ['Crispy Plain Dosa', 'Ghee Podi Dosa', 'Masala Dosa', 'Rava Dosa'],
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crispy South Indian dosa served with sambar and chutneys',
    },
    {
      num: '03',
      name: 'Traditional Meals',
      tamil: 'பாரம்பரிய சாப்பாடு',
      desc: 'Enjoy wholesome vegetarian meals, special meals, mini meals, and flavourful South Indian rice varieties.',
      tags: ['Vegetarian Meals', 'Special Meals', 'Mini Meals', 'Flavourful Rice'],
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wholesome South Indian vegetarian meals spread',
    },
    {
      num: '04',
      name: 'Delicious Starters',
      tamil: 'சுவையான தொடக்கங்கள்',
      desc: 'Explore favourites such as Gobi 65, Paneer 65, mushroom specialities, crispy starters, and more.',
      tags: ['Gobi 65', 'Paneer 65', 'Mushroom Specialities', 'Crispy Starters'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      alt: 'Golden crispy vegetarian starters',
    },
    {
      num: '05',
      name: 'Fresh Juices & Beverages',
      tamil: 'பழச்சாறுகள் & குளிர்பானங்கள்',
      desc: 'Refresh yourself with fresh fruit juices, Jigarthanda, lassis, milkshakes, traditional beverages, and seasonal drinks.',
      tags: ['Famous Jigarthanda', 'Fresh Fruit Juices', 'Lassis & Shakes', 'Filter Coffee'],
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      alt: 'Refreshing fresh fruit juices and Jigarthanda beverage',
    },
    {
      num: '06',
      name: 'Sweet Endings',
      tamil: 'இனிப்புகள்',
      desc: 'Complete your dining experience with delicious desserts, ice cream, sizzling brownie, and other sweet treats.',
      tags: ['Sizzling Brownie', 'Traditional Sweets', 'Artisanal Ice Creams', 'Desserts'],
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
      alt: 'Delicious sweet desserts and treats',
    },
  ];

  return (
    <>
      <section className="section section--tight" id="flavours">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">03 — Signature Flavours <span className="tamil">சுவை அனுபவம்</span></span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            A Celebration of <em>Authentic Flavours</em>
          </h2>

          <p className="lede" data-reveal style={{ '--d': '.14s', marginTop: '1rem', marginBottom: '2.5rem' }}>
            From comforting South Indian classics to delicious contemporary favourites, every dish celebrates our love for great food, fresh ingredients, and time-honoured recipes.
          </p>

          <div className="dishes__list">
            {categories.map((cat) => (
              <article key={cat.num} className="dish" data-reveal>
                <div className="dish__media arch-wrap">
                  <div className="arch">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="dish__body">
                  <span className="dish__num">{cat.num}</span>
                  <h3 className="dish__name">
                    {cat.name}
                    <span className="dish__tamil">{cat.tamil}</span>
                  </h3>
                  <p className="dish__desc">{cat.desc}</p>
                  <ul className="tags">
                    {cat.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 4.5rem)' }} data-reveal>
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
