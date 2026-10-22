import React from 'react';

export default function MobileMenu({ isOpen, onNavigate }) {
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#locations', label: 'Restaurant Locations' },
    { href: '#experiences', label: 'More Than Dining' },
    { href: '#story', label: 'Our Story & Heritage' },
    { href: '#reviews', label: 'Guest Reviews' },
    { href: '#milestones', label: 'Moments & Milestones' },
    { href: '#cta', label: 'Find a Restaurant / Reserve' },
  ];

  return (
    <div
      className={`mobile-menu ${isOpen ? 'is-open' : ''}`}
      id="mobileMenu"
      aria-hidden={!isOpen}
    >
      <nav aria-label="Mobile">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => onNavigate(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mobile-menu__foot">
        Temple City Hotels · Madurai &amp; Beyond · 6384899333
      </div>
    </div>
  );
}
