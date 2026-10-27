import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import LocationsPage from './components/LocationsPage';

export default function App() {
  const [isStuck, setIsStuck] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    const h = typeof window !== 'undefined' ? window.location.hash : '';
    if (h === '#menu') return 'menu';
    if (h === '#locations' || h.startsWith('#locations')) return 'locations';
    return '';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const h = typeof window !== 'undefined' ? window.location.hash : '';
    if (h === '#menu') return 'menu';
    if (h === '#locations' || h.startsWith('#locations')) return 'locations';
    return 'home';
  });
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isStuckRef = useRef(false);

  // 1. Lenis smooth scrolling initialization
  useEffect(() => {
    // Ensure body is never locked on mount
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-ready');

    const progressEl = document.getElementById('progress');

    const updateScrollState = (y, progress) => {
      const stuck = y > 60;
      if (isStuckRef.current !== stuck) {
        isStuckRef.current = stuck;
        setIsStuck(stuck);
      }
      if (progressEl) {
        progressEl.style.transform = `scaleX(${progress})`;
      }
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const handleNativeScroll = () => {
        const y = window.pageYOffset;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docH > 0 ? Math.min(1, y / docH) : 0;
        updateScrollState(y, progress);
      };
      window.addEventListener('scroll', handleNativeScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleNativeScroll);
    }

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
      autoResize: true,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sync scroll state with direct DOM update (zero React re-renders while scrolling)
    lenis.on('scroll', ({ scroll, progress }) => {
      updateScrollState(scroll, progress);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // 2. Navigation smooth scroll helper
  const handleNavigate = useCallback(
    (e, targetId) => {
      if (e && e.preventDefault) e.preventDefault();
      if (!targetId || targetId === '#') return;

      setIsMobileMenuOpen(false);
      document.body.classList.remove('is-locked');
      if (window.__lenis) window.__lenis.start();

      // Navigate to Menu page
      if (targetId === '#menu') {
        setCurrentPage('menu');
        setActiveSection('menu');
        window.history.pushState(null, '', '#menu');
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { duration: 0.8 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      // Navigate to Locations page
      if (targetId === '#locations') {
        setCurrentPage('locations');
        setActiveSection('locations');
        window.history.pushState(null, '', '#locations');
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { duration: 0.8 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      // If currently on subpage (Menu or Locations) and navigating to a home section
      if (currentPage === 'menu' || currentPage === 'locations') {
        if (targetId === '#hero') {
          setCurrentPage('home');
          setActiveSection('hero');
          window.history.pushState(null, '', '#hero');
          if (window.__lenis) window.__lenis.scrollTo(0, { duration: 0.8 });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Check if anchor is an element on the current subpage
        const localTarget = document.querySelector(targetId);
        if (localTarget) {
          if (window.__lenis) window.__lenis.scrollTo(localTarget, { offset: -70, duration: 0.85 });
          else localTarget.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        setCurrentPage('home');
        window.history.pushState(null, '', targetId);
        setTimeout(() => {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            const offset = -70;
            if (window.__lenis) {
              window.__lenis.scrollTo(targetEl, { offset, duration: 0.9 });
            } else {
              const top = targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
        return;
      }

      // On home page, smooth scroll to target section
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      const offset = -70;
      if (window.__lenis) {
        window.__lenis.scrollTo(targetEl, { offset, duration: 0.95 });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      window.history.replaceState(null, '', targetId);
    },
    [currentPage]
  );

  // 3. Listen to browser history changes (Back / Forward navigation)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#menu') {
        setCurrentPage('menu');
        setActiveSection('menu');
        if (window.__lenis) window.__lenis.scrollTo(0, { duration: 0.8 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#locations' || hash.startsWith('#locations')) {
        setCurrentPage('locations');
        setActiveSection('locations');
        if (window.__lenis) window.__lenis.scrollTo(0, { duration: 0.8 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    handleHash();
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  // 4. Scroll reveals (Pure IntersectionObserver - zero scroll-event reflows)
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
      { threshold: [0, 0.05, 0.1], rootMargin: '100px 0px 100px 0px' }
    );

    targets.forEach((el) => {
      if (el.dataset.d) el.style.setProperty('--d', el.dataset.d);
      io.observe(el);
    });

    // Initial check for elements already in viewport
    const checkImmediate = () => {
      const vh = window.innerHeight;
      targets.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh + 100 && rect.bottom > -100) {
            el.classList.add('is-visible');
          }
        }
      });
    };

    checkImmediate();
    const timer = setTimeout(checkImmediate, 350);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [currentPage]);

  // 6. Scroll spy for active section
  useEffect(() => {
    if (currentPage === 'menu' || currentPage === 'locations') {
      return;
    }

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
  }, [currentPage]);

  // 7. Magnetic buttons effect
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !isFinePointer) return;

    const elements = document.querySelectorAll('.magnetic');
    const cleanups = [];

    elements.forEach((el) => {
      let raf = null;
      let rect = null;
      el.style.transition = 'transform .45s cubic-bezier(.22,1,.36,1)';

      const onMouseEnter = () => {
        rect = el.getBoundingClientRect();
      };

      const onMouseMove = (e) => {
        if (!rect) rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.16;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
        });
      };

      const onMouseLeave = () => {
        rect = null;
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = '';
      };

      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mousemove', onMouseMove, { passive: true });
      el.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [currentPage]);

  // 8. Image fallback handler
  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      img.addEventListener('error', () => img.classList.add('img-fallback'), { once: true });
    });
  }, [currentPage]);

  // 9. Mobile menu toggling & Escape key handler
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
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, lightboxIndex]);

  return (
    <>
      <div
        className="progress"
        id="progress"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <Preloader />

      <Navbar
        isStuck={isStuck}
        activeSection={currentPage === 'menu' ? 'menu' : currentPage === 'locations' ? 'locations' : activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
        onNavigate={handleNavigate}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onNavigate={handleNavigate}
      />

      <main id="main">
        {currentPage === 'menu' ? (
          <Menu onNavigate={handleNavigate} />
        ) : currentPage === 'locations' ? (
          <LocationsPage onNavigate={handleNavigate} />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Brand Statistics */}
            <BrandStats />

            {/* 3. Signature Flavours */}
            <SignatureFlavours onOpenFullMenu={(e) => handleNavigate(e, '#menu')} />

            {/* 4. Find Your Nearest Restaurant */}
            <Locations onNavigate={handleNavigate} />

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
          </>
        )}
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
    </>
  );
}
