import { Link } from "wouter";
import React, { useEffect, useRef, useState } from 'react';

const topics = [
  {
    num: "01",
    hue: 'card-01',
    title: "Lease Accounting",
    link: "/topic/lease",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    ),
    description: "Explore differences in recognition, measurement, and presentation of leases, notably the treatment of operating leases.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "02",
    hue: 'card-02',
    title: "PPE",
    link: "/topic/ppe",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M13 3l8 4v14"/><path d="M9 21v-4"/><path d="M17 21v-4"/></svg>
    ),
    description: "Cost vs revaluation model, component depreciation, impairment differences.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "03",
    hue: 'card-03',
    title: "Financial Instruments",
    link: "/topic/financial-instruments",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    description: "Classification (FVTPL/FVOCI/Amortized cost), ECL vs incurred loss, hedging.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "04",
    hue: 'card-04',
    title: "Revenue Recognition",
    link: "/topic/revenue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M19 9-5 5-4-4-3 3"/></svg>
    ),
    description: "Converged 5-step model, contract assets/liabilities, principal vs agent.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "05",
    hue: 'card-05',
    title: "Deferred Tax",
    link: "/topic/deferred-tax",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
    ),
    description: "Full provision vs partial provision, temporary differences, valuation allowances.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "06",
    hue: 'card-06',
    title: "Consolidation",
    link: "/topic/consolidation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><rect width="8" height="8" x="13" y="3" rx="2"/><rect width="8" height="8" x="8" y="13" rx="2"/></svg>
    ),
    description: "Control vs significant influence, uniform accounting policies, and NCI measurement.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "07",
    hue: 'card-07',
    title: "Impairment Accounting",
    link: "/topic/impairment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 22 2"/><path d="M17 2h5v5"/></svg>
    ),
    description: "AS vs Ind AS 36 vs IAS 36 vs ASC 350/360 - Compare impairment triggers, recoverable amount calculations, and reversal rules across standards.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "08",
    hue: 'card-08',
    title: "Share-Based Payments (ESOP)",
    link: "/topic/esop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    description: "AS vs Ind AS 102 vs IFRS 2 vs ASC 718 - Compare fair value vs intrinsic value methods, volatility assumptions, forfeiture estimation, and graded vesting treatment across standards.",
    badge: "🛡️ 4 standards compared"
  },
  {
    num: "09",
    hue: 'card-09',
    title: "Cash Flows",
    link: "/topic/cashflows",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    description: "AS 3 vs Ind AS 7 vs IAS 7 vs ASC 230 - Compare operating, investing, and financing classifications, interest, dividend, and tax treatment across standards.",
    badge: "🛡️ 4 standards compared"
  }
];

function TopicCard({ topic }: { topic: typeof topics[0]; key?: string }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = -dy * 8;
    const rotY = dx * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div className="card-perspective">
      <Link 
        ref={cardRef}
        href={topic.link} 
        className={`card-3d ${topic.hue}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="card-num">{topic.num}</span>
        <div className="card-icon-box">
          {topic.icon}
        </div>
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-description">
          {topic.description}
        </p>
        <div className="card-footer-info">
          <span className="card-badge">{topic.badge}</span>
          <span className="compare-link">Compare <span className="compare-arrow">&rarr;</span></span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];
    let mouse: { x: number | null; y: number | null } = { x: null, y: null };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    function initParticles() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const count = Math.floor((width * height) / 18000);
      const finalCount = Math.max(15, Math.min(count, 120));

      particles = [];
      for (let i = 0; i < finalCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 0.3 + Math.random() * 1.2,
          opacity: 0.1 + Math.random() * 0.4,
        });
      }
    }

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    initParticles();

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 179, 237, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = 0.06 * (1 - dist / 130);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = 0.12 * (1 - dist / 120);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(99, 179, 237, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredTopics = topics.filter(topic => {
    const text = (topic.title + ' ' + topic.description).toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="relative min-h-screen">
      {/* EFFECT 1 — ANIMATED PARTICLE BACKGROUND */}
      <canvas ref={canvasRef} id="canvas-bg" className="absolute inset-0 pointer-events-none z-0" />

      {/* EFFECT 2 — PERSPECTIVE GRID BACKGROUND */}
      <div className="grid-plane absolute inset-0 pointer-events-none z-0" />

      {/* EFFECT 3 — GLOW ORBS */}
      <div className="glow-orb orb-1 absolute pointer-events-none z-0" />
      <div className="glow-orb orb-2 absolute pointer-events-none z-0" />
      <div className="glow-orb orb-3 absolute pointer-events-none z-0" />

      <div className="relative z-10 w-full flex-1">
        {/* EFFECT 5 — HERO SECTION REDESIGN */}
        <header className="hero-section">
          {/* 1. Standard badges row (4 animated floating pills) */}
          <div className="badges-row">
            <div className="badge badge-as">
              <span className="badge-dot" style={{ backgroundColor: '#3b82f6' }}></span>AS
            </div>
            <div className="badge badge-ind-as">
              <span className="badge-dot" style={{ backgroundColor: '#10b981' }}></span>Ind AS
            </div>
            <div className="badge badge-ifrs">
              <span className="badge-dot" style={{ backgroundColor: '#f59e0b' }}></span>IFRS
            </div>
            <div className="badge badge-us">
              <span className="badge-dot" style={{ backgroundColor: '#a855f7' }}></span>US GAAP
            </div>
          </div>

          {/* 2. Eyebrow text above h1 */}
          <div className="eyebrow">Professional Accounting Research</div>

          {/* 3. Existing h1 title with gradient text and subtitle */}
          <h1 className="hero-h1">Accounting Standards Comparison Hub</h1>
          <p className="hero-subtitle">
            AS (Old Indian GAAP) vs Ind AS vs IFRS vs US GAAP
          </p>

          {/* 4. Stats row between hero and cards */}
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">9</div>
              <div className="stat-label">Topics covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Standards compared</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Sections per topic</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free to use</div>
            </div>
          </div>

          {/* 5. Select a Topic to Compare label with lines */}
          <h2 className="category-title">Select a Topic to Compare</h2>
          <p className="category-subtitle">
            Choose an accounting area to see detailed comparisons across standards.
          </p>
        </header>

        {/* Search Box inside content flow */}
        <div className="search-container">
          <div className="search-box-wrapper">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="searchInput"
              placeholder="Search for accounting topics or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* EFFECT 6 — 3D TOPIC CARDS */}
        <div className="cards-wrapper">
          <div className="cards-grid" id="cards-grid">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.num} topic={topic} />
            ))}

            {filteredTopics.length === 0 && (
              <div
                id="empty-search-state"
                className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center text-slate-500 bg-[rgba(13,27,51,0.5)] rounded-xl border border-dashed border-sky-500/20 transition-all"
              >
                <svg className="mx-auto h-16 w-16 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl font-bold text-slate-300">No matching topics or companies found.</p>
                <p className="mt-2 text-slate-500">Try adjusting your search query.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
