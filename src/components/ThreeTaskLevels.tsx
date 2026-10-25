import React, { useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Layers, Sparkles, Zap, Wrench, HelpCircle } from 'lucide-react';
import { TaskLevel } from '../types/challenge';

interface Props {
  levels: TaskLevel[];
}

export const ThreeTaskLevels: React.FC<Props> = ({ levels }) => {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState<number>(0);

  const levelColorStyles = [
    {
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      accent: 'amber',
      headerGradient: 'from-amber-600 to-amber-700',
      activeTab: 'border-amber-600 text-amber-700 bg-amber-50/60',
      stepBadge: 'bg-amber-600 text-white',
      borderHighlight: 'border-amber-300',
    },
    {
      badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
      accent: 'slate',
      headerGradient: 'from-slate-700 to-slate-800',
      activeTab: 'border-slate-700 text-slate-800 bg-slate-100',
      stepBadge: 'bg-slate-700 text-white',
      borderHighlight: 'border-slate-300',
    },
    {
      badgeBg: 'bg-yellow-100 text-yellow-900 border-yellow-400',
      accent: 'yellow',
      headerGradient: 'from-amber-500 via-yellow-500 to-orange-500',
      activeTab: 'border-yellow-500 text-yellow-800 bg-yellow-50/70',
      stepBadge: 'bg-amber-500 text-white',
      borderHighlight: 'border-yellow-400',
    },
  ];

  const currentLevel = levels[selectedLevelIndex] || levels[0];
  const currentStyle = levelColorStyles[selectedLevelIndex] || levelColorStyles[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
            2-3
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              3 Mức Độ Nhiệm Vụ Phân Hóa (Khởi Động - Vận Dụng - Sáng Tạo)
            </h3>
            <p className="text-xs text-slate-500">
              Cùng hướng tới yêu cầu cần đạt chung nhưng khác biệt về độ khó, tốc độ và tính độc lập của học sinh
            </p>
          </div>
        </div>

        {/* Level Switcher Buttons */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl">
          {levels.map((lvl, idx) => (
            <button
              key={lvl.levelNumber}
              onClick={() => setSelectedLevelIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedLevelIndex === idx
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              <span>Mức {lvl.levelNumber}: {lvl.name.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Selected Level Card */}
      <div className={`rounded-2xl border ${currentStyle.borderHighlight} overflow-hidden shadow-xs transition-all`}>
        {/* Banner */}
        <div className={`p-5 text-white bg-gradient-to-r ${currentStyle.headerGradient} flex flex-wrap items-center justify-between gap-4`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-xs">
                Mức {currentLevel.levelNumber}
              </span>
              <span className="text-xs font-semibold text-white/90">
                {currentLevel.badge}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              {currentLevel.name}
            </h4>
            <p className="text-xs sm:text-sm text-white/90 mt-1 italic">
              "{currentLevel.tagline}"
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-xs px-4 py-2 rounded-xl text-right max-w-xs">
            <span className="text-[10px] uppercase font-bold text-white/70 block">Mục Tiêu Riêng:</span>
            <p className="text-xs font-semibold text-white leading-tight">
              {currentLevel.goal}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 bg-slate-50/50">
          
          {/* Grid 2 Cột: Tiêu Chí Hoàn Thành & Vật Liệu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Tiêu chí hoàn thành */}
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Tiêu Chí Hoàn Thành (Quan Sát Được):
              </h5>
              <ul className="space-y-2">
                {currentLevel.completionCriteria.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vật liệu & Công cụ */}
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-3">
                <Wrench className="w-4 h-4 text-indigo-600" />
                Vật Liệu & Công Cụ Cần Dùng:
              </h5>
              <div className="flex flex-wrap gap-2">
                {currentLevel.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-50/70 border border-indigo-200 text-xs font-medium text-indigo-900"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {mat}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3 italic">
                * Giáo viên bố trí công cụ trước giờ học hoặc in sẵn thẻ nhiệm vụ tại từng máy.
              </p>
            </div>
          </div>

          {/* Gợi Ý Theo Từng Bước (Scaffolding Steps) */}
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Gợi Ý Theo Từng Bước Giàn Giáo (Scaffolding):
            </h5>

            <div className="space-y-3">
              {currentLevel.stepByStepHints.map((hint) => (
                <div
                  key={hint.step}
                  className="flex flex-col sm:flex-row items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className={`w-7 h-7 rounded-lg ${currentStyle.stepBadge} flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs`}>
                    {hint.step}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h6 className="text-sm font-bold text-slate-900">
                      {hint.title}
                    </h6>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {hint.description}
                    </p>

                    {/* Câu hỏi tự kiểm tra nhỏ */}
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-start gap-1.5 text-xs text-emerald-800 bg-emerald-50/60 p-2 rounded-lg">
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Câu hỏi tự kiểm tra nhỏ: </span>
                        <span>{hint.checkQuestion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
