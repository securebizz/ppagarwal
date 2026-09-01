import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  SearchCode, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight, 
  Scale, 
  FileText, 
  Building2, 
  Coins, 
  Landmark, 
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES } from '../data/firmData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [expandedDetail, setExpandedDetail] = useState<string | null>(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-amber-600" />;
      case 'SearchCode':
        return <SearchCode className="w-6 h-6 text-amber-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0e3160] via-[#154483] to-[#0e3160] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-300" />
            Core Practice Areas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            Specialized Corporate Secretarial & Advisory Services
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            Advising boards, PSUs, foreign investors, and executive leadership on regulatory discipline, risk mitigation, and corporate governance.
          </p>
        </div>

        {/* Practice Selection Navigation Tabs */}
        <div className="flex flex-col md:flex-row gap-3 mb-10 border-b border-blue-400/30 pb-4">
          {SERVICES.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => {
                  setActiveServiceId(service.id);
                  setExpandedDetail(service.id);
                }}
                className={`flex-1 flex items-center gap-3 p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-300 shadow-xl shadow-blue-950/40 ring-2 ring-blue-300/60'
                    : 'bg-[#12386a]/90 hover:bg-[#184888] text-blue-100 border-blue-400/40 hover:border-blue-300/60 shadow-md'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${isActive ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-[#0d2a54] text-blue-200 shadow-sm'}`}>
                  {service.id === 'secretarial-audit' && <ShieldCheck className="w-5 h-5" />}
                  {service.id === 'fema-rbi-compliance' && <Globe className="w-5 h-5" />}
                  {service.id === 'forensic-audit' && <SearchCode className="w-5 h-5" />}
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-blue-200'}`}>
                    Practice Area
                  </div>
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-blue-50'}`}>
                    {service.shortTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Practice Area Deep-Dive Container */}
        <div className="bg-[#12386a]/95 border border-blue-400/50 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview & Scope Breakdown */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2 shadow-sm">
                  {activeService.category.replace('-', ' ')}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white">
                  {activeService.title}
                </h3>
                <p className="text-sm font-semibold text-amber-300 mt-1 italic">
                  {activeService.tagline}
                </p>
                <p className="text-sm text-blue-100 mt-3 leading-relaxed">
                  {activeService.summary}
                </p>
              </div>

              {/* Key Audit / Advisory Aspects */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Core Practice Capabilities & Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                  {activeService.keyAspects.map((aspect, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#0d2a54]/90 p-3 rounded-lg border border-blue-400/30 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-blue-100 leading-normal">
                        {aspect}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special callout for FEMA or PSU depending on tab */}
              {activeService.id === 'secretarial-audit' && (
                <div className="p-4 rounded-xl bg-[#0d2a54]/95 border border-amber-400/40 space-y-2 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    PSU & Industry Sector Breadth:
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Proven track record across Manufacturing Industry, Infrastructure Industry, Power & Energy, and Service sectors. Audits conducted for <strong>ONGC, BHEL, NHPC, OIL, DTL, DPCL, India Glycols Limited, Competent Automobiles Limited</strong>, and other major corporations.
                  </p>
                </div>
              )}

              {activeService.id === 'fema-rbi-compliance' && (
                <div className="p-4 rounded-xl bg-[#0d2a54]/95 border border-blue-400/40 text-blue-100 space-y-2 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-amber-400" />
                    Regulatory Discipline with Hands-On Execution:
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    We work closely with promoters, management teams, Authorised Dealer (AD) Category-I banks, and professional advisors to establish an airtight compliance trail across FDI, ECB, ODI, and FEMA regularisations.
                  </p>
                </div>
              )}

              {activeService.id === 'forensic-audit' && (
                <div className="p-4 rounded-xl bg-[#0d2a54]/95 border border-blue-400/40 text-blue-100 space-y-2 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-amber-400" />
                    Governance-Led Perspective:
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    As a Practicing Company Secretaries firm, we combine our understanding of corporate laws, board processes, statutory records, and compliance systems with a disciplined review of transactions to provide objective fact-finding and remedial control frameworks.
                  </p>
                </div>
              )}
            </div>

            {/* Right Col: Statutory Framework & Deliverables Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Statutory Framework Box */}
              <div className="bg-[#0f2f5c] border border-blue-400/40 rounded-xl p-5 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-100 flex items-center gap-2 border-b border-blue-500/40 pb-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  Statutory & Legal Framework
                </div>
                <div className="space-y-2">
                  {activeService.statutoryFramework.map((framework, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-blue-100 bg-[#0c264a] p-2 rounded border border-blue-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{framework}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Box */}
              <div className="bg-[#0f2f5c] border border-blue-400/40 rounded-xl p-5 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-100 flex items-center gap-2 border-b border-blue-500/40 pb-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  Audit Deliverables & Output
                </div>
                <div className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="text-xs text-blue-100 flex items-start gap-2 bg-[#0c264a] p-2 rounded border border-blue-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Card */}
              <div className="bg-gradient-to-br from-[#15427f] to-[#0e2c56] border border-blue-400/50 text-white rounded-xl p-5 space-y-3 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Need Professional Engagement?
                </div>
                <p className="text-xs text-blue-100">
                  Request an engagement proposal or confidential preliminary consultation for {activeService.shortTitle}.
                </p>
                <button
                  id={`request-service-${activeService.id}`}
                  onClick={() => onOpenConsultation(activeService.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  Request Proposal
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Grid Comparison of All 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="bg-[#12386a]/90 border border-blue-400/40 hover:border-amber-400/70 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between hover:bg-[#16437d]"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0d2a54] border border-blue-400/40 flex items-center justify-center shadow-sm">
                  {s.id === 'secretarial-audit' && <ShieldCheck className="w-5 h-5 text-amber-400" />}
                  {s.id === 'fema-rbi-compliance' && <Globe className="w-5 h-5 text-amber-400" />}
                  {s.id === 'forensic-audit' && <SearchCode className="w-5 h-5 text-amber-400" />}
                </div>
                <h4 className="text-base font-bold text-white font-cinzel">
                  {s.title}
                </h4>
                <p className="text-xs text-blue-100 line-clamp-3">
                  {s.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-400/30 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveServiceId(s.id);
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                >
                  Explore Details
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-[11px] text-blue-200 font-medium">
                  {s.statutoryFramework.length} Regulations
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
