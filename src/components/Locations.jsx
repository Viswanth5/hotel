import React from 'react';

export default function Locations() {
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
      <section className="section" id="locations">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">04 — Locations <span className="tamil">கிளைகள்</span></span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            Good Food, <em>Closer to You</em>
          </h2>

          <p className="lede" data-reveal style={{ '--d': '.14s', marginTop: '1rem', marginBottom: '3rem' }}>
            Wherever your journey takes you, a Temple City dining experience is never too far away. Explore our restaurant locations and discover the flavours you love.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            }}
          >
            {branches.map((b, idx) => (
              <article
                key={b.id}
                data-reveal
                style={{
                  '--d': `${(idx * 0.08).toFixed(2)}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(251,246,236,0.5)',
                  padding: 'clamp(1.2rem, 2vw, 1.8rem)',
                  borderRadius: '3px',
                  border: '1px solid var(--line-d)',
                }}
              >
                <div className="arch-wrap" style={{ marginBottom: '1.4rem' }}>
                  <div className="arch" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={b.image}
                      alt={`Temple City - ${b.name} branch`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    className="display"
                    style={{
                      fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                      color: 'var(--maroon-ink)',
                      marginBottom: '.3rem',
                    }}
                  >
                    {b.name}
                    <span
                      className="tamil"
                      style={{
                        display: 'block',
                        fontSize: '.55em',
                        color: 'var(--maroon)',
                        marginTop: '.2rem',
                        fontWeight: 500,
                      }}
                    >
                      {b.tamil}
                    </span>
                  </h3>

                  <address
                    style={{
                      fontStyle: 'normal',
                      fontSize: '.88rem',
                      lineHeight: '1.65',
                      color: 'rgba(30,18,12,0.68)',
                      marginBlock: '0.8rem 1.6rem',
                      flex: 1,
                    }}
                  >
                    {b.address}
                  </address>

                  <div>
                    <a
                      className="btn btn--dark magnetic"
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: '100%' }}
                    >
                      <span>Get Directions</span>
                      <span className="btn__arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 4.5rem)' }} data-reveal>
            <a
              className="btn btn--solid magnetic"
              href="https://maps.google.com/?q=Hotel+Temple+City+Madurai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Explore All Locations</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="tile-band" aria-hidden="true"></div>
    </>
  );
}
