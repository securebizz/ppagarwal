import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ChevronRight, FileText, Scale, Globe, Building2 } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0f3261] via-[#164787] to-[#0f3463] text-slate-100 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f625_1px,transparent_1px),linear-gradient(to_bottom,#3b82f625_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient glowing orb for subtle luxury contrast */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* National Award Eyebrow Banner */}
        <div className="flex justify-center md:justify-start mb-6">
          <div 
            id="hero-award-badge"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11386d]/90 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-md"
          >
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              National Recognition: <strong>ICSI Best Secretarial Audit Report Award 2021</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline & Authority Statement */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-cinzel leading-tight">
              Excellence in Corporate Governance & Secretarial Practice
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
              Led by <strong className="text-white font-semibold">{FIRM_INFO.leadPartner}</strong>, <strong>{FIRM_INFO.name}</strong> is an award-winning Practicing Company Secretaries firm in New Delhi providing authoritative Secretarial Audits for premier Public Sector Undertakings (PSUs) & Listed Conglomerates, FEMA & RBI cross-border compliance, and forensic governance investigations.
            </p>

            {/* Core Practice Pillars Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#143d75]/90 border border-blue-400/40 rounded-lg p-3 text-left shadow-md">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Secretarial Audits
                </div>
                <div className="text-xs text-blue-100">
                  PSUs, Listed & Private Sectors (Sec 204 & SEBI LODR)
                </div>
              </div>

              <div className="bg-[#143d75]/90 border border-blue-400/40 rounded-lg p-3 text-left shadow-md">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                  <Globe className="w-4 h-4 text-amber-400" />
                  FEMA & RBI Practice
                </div>
                <div className="text-xs text-blue-100">
                  FDI, FC-GPR/TRS, FLA Returns, ECB & Compounding
                </div>
              </div>

              <div className="bg-[#143d75]/90 border border-blue-400/40 rounded-lg p-3 text-left shadow-md">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                  <Scale className="w-4 h-4 text-amber-400" />
                  Forensic Audits
                </div>
                <div className="text-xs text-blue-100">
                  Fact-Finding, RPT Scrutiny & Governance Assurance
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <button
                id="hero-request-proposal-btn"
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                Request Audit Proposal
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                id="hero-view-clients-btn"
                href="#clients"
                className="px-6 py-3 rounded-lg text-sm font-semibold tracking-wide bg-[#123668] hover:bg-[#184482] text-white border border-blue-400/50 transition-colors flex items-center gap-2 shadow-md"
              >
                <Building2 className="w-4 h-4 text-amber-300" />
                View Marquee PSU & Client Record
              </a>
            </div>
          </div>

          {/* Right Card: Credibility & Award Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#143d75]/95 to-[#0f305c]/95 border border-blue-400/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-5 border-b border-blue-500/40 pb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <Award className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Highest National Honor
                  </div>
                  <div className="text-base font-bold text-white font-playfair">
                    21st ICSI National Awards for Excellence in Corporate Governance
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-blue-100">
                <div className="p-3.5 rounded-lg bg-[#0d2850]/90 border border-blue-500/30 space-y-1.5 shadow-inner">
                  <div className="text-blue-200 text-xs">Award Conferred By:</div>
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong>Sh. Amit Shah</strong>
                  </div>
                  <div className="text-xs text-blue-200">
                    Union Home Minister & Minister for Cooperation, Govt. of India
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0d2850]/90 border border-blue-500/30 space-y-1.5 shadow-inner">
                  <div className="text-blue-200 text-xs">Eminent Jury Leadership:</div>
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong>Justice P Sathasivam</strong>
                  </div>
                  <div className="text-xs text-blue-200">
                    Jury Chairman & Former Chief Justice of India
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-200 text-xs italic leading-relaxed">
                  "Recognizing the importance of the Secretarial Audit Report as an effective tool of corporate compliance management."
                </div>
              </div>

              {/* Verified Trust Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-blue-500/40">
                <div className="text-center p-2 rounded bg-[#0d2850]/90 border border-blue-500/30">
                  <div className="text-xl font-bold text-amber-300 font-cinzel">100%</div>
                  <div className="text-[11px] text-blue-200">On-Time Assignment Timelines</div>
                </div>
                <div className="text-center p-2 rounded bg-[#0d2850]/90 border border-blue-500/30">
                  <div className="text-xl font-bold text-amber-300 font-cinzel">PSU & Listed</div>
                  <div className="text-[11px] text-blue-200">Auditing Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee PSU Client Ticker Strip */}
        <div className="mt-16 pt-8 border-t border-blue-500/40">
          <div className="text-center md:text-left text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
            Secretarial Audits Conducted for Renowned Entities Including:
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 sm:gap-6 text-blue-100">
            {['ONGC', 'BHEL', 'NHPC', 'OIL India', 'Delhi Transco (DTL)', 'Dhamra Port (DPCL)', 'India Glycols Ltd', 'Competent Automobiles Ltd'].map((client, idx) => (
              <div 
                key={idx} 
                className="px-3.5 py-1.5 rounded-md bg-[#133c70]/90 border border-blue-400/40 text-xs sm:text-sm font-semibold text-blue-100 hover:text-amber-300 hover:border-amber-400/60 transition-colors shadow-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
