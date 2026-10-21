<div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
  <button className="lb-btn lb-close" id="lbClose" aria-label="Close viewer">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1"/>
    </svg>
  </button>
  <button className="lb-btn lb-prev" id="lbPrev" aria-label="Previous image">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1"/>
    </svg>
  </button>
  <img id="lbImage" src="" alt="" />
  <button className="lb-btn lb-next" id="lbNext" aria-label="Next image">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5h12M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1"/>
    </svg>
  </button>
  <span className="lb-count" id="lbCount"></span>
</div>

<noscript>
  <style>
    [data-reveal],[data-mask],.gal{opacity:1 !important;transform:none !important;clip-path:none !important}
    [data-mask] img{transform:none !important}
    .preloader{display:none !important}
    .hero__media,.hero__eyebrow,.hero__sub,.hero__actions,.hero__foot,.hero__gopuram{opacity:1 !important;transform:none !important}
    .hero__title .li{transform:none !important}
    body.is-locked{overflow:auto;height:auto}
  </style>
</noscript>

{/* Lenis (optional, graceful fallback to native scrolling) */}