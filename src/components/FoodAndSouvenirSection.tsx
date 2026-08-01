import React, { useState } from 'react';
import { NANJING_FOODS, NANJING_SOUVENIRS } from '../data/nanjingData';
import { Utensils, Gift, MapPin, DollarSign, Star, Compass } from 'lucide-react';

export const FoodAndSouvenirSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'souvenir' | 'street'>('food');

  const foodStreets = [
    { name: '科巷小吃街', day: 'Day 3 午餐', address: '秦淮区科巷（近大行宫站）', features: '牛肉锅贴、皮肚面、草包包子、许阿姨糕团（本地人最爱）' },
    { name: '老门东街区', day: 'Day 4 下午', address: '秦淮区老门东历史街区', features: '蒋有记锅贴、沈记臭豆腐、糖油坨坨、小笼包' },
    { name: '湖南路—狮子桥', day: 'Day 1 午后', address: '鼓楼区湖南路狮子桥步行街', features: '南京传统糕点、小笼包、桂花糖芋苗、南京大牌档' },
    { name: '夫子庙—贡院街', day: 'Day 3 晚上', address: '秦淮区夫子庙秦淮风光带', features: '秦淮八绝小吃、鸭油烧饼、鸡鸣汤包、赤豆元宵' },
  ];

  return (
    <div id="food" className="my-12 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9D1C7]">
        <div>
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-[#5A5A40]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              金陵烟火美食与伴手礼指南
            </h2>
          </div>
          <p className="text-sm text-[#5F5F4F] mt-1">
            “无鸭不成席”，带您品尝鸭血粉丝汤、盐水鸭与爆汁牛肉锅贴，选购最具风骨的云锦与雨花石
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#F5F5F0] p-1 rounded-lg border border-[#D9D1C7]">
          <button
            onClick={() => setActiveTab('food')}
            className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'food' ? 'bg-[#5A5A40] text-white shadow' : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
            }`}
          >
            金陵地道名吃
          </button>
          <button
            onClick={() => setActiveTab('souvenir')}
            className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'souvenir' ? 'bg-[#8C7B60] text-white shadow' : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
            }`}
          >
            南京特色伴手礼
          </button>
          <button
            onClick={() => setActiveTab('street')}
            className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'street' ? 'bg-[#3A3A2E] text-white shadow' : 'text-[#5F5F4F] hover:bg-[#EBE3D5]'
            }`}
          >
            地道美食街区
          </button>
        </div>
      </div>

      {/* Content for Food Tab */}
      {activeTab === 'food' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {NANJING_FOODS.map((food) => (
            <div key={food.id} className="bg-white rounded-lg border border-[#D9D1C7] overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-44 bg-[#EBE3D5]">
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#5A5A40] text-white text-xs font-bold rounded">
                  {food.category}
                </span>
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white drop-shadow">
                  <h3 className="text-lg font-bold">{food.name}</h3>
                  <span className="text-xs bg-black/60 px-2 py-0.5 rounded text-[#8C7B60] font-bold">
                    {food.priceRange}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 text-xs font-serif text-[#5F5F4F]">
                <p className="leading-relaxed line-clamp-2">{food.description}</p>
                
                <div className="pt-2 border-t border-[#D9D1C7] space-y-1">
                  <div className="text-[#5A5A40] font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>推荐打卡地：{food.mustTrySpot}</span>
                  </div>
                  <div className="text-[#5F5F4F] flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>口感特点：{food.tasteProfile}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {food.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#F7F4F0] text-[#5A5A40] font-bold rounded text-[11px]">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content for Souvenir Tab */}
      {activeTab === 'souvenir' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {NANJING_SOUVENIRS.map((souv) => (
            <div key={souv.id} className="bg-white rounded-lg border border-[#D9D1C7] p-5 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-4">
              <img
                src={souv.imageUrl}
                alt={souv.name}
                referrerPolicy="no-referrer"
                className="w-full sm:w-40 h-36 object-cover rounded border border-[#D9D1C7]"
              />
              <div className="flex-1 space-y-2 text-xs font-serif text-[#3A3A2E]">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#5A5A40]">{souv.name}</h3>
                  <span className="px-2 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] font-bold rounded">
                    {souv.category}
                  </span>
                </div>
                <p className="leading-relaxed text-[#5F5F4F]">{souv.description}</p>
                <div className="text-[#8C7B60] font-bold">参考价格：{souv.priceRange}</div>
                <div className="text-[#5F5F4F]">
                  <strong>推荐购买地点：</strong>
                  {souv.bestBuyingLocations.join('、')}
                </div>
                <div className="flex items-center gap-1 text-[#8C7B60] pt-1">
                  <span>推荐指数：</span>
                  {Array.from({ length: souv.recommendationRating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content for Street Map Tab */}
      {activeTab === 'street' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {foodStreets.map((st, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-[#D9D1C7] shadow-sm space-y-2 font-serif">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#2C2C2C]">{st.name}</h3>
                <span className="px-2.5 py-0.5 bg-[#5A5A40] text-white text-xs font-bold rounded">
                  {st.day}
                </span>
              </div>
              <div className="text-xs text-[#5A5A40] font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{st.address}</span>
              </div>
              <p className="text-xs text-[#5F5F4F] bg-[#F7F4F0] p-3 rounded border border-[#D9D1C7]">
                <strong>必吃推介：</strong>{st.features}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
