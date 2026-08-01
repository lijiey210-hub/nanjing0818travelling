import React, { useState } from 'react';
import { ITINERARY_DAYS } from '../data/nanjingData';
import { TimelineItem, CategoryType } from '../types';
import { Clock, MapPin, Sparkles, Camera, CheckCircle, Info, Filter, ArrowRight, Utensils, Compass, Maximize2, Map, Volume2 } from 'lucide-react';
import { MAP_GALLERY_ITEMS } from '../assets/mapAssets';
import { ImageLightboxModal } from './ImageLightboxModal';

import mingXiaolingImg from '../assets/images/lm_ming_xiaoling_1785580214519.jpg';
import zongtongfuImg from '../assets/images/lm_zongtongfu_1785580227282.jpg';
import nanjingMuseumImg from '../assets/images/lm_nanjing_museum_1785580241274.jpg';
import meilingPalaceImg from '../assets/images/lm_meiling_palace_1785580258161.jpg';
import jimingTempleImg from '../assets/images/lm_jiming_temple_1785580272479.jpg';
import qinhuaiRiverImg from '../assets/images/lm_qinhuai_river_1785580283248.jpg';
import yiheRoadImg from '../assets/images/lm_yihe_road_1785580302094.jpg';
import zhonghuamenImg from '../assets/images/lm_zhonghuamen_1785580316378.jpg';

import yansuidyaImg from '../assets/images/food_yansuidya_1785580335791.jpg';
import yaxuefensiImg from '../assets/images/food_yaxuefensi_1785580348601.jpg';
import niurouguotieImg from '../assets/images/food_niurouguotie_1785580361692.jpg';
import pidumianImg from '../assets/images/food_pidumian_1785580380226.jpg';
import tangyumiaoImg from '../assets/images/food_tangyumiao_1785580392013.jpg';
import tangbaoShaobingImg from '../assets/images/food_tangbao_shaobing_1785580402733.jpg';

import duckGiftImg from '../assets/images/souv_duck_gift_1785580445362.jpg';
import pastryGiftImg from '../assets/images/souv_pastry_gift_1785580462302.jpg';

interface DayScheduleViewProps {
  selectedDayNumber: number;
  onSelectDay: (day: number) => void;
  onOpenLandmarkModal?: (name: string) => void;
}

export const DayScheduleView: React.FC<DayScheduleViewProps> = ({
  selectedDayNumber,
  onSelectDay,
  onOpenLandmarkModal,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentDay = ITINERARY_DAYS.find((d) => d.dayNumber === selectedDayNumber) || ITINERARY_DAYS[0];

  // Find corresponding specific map image for current day
  const currentDayMapItem = MAP_GALLERY_ITEMS.find((m) => m.dayNumber === selectedDayNumber) || MAP_GALLERY_ITEMS[0];

  const filteredTimeline = currentDay.timeline.filter((item) => {
    if (categoryFilter === 'all') return true;
    return item.category === categoryFilter;
  });

  const getTimelineImage = (title: string, location: string): string | null => {
    const text = (title + ' ' + location).toLowerCase();
    if (text.includes('博物院')) return nanjingMuseumImg;
    if (text.includes('中华门') || text.includes('瓮城')) return zhonghuamenImg;
    if (text.includes('老门东') || text.includes('门东')) return tangbaoShaobingImg;
    if (text.includes('新街口') || text.includes('德基')) return pastryGiftImg;
    if (text.includes('鸡鸣寺')) return jimingTempleImg;
    if (text.includes('玄武湖')) return jimingTempleImg;
    if (text.includes('狮子桥') || text.includes('湖南路')) return pidumianImg;
    if (text.includes('明孝陵')) return mingXiaolingImg;
    if (text.includes('美龄宫')) return meilingPalaceImg;
    if (text.includes('中山陵') || text.includes('音乐台') || text.includes('灵谷寺')) return mingXiaolingImg;
    if (text.includes('总统府')) return zongtongfuImg;
    if (text.includes('六朝')) return nanjingMuseumImg;
    if (text.includes('科巷')) return niurouguotieImg;
    if (text.includes('颐和路')) return yiheRoadImg;
    if (text.includes('夫子庙') || text.includes('秦淮')) return qinhuaiRiverImg;
    if (text.includes('芳婆') || text.includes('鸭血粉丝')) return yaxuefensiImg;
    if (text.includes('盐水鸭')) return yansuidyaImg;
    if (text.includes('伴手礼') || text.includes('云锦')) return duckGiftImg;
    return null;
  };

  const getCategoryBadge = (cat: CategoryType) => {
    switch (cat) {
      case 'spot':
        return <span className="px-2 py-0.5 bg-[#5A5A40]/15 text-[#5A5A40] rounded text-xs font-bold border border-[#5A5A40]/30">核心景点</span>;
      case 'food':
        return <span className="px-2 py-0.5 bg-[#8C7B60]/15 text-[#8C7B60] rounded text-xs font-bold border border-[#8C7B60]/30">金陵美食</span>;
      case 'leisure':
        return <span className="px-2 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] rounded text-xs font-bold border border-[#5A5A40]/20">休闲骑行/漫步</span>;
      case 'shopping':
        return <span className="px-2 py-0.5 bg-[#3A3A2E]/15 text-[#3A3A2E] rounded text-xs font-bold border border-[#3A3A2E]/30">购物伴手礼</span>;
      case 'transport':
        return <span className="px-2 py-0.5 bg-[#5F5F4F]/15 text-[#5F5F4F] rounded text-xs font-bold border border-[#5F5F4F]/30">交通接驳</span>;
      default:
        return null;
    }
  };

  return (
    <div id="itinerary" className="my-10 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif">
      
      {/* Lightbox for day map */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageUrl={currentDayMapItem.imageUrl}
        title={currentDayMapItem.title}
        subtitle={currentDayMapItem.subtitle}
        description={currentDayMapItem.description}
      />

      {/* Top Banner Day Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#D9D1C7]">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#5A5A40] text-white font-bold text-lg rounded shadow">
              DAY {currentDay.dayNumber}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              {currentDay.fullDate} 行程时间表
            </h2>
          </div>
          <p className="text-sm text-[#5F5F4F] mt-1 font-bold">
            主题：{currentDay.title} —— {currentDay.subtitle}
          </p>
        </div>

        {/* 4 Days Quick Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ITINERARY_DAYS.map((d) => {
            const isSelected = selectedDayNumber === d.dayNumber;
            return (
              <button
                key={d.dayNumber}
                onClick={() => onSelectDay(d.dayNumber)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#5A5A40] text-white border-[#5A5A40] shadow'
                    : 'bg-[#F5F5F0] text-[#5F5F4F] border-[#D9D1C7] hover:bg-[#EBE3D5]'
                }`}
              >
                <div>{d.date}（Day {d.dayNumber}）</div>
                <div className="text-[11px] opacity-80 font-normal">{d.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Day Overview Summary & Hand-drawn Route Map Card */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Left: Summary text */}
        <div className="md:col-span-8 bg-[#F7F4F0] p-4 rounded-lg border border-[#D9D1C7] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#5A5A40]" />
              <span className="font-bold text-sm text-[#2C2C2C]">当日核心体验关键词：</span>
              {currentDay.themeKeywords.map((kw, i) => (
                <span key={i} className="px-2.5 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] font-bold text-xs rounded-full border border-[#5A5A40]/20">
                  #{kw}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-[#5F5F4F] leading-relaxed">
              {currentDay.summary}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#D9D1C7] flex items-center justify-between text-xs">
            <span className="text-[#8C7B60] font-bold flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> 建议随身佩戴舒适步行鞋
            </span>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-[#5A5A40] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#8C7B60]" />
              点击放大查看 Day {currentDay.dayNumber} 专属手绘地图
            </button>
          </div>
        </div>

        {/* Right: Map Thumbnail Preview */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="md:col-span-4 relative rounded-lg border-2 border-[#5A5A40] overflow-hidden bg-[#EBE3D5] group cursor-pointer shadow hover:shadow-md transition-all h-36 md:h-auto"
        >
          <img
            src={currentDayMapItem.imageUrl}
            alt={currentDayMapItem.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-2 text-center">
            <span className="px-3 py-1 bg-[#5A5A40] text-white text-xs font-bold rounded-md shadow flex items-center gap-1">
              <Map className="w-3.5 h-3.5" />
              Day {currentDay.dayNumber} 手绘路线图
            </span>
            <span className="text-[11px] text-[#F7F4F0] mt-1 font-bold drop-shadow">
              点击全屏放大查看详细时段节点
            </span>
          </div>
        </div>

      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 text-xs">
        <span className="font-bold text-[#2C2C2C] flex items-center gap-1 shrink-0">
          <Filter className="w-3.5 h-3.5" /> 筛选行程类别:
        </span>
        {[
          { id: 'all', label: '全部行程' },
          { id: 'spot', label: '核心景点' },
          { id: 'food', label: '金陵美食' },
          { id: 'leisure', label: '休闲骑行/漫步' },
          { id: 'shopping', label: '购物伴手礼' },
          { id: 'transport', label: '交通安排' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setCategoryFilter(f.id)}
            className={`px-3 py-1 rounded-full font-bold transition cursor-pointer shrink-0 border ${
              categoryFilter === f.id
                ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                : 'bg-white text-[#5F5F4F] border-[#D9D1C7] hover:bg-[#F5F5F0]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline Event Cards */}
      <div className="relative border-l-2 border-[#5A5A40]/30 ml-4 sm:ml-8 space-y-6">
        {filteredTimeline.map((item, index) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            
            {/* Timeline Dot Badge */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#5A5A40] text-white border-2 border-white flex items-center justify-center font-bold text-xs shadow">
              {index + 1}
            </div>

            {/* Event Item Card */}
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#D9D1C7] shadow-sm hover:shadow-md transition-all hover:border-[#5A5A40]">
              
              {/* Header Time & Title */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 bg-[#3A3A2E] text-[#F7F4F0] rounded">
                    <Clock className="w-3.5 h-3.5 text-[#8C7B60]" />
                    {item.time}
                  </span>
                  <h3 className="text-lg font-bold text-[#2C2C2C]">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {getCategoryBadge(item.category)}
                  <span className="text-xs text-[#5F5F4F] flex items-center gap-1 bg-[#F5F5F0] px-2 py-0.5 rounded">
                    <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Content Layout: Left Text & Right Scenic Photo ("行程图景") */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 my-2">
                <div className={getTimelineImage(item.title, item.location) ? "md:col-span-8 space-y-2" : "md:col-span-12 space-y-2"}>
                  {/* Experience Highlight */}
                  <div className="p-3 bg-[#F7F4F0] rounded border-l-4 border-[#5A5A40] text-sm text-[#3A3A2E]">
                    <span className="font-bold text-[#5A5A40]">体验重点：</span>
                    {item.experienceHighlight}
                  </div>

                  {/* Note / Advice */}
                  {item.note && (
                    <div className="text-xs text-[#5A5A40] bg-[#5A5A40]/10 p-2 rounded flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#5A5A40]" />
                      <span><strong>备注提示：</strong>{item.note}</span>
                    </div>
                  )}
                </div>

                {/* Scenic Photo ("行程图景") Thumbnail */}
                {getTimelineImage(item.title, item.location) && (
                  <div className="md:col-span-4 relative rounded-lg overflow-hidden border border-[#D9D1C7] bg-[#EBE3D5] h-32 md:h-auto group shadow-sm">
                    <img
                      src={getTimelineImage(item.title, item.location)!}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] text-white font-bold truncate drop-shadow">
                        📷 {item.location} 当天图景
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Badges & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-[#D9D1C7] text-xs">
                <div className="flex flex-wrap items-center gap-3 text-[#5F5F4F]">
                  {item.recommendedDuration && (
                    <span>建议游览时长：<strong>{item.recommendedDuration}</strong></span>
                  )}
                  {item.subwayStation && (
                    <span className="text-[#3A3A2E]">临近地铁：<strong>{item.subwayStation}</strong></span>
                  )}
                  {item.photographySpot && (
                    <span className="text-[#8C7B60] font-bold flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5" /> 拍照绝佳位
                    </span>
                  )}
                  {item.reservationRequired && (
                    <span className="text-[#5A5A40] font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> 需提前公众号预约
                    </span>
                  )}
                </div>

                {onOpenLandmarkModal && (
                  <button
                    onClick={() => onOpenLandmarkModal(item.title)}
                    className="text-xs text-[#5A5A40] hover:underline font-bold flex items-center gap-1 cursor-pointer ml-auto"
                  >
                    查看详尽攻略 <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Day Tips & Food Recommendations Card Footer */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#D9D1C7]">
        <div className="bg-[#F7F4F0] p-4 rounded-lg border border-[#D9D1C7]">
          <h4 className="text-sm font-bold text-[#5A5A40] mb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            本日秘籍与注意事项：
          </h4>
          <ul className="list-disc list-inside text-xs text-[#5F5F4F] space-y-1.5">
            {currentDay.tips.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#F7F4F0] p-4 rounded-lg border border-[#D9D1C7]">
          <h4 className="text-sm font-bold text-[#8C7B60] mb-2 flex items-center gap-1.5">
            <Utensils className="w-4 h-4" />
            本日推荐地标美食：
          </h4>
          <div className="flex flex-wrap gap-2">
            {currentDay.foodRecommendations.map((food, idx) => (
              <span key={idx} className="px-3 py-1 bg-white text-[#2C2C2C] text-xs font-bold rounded border border-[#D9D1C7] shadow-sm">
                🍽️ {food}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
