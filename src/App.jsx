import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import BrandStats from './components/BrandStats';
import SignatureFlavours from './components/SignatureFlavours';
import Locations from './components/Locations';
import MoreThanDining from './components/MoreThanDining';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Gallery, { galleryItems } from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Menu from './components/Menu';

export default function App() {
  const [isStuck, setIsStuck] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 1. Lenis smooth scrolling initialization
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.09,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // 2. Navigation smooth scroll helper
  const handleNavigate = useCallback((e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!targetId || targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    setIsMobileMenuOpen(false);
    document.body.classList.remove('is-locked');
    if (window.__lenis) window.__lenis.start();

    const offset = -70;
    if (window.__lenis) {
      window.__lenis.scrollTo(targetEl, { offset, duration: 1.35 });
    } else {
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    window.history.replaceState(null, '', targetId);
  }, []);

  // 3. Scroll tracking: Progress bar, Nav stuck state, Parallax
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    const updateScrollUI = () => {
      const y = window.pageYOffset;
      setIsStuck(y > 60);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(1, y / docH) : 0;
      setScrollProgress(p);

      if (!reduceMotion) {
        const parallaxEls = document.querySelectorAll('[data-parallax]');
        const vh = window.innerHeight;
        for (let i = 0; i < parallaxEls.length; i++) {
          const el = parallaxEls[i];
          const speed = parseFloat(el.dataset.parallax) || 0.12;
          const r = el.getBoundingClientRect();
          if (r.bottom < -vh * 0.4 || r.top > vh * 1.4) continue;
          const mid = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${(mid * speed).toFixed(2)}px,0)`;
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateScrollUI();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollUI();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // 4. Scroll reveals (IntersectionObserver + Scroll fallback)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('[data-reveal], [data-mask], .gal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: [0, 0.05, 0.1], rootMargin: '80px 0px 80px 0px' }
    );

    targets.forEach((el) => {
      if (el.dataset.d) el.style.setProperty('--d', el.dataset.d);
      io.observe(el);
    });

    const checkVisibility = () => {
      const vh = window.innerHeight;
      targets.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh + 120 && rect.bottom > -120) {
            el.classList.add('is-visible');
          }
        }
      });
    };

    checkVisibility();
    const timer = setTimeout(checkVisibility, 600);
    const timer2 = setTimeout(checkVisibility, 1800);
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      io.disconnect();
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  // 5. Scroll spy for active section
  useEffect(() => {
    const sectionIds = ['hero', 'stats', 'flavours', 'locations', 'experiences', 'story', 'reviews', 'milestones', 'cta'];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!('IntersectionObserver' in window) || !elements.length) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => spyObserver.observe(el));
    return () => spyObserver.disconnect();
  }, []);

  // 6. Magnetic buttons effect
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !isFinePointer) return;

    const elements = document.querySelectorAll('.magnetic');
    const cleanups = [];

    elements.forEach((el) => {
      let raf = null;
      el.style.transition = 'transform .45s cubic-bezier(.22,1,.36,1)';

      const onMouseMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.16;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${x.toFixed(2)}px,${y.toFixed(2)}px)`;
        });
      };

      const onMouseLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = '';
      };

      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // 7. Image fallback handler
  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      img.addEventListener('error', () => img.classList.add('img-fallback'), { once: true });
    });
  }, []);

  // 8. Mobile menu toggling & Escape key handler
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('is-locked');
        if (window.__lenis) window.__lenis.stop();
      } else {
        document.body.classList.remove('is-locked');
        if (window.__lenis) window.__lenis.start();
      }
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          document.body.classList.remove('is-locked');
          if (window.__lenis) window.__lenis.start();
        }
        if (isMenuOpen) {
          setIsMenuOpen(false);
          document.body.classList.remove('is-locked');
          if (window.__lenis) window.__lenis.start();
        }
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isMenuOpen, lightboxIndex]);

  return (
    <>
      <div
        className="progress"
        id="progress"
        style={{ transform: `scaleX(${scrollProgress.toFixed(4)})` }}
        aria-hidden="true"
      />
      <div className="grain" aria-hidden="true" />

      <Preloader />

      <Navbar
        isStuck={isStuck}
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
        onNavigate={handleNavigate}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onNavigate={handleNavigate}
      />

      <main id="main">
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Brand Statistics */}
        <BrandStats />

        {/* 3. Signature Flavours */}
        <SignatureFlavours onOpenFullMenu={() => setIsMenuOpen(true)} />

        {/* 4. Find Your Nearest Restaurant */}
        <Locations />

        {/* 5. More Than Dining */}
        <MoreThanDining />

        {/* 6. Our Story & Heritage */}
        <Story onNavigate={handleNavigate} />

        {/* 7. What Our Guests Say */}
        <Testimonials />

        {/* 8. Moments & Milestones */}
        <Gallery
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
          onNavigate={handleNavigate}
        />

        {/* 9. Closing Call to Action */}
        <Reservation onNavigate={handleNavigate} />
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={handleNavigate} />

      <Lightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex || 0}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % galleryItems.length)
        }
        items={galleryItems}
      />

      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
