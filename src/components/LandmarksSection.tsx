import React, { useState } from 'react';
import { NANJING_LANDMARKS } from '../data/nanjingData';
import { Landmark } from '../types';
import { Search, MapPin, Clock, Ticket, Camera, ExternalLink, X, Landmark as LandmarkIcon, CheckCircle2 } from 'lucide-react';

interface LandmarksSectionProps {
  onSelectDay: (dayNumber: number) => void;
}

export const LandmarksSection: React.FC<LandmarksSectionProps> = ({ onSelectDay }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalLandmark, setActiveModalLandmark] = useState<Landmark | null>(null);

  const categories = [
    { id: 'all', label: '全部景观' },
    { id: '民国建筑', label: '民国建筑' },
    { id: '古迹遗址', label: '古迹遗址' },
    { id: '文博展馆', label: '文博展馆' },
    { id: '夜景漫步', label: '夜景漫步' },
  ];

  const filteredLandmarks = NANJING_LANDMARKS.filter((lm) => {
    const matchesCategory = selectedCategory === 'all' || lm.category === selectedCategory;
    const matchesSearch =
      lm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lm.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lm.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="landmarks" className="my-12 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D9D1C7]">
        <div>
          <div className="flex items-center gap-2">
            <LandmarkIcon className="w-6 h-6 text-[#5A5A40]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              金陵核心胜景名胜名录
            </h2>
          </div>
          <p className="text-sm text-[#5F5F4F] mt-1">
            严选四日游涵盖的南京最具代表性地标，点击卡片查阅最佳光线拍照点与门票预约秘籍
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5A5A40]" />
          <input
            type="text"
            placeholder="搜索景点、民国、明孝陵、博物院..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-[#D9D1C7] rounded-lg text-sm font-serif text-[#2C2C2C] focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40]"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 text-xs font-serif">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full font-bold transition cursor-pointer shrink-0 border ${
              selectedCategory === cat.id
                ? 'bg-[#5A5A40] text-white border-[#5A5A40] shadow'
                : 'bg-white text-[#5F5F4F] border-[#D9D1C7] hover:bg-[#F5F5F0]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Landmark Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {filteredLandmarks.map((lm) => (
          <div
            key={lm.id}
            onClick={() => setActiveModalLandmark(lm)}
            className="bg-white rounded-lg border border-[#D9D1C7] overflow-hidden shadow-sm hover:shadow-md hover:border-[#5A5A40] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Image & Badge */}
              <div className="relative h-48 overflow-hidden bg-[#EBE3D5]">
                <img
                  src={lm.imageUrl}
                  alt={lm.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5A5A40] text-white text-xs font-bold rounded shadow">
                  Day {lm.dayNumber} 行程地标
                </span>

                <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#2C2C2C]/80 text-[#8C7B60] text-xs font-bold rounded border border-[#8C7B60]/40">
                  {lm.category}
                </span>

                <h3 className="absolute bottom-3 left-3 right-3 text-xl font-bold text-white drop-shadow">
                  {lm.name}
                </h3>
              </div>

              {/* Body Info */}
              <div className="p-4 space-y-3 font-serif">
                <p className="text-xs text-[#5F5F4F] line-clamp-2 leading-relaxed">
                  {lm.description}
                </p>

                <div className="space-y-1.5 text-xs text-[#5F5F4F]">
                  <div className="flex items-center gap-1.5 text-[#5A5A40] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{lm.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>最佳时间：{lm.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5" />
                    <span>门票：{lm.ticketInfo}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {lm.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#F7F4F0] text-[#5A5A40] text-[11px] font-bold rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-[#F7F4F0] border-t border-[#D9D1C7] flex items-center justify-between text-xs font-bold text-[#5A5A40] group-hover:bg-[#5A5A40] group-hover:text-white transition-colors">
              <span>查看详细攻略与拍摄建议</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>

          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeModalLandmark && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F7F4F0] border border-[#5A5A40] max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden font-serif max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-56 sm:h-64 bg-[#2C2C2C]">
              <img
                src={activeModalLandmark.imageUrl}
                alt={activeModalLandmark.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent" />
              
              <button
                onClick={() => setActiveModalLandmark(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white hover:bg-[#5A5A40] rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 bg-[#5A5A40] text-white text-xs font-bold rounded">
                  DAY {activeModalLandmark.dayNumber} 行程
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalLandmark.name}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#3A3A2E]">
              
              <div className="bg-white p-3.5 rounded-lg border border-[#D9D1C7]">
                <h4 className="font-bold text-[#5A5A40] mb-1">景点概览与历史背景：</h4>
                <p className="leading-relaxed text-xs sm:text-sm">{activeModalLandmark.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded border border-[#D9D1C7]">
                  <span className="font-bold text-[#5A5A40] block mb-1">精髓亮点：</span>
                  <span>{activeModalLandmark.highlight}</span>
                </div>
                <div className="bg-white p-3 rounded border border-[#D9D1C7]">
                  <span className="font-bold text-[#5A5A40] block mb-1">最佳游览时段：</span>
                  <span>{activeModalLandmark.bestTime}（建议时长：{activeModalLandmark.recommendedHours}）</span>
                </div>
                <div className="bg-white p-3 rounded border border-[#D9D1C7]">
                  <span className="font-bold text-[#5A5A40] block mb-1">门票与预约信息：</span>
                  <span>{activeModalLandmark.ticketInfo}</span>
                </div>
                <div className="bg-white p-3 rounded border border-[#D9D1C7]">
                  <span className="font-bold text-[#5A5A40] block mb-1">详细地址位置：</span>
                  <span>{activeModalLandmark.address}</span>
                </div>
              </div>

              {/* Photo Tip */}
              <div className="bg-[#8C7B60]/10 p-3.5 rounded border border-[#8C7B60]/30 text-xs flex items-start gap-2">
                <Camera className="w-4 h-4 text-[#8C7B60] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#8C7B60]">摄影拍照与取景秘籍：</strong>
                  <p className="text-[#3A3A2E] mt-0.5">{activeModalLandmark.photoTip}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#D9D1C7] flex items-center justify-between">
              <button
                onClick={() => {
                  onSelectDay(activeModalLandmark.dayNumber);
                  setActiveModalLandmark(null);
                  const el = document.getElementById('itinerary');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-[#5A5A40] text-white rounded font-bold text-xs hover:bg-[#3A3A2E] transition flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                定位到 Day {activeModalLandmark.dayNumber} 日程表
              </button>

              <button
                onClick={() => setActiveModalLandmark(null)}
                className="px-4 py-2 bg-[#EBE3D5] text-[#2C2C2C] rounded font-bold text-xs hover:bg-[#D9D1C7] transition cursor-pointer"
              >
                关闭
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
