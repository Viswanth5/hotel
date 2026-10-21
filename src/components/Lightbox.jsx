import React, { useEffect, useRef } from 'react';

export default function Lightbox({
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  items = [],
}) {
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastFocusedRef.current = document.activeElement;
      document.body.classList.add('is-locked');
      if (window.__lenis) window.__lenis.stop();
      if (closeBtnRef.current) closeBtnRef.current.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'ArrowLeft') {
          onPrev();
        } else if (e.key === 'ArrowRight') {
          onNext();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.classList.remove('is-locked');
        if (window.__lenis) window.__lenis.start();
        if (lastFocusedRef.current && lastFocusedRef.current.focus) {
          lastFocusedRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, onPrev, onNext]);

  const currentItem = items[currentIndex] || {};

  return (
    <div
      className={`lightbox ${isOpen ? 'is-open' : ''}`}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onClick={(e) => {
        if (e.target.id === 'lightbox') onClose();
      }}
    >
      <button
        ref={closeBtnRef}
        className="lb-btn lb-close"
        id="lbClose"
        aria-label="Close viewer"
        onClick={onClose}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <button
        className="lb-btn lb-prev"
        id="lbPrev"
        aria-label="Previous image"
        onClick={onPrev}
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
          <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <img
        id="lbImage"
        src={currentItem.src || ''}
        alt={currentItem.alt || ''}
      />

      <button
        className="lb-btn lb-next"
        id="lbNext"
        aria-label="Next image"
        onClick={onNext}
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
          <path d="M1 5h12M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <span className="lb-count" id="lbCount">
        {items.length ? `${currentIndex + 1} / ${items.length}` : ''}
      </span>
    </div>
  );
}
