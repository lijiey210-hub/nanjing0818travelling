import React, { useState } from 'react';
import { Compass, Map, Utensils, Calculator, CheckSquare, Printer, Music, VolumeX, Menu, X, Landmark as LandmarkIcon } from 'lucide-react';
import { jinlingAudio } from '../utils/audioSynth';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPrintModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenPrintModal }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleAudio = () => {
    const status = jinlingAudio.toggle();
    setIsPlayingAudio(status);
  };

  const navItems = [
    { id: 'itinerary', label: '四日行程', icon: Compass },
    { id: 'map', label: '路线地图', icon: Map },
    { id: 'landmarks', label: '名胜古迹', icon: LandmarkIcon },
    { id: 'food', label: '美食特产', icon: Utensils },
    { id: 'budget', label: '费用预算', icon: Calculator },
    { id: 'checklist', label: '出行指南', icon: CheckSquare },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4F0]/95 backdrop-blur-md border-b border-[#D9D1C7] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand with Subtle Tribute Seal */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('itinerary')}>
            <div className="relative w-9 h-9 bg-[#3A3A2E] rounded flex items-center justify-center text-[#F7F4F0] font-serif font-bold text-lg shadow border border-[#8C7B60] transition-transform group-hover:scale-105">
              金
            </div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-lg sm:text-xl font-bold font-serif text-[#2C2C2C] tracking-wide">
                南京四日游
              </h1>
              {/* Subtle Elegant Cinnabar Seal for Sponsor "kim lvan" */}
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-[#8B261D]/10 text-[#8B261D] border border-[#8B261D]/30 rounded text-[11px] font-serif font-bold tracking-wider" title="特别致谢：kim lvan 倾情襄赞">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B261D]"></span>
                kim lvan 雅赞
              </span>
            </div>
          </div>

          {/* Center Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-serif font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#5A5A40] text-white shadow-sm'
                      : 'text-[#5F5F4F] hover:bg-[#EBE3D5] hover:text-[#2C2C2C]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions Header */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              title={isPlayingAudio ? '关闭背景音律' : '播放背景古韵'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-serif border transition-all cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#8C7B60]/15 border-[#8C7B60] text-[#5A5A40] font-bold'
                  : 'bg-white/80 border-[#D9D1C7] text-[#5F5F4F] hover:border-[#5A5A40]'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Music className="w-3.5 h-3.5 animate-spin text-[#8C7B60]" />
                  <span>古韵响鸣</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>背景古韵</span>
                </>
              )}
            </button>

            {/* Print/Export Button */}
            <button
              onClick={onOpenPrintModal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3A3A2E] text-[#F7F4F0] hover:bg-[#5A5A40] rounded text-xs font-serif font-medium shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>打印/导出</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleToggleAudio}
              className="p-1.5 text-[#5A5A40]"
            >
              {isPlayingAudio ? <Music className="w-5 h-5 animate-spin" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#2C2C2C] hover:text-[#5A5A40] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EBE3D5] border-b border-[#D9D1C7] px-4 pt-2 pb-4 space-y-1">
          <div className="flex items-center justify-between pb-2 border-b border-[#D9D1C7]/60 mb-2">
            <span className="text-xs font-serif text-[#8B261D] font-bold">
              特别致谢：kim lvan 鼎力襄赞
            </span>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-serif font-medium ${
                  isActive ? 'bg-[#5A5A40] text-white' : 'text-[#2C2C2C] hover:bg-[#D9D1C7]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-2 border-t border-[#D9D1C7]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 bg-[#3A3A2E] text-[#F7F4F0] rounded-md text-xs font-serif"
            >
              <Printer className="w-4 h-4" />
              <span>导出 / 打印行程全貌</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
