import React from 'react';

export default function Locations({ onNavigate }) {
  const branches = [
    {
      id: 'mattuthavani',
      name: 'Mattuthavani',
      tamil: 'மாட்டுத்தாவணி',
      address: 'Near MGR Integrated Bus Terminus, Mattuthavani, Madurai 625007',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Mattuthavani+Madurai',
    },
    {
      id: 'uthangudi',
      name: 'Uthangudi',
      tamil: 'உத்தங்குடி',
      address: 'Madurai-Melur Main Road, Opp. Meenakshi Mission Hospital, Uthangudi, Madurai 625107',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Uthangudi+Madurai',
    },
    {
      id: 'bibikulam',
      name: 'Bibikulam',
      tamil: 'பீபிகுளம்',
      address: 'V.P. Rathinasamy Nadar Road, Opp. Reliance Super, Bibikulam, Madurai 625002',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Bibikulam+Madurai',
    },
    {
      id: 'surveyor-colony',
      name: 'Surveyor Colony',
      tamil: 'சர்வேயர் காலனி',
      address: 'Plot No. 43, 120 Feet Main Road, Surveyor Colony, Madurai 625007',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Surveyor+Colony+Madurai',
    },
    {
      id: 'teppakulam',
      name: 'Teppakulam',
      tamil: 'தெப்பக்குளம்',
      address: 'Near Vandiyur Mariamman Teppakulam, Madurai 625009',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Teppakulam+Madurai',
    },
    {
      id: 'pandikovil',
      name: 'Pandikovil Junction',
      tamil: 'பாண்டிகோவில்',
      address: 'Ring Road, Seeman Nagar, Near Pandi Kovil Junction, Madurai 625020',
      image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Pandikovil+Madurai',
    },
  ];

  return (
    <>
      <section className="section section--dark-blue" id="locations">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">
              04 — Locations <span className="tamil">கிளைகள்</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            Good Food, <em>Closer to You</em>
          </h2>

          <p className="lede locations__lede" data-reveal style={{ '--d': '.14s' }}>
            Wherever your journey takes you, a Temple City dining experience is never too far away. Explore our restaurant locations and discover the flavours you love.
          </p>

          <div className="locations__grid">
            {branches.map((b, idx) => (
              <article
                key={b.id}
                className="location-card"
                data-reveal
                style={{ '--d': `${(idx * 0.08).toFixed(2)}s` }}
              >
                <div className="location-card__media arch-wrap">
                  <div className="arch">
                    <img
                      src={b.image}
                      alt={`Temple City - ${b.name} branch`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="location-card__body">
                  <h3 className="display location-card__name">
                    {b.name}
                    <span className="tamil location-card__tamil">{b.tamil}</span>
                  </h3>

                  <address className="location-card__address">
                    {b.address}
                  </address>

                  <div className="location-card__action">
                    <a
                      className="btn btn--outline-gold magnetic"
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Get Directions</span>
                      <span className="btn__arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="locations__cta" data-reveal>
            <a
              className="btn btn--solid magnetic"
              href="#locations"
              onClick={(e) => onNavigate && onNavigate(e, '#locations')}
            >
              <span>Explore All 16+ Branches, Stays &amp; EV Stations</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="tile-band tile-band--dark-blue" aria-hidden="true"></div>
    </>
  );
}
