import React from 'react';

export default function Navbar({
  isStuck,
  activeSection,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onNavigate
}) {
  const navItems = [
    { href: '#flavours', label: 'Menu', id: 'flavours' },
    { href: '#locations', label: 'Locations', id: 'locations' },
    { href: '#experiences', label: 'Experiences', id: 'experiences' },
    { href: '#story', label: 'Our Story', id: 'story' },
    { href: '#reviews', label: 'Reviews', id: 'reviews' },
    { href: '#milestones', label: 'Milestones', id: 'milestones' },
  ];

  return (
    <header className={`nav ${isStuck ? 'is-stuck' : ''}`} id="nav">
      <a
        className="brand"
        href="#hero"
        aria-label="The Temple City — City of Hotels"
        onClick={(e) => onNavigate(e, '#hero')}
      >
        THE TEMPLE CITY <span className="brand__tamil">கோவில் நகரம்</span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.id ? 'is-active' : ''}
            onClick={(e) => onNavigate(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav__right">
        <a
          className="btn btn--ghost magnetic"
          href="#locations"
          onClick={(e) => onNavigate(e, '#locations')}
        >
          <span>Find a Restaurant</span>
        </a>
        <button
          className={`burger ${isMobileMenuOpen ? 'is-open' : ''}`}
          id="burger"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobileMenu"
          onClick={onToggleMobileMenu}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
