import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#D9D1C7] font-serif border-t-4 border-[#5A5A40] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#5F5F4F]/40">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#5A5A40] rounded text-white font-bold flex items-center justify-center text-xl shadow border border-[#8C7B60]">
                金陵
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F7F4F0]">南京四日游导览</h3>
                <p className="text-xs text-[#D9D1C7]">8月18日 — 8月21日 民国金陵慢漫计划</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#D9D1C7] max-w-sm">
              “江南佳丽地，金陵帝王州。” 本网站专为南京四日游精心设计，整合了钟山风景区、总统府、颐和路、秦淮夜游与南京博物院的核心线路，祝您旅程圆满顺遂。
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="text-sm font-bold text-[#8C7B60] flex items-center gap-1.5 mb-3">
              <Compass className="w-4 h-4" />
              四大核心主题日
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[#D9D1C7]">
              <div><strong>18日：</strong>初识南京（鸡鸣古刹+城墙日落）</div>
              <div><strong>19日：</strong>钟山风景区（顺线游览+音乐台收尾）</div>
              <div><strong>20日：</strong>南京 City Walk（连线文博+颐和路）</div>
              <div><strong>21日：</strong>南京博物院（南博深度+老门东）</div>
            </div>
          </div>

          {/* Golden Quote */}
          <div className="md:col-span-3 space-y-2 text-xs text-right md:text-left border-l-0 md:border-l border-[#5F5F4F]/40 pl-0 md:pl-6">
            <div className="text-[#8C7B60] font-bold text-sm">“三山半落青天外，二水中分白鹭洲”</div>
            <p className="text-[#D9D1C7] italic">
              六朝古都的历史厚重，融汇在烟火喧嚣与梧桐小巷之间。
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9D1C7]/80 gap-2">
          <div className="flex items-center gap-2">
            <span>© 2026 南京四日游 · 金陵漫步与民国风情旅行指南</span>
            <span className="hidden sm:inline text-[#8F8F7F]">|</span>
            <span className="text-[#8C7B60] font-bold">鸣谢 kim lvan 鼎力襄赞</span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>用心呈现金陵文化之美</span>
            <Heart className="w-3 h-3 text-[#8C7B60] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
