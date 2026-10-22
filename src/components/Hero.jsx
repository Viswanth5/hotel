import React from 'react';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80"
          alt="Warm, low-lit dining room at The Temple City, Madurai"
          fetchPriority="high"
          data-parallax="0.22"
        />
      </div>
      <div className="hero__veil"></div>

      

      <div className="hero__inner container">
        <p className="hero__eyebrow">
          <span className="tamil">மதுரை</span>
          <span className="dot" aria-hidden="true"></span>
          <span>MADURAI'S FAVOURITE VEGETARIAN DINING DESTINATION</span>
        </p>
        <h1 className="hero__title">
          <span className="line"><span className="li">A Taste of Tradition.</span></span>
          <span className="line"><span className="li">A Legacy of <em>Hospitality</em>.</span></span>
        </h1>
        <p className="hero__sub">
          Discover authentic South Indian flavours, cherished culinary traditions, and warm hospitality at Temple City Hotels. From everyday dining to memorable family gatherings, we bring the distinctive tastes of Madurai and Tirunelveli to every table.
        </p>
        <div className="hero__actions">
          <a
            className="btn btn--solid magnetic"
            href="#menu"
            onClick={(e) => onNavigate(e, '#menu')}
          >
            <span>Explore Our Menu</span>
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="btn btn--ghost magnetic"
            href="#locations"
            onClick={(e) => onNavigate(e, '#locations')}
          >
            <span>Find a Restaurant</span>
          </a>
        </div>
      </div>

      <div className="hero__foot container">
        <span>Madurai &amp; Tirunelveli Traditions</span>
        <a
          className="scroll-cue"
          href="#stats"
          aria-label="Scroll to statistics"
          onClick={(e) => onNavigate(e, '#stats')}
        >
          <span className="scroll-cue__line" aria-hidden="true"></span>
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
