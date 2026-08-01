import React, { useState } from 'react';
import { CheckSquare, Calendar, Train, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';

export const TravelTipsAndChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState([
    { id: 'item-1', text: '微信提前预约【南京博物院】（提前7天18:00开抢）', checked: true },
    { id: 'item-2', text: '微信提前预约【中山陵】（免费但必须微信公众号预约）', checked: true },
    { id: 'item-3', text: '微信提前预约【总统府】门票实名预约', checked: true },
    { id: 'item-4', text: '准备一双极其舒适的暴走平底鞋（钟山/城墙步数超2万）', checked: false },
    { id: 'item-5', text: '下载“南京地铁”APP或支付宝领取南京电子公交卡', checked: false },
    { id: 'item-6', text: '随身携带充电宝（全天导航、拍照频繁）', checked: false },
    { id: 'item-7', text: '身份证原件（各大博物馆与门票核验必备）', checked: false },
    { id: 'item-8', text: '晴雨伞与防晒用品（南京夏季炎热少遮荫）', checked: false },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist(
      checklist.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
  };

  const bookingGuides = [
    { name: '南京博物院', method: '微信公众号“南京博物院”', advanceDays: '提前7天18:00放票', note: '极其抢手！周一闭馆（法定节假日除外）' },
    { name: '中山陵', method: '微信公众号“钟山风景名胜区”', advanceDays: '提前1-7天预约', note: '门票免费，务必提前实名预约时间段' },
    { name: '南京总统府', method: '微信公众号“南京总统府”', advanceDays: '提前1-3天预约', note: '周一闭馆（法定节假日除外）' },
    { name: '六朝博物馆', method: '微信公众号“六朝博物馆”', advanceDays: '提前1-3天预约', note: '周一闭馆，建筑审美极佳' },
  ];

  return (
    <div id="checklist" className="my-12 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif">
      
      {/* Header */}
      <div className="pb-6 border-b border-[#D9D1C7]">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-6 h-6 text-[#5A5A40]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            南京出行指南与预约清单
          </h2>
        </div>
        <p className="text-sm text-[#5F5F4F] mt-1">
          行前必看：门票公众号预约规则、行李清单互动勾选与南京地铁乘车技巧
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        
        {/* Interactive Luggage Checklist */}
        <div className="bg-white p-5 rounded-lg border border-[#D9D1C7] shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#D9D1C7] pb-3">
            <h3 className="text-base font-bold text-[#5A5A40] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8C7B60]" />
              行前必备物品与预约清单（点击勾选）
            </h3>
            <span className="text-xs text-[#5F5F4F]">
              已准备 {checklist.filter((c) => c.checked).length} / {checklist.length}
            </span>
          </div>

          <div className="space-y-2">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`flex items-center gap-3 p-3 rounded border text-xs cursor-pointer transition ${
                  item.checked
                    ? 'bg-[#F5F5F0] border-[#5A5A40]/30 text-[#5A5A40] font-bold line-through opacity-80'
                    : 'bg-[#F7F4F0] border-[#D9D1C7] text-[#2C2C2C] hover:border-[#5A5A40]'
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                  item.checked ? 'bg-[#5A5A40] border-[#5A5A40] text-white' : 'border-[#D9D1C7] bg-white'
                }`}>
                  {item.checked && <Check className="w-3.5 h-3.5" />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Official Reservation Guide */}
        <div className="bg-[#F5F5F0] p-5 rounded-lg border border-[#D9D1C7] space-y-4">
          <h3 className="text-base font-bold text-[#2C2C2C] flex items-center gap-2 border-b border-[#D9D1C7] pb-3">
            <Calendar className="w-4 h-4 text-[#5A5A40]" />
            重点景点微信公众号预约攻略
          </h3>

          <div className="space-y-3">
            {bookingGuides.map((guide, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded border border-[#D9D1C7] text-xs font-serif space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#5A5A40] text-sm">{guide.name}</span>
                  <span className="px-2 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] font-bold rounded">
                    {guide.advanceDays}
                  </span>
                </div>
                <div className="text-[#5F5F4F]">预约渠道：<strong>{guide.method}</strong></div>
                <div className="text-[#8C7B60] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{guide.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs text-[#5F5F4F] border-t border-[#D9D1C7]">
            <span className="font-bold text-[#5A5A40]">🚇 地铁交通贴士：</span>
            <span>南京地铁3号线连通鸡鸣寺、总统府（大行宫）、夫子庙与南京南站，是旅行最常用黄金线路。</span>
          </div>
        </div>

      </div>

    </div>
  );
};
