import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle, Filter, ArrowUpRight } from 'lucide-react';
import { COMPLIANCE_MILESTONES } from '../data/firmData';

export const ComplianceCalendar: React.FC = () => {
  const [filterAuthority, setFilterAuthority] = useState<string>('All');

  const authorities = ['All', 'MCA', 'RBI / FEMA'];

  const filteredMilestones = filterAuthority === 'All'
    ? COMPLIANCE_MILESTONES
    : COMPLIANCE_MILESTONES.filter(m => m.authority.includes(filterAuthority));

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e3160] via-[#143e77] to-[#0e3160] text-slate-100 border-t border-blue-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              Statutory Compliance Calendar
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-white tracking-tight">
              Key Annual & Event-Based Regulatory Due Dates
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              "We pay due respect to Maintain the Timelines of the assignment. All of our assignments are completed on time."
            </p>
          </div>

          {/* Authority Filter */}
          <div className="flex items-center gap-2 bg-[#0d2a54] p-1.5 rounded-lg border border-blue-400/40">
            {authorities.map((auth) => (
              <button
                key={auth}
                onClick={() => setFilterAuthority(auth)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  filterAuthority === auth
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-blue-100 hover:text-white hover:bg-[#16437d]'
                }`}
              >
                {auth}
              </button>
            ))}
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className="bg-[#12386a]/90 border border-blue-400/40 hover:border-amber-400/70 hover:bg-[#16437d] rounded-xl p-5 shadow-lg flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#0d2a54] text-amber-300 border border-amber-400/40">
                    {milestone.authority}
                  </span>
                  <span className="text-xs font-bold text-blue-100 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    {milestone.periodicity}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {milestone.title}
                  </h3>
                  <div className="text-xs text-amber-300 font-semibold mt-1">
                    Due Date: {milestone.dueDate}
                  </div>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-blue-400/30 text-[11px] text-blue-200">
                <strong className="text-white">Applicability: </strong>
                {milestone.applicableTo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
