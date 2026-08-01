import React, { useState } from 'react';
import { ITINERARY_DAYS } from '../data/nanjingData';
import { TimelineItem } from '../types';
import { Compass, Info, Footprints, Bus, Bike, Train, Car, Camera, CheckCircle2, Navigation, ZoomIn, ZoomOut, RefreshCw, Maximize2, Image as ImageIcon, Map, Layers } from 'lucide-react';
import mapArtBg from '../assets/images/nanjing_map_art_1785574509884.jpg';
import { MAP_GALLERY_ITEMS } from '../assets/mapAssets';
import { ImageLightboxModal } from './ImageLightboxModal';

interface InteractiveMapCanvasProps {
  selectedDayNumber: number;
  onSelectDay: (day: number) => void;
  onSelectSpot?: (spot: TimelineItem) => void;
}

export const InteractiveMapCanvas: React.FC<InteractiveMapCanvasProps> = ({
  selectedDayNumber,
  onSelectDay,
  onSelectSpot
}) => {
  const currentDayData = ITINERARY_DAYS.find((d) => d.dayNumber === selectedDayNumber) || ITINERARY_DAYS[0];
  const [activeNode, setActiveNode] = useState<TimelineItem | null>(currentDayData.timeline[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'canvas' | 'gallery'>('canvas');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<'all' | 'daily' | 'overall'>('all');
  
  // Lightbox modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle?: string;
    description?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const openLightbox = (item: { imageUrl: string; title: string; subtitle?: string; description?: string }) => {
    setLightboxState({
      isOpen: true,
      imageUrl: item.imageUrl,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
    });
  };

  // Transportation line icon helper
  const getTransportIcon = (methodName: string) => {
    if (methodName.includes('步')) return <Footprints className="w-4 h-4 text-[#5A5A40]" />;
    if (methodName.includes('骑')) return <Bike className="w-4 h-4 text-[#8C7B60]" />;
    if (methodName.includes('铁')) return <Train className="w-4 h-4 text-[#5A5A40]" />;
    if (methodName.includes('车') || methodName.includes('打')) return <Car className="w-4 h-4 text-[#3A3A2E]" />;
    return <Bus className="w-4 h-4 text-[#3A3A2E]" />;
  };

  const filteredGalleryItems = MAP_GALLERY_ITEMS.filter((item) => {
    if (selectedGalleryCategory === 'all') return true;
    return item.category === selectedGalleryCategory;
  });

  return (
    <div id="map" className="my-12 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif relative overflow-hidden">
      
      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        description={lightboxState.description}
      />

      {/* Decorative Stamp Seals & View Mode Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#D9D1C7] mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#5A5A40] text-white font-bold flex items-center justify-center text-sm shadow">
              {currentDayData.dayNumber}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              {currentDayData.fullDate} 路线地图与高洁图鉴
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] text-xs font-bold rounded border border-[#5A5A40]/30">
              {currentDayData.subtitle}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5F5F4F] mt-1">
            复古金陵路线导览 · 支持查看矢量交互地图及全部具体高洁地图图鉴
          </p>
        </div>

        {/* View Mode Toggle Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-[#F5F5F0] p-1 rounded-lg border border-[#D9D1C7]">
            <button
              onClick={() => setViewMode('canvas')}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'canvas'
                  ? 'bg-[#5A5A40] text-white shadow'
                  : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
              }`}
            >
              <Map className="w-4 h-4" />
              交互节点地图
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'gallery'
                  ? 'bg-[#5A5A40] text-white shadow'
                  : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-[#8C7B60]" />
              高清手绘路线图鉴 (7张)
            </button>
          </div>

          {/* Day Switcher Buttons (for canvas mode) */}
          {viewMode === 'canvas' && (
            <div className="flex items-center gap-1 bg-[#F5F5F0] p-1 rounded-lg border border-[#D9D1C7]">
              {ITINERARY_DAYS.map((day) => (
                <button
                  key={day.dayNumber}
                  onClick={() => {
                    onSelectDay(day.dayNumber);
                    const first = day.timeline[0];
                    setActiveNode(first);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                    selectedDayNumber === day.dayNumber
                      ? 'bg-[#8C7B60] text-white shadow'
                      : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
                  }`}
                >
                  D{day.dayNumber}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mode 1: Interactive Canvas Map View */}
      {viewMode === 'canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Interactive Map Visual Stage */}
          <div className="lg:col-span-8 bg-[#F7F4F0] rounded-lg border border-[#D9D1C7] p-4 relative min-h-[420px] sm:min-h-[500px] flex flex-col justify-between shadow-inner overflow-hidden">
            
            {/* Map Controls Header */}
            <div className="flex items-center justify-between z-20 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] bg-white/90 px-3 py-1 rounded border border-[#D9D1C7] shadow-sm">
                <Compass className="w-4 h-4 animate-pulse text-[#5A5A40]" />
                金陵胜景图 · N 指北
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(1.3, z + 0.1))}
                  className="p-1.5 bg-white border border-[#D9D1C7] rounded text-[#3A3A2E] hover:bg-[#5A5A40] hover:text-white transition cursor-pointer"
                  title="放大"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
                  className="p-1.5 bg-white border border-[#D9D1C7] rounded text-[#3A3A2E] hover:bg-[#5A5A40] hover:text-white transition cursor-pointer"
                  title="缩小"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 bg-white border border-[#D9D1C7] rounded text-[#3A3A2E] hover:bg-[#5A5A40] hover:text-white transition cursor-pointer"
                  title="重置"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Map Parchment Canvas with Route Overlays */}
            <div 
              className="relative flex-1 rounded overflow-hidden transition-transform duration-300 my-2 border border-[#D9D1C7]"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
            >
              {/* Background Map Graphic Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
                <img
                  src={mapArtBg}
                  alt="南京古地图底纹"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia contrast-120"
                />
              </div>

              {/* SVG Connecting Route Path Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5A5A40" />
                    <stop offset="100%" stopColor="#8C7B60" />
                  </linearGradient>
                </defs>

                {/* Render route lines between sequential timeline nodes */}
                {currentDayData.timeline.map((item, idx) => {
                  if (idx === currentDayData.timeline.length - 1) return null;
                  const nextItem = currentDayData.timeline[idx + 1];
                  return (
                    <g key={`path-${item.id}`}>
                      <line
                        x1={`${item.coordinates.x}%`}
                        y1={`${item.coordinates.y}%`}
                        x2={`${nextItem.coordinates.x}%`}
                        y2={`${nextItem.coordinates.y}%`}
                        stroke="url(#routeGrad)"
                        strokeWidth="3"
                        strokeDasharray="6,4"
                        className="animate-pulse"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Render Map Pin Nodes */}
              {currentDayData.timeline.map((spot, index) => {
                const isActive = activeNode?.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    onClick={() => {
                      setActiveNode(spot);
                      if (onSelectSpot) onSelectSpot(spot);
                    }}
                    style={{
                      left: `${spot.coordinates.x}%`,
                      top: `${spot.coordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                  >
                    <div className={`relative flex items-center justify-center transition-all duration-200 ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                    }`}>
                      {/* Ripple Effect for active node */}
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-[#5A5A40]/30 animate-ping" />
                      )}

                      {/* Node Badge */}
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold font-serif text-sm border-2 shadow-md ${
                        isActive
                          ? 'bg-[#5A5A40] text-white border-[#8C7B60] ring-2 ring-[#5A5A40]/40'
                          : 'bg-[#F7F4F0] text-[#3A3A2E] border-[#5A5A40] hover:bg-[#5A5A40] hover:text-white'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Tooltip Label */}
                      <div className={`absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-bold border shadow-md transition-opacity pointer-events-none ${
                        isActive
                          ? 'bg-[#2C2C2C] text-[#F7F4F0] border-[#8C7B60] opacity-100'
                          : 'bg-white text-[#5F5F4F] border-[#D9D1C7] opacity-90 group-hover:opacity-100'
                      }`}>
                        {spot.title}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Vintage Stamp Seal in Corner */}
              <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-80 border-2 border-[#5A5A40] p-1.5 rotate-[-6deg] text-[#5A5A40]">
                <div className="border border-[#5A5A40] px-2 py-1 text-[11px] font-serif font-bold text-center leading-tight">
                  南京金陵<br />四日路引
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-3 pt-3 border-t border-[#D9D1C7] flex flex-wrap items-center justify-between text-xs text-[#5F5F4F] z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-bold text-[#2C2C2C]">图例与出行：</span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-[#5A5A40] inline-block border-t border-dashed" />
                  行程路线
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#5A5A40] text-white flex items-center justify-center text-[9px] font-bold">1</span>
                  景点打卡位
                </span>
              </div>
              <button
                onClick={() => setViewMode('gallery')}
                className="text-xs text-[#8C7B60] font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                切换至全套7张高清手绘地图表 →
              </button>
            </div>

          </div>

          {/* Selected Node Details Side Card */}
          <div className="lg:col-span-4 bg-[#F7F4F0] p-5 rounded-lg border border-[#D9D1C7] shadow flex flex-col justify-between">
            {activeNode ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D9D1C7] pb-3">
                  <span className="px-2.5 py-1 bg-[#5A5A40] text-white text-xs font-bold font-serif rounded">
                    {activeNode.time}
                  </span>
                  <span className="text-xs text-[#5A5A40] font-bold font-serif bg-[#5A5A40]/10 px-2 py-0.5 rounded border border-[#5A5A40]/30">
                    {activeNode.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif text-[#2C2C2C]">
                    {activeNode.title}
                  </h3>
                  <p className="text-sm font-serif text-[#5F5F4F] mt-2 leading-relaxed bg-white p-3 rounded border border-[#D9D1C7]">
                    <span className="font-bold text-[#5A5A40]">体验重点：</span>
                    {activeNode.experienceHighlight}
                  </p>
                </div>

                {/* Note / Alert */}
                {activeNode.note && (
                  <div className="text-xs text-[#5A5A40] bg-[#5A5A40]/10 border border-[#5A5A40]/30 p-2.5 rounded font-serif flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>备注提示：</strong>{activeNode.note}</span>
                  </div>
                )}

                {/* Photography spot or reservation */}
                <div className="space-y-2 text-xs font-serif">
                  {activeNode.photographySpot && (
                    <div className="flex items-center gap-1.5 text-[#8C7B60] font-bold">
                      <Camera className="w-4 h-4" />
                      <span>摄影重点推荐地标，光线极美</span>
                    </div>
                  )}
                  {activeNode.reservationRequired && (
                    <div className="flex items-center gap-1.5 text-[#5A5A40] font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>需要提前在官方微信公众号实名预约！</span>
                    </div>
                  )}
                  {activeNode.subwayStation && (
                    <div className="flex items-center gap-1.5 text-[#3A3A2E]">
                      <Train className="w-4 h-4" />
                      <span>临近地铁站：<strong>{activeNode.subwayStation}</strong></span>
                    </div>
                  )}
                </div>

                {/* Tips */}
                {activeNode.tips && activeNode.tips.length > 0 && (
                  <div className="pt-2 border-t border-[#D9D1C7]">
                    <h4 className="text-xs font-bold text-[#2C2C2C] mb-1">小贴士建议：</h4>
                    <ul className="list-disc list-inside text-xs text-[#5F5F4F] space-y-1">
                      {activeNode.tips.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-[#8C7B60]">
                请点击地图上的标号节点查看详情
              </div>
            )}

            {/* Daily Transport Guide Summary Footer */}
            <div className="mt-6 pt-4 border-t border-[#D9D1C7]">
              <h4 className="text-xs font-bold text-[#5A5A40] mb-2 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                本日交通指南建议：
              </h4>
              <div className="space-y-2">
                {currentDayData.transportAdvice.map((trans, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#5F5F4F]">
                    <span className="p-1 bg-[#EBE3D5] rounded shrink-0 mt-0.5">
                      {getTransportIcon(trans.method)}
                    </span>
                    <div>
                      <span className="font-bold text-[#2C2C2C]">{trans.method}：</span>
                      <span>{trans.details}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Mode 2: Specific High-Res Map Gallery */}
      {viewMode === 'gallery' && (
        <div className="space-y-6">
          {/* Gallery Category Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 bg-[#F7F4F0] p-3 rounded-lg border border-[#D9D1C7]">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#2C2C2C]">
              <Layers className="w-4 h-4 text-[#8C7B60]" />
              筛选地图类别：
            </div>
            <div className="flex items-center gap-2">
              {[
                { id: 'all', label: '全部地图图鉴 (7张)' },
                { id: 'daily', label: '单日路线手绘图 (3张)' },
                { id: 'overall', label: '全景时间表与指南图 (4张)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer border ${
                    selectedGalleryCategory === cat.id
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                      : 'bg-white text-[#5F5F4F] border-[#D9D1C7] hover:bg-[#EBE3D5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Map Gallery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="bg-[#F7F4F0] rounded-xl border border-[#D9D1C7] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between hover:border-[#8C7B60]"
              >
                <div>
                  {/* Image Preview Container */}
                  <div className="relative h-64 overflow-hidden bg-[#EBE3D5] flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-4 py-2 bg-[#2C2C2C]/90 text-white font-serif text-xs font-bold rounded-lg backdrop-blur-sm flex items-center gap-2 shadow-lg">
                        <Maximize2 className="w-4 h-4 text-[#8C7B60]" />
                        点击放大查看原图
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#5A5A40] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow border border-white/20">
                      {item.category === 'daily' ? `DAY ${item.dayNumber}` : '全景图导览'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold font-serif text-[#2C2C2C] group-hover:text-[#8C7B60] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#8C7B60]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#5F5F4F] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="p-4 pt-0 flex flex-wrap gap-1.5 border-t border-[#D9D1C7]/60 mt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white text-[10px] font-bold text-[#5A5A40] rounded border border-[#D9D1C7]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
