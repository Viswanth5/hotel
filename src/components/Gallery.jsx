import React from 'react';

export const galleryItems = [
  {
    className: 'gal--a',
    d: '0s',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    alt: 'Temple City Residency Grand Inauguration',
    ariaLabel: 'Open milestone: Temple City Residency Inauguration',
    tamil: 'கிராண்ட் திறப்பு விழா',
    title: 'Temple City Residency',
    date: 'Grand Inauguration · 3 May 2024',
  },
  {
    className: 'gal--b',
    d: '.08s',
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    alt: 'Temple City Box Stays Inauguration',
    ariaLabel: 'Open milestone: Temple City Box Stays',
    tamil: 'பாக்ஸ் ஸ்டேஸ்',
    title: 'Temple City Box Stays',
    date: 'Grand Inauguration · 11 Feb 2024',
  },
  {
    className: 'gal--c',
    d: '.16s',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    alt: 'Temple City Express Inauguration',
    ariaLabel: 'Open milestone: Temple City Express',
    tamil: 'எக்ஸ்பிரஸ்',
    title: 'Temple City Express',
    date: 'Grand Inauguration · 11 Dec 2023',
  },
  {
    className: 'gal--d',
    d: '.24s',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    thumb: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Hotel Temple City, Batlagundu By-Pass Inauguration',
    ariaLabel: 'Open milestone: Batlagundu By-Pass Inauguration',
    tamil: 'வத்தலகுண்டு பைபாஸ்',
    title: 'Hotel Temple City, Batlagundu',
    date: 'Grand Inauguration · 11 Dec 2022',
  },
  {
    className: 'gal--g',
    d: '.32s',
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80',
    thumb: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    alt: 'Hotel Temple City, NH-87 Keeladi Inauguration',
    ariaLabel: 'Open milestone: NH-87 Keeladi Inauguration',
    tamil: 'கீழடி நெடுஞ்சாலை',
    title: 'Hotel Temple City, NH-87 Keeladi',
    date: 'Grand Inauguration · 2025',
  },
];

export default function Gallery({ onOpenLightbox, onNavigate }) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenLightbox(index);
    }
  };

  return (
    <section className="section section--leaf" id="milestones">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="label">08 — Moments &amp; Milestones <span className="tamil">மைல்கற்கள்</span></span>
          <span className="rule" aria-hidden="true"></span>
        </div>
        <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
          Growing Together, <em>Creating Memories</em>
        </h2>
        <p className="lede" data-reveal style={{ '--d': '.14s', marginTop: '1rem', marginBottom: '2rem' }}>
          Every new beginning reflects our commitment to serving more guests, reaching new destinations, and creating meaningful experiences. Explore some of the milestones that have shaped our journey.
        </p>

        <div className="gallery__grid" id="galleryGrid">
          {galleryItems.map((item, index) => (
            <figure
              key={index}
              className={`gal ${item.className}`}
              data-d={item.d}
              data-src={item.src}
              tabIndex={0}
              role="button"
              aria-label={item.ariaLabel}
              onClick={() => onOpenLightbox(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                decoding="async"
              />
              <figcaption className="gal__cap">
                <span className="tamil">{item.tamil}</span>
                <strong>{item.title}</strong>
                <span style={{ display: 'block', fontSize: '.8em', opacity: 0.85, textTransform: 'none', letterSpacing: 'normal', marginTop: '2px' }}>
                  {item.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 4.5rem)' }} data-reveal>
          <a
            className="btn btn--solid magnetic"
            href="#milestones"
            onClick={(e) => onNavigate && onNavigate(e, '#milestones')}
          >
            <span>Explore Our Gallery</span>
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
