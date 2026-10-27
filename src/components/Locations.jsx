import React, { useState } from 'react';
import './Locations.css';

export default function Locations({ onNavigate }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const branches = [
    {
      id: 'mattuthavani',
      num: '01',
      name: 'Mattuthavani',
      tamil: 'மாட்டுத்தாவணி',
      curation: 'Flagship Hospitality Hub',
      address: 'Near MGR Integrated Bus Terminus, Mattuthavani, Madurai 625007',
      amenities: ['AC Fine Dining', 'Pure Vegetarian', 'Dedicated Parking', 'Express Takeaway'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Mattuthavani+Madurai',
    },
    {
      id: 'uthangudi',
      num: '02',
      name: 'Uthangudi',
      tamil: 'உத்தங்குடி',
      curation: 'Resort Stays & Family Dining',
      address: 'Madurai–Melur Main Road, Opp. Meenakshi Mission Hospital, Uthangudi, Madurai 625107',
      amenities: ['Family Dining Suites', 'Boutique Stays', 'Sweets & Bakes', 'Valet Parking'],
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Uthangudi+Madurai',
    },
    {
      id: 'bibikulam',
      num: '03',
      name: 'Bibikulam',
      tamil: 'பீபிகுளம்',
      curation: 'Urban Heritage Bistro',
      address: 'V.P. Rathinasamy Nadar Road, Opp. Reliance Super, Bibikulam, Madurai 625002',
      amenities: ['Heritage Tiffin', 'Quick Dining Lounge', 'Artisan Coffee', 'City Centre Hub'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Bibikulam+Madurai',
    },
    {
      id: 'surveyor-colony',
      num: '04',
      name: 'Surveyor Colony',
      tamil: 'சர்வேயர் காலனி',
      curation: 'Contemporary Dining & Sweets',
      address: 'Plot No. 43, 120 Feet Main Road, Surveyor Colony, Madurai 625007',
      amenities: ['Grand Family Hall', 'Boutique Rooms', 'Banquet Facility', 'EV Charger'],
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Surveyor+Colony+Madurai',
    },
    {
      id: 'teppakulam',
      num: '05',
      name: 'Teppakulam',
      tamil: 'தெப்பக்குளம்',
      curation: 'Temple Heritage Oasis',
      address: 'Near Vandiyur Mariamman Teppakulam, Madurai 625009',
      amenities: ['Tank Heritage View', 'Traditional Banana Leaf Thali', 'Evening Tiffin', 'Sweet Stall'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Teppakulam+Madurai',
    },
    {
      id: 'pandikovil',
      num: '06',
      name: 'Pandikovil Junction',
      tamil: 'பாண்டிகோவில்',
      curation: 'Ring Road Gateway Pavilion',
      address: 'Ring Road, Seeman Nagar, Near Pandi Kovil Junction, Madurai 625020',
      amenities: ['Highway Oasis', 'Spacious AC Lounges', 'Large Coach Parking', '24/7 Filter Coffee'],
      image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1400&q=85',
      mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Pandikovil+Madurai',
    },
  ];

  const currentBranch = branches[selectedIndex] || branches[0];

  return (
    <>
      <section className="section tc-luxury-presence" id="locations">
        <div className="container tc-pres-container">
          {/* Section Introduction */}
          <header className="tc-pres-intro">
            <div className="tc-pres-eyebrow">
              <span className="tc-pres-tag">04 — OUR PRESENCE</span>
              <span className="tc-pres-sep" aria-hidden="true" />
              <span className="tc-pres-tamil">எங்கள் கிளைகள்</span>
            </div>

            <h2 className="display tc-pres-title">
              Good Food. Beautiful Places. <em>Unforgettable Moments.</em>
            </h2>

            <p className="tc-pres-desc">
              Discover your Temple City across Madurai. Each sanctuary is artfully designed to celebrate authentic South Indian gastronomy within warm, elevated hospitality spaces.
            </p>
          </header>

          {/* Asymmetric Cinematic Stage */}
          <div className="tc-pres-stage">
            {/* Left: Cinematic Showcase Feature */}
            <article className="tc-showcase-card" aria-label={`Featured Branch: ${currentBranch.name}`}>
              <div className="tc-showcase-bg-stack">
                {branches.map((b, idx) => (
                  <img
                    key={b.id}
                    src={b.image}
                    alt={`Temple City — ${b.name}`}
                    className={`tc-showcase-bg-img ${idx === selectedIndex ? 'is-active' : ''}`}
                    loading="eager"
                    decoding="async"
                  />
                ))}
              </div>

              <div className="tc-showcase-scrim" aria-hidden="true" />
              <div className="tc-showcase-hairline" aria-hidden="true" />

              {/* Top Meta Bar */}
              <div className="tc-showcase-topbar">
                <div className="tc-showcase-status">
                  <span className="tc-showcase-status-dot" aria-hidden="true" />
                  <span className="tc-showcase-status-text">Signature Destination</span>
                </div>
                <span className="tc-showcase-numeral">{currentBranch.num}</span>
              </div>

              {/* Bottom Feature Details */}
              <div className="tc-showcase-content">
                <span className="tc-showcase-curation">{currentBranch.curation}</span>

                <div className="tc-showcase-meta">
                  <h3 className="tc-showcase-name">{currentBranch.name}</h3>
                  <span className="tc-showcase-tamil">{currentBranch.tamil}</span>
                </div>

                <address className="tc-showcase-address">
                  {currentBranch.address}
                </address>

                <div className="tc-showcase-amenities">
                  {currentBranch.amenities.map((amenity, i) => (
                    <span key={i} className="tc-showcase-pill">{amenity}</span>
                  ))}
                </div>

                <div className="tc-showcase-action">
                  <a
                    className="tc-showcase-btn"
                    href={currentBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Discover Location: ${currentBranch.name} on Google Maps`}
                  >
                    <span>DISCOVER LOCATION</span>
                    <span className="btn-arrow-diag" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Right: Curated Luxury Branch Directory Panel */}
            <aside className="tc-directory-panel" aria-label="Temple City Branches Directory">
              <div className="tc-dir-header">
                <span className="tc-dir-header-title">Madurai Destinations</span>
                <span className="tc-dir-header-count">06 Premier Sanctuaries</span>
              </div>

              <div className="tc-dir-list" role="list">
                {branches.map((b, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={b.id}
                      role="listitem"
                      tabIndex={0}
                      className={`tc-dir-item ${isSelected ? 'is-selected' : ''}`}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onFocus={() => setSelectedIndex(idx)}
                      onClick={() => setSelectedIndex(idx)}
                      aria-label={`${b.name}, ${b.tamil}`}
                      aria-current={isSelected ? 'true' : 'false'}
                    >
                      <span className="tc-dir-item-num" aria-hidden="true">
                        {b.num}
                      </span>

                      <div className="tc-dir-item-main">
                        <div className="tc-dir-item-headline">
                          <h4 className="tc-dir-item-name">{b.name}</h4>
                          <span className="tc-dir-item-tamil">{b.tamil}</span>
                        </div>
                        <address className="tc-dir-item-addr">{b.address}</address>
                      </div>

                      <a
                        className="tc-dir-item-arrow"
                        href={b.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Directions to ${b.name}`}
                        title="Get Directions"
                      >
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>

          {/* Luxury Signature Call to Action */}
          <footer className="tc-pres-footer">
            <div className="tc-pres-footer-brand">
              <span className="tc-pres-footer-sub">Hospitality Network Across Tamil Nadu</span>
              <p className="tc-pres-footer-text">
                From bustling pilgrimage corridors to luxury highway box stays, discover our complete hospitality footprint.
              </p>
            </div>

            <a
              className="tc-pres-cta-link"
              href="#locations"
              onClick={(e) => onNavigate && onNavigate(e, '#locations')}
            >
              <span>Explore All 16+ Branches, Stays &amp; EV Stations</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </a>
          </footer>
        </div>
      </section>

      <div className="tile-band tile-band--dark-blue" aria-hidden="true" />
    </>
  );
}
