import React, { useState, useEffect } from 'react';
import { Award, Phone, Mail, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Award', href: '#award' },
    { label: 'Practice Areas', href: '#services' },
    { label: 'PSU & Client Record', href: '#clients' },
    { label: 'Guiding Values', href: '#values' },
    { label: 'Compliance Checker', href: '#compliance-checker' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Award Bar */}
      <div id="top-award-bar" className="bg-[#0b2447] text-blue-100 text-xs py-2 px-4 border-b border-blue-600/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide shadow-sm">
              <Award className="w-3.5 h-3.5 text-slate-950" />
              ICSI NATIONAL AWARD WINNER
            </span>
            <span className="hidden sm:inline text-blue-100">
              Recipient of the <strong>Best Secretarial Audit Report Award</strong> presented by Sh. Amit Shah
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-100 text-xs">
            <span className="inline-flex items-center gap-1 text-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              New Delhi Practice
            </span>
            <a href="#contact" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-white">
              <Mail className="w-3 h-3 text-amber-300" />
              {FIRM_INFO.locality}, New Delhi
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        id="main-nav" 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0e2c56]/95 backdrop-blur-md shadow-xl border-b border-blue-500/40 py-3' 
            : 'bg-[#0e2c56]/85 backdrop-blur-sm border-b border-blue-600/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-950/20 border border-amber-400/40">
              <Shield className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-white font-cinzel flex items-center gap-2">
                P. P. AGARWAL & CO.
              </div>
              <div className="text-[11px] font-medium tracking-wider text-amber-400 uppercase">
                Practicing Company Secretaries
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm shadow-amber-500/20 transition-all active:scale-95"
            >
              Request Proposal
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white rounded-md bg-[#133c70] border border-blue-400/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-drawer" className="lg:hidden bg-[#0e2c56] border-b border-blue-500/60 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-[#184580] hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-blue-700/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center px-4 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              >
                Request Proposal / Audit Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
