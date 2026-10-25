import React, { useState } from 'react';
import { AlertCircle, HelpCircle, Search, Lightbulb, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { CommonErrorItem } from '../types/challenge';

interface Props {
  errors: CommonErrorItem[];
}

export const DebugAndGuidingQuestions: React.FC<Props> = ({ errors }) => {
  const [activeDetectiveId, setActiveDetectiveId] = useState<string | null>(errors[0]?.id || null);
  const [revealedClues, setRevealedClues] = useState<Record<string, boolean>>({});

  const toggleClue = (id: string) => {
    setRevealedClues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-sm">
          4
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Dự Đoán Lỗi Thường Gặp & Bộ Câu Hỏi Gợi Mở Sửa Lỗi
          </h3>
          <p className="text-xs text-slate-500">
            Nguyên tắc kiến tạo: Tuyệt đối KHÔNG đưa toàn bộ lời giải sẵn để học sinh sao chép máy móc!
          </p>
        </div>
      </div>

      {/* Pedagogical Golden Rule Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3 text-amber-950">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <span className="font-bold block text-amber-900 mb-0.5">
            Quy Tắc Vàng Của Giáo Viên Khi Hỗ Trợ Tại Phòng Thực Hành:
          </span>
          <p className="leading-relaxed">
            Tuyệt đối không cầm chuột hay bấm phím hộ học sinh! Khi học sinh kêu "Cô ơi máy hỏng rồi / bài con bị lỗi rồi", giáo viên hãy giữ nụ cười khích lệ, cúi người ngang tầm mắt học sinh và đặt lần lượt các <strong>câu hỏi gợi mở</strong> dưới đây để đánh thức tư duy phản biện và khả năng tự "gỡ lỗi" (debugging) của trẻ.
          </p>
        </div>
      </div>

      {/* List of Common Errors */}
      <div className="space-y-4">
        {errors.map((err, idx) => {
          const isSelected = activeDetectiveId === err.id;
          const isClueRevealed = revealedClues[err.id];

          return (
            <div
              key={err.id}
              className={`rounded-xl border transition-all overflow-hidden ${
                isSelected
                  ? 'border-indigo-300 bg-indigo-50/20 shadow-xs'
                  : 'border-slate-200 bg-slate-50/40 hover:border-slate-300'
              }`}
            >
              {/* Error Header */}
              <div
                onClick={() => setActiveDetectiveId(err.id)}
                className="p-4 cursor-pointer flex items-start justify-between gap-3 bg-white"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">
                      Hiện Tượng Lỗi Của Học Sinh:
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                      {err.errorDescription}
                    </h4>
                  </div>
                </div>

                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md shrink-0">
                  {isSelected ? 'Đang xem bộ câu hỏi' : 'Nhấp xem gợi ý'}
                </span>
              </div>

              {/* Expanded Error Details */}
              <div className="p-5 border-t border-slate-100 space-y-4">
                
                {/* 1. Underlying Cause (Nguyên nhân cho giáo viên) */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Search className="w-3.5 h-3.5 text-slate-600" />
                    Bản chất nguyên nhân kĩ thuật (Dành cho giáo viên nắm):
                  </span>
                  <p className="leading-relaxed pl-5 text-slate-600">
                    {err.whyItHappens}
                  </p>
                </div>

                {/* 2. Scaffolding Guiding Questions (Bộ câu hỏi gợi mở) */}
                <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      Bộ Câu Hỏi Gợi Mở (Giáo Viên Đặt Cho Học Sinh Suy Nghĩ):
                    </span>
                    <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-semibold">
                      Chỉ hỏi - Không đọc đáp án
                    </span>
                  </div>

                  <div className="space-y-2 mt-2">
                    {err.guidingQuestions.map((q, qIdx) => (
                      <div
                        key={qIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-950 bg-white/90 p-2.5 rounded-lg border border-blue-100 shadow-2xs"
                      >
                        <span className="font-bold text-blue-600 shrink-0">
                          Câu {qIdx + 1}:
                        </span>
                        <span className="italic leading-relaxed font-medium">"{q}"</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Detective Self-Check Action (Học sinh tự làm thám tử nhí) */}
                <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      Thao Tác Tự Kiểm Tra (Học sinh tự điều tra sau khi trả lời xong):
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleClue(err.id)}
                      className="text-[11px] font-semibold text-emerald-700 underline hover:text-emerald-900"
                    >
                      {isClueRevealed ? 'Ẩn manh mối' : 'Hiện manh mối kiểm tra'}
                    </button>
                  </div>

                  {isClueRevealed ? (
                    <p className="text-emerald-950 font-medium leading-relaxed bg-white/80 p-2.5 rounded-lg border border-emerald-100 animate-in fade-in duration-150">
                      🕵️‍♂️ <strong>Hành động của em:</strong> {err.selfCheckAction}
                    </p>
                  ) : (
                    <p className="text-emerald-800 text-xs italic">
                      * Nhấp "Hiện manh mối kiểm tra" để xem hướng dẫn tự thao tác của bé.
                    </p>
                  )}
                </div>

                {/* 4. Teacher Tip */}
                <div className="text-[11px] text-slate-500 italic pl-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span><strong>Mẹo sư phạm:</strong> {err.teacherTip}</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
