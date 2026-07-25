'use client';

import { useMemo, useState } from 'react';

const weddingDate = new Date('2026-08-07T11:00:00+06:00');

function getCountdown() {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const countdown = useMemo(getCountdown, [opened]);

  const shareInvite = async () => {
    const data = {
      title: 'Komol & Riti — Wedding Invitation',
      text: 'You are cordially invited to the wedding ceremony of Komol and Riti on 7 August 2026.',
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Invitation link copied.');
      }
    } catch (_) {}
  };

  return (
    <main>
      {!opened && (
        <section className="cover" aria-label="Invitation cover">
          <div className="cover-glow" />
          <article className="envelope-card">
            <div className="branch branch-top-left" />
            <div className="branch branch-top-right" />
            <button className="seal" onClick={() => setOpened(true)} aria-label="Open invitation">♥</button>
            <div className="cover-names">
              <span>KOMOL</span>
              <small>&amp;</small>
              <span>RITI</span>
            </div>
            <div className="ornament">— ❧ —</div>
            <p className="cordially">Cordially Invite You</p>
            <button className="open-btn" onClick={() => setOpened(true)}>Open</button>
            <div className="floral-bunch bottom" />
          </article>
        </section>
      )}

      <section className={`invitation ${opened ? 'show' : ''}`}>
        <header className="hero">
          <div className="watercolor top-left" />
          <div className="watercolor top-right" />
          <div className="gold-line g1" />
          <div className="hero-arch">
            <p className="eyebrow">Together with our families</p>
            <h1><span>KOMOL</span><b>&amp;</b><span>RITI</span></h1>
            <p className="hero-copy">joyfully invite you to celebrate<br/>the beginning of our forever</p>
            <div className="mini-flower">❀</div>
          </div>
        </header>

        <section className="details panel">
          <p className="section-kicker">Wedding Ceremony</p>
          <h2>Tawhid Ahmed Komol</h2>
          <span className="role">Groom</span>
          <div className="ampersand">&amp;</div>
          <h2>Rinvi Jaman Riti</h2>
          <span className="role">Bride</span>

          <div className="date-card">
            <div><strong>Friday</strong><span>Day</span></div>
            <div className="date-main"><strong>07</strong><span>August 2026</span></div>
            <div><strong>11:00</strong><span>AM</span></div>
          </div>

          <p className="location-title">Family Home</p>
          <p className="location-copy">The wedding ceremony will be held in the warm presence of our beloved family and friends.</p>

          <div className="countdown" aria-label="Countdown to wedding">
            <div><strong>{countdown.days}</strong><span>Days</span></div>
            <div><strong>{countdown.hours}</strong><span>Hours</span></div>
            <div><strong>{countdown.minutes}</strong><span>Minutes</span></div>
          </div>
        </section>

        <section className="message panel">
          <div className="floral-bunch top" />
          <p>“And among His signs is that He created for you spouses from among yourselves so that you may find comfort in them.”</p>
          <small>— Qur’an 30:21</small>
          <h3>Your presence will be our greatest gift.</h3>
          <button className="share-btn" onClick={shareInvite}>Share Invitation</button>
        </section>

        <footer>
          <p>With love,</p>
          <strong>Komol &amp; Riti</strong>
          <span>07 • 08 • 2026</span>
        </footer>
      </section>
    </main>
  );
}
