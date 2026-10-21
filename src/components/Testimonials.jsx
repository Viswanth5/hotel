import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const quotes = [
    {
      text: 'The best vegetarian dining destination in Madurai. The ghee podi dosa, authentic traditional meals, and filter coffee are unmatched in taste and consistency.',
      author: 'Suresh Kumar',
      outlet: 'Madurai Resident · 5.0 ★ Google Review',
    },
    {
      text: 'Temple City has been our family’s go-to destination for over a decade. Genuine warmth, spotless hospitality, and delicious authentic flavours every single time.',
      author: 'Lakshmi Narayanan',
      outlet: 'Family Visitor · 5.0 ★ Customer Feedback',
    },
    {
      text: 'From the comforting breakfast classics to Jigarthanda and evening snacks, every item celebrates true Madurai tradition and culinary pride.',
      author: 'Anand Raghavan',
      outlet: 'Verified Diner · 5.0 ★ TripAdvisor',
    },
  ];

  const startTimer = () => {
    stopTimer();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 7500);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();

    const handleVisibility = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    startTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    startTimer();
  };

  const handleSelect = (idx) => {
    setCurrentIndex(idx);
    startTimer();
  };

  return (
    <>
      <section className="section" id="reviews">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">07 — What Our Guests Say <span className="tamil">விருந்தினர் கருத்துக்கள்</span></span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s', textAlign: 'center', marginInline: 'auto' }}>
            Experiences Worth <em>Sharing</em>
          </h2>

          <p className="lede" data-reveal style={{ '--d': '.16s', textAlign: 'center', marginInline: 'auto', marginBottom: '1.5rem' }}>
            Every visit is an opportunity to create a memorable experience. Discover what our guests and visitors have shared about their time with Temple City.
          </p>

          <div
            className="quotes"
            id="quotes"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
            onFocus={stopTimer}
          >
            {quotes.map((q, idx) => (
              <blockquote
                key={idx}
                className={`quote ${currentIndex === idx ? 'is-active' : ''}`}
              >
                <span className="quote__mark" aria-hidden="true">“</span>
                <p>{q.text}</p>
                <footer>
                  <strong>{q.author}</strong>
                  {q.outlet}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="quote-ctl">
            <button
              className="quote-arrow"
              id="quotePrev"
              aria-label="Previous testimonial"
              onClick={handlePrev}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
            <div className="quote-dots" id="quoteDots" role="tablist" aria-label="Testimonials">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  className={currentIndex === idx ? 'is-active' : ''}
                  aria-selected={currentIndex === idx}
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => handleSelect(idx)}
                />
              ))}
            </div>
            <button
              className="quote-arrow"
              id="quoteNext"
              aria-label="Next testimonial"
              onClick={handleNext}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }} data-reveal>
            <a
              className="btn btn--dark magnetic"
              href="https://maps.google.com/?q=Hotel+Temple+City+Reviews+Madurai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Read More Reviews</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="tile-band" aria-hidden="true"></div>
    </>
  );
}
