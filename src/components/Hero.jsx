import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';
import logoWhite from '../assets/temple-city-logo-white.png';

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=75&w=1200',
    srcset:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=75&w=800 800w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=75&w=1200 1200w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=75&w=1600 1600w',
    alt: 'The Temple City dining room glowing under warm evening light',
    posDesktop: '50% 62%',
    posMobile: '58% 55%',
    tone: 'deep',
    caption: 'The dining room at dusk',
    numeral: '௧',
    kickerTamil: 'தென்னிந்திய உணவகம்',
    kickerPlace: 'Madurai, Tamil Nadu',
    headlineLine1: 'Where South India',
    headlineLine2: 'Comes Together',
    litany: ['Authentic flavours', 'Exceptional hospitality', 'Memorable dining'],
    fallbacks: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=75&w=1200',
      'https://picsum.photos/seed/tc-room/1200/800.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=75&w=1200',
    srcset:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=75&w=800 800w, https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=75&w=1200 1200w, https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=75&w=1600 1600w',
    alt: 'A crisp golden dosa served at Temple City',
    posDesktop: '50% 45%',
    posMobile: '62% 40%',
    tone: 'soft',
    caption: 'Stone-ground batter, ghee-roasted crisp',
    numeral: '௨',
    kickerTamil: 'பாரம்பரிய சுவை',
    kickerPlace: 'Ghee Roast & Crispy Dosas',
    headlineLine1: 'Golden Batter,',
    headlineLine2: 'Pure Ghee Fragrance',
    litany: ['Stone-ground heritage', 'Slow fermented', 'Freshly roasted crisp'],
    fallbacks: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=75&w=1200',
      'https://picsum.photos/seed/tc-dosa/1200/800.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=75&w=1200',
    srcset:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=75&w=800 800w, https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=75&w=1200 1200w, https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=75&w=1600 1600w',
    alt: 'A procession of South Indian dishes laid across the table',
    posDesktop: '50% 55%',
    posMobile: '55% 50%',
    tone: 'soft',
    caption: 'Pepper, flame and patience',
    numeral: '௩',
    kickerTamil: 'நிகரற்ற விருந்து',
    kickerPlace: 'Grand South Indian Feast',
    headlineLine1: 'Recipes Passed Down',
    headlineLine2: 'Through Generations',
    litany: ['Pepper, flame & patience', 'Rich heritage masalas', 'Traditional spices'],
    fallbacks: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=75&w=1200',
      'https://picsum.photos/seed/tc-spread/1200/800.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=75&w=1200',
    srcset:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=75&w=800 800w, https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=75&w=1200 1200w, https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=75&w=1600 1600w',
    alt: 'Warm wood and soft lamplight in the Temple City dining room',
    posDesktop: '50% 60%',
    posMobile: '50% 55%',
    tone: 'deep',
    caption: 'Lamplight and long conversations',
    numeral: '௪',
    kickerTamil: 'இதமான உபசரிப்பு',
    kickerPlace: 'Warmth of Madurai',
    headlineLine1: 'Gather Around',
    headlineLine2: 'Warm Memories',
    litany: ['Lamplight conversations', 'Welcoming smiles', 'Unmatched comfort'],
    fallbacks: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=75&w=1200',
      'https://picsum.photos/seed/tc-evening/1200/800.jpg',
    ],
  },
];

const DURATION = 5000;

export default function Hero({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 900px)').matches : false
  );
  const [sources, setSources] = useState(() =>
    SLIDES.map((s) => ({ src: s.src, srcset: s.srcset, fallbackStep: 0 }))
  );

  const heroRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0 });

  // Mobile detection listener
  useEffect(() => {
    const mQuery = window.matchMedia('(max-width: 900px)');
    const handleMChange = (e) => setIsMobile(e.matches);
    mQuery.addEventListener('change', handleMChange);

    return () => {
      mQuery.removeEventListener('change', handleMChange);
    };
  }, []);

  // Slide navigation
  const goTo = useCallback((targetIndex) => {
    const count = SLIDES.length;
    setCurrentIndex(((targetIndex % count) + count) % count);
  }, []);

  // Guaranteed 5-second automatic carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, []);

  // Entrance animation - instant & smooth
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setEntered(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        goTo(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        goTo(currentIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goTo]);

  // Image error fallback
  const handleImageError = (index) => {
    setSources((prevSources) => {
      const current = prevSources[index];
      const slide = SLIDES[index];
      if (current.fallbackStep < slide.fallbacks.length) {
        const nextStep = current.fallbackStep + 1;
        const newSources = [...prevSources];
        newSources[index] = {
          src: slide.fallbacks[current.fallbackStep],
          srcset: '',
          fallbackStep: nextStep,
        };
        return newSources;
      }
      return prevSources;
    });
  };

  // Pointer drag/swipe handling on stage
  const handlePointerDown = (e) => {
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
    };
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      goTo(currentIndex + (dx < 0 ? 1 : -1));
    }
  };

  const handlePointerCancel = () => {
    dragRef.current.dragging = false;
  };

  // CTA navigation helpers
  const handleDiningClick = (e) => {
    if (onNavigate) {
      onNavigate(e, '#menu');
    }
  };

  const handleLocationsClick = (e) => {
    if (onNavigate) {
      onNavigate(e, '#locations');
    }
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <section
      className="tc-hero"
      id="tcHero"
      ref={heroRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Temple City — dining highlights"
      {...(entered ? { 'data-entered': '' } : {})}
    >
      {/* ============ full-bleed photographic stage ============ */}
      <div
        className="tc-stage"
        id="tcStage"
        data-tone={activeSlide.tone}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {SLIDES.map((slide, i) => {
          const isActive = i === currentIndex;
          const pos = isMobile ? slide.posMobile : slide.posDesktop;
          const source = sources[i];

          return (
            <figure
              key={slide.src}
              className={`tc-slide ${isActive ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
            >
              <img
                src={source.src}
                srcSet={source.srcset || undefined}
                sizes="100vw"
                alt={slide.alt}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={{ objectPosition: pos }}
                onError={() => handleImageError(i)}
              />
            </figure>
          );
        })}

        <div className="tc-scrim" aria-hidden="true" />
      </div>

      {/* ============ the vertical welcome thread ============ */}
      <div className="tc-thread tc-fade" style={{ '--d': '1.5s' }} aria-hidden="true">
        <i />
        <span lang="ta">வணக்கம்</span>
      </div>

      {/* ============ the threshold — editorial block ============ */}
      <div className="tc-copy">
        <div key={currentIndex} className="tc-copy-content">
          <p className="tc-kicker">
            <svg
              className="tc-diya"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="16" cy="3.4" r="1.3" fill="#c8452c" stroke="none" />
              <path d="M12 6.4c2.1 2.6 3.1 4.3 3.1 5.7A3.1 3.1 0 0 1 12 15.2a3.1 3.1 0 0 1-3.1-3.1c0-1.4 1-3.1 3.1-5.7Z" />
              <path d="M12 15.2v2.3" />
              <path d="M3.5 17.5h17c0 2.6-2.4 4.3-5.6 4.3h-5.8c-3.2 0-5.6-1.7-5.6-4.3Z" />
            </svg>
            <i aria-hidden="true" />
            <span lang="ta">{activeSlide.kickerTamil}</span>
            <span className="tc-kicker-sep" aria-hidden="true">·</span>
            <span className="tc-kicker-place">{activeSlide.kickerPlace}</span>
          </p>

          <h1 className="tc-headline">
            <span className="tc-line">
              <span className="tc-line-in">{activeSlide.headlineLine1}</span>
            </span>
            <span className="tc-line">
              <span className="tc-line-in">
                {activeSlide.headlineLine2}
                <span className="tc-dot">.</span>
              </span>
            </span>
          </h1>

          <p className="tc-litany">
            {activeSlide.litany.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <i aria-hidden="true" />}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="tc-ctas tc-fade" style={{ '--d': '.4s' }}>
          <a className="tc-btn" href="#dining" onClick={handleDiningClick}>
            Explore Our Dining
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M0.5 5h13M9.8 1.2 13.6 5 9.8 8.8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a className="tc-link" href="#locations" onClick={handleLocationsClick}>
            Discover Our Locations
          </a>
        </div>
      </div>

      {/* ============ bottom rail ============ */}
      <div className="tc-rail tc-fade" style={{ '--d': '.5s' }}>
        <p className="tc-caption" aria-hidden="true">
          {SLIDES.map((slide, i) => (
            <span key={slide.caption} className={i === currentIndex ? 'is-active' : ''}>
              {slide.caption}
            </span>
          ))}
        </p>

        <div className="tc-controls">
          <div className="tc-hero-brand" aria-label="Temple City — Temple of Hotels">
            <img
              src={logoWhite}
              alt="Temple City — Temple of Hotels"
              className="tc-hero-brand__img"
              width="824"
              height="223"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="tc-nums">
            {SLIDES.map((slide, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={slide.numeral}
                  className={`tc-num ${isActive ? 'is-active' : ''}`}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive ? 'true' : 'false'}
                  onClick={() => goTo(i)}
                >
                  {slide.numeral}
                  <i key={`${i}-${currentIndex}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="tc-grain" aria-hidden="true" />
      <div className="tc-veil" aria-hidden="true" />
      <p className="tc-sr" id="tcStatus" aria-live="polite">
        Slide {currentIndex + 1} of {SLIDES.length}: {activeSlide.caption}
      </p>
    </section>
  );
}
