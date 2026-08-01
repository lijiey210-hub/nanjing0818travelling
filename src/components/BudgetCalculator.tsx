import React, { useState } from 'react';
import { INITIAL_EXPENSES } from '../data/nanjingData';
import { ExpenseItem } from '../types';
import { Calculator, DollarSign, Users, Plus, Trash2, PieChart, Sparkles } from 'lucide-react';

export const BudgetCalculator: React.FC = () => {
  const [personCount, setPersonCount] = useState<number>(2);
  const [expenses, setExpenses] = useState<ExpenseItem[]>(INITIAL_EXPENSES);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemAmount, setNewItemAmount] = useState<string>('');
  const [newItemCategory, setNewItemCategory] = useState<ExpenseItem['category']>('餐饮');

  const calculateTotal = () => {
    return expenses.reduce((acc, curr) => {
      const itemCost = curr.perPerson ? curr.amount * personCount : curr.amount;
      return acc + itemCost;
    }, 0);
  };

  const calculatePerPerson = () => {
    const total = calculateTotal();
    return Math.round(total / (personCount || 1));
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemAmount) return;
    const amount = parseFloat(newItemAmount);
    if (isNaN(amount) || amount <= 0) return;

    const newItem: ExpenseItem = {
      id: `exp-custom-${Date.now()}`,
      name: newItemName,
      amount,
      category: newItemCategory,
      perPerson: true
    };

    setExpenses([...expenses, newItem]);
    setNewItemName('');
    setNewItemAmount('');
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handlePreset = (type: 'economic' | 'comfort' | 'luxury') => {
    if (type === 'economic') {
      setExpenses([
        { id: 'exp-1', category: '住宿', name: '快捷酒店/青年旅舍（3晚）', amount: 600, perPerson: false },
        { id: 'exp-2', category: '门票', name: '钟山风景区+总统府+中华门门票', amount: 185, perPerson: true },
        { id: 'exp-3', category: '餐饮', name: '地道小吃（鸭血粉丝汤、科巷、老门东）', amount: 300, perPerson: true },
        { id: 'exp-4', category: '交通', name: '南京市内全程地铁+步行', amount: 60, perPerson: true },
        { id: 'exp-5', category: '购物伴手礼', name: '基础真空盐水鸭', amount: 80, perPerson: true },
      ]);
    } else if (type === 'comfort') {
      setExpenses(INITIAL_EXPENSES);
    } else {
      setExpenses([
        { id: 'exp-1', category: '住宿', name: '新街口/玄武湖高端豪生酒店（3晚）', amount: 2800, perPerson: false },
        { id: 'exp-2', category: '门票', name: '全景点门票+秦淮游船+人工讲解服务', amount: 350, perPerson: true },
        { id: 'exp-3', category: '餐饮', name: '黑珍珠餐厅+南京大牌档豪享', amount: 1200, perPerson: true },
        { id: 'exp-4', category: '交通', name: '全程专车/网约车接送', amount: 400, perPerson: true },
        { id: 'exp-5', category: '购物伴手礼', name: '南京云锦礼盒+老字号高档干货', amount: 600, perPerson: true },
      ]);
    }
  };

  const totalAmount = calculateTotal();
  const perPersonAmount = calculatePerPerson();

  return (
    <div id="budget" className="my-12 bg-white p-4 sm:p-8 rounded-xl border border-[#D9D1C7] shadow-lg font-serif">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D9D1C7]">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[#5A5A40]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              南京四日游预算费用估算器
            </h2>
          </div>
          <p className="text-sm text-[#5F5F4F] mt-1">
            动态调整同行人数与住宿餐饮档次，实时精算您的金陵之旅费用开支
          </p>
        </div>

        {/* Person Count Selector */}
        <div className="flex items-center gap-3 bg-[#F5F5F0] p-2 rounded-lg border border-[#D9D1C7]">
          <span className="text-xs font-bold text-[#2C2C2C] flex items-center gap-1">
            <Users className="w-4 h-4 text-[#5A5A40]" />
            同行人数：
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setPersonCount(num)}
                className={`w-8 h-8 rounded-md font-bold text-xs transition cursor-pointer ${
                  personCount === num ? 'bg-[#5A5A40] text-white shadow' : 'bg-white text-[#5F5F4F] hover:bg-[#EBE3D5]'
                }`}
              >
                {num}人
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preset Quick Mode Buttons */}
      <div className="my-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-bold text-[#5F5F4F] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#8C7B60]" />
          快速预算方案预设：
        </span>
        <button
          onClick={() => handlePreset('economic')}
          className="px-3 py-1 bg-white hover:bg-[#F5F5F0] text-[#5A5A40] font-bold rounded border border-[#5A5A40]/30 cursor-pointer"
        >
          特种兵/经济型（约¥600/人）
        </button>
        <button
          onClick={() => handlePreset('comfort')}
          className="px-3 py-1 bg-[#5A5A40] text-white font-bold rounded shadow cursor-pointer"
        >
          标准舒适型（推荐，约¥1200/人）
        </button>
        <button
          onClick={() => handlePreset('luxury')}
          className="px-3 py-1 bg-white hover:bg-[#F5F5F0] text-[#8C7B60] font-bold rounded border border-[#8C7B60]/30 cursor-pointer"
        >
          深度品质型（约¥2600/人）
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Expenses List */}
        <div className="lg:col-span-8 bg-white p-4 sm:p-5 rounded-lg border border-[#D9D1C7] shadow-sm space-y-4">
          <h3 className="text-base font-bold text-[#2C2C2C] border-b border-[#D9D1C7] pb-2">
            费用明细列表（对应 {personCount} 人）
          </h3>

          <div className="space-y-2">
            {expenses.map((exp) => {
              const itemTotal = exp.perPerson ? exp.amount * personCount : exp.amount;
              return (
                <div key={exp.id} className="flex items-center justify-between p-3 bg-[#F7F4F0] rounded border border-[#D9D1C7] text-xs font-serif">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#2C2C2C]">{exp.name}</span>
                      <span className="px-2 py-0.2 bg-[#5A5A40]/10 text-[#5A5A40] text-[10px] font-bold rounded">
                        {exp.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#5F5F4F]">
                      {exp.perPerson ? `单人 ¥${exp.amount} × ${personCount}人` : `整项费用（全员共用）`}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#5A5A40]">
                      ¥{itemTotal}
                    </span>
                    <button
                      onClick={() => handleRemoveExpense(exp.id)}
                      className="text-gray-400 hover:text-red-600 transition cursor-pointer"
                      title="删除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Expense Form */}
          <form onSubmit={handleAddExpense} className="pt-4 border-t border-[#D9D1C7] flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="新增开销名称 (如：汉服体验)"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="flex-1 min-w-[140px] px-3 py-1.5 bg-[#F7F4F0] border border-[#D9D1C7] rounded text-xs font-serif focus:outline-none focus:border-[#5A5A40]"
            />
            <input
              type="number"
              placeholder="单人金额 (¥)"
              value={newItemAmount}
              onChange={(e) => setNewItemAmount(e.target.value)}
              className="w-28 px-3 py-1.5 bg-[#F7F4F0] border border-[#D9D1C7] rounded text-xs font-serif focus:outline-none focus:border-[#5A5A40]"
            />
            <select
              value={newItemCategory}
              onChange={(e) => setNewItemCategory(e.target.value as ExpenseItem['category'])}
              className="px-2 py-1.5 bg-[#F7F4F0] border border-[#D9D1C7] rounded text-xs font-serif"
            >
              <option value="餐饮">餐饮</option>
              <option value="门票">门票</option>
              <option value="住宿">住宿</option>
              <option value="交通">交通</option>
              <option value="购物伴手礼">伴手礼</option>
            </select>
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#5A5A40] text-white rounded text-xs font-bold font-serif hover:bg-[#3A3A2E] transition flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              添加
            </button>
          </form>
        </div>

        {/* Budget Summary Result Card */}
        <div className="lg:col-span-4 bg-[#2C2C2C] text-[#F7F4F0] p-6 rounded-lg border-2 border-[#8C7B60] shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#8C7B60] text-xs font-bold border-b border-[#5F5F4F] pb-3 mb-4">
              <PieChart className="w-4 h-4" />
              金陵四日游预估开支总览
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-[#D9D1C7]">预估团队总开销 ({personCount}人)：</span>
                <div className="text-3xl sm:text-4xl font-bold font-serif text-[#8C7B60] mt-1">
                  ¥ {totalAmount}
                </div>
              </div>

              <div className="p-3 bg-[#3A3A2E] rounded border border-[#5F5F4F]/50">
                <span className="text-xs text-[#D9D1C7]">人均均摊参考花费：</span>
                <div className="text-2xl font-bold font-serif text-white mt-0.5">
                  ¥ {perPersonAmount} <span className="text-xs font-normal text-[#D9D1C7]">/ 人</span>
                </div>
              </div>

              <div className="text-xs text-[#D9D1C7] space-y-1.5 pt-2">
                <p>• 费用包含：3晚住宿、全景点联票、地道美食、市内交通。</p>
                <p>• 大交通（往返南京高铁/机票）需根据出发地自行补充。</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#5F5F4F] text-center">
            <span className="text-xs text-[#8C7B60] font-bold">
              Tip：南京多数景点（如中山陵、南博）免费但需提前预约
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
