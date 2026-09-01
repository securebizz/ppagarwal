import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, ShieldCheck, User, MessageSquare } from 'lucide-react';
import { FIRM_INFO, SERVICES } from '../data/firmData';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialNotes }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || SERVICES[0].title,
    entityType: 'Public Sector Undertaking (PSU)',
    message: initialNotes || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0e3160] via-[#143e77] to-[#0e3160] text-slate-100 border-t border-blue-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            Office & Advisory Desk
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            Connect with P. P. Agarwal & Co.
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            For Secretarial Audits, FEMA & RBI regulatory compliance, or forensic governance inquiries, please reach our New Delhi office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12386a]/95 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-400/50 space-y-6">
              <div className="border-b border-blue-400/30 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Principal Practice Office
                </div>
                <h3 className="text-xl font-bold text-white font-cinzel mt-1">
                  {FIRM_INFO.name}
                </h3>
                <div className="text-xs text-blue-200 font-medium mt-0.5">
                  Practicing Company Secretaries | {FIRM_INFO.leadPartner}
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0d2a54] border border-blue-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                      Office Address
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5 leading-relaxed">
                      {FIRM_INFO.address}
                    </div>
                    <div className="text-xs text-blue-100/90 mt-1">
                      East of Kailash, South Delhi (Convenient access from Nehru Place / Kailash Colony)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0d2a54] border border-blue-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                      Professional Hours
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Monday – Saturday: 9:30 AM – 6:30 PM
                    </div>
                    <div className="text-xs text-blue-100/90">
                      Prior appointments recommended for board & audit committee conferences
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="rounded-xl overflow-hidden border border-blue-400/40 bg-[#0d2a54] p-4 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs text-blue-100">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    New Delhi Location
                  </span>
                  <span className="text-[11px] text-amber-300 font-medium">Pin: 110065</span>
                </div>
                <div className="h-36 rounded-lg bg-[#143e77] border border-blue-400/30 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg mb-1 z-10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white z-10">
                    C-154, East of Kailash
                  </div>
                  <div className="text-[11px] text-blue-100 z-10">
                    New Delhi – 110065
                  </div>
                </div>
              </div>

              {/* Ethics / Timelines assurance */}
              <div className="p-3.5 rounded-lg bg-[#0d2a54] border border-amber-400/40 text-xs text-amber-200 leading-relaxed shadow-sm">
                "All assignments are executed with strict adherence to timelines and uncompromising integrity."
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12386a]/95 border border-blue-400/50 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/70 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-cinzel">
                  Inquiry Received Successfully
                </h3>
                <p className="text-sm text-blue-100 max-w-md mx-auto">
                  Thank you for reaching out to <strong>{FIRM_INFO.name}</strong>. Our corporate secretarial team will review your requirements and respond promptly.
                </p>
                <div className="bg-[#0d2a54] p-4 rounded-xl border border-blue-400/40 max-w-md mx-auto text-left text-xs space-y-1.5 text-blue-100">
                  <div><strong className="text-white">Designated Service:</strong> {formData.serviceRequired}</div>
                  <div><strong className="text-white">Entity:</strong> {formData.companyName || 'Corporate Client'} ({formData.entityType})</div>
                  <div><strong className="text-white">Location:</strong> Office at C-154, East of Kailash, New Delhi – 110065</div>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      designation: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      serviceRequired: SERVICES[0].title,
                      entityType: 'Public Sector Undertaking (PSU)',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors active:scale-95 shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-blue-400/30 pb-3">
                  <h3 className="text-base font-bold text-white font-cinzel">
                    Request an Audit Proposal / Advisory Session
                  </h3>
                  <p className="text-xs text-blue-200 mt-0.5">
                    Please provide your corporate details for formal engagement scoping.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-100 mb-1">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Company Secretary / CFO / Director"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-blue-100 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Industries Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-100 mb-1">
                      Entity Classification
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white"
                    >
                      <option value="Public Sector Undertaking (PSU)">Public Sector Undertaking (PSU)</option>
                      <option value="Listed Enterprise">Listed Company (BSE / NSE)</option>
                      <option value="Unlisted Public Company">Unlisted Public Company</option>
                      <option value="Private Limited Company">Private Limited with FDI / Cross-Border</option>
                      <option value="Foreign Investor / Multi-National">Foreign Investor / Non-Resident Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-100 mb-1">
                      Contact Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-100 mb-1">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Corporate Secretarial Advisory">General Corporate Secretarial Advisory</option>
                    <option value="Compounding of Contraventions with RBI">Compounding of Contraventions with RBI</option>
                    <option value="Board Governance & Independent Review">Board Governance & Independent Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-100 mb-1">
                    Scope Details or Specific Queries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about assignment requirements, timelines, or financial year scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#0d2a54] text-white placeholder:text-blue-300/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    'Processing Request...'
                  ) : (
                    <>
                      Submit Proposal Request
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-blue-200">
                  Strict client confidentiality maintained in accordance with the ICSI Code of Professional Conduct.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
