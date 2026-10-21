import React from 'react';

export default function MoreThanDining() {
  const experiences = [
    {
      index: '01',
      title: 'Hotels & Box Stays',
      tamil: 'தங்குமிடம் & பாக்ஸ் ஸ்டே',
      desc: 'Relax and unwind with comfortable accommodation and distinctive stays designed for travellers and families.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
      alt: 'Temple City Residency and Box Stays accommodation',
      delay: undefined,
    },
    {
      index: '02',
      title: 'Bakes, Cafés & Sweets',
      tamil: 'பேக்கரி, கஃபே & இனிப்புகள்',
      desc: 'Discover delightful bakery treats, refreshing café experiences, and traditional sweets and savouries.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
      alt: 'Temple City Bakes, Cafe, and fresh sweets',
      delay: '.08s',
    },
    {
      index: '03',
      title: 'Food Products',
      tamil: 'உணவு தயாரிப்புகள்',
      desc: 'Experience the flavours of Temple City through our food products, created with a commitment to quality and taste.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
      alt: 'Packaged authentic Temple City food products',
      delay: '.16s',
    },
    {
      index: '04',
      title: 'Events & Celebrations',
      tamil: 'விழாக்கள் & கொண்டாட்டங்கள்',
      desc: 'Find spaces for special occasions, family celebrations, and memorable gatherings.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
      alt: 'Temple City Greenpark Mahal event and wedding hall',
      delay: '.24s',
    },
    {
      index: '05',
      title: 'Fuel & EV Charging',
      tamil: 'எரிபொருள் & மின்வாகன சார்ஜிங்',
      desc: 'Make your journey more convenient with our fuel stations and EV charging facilities at selected locations.',
      image: 'https://images.unsplash.com/photo-1558441719-79753e144a10?auto=format&fit=crop&w=400&q=80',
      alt: 'Temple City Highway EV charging and fuel facilities',
      delay: '.32s',
    },
  ];

  const brandList = [
    'Sri Valarmatthi Sweets and Savouries',
    'Temple City Food Products',
    'Blossomz',
    'Temple City Bakes & Cafe',
    'Temple City Express',
    'Temple City Box Stays',
    'Temple City Greenpark Mahal',
    'Temple City Residency',
  ];

  return (
    <>
      <section className="section" id="experiences">
        <div className="container">
          <div className="exp__grid">
            <div className="exp__intro">
              <div className="sec-head" data-reveal>
                <span className="label">05 — More Than Dining <span className="tamil">பன்முக அனுபவங்கள்</span></span>
              </div>
              <h2 className="display" data-reveal style={{ '--d': '.08s' }}>
                One Legacy. <em>Many Experiences.</em>
              </h2>
              <p className="lede" data-reveal style={{ '--d': '.16s' }}>
                Temple City is more than a dining destination. Our growing family of businesses brings together hospitality, accommodation, food products, celebrations, and convenient travel experiences under one trusted name.
              </p>

              <div
                data-reveal
                style={{
                  '--d': '.24s',
                  marginTop: 'clamp(2rem, 4vw, 3rem)',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--line-d)',
                }}
              >
                <span className="label" style={{ display: 'block', marginBottom: '.8rem' }}>
                  Our Other Brands
                </span>
                <p
                  style={{
                    fontSize: '.88rem',
                    lineHeight: '1.85',
                    color: 'rgba(30,18,12,0.7)',
                  }}
                >
                  {brandList.join(' · ')}
                </p>
              </div>
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
                    <h3>
                      {exp.title}
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
                        {exp.tamil}
                      </span>
                    </h3>
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
