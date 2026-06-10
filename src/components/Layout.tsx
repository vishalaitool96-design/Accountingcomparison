import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative z-10 select-none">
      {/* EFFECT 4 — NAVIGATION REDESIGN */}
      <nav>
        <a href="index.html" className="nav-brand">FinStandards</a>
        <button 
          id="mobile-nav-toggle" 
          className="mobile-nav-btn" 
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${mobileOpen ? 'show' : ''}`} id="nav-links">
          <a href="index.html" className="nav-link active">Home</a>
          <a href="lease.html" className="nav-link">Lease</a>
          <a href="ppe.html" className="nav-link">PPE</a>
          <a href="financial-instruments.html" className="nav-link">Financial Instruments</a>
          <a href="revenue.html" className="nav-link">Revenue</a>
          <a href="deferred-tax.html" className="nav-link">Deferred Tax</a>
          <a href="consolidation.html" className="nav-link">Consolidation</a>
          <a href="impairment.html" className="nav-link">Impairment</a>
          <a href="esop.html" className="nav-link">ESOP</a>
          <a href="cashflows.html" className="nav-link">Cash Flows</a>
        </div>
      </nav>

      <main className="flex-1 w-full flex flex-col relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer>
        For educational purposes. Consult professional advice before making
        financial decisions. | &copy; 2026 Accounting Standards Comparison Hub
      </footer>
    </div>
  );
}
