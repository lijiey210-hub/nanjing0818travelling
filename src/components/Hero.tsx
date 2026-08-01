import React from 'react';
import { Calendar, MapPin, Sparkles, Navigation, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/nanjing_hero_banner_1785574492906.jpg';

interface HeroProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedDay, onSelectDay }) => {
  const dayCards = [
    { day: 1, date: '18日', title: '初识南京', subtitle: '鸡鸣古刹 · 城墙日落 · 玄武夜骑', color: 'border-[#5A5A40]' },
    { day: 2, date: '19日', title: '钟山风景区', subtitle: '明孝陵 · 美龄宫 · 音乐台收尾', color: 'border-[#5A5A40]' },
    { day: 3, date: '20日', title: '南京 City Walk', subtitle: '总统府 · 六朝馆 · 颐和路洋房', color: 'border-[#8C7B60]' },
    { day: 4, date: '21日', title: '南京博物院', subtitle: '南博深度 · 中华门 · 老门东收尾', color: 'border-[#8C7B60]' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#2C2C2C] text-[#F7F4F0] overflow-hidden border-b-4 border-[#5A5A40]">
      {/* Background Image with Vintage Sepia Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
        <img
          src={heroImage}
          alt="南京金陵名胜全景"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter saturate-150 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        
        {/* Vintage Seal Stamp & Tag */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5A5A40] text-white font-serif text-xs font-bold rounded shadow border border-[#5A5A40] tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            金陵记游 · 民国风情精品导览
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#8B261D]/90 text-[#F7F4F0] font-serif text-xs font-bold rounded border border-[#C24335] shadow-sm tracking-widest" title="kim lvan 鼎力襄赞">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B872]"></span>
            kim lvan 雅赞襄助
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#3A3A2E]/80 text-[#D9D1C7] font-serif text-xs rounded border border-[#8C7B60]/40">
            <Calendar className="w-3.5 h-3.5 text-[#8C7B60]" />
            旅行时间：8月18日 — 8月21日（四天三晚）
          </span>
        </div>

        {/* Main Title Banner */}
        <div className="text-center sm:text-left mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-[#F7F4F0] drop-shadow-md leading-tight">
            梧桐深处见金陵，<br className="hidden sm:inline" />
            <span className="text-[#8C7B60] underline decoration-[#5A5A40] decoration-wavy decoration-2">四日慢步</span> 诗意重逢
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#D9D1C7] font-serif max-w-3xl leading-relaxed">
            从玄武湖的夜风、明孝陵的神道、颐和路的梧桐，到十里秦淮的桨声灯影与六朝博物院的古韵。精心规划南京四日全景行程，带您体验最纯粹的金陵烟火与民国美学。
          </p>
        </div>

        {/* Key Trip Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl">
          <div className="bg-[#3A3A2E]/80 border border-[#5A5A40]/40 p-3 rounded-lg text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#8C7B60]">4天3晚</div>
            <div className="text-xs text-[#D9D1C7] font-serif mt-0.5">轻松节奏路线</div>
          </div>
          <div className="bg-[#3A3A2E]/80 border border-[#5A5A40]/40 p-3 rounded-lg text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#8C7B60]">15+处</div>
            <div className="text-xs text-[#D9D1C7] font-serif mt-0.5">必游核心景观</div>
          </div>
          <div className="bg-[#3A3A2E]/80 border border-[#5A5A40]/40 p-3 rounded-lg text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#8C7B60]">10+种</div>
            <div className="text-xs text-[#D9D1C7] font-serif mt-0.5">金陵地道名吃</div>
          </div>
          <div className="bg-[#3A3A2E]/80 border border-[#5A5A40]/40 p-3 rounded-lg text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#8C7B60]">100%</div>
            <div className="text-xs text-[#D9D1C7] font-serif mt-0.5">离线实测线路</div>
          </div>
        </div>

        {/* 4-Day Navigation Jump Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-serif text-[#D9D1C7]">
            <span className="flex items-center gap-1.5 font-bold text-[#8C7B60]">
              <Navigation className="w-4 h-4" />
              点击选择日期快速切换行程与地图：
            </span>
            <span className="hidden sm:inline text-[#D9D1C7]/80">包含每天路线图、景点时间表与注意事项</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {dayCards.map((item) => {
              const isSelected = selectedDay === item.day;
              return (
                <button
                  key={item.day}
                  onClick={() => {
                    onSelectDay(item.day);
                    scrollToSection('itinerary');
                  }}
                  className={`relative p-4 rounded-lg text-left transition-all font-serif cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-[#5A5A40] text-[#F7F4F0] border-[#8C7B60] shadow-lg scale-[1.02]'
                      : 'bg-[#3A3A2E]/90 text-[#D9D1C7] border-[#5F5F4F] hover:border-[#5A5A40] hover:bg-[#5A5A40]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                      isSelected ? 'bg-[#8C7B60] text-[#2C2C2C]' : 'bg-[#5A5A40]/40 text-[#8C7B60]'
                    }`}>
                      DAY {item.day} · {item.date}
                    </span>
                    <MapPin className="w-4 h-4 text-[#8C7B60]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F7F4F0] mt-1">{item.title}</h3>
                  <p className="text-xs opacity-80 mt-1 line-clamp-1">{item.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => scrollToSection('itinerary')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5A5A40] hover:bg-[#3A3A2E] text-white rounded-md text-sm font-serif font-medium shadow-md transition-all group cursor-pointer"
          >
            <span>开始查看详细四日游表</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
