import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const body = document.body;

    const releasePage = () => {
      body.classList.remove('is-locked');
      body.classList.add('is-ready');
      setIsDone(true);
      setTimeout(() => {
        setIsRemoved(true);
      }, 1100);
    };

    if (reduceMotion) {
      releasePage();
      return;
    }

    const timer1 = setTimeout(releasePage, 1550);
    const timer2 = setTimeout(() => {
      if (document.body.classList.contains('is-locked')) {
        releasePage();
      }
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`preloader ${isDone ? 'is-done' : ''}`}
      id="preloader"
      aria-hidden="true"
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
