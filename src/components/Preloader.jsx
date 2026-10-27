import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Ensure body is never locked or frozen on page load
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-ready');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasVisited = sessionStorage.getItem('tc_visited');

    const releasePage = () => {
      setIsDone(true);
      sessionStorage.setItem('tc_visited', '1');
      setTimeout(() => {
        setIsRemoved(true);
      }, 400);
    };

    if (reduceMotion || hasVisited) {
      releasePage();
      return;
    }

    const timer = setTimeout(releasePage, 350);
    return () => clearTimeout(timer);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`preloader ${isDone ? 'is-done' : ''}`}
      id="preloader"
      aria-hidden="true"
      style={isDone ? { pointerEvents: 'none' } : undefined}
    >
      <div className="preloader__inner">
        <div className="preloader__mark">THE TEMPLE CITY</div>
        <span className="preloader__tamil">கோவில் நகரம்</span>
        <div className="preloader__bar"><i></i></div>
        <div className="preloader__sub">City of Hotels — Madurai</div>
      </div>
    </div>
  );
}
