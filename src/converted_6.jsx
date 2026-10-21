<section className="section section--wine" id="menu">
    <div className="container">
      <div className="sec-head" data-reveal>
        <span className="label">03 — The Menu <span className="tamil">உணவு பட்டியல்</span></span>
        <span className="rule" aria-hidden="true"></span>
      </div>

      <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
        Written after the <em>harvest</em>.
      </h2>

      <div className="menu__tabs" role="tablist" aria-label="Menu categories">
        <button className="tab is-active" role="tab" aria-selected="true" aria-controls="panel-prelude" data-cat="prelude">
          <span>Prelude</span><span className="tamil">துவக்கம்</span>
        </button>
        <button className="tab" role="tab" aria-selected="false" aria-controls="panel-fire" data-cat="fire">
          <span>From the Fire</span><span className="tamil">நெருப்பு</span>
        </button>
        <button className="tab" role="tab" aria-selected="false" aria-controls="panel-grain" data-cat="grain">
          <span>Rice &amp; Lentils</span><span className="tamil">சாதம்</span>
        </button>
        <button className="tab" role="tab" aria-selected="false" aria-controls="panel-sweet" data-cat="sweet">
          <span>Sweet</span><span className="tamil">இனிப்பு</span>
        </button>
      </div>

      {/* PRELUDE */}
      <div className="menu__panel is-active" id="panel-prelude" data-panel="prelude" role="tabpanel">
        <ul>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Vazhaipoo Vada <span className="tamil">வாழைப்பூ</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹650</span>
            </div>
            <p className="mi__desc">Banana blossom fritter, sambar emulsion, curry leaf oil.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Kambu &amp; Cucumber <span className="tamil">கம்பு</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹600</span>
            </div>
            <p className="mi__desc">Pearl millet, cucumber granita, mint, lime.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Beetroot &amp; Ellu <span className="tamil">எள்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹680</span>
            </div>
            <p className="mi__desc">Fermented beetroot, black sesame, horseradish snow.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Sundakkai Velouté <span className="tamil">சுண்டைக்காய்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹580</span>
            </div>
            <p className="mi__desc">Turkey berry poured at the table, black pepper, coconut cream.</p>
          </li>
        </ul>
      </div>

      {/* FIRE */}
      <div className="menu__panel" id="panel-fire" data-panel="fire" role="tabpanel">
        <ul>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Kuzhi Paniyaram <span className="tamil">குழி பணியாரம்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹850</span>
            </div>
            <p className="mi__desc">Cast iron sear, coconut chutney emulsion, curry leaf oil.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Charred Vaazhaithandu <span className="tamil">வாழைத்தண்டு</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹780</span>
            </div>
            <p className="mi__desc">Banana stem over coconut husk embers, sunflower miso, sesame.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Smoked Kathirikai <span className="tamil">கத்தரிக்காய்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹820</span>
            </div>
            <p className="mi__desc">Aubergine, sesame tahini, pomegranate, burnt chilli, mint.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Wood-Fired Murungai <span className="tamil">முருங்கை</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹760</span>
            </div>
            <p className="mi__desc">Drumstick over wood fire, almond romesco, curry leaf crumb.</p>
          </li>
        </ul>
      </div>

      {/* GRAIN */}
      <div className="menu__panel" id="panel-grain" data-panel="grain" role="tabpanel">
        <ul>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Kathal Biryani <span className="tamil">கதலி பிரியாணி</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹1,050</span>
            </div>
            <p className="mi__desc">Young jackfruit, seeraga samba, coconut kuruma, fried shallots.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Kambu Risotto <span className="tamil">கம்பு</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹880</span>
            </div>
            <p className="mi__desc">Pearl millet, pumpkin seed, sage, aged vegetable broth.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Saffron Semiya <span className="tamil">செமியா</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹920</span>
            </div>
            <p className="mi__desc">Kashmiri saffron, preserved lemon, baby fennel, fennel pollen.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Karamani Cassoulet <span className="tamil">காராமணி</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹840</span>
            </div>
            <p className="mi__desc">Black-eyed peas slow-cooked, tomato confit, garlic crumb.</p>
          </li>
        </ul>
      </div>

      {/* SWEET */}
      <div className="menu__panel" id="panel-sweet" data-panel="sweet" role="tabpanel">
        <ul>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Jigarthanda <span className="tamil">ஜிகர்தண்டா</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹450</span>
            </div>
            <p className="mi__desc">Almond gum, nannari syrup, coconut-milk ice, sarsaparilla.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Dark Chocolate &amp; Gingelly <span className="tamil">எள்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹480</span>
            </div>
            <p className="mi__desc">Seventy percent cremeux, first-press sesame oil, sea salt.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Filter Coffee Crème <span className="tamil">பில்டர் காபி</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹420</span>
            </div>
            <p className="mi__desc">Chicory filter coffee, jaggery, cardamom, coconut cream.</p>
          </li>
          <li className="menu__item">
            <div className="mi__head">
              <h4 className="mi__name">Elaneer Payasam <span className="tamil">இளநீர் பாயாசம்</span></h4>
              <span className="mi__leader" aria-hidden="true"></span>
              <span className="mi__price">₹440</span>
            </div>
            <p className="mi__desc">Tender coconut, palm sugar, cardamom, cashew praline.</p>
          </li>
        </ul>
      </div>

      <div className="menu__note">
        <p data-reveal>
          <strong>Nine-course tasting menu</strong>
          ₹4,500 per guest · neer (pairing) ₹2,200 · non-alcoholic pairing ₹1,400
        </p>
        <p data-reveal style={{ '--d': '.08s' }}>
          <strong>Dietary adaptations</strong>
          Vegan, gluten-free and allergen-free versions are prepared with 48 hours'
          notice. Please tell us when you book.
        </p>
        <p data-reveal style={{ '--d': '.16s' }}>
          <strong>Prices</strong>
          All prices in rupees, inclusive of service. The menu changes with the
          harvest, sometimes daily.
        </p>
      </div>
    </div>
  </section>