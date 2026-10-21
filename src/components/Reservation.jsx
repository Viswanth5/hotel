import React, { useState, useEffect, useRef } from 'react';

export default function Reservation({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    notes: '',
  });

  const [minDate] = useState(() => {
    const today = new Date();
    return (
      today.getFullYear() +
      '-' +
      String(today.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(today.getDate()).padStart(2, '0')
    );
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const successRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    let firstInvalid = null;

    const fields = Array.from(form.querySelectorAll('input, select, textarea'));
    for (const field of fields) {
      if (field.hasAttribute('required') && !field.value.trim()) {
        if (!firstInvalid) firstInvalid = field;
      }
      if (
        field.type === 'email' &&
        field.value.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
      ) {
        if (!firstInvalid) firstInvalid = field;
      }
    }

    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.style.borderBottomColor = '#E07A4A';
      setTimeout(() => {
        firstInvalid.style.borderBottomColor = '';
      }, 2200);
      return;
    }

    const firstName = formData.name.trim().split(' ')[0] || 'Guest';
    const prettyDate = formData.date
      ? new Date(formData.date + 'T12:00:00').toLocaleDateString('en-GB', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        })
      : '';

    setSuccessMessage(
      `Thank you, ${firstName}. We have your request for ${formData.guests} on ${prettyDate} at ${formData.time}. A confirmation will arrive by email or phone shortly.`
    );
    setIsSubmitted(true);

    setTimeout(() => {
      if (successRef.current) {
        if (window.__lenis) {
          window.__lenis.scrollTo(successRef.current, { offset: -160, duration: 1.1 });
        } else {
          successRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 120);
  };

  return (
    <section className="section reserve" id="cta">
      <div className="reserve__bg">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1900&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          data-parallax="0.12"
        />
      </div>

      <div className="container">
        <div className="reserve__inner">
          <div className="reserve__intro">
            <div className="sec-head" data-reveal>
              <span className="label">09 — Visit Us <span className="tamil">வருகை தருக</span></span>
            </div>
            <h2 className="display" data-reveal style={{ '--d': '.08s' }}>
              Your Next Favourite <em>Meal Awaits.</em>
            </h2>
            <p className="lede" data-reveal style={{ '--d': '.16s' }}>
              Bring your family, meet your friends, or simply enjoy the flavours you love. Discover authentic vegetarian dining and find your nearest Temple City location.
            </p>

            <div
              data-reveal
              style={{
                '--d': '.22s',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBlock: '2rem 2.5rem',
              }}
            >
              <a
                className="btn btn--solid magnetic"
                href="#flavours"
                onClick={(e) => onNavigate && onNavigate(e, '#flavours')}
              >
                <span>Explore Our Menu</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
              <a
                className="btn btn--ghost magnetic"
                href="#locations"
                onClick={(e) => onNavigate && onNavigate(e, '#locations')}
              >
                <span>Find a Restaurant</span>
              </a>
            </div>

            <dl className="reserve__meta">
              <div data-reveal style={{ '--d': '.28s' }}>
                <dt>Telephone</dt>
                <dd><a href="tel:6384899333">6384899333</a></dd>
              </div>
              <div data-reveal style={{ '--d': '.34s' }}>
                <dt>Email</dt>
                <dd><a href="mailto:customercare@hoteltemplecity.com">customercare@hoteltemplecity.com</a></dd>
              </div>
              <div data-reveal style={{ '--d': '.4s' }}>
                <dt>Headquarters</dt>
                <dd>
                  Madurai, Tamil Nadu<br />
                  <span className="tamil">மதுரை &amp; சுற்றுவட்டார கிளைகள்</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="reserve__form">
            {!isSubmitted ? (
              <form
                className="form__grid"
                id="reserveForm"
                noValidate
                data-reveal
                style={{ '--d': '.2s' }}
                onSubmit={handleSubmit}
              >
                <div className="field">
                  <label htmlFor="r-name">Full name</label>
                  <input
                    id="r-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="r-email">Email</label>
                  <input
                    id="r-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="r-phone">Telephone</label>
                  <input
                    id="r-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="r-guests">Guests</label>
                  <select
                    id="r-guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select</option>
                    <option value="1 - 2 guests">1 - 2 guests</option>
                    <option value="3 - 4 guests">3 - 4 guests</option>
                    <option value="5 - 8 guests">5 - 8 guests</option>
                    <option value="Family Gathering (8+ guests)">Family Gathering (8+ guests)</option>
                    <option value="Event / Celebration Inquiry">Event / Celebration Inquiry</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="r-date">Date</label>
                  <input
                    id="r-date"
                    name="date"
                    type="date"
                    min={minDate}
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="r-time">Time</label>
                  <select
                    id="r-time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select</option>
                    <option value="Breakfast (7:30 - 11:00 AM)">Breakfast (7:30 - 11:00 AM)</option>
                    <option value="Lunch (12:00 - 3:30 PM)">Lunch (12:00 - 3:30 PM)</option>
                    <option value="Evening Snacks (4:00 - 6:30 PM)">Evening Snacks (4:00 - 6:30 PM)</option>
                    <option value="Dinner (7:00 - 10:30 PM)">Dinner (7:00 - 10:30 PM)</option>
                  </select>
                </div>
                <div className="field field--full">
                  <label htmlFor="r-notes">Preferred branch or special occasion</label>
                  <textarea
                    id="r-notes"
                    name="notes"
                    rows={1}
                    placeholder="E.g., Mattuthavani, Uthangudi, birthday celebration, dietary request"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__submit">
                  <button type="submit" className="btn btn--solid btn--block magnetic">
                    <span>Reserve / Plan Your Visit</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </button>
                </div>
                <p className="form__fine">
                  Requests are confirmed promptly by our guest relation team. We welcome family gatherings, celebrations, and individual diners.
                </p>
              </form>
            ) : null}

            <div
              ref={successRef}
              className={`form__success ${isSubmitted ? 'is-visible' : ''}`}
              id="formSuccess"
              role="status"
              aria-live="polite"
              style={{ display: isSubmitted ? 'block' : 'none' }}
            >
              <h3>
                <span className="tamil">நன்றி</span>
                Thank you — your request is with us.
              </h3>
              <p id="formSuccessText">{successMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
