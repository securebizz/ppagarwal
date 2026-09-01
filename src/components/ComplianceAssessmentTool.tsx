import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, FileText, ArrowRight, HelpCircle, RefreshCw, Scale } from 'lucide-react';

interface ComplianceAssessmentToolProps {
  onOpenConsultation: (details?: string) => void;
}

export const ComplianceAssessmentTool: React.FC<ComplianceAssessmentToolProps> = ({ onOpenConsultation }) => {
  const [entityType, setEntityType] = useState<'listed' | 'public' | 'private' | 'psu'>('public');
  const [paidUpCapital, setPaidUpCapital] = useState<number>(60); // In Cr
  const [turnover, setTurnover] = useState<number>(300); // In Cr
  const [borrowings, setBorrowings] = useState<number>(80); // In Cr
  const [hasFDI, setHasFDI] = useState<boolean>(true);
  const [hasShareTransfer, setHasShareTransfer] = useState<boolean>(false);
  const [hasECB_ODI, setHasECB_ODI] = useState<boolean>(false);
  const [hasWhistleblowerOrRPT, setHasWhistleblowerOrRPT] = useState<boolean>(false);

  // Applicability calculations according to Section 204 of Companies Act, 2013 & Rule 9 of Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014:
  // 1. Every Listed Company
  // 2. Every Public Company having Paid-up share capital >= 50 Cr
  // 3. Every Public Company having Turnover >= 250 Cr
  // 4. Every Company having outstanding loans or borrowings from banks or PFIs >= 100 Cr
  const isSecretarialAuditMandatory =
    entityType === 'listed' ||
    (entityType === 'public' && (paidUpCapital >= 50 || turnover >= 250 || borrowings >= 100)) ||
    (entityType === 'psu' && (paidUpCapital >= 50 || turnover >= 250 || borrowings >= 100)) ||
    (entityType === 'private' && borrowings >= 100);

  const femaObligations: string[] = [];
  if (hasFDI) {
    femaObligations.push("Annual Return on Foreign Liabilities and Assets (FLA) due by July 15 on RBI Portal");
    femaObligations.push("Single Master Form (SMF) & Form FC-GPR within 30 days of equity allotment");
  }
  if (hasShareTransfer) {
    femaObligations.push("Form FC-TRS submission on FIRMS within 60 days of transfer / receipt of funds");
  }
  if (hasECB_ODI) {
    femaObligations.push("Form ECB registration (Loan Registration Number - LRN) & Monthly Form ECB-2 filings / Annual Performance Report (APR) for ODI");
  }

  const forensicObligations: string[] = [];
  if (hasWhistleblowerOrRPT) {
    forensicObligations.push("Independent fact-finding review of Related Party Transactions & Whistleblower allegations to safeguard Board & Audit Committee");
    forensicObligations.push("Statutory fraud evaluation under Section 143(12) of Companies Act, 2013");
  }

  const handleReset = () => {
    setEntityType('public');
    setPaidUpCapital(60);
    setTurnover(300);
    setBorrowings(80);
    setHasFDI(true);
    setHasShareTransfer(false);
    setHasECB_ODI(false);
    setHasWhistleblowerOrRPT(false);
  };

  const getAssessmentSummaryText = () => {
    return `Applicability Assessment Summary for ${entityType.toUpperCase()} Entity: Secretarial Audit Mandatory = ${isSecretarialAuditMandatory ? 'YES' : 'NO'}, FDI/FEMA Filings Active = ${hasFDI || hasShareTransfer || hasECB_ODI ? 'YES' : 'NO'}, Forensic/Governance Review Recommended = ${hasWhistleblowerOrRPT ? 'YES' : 'NO'}`;
  };

  return (
    <section id="compliance-checker" className="py-24 bg-gradient-to-b from-[#0e3160] via-[#154585] to-[#0e3160] text-slate-100 border-t border-blue-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#133c70] border border-blue-400/50 text-blue-100 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Scale className="w-3.5 h-3.5 text-amber-300" />
            Interactive Statutory Diagnostics
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white tracking-tight">
            Secretarial Audit & FEMA Applicability Checker
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            Evaluate your company's statutory requirements under Section 204 of the Companies Act 2013, SEBI LODR, and RBI FEMA reporting guidelines in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-7 bg-[#12386a]/95 border border-blue-400/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-blue-400/30 pb-3">
              <h3 className="text-base font-bold text-white font-cinzel">
                Entity Profile & Parameters
              </h3>
              <button
                onClick={handleReset}
                className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Defaults
              </button>
            </div>

            {/* Entity Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">
                1. Corporate Entity Classification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'listed', label: 'Listed Co.' },
                  { id: 'public', label: 'Unlisted Public Co.' },
                  { id: 'psu', label: 'PSU / Govt Co.' },
                  { id: 'private', label: 'Private Limited' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEntityType(type.id as any)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                      entityType === type.id
                        ? 'bg-blue-600 text-white border-blue-300 shadow-md ring-2 ring-blue-300/40'
                        : 'bg-[#0d2a54] text-blue-100 border-blue-400/40 hover:bg-[#15427d]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Financial Parameters */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-100">
                2. Financial Thresholds (Companies Act Sec 204 Criteria)
              </div>

              {/* Paid Up Capital Slider */}
              <div className="bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/30 space-y-2 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-blue-100">Paid-up Share Capital:</span>
                  <span className="font-bold text-amber-300 bg-blue-950/80 px-2 py-0.5 rounded border border-amber-400/40">
                    ₹{paidUpCapital} Crores (Threshold: ≥ ₹50 Cr)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={paidUpCapital}
                  onChange={(e) => setPaidUpCapital(Number(e.target.value))}
                  className="w-full h-1.5 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Turnover Slider */}
              <div className="bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/30 space-y-2 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-blue-100">Annual Turnover:</span>
                  <span className="font-bold text-amber-300 bg-blue-950/80 px-2 py-0.5 rounded border border-amber-400/40">
                    ₹{turnover} Crores (Threshold: ≥ ₹250 Cr)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="25"
                  value={turnover}
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-1.5 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Outstanding Loans/Borrowings */}
              <div className="bg-[#0d2a54]/90 p-4 rounded-xl border border-blue-400/30 space-y-2 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-blue-100">Outstanding Bank / PFI Borrowings:</span>
                  <span className="font-bold text-amber-300 bg-blue-950/80 px-2 py-0.5 rounded border border-amber-400/40">
                    ₹{borrowings} Crores (Threshold: ≥ ₹100 Cr)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={borrowings}
                  onChange={(e) => setBorrowings(Number(e.target.value))}
                  className="w-full h-1.5 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* FEMA & Cross-Border Toggles */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-100">
                3. Foreign Exchange & Cross-Border Indicators (FEMA 1999)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0d2a54]/90 border border-blue-400/30 cursor-pointer hover:bg-[#15427d]">
                  <input
                    type="checkbox"
                    checked={hasFDI}
                    onChange={(e) => setHasFDI(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-400"
                  />
                  <span className="text-xs font-medium text-blue-100">
                    Received FDI / Foreign Equity
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0d2a54]/90 border border-blue-400/30 cursor-pointer hover:bg-[#15427d]">
                  <input
                    type="checkbox"
                    checked={hasShareTransfer}
                    onChange={(e) => setHasShareTransfer(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-400"
                  />
                  <span className="text-xs font-medium text-blue-100">
                    Share Transfer to/from Non-Residents
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0d2a54]/90 border border-blue-400/30 cursor-pointer hover:bg-[#15427d]">
                  <input
                    type="checkbox"
                    checked={hasECB_ODI}
                    onChange={(e) => setHasECB_ODI(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-400"
                  />
                  <span className="text-xs font-medium text-blue-100">
                    External Borrowing (ECB) or ODI
                  </span>
                </label>
              </div>
            </div>

            {/* Forensic / Whistleblower Indicator */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#143e75]/80 border border-amber-400/40 cursor-pointer shadow-sm">
                <input
                  type="checkbox"
                  checked={hasWhistleblowerOrRPT}
                  onChange={(e) => setHasWhistleblowerOrRPT(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 accent-amber-400 mt-0.5"
                />
                <div>
                  <div className="text-xs font-bold text-amber-300">
                    Special Matters: Related-Party Review / Whistleblower / Investigation Requirement
                  </div>
                  <div className="text-[11px] text-blue-100">
                    Check if your entity requires independent fact-finding, fraud examination, or internal control review.
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Right Column: Diagnostic Results Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12386a]/95 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-400/50 space-y-6">
              <div className="border-b border-blue-400/30 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Statutory Diagnostic Result
                </div>
                <h3 className="text-lg font-bold text-white font-cinzel mt-1">
                  Compliance Obligations Report
                </h3>
              </div>

              {/* Secretarial Audit Verdict */}
              <div className={`p-4 rounded-xl border ${
                isSecretarialAuditMandatory 
                  ? 'bg-[#184888]/90 border-amber-400/60 text-amber-100 shadow-md' 
                  : 'bg-[#0d2a54]/90 border-blue-400/40 text-blue-100'
              }`}>
                <div className="flex items-start gap-3">
                  {isSecretarialAuditMandatory ? (
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Secretarial Audit (Sec 204, Companies Act 2013)
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {isSecretarialAuditMandatory 
                        ? 'MANDATORY STATUTORY AUDIT REQUIRED' 
                        : 'VOLUNTARY / GOOD GOVERNANCE BEST PRACTICE'}
                    </div>
                    <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                      {isSecretarialAuditMandatory 
                        ? `Your company meets the statutory thresholds (Form MR-3 required by a Practicing Company Secretary to be annexed to Board Report).` 
                        : `Your current parameters are below the Section 204 mandatory threshold; however, peer-benchmarked governance review is recommended.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* FEMA & RBI Obligations */}
              {femaObligations.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Applicable FEMA & RBI Filings:
                  </div>
                  <div className="space-y-2">
                    {femaObligations.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#0d2a54] p-2.5 rounded-lg border border-blue-400/30 text-xs text-blue-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Forensic & Governance Review */}
              {forensicObligations.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Governance & Forensic Scope:
                  </div>
                  <div className="space-y-2">
                    {forensicObligations.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#0d2a54] p-2.5 rounded-lg border border-blue-400/30 text-xs text-blue-100">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <button
                  id="consult-checker-btn"
                  onClick={() => onOpenConsultation(getAssessmentSummaryText())}
                  className="w-full py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  Request Customized Audit Proposal
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-blue-200 mt-2">
                  Confidential evaluation by P. P. Agarwal & Co., Practicing Company Secretaries.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
