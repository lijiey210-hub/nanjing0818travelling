import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveMapCanvas } from './components/InteractiveMapCanvas';
import { DayScheduleView } from './components/DayScheduleView';
import { LandmarksSection } from './components/LandmarksSection';
import { FoodAndSouvenirSection } from './components/FoodAndSouvenirSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { TravelTipsAndChecklist } from './components/TravelTipsAndChecklist';
import { PrintExportModal } from './components/PrintExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('itinerary');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  const handleSelectDay = (day: number) => {
    setSelectedDayNumber(day);
  };

  return (
    <div className="min-h-screen bg-[#F7F4F0] text-[#3A3A2E] font-serif selection:bg-[#5A5A40] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      {/* Hero Showcase Banner */}
      <Hero
        selectedDay={selectedDayNumber}
        onSelectDay={handleSelectDay}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        
        {/* Interactive Map Section */}
        <InteractiveMapCanvas
          selectedDayNumber={selectedDayNumber}
          onSelectDay={handleSelectDay}
        />

        {/* Timetable Schedule View for Active Day */}
        <DayScheduleView
          selectedDayNumber={selectedDayNumber}
          onSelectDay={handleSelectDay}
        />

        {/* Nanjing Famous Landmarks Showcase */}
        <LandmarksSection
          onSelectDay={handleSelectDay}
        />

        {/* Local Delicacies & Souvenir Guide */}
        <FoodAndSouvenirSection />

        {/* Expense Budget Estimator */}
        <BudgetCalculator />

        {/* Booking Checklist & Metro Travel Tips */}
        <TravelTipsAndChecklist />

      </main>

      {/* Footer */}
      <Footer />

      {/* Print / Export Modal */}
      <PrintExportModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
