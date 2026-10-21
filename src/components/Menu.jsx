import React, { useState, useEffect } from 'react';

export default function Menu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('prelude');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('is-locked');
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.classList.remove('is-locked');
      if (window.__lenis) window.__lenis.start();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'prelude', label: 'Prelude', tamil: 'துவக்கம்' },
    { id: 'fire', label: 'From the Fire', tamil: 'நெருப்பு' },
    { id: 'grain', label: 'Rice & Lentils', tamil: 'சாதம்' },
    { id: 'sweet', label: 'Sweet', tamil: 'இனிப்பு' },
  ];

  const menuData = {
    prelude: [
      {
        name: 'Vazhaipoo Vada',
        tamil: 'வாழைப்பூ வடை',
        price: '₹140',
        desc: 'Crispy banana blossom fritters with traditional spices, coconut chutney, and fresh curry leaf oil.',
      },
      {
        name: 'Kuzhi Paniyaram',
        tamil: 'குழி பணியாரம்',
        price: '₹160',
        desc: 'Golden-crisped fermented rice and urad dumplings, served with kara chutney and mint dip.',
      },
      {
        name: 'Gobi 65 & Paneer 65',
        tamil: 'கோபி & பனீர் 65',
        price: '₹220',
        desc: 'Signature crispy starters tossed in stone-ground masala and temple-town spice blend.',
      },
      {
        name: 'Mushroom Pepper Fry',
        tamil: 'காளான் வறுவல்',
        price: '₹210',
        desc: 'Tender button mushrooms dry-roasted with black pepper, curry leaves, and shallots.',
      },
    ],
    fire: [
      {
        name: 'Ghee Podi Dosa',
        tamil: 'நெய் பொடி தோசை',
        price: '₹180',
        desc: 'Crispy golden crepe smeared with aromatic homemade gun powder podi and pure country ghee.',
      },
      {
        name: 'Special Masala Dosa',
        tamil: 'மசாலா தோசை',
        price: '₹170',
        desc: 'Thin crisp crepe wrapped around spiced potato masala, served with trio of chutneys and hot sambar.',
      },
      {
        name: 'Rava Onion Roast',
        tamil: 'ரவா வெங்காய ரோஸ்ட்',
        price: '₹190',
        desc: 'Semolina crepe dotted with roasted cashews, crushed peppercorns, and caramelized shallots.',
      },
      {
        name: 'Appam with Coconut Milk',
        tamil: 'ஆப்பம் & தேங்காய்ப்பால்',
        price: '₹150',
        desc: 'Fluffy fermented rice hopper with lacy borders, served with sweet cardamom-infused coconut milk.',
      },
    ],
    grain: [
      {
        name: 'Temple City Special Meals',
        tamil: 'ஸ்பெஷல் சாப்பாடு',
        price: '₹260',
        desc: 'Traditional banana-leaf style feast with poriyal, kootu, vatha kuzhambu, rasam, curd, appalam, and sweet.',
      },
      {
        name: 'Seeraga Samba Veg Biryani',
        tamil: 'சீரக சம்பா பிரியாணி',
        price: '₹240',
        desc: 'Fragrant short-grain rice simmered with garden vegetables, mint, and Tirunelveli-style kuruma.',
      },
      {
        name: 'Bisibelebath',
        tamil: 'சாம்பார் சாதம்',
        price: '₹160',
        desc: 'Slow-simmered rice and lentils with shallots, drumsticks, and pure ghee tempering.',
      },
      {
        name: 'Bagala Bath (Curd Rice)',
        tamil: 'தயிர் சாதம்',
        price: '₹130',
        desc: 'Cooling tempered yoghurt rice garnished with pomegranate seeds, grapes, and mustard crackle.',
      },
    ],
    sweet: [
      {
        name: 'Madurai Famous Jigarthanda',
        tamil: 'ஜிகர்தண்டா',
        price: '₹120',
        desc: 'Cherished local speciality with badam pisin, nannari syrup, thick condensed milk, and ice cream.',
      },
      {
        name: 'Sizzling Brownie with Ice Cream',
        tamil: 'பிரவுனி & ஐஸ்கிரீம்',
        price: '₹220',
        desc: 'Warm fudge walnut brownie served on a smoking sizzler plate with rich vanilla ice cream.',
      },
      {
        name: 'Tirunelveli Halwa',
        tamil: 'திருநெல்வேலி அல்வா',
        price: '₹140',
        desc: 'Authentic wheat milk halwa cooked with pure ghee and cashews, melting effortlessly on the palate.',
      },
      {
        name: 'Degree Filter Coffee',
        tamil: 'பில்டர் காபி',
        price: '₹60',
        desc: 'Freshly decocted chicory-blend coffee frothed with boiling farm milk in brass davarah.',
      },
    ],
  };

  return (
    <div
      className="menu-modal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(24, 7, 6, 0.97)',
        color: 'var(--sand)',
        overflowY: 'auto',
        paddingBlock: 'clamp(2rem, 5vw, 4rem)',
        WebkitOverflowScrolling: 'touch',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Complete Menu"
    >
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="sec-head">
            <span className="label">The Temple City <span className="tamil">முழு உணவு பட்டியல்</span></span>
          </div>
          <button
            type="button"
            className="btn btn--ghost magnetic"
            onClick={onClose}
            aria-label="Close menu modal"
            style={{ padding: '.6rem 1.4rem', fontSize: '.65rem' }}
          >
            <span>✕ Close Menu</span>
          </button>
        </div>

        <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1rem', color: 'var(--cream)' }}>
          Explore Our <em>Complete Menu</em>
        </h2>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeCategory === tab.id ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeCategory === tab.id}
              aria-controls={`panel-${tab.id}`}
              data-cat={tab.id}
              onClick={() => setActiveCategory(tab.id)}
            >
              <span>{tab.label}</span>
              <span className="tamil">{tab.tamil}</span>
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`menu__panel ${activeCategory === tab.id ? 'is-active' : ''}`}
            id={`panel-${tab.id}`}
            data-panel={tab.id}
            role="tabpanel"
          >
            <ul>
              {menuData[tab.id].map((item, idx) => (
                <li key={idx} className="menu__item">
                  <div className="mi__head">
                    <h4 className="mi__name">
                      {item.name} <span className="tamil">{item.tamil}</span>
                    </h4>
                    <span className="mi__leader" aria-hidden="true"></span>
                    <span className="mi__price">{item.price}</span>
                  </div>
                  <p className="mi__desc">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="menu__note">
          <p>
            <strong>Pure Vegetarian Kitchen</strong>
            Prepared fresh throughout the day using cold-pressed oils, pure ghee, and time-honoured Madurai recipes.
          </p>
          <p>
            <strong>Dietary &amp; Special Requests</strong>
            Jain preparations, mild spice, and custom orders gladly accommodated upon request.
          </p>
          <p>
            <strong>Takeaway &amp; Family Packs</strong>
            Available across all 18+ Temple City restaurant locations in Madurai &amp; beyond.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            type="button"
            className="btn btn--solid magnetic"
            onClick={onClose}
          >
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
