import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AwardShowcase } from './components/AwardShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ClientTrackRecord } from './components/ClientTrackRecord';
import { MissionValues } from './components/MissionValues';
import { ComplianceAssessmentTool } from './components/ComplianceAssessmentTool';
import { ComplianceCalendar } from './components/ComplianceCalendar';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [assessmentNotes, setAssessmentNotes] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceOrNotes?: string) => {
    if (serviceOrNotes && serviceOrNotes.includes('Assessment Summary')) {
      setAssessmentNotes(serviceOrNotes);
      // scroll to contact form with pre-filled notes
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setSelectedService(serviceOrNotes);
      setIsConsultationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e2a52] via-[#143d75] to-[#0c274c] font-sans text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* National ICSI Award Showcase */}
        <AwardShowcase />

        {/* Core Practice Areas (Secretarial Audits, FEMA & RBI, Forensic Audits) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Public Sector & Private Conglomerate Track Record */}
        <ClientTrackRecord />

        {/* Firm Mission & Guiding Principles */}
        <MissionValues />

        {/* Interactive Statutory Compliance Checker */}
        <ComplianceAssessmentTool onOpenConsultation={handleOpenConsultation} />

        {/* Regulatory Due Dates Calendar */}
        <ComplianceCalendar />

        {/* Office Contact, Location & Inquiry Form */}
        <ContactSection initialNotes={assessmentNotes} />
      </main>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialService={selectedService}
      />

      {/* Corporate Legal Footer */}
      <Footer />
    </div>
  );
}

