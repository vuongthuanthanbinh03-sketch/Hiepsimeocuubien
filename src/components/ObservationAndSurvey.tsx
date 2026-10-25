import React, { useState } from 'react';
import { Eye, Smile, Frown, Meh, Heart, Award, CheckSquare, Sparkles, BarChart2 } from 'lucide-react';
import { ObservationItem, InterestSurvey } from '../types/challenge';

interface Props {
  observationSheet: {
    title: string;
    instruction: string;
    items: ObservationItem[];
  };
  interestSurvey: InterestSurvey;
}

export const ObservationAndSurvey: React.FC<Props> = ({ observationSheet, interestSurvey }) => {
  // Local state for checking observation items
  const [obsRecord, setObsRecord] = useState<Record<string, 'low' | 'medium' | 'high'>>({});
  // Local state for student survey simulation
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, any>>({});

  const handleSelectObs = (itemId: string, level: 'low' | 'medium' | 'high') => {
    setObsRecord((prev) => ({ ...prev, [itemId]: level }));
  };

  const handleAnswerSurvey = (qId: string, value: any) => {
    setSurveyAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  return (
    <div className="space-y-6">
      {/* 6A. Phiếu Quan Sát Mức Độ Chủ Động */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
            6A
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {observationSheet.title}
            </h3>
            <p className="text-xs text-slate-500">
              {observationSheet.instruction}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {observationSheet.items.map((item, idx) => {
            const currentLevel = obsRecord[item.id];

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.behavior}
                  </h4>
                  {currentLevel && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                      Đã ghi nhận: {currentLevel === 'high' ? 'Chủ động cao' : currentLevel === 'medium' ? 'Khá chủ động' : 'Cần hỗ trợ'}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Mức Thấp */}
                  <div
                    onClick={() => handleSelectObs(item.id, 'low')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      currentLevel === 'low'
                        ? 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400 font-medium'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-rose-700 block mb-1">
                      Mức 1: Thụ Động (Cần cầm tay chỉ việc)
                    </span>
                    <p className="leading-relaxed">{item.indicatorLevels.low}</p>
                  </div>

                  {/* Mức Trung Bình */}
                  <div
                    onClick={() => handleSelectObs(item.id, 'medium')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      currentLevel === 'medium'
                        ? 'border-amber-400 bg-amber-50 text-amber-950 ring-2 ring-amber-400 font-medium'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-amber-700 block mb-1">
                      Mức 2: Khá Chủ Động (Đôi khi phụ thuộc)
                    </span>
                    <p className="leading-relaxed">{item.indicatorLevels.medium}</p>
                  </div>

                  {/* Mức Cao */}
                  <div
                    onClick={() => handleSelectObs(item.id, 'high')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      currentLevel === 'high'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500 font-medium'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-emerald-700 block mb-1">
                      Mức 3: Rất Chủ Động (Tự lực & Giúp bạn) 🌟
                    </span>
                    <p className="leading-relaxed">{item.indicatorLevels.high}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6B. Khảo Sát Hứng Thú Ngắn Trước & Sau */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-sm">
            6B
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Khảo Sát Hứng Thú Học Tập Ngắn: Trước & Sau Giờ Học (Pre - Post Survey)
            </h3>
            <p className="text-xs text-slate-500">
              Thiết kế trực quan dạng biểu tượng mặt cười (Emoji) và trắc nghiệm 1 phút, không gây áp lực chữ viết cho học sinh
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Pre-Survey Card */}
          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/30 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-600 text-white">
                Trước Giờ Học (1 Phút)
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                {interestSurvey.preSurvey.title}
              </h4>
            </div>
            <p className="text-xs text-slate-500 italic">
              {interestSurvey.preSurvey.purpose}
            </p>

            <div className="space-y-4 pt-2">
              {interestSurvey.preSurvey.questions.map((q, idx) => (
                <div key={q.id} className="bg-white p-4 rounded-xl border border-amber-100 shadow-2xs space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {idx + 1}. {q.question}
                  </p>

                  {q.options && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = surveyAnswers[q.id] === opt;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleAnswerSurvey(q.id, opt)}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                              isChosen
                                ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-2xs scale-102'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Post-Survey Card */}
          <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white">
                Sau Giờ Học (2 Phút)
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                {interestSurvey.postSurvey.title}
              </h4>
            </div>
            <p className="text-xs text-slate-500 italic">
              {interestSurvey.postSurvey.purpose}
            </p>

            <div className="space-y-4 pt-2">
              {interestSurvey.postSurvey.questions.map((q, idx) => (
                <div key={q.id} className="bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {idx + 1}. {q.question}
                  </p>

                  {q.type === 'short-text' ? (
                    <input
                      type="text"
                      placeholder="Con viết ngắn gọn 1 câu ước muốn..."
                      value={surveyAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerSurvey(q.id, e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden"
                    />
                  ) : (
                    q.options && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isChosen = surveyAnswers[q.id] === opt;
                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleAnswerSurvey(q.id, opt)}
                              className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                                isChosen
                                  ? 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-2xs scale-102'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
