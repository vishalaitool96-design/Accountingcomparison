import { Link } from "wouter";
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
        <Link href="/" className="nav-brand">FinStandards</Link>
        <button 
          id="mobile-nav-toggle" 
          className="mobile-nav-btn" 
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${mobileOpen ? 'show' : ''}`} id="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/topic/lease" className="nav-link">Lease</Link>
          <Link href="/topic/ppe" className="nav-link">PPE</Link>
          <Link href="/topic/financial-instruments" className="nav-link">Financial Instruments</Link>
          <Link href="/topic/revenue" className="nav-link">Revenue</Link>
          <Link href="/topic/deferred-tax" className="nav-link">Deferred Tax</Link>
          <Link href="/topic/consolidation" className="nav-link">Consolidation</Link>
          <Link href="/topic/impairment" className="nav-link">Impairment</Link>
          <Link href="/topic/esop" className="nav-link">ESOP</Link>
          <Link href="/topic/cashflows" className="nav-link">Cash Flows</Link>
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
