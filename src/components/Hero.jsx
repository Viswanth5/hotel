import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1800',
    srcset:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000 1000w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1800 1800w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2400 2400w',
    alt: 'The Temple City dining room glowing under warm evening light',
    posDesktop: '50% 62%',
    posMobile: '58% 55%',
    tone: 'deep',
    caption: 'The dining room at dusk',
    numeral: '௧',
    fallbacks: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1800',
      'https://picsum.photos/seed/tc-room/1800/1100.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1800',
    srcset:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1000 1000w, https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1800 1800w, https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=2400 2400w',
    alt: 'A crisp golden dosa served at Temple City',
    posDesktop: '50% 45%',
    posMobile: '62% 40%',
    tone: 'soft',
    caption: 'Stone-ground batter, ghee-roasted crisp',
    numeral: '௨',
    fallbacks: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1800',
      'https://picsum.photos/seed/tc-dosa/1800/1100.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1800',
    srcset:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1000 1000w, https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1800 1800w, https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=2400 2400w',
    alt: 'A procession of South Indian dishes laid across the table',
    posDesktop: '50% 55%',
    posMobile: '55% 50%',
    tone: 'soft',
    caption: 'Pepper, flame and patience',
    numeral: '௩',
    fallbacks: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1800',
      'https://picsum.photos/seed/tc-spread/1800/1100.jpg',
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1800',
    srcset:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000 1000w, https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1800 1800w, https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2400 2400w',
    alt: 'Warm wood and soft lamplight in the Temple City dining room',
    posDesktop: '50% 60%',
    posMobile: '50% 55%',
    tone: 'deep',
    caption: 'Lamplight and long conversations',
    numeral: '௪',
    fallbacks: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1800',
      'https://picsum.photos/seed/tc-evening/1800/1100.jpg',
    ],
  },
];

const DURATION = 6000;

export default function Hero({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [sources, setSources] = useState(() =>
    SLIDES.map((s) => ({ src: s.src, srcset: s.srcset, fallbackStep: 0 }))
  );

  const heroRef = useRef(null);
  const timerRef = useRef(null);
  const isStartedRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0 });

  isPausedRef.current = isPaused;

  // Reduced motion & mobile detection
  useEffect(() => {
    const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(rmQuery.matches);
    const handleRmChange = (e) => setReduceMotion(e.matches);
    rmQuery.addEventListener('change', handleRmChange);

    const mQuery = window.matchMedia('(max-width: 900px)');
    setIsMobile(mQuery.matches);
    const handleMChange = (e) => setIsMobile(e.matches);
    mQuery.addEventListener('change', handleMChange);

    return () => {
      rmQuery.removeEventListener('change', handleRmChange);
      mQuery.removeEventListener('change', handleMChange);
    };
  }, []);

  // Slide navigation
  const goTo = useCallback((targetIndex) => {
    setCurrentIndex((prev) => {
      const count = SLIDES.length;
      return ((targetIndex % count) + count) % count;
    });
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (reduceMotion || isPaused || !entered) return;

    timerRef.current = setTimeout(() => {
      goTo(currentIndex + 1);
    }, DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, entered, reduceMotion, goTo]);

  // Entrance animation
  useEffect(() => {
    if (reduceMotion) {
      setEntered(true);
      isStartedRef.current = true;
      return;
    }

    const leadImg = new Image();
    leadImg.src = SLIDES[0].src;

    const fontReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const imgReady = leadImg.decode ? leadImg.decode() : Promise.resolve();

    Promise.race([
      Promise.allSettled([fontReady, imgReady]),
      new Promise((resolve) => setTimeout(resolve, 2400)),
    ]).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEntered(true);
          isStartedRef.current = true;
        });
      });
    });
  }, [reduceMotion]);

  // Pause on window blur / tab switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!heroRef.current?.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
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
        <p className="tc-kicker tc-fade" style={{ '--d': '.6s' }}>
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
          <span lang="ta">தென்னிந்திய உணவகம்</span>
          <span className="tc-kicker-sep" aria-hidden="true">·</span>
          <span className="tc-kicker-place">Madurai, Tamil Nadu</span>
        </p>

        <h1 className="tc-headline">
          <span className="tc-line">
            <span className="tc-line-in">Where South India</span>
          </span>
          <span className="tc-line">
            <span className="tc-line-in">
              Comes <em>Together</em>
              <span className="tc-dot">.</span>
            </span>
          </span>
        </h1>

        <p className="tc-litany tc-fade" style={{ '--d': '.85s' }}>
          Authentic flavours <i aria-hidden="true" /> Exceptional hospitality <i aria-hidden="true" />{' '}
          Memorable dining
        </p>

        <div className="tc-ctas tc-fade" style={{ '--d': '1s' }}>
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
      <div className="tc-rail tc-fade" style={{ '--d': '1.2s' }}>
        <p className="tc-caption" aria-hidden="true">
          {SLIDES.map((slide, i) => (
            <span key={slide.caption} className={i === currentIndex ? 'is-active' : ''}>
              {slide.caption}
            </span>
          ))}
        </p>

        <div className="tc-controls">
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
                  <i key={`${i}-${currentIndex}-${isPaused}`} />
                </button>
              );
            })}
          </div>

          <div className="tc-arrows">
            <button
              className="tc-arrow"
              type="button"
              data-dir="-1"
              aria-label="Previous slide"
              onClick={() => goTo(currentIndex - 1)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M11.5 3.5 6 9l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="tc-arrow"
              type="button"
              data-dir="1"
              aria-label="Next slide"
              onClick={() => goTo(currentIndex + 1)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6.5 3.5 12 9l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
