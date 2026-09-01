import React from 'react';
import { Award, ShieldCheck, MapPin, Mail, Phone, ExternalLink, Scale } from 'lucide-react';
import { FIRM_INFO, SERVICES } from '../data/firmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b2446] text-blue-200 text-xs border-t border-blue-500/40">
      {/* Top Banner inside Footer */}
      <div className="border-b border-blue-400/30 py-8 bg-[#0d2a54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#143e77] border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm font-cinzel">
                ICSI Best Secretarial Audit Report Award (2021)
              </div>
              <div className="text-blue-100 text-[11px]">
                Conferred at the 21st ICSI National Awards for Excellence in Corporate Governance
              </div>
            </div>
          </div>

          <div className="text-xs text-blue-50 font-medium bg-[#12386a] px-4 py-2 rounded-lg border border-blue-400/40 shadow-sm">
            "Knowledge is never complete. Timelines are sacred. Quality distinguishes our craft."
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold font-cinzel text-base">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              {FIRM_INFO.name}
            </div>
            <p className="text-blue-100 text-xs leading-relaxed max-w-sm">
              Practicing Company Secretaries firm in New Delhi led by <strong>{FIRM_INFO.leadPartner}</strong>, specializing in statutory secretarial audits of PSUs & private enterprises, FEMA and RBI foreign exchange compliance, and forensic governance audits.
            </p>
            <div className="space-y-1.5 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address}</span>
              </div>
              <div className="text-blue-200 text-[11px] pl-5.5">
                East of Kailash, New Delhi – 110065
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs font-cinzel">
              Practice Areas
            </div>
            <ul className="space-y-2 text-blue-200">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Board & Committee Governance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Compounding of FEMA Contraventions
                </a>
              </li>
            </ul>
          </div>

          {/* Marquee Auditees */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs font-cinzel">
              Sector Audit Track
            </div>
            <ul className="space-y-1.5 text-blue-200 text-xs">
              <li>Oil & Natural Gas Corp (ONGC)</li>
              <li>Bharat Heavy Electricals (BHEL)</li>
              <li>NHPC Limited</li>
              <li>Oil India Limited (OIL)</li>
              <li>Delhi Transco Limited (DTL)</li>
              <li>Dhamra Port Company (DPCL)</li>
              <li>India Glycols Limited</li>
              <li>Competent Automobiles Limited</li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs font-cinzel">
              Firm Navigation
            </div>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About the Firm</a>
              </li>
              <li>
                <a href="#award" className="hover:text-amber-300 transition-colors">ICSI National Award</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Specialized Practice</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-amber-300 transition-colors">PSU & Corporate Portfolio</a>
              </li>
              <li>
                <a href="#values" className="hover:text-amber-300 transition-colors">Mission & Values</a>
              </li>
              <li>
                <a href="#compliance-checker" className="hover:text-amber-300 transition-colors">Compliance Diagnostics</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact Office</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer (Mandatory ICSI Rule) */}
        <div className="mt-12 pt-6 border-t border-blue-400/30 space-y-3 text-[11px] text-blue-200 leading-relaxed">
          <div className="flex items-center gap-1.5 text-blue-100 font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            ICSI Code of Conduct & Regulatory Disclaimer
          </div>
          <p>
            In accordance with the guidelines prescribed by the Institute of Company Secretaries of India (ICSI), this website is maintained solely for the purpose of providing information regarding P. P. Agarwal & Co. (Practicing Company Secretaries) and its key areas of practice, credentials, and achievements. It does not constitute solicitation, advertisement, personal communication, invitation, or inducement of any sort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-blue-400/20 text-blue-200">
            <div>
              © {new Date().getFullYear()} P. P. Agarwal & Co. (Practicing Company Secretaries). All rights reserved.
            </div>
            <div className="text-blue-100 font-medium">
              C-154, East of Kailash, New Delhi – 110065
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
