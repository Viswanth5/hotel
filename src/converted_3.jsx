<section className="hero" id="hero">
    <div className="hero__media">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&amp;fit=crop&amp;w=2200&amp;q=80"
        alt="Warm, low-lit dining room at Marutham, Madurai" fetchpriority="high" data-parallax="0.22" />
    </div>
    <div className="hero__veil"></div>

    {/* Gopuram silhouette */}
    <svg className="hero__gopuram" viewBox="0 0 640 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square">
        {/* base plinth */}
        <rect x="150" y="172" width="340" height="20"/>
        <line x1="150" y1="182" x2="490" y2="182"/>
        {/* tier 1 */}
        <path d="M168 172 L472 172 L456 152 L184 152 Z"/>
        <path d="M184 152 L456 152 L440 132 L200 132 Z"/>
        <path d="M200 132 L440 132 L424 113 L216 113 Z"/>
        <path d="M216 113 L424 113 L408 95 L232 95 Z"/>
        <path d="M232 95 L408 95 L392 78 L248 78 Z"/>
        <path d="M248 78 L392 78 L376 62 L264 62 Z"/>
        <path d="M264 62 L376 62 L360 47 L280 47 Z"/>
        <path d="M280 47 L360 47 L344 33 L296 33 Z"/>
        <path d="M296 33 L344 33 L330 21 L310 21 Z"/>
        <path d="M310 21 L330 21 L320 12 Z"/>
        {/* finial */}
        <line x1="320" y1="12" x2="320" y2="3"/>
        <circle cx="320" cy="2.5" r="2.4"/>
        {/* carved niches on tiers */}
        <rect x="300" y="132" width="40" height="20"/>
        <rect x="306" y="95" width="28" height="18"/>
        <rect x="311" y="62" width="18" height="16"/>
        {/* side shrines */}
        <rect x="100" y="142" width="30" height="50"/>
        <path d="M100 142 L130 142 L124 128 L106 128 Z"/>
        <line x1="115" y1="128" x2="115" y2="120"/>
        <circle cx="115" cy="118" r="1.8"/>
        <rect x="510" y="142" width="30" height="50"/>
        <path d="M510 142 L540 142 L534 128 L516 128 Z"/>
        <line x1="525" y1="128" x2="525" y2="120"/>
        <circle cx="525" cy="118" r="1.8"/>
        {/* outer walls */}
        <line x1="60" y1="192" x2="580" y2="192"/>
        <rect x="60" y="192" width="520" height="8"/>
        {/* entrance arch */}
        <path d="M286 172 L286 150 Q320 128 354 150 L354 172"/>
      </g>
    </svg>

    <div className="hero__inner container">
      <p className="hero__eyebrow">
        <span className="tamil">மதுரை</span>
        <span className="dot" aria-hidden="true"></span>
        <span>Vegetal Kitchen · Est. 1994</span>
      </p>
      <h1 className="hero__title">
        <span className="line"><span className="li">Where the <em>temple town</em></span></span>
        <span className="line"><span className="li">becomes the plate</span></span>
      </h1>
      <p className="hero__sub">
        A nine-course tasting menu composed each morning from jasmine-lined
        farms along the Vaigai. Nothing out of season. Nothing imitated.
      </p>
      <div className="hero__actions">
        <a className="btn btn--solid magnetic" href="#reserve">
          <span>Reserve a Table</span>
          <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
        <a className="btn btn--ghost magnetic" href="#menu"><span>Explore the Menu</span></a>
      </div>
    </div>

    <div className="hero__foot container">
      <span>Seasonal Menu No. 12 — Aadi</span>
      <a className="scroll-cue" href="#story" aria-label="Scroll to our story">
        <span className="scroll-cue__line" aria-hidden="true"></span>
        <span>Scroll</span>
      </a>
    </div>
  </section>