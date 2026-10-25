import React, { useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Sparkles, Star, Trophy, Wand2, HelpCircle } from 'lucide-react';
import { LearningChallengePlan } from '../types/challenge';

interface Props {
  plan: LearningChallengePlan;
}

export const StudentCardsView: React.FC<Props> = ({ plan }) => {
  const [activeLevelNumber, setActiveLevelNumber] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const toggleStep = (key: string) => {
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentLevel = plan.taskLevels.find((l) => l.levelNumber === activeLevelNumber) || plan.taskLevels[0];

  const levelThemes = {
    1: {
      name: 'Khởi Động',
      color: 'amber',
      badge: '🥉 Huy hiệu Đồng',
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50/70',
      border: 'border-amber-300',
      textColor: 'text-amber-900',
    },
    2: {
      name: 'Vận Dụng',
      color: 'slate',
      badge: '🥈 Huy hiệu Bạc',
      gradient: 'from-slate-600 to-indigo-700',
      bgLight: 'bg-indigo-50/60',
      border: 'border-indigo-300',
      textColor: 'text-indigo-900',
    },
    3: {
      name: 'Sáng Tạo',
      color: 'yellow',
      badge: '🥇 Huy hiệu Vàng Siêu Cấp',
      gradient: 'from-yellow-500 via-amber-500 to-rose-500',
      bgLight: 'bg-yellow-50/70',
      border: 'border-yellow-400',
      textColor: 'text-yellow-950',
    },
  };

  const theme = levelThemes[currentLevel.levelNumber as 1 | 2 | 3] || levelThemes[1];

  // Calculate student step progress
  const stepCount = currentLevel.stepByStepHints.length;
  const completedCount = currentLevel.stepByStepHints.filter((h) => completedSteps[`${currentLevel.levelNumber}-${h.step}`]).length;
  const isAllDone = stepCount > 0 && completedCount === stepCount;

  return (
    <div className="space-y-6">
      {/* Student Presentation Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Thẻ Nhiệm Vụ Dành Cho Học Sinh {plan.inputs.grade}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {plan.title}
          </h2>

          <p className="text-sm sm:text-base text-emerald-100 italic leading-relaxed">
            "{plan.realWorldScenario.missionCallout}"
          </p>

          {/* Level Switcher for Student View */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {plan.taskLevels.map((lvl) => {
              const isActive = lvl.levelNumber === activeLevelNumber;
              return (
                <button
                  key={lvl.levelNumber}
                  onClick={() => setActiveLevelNumber(lvl.levelNumber)}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md ${
                    isActive
                      ? 'bg-white text-slate-900 scale-105 ring-4 ring-white/30'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span>{lvl.levelNumber === 1 ? '🥉' : lvl.levelNumber === 2 ? '🥈' : '🥇'}</span>
                  <span>{lvl.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Level Student Mission Card */}
      <div className={`bg-white rounded-3xl border-2 ${theme.border} p-6 sm:p-8 shadow-md space-y-6 transition-all`}>
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${theme.bgLight} ${theme.textColor} border ${theme.border}`}>
                {theme.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Mục tiêu của em trong tiết học
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {currentLevel.name}
            </h3>
            <p className="text-sm text-slate-600 mt-1 italic">
              "{currentLevel.tagline}"
            </p>
          </div>

          {/* Student Progress Badge */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center sm:text-right shrink-0">
            <span className="text-xs font-bold text-slate-500 block uppercase">Tiến Độ Thử Thách</span>
            <span className="text-2xl font-black text-slate-900">
              {completedCount}/{stepCount} bước
            </span>
            {isAllDone && (
              <span className="block text-xs font-bold text-emerald-600 mt-0.5 animate-bounce">
                🎉 Hoàn thành xuất sắc!
              </span>
            )}
          </div>
        </div>

        {/* Completion Criteria for Student */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-emerald-600" />
            Điều Kiện Để Nhận Được {theme.badge}:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentLevel.completionCriteria.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white/90 p-3 rounded-xl border border-emerald-100 text-xs sm:text-sm text-emerald-950">
                <span className="text-emerald-600 font-bold mt-0.5">🌟</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-step Interactive Checklist */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Các Bước Thực Hiện (Tích chọn khi em làm xong nhé!):
          </h4>

          <div className="space-y-3">
            {currentLevel.stepByStepHints.map((hint) => {
              const stepKey = `${currentLevel.levelNumber}-${hint.step}`;
              const isChecked = !!completedSteps[stepKey];

              return (
                <div
                  key={hint.step}
                  onClick={() => toggleStep(stepKey)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-5 h-5 rounded-md text-emerald-600 border-slate-300 focus:ring-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">
                        Bước {hint.step}:
                      </span>
                      <h5 className={`text-sm sm:text-base font-bold ${isChecked ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {hint.title}
                      </h5>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'text-slate-400' : 'text-slate-600'}`}>
                      {hint.description}
                    </p>

                    <div className="mt-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 flex items-start gap-2 text-xs text-slate-700">
                      <HelpCircle className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                      <span><strong>Tự kiểm tra:</strong> {hint.checkQuestion}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detective Clue Callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-amber-950">
            <span className="text-2xl">🕵️‍♂️</span>
            <div>
              <span className="font-bold block">Gặp sự cố hoặc sản phẩm chưa chạy như ý?</span>
              <span className="text-amber-800">Đừng lo lắng! Hãy bình tĩnh làm "Thám tử nhí" tự giải mã sự cố nhé.</span>
            </div>
          </div>
          <span className="font-bold text-amber-900 bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-2xs">
            Bí kíp: Dùng câu hỏi gợi mở của cô
          </span>
        </div>

      </div>
    </div>
  );
};
