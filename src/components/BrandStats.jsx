import React from 'react';

export default function BrandStats() {
  return (
    <>
      <section className="section section--tight" id="stats" style={{ paddingBlock: 'clamp(3rem, 6vh, 4.5rem)' }}>
        <div className="container">
          <div
            className="story__stats"
            style={{
              marginTop: 0,
              paddingTop: 0,
              borderTop: 'none',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              textAlign: 'center',
            }}
          >
            <div className="stat" data-reveal>
              <span className="stat__num">20+</span>
              <span className="stat__label">Years of Culinary Excellence</span>
            </div>
            <div className="stat" data-reveal style={{ '--d': '.1s' }}>
              <span className="stat__num">18+</span>
              <span className="stat__label">Restaurant Locations</span>
            </div>
            <div className="stat" data-reveal style={{ '--d': '.2s' }}>
              <span className="stat__num" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>Madurai &amp; Beyond</span>
              <span className="stat__label">A Growing Hospitality Network</span>
            </div>
          </div>
        </div>
      </section>
      <div className="tile-band" aria-hidden="true"></div>
    </>
  );
}
