import React, { useState } from 'react';
import { Award, CheckCircle2, FileSpreadsheet, RotateCcw, Sparkles } from 'lucide-react';
import { RubricCriterion } from '../types/challenge';

interface Props {
  rubric: RubricCriterion[];
}

export const RubricTable: React.FC<Props> = ({ rubric }) => {
  // Store selected score level for each criterion: 'needHelp' | 'proficient' | 'good' | 'excellent'
  const [evalScores, setEvalScores] = useState<Record<string, 'needHelp' | 'proficient' | 'good' | 'excellent'>>({});
  const [studentName, setStudentName] = useState<string>('Nhóm 1 / Học sinh A');

  const handleSelectScore = (critId: string, level: 'needHelp' | 'proficient' | 'good' | 'excellent') => {
    setEvalScores((prev) => ({
      ...prev,
      [critId]: level,
    }));
  };

  const handleReset = () => {
    setEvalScores({});
  };

  // Calculate quick score summary
  const scoreWeights = { needHelp: 1, proficient: 2, good: 3, excellent: 4 };
  const evaluatedCount = Object.keys(evalScores).length;
  const totalPoints = Object.values(evalScores).reduce((sum, val) => sum + scoreWeights[val], 0);
  const maxPoints = rubric.length * 4;

  const getOverallRanking = () => {
    if (evaluatedCount < rubric.length) return 'Đang đánh giá...';
    const avg = totalPoints / rubric.length;
    if (avg >= 3.6) return 'Xuất Sắc (Vượt YCCĐ) 🌟';
    if (avg >= 2.8) return 'Tốt (Đạt Tốt YCCĐ) 👍';
    if (avg >= 2.0) return 'Đạt (Hoàn thành YCCĐ) ✔️';
    return 'Cần Cố Gắng (Cần thêm hỗ trợ) 🤝';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
            5
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Rubric Đánh Giá Quá Trình 4 Tiêu Chí (Định Lượng & Định Tính)
            </h3>
            <p className="text-xs text-slate-500">
              4 tiêu chí cốt lõi: Đáp ứng yêu cầu • Hoạt động đúng • Có sáng tạo • Giải thích được cách làm
            </p>
          </div>
        </div>

        {/* Interactive Evaluation Helper */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-1.5 rounded-xl">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Tên nhóm / học sinh"
            className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 w-36 focus:outline-hidden"
          />
          <button
            onClick={handleReset}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            title="Đặt lại bảng chấm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Live Scoring Progress Summary */}
      {evaluatedCount > 0 && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-900">Đánh giá nhanh cho: <strong>{studentName}</strong></span>
            <span className="bg-white px-2 py-0.5 rounded-full border border-teal-200 font-bold text-teal-800">
              {evaluatedCount}/{rubric.length} tiêu chí
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-600">
              Điểm tích lũy: <strong className="text-teal-900">{totalPoints}/{maxPoints}</strong>
            </span>
            <span className="font-bold text-emerald-800 bg-white px-3 py-1 rounded-lg border border-emerald-300 shadow-2xs">
              Xếp loại: {getOverallRanking()}
            </span>
          </div>
        </div>
      )}

      {/* Rubric Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
              <th className="p-3.5 font-bold w-1/4 min-w-[180px]">
                Tiêu Chí Đánh Giá
              </th>
              <th className="p-3.5 font-bold w-[18%] min-w-[150px] text-rose-900 bg-rose-50/60">
                Cần Cố Gắng (Mức 1)
              </th>
              <th className="p-3.5 font-bold w-[18%] min-w-[150px] text-blue-900 bg-blue-50/60">
                Đạt (Mức 2)
              </th>
              <th className="p-3.5 font-bold w-[19%] min-w-[150px] text-indigo-900 bg-indigo-50/60">
                Tốt (Mức 3)
              </th>
              <th className="p-3.5 font-bold w-[20%] min-w-[160px] text-emerald-900 bg-emerald-50/60">
                Xuất Sắc (Mức 4) 🌟
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rubric.map((item, idx) => {
              const currentChoice = evalScores[item.id];

              return (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  {/* Criterion Header */}
                  <td className="p-3.5 bg-slate-50/80 align-top">
                    <span className="font-bold text-slate-900 block mb-1">
                      {item.criterionName}
                    </span>
                    {item.weight && (
                      <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block">
                        Tỷ trọng: {item.weight}
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 block mt-2">
                      * Nhấp vào ô để chấm điểm
                    </span>
                  </td>

                  {/* Level 1: Cần cố gắng */}
                  <td
                    onClick={() => handleSelectScore(item.id, 'needHelp')}
                    className={`p-3.5 align-top cursor-pointer transition-all border-l border-slate-100 ${
                      currentChoice === 'needHelp'
                        ? 'bg-rose-100/80 ring-2 ring-rose-500 font-medium text-rose-950'
                        : 'text-slate-600 hover:bg-rose-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <input
                        type="radio"
                        checked={currentChoice === 'needHelp'}
                        onChange={() => {}}
                        className="mt-1 text-rose-600 shrink-0"
                      />
                      <span className="leading-relaxed">{item.levels.needHelp}</span>
                    </div>
                  </td>

                  {/* Level 2: Đạt */}
                  <td
                    onClick={() => handleSelectScore(item.id, 'proficient')}
                    className={`p-3.5 align-top cursor-pointer transition-all border-l border-slate-100 ${
                      currentChoice === 'proficient'
                        ? 'bg-blue-100/80 ring-2 ring-blue-500 font-medium text-blue-950'
                        : 'text-slate-600 hover:bg-blue-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <input
                        type="radio"
                        checked={currentChoice === 'proficient'}
                        onChange={() => {}}
                        className="mt-1 text-blue-600 shrink-0"
                      />
                      <span className="leading-relaxed">{item.levels.proficient}</span>
                    </div>
                  </td>

                  {/* Level 3: Tốt */}
                  <td
                    onClick={() => handleSelectScore(item.id, 'good')}
                    className={`p-3.5 align-top cursor-pointer transition-all border-l border-slate-100 ${
                      currentChoice === 'good'
                        ? 'bg-indigo-100/80 ring-2 ring-indigo-500 font-medium text-indigo-950'
                        : 'text-slate-600 hover:bg-indigo-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <input
                        type="radio"
                        checked={currentChoice === 'good'}
                        onChange={() => {}}
                        className="mt-1 text-indigo-600 shrink-0"
                      />
                      <span className="leading-relaxed">{item.levels.good}</span>
                    </div>
                  </td>

                  {/* Level 4: Xuất sắc */}
                  <td
                    onClick={() => handleSelectScore(item.id, 'excellent')}
                    className={`p-3.5 align-top cursor-pointer transition-all border-l border-slate-100 ${
                      currentChoice === 'excellent'
                        ? 'bg-emerald-100/80 ring-2 ring-emerald-500 font-medium text-emerald-950'
                        : 'text-slate-600 hover:bg-emerald-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <input
                        type="radio"
                        checked={currentChoice === 'excellent'}
                        onChange={() => {}}
                        className="mt-1 text-emerald-600 shrink-0"
                      />
                      <span className="leading-relaxed">{item.levels.excellent}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
