<section className="section reserve" id="reserve">
    <div className="reserve__bg">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=1900&amp;q=80"
           alt="" aria-hidden="true" loading="lazy" decoding="async" data-parallax="0.12" />
    </div>

    <div className="container">
      <div className="reserve__inner">
        <div className="reserve__intro">
          <div className="sec-head" data-reveal>
            <span className="label">07 — Reservations <span className="tamil">முன்பதிவு</span></span>
          </div>
          <h2 className="display" data-reveal style={{ '--d': '.08s' }}>
            Reserve <em>your table</em>.
          </h2>
          <p className="lede" data-reveal style={{ '--d': '.16s' }}>
            We hold twelve tables each evening, Wednesday through Sunday. For
            parties larger than six, or for a private hire of the whole room,
            please write to us directly.
          </p>

          <dl className="reserve__meta">
            <div data-reveal style={{ '--d': '.22s' }}>
              <dt>Telephone</dt>
              <dd><a href="tel:+914522345678">+91 452 234 5678</a></dd>
            </div>
            <div data-reveal style={{ '--d': '.28s' }}>
              <dt>Email</dt>
              <dd><a href="mailto:vanakkam@marutham.madurai">vanakkam@marutham.madurai</a></dd>
            </div>
            <div data-reveal style={{ '--d': '.34s' }}>
              <dt>Address</dt>
              <dd>
                12 North Chitrai Street<br />Madurai 625001
                <span className="tamil">மதுரை</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="reserve__form">
          <form className="form__grid" id="reserveForm" novalidate data-reveal style={{ '--d': '.2s' }}>
            <div className="field">
              <label htmlFor="r-name">Full name</label>
              <input id="r-name" name="name" type="text" placeholder="Your name" autocomplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="r-email">Email</label>
              <input id="r-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="r-phone">Telephone</label>
              <input id="r-phone" name="phone" type="tel" placeholder="+91" autocomplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="r-guests">Guests</label>
              <select id="r-guests" name="guests" required>
                <option value="" disabled selected>Select</option>
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="r-date">Date</label>
              <input id="r-date" name="date" type="date" required />
            </div>
            <div className="field">
              <label htmlFor="r-time">Time</label>
              <select id="r-time" name="time" required>
                <option value="" disabled selected>Select</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="r-notes">Dietary requirements or occasion</label>
              <textarea id="r-notes" name="notes" rows="1" placeholder="Allergies, celebrations, anything we should know"></textarea>
            </div>
            <div className="form__submit">
              <button type="submit" className="btn btn--solid btn--block magnetic">
                <span>Request Reservation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
            </div>
            <p className="form__fine">
              Requests are confirmed by email within one working day. The tasting
              menu is served to the whole table.
            </p>
          </form>

          <div className="form__success" id="formSuccess" role="status" aria-live="polite">
            <h3><span className="tamil">நன்றி</span>Thank you — your request is with us.</h3>
            <p id="formSuccessText">We will confirm your table by email within one working day.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>