import { ServiceDetail, ClientTrackItem, MissionPillar, ComplianceMilestone } from '../types';

export const FIRM_INFO = {
  name: "P. P. Agarwal & Co.",
  subtitle: "Practicing Company Secretaries",
  leadPartner: "CS Pramod Prasad Agarwal",
  designation: "FCS, Practicing Company Secretary",
  firmType: "Practicing Company Secretaries Firm",
  address: "C-154, East of Kailash, New Delhi – 110065",
  city: "New Delhi",
  pincode: "110065",
  locality: "East of Kailash",
  email: "contact@ppagarwalco.com",
  phone: "+91 11 4165 XXXX / +91 9810X XXXXX",
  award: {
    title: "ICSI Best Secretarial Audit Report Award, 2021",
    presenter: "Sh. Amit Shah",
    presenterRole: "Hon'ble Home Minister and Minister for Cooperation, Government of India",
    edition: "21st edition of ICSI National Awards for Excellence in Corporate Governance, 2021",
    location: "Mumbai",
    date: "December 18, 2021",
    juryChairman: "Justice P Sathasivam",
    juryRole: "Jury Chairman and Former Chief Justice of India",
    recognitionStatement: "Recognizing the importance of the Secretarial Audit Report as an effective tool of corporate compliance management."
  },
  aboutSnippet: "CS Pramod Prasad Agarwal, P. P. Agarwal & Co., has been awarded the “ICSI Best Secretarial Audit Report Award, 2021” by Sh. Amit Shah, Home Minister and Minister for Cooperation at the 21st edition of ICSI National Awards for Excellence in Corporate Governance, 2021, held in Mumbai on December 18, 2021, in the eminent presence of Justice P Sathasivam, jury chairman and former Chief Justice of India, recognizing the importance of the Secretarial Audit Report as an effective tool of corporate compliance management."
};

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: "continuous-knowledge",
    title: "Continuous Knowledge & Legal Evolution",
    shortDescription: "Knowledge is never complete; we stay constantly abreast of evolving business environments and statutes.",
    fullQuote: "We believe that the Knowledge is never complete. It improves day by day as we observe and practice for it in a positive manner. We remain abreast with changes in business environment, laws affecting the industry, commerce and business which include environment, company matters, securities market and taxation aspects. We always keep track of the changes made in various laws and update ourselves so as to be effective.",
    keyHighlight: "Continuous monitoring of MCA notifications, SEBI circulars, RBI Master Directions & landmark NCLT/NCLAT jurisprudence."
  },
  {
    id: "knowledge-sharing",
    title: "Sharing Knowledge & Practical Nuances",
    shortDescription: "Collaborating with professional peers and industry leaders to bridge theoretical law with practical realities.",
    fullQuote: "We believe in Sharing the knowledge we gain with our professional friends and industry leaders to know the nuances as the practical life is different from theoretical explanations.",
    keyHighlight: "Active thought-leadership, peer interaction, and governance dialogues."
  },
  {
    id: "integrity-loyalty",
    title: "Uncompromising Integrity & Loyalty",
    shortDescription: "Placing client trust and highest professional ethics at the heart of every interaction.",
    fullQuote: "We believe that the Integrity and loyalty to the client and the profession are two most important virtues for any professional and in our dealings with clients we always give due attention to this aspect.",
    keyHighlight: "Strict professional code of ethics, client confidentiality, and fiduciary commitment."
  },
  {
    id: "strict-timelines",
    title: "Strict Timeline Adherence",
    shortDescription: "Ensuring 100% of all corporate filings and audit assignments are completed punctually.",
    fullQuote: "We pay due respect to Maintain the Timelines of the assignment. All of our assignments are completed on time.",
    keyHighlight: "Zero-delay compliance culture safeguarding boards and management from regulatory default."
  },
  {
    id: "hallmark-quality",
    title: "Hallmark Quality of Work",
    shortDescription: "Meticulous analytical rigor and documentation that distinguishes our practice from peers.",
    fullQuote: "Quality of work is the hallmark for us. It distinguishes us from our peers.",
    keyHighlight: "National award-recognized secretarial audit reporting standard."
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "secretarial-audit",
    title: "Secretarial Audits of Public and Private Sectors",
    shortTitle: "Secretarial Audit",
    category: "secretarial-audit",
    tagline: "Comprehensive statutory evaluation of corporate governance, board procedures, and statutory compliance.",
    summary: "The firm possesses specialized expertise in conducting secretarial audits for Public Sector Undertakings (PSUs) and leading private conglomerates across diverse industries, including Manufacturing, Infrastructure, Power, and Services.",
    keyAspects: [
      "Specialized auditing of Public Sector Undertakings (PSUs) and Listed Companies under Section 204 of the Companies Act, 2013 and SEBI (LODR) Regulations.",
      "Comprehensive evaluation across Manufacturing, Infrastructure, Power & Energy, Heavy Engineering, and Service sectors.",
      "Thorough verification of secretarial records, board and committee meetings, statutory registers, and filing trails with MCA & Stock Exchanges.",
      "Identification of compliance gaps, proactive remediation recommendations, and board-level reporting.",
      "Implementation of ICSI Secretarial Standards (SS-1 on Board Meetings and SS-2 on General Meetings)."
    ],
    statutoryFramework: [
      "Companies Act, 2013 (Section 204 & Rule 9 of Companies Rules 2014)",
      "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
      "ICSI Auditing Standards & Secretarial Standards (SS-1, SS-2)",
      "Department of Public Enterprises (DPE) Corporate Governance Guidelines for PSUs"
    ],
    deliverables: [
      "Form MR-3 Secretarial Audit Report with comprehensive findings",
      "Executive Compliance Summary for the Board of Directors & Audit Committee",
      "Actionable Remediation Matrix for non-compliances and governance enhancements",
      "Annual Secretarial Compliance Report (ASCR) for listed entities"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "fema-rbi-compliance",
    title: "FEMA and RBI Compliance Practice",
    shortTitle: "FEMA & RBI Practice",
    category: "fema-rbi",
    tagline: "Dedicated advisory and compliance support under the Foreign Exchange Management Act, 1999 and RBI regulatory regime.",
    summary: "Designed to assist Indian companies, foreign investors, non-resident shareholders, and business groups in cross-border transactions, inbound/outbound investments, external borrowings, and stringent RBI reporting obligations.",
    keyAspects: [
      "Foreign Direct Investment (FDI) advisory, structuring, and compliance trails.",
      "Issue and transfer of shares, convertibles, and securities to non-residents.",
      "Mandatory regulatory filings on FIRMS & RBI portals: Form FC-GPR, Form FC-TRS, and annual Foreign Liabilities and Assets (FLA) reporting.",
      "External Commercial Borrowings (ECB) documentation, registration (Form ECB / LRN), and monthly returns.",
      "Overseas Direct Investment (ODI) / Overseas Portfolio Investment (OPI) structuring under updated FEMA regulations.",
      "Establishment, compliance, and annual reporting for Branch Offices (BO), Liaison Offices (LO), and Project Offices (PO) in India.",
      "Compounding of FEMA contraventions with the Reserve Bank of India.",
      "Export and Import realization matters, cross-border remittances, and dedicated liaison with Authorized Dealer (AD) Category-I Banks."
    ],
    statutoryFramework: [
      "Foreign Exchange Management Act, 1999 (FEMA) & Allied Rules",
      "RBI Master Directions on Foreign Investment in India",
      "FEMA (Overseas Investment) Rules & Regulations, 2022",
      "RBI Master Directions on External Commercial Borrowings & Trade Credits"
    ],
    deliverables: [
      "Single Master Form (SMF) & FIRMS Portal Filing Acknowledgements (FC-GPR / FC-TRS)",
      "Annual FLA Return Certification & Submission",
      "Compounding Application Petitions and Representation before RBI",
      "Transaction Structuring Memorandums & AD Bank Compliance Dossiers"
    ],
    icon: "Globe"
  },
  {
    id: "forensic-audit",
    title: "Forensic Audit and Investigation Practice",
    shortTitle: "Forensic & Investigations",
    category: "forensic-audit",
    tagline: "Governance-led forensic examination, objective fact-finding, and evidence-based fraud risk mitigation.",
    summary: "Providing specialized forensic audit support to companies, promoters, boards, audit committees, lenders, and stakeholders in identifying, examining, and responding to suspected financial irregularities and governance concerns.",
    keyAspects: [
      "Objective fact-finding and evidence-based analysis combining corporate law expertise with transaction-level review.",
      "Examination of suspected frauds, financial misconduct, and unauthorized transactions.",
      "In-depth review of Related-Party Transactions (RPT) and transfer pricing/value diversion anomalies.",
      "Detection of diversion or misapplication of corporate funds and loan proceeds.",
      "Scrutiny for misstatement of statutory records, minutes, and books of accounts.",
      "Investigation into non-compliance with corporate approvals, delegation of powers, and charter documents.",
      "Investigation of vendor/procurement irregularities, kickbacks, and contract manipulations.",
      "Confidential examination of whistleblower complaints and senior employee misconduct.",
      "Identification of internal control gaps, documentation lapses, and governance failures with corrective remediation."
    ],
    statutoryFramework: [
      "Companies Act, 2013 (Section 143(12) Fraud Reporting & Section 213/216 Investigations)",
      "SEBI (Listing Obligations & Disclosure Requirements) Forensic Regulations",
      "ICSI & ICAI Standards on Forensic Accounting and Investigation",
      "Indian Evidence Act & Digital Evidence Preservation Protocols"
    ],
    deliverables: [
      "Confidential, Independent Forensic Audit & Investigation Report",
      "Digital & Document Evidence Trail Matrix",
      "Management Remediation Action Plan & Internal Control Fortification Roadmap",
      "Regulatory & Board Presentation Briefs for Audit Committees and Counsel"
    ],
    icon: "SearchCode"
  }
];

export const CLIENT_TRACK_RECORD: ClientTrackItem[] = [
  {
    id: "ongc",
    name: "Oil and Natural Gas Corporation (ONGC)",
    shortName: "ONGC",
    sector: "Heavy Engineering & Energy",
    category: "Public Sector Undertaking",
    description: "India's largest crude oil and natural gas exploration and production company, a Maharatna PSU.",
    auditScope: "Conducted Secretarial Audit ensuring comprehensive adherence to Companies Act, SEBI LODR, DPE guidelines, and statutory disclosures.",
    featured: true
  },
  {
    id: "bhel",
    name: "Bharat Heavy Electricals Limited (BHEL)",
    shortName: "BHEL",
    sector: "Heavy Engineering & Energy",
    category: "Public Sector Undertaking",
    description: "India's premier engineering and manufacturing enterprise in the energy and infrastructure sectors, a Maharatna PSU.",
    auditScope: "Secretarial Audit of statutory records, board processes, committee charters, and capital market compliances.",
    featured: true
  },
  {
    id: "nhpc",
    name: "NHPC Limited",
    shortName: "NHPC",
    sector: "Heavy Engineering & Energy",
    category: "Public Sector Undertaking",
    description: "India's premier hydro-power generation company and Mini-Ratna Category-I PSU enterprise.",
    auditScope: "Comprehensive secretarial compliance evaluation, power sector regulatory interface, and board governance reviews.",
    featured: true
  },
  {
    id: "oil",
    name: "Oil India Limited (OIL)",
    shortName: "OIL",
    sector: "Heavy Engineering & Energy",
    category: "Public Sector Undertaking",
    description: "Navratna PSU engaged in the business of exploration, development and production of crude oil and natural gas.",
    auditScope: "Statutory secretarial auditing, corporate governance reporting, and statutory register examinations.",
    featured: true
  },
  {
    id: "dtl",
    name: "Delhi Transco Limited (DTL)",
    shortName: "DTL",
    sector: "Infrastructure & Ports",
    category: "Public Sector Undertaking",
    description: "State power transmission utility of the National Capital Territory of Delhi.",
    auditScope: "Secretarial Audit, power transmission regulatory governance compliance, and state PSU statutory trail verification.",
    featured: true
  },
  {
    id: "dpcl",
    name: "Dhamra Port Company Limited (DPCL)",
    shortName: "DPCL",
    sector: "Infrastructure & Ports",
    category: "Listed Enterprise",
    description: "Major deep-water, all-weather commercial port infrastructure on the eastern coast of India.",
    auditScope: "Secretarial audit covering port infrastructure regulations, maritime corporate compliances, and corporate approvals.",
    featured: true
  },
  {
    id: "india-glycols",
    name: "India Glycols Limited",
    shortName: "India Glycols",
    sector: "Manufacturing & Chemicals",
    category: "Listed Enterprise",
    description: "Leading green chemical and renewable specialty chemicals manufacturing conglomerate.",
    auditScope: "Statutory secretarial audit, listed entity disclosure verification, and environmental-corporate governance tracking.",
    featured: true
  },
  {
    id: "competent-automobiles",
    name: "Competent Automobiles Limited",
    shortName: "Competent Automobiles",
    sector: "Automotive & Retail",
    category: "Listed Enterprise",
    description: "One of India's largest authorized dealers for Maruti Suzuki India Limited with extensive retail operations.",
    auditScope: "Secretarial audit, retail & dealership corporate compliance management, and SEBI listing regulations adherence.",
    featured: true
  }
];

export const COMPLIANCE_MILESTONES: ComplianceMilestone[] = [
  {
    id: "fla-return",
    title: "Annual Return on Foreign Liabilities and Assets (FLA)",
    authority: "RBI / FEMA",
    dueDate: "July 15 (Annual)",
    periodicity: "Annual",
    description: "Mandatory filing for Indian companies that have received FDI or made ODI in any previous years.",
    applicableTo: "All entities with foreign liabilities / assets"
  },
  {
    id: "form-fc-gpr",
    title: "Form FC-GPR (FDI Share Allotment)",
    authority: "RBI / FEMA",
    dueDate: "Within 30 days of share allotment",
    periodicity: "Event-based",
    description: "Reporting of issue of capital instruments to persons resident outside India through FIRMS SMF portal.",
    applicableTo: "Companies receiving foreign equity investment"
  },
  {
    id: "form-fc-trs",
    title: "Form FC-TRS (Transfer of Shares)",
    authority: "RBI / FEMA",
    dueDate: "Within 60 days of transfer or funds receipt",
    periodicity: "Event-based",
    description: "Reporting of transfer of shares between a resident and a non-resident Indian / foreign investor.",
    applicableTo: "Secondary equity transactions involving non-residents"
  },
  {
    id: "form-mr-3",
    title: "Form MR-3 (Secretarial Audit Report)",
    authority: "MCA",
    dueDate: "Annexed to Board Report (AGM)",
    periodicity: "Annual",
    description: "Mandatory secretarial audit report by a Practicing Company Secretary for prescribed threshold companies.",
    applicableTo: "Listed companies, Public Cos with Paid-up Capital ≥ ₹50 Cr or Turnover ≥ ₹250 Cr"
  },
  {
    id: "form-dpt-3",
    title: "Form DPT-3 (Return of Deposits / Exempted Loans)",
    authority: "MCA",
    dueDate: "June 30 (Annual)",
    periodicity: "Annual",
    description: "Return detailing outstanding loans, advances, or receipts not considered deposits under Section 73.",
    applicableTo: "All companies except Government companies"
  },
  {
    id: "dir-3-kyc",
    title: "DIR-3 KYC / Web KYC",
    authority: "MCA",
    dueDate: "September 30 (Annual)",
    periodicity: "Annual",
    description: "Mandatory annual KYC verification for all active Director Identification Number (DIN) holders.",
    applicableTo: "All active directors and designated partners"
  }
];
