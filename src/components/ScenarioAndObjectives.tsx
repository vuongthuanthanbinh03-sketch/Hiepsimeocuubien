import React from 'react';
import { Compass, Target, CheckCircle2, Heart, Award, Sparkles, Monitor, Clock, Box } from 'lucide-react';
import { LearningChallengePlan } from '../types/challenge';

interface Props {
  plan: LearningChallengePlan;
}

export const ScenarioAndObjectives: React.FC<Props> = ({ plan }) => {
  return (
    <div className="space-y-6">
      {/* Overview Metadata Bar */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200/80 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-wrap items-center gap-3 justify-between mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-2xs">
              {plan.inputs.grade}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-2xs">
              Môn {plan.inputs.subject}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {plan.inputs.duration}
            </span>
          </div>

          {plan.inputs.curriculumTopic && (
            <span className="text-xs font-semibold text-teal-800 bg-teal-100/70 px-3 py-1 rounded-lg">
              {plan.inputs.curriculumTopic}
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          {plan.title}
        </h2>

        {/* Input Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-emerald-200/60 text-xs sm:text-sm">
          <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-emerald-100">
            <Monitor className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-slate-800 block">Thiết bị & Công cụ sẵn có:</span>
              <span className="text-slate-600">{plan.inputs.equipment}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-emerald-100">
            <Box className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-slate-800 block">Sản phẩm học sinh phải tạo:</span>
              <span className="text-slate-600">{plan.inputs.product}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Requirement Box */}
      <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1">
          <Target className="w-4 h-4 text-amber-600" />
          Yêu Cầu Cần Đạt Trọng Tâm (Chuẩn GDPT 2018)
        </h4>
        <p className="text-sm font-medium text-slate-800 leading-relaxed">
          {plan.inputs.requirement}
        </p>
      </div>

      {/* 1. Real-World Scenario (Tình huống thực tế) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
            1
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Tình Huống Thực Tế & Bối Cảnh Dẫn Dắt
            </h3>
            <p className="text-xs text-slate-500">
              Bối cảnh gợi mở gần gũi với tâm sinh lý lứa tuổi tiểu học, khơi dậy động lực tò mò và cảm xúc tích cực
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Storyline */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 leading-relaxed text-sm">
            <span className="font-semibold text-slate-900 block mb-1">📖 Cốt truyện khơi gợi:</span>
            {plan.realWorldScenario.storyline}
          </div>

          {/* Relevance & Mission Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm">
              <span className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                <Heart className="w-4 h-4 text-blue-600" />
                Ý nghĩa đối với cuộc sống học sinh:
              </span>
              <p className="text-blue-950/80 leading-relaxed">
                {plan.realWorldScenario.relevance}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm">
              <span className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Lời kêu gọi hành động cho học sinh:
              </span>
              <p className="text-emerald-950 font-medium italic leading-relaxed">
                "{plan.realWorldScenario.missionCallout}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Observable Objectives (Mục tiêu quan sát được) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
            ✓
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Mục Tiêu Quan Sát & Đo Lường Được (Observable Objectives)
            </h3>
            <p className="text-xs text-slate-500">
              Sử dụng động từ hành động chỉ rõ biểu hiện cụ thể, tránh dùng từ chung chung khó đo lường
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Kiến thức & Kĩ năng */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Kiến Thức & Kĩ Năng Thao Tác
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {plan.observableObjectives.knowledgeSkill.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Năng lực */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4 text-indigo-600" />
              Năng Lực Tự Chủ & Giải Quyết Vấn Đề
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {plan.observableObjectives.competence.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phẩm chất */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-3">
              <Compass className="w-4 h-4 text-amber-600" />
              Phẩm Chất & Thái Độ Thực Hành
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {plan.observableObjectives.attitude.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
