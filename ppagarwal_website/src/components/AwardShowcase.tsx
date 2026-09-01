import React from 'react';
import { Award, Calendar, MapPin, UserCheck, Shield, CheckCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export const AwardShowcase: React.FC = () => {
  return (
    <section id="award" className="py-20 bg-gradient-to-b from-[#0f3463] via-[#154381] to-[#0e3160] text-slate-100 relative overflow-hidden border-y border-blue-500/40">
      {/* Decorative gradient sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.25),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16427d] border border-amber-400/50 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            National Accolade
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            ICSI Best Secretarial Audit Report Award
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            A testament to benchmark compliance reporting, thorough statutory verification, and pioneering corporate governance standards.
          </p>
        </div>

        {/* Feature Citation Card */}
        <div className="bg-gradient-to-br from-[#143e77] via-[#194c8e] to-[#12386a] border-2 border-amber-400/60 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Official Citation & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide shadow-sm">
                  Official Recognition
                </span>
                <span className="text-xs text-amber-300 font-semibold">
                  21st ICSI National Awards for Excellence in Corporate Governance
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-blue-50 leading-relaxed font-playfair border-l-4 border-amber-400 pl-4 py-1">
                "{FIRM_INFO.aboutSnippet}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/40 shadow-sm">
                  <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-blue-200 font-medium">Presented By</div>
                    <div className="text-sm font-semibold text-white">Sh. Amit Shah</div>
                    <div className="text-[11px] text-blue-200">Union Home Minister & Minister for Cooperation</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/40 shadow-sm">
                  <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-blue-200 font-medium">Jury Chairman</div>
                    <div className="text-sm font-semibold text-white">Justice P Sathasivam</div>
                    <div className="text-[11px] text-blue-200">Former Chief Justice of India</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 pt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>December 18, 2021</span>
                </div>
                <span className="text-blue-400">•</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Mumbai, India</span>
                </div>
                <span className="text-blue-400">•</span>
                <div className="text-amber-300 font-semibold">
                  Practicing Company Secretaries Category
                </div>
              </div>
            </div>

            {/* Right Column: Why This Award Matters to Clients */}
            <div className="lg:col-span-5 bg-[#0d2a54]/90 border border-blue-400/40 rounded-xl p-6 space-y-4 shadow-md">
              <h3 className="text-base font-semibold text-white font-cinzel flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                Significance for Corporate Boards & PSUs
              </h3>
              
              <p className="text-xs text-blue-100 leading-relaxed">
                Secretarial Audit is not merely a statutory compliance exercise; it is an executive assurance mechanism protecting directors, independent committees, and institutional shareholders against regulatory exposure.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Rigorous Statutory Scrutiny",
                    desc: "Thorough verification of Companies Act, SEBI, and FEMA provisions with zero tolerance for documentation ambiguity."
                  },
                  {
                    title: "Board & Committee Shield",
                    desc: "Independent validation shielding directors against compliance liabilities and non-disclosure defaults."
                  },
                  {
                    title: "Peer-Benchmarked Reporting",
                    desc: "Nationally recognized audit format hailed by regulators and the judiciary as an exemplary model."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] text-blue-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
