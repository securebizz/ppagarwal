export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle: string;
  category: 'secretarial-audit' | 'fema-rbi' | 'forensic-audit';
  tagline: string;
  summary: string;
  keyAspects: string[];
  statutoryFramework: string[];
  deliverables: string[];
  icon: string;
}

export interface ClientTrackItem {
  id: string;
  name: string;
  shortName: string;
  sector: 'PSU' | 'Heavy Engineering & Energy' | 'Infrastructure & Ports' | 'Manufacturing & Chemicals' | 'Automotive & Retail';
  category: 'Public Sector Undertaking' | 'Listed Enterprise' | 'Private Major';
  description: string;
  auditScope: string;
  featured: boolean;
}

export interface MissionPillar {
  id: string;
  title: string;
  shortDescription: string;
  fullQuote: string;
  keyHighlight: string;
}

export interface ComplianceMilestone {
  id: string;
  title: string;
  authority: 'MCA' | 'RBI / FEMA' | 'SEBI' | 'ICSI Guidelines';
  dueDate: string;
  periodicity: string;
  description: string;
  applicableTo: string;
}
