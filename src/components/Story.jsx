import React from 'react';

export default function Story({ onNavigate }) {
  return (
    <>
      <section className="section" id="story">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">
              06 — Our Story &amp; Heritage <span className="tamil">பாரம்பரியம்</span>
              <span className="dot" aria-hidden="true" style={{ width: 4, height: 4, background: 'var(--turmeric)', display: 'inline-block', transform: 'rotate(45deg)' }}></span>
              <span>ROOTED IN TRADITION, GROWING WITH TIME</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <div className="story__grid">
            <div className="story__media">
              <div className="arch-wrap">
                <div className="arch" data-mask>
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
                    alt="Authentic vegetarian flavours and fresh ingredients at Temple City"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="story__media--sub arch-wrap" data-mask style={{ '--d': '.25s' }}>
                <div className="arch">
                  <img
                    src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=700&q=80"
                    alt="Fresh vegetables harvested for traditional cooking"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="story__copy">
              <h2 className="display" data-reveal>
                A Heritage Built Around <em>Good Food</em>
              </h2>
              <p className="lede" data-reveal style={{ '--d': '.1s' }}>
                The story of Temple City Hotels began when our founders, Mr. K. Subburaman and Mr. K. Lakshmana Kumar, brought their culinary heritage and authentic flavours to Madurai.
              </p>
              <p className="lede" data-reveal style={{ '--d': '.16s' }}>
                Inspired by the food traditions of Tirunelveli and Andhra Pradesh, they built a restaurant business grounded in quality, hospitality, and a deep respect for traditional recipes.
              </p>
              <p className="lede" data-reveal style={{ '--d': '.22s' }}>
                Today, the next generation continues that legacy, combining the values established by the founders with new ideas, evolving customer expectations, and a broader vision for hospitality.
              </p>
              <p className="lede" data-reveal style={{ '--d': '.28s' }}>
                Through every meal we serve and every experience we create, our commitment remains the same: authentic flavours, quality food, and warm hospitality.
              </p>

              <div className="signature" data-reveal style={{ '--d': '.34s' }}>
                <span className="signature__name">Mr. K. Subburaman &amp; Mr. K. Lakshmana Kumar</span>
                <span className="signature__role">Founders · Temple City Hotels</span>
              </div>

              <div data-reveal style={{ marginTop: '2.2rem', '--d': '.4s' }}>
                <a
                  className="btn btn--dark magnetic"
                  href="#story"
                  onClick={(e) => onNavigate && onNavigate(e, '#story')}
                >
                  <span>Discover Our Story</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tile-band" aria-hidden="true"></div>
    </>
  );
}
