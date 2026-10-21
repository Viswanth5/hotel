import React from 'react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <span className="footer__brand">THE TEMPLE CITY</span>
            <span className="footer__brand-tamil">கோவில் நகரம்</span>
            <p className="footer__brand-sub" style={{ maxWidth: '34ch' }}>
              Temple City Hotels brings together authentic South Indian cuisine, warm hospitality, and a growing family of hospitality and food businesses. Rooted in tradition and guided by quality, we continue to create memorable experiences for our guests.
            </p>
            <address style={{ marginTop: '1.2rem', fontStyle: 'normal', fontSize: '.88rem', lineHeight: '1.8' }}>
              Phone: <a href="tel:6384899333" style={{ color: 'var(--gold-soft)' }}>6384899333</a><br />
              Email: <a href="mailto:customercare@hoteltemplecity.com" style={{ color: 'var(--gold-soft)' }}>customercare@hoteltemplecity.com</a><br />
              <a
                href="https://maps.google.com/?q=Hotel+Temple+City+Madurai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--turmeric)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Find Us on Google Maps ↗
              </a>
            </address>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer__links">
              <a href="#hero" onClick={(e) => onNavigate(e, '#hero')}>Home</a>
              <a href="#flavours" onClick={(e) => onNavigate(e, '#flavours')}>Menu</a>
              <a href="#locations" onClick={(e) => onNavigate(e, '#locations')}>Locations</a>
              <a href="#milestones" onClick={(e) => onNavigate(e, '#milestones')}>Events &amp; Gallery</a>
              <a href="#story" onClick={(e) => onNavigate(e, '#story')}>About Us</a>
              <a href="#cta" onClick={(e) => onNavigate(e, '#cta')}>Contact Us</a>
            </div>
          </div>

          <div>
            <h4>Business Links</h4>
            <div className="footer__links">
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Hotels &amp; Box Stays</a>
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Food Products</a>
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Bakes &amp; Café</a>
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Sweets &amp; Savouries</a>
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Events &amp; Venues</a>
              <a href="#experiences" onClick={(e) => onNavigate(e, '#experiences')}>Fuel &amp; EV Charging</a>
            </div>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="footer__links">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Temple City Hotels on YouTube">YouTube</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Temple City Hotels on Facebook">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Temple City Hotels on Instagram">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Temple City Hotels on LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © <span id="year">{currentYear}</span> Temple City Hotels — All rights reserved ·{' '}
            <a href="#privacy" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Privacy Policy</a> ·{' '}
            <a href="#terms" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms &amp; Conditions</a>
          </span>
          <a
            className="to-top"
            href="#hero"
            onClick={(e) => onNavigate(e, '#hero')}
          >
            <span>Back to top</span>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
              <path d="M5 13V1M5 1L1 5M5 1l4 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
