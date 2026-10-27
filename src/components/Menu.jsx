import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';

/* ──────────────────────────────────────────────
   MENU DATA — 14 categories, authentic dishes
   ────────────────────────────────────────────── */
const menuCategories = [
  {
    id: 'soups',
    label: 'Soups',
    tamil: 'சூப்',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm aromatic soups',
    desc: 'Slow-simmered herbal broths and comforting soups prepared with freshly ground black pepper, coriander, and fresh garden herbs.',
    tags: ['Warm & Comforting', 'Herbal Charu', 'Pure Vegetarian'],
    items: [
      'Veg Soup',
      'Veg Clear Soup',
      'Tomato Soup',
      'French Onion Soup',
      'Sweet Corn Soup',
      'Mushroom Soup',
      'Cream of Mushroom Soup',
      'Veg Noodles Soup',
      'Garlic Soup',
      'Milagu Thaniya Soup',
      'Hot & Sour Soup',
      'Chettinad Soup',
      'Lemon Coriander Soup',
      'Veg Manchow Soup',
      'Palak Shorba',
      'Malli Milagu Charu',
      'Muringa Charu',
    ],
  },
  {
    id: 'salads',
    label: 'Salads & Raitas',
    tamil: 'சாலட்',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh salads and raitas',
    desc: 'Crisp garden vegetables and cooling curd raitas seasoned with roasted cumin and fresh coriander.',
    tags: ['Cool & Crisp', 'Farm Fresh', 'Cooling Raitas'],
    items: [
      'Cucumber Raitha',
      'Onion Raitha',
      'Boondhi Raitha',
      'Mix Veg Raitha',
      'Cucumber Salad',
      'Onion Salad',
      'Mix Veg Salad',
      'Tossed Salad',
      'Fruit Salad',
      'Fruit Salad with Ice Cream',
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    tamil: 'தொடக்கம்',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crispy golden starters',
    desc: 'Traditional paniyaram, crisp fritters, and sizzling tandoori and wok-tossed appetizers cooked to perfection.',
    tags: ['Crispy & Golden', 'Cast-Iron Cooked', 'Savoury Starters'],
    items: [
      'Sweet Paniyaram — 5 pieces',
      'Karam Paniyaram — 5 pieces',
      'Bajji / Bonda — 2 pieces',
      'Papad — Roasted / Fried',
      'Masala Papad — Roasted / Fried',
      'Finger Fries',
      'Veg Nuggets — 5 pieces',
      'Veg Cutlet — 2 pieces',
      'Onion Pakkoda',
      'Gobi 65',
      'Mushroom 65',
      'Paneer 65',
      'Baby Corn 65',
      'Green Peas Fry',
      'Baby Corn Golden Fry',
      'Crispy Fried Cheese Balls',
      'Stick Paneer',
      'Crispy Fried Paneer',
      'Paneer Bhurji — Keema Style',
      'Spring Roll — Veg / Paneer / Mushroom',
      'Chilli — Paneer / Gobi / Mushroom / Baby Corn',
      'Manchurian — Paneer / Gobi / Mushroom / Baby Corn',
      'Dragon — Paneer / Gobi / Mushroom / Baby Corn / Bread',
      'Pepper Fry — Paneer / Gobi / Mushroom / Baby Corn',
      'Salt & Pepper — Mushroom / Baby Corn',
      'Honey Chilli — Paneer / Gobi / Mushroom / Baby Corn',
      'Tikka — Paneer / Mushroom',
      'Achari Tikka — Paneer / Mushroom',
      'Hariyali Tikka — Paneer / Mushroom',
      'Mix Fruits Tikka — Pineapple & Apple',
    ],
  },
  {
    id: 'tiffin',
    label: 'South Indian Tiffin',
    tamil: 'சிற்றுண்டி',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Traditional South Indian tiffin',
    desc: 'Steamed fluffy idlies, golden medu vadas, soft appams, and comforting kichadi served with signature sambar and fresh coconut chutneys.',
    tags: ['Morning Classics', 'Stone Ground', 'Pure Ghee'],
    items: [
      'Idly — 2 pieces',
      'Ghee Sambar Idly',
      'Vada',
      'Sambar Vada',
      'Curd Vada',
      'Kichadi',
      'Ghee Pongal',
      'Poori',
      'Chola Poori',
      'Appam',
      'Idiyappam',
      'Chappathi',
      'Parotta',
    ],
  },
  {
    id: 'dosa',
    label: 'Dosa & Uthappam',
    tamil: 'தோசை',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crispy dosa varieties',
    desc: 'Golden-crisp paper roasts, aromatic ghee podi dosas, wholesome adai, and thick, fluffy uthappams with colourful vegetable toppings.',
    tags: ['Crisp & Golden', 'Podi & Ghee', '27 Varieties'],
    items: [
      'Plain Dosa',
      'Diet Dosa — Ragi / Wheat',
      'Adai Dosa with Aviyal',
      'Kal Dosa',
      'Podi Dosa — Paruppu / Ellu / Poondu',
      'Ghee Podi Dosa — Paruppu / Ellu / Poondu',
      'Ghee Dosa',
      'Masala Dosa',
      'Ghee Masala Dosa',
      'Onion Dosa',
      'Rava Dosa',
      'Cashewnut Rava Dosa',
      'Ghee Rava Dosa',
      'Onion Rava Dosa',
      'Mushroom Masala Dosa',
      'Paneer Masala Dosa',
      'Gobi Masala Dosa',
      'Paper Roast',
      'Family Roast',
      'Uthappam',
      'Onion Uthappam',
      'Carrot Uthappam',
      'Tomato Uthappam',
      'Podi Uthappam — Paruppu / Ellu / Poondu',
      'Ghee Podi Uthappam — Paruppu / Ellu / Poondu',
      '5 Taste Uthappam',
      '7 Taste Uthappam',
    ],
  },
  {
    id: 'meals',
    label: 'South Indian Meals & Rice',
    tamil: 'சாப்பாடு',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wholesome vegetarian meals',
    desc: 'Bountiful South Indian vegetarian meals, traditional thalis, fragrant variety rices, and aromatic seeraga samba biryani.',
    tags: ['Full Meals', 'Thali Special', 'Pure Comfort'],
    items: [
      'Meals',
      'Temple City Special Meals',
      'North Indian Thali',
      'Parcel Meals',
      'Mini Meals',
      'Steamed Rice',
      'Variety Rice — Lemon / Tomato / Coconut',
      'Sambar Rice',
      'Curd Rice',
      'Veg Biryani',
    ],
  },
  {
    id: 'specialities',
    label: 'South Indian Specialities',
    tamil: 'ஸ்பெஷல்',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    alt: 'South Indian specialities',
    desc: 'Signature Madurai creations including spicy Chilli Parotta, legendary Virudhunagar Parotta, Veg Kari Dosa, and podi-tossed delicacies.',
    tags: ['Madurai Street Style', 'Chef Specials', 'Fresh Flavours'],
    items: [
      'Chilli Idly',
      'Fried Idly — Paneer / Mushroom',
      'Ghee Podi Idly — 1 piece',
      'Podi Idly Fry — Paruppu / Ellu / Poondu',
      'Veg Kari Dosa',
      'Veg Omelette',
      'Chilli Parotta',
      'Peas Parotta',
      'Kaima Parotta',
      'Virudhunagar Parotta',
      'Kothu Idiyappam — Paneer / Mushroom (Subject to daily availability)',
    ],
  },
  {
    id: 'breads',
    label: 'Indian Breads',
    tamil: 'ரொட்டி',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh tandoori breads',
    desc: 'Hand-stretched naan, flaky parathas, layered kulchas, and wholesome rotis freshly baked in our clay tandoor.',
    tags: ['Clay Tandoor', 'Fresh Baked', 'Stuffed Breads'],
    items: [
      'Naan',
      'Butter Naan',
      'Garlic Naan',
      'Stuffed Naan — Aloo / Cheese',
      'Chilli Naan',
      'Kashmiri Naan',
      'Roti — Single',
      'Butter Roti',
      'Garlic Roti',
      'Romali Roti',
      'Tandoori Chappathi — 2 pieces',
      'Stuffed Tandoori Chappathi',
      'Phulka — 2 pieces',
      'Kulcha',
      'Stuffed Kulcha — Paneer / Mushroom / Gobi',
      'Paratha — Aloo / Pudina / Methi',
      'Stuffed Paratha — Paneer / Mushroom',
    ],
  },
  {
    id: 'rice-noodles',
    label: 'Rice & Noodles',
    tamil: 'நூடுல்ஸ்',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fried rice and noodles',
    desc: 'Wok-tossed fried rice, Indo-Chinese noodles, fragrant pulavs, and Biryani prepared with premium long-grain rice.',
    tags: ['Wok Tossed', 'Indo-Chinese', 'Pulav & Biryani'],
    items: [
      'Veg Fried Rice',
      'Paneer Fried Rice',
      'Mushroom Fried Rice',
      'Corn Fried Rice',
      'Schezwan Fried Rice',
      'Shanghai Fried Rice',
      'Veg Noodles',
      'Paneer Noodles',
      'Mushroom Noodles',
      'Schezwan Noodles',
      'Shanghai Noodles',
      'Hakka Noodles — Veg / Paneer / Mushroom',
      'Aththo — Veg / Paneer / Mushroom',
      'Veg Pulav',
      'Green Peas Pulav',
      'Kashmiri Pulav',
      'Mushroom Pulav',
      'Paneer Pulav',
      'Veg Biryani — Chinese Style',
      'Mushroom Biryani',
      'Paneer Biryani',
      'American Chopsuey',
      'Chinese Chopsuey',
      'Jeera Rice',
      'Steamed Basmati Rice',
    ],
  },
  {
    id: 'sides',
    label: 'Side Dishes',
    tamil: 'கிரேவி',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rich curries and gravies',
    desc: 'Rich paneer curries, slow-simmered dals, creamy koftas, and regional Kolhapuri, Jaipuri, and Patiala style gravies.',
    tags: ['Rich Masalas', 'Simmered Dals', '32 Selections'],
    items: [
      'Dal',
      'Dal Butter Fry',
      'Dal Tadka',
      'Dal Palak',
      'Dal Makhani',
      'Channa Masala',
      'Paneer Butter Masala',
      'Palak Paneer Masala',
      'Paneer Manchurian Gravy',
      'Kadai Paneer',
      'Paneer Tikka Masala',
      'Paneer Kaju Masala',
      'Paneer Kofta',
      'Mushroom Masala',
      'Mushroom Manchurian Gravy',
      'Kadai Mushroom',
      'Gobi Masala',
      'Kadai Gobi',
      'Gobi Manchurian Gravy',
      'Baby Corn Masala',
      'Bhindi Masala',
      'Aloo Masala',
      'Aloo Gobi Masala',
      'Aloo Palak',
      'Green Peas Masala',
      'Malai Kofta',
      'Special Navratna Kurma',
      'Kolhapuri — Paneer / Mushroom / Gobi / Baby Corn',
      'Pepper Masala — Paneer / Mushroom / Gobi / Baby Corn',
      'Jaipuri — Paneer / Mushroom / Gobi / Baby Corn',
      'Patiala — Paneer / Mushroom / Gobi / Baby Corn',
      'Do Pyaza — Paneer / Mushroom / Gobi / Baby Corn',
    ],
  },
  {
    id: 'hot-bev',
    label: 'Hot Beverages',
    tamil: 'பானம்',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Filter coffee and chai',
    desc: 'Madurai’s celebrated brass-davarah degree filter coffee, tandoori chai, herbal sukku malli coffee, and hot country milk specials.',
    tags: ['Degree Coffee', 'Tandoori Chai', 'Herbal Brews'],
    items: [
      'Milk',
      'Kalkandu Milk',
      'Masala Milk',
      'Coffee',
      'Sukku Malli Coffee',
      'Tea',
      'Lemon Tea',
      'Ginger Tea',
      'Green Tea',
      'Horlicks',
      'Boost',
      'Black Coffee / Tea',
      'Tandoori Chai',
    ],
  },
  {
    id: 'juices',
    label: 'Fresh Juices & Refreshments',
    tamil: 'பழச்சாறு',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh fruit juices',
    desc: 'Famous Madurai Jigarthanda, tender coconut sarbath, freshly squeezed fruit juices, lassis, and handcrafted coolers.',
    tags: ['Madurai Jigarthanda', 'Fresh Squeezed', 'Cooling Sarbath'],
    items: [
      'Royal Falooda',
      'Fruit Salad',
      'Fruit Salad with Ice Cream',
      'Jigarthanda',
      'Apple Juice',
      'Mosambi Juice',
      'Chikoo (Sapota) Juice',
      'Orange Juice',
      'Pomegranate Juice',
      'Mango Juice',
      'Papaya Juice',
      'Mukkani Juice',
      'Muskmelon Juice',
      'Pineapple Juice',
      'Lime — Sweet / Salt',
      'Lime Soda',
      'Soda — Ginger / Nannari / Paneer',
      'Full Jar Soda',
      'Watermelon Sarbath',
      'Elaneer Sarbath',
      'Kulukki Sarbath',
      'Watermelon Juice',
      'Grape Juice',
      'Banana Juice',
      'Lassi — Sweet / Salt',
      'Flavoured Lassi — Mango / Banana / Strawberry / Nannari',
      'Buttermilk',
      'Butter Fruit Juice',
      'Carrot Juice',
      'Ginger Juice',
      'Dates Juice',
      'Fig Juice',
      'Strawberry Juice',
      'Kiwi Juice',
      'Amla Juice',
      'Beetroot Juice',
      'Rose Milk',
      'Cold Coffee',
      'TC Dry Fruits Juice',
      'Mojito — Lime Mint / Orange / Mango / Pineapple / Kiwi / Blueberry',
      'Seasonal Fruit Juices',
      'ABC Juice — Apple, Banana & Carrot',
    ],
  },
  {
    id: 'shakes',
    label: 'Milkshakes',
    tamil: 'ஷேக்',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80',
    alt: 'Thick creamy milkshakes',
    desc: 'Thick creamy milkshakes, classic fruit shakes with ice cream scoops, and chocolate indulgence shakes.',
    tags: ['Thick & Creamy', 'Choice of Ice Cream', 'Chilled Treats'],
    items: [
      'Vanilla Milkshake',
      'Strawberry Milkshake',
      'Chocolate Milkshake',
      'Pista Milkshake',
      'Butterscotch Milkshake',
      'Blackcurrant Milkshake',
      'Apple Milkshake with Ice Cream (Choice of Vanilla, Strawberry, or Chocolate)',
      'Banana Milkshake with Ice Cream (Choice of Vanilla, Strawberry, or Chocolate)',
      'Chikoo Milkshake with Ice Cream (Choice of Vanilla, Strawberry, or Chocolate)',
      'Mango Milkshake with Ice Cream (Choice of Vanilla, Strawberry, or Chocolate)',
      'Oreo Shake',
      'KitKat Shake',
      'Sharjah Shake',
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    tamil: 'இனிப்பு',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
    alt: 'Desserts and sweets',
    desc: 'Traditional Elaneer Payasam, warm Gulab Jamun with vanilla ice cream, and sizzling chocolate brownies.',
    tags: ['Traditional Sweets', 'Elaneer Payasam', 'The Perfect Finish'],
    items: [
      'Ice Cream Scoop',
      'Strawberry Lover',
      'Choco Delight',
      'Oreo Delight',
      'Banana Split',
      'Gulab Jamun with Ice Cream',
      'Sizzling Brownie with Ice Cream',
      'Fruit Custard',
      'Elaneer Payasam',
    ],
  },
];

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */
export default function Menu({ onNavigate }) {
  const [activeCat, setActiveCat] = useState(menuCategories[0].id);
  const [search, setSearch] = useState('');
  const panelRef = useRef(null);

  /* scroll to category banner whenever category changes */
  const selectCategory = useCallback((id) => {
    setActiveCat(id);
    setSearch('');
    setTimeout(() => {
      if (panelRef.current) {
        const offset = -110;
        if (window.__lenis) {
          window.__lenis.scrollTo(panelRef.current, { offset, duration: 0.9 });
        } else {
          const top = panelRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }, 40);
  }, []);

  /* filtered data */
  const q = search.trim().toLowerCase();
  const activeCatData = menuCategories.find((c) => c.id === activeCat);
  const displayItems = useMemo(() => {
    if (!q) return activeCatData?.items || [];
    // search across ALL categories
    return menuCategories.flatMap((c) =>
      c.items.filter((i) => i.toLowerCase().includes(q))
    );
  }, [q, activeCatData]);

  /* ensure items are immediately visible on tab switch / search */
  useEffect(() => {
    const reveals = document.querySelectorAll("#menu-browse [data-reveal], #menu-cta [data-reveal]");
    reveals.forEach((el) => el.classList.add("is-visible"));
  }, [activeCat, search]);

  return (
    <>
      {/* ════════════ 1. HERO ════════════ */}
      <section className="hero hero--dark-blue" id="menu-hero">
        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80"
            alt="Warm dining room at The Temple City, Madurai"
            fetchPriority="high"
            data-parallax="0.22"
          />
        </div>
        <div className="hero__veil"></div>

        

        <div className="hero__inner container">
          <p className="hero__eyebrow">
            <span className="tamil">மதுரை</span>
            <span className="dot" aria-hidden="true"></span>
            <span>THE TEMPLE CITY DINING EXPERIENCE</span>
          </p>
          <h1 className="hero__title">
            <span className="line"><span className="li">A Menu Rooted in <em>Tradition</em></span></span>
          </h1>
          <p className="hero__sub">
            Discover the authentic flavours of South India alongside a delicious selection of Indian specialities, Chinese favourites, refreshing beverages, and irresistible desserts. Every dish brings together our love for good food, quality ingredients, and memorable dining.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--solid magnetic"
              href="#menu-browse"
              onClick={(e) => onNavigate && onNavigate(e, '#menu-browse')}
            >
              <span>Browse the Menu</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn--ghost magnetic"
              href="#locations"
              onClick={(e) => onNavigate && onNavigate(e, '#locations')}
            >
              <span>Find a Restaurant</span>
            </a>
          </div>
        </div>

        <div className="hero__foot container">
          <span>
            <a
              href="#hero"
              onClick={(e) => onNavigate && onNavigate(e, '#hero')}
              style={{ color: 'var(--gold-soft)', textDecoration: 'none' }}
            >
              Home
            </a>
            {' / '}
            <span style={{ color: 'var(--cream)' }}>Menu</span>
          </span>
          <a
            className="scroll-cue"
            href="#menu-browse"
            aria-label="Scroll to menu"
            onClick={(e) => onNavigate && onNavigate(e, '#menu-browse')}
          >
            <span className="scroll-cue__line" aria-hidden="true"></span>
            <span>Scroll</span>
          </a>
        </div>
      </section>

      {/* ════════════ 2. MENU INTRO + BROWSE ════════════ */}
      <section className="section section--dark-blue" id="menu-browse">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">
              The Complete Menu <span className="tamil">உணவு பட்டியல்</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            Something Delicious for <em>Everyone</em>
          </h2>

          <p
            className="lede"
            data-reveal
            style={{ '--d': '.14s', marginTop: '1rem', marginBottom: '2.5rem' }}
          >
            From a comforting breakfast to a satisfying family meal, explore a menu filled with traditional favourites and contemporary choices. Browse our categories to discover the dishes that make every visit to Temple City special.
          </p>

          {/* ── Search Bar ── */}
          <div data-reveal style={{ '--d': '.18s', marginBottom: '1rem' }}>
            <label
              htmlFor="menuSearch"
              className="label"
              style={{ display: 'block', marginBottom: '.6rem' }}
            >
              Find a dish
            </label>
            <div className="menu-search-wrap">
              <input
                id="menuSearch"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search across all categories (e.g. Dosa, Idly, Paneer)…"
                className="menu-search"
                autoComplete="off"
              />
              {search && (
                <button
                  type="button"
                  className="menu-search-clear"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {q && (
              <p style={{ marginTop: '.6rem', fontSize: '.84rem', color: 'var(--gold-soft)' }}>
                Showing {displayItems.length} matching dish{displayItems.length === 1 ? '' : 'es'} across all categories
              </p>
            )}
          </div>

          {/* ── Category Tabs ── */}
          <div className="menu__tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab ${activeCat === cat.id && !q ? 'is-active' : ''}`}
                role="tab"
                aria-selected={activeCat === cat.id && !q}
                aria-controls="menu-panel"
                data-cat={cat.id}
                onClick={() => selectCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tamil">{cat.tamil}</span>
              </button>
            ))}
          </div>

          {/* ── Category Card Banner (Layout aligned with Home page Dishes) ── */}
          {!q && activeCatData && (
            <article
              key={activeCatData.id}
              className="menu-dish dish is-visible"
              style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
              ref={panelRef}
            >
              <div className="dish__media arch-wrap">
                <div className="arch">
                  <img
                    src={activeCatData.image}
                    alt={activeCatData.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="dish__body">
                <span className="dish__num">{activeCatData.label}</span>
                <h3 className="dish__name">
                  {activeCatData.label}
                  <span className="dish__tamil">{activeCatData.tamil}</span>
                </h3>
                <p className="dish__desc">
                  {activeCatData.desc}
                </p>
                <ul className="tags">
                  {activeCatData.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                  <li>{activeCatData.items.length} Dishes</li>
                </ul>
              </div>
            </article>
          )}

          {/* ── Items Panel ── */}
          <div
            className="menu__panel is-active"
            id="menu-panel"
            role="tabpanel"
            key={panelKey}
            ref={q ? panelRef : undefined}
          >
            {q && displayItems.length === 0 && (
              <p style={{ paddingBlock: '3rem', textAlign: 'center', color: 'rgba(244,234,218,.75)' }}>
                No dishes found matching "<strong>{search}</strong>". Try another keyword or browse categories above.
              </p>
            )}

            <ul>
              {displayItems.map((name, idx) => (
                <li key={idx} className="menu__item">
                  <div className="mi__head">
                    <h4 className="mi__name">{name}</h4>
                    <span className="mi__leader" aria-hidden="true"></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kitchen Notes ── */}
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
              Available across all Temple City restaurant locations in Madurai &amp; beyond.
            </p>
          </div>
        </div>
      </section>

      <div className="tile-band tile-band--dark-blue" aria-hidden="true"></div>

      {/* ════════════ 5. BRANCH AVAILABILITY NOTICE ════════════ */}
      <section className="section section--dark-blue" id="menu-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="sec-head" data-reveal style={{ justifyContent: 'center' }}>
            <span className="label">
              Visit Us <span className="tamil">எங்களை சந்தியுங்கள்</span>
            </span>
          </div>

          <h2
            className="display sec-title"
            data-reveal
            style={{ '--d': '.08s', marginInline: 'auto' }}
          >
            Your Favourite Flavours, at <em>Temple City</em>
          </h2>

          <p
            className="lede"
            data-reveal
            style={{
              '--d': '.14s',
              marginInline: 'auto',
              marginTop: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            Explore our menu and visit your nearest Temple City restaurant to enjoy a delicious dining experience. Menu availability and specialities may vary by location.
          </p>

          <div data-reveal style={{ '--d': '.2s' }}>
            <a
              className="btn btn--outline-gold magnetic"
              href="#locations"
              onClick={(e) => onNavigate && onNavigate(e, '#locations')}
            >
              <span>Find a Restaurant</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="kolam-rule" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="8" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="32" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="8" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="32" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <path d="M20 3 Q26 13 20 20 Q14 27 20 37 Q26 27 20 20 Q14 13 20 3Z" />
          <path d="M3 20 Q13 26 20 20 Q27 14 37 20 Q27 26 20 20 Q13 14 3 20Z" />
        </svg>
      </div>
    </>
  );
}
