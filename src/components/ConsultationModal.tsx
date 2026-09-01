import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Send } from 'lucide-react';
import { FIRM_INFO, SERVICES } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a1e3d]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12386a] rounded-2xl border border-blue-400/50 shadow-2xl max-w-lg w-full overflow-hidden relative text-white">
        {/* Header */}
        <div className="bg-[#0d2a54] text-white p-5 flex items-center justify-between border-b border-blue-400/30">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              P. P. Agarwal & Co.
            </div>
            <h3 className="text-base font-bold font-cinzel text-white">
              Request Secretarial / FEMA Proposal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-cinzel">
                Proposal Request Transmitted
              </h4>
              <p className="text-xs text-blue-100">
                Our practice team at East of Kailash, New Delhi will connect with you shortly with formal documentation parameters.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors active:scale-95 shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-blue-100 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-100 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Enterprise Ltd."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-blue-100 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-100 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-100 mb-1">
                  Service Area
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Corporate Advisory">General Corporate Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-100 mb-1">
                  Scope Brief / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention financial year or specific statutory considerations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  Submit Proposal Scoping Request
                  <Send className="w-3 h-3" />
                </button>
              </div>

              <div className="text-[10px] text-center text-blue-200 pt-1">
                Office: {FIRM_INFO.address}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
