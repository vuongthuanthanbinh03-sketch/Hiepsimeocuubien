import React from 'react';
import { ShieldCheck, AlertTriangle, CheckSquare, Lock, UserCheck, Sparkles, Scale } from 'lucide-react';
import { AIGovernance } from '../types/challenge';

interface Props {
  governance: AIGovernance;
  methodologyNote: string;
}

export const AIGovernanceSection: React.FC<Props> = ({ governance, methodologyNote }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-sm">
          7
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Quản Trị Rủi Ro AI, Quy Trình Kiểm Duyệt & Bảo Vệ Dữ Liệu Học Sinh
          </h3>
          <p className="text-xs text-slate-500">
            Đảm bảo tính chuẩn xác sư phạm GDPT 2018 và đạo đức AI trong giáo dục tiểu học
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cột 1: Rủi ro sai lệch của AI */}
        <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
          <div className="flex items-center gap-2 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Rủi Ro Sai Lệch Của AI Đối Với Bài Học Này
            </h4>
          </div>

          <p className="text-xs text-slate-600 italic">
            Các hiện tượng "ảo giác" (hallucination) thường thấy khi AI tạo giáo án:
          </p>

          <ul className="space-y-2.5 pt-1">
            {governance.potentialHallucinations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 2: Quy trình 4 bước kiểm duyệt của Giáo viên */}
        <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
          <div className="flex items-center gap-2 text-blue-900">
            <UserCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Quy Trình Kiểm Duyệt Sư Phạm Của Giáo Viên
            </h4>
          </div>

          <p className="text-xs text-slate-600 italic">
            Giáo viên luôn là "người gác cổng" chuyên môn cuối cùng trước khi đưa vào tiết dạy:
          </p>

          <ul className="space-y-2.5 pt-1">
            {governance.teacherVerificationChecklist.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-blue-950">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 3: Quy tắc bảo vệ dữ liệu học sinh */}
        <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
          <div className="flex items-center gap-2 text-emerald-900">
            <Lock className="w-5 h-5 text-emerald-600 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Quy Tắc Bảo Vệ Dữ Liệu & Quyền Riêng Tư Của Trẻ Em
            </h4>
          </div>

          <p className="text-xs text-slate-600 italic">
            Tuân thủ Luật An toàn thông tin mạng & quy định bảo vệ trẻ em trên môi trường số:
          </p>

          <ul className="space-y-2.5 pt-1">
            {governance.studentDataPrivacyRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-emerald-950">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Cam Kết Tính Sư Phạm & Không Bịa Đặt Thực Nghiệm */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
        <Scale className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-slate-900 block">
            Cam Kết Về Tính Chuẩn Mực Sư Phạm & Tính Trung Thực Khoa Học:
          </span>
          <p className="leading-relaxed text-slate-600">
            {methodologyNote}
          </p>
          <p className="text-[11px] text-slate-500 italic mt-1">
            * Hệ thống tuân thủ nguyên tắc "Không bịa kết quả thực nghiệm, không khẳng định đã triển khai nếu chưa có dữ liệu" từ đề bài.
          </p>
        </div>
      </div>
    </div>
  );
};
