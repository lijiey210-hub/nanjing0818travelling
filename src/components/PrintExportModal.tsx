import React from 'react';
import { ITINERARY_DAYS, NANJING_LANDMARKS, NANJING_FOODS, NANJING_SOUVENIRS, INITIAL_EXPENSES } from '../data/nanjingData';
import { Printer, X, Download, ExternalLink } from 'lucide-react';

interface PrintExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintExportModal: React.FC<PrintExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const totalBudget = INITIAL_EXPENSES.reduce((sum, item) => sum + item.amount, 0);

  const generateFullHtmlContent = () => {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>南京四日游全景行程路引与金陵指南</title>
  <style>
    body { font-family: "Noto Serif SC", "Songti SC", "SimSun", serif; margin: 0; padding: 24px; color: #2C2C2C; background-color: #ffffff; line-height: 1.6; }
    h1 { text-align: center; color: #5A5A40; margin-bottom: 4px; font-size: 26px; font-weight: bold; }
    .subtitle { text-align: center; color: #5F5F4F; font-size: 13px; margin-bottom: 12px; }
    .sponsor { text-align: center; color: #8B261D; font-weight: bold; font-size: 14px; margin-bottom: 20px; border-bottom: 2px solid #5A5A40; padding-bottom: 12px; }
    
    .section-title { color: #5A5A40; border-left: 4px solid #8B261D; padding-left: 8px; font-size: 18px; font-weight: bold; margin-top: 28px; margin-bottom: 14px; page-break-after: avoid; }
    
    /* Day Block */
    .day-block { margin-bottom: 28px; page-break-inside: avoid; }
    .day-header { background-color: #5A5A40; color: #ffffff; padding: 8px 14px; font-weight: bold; font-size: 15px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; }
    .day-summary { background-color: #F7F4F0; padding: 10px 14px; border: 1px solid #D9D1C7; font-size: 12px; color: #5F5F4F; margin-top: 6px; border-radius: 4px; }
    
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
    th { background-color: #F5F5F0; border: 1px solid #D9D1C7; padding: 8px; text-align: left; color: #2C2C2C; }
    td { border: 1px solid #D9D1C7; padding: 8px; vertical-align: top; }
    .time { font-weight: bold; color: #5A5A40; width: 85px; }
    .location { font-weight: bold; width: 130px; }
    
    .tips-box { background-color: #F7F4F0; border: 1px solid #D9D1C7; border-left: 3px solid #5A5A40; padding: 10px 12px; font-size: 12px; margin-top: 8px; border-radius: 0 4px 4px 0; color: #4A4A3A; }
    
    /* Grid Cards for Landmarks, Foods, Souvenirs */
    .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 10px; }
    .card { border: 1px solid #D9D1C7; border-radius: 6px; padding: 10px 12px; background-color: #FCFAFA; page-break-inside: avoid; }
    .card-title { font-weight: bold; font-size: 14px; color: #5A5A40; border-bottom: 1px dashed #D9D1C7; padding-bottom: 4px; margin-bottom: 6px; display: flex; justify-content: space-between; }
    .card-tag { font-size: 11px; color: #8B261D; background: #8B261D10; padding: 1px 6px; border-radius: 3px; font-weight: normal; }
    .card-desc { font-size: 11px; color: #5F5F4F; margin-bottom: 6px; }
    .card-meta { font-size: 11px; color: #2C2C2C; background-color: #F5F5F0; padding: 4px 8px; border-radius: 4px; }

    /* Budget Table */
    .budget-table { width: 100%; font-size: 12px; margin-top: 8px; }
    .budget-table th { background-color: #5A5A40; color: white; border: none; }
    .budget-table td { border-bottom: 1px solid #EBE3D5; padding: 6px 8px; }
    
    .footer-note { text-align: center; margin-top: 40px; font-size: 12px; color: #5A5A40; border-top: 1px solid #D9D1C7; padding-top: 16px; font-weight: bold; }
    
    @media print {
      body { padding: 0; }
      .no-print-btn { display: none; }
      .card-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <div class="no-print-btn" style="text-align: right; margin-bottom: 15px;">
    <button onclick="window.print()" style="background-color: #5A5A40; color: white; border: none; padding: 8px 18px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 14px;">
      🖨️ 立即打印 / 另存为 PDF
    </button>
  </div>
  <h1>金陵记游 · 南京四日游全景行程路引与金陵指南</h1>
  <div class="subtitle">旅行时间：8月18日 — 8月21日（四天三晚） | 主题：六朝古都 · 湖光城影 · 民国漫步</div>
  <div class="sponsor">鸣谢 kim lvan 鼎力襄赞</div>

  <!-- SECTION 1: ITINERARY -->
  <div class="section-title">第一部分：四天三晚全景每日行程路线</div>
  ${ITINERARY_DAYS.map(day => `
    <div class="day-block">
      <div class="day-header">
        <span>DAY ${day.dayNumber}（${day.date}）：${day.title} —— ${day.subtitle}</span>
        <span style="font-size: 12px; opacity: 0.9;">${day.fullDate}</span>
      </div>
      <div class="day-summary"><strong>行程概述：</strong>${day.summary}</div>
      <table>
        <thead>
          <tr>
            <th class="time">时间</th>
            <th class="location">行程地点</th>
            <th>体验重点与注意事项</th>
          </tr>
        </thead>
        <tbody>
          ${day.timeline.map(item => `
            <tr>
              <td class="time">${item.time}</td>
              <td class="location">${item.title}</td>
              <td>
                <div style="font-weight: bold; color: #2C2C2C;">${item.experienceHighlight}</div>
                ${item.note ? `<div style="color: #5A5A40; margin-top: 2px;">※ ${item.note}</div>` : ''}
                ${item.tips && item.tips.length > 0 ? `<div style="color: #8B261D; font-size: 11px; margin-top: 2px;">💡 打卡避坑：${item.tips.join('；')}</div>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="tips-box">
        <strong>💡 当日出行与防坑指南：</strong>
        <ul style="margin: 4px 0 0 16px; padding: 0;">
          ${day.tips.map(t => `<li style="margin-bottom: 2px;">${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('')}

  <!-- SECTION 2: LANDMARKS -->
  <div class="section-title">第二部分：南京八大核心必游名胜与民国建筑图鉴</div>
  <div class="card-grid">
    ${NANJING_LANDMARKS.map(lm => `
      <div class="card">
        <div class="card-title">
          <span>${lm.name}</span>
          <span class="card-tag">${lm.category}</span>
        </div>
        <div class="card-desc">${lm.description}</div>
        <div class="card-meta">
          <div><strong>核心亮点：</strong>${lm.highlight}</div>
          <div><strong>门票费用：</strong>${lm.ticketInfo} | <strong>建议用时：</strong>${lm.recommendedHours}</div>
          <div><strong>最佳时间：</strong>${lm.bestTime}</div>
          <div><strong>📷 摄影避坑：</strong>${lm.photoTip}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- SECTION 3: FOODS & SOUVENIRS -->
  <div class="section-title">第三部分：金陵地道美食与精品伴手礼推荐</div>
  <div style="font-weight: bold; color: #5A5A40; margin-bottom: 6px; font-size: 13px;">🍽️ 必吃地道名吃：</div>
  <div class="card-grid">
    ${NANJING_FOODS.map(f => `
      <div class="card">
        <div class="card-title">
          <span>${f.name}（${f.chineseName}）</span>
          <span class="card-tag">${f.category}</span>
        </div>
        <div class="card-desc">${f.description}</div>
        <div class="card-meta">
          <div><strong>参考价格：</strong>${f.priceRange}</div>
          <div><strong>推荐名店：</strong>${f.mustTrySpot}</div>
          <div><strong>口感风味：</strong>${f.tasteProfile}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <div style="font-weight: bold; color: #5A5A40; margin-top: 14px; margin-bottom: 6px; font-size: 13px;">🎁 精选金陵伴手礼：</div>
  <div class="card-grid">
    ${NANJING_SOUVENIRS.map(s => `
      <div class="card">
        <div class="card-title">
          <span>${s.name}</span>
          <span class="card-tag">${s.category}</span>
        </div>
        <div class="card-desc">${s.description}</div>
        <div class="card-meta">
          <div><strong>参考价格：</strong>${s.priceRange}</div>
          <div><strong>推荐购买：</strong>${s.bestBuyingLocations.join('、')}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- SECTION 4: BUDGET -->
  <div class="section-title">第四部分：四天三晚旅行预估预算明细表</div>
  <table class="budget-table">
    <thead>
      <tr>
        <th>消费类别</th>
        <th>消费项目明细</th>
        <th>计费方式</th>
        <th>预估金额</th>
      </tr>
    </thead>
    <tbody>
      ${INITIAL_EXPENSES.map(e => `
        <tr>
          <td><strong>${e.category}</strong></td>
          <td>${e.name}</td>
          <td>${e.perPerson ? '按人计算' : '按房间/整体'}</td>
          <td><strong>¥${e.amount}</strong></td>
        </tr>
      `).join('')}
      <tr style="background-color: #F5F5F0; font-weight: bold;">
        <td colspan="3" style="text-align: right;">预估总消费金额：</td>
        <td style="color: #8B261D; font-size: 14px;">¥${totalBudget}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer-note">
    — 金陵记游 · 特别致谢 kim lvan 鼎力襄赞 · 预祝您在南京度过愉快的四天旅程 —
  </div>
</body>
</html>`;
  };

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      handleOpenNewTabPrint();
    }
  };

  const handleOpenNewTabPrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(generateFullHtmlContent());
      printWindow.document.close();
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 300);
    } else {
      alert('请允许浏览器弹窗，或使用“下载HTML/PDF离线文档”功能。');
    }
  };

  const handleDownloadHtml = () => {
    const htmlContent = generateFullHtmlContent();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '南京四日游全景行程指南与指南全集_kim lvan襄赞.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#F7F4F0] border border-[#5A5A40] max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden font-serif max-h-[95vh] flex flex-col">
        
        {/* Header toolbar */}
        <div className="p-4 bg-[#5A5A40] text-white flex flex-wrap items-center justify-between gap-2 no-print shrink-0">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-[#EBE3D5]" />
            <h2 className="text-base sm:text-lg font-bold">南京四日游全景全量导览手册（打印 / 另存为 PDF）</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#8C7B60] text-white rounded text-xs font-bold hover:bg-[#3A3A2E] transition flex items-center gap-1 cursor-pointer shadow-sm"
              title="直接调出浏览器打印并另存为 PDF"
            >
              <Printer className="w-4 h-4" />
              <span>直接打印/存PDF</span>
            </button>
            <button
              onClick={handleOpenNewTabPrint}
              className="px-3 py-1.5 bg-[#3A3A2E] text-white rounded text-xs font-bold hover:bg-[#2C2C2C] transition flex items-center gap-1 cursor-pointer shadow-sm"
              title="在新窗口打开纯净打印页面"
            >
              <ExternalLink className="w-4 h-4" />
              <span>新标签页打印</span>
            </button>
            <button
              onClick={handleDownloadHtml}
              className="px-3 py-1.5 bg-[#8B261D] text-white rounded text-xs font-bold hover:bg-[#681C15] transition flex items-center gap-1 cursor-pointer shadow-sm"
              title="下载离线 HTML 格式行程手册"
            >
              <Download className="w-4 h-4" />
              <span>下载全量离线文档</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white transition cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#2C2C2C] bg-white print-area">
          
          {/* Document Title */}
          <div className="text-center border-b-2 border-[#5A5A40] pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#5A5A40] tracking-widest">
              金陵记游 · 南京四日游全景行程路引与全集
            </h1>
            <p className="text-xs text-[#5F5F4F] font-serif mt-1">
              旅行时间：8月18日 — 8月21日（四天三晚） | 主题：六朝古都 · 湖光城影 · 民国漫步
            </p>
            <p className="text-xs text-[#8B261D] font-bold font-serif mt-1">
              鸣谢 kim lvan 鼎力襄赞
            </p>
          </div>

          {/* Section 1: Itinerary */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-[#5A5A40] border-l-4 border-[#8B261D] pl-2">
              第一部分：四天三晚全景每日行程路线
            </h2>
            {ITINERARY_DAYS.map((day) => (
              <div key={day.dayNumber} className="space-y-3 page-break-inside-avoid border border-[#D9D1C7] rounded-lg p-4 bg-[#FCFAFA]">
                <div className="flex items-center justify-between bg-[#5A5A40] text-white px-4 py-2 rounded font-bold text-sm">
                  <span>DAY {day.dayNumber}（{day.date}）：{day.title} —— {day.subtitle}</span>
                  <span className="text-xs opacity-90">{day.fullDate}</span>
                </div>

                <div className="text-xs text-[#5F5F4F] bg-[#F7F4F0] p-2.5 rounded border border-[#D9D1C7]">
                  <strong>行程概述：</strong>{day.summary}
                </div>

                <table className="w-full text-xs text-left border-collapse border border-[#D9D1C7] bg-white">
                  <thead>
                    <tr className="bg-[#F5F5F0] text-[#2C2C2C]">
                      <th className="p-2 border border-[#D9D1C7] w-24">时间</th>
                      <th className="p-2 border border-[#D9D1C7] w-36">行程地点</th>
                      <th className="p-2 border border-[#D9D1C7]">体验重点与打卡注意事项</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.timeline.map((item) => (
                      <tr key={item.id} className="hover:bg-[#F7F4F0]">
                        <td className="p-2 border border-[#D9D1C7] font-bold text-[#5A5A40]">{item.time}</td>
                        <td className="p-2 border border-[#D9D1C7] font-bold">{item.title}</td>
                        <td className="p-2 border border-[#D9D1C7]">
                          <div className="font-bold">{item.experienceHighlight}</div>
                          {item.note && <div className="text-[11px] text-[#5A5A40] mt-0.5">※ {item.note}</div>}
                          {item.tips && item.tips.length > 0 && (
                            <div className="text-[11px] text-[#8B261D] mt-0.5">💡 打卡避坑：{item.tips.join('；')}</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-[11px] text-[#4A4A3A] bg-[#F7F4F0] p-2.5 rounded border border-[#D9D1C7] border-l-4 border-l-[#5A5A40]">
                  <strong>💡 交通与防坑秘籍：</strong>
                  <ul className="list-disc list-inside mt-1 space-y-0.5">
                    {day.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Landmarks */}
          <div className="space-y-4 page-break-inside-avoid">
            <h2 className="text-lg font-bold text-[#5A5A40] border-l-4 border-[#8B261D] pl-2">
              第二部分：南京八大核心必游名胜与民国建筑图鉴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {NANJING_LANDMARKS.map((lm) => (
                <div key={lm.id} className="border border-[#D9D1C7] rounded-lg p-3 bg-[#FCFAFA] space-y-1.5">
                  <div className="flex items-center justify-between border-b border-[#D9D1C7] pb-1">
                    <span className="font-bold text-sm text-[#5A5A40]">{lm.name}</span>
                    <span className="px-1.5 py-0.5 bg-[#8B261D]/10 text-[#8B261D] text-[10px] rounded font-bold">{lm.category}</span>
                  </div>
                  <p className="text-[#5F5F4F] text-[11px]">{lm.description}</p>
                  <div className="bg-[#F5F5F0] p-2 rounded text-[11px] space-y-0.5">
                    <div><strong>核心亮点：</strong>{lm.highlight}</div>
                    <div><strong>门票信息：</strong>{lm.ticketInfo} | <strong>建议时长：</strong>{lm.recommendedHours}</div>
                    <div><strong>最佳时间：</strong>{lm.bestTime}</div>
                    <div><strong>📷 摄影技巧：</strong>{lm.photoTip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Foods & Souvenirs */}
          <div className="space-y-4 page-break-inside-avoid">
            <h2 className="text-lg font-bold text-[#5A5A40] border-l-4 border-[#8B261D] pl-2">
              第三部分：金陵地道美食与精品伴手礼指南
            </h2>
            
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#5A5A40]">🍽️ 必吃地道名吃：</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {NANJING_FOODS.map((f) => (
                  <div key={f.id} className="border border-[#D9D1C7] rounded-lg p-3 bg-[#FCFAFA] space-y-1">
                    <div className="flex items-center justify-between border-b border-[#D9D1C7] pb-1">
                      <span className="font-bold text-sm text-[#5A5A40]">{f.name}（{f.chineseName}）</span>
                      <span className="px-1.5 py-0.5 bg-[#8B261D]/10 text-[#8B261D] text-[10px] rounded font-bold">{f.category}</span>
                    </div>
                    <p className="text-[#5F5F4F] text-[11px]">{f.description}</p>
                    <div className="bg-[#F5F5F0] p-2 rounded text-[11px] space-y-0.5">
                      <div><strong>参考价格：</strong>{f.priceRange}</div>
                      <div><strong>推荐名店：</strong>{f.mustTrySpot}</div>
                      <div><strong>风味特点：</strong>{f.tasteProfile}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#5A5A40]">🎁 精选金陵伴手礼：</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {NANJING_SOUVENIRS.map((s) => (
                  <div key={s.id} className="border border-[#D9D1C7] rounded-lg p-3 bg-[#FCFAFA] space-y-1">
                    <div className="flex items-center justify-between border-b border-[#D9D1C7] pb-1">
                      <span className="font-bold text-sm text-[#5A5A40]">{s.name}</span>
                      <span className="px-1.5 py-0.5 bg-[#8B261D]/10 text-[#8B261D] text-[10px] rounded font-bold">{s.category}</span>
                    </div>
                    <p className="text-[#5F5F4F] text-[11px]">{s.description}</p>
                    <div className="bg-[#F5F5F0] p-2 rounded text-[11px] space-y-0.5">
                      <div><strong>参考价格：</strong>{s.priceRange}</div>
                      <div><strong>推荐地点：</strong>{s.bestBuyingLocations.join('、')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Budget */}
          <div className="space-y-3 page-break-inside-avoid">
            <h2 className="text-lg font-bold text-[#5A5A40] border-l-4 border-[#8B261D] pl-2">
              第四部分：四天三晚旅行预估预算明细表
            </h2>
            <table className="w-full text-xs text-left border-collapse border border-[#D9D1C7]">
              <thead>
                <tr className="bg-[#5A5A40] text-white">
                  <th className="p-2 border border-[#D9D1C7]">消费类别</th>
                  <th className="p-2 border border-[#D9D1C7]">消费项目明细</th>
                  <th className="p-2 border border-[#D9D1C7]">计费方式</th>
                  <th className="p-2 border border-[#D9D1C7]">预估金额</th>
                </tr>
              </thead>
              <tbody>
                {INITIAL_EXPENSES.map((e) => (
                  <tr key={e.id} className="hover:bg-[#F7F4F0]">
                    <td className="p-2 border border-[#D9D1C7] font-bold text-[#5A5A40]">{e.category}</td>
                    <td className="p-2 border border-[#D9D1C7]">{e.name}</td>
                    <td className="p-2 border border-[#D9D1C7]">{e.perPerson ? '按人计算' : '按房间/整体'}</td>
                    <td className="p-2 border border-[#D9D1C7] font-bold">¥{e.amount}</td>
                  </tr>
                ))}
                <tr className="bg-[#F5F5F0] font-bold">
                  <td colSpan={3} className="p-2 border border-[#D9D1C7] text-right">预估总消费金额：</td>
                  <td className="p-2 border border-[#D9D1C7] text-[#8B261D] text-sm">¥{totalBudget}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs text-[#5A5A40] pt-6 border-t border-[#D9D1C7] font-serif font-bold">
            — 金陵记游 · 特别致谢 kim lvan 鼎力襄赞 · 预祝您在南京度过愉快的四天旅程 —
          </div>

        </div>

      </div>
    </div>
  );
};
