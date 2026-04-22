import React, { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(166,255,93,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(166,255,93,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html { background: #0a0a0a; }

        .home-root {
          min-height: 100vh;
          background: #0a0a0a;
          color: #f0f0f0;
          font-family: 'Syne', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient blobs */
        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 420px; height: 420px;
          background: rgba(166,255,93,0.07);
          top: -120px; left: -100px;
        }
        .blob-2 {
          width: 320px; height: 320px;
          background: rgba(93,180,255,0.06);
          bottom: 80px; right: -80px;
        }
        .blob-3 {
          width: 200px; height: 200px;
          background: rgba(255,93,200,0.05);
          top: 50%; left: 55%;
        }

        canvas.particle-canvas {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          padding: 0 clamp(20px, 6vw, 100px);
        }

        /* ── NAV ── */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.18em;
          color: #a6ff5d;
          text-transform: uppercase;
        }
        .nav-badge {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 12px;
          border-radius: 20px;
        }

        /* ── HERO ── */
        .hero {
          padding: 100px 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 0 50px; }
          .hero-visual { display: none; }
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a6ff5d;
          margin-bottom: 22px;
        }
        .hero-eyebrow::before {
          content: '';
          width: 20px; height: 1px;
          background: #a6ff5d;
        }

        .hero-title {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .hero-title .accent {
          color: #a6ff5d;
          display: block;
        }
        .hero-title .dim {
          color: rgba(255,255,255,0.25);
          font-size: 0.55em;
          font-weight: 400;
          display: block;
          letter-spacing: 0em;
          margin-top: 8px;
          font-family: 'DM Mono', monospace;
        }

        .hero-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.5);
          max-width: 420px;
          margin-bottom: 36px;
        }

        .hero-cta {
          display: inline-block;
          background: #a6ff5d;
          color: #0a0a0a;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 4px;
          border: none;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .hero-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }

        /* ── HERO VISUAL ── */
        .hero-visual {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .visual-box {
          width: 320px; height: 320px;
          position: relative;
        }
        .visual-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(166,255,93,0.15);
          animation: spin linear infinite;
        }
        .visual-ring:nth-child(1) { inset: 0; animation-duration: 18s; }
        .visual-ring:nth-child(2) { inset: 30px; animation-duration: 12s; animation-direction: reverse; border-color: rgba(93,180,255,0.12); }
        .visual-ring:nth-child(3) { inset: 60px; animation-duration: 8s; border-color: rgba(255,93,200,0.10); }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .visual-dot {
          position: absolute;
          width: 8px; height: 8px;
          background: #a6ff5d;
          border-radius: 50%;
          top: -4px; left: 50%;
          box-shadow: 0 0 12px #a6ff5d;
        }
        .visual-ring:nth-child(2) .visual-dot { background: #5db4ff; box-shadow: 0 0 12px #5db4ff; }
        .visual-ring:nth-child(3) .visual-dot { background: #ff5dc8; box-shadow: 0 0 12px #ff5dc8; }

        .visual-center {
          position: absolute;
          inset: 90px;
          background: rgba(166,255,93,0.04);
          border: 1px solid rgba(166,255,93,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2px;
        }
        .visual-center-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .visual-center-big {
          font-size: 28px;
          font-weight: 800;
          color: #a6ff5d;
        }

        /* ── DIVIDER ── */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 10px 0 60px;
        }

        /* ── INFO CARDS ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 80px;
        }
        @media (max-width: 680px) { .cards-grid { grid-template-columns: 1fr; } }

        .info-card {
          background: #0e0e0e;
          padding: 36px 30px;
          position: relative;
          overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-accent, #a6ff5d), transparent);
          opacity: 0.6;
        }
        .info-card:nth-child(2) { --card-accent: #5db4ff; }
        .info-card:nth-child(3) { --card-accent: #ff5dc8; }

        .card-icon {
          font-size: 24px;
          margin-bottom: 16px;
          display: block;
        }
        .card-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
        }

        /* ── ABOUT SECTION ── */
        .about-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: start;
          margin-bottom: 80px;
        }
        @media (max-width: 768px) { .about-section { grid-template-columns: 1fr; gap: 30px; } }

        .about-left {}
        .section-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 12px;
        }
        .section-heading {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .section-heading .hi { color: #a6ff5d; }

        .about-right {
          padding-top: 6px;
        }
        .about-text {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
        }
        .about-text strong {
          color: rgba(255,255,255,0.9);
          font-weight: 600;
        }

        .about-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .pill {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 6px 14px;
        }
        .pill.green { color: #a6ff5d; border-color: rgba(166,255,93,0.25); background: rgba(166,255,93,0.05); }

        /* ── MARQUEE ── */
        .marquee-wrapper {
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 18px 0;
          margin-bottom: 80px;
        }
        .marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .marquee-item span.dot { color: #a6ff5d; font-size: 18px; line-height: 1; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ── FOOTER ── */
        footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 30px 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-left {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }
        .footer-right {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }
        .footer-dot { color: #a6ff5d; }
      `}</style>

      <div className="home-root">
        {/* Ambient */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <canvas className="particle-canvas" ref={canvasRef} />

        <div className="content">
          {/* NAV */}
          <nav>
            <span className="nav-logo">// This is a namesake homepage developed for visual purpose only</span>
            <span className="nav-badge">Assignment for DekSek</span>
          </nav>

          {/* HERO */}
          <section className="hero">
            <div className="hero-left">
              <div className="hero-eyebrow">Hello, World</div>
              <h1 className="hero-title">
                This will be
                <span className="accent">the Home Page.</span>
                <span className="dim">— a starting point</span>
              </h1>
              <p className="hero-body">
                A thoughtfully designed starting screen for any web application. Clean layout,
                ambient motion, and clear intent — built to demonstrate modern interface thinking.
              </p>
              <button className="hero-cta">Explore ↓</button>
            </div>

            <div className="hero-visual">
              <div className="visual-box">
                <div className="visual-ring"><div className="visual-dot" /></div>
                <div className="visual-ring"><div className="visual-dot" /></div>
                <div className="visual-ring"><div className="visual-dot" /></div>
                <div className="visual-center">
                  <span className="visual-center-label">Home</span>
                  <span className="visual-center-big">01</span>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* INFO CARDS */}
          <div className="cards-grid">
            <div className="info-card">
              <span className="card-icon">⬡</span>
              <div className="card-label">Section One</div>
              <div className="card-title">Design</div>
              <div className="card-desc">
                A home page anchors the user's experience — establishing hierarchy,
                tone, and direction from the very first glance.
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">◈</span>
              <div className="card-label">Section Two</div>
              <div className="card-title">Structure</div>
              <div className="card-desc">
                Clear information architecture guides the visitor effortlessly
                from greeting to action, without cognitive overload.
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">◎</span>
              <div className="card-label">Section Three</div>
              <div className="card-title">Motion</div>
              <div className="card-desc">
                Subtle animation adds life and depth — communicating responsiveness
                and intention without distraction.
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div className="about-section">
            <div className="about-left">
              <div className="section-tag">About This Page</div>
              <h2 className="section-heading">
                <span className="hi">Hi</span> there —<br />welcome in.
              </h2>
            </div>
            <div className="about-right">
              <p className="about-text">
                This is the <strong>Home Page</strong> of the application — the first screen a
                user lands on. It sets the visual language, communicates the core purpose,
                and creates a memorable first impression.
              </p>
              <p className="about-text">
                Designed with a <strong>dark, minimal aesthetic</strong> and accented with
                generative particle graphics, this page demonstrates how thoughtful layout
                and motion can elevate even a simple landing screen into something
                genuinely expressive.
              </p>
              <div className="about-pills">
                <span className="pill green">React</span>
                <span className="pill">Responsive</span>
                <span className="pill">CSS Animations</span>
                <span className="pill">Canvas API</span>
                <span className="pill">Dark Theme</span>
              </div>
            </div>
          </div>

          {/* MARQUEE */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[
                "Home Page", "Assignment", "Web Design", "React Component",
                "Interface Design", "Dark Theme", "Motion Design", "Frontend",
                "Home Page", "Assignment", "Web Design", "React Component",
                "Interface Design", "Dark Theme", "Motion Design", "Frontend",
              ].map((item, i) => (
                <div className="marquee-item" key={i}>
                  <span className="dot">·</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <footer>
            <span className="footer-left">© 2025 Assignment Submission</span>
            <span className="footer-right">Home Page <span className="footer-dot">·</span> v1.0</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
