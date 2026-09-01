import React, { useState } from 'react';
import { Building2, Landmark, CheckCircle, ShieldCheck, Factory, Zap, Anchor, Car, FlaskConical, ArrowRight } from 'lucide-react';
import { CLIENT_TRACK_RECORD } from '../data/firmData';

export const ClientTrackRecord: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = ['All', 'Public Sector Undertaking', 'Heavy Engineering & Energy', 'Infrastructure & Ports', 'Manufacturing & Chemicals', 'Automotive & Retail'];

  const filteredClients = selectedSector === 'All'
    ? CLIENT_TRACK_RECORD
    : CLIENT_TRACK_RECORD.filter(c => c.category === selectedSector || c.sector === selectedSector);

  const getClientIcon = (id: string) => {
    switch (id) {
      case 'ongc':
      case 'oil':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'bhel':
        return <Factory className="w-5 h-5 text-amber-500" />;
      case 'nhpc':
      case 'dtl':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'dpcl':
        return <Anchor className="w-5 h-5 text-amber-500" />;
      case 'india-glycols':
        return <FlaskConical className="w-5 h-5 text-amber-500" />;
      case 'competent-automobiles':
        return <Car className="w-5 h-5 text-amber-500" />;
      default:
        return <Building2 className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-[#0e3160] via-[#143e77] to-[#0e3160] text-slate-100 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(59,130,246,0.2),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Landmark className="w-3.5 h-3.5 text-amber-300" />
            Audit Track Record & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            Secretarial Audits of Public and Private Sectors
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            P. P. Agarwal & Co. has conducted Secretarial Audits for marquee Public Sector Undertakings (PSUs), Maharatna & Navratna enterprises, and listed private market leaders.
          </p>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedSector === sector
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#12386a] text-blue-100 hover:bg-[#184888] hover:text-white border border-blue-400/40'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-[#12386a]/90 border border-blue-400/40 hover:border-amber-400/70 hover:bg-[#174480] rounded-xl p-5 shadow-lg flex flex-col justify-between transition-all hover:translate-y-[-2px]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#0d2a54] border border-blue-400/40 flex items-center justify-center shadow-sm">
                    {getClientIcon(client.id)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0d2a54] text-amber-300 border border-blue-400/40">
                    {client.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {client.name}
                  </h3>
                  <div className="text-xs text-amber-300 font-medium mt-0.5">
                    {client.sector}
                  </div>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-400/30">
                <div className="text-[11px] text-blue-200 leading-snug">
                  <strong className="text-white">Scope: </strong>
                  {client.auditScope}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0d2850] via-[#143e77] to-[#0d2850] border border-amber-400/50 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Peer Reviewed Standards & Specialized PSU Experience
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-cinzel">
                Auditing Manufacturing, Infrastructure, Power & Energy, and Large-Scale Retailing
              </div>
              <div className="text-xs text-blue-100 max-w-2xl">
                Our team brings rigorous knowledge of DPE corporate governance guidelines, SEBI LODR, Stock Exchange reporting, and the Companies Act 2013.
              </div>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md active:scale-95"
            >
              Engage For Secretarial Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
