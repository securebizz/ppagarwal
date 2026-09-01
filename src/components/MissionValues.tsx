import React from 'react';
import { BookOpen, Users, ShieldCheck, Clock, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { MISSION_PILLARS } from '../data/firmData';

export const MissionValues: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'continuous-knowledge':
        return <BookOpen className="w-6 h-6 text-amber-700" />;
      case 'knowledge-sharing':
        return <Users className="w-6 h-6 text-amber-700" />;
      case 'integrity-loyalty':
        return <ShieldCheck className="w-6 h-6 text-amber-700" />;
      case 'strict-timelines':
        return <Clock className="w-6 h-6 text-amber-700" />;
      case 'hallmark-quality':
        return <Award className="w-6 h-6 text-amber-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <section id="values" className="py-24 bg-gradient-to-b from-[#0e3160] via-[#154585] to-[#0e3160] text-slate-100 border-t border-blue-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Our Guiding Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            Firm Mission & Core Ethical Values
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            The foundational principles that guide every secretarial audit, cross-border FEMA advisory, and forensic investigation at P. P. Agarwal & Co.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISSION_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`bg-[#12386a]/95 border border-blue-400/40 hover:border-amber-400/70 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between hover:bg-[#16437d] ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0d2a54] border border-blue-400/40 flex items-center justify-center shadow-sm">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-bold text-amber-300">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-cinzel">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-300 mt-0.5">
                    {pillar.shortDescription}
                  </p>
                </div>

                <blockquote className="text-xs sm:text-sm text-blue-50 leading-relaxed font-playfair italic bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/30 shadow-inner">
                  "{pillar.fullQuote}"
                </blockquote>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-400/30 flex items-center gap-2 text-xs text-blue-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{pillar.keyHighlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-6 bg-gradient-to-r from-[#0d2a54] via-[#174685] to-[#0d2a54] text-white rounded-2xl shadow-xl border border-amber-400/50">
          <div className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-1">
            Professional Guarantee
          </div>
          <div className="text-sm sm:text-base font-semibold text-blue-100">
            "All of our assignments are completed on time. Quality of work is the hallmark for us. It distinguishes us from our peers."
          </div>
        </div>
      </div>
    </section>
  );
};
