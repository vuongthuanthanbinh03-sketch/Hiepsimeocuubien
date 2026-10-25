import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Clock, Monitor, Box, CheckCircle, Wand2, Lightbulb } from 'lucide-react';
import { ChallengeInputs } from '../types/challenge';

interface ChallengeInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inputs: ChallengeInputs) => Promise<void>;
  isLoading: boolean;
  onSelectQuickPreset: (presetId: string) => void;
}

const QUICK_SUGGESTIONS = [
  {
    grade: 'Lớp 4',
    subject: 'Tin học' as const,
    curriculumTopic: 'Chủ đề F: Lập trình Scratch 3.0',
    requirement: 'Sử dụng khối lệnh sự kiện, chuyển động và vòng lặp trong Scratch để điều khiển nhân vật tương tác nhặt rác bảo vệ đại dương; phát hiện và sửa được lỗi.',
    duration: '70 phút (2 tiết)',
    equipment: 'Phòng máy tính 30 máy có chuột, bàn phím, cài sẵn Scratch 3.0 Offline.',
    product: 'Dự án game Scratch "Hiệp sĩ Mèo cứu biển" có tính điểm và hoạt ảnh.',
    contextTheme: 'Bảo vệ môi trường biển quê hương'
  },
  {
    grade: 'Lớp 3',
    subject: 'Tin học' as const,
    curriculumTopic: 'Chủ đề E: Ứng dụng tin học - Em tập vẽ với MS Paint',
    requirement: 'Sử dụng các hình học có sẵn (hình chữ nhật, tam giác, hình tròn) và công cụ đổ màu để vẽ bức tranh ngôi trường; biết sửa lỗi loang màu bằng Ctrl+Z và lưu tệp.',
    duration: '35 phút (1 tiết)',
    equipment: 'Phòng máy tính có chuột quang tốt, hệ điều hành Windows có sẵn MS Paint.',
    product: 'Tệp hình ảnh "Ngoi_truong_mo_uoc.png" lưu trong thư mục bài tập của lớp.',
    contextTheme: 'Ngôi trường hạnh phúc trong mắt em'
  },
  {
    grade: 'Lớp 5',
    subject: 'Công nghệ' as const,
    curriculumTopic: 'Thủ công kĩ thuật - Thiết kế đồ dùng trong gia đình',
    requirement: 'Nhận biết cấu tạo và nguyên lý của đèn học; lắp ráp được mô hình đèn học để bàn có công tắc bật/tắt hoạt động tốt; an toàn và tiết kiệm điện.',
    duration: '70 phút (2 tiết)',
    equipment: 'Bộ lắp ghép kĩ thuật lớp 5, hộp pin 3V, bóng LED 3V, công tắc, cốc giấy tái chế làm chao đèn.',
    product: 'Mô hình đèn học đứng vững, bật/tắt sáng dứt khoát, chao đèn chống chói mắt.',
    contextTheme: 'Góc học tập thân thương & Tiết kiệm năng lượng'
  },
  {
    grade: 'Lớp 4',
    subject: 'Tin học' as const,
    curriculumTopic: 'Chủ đề E: Soạn thảo văn bản tiếng Việt',
    requirement: 'Gõ tiếng Việt đúng quy tắc Telex; chèn và định dạng được hình ảnh minh họa; sử dụng chữ nghệ thuật hoặc đóng khung viền cho trang thiệp.',
    duration: '35 phút (1 tiết)',
    equipment: 'Phòng máy tính, phần mềm Unikey, Word / Google Docs.',
    product: 'Bản in hoặc tệp thiệp điện tử chúc mừng ngày Nhà giáo Việt Nam 20-11.',
    contextTheme: 'Tri ân thầy cô giáo'
  }
];

export const ChallengeInputModal: React.FC<ChallengeInputModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  onSelectQuickPreset,
}) => {
  const [formData, setFormData] = useState<ChallengeInputs>({
    grade: 'Lớp 4',
    subject: 'Tin học',
    curriculumTopic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
    requirement: 'Sử dụng được các khối lệnh điều khiển và chuyển động trong Scratch để tạo chuyển động tương tác giữa hai nhân vật; phát hiện và khắc phục được lỗi lộn ngược đầu hoặc mất kiểm soát hướng.',
    duration: '70 phút (2 tiết thực hành)',
    equipment: 'Phòng máy tính 30 máy có chuột, bàn phím, cài đặt Scratch 3.0 Offline, máy chiếu của giáo viên.',
    product: 'Dự án trò chơi Scratch hoàn chỉnh có tương tác, điểm số và âm thanh sinh động.',
    contextTheme: 'Bảo vệ thiên nhiên và động vật hoang dã'
  });

  if (!isOpen) return null;

  const handleApplySuggestion = (s: typeof QUICK_SUGGESTIONS[0]) => {
    setFormData({
      grade: s.grade,
      subject: s.subject,
      curriculumTopic: s.curriculumTopic,
      requirement: s.requirement,
      duration: s.duration,
      equipment: s.equipment,
      product: s.product,
      contextTheme: s.contextTheme
    });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-xs">
              <Sparkles className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Thiết Kế Thử Thách Học Tập Mới</h2>
              <p className="text-xs text-emerald-100">
                Nhập 5 thông tin đầu vào chuẩn chương trình Tin học & Công nghệ Tiểu học
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Mẫu gợi ý bài học có sẵn theo SGK mới (Nhấp để điền nhanh):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUICK_SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplySuggestion(s)}
                className="text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-all text-left shadow-2xs flex items-center gap-1"
              >
                <span className="font-semibold text-emerald-700">[{s.grade} - {s.subject}]</span>
                <span className="truncate max-w-[200px]">{s.curriculumTopic.split('-')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmitForm} className="p-6 space-y-4 max-h-[72vh] overflow-y-auto">
          
          {/* Row 1: Khối lớp & Môn học & Thời lượng */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                1. Khối Lớp <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Lớp 3">Lớp 3 (Bắt đầu làm quen)</option>
                <option value="Lớp 4">Lớp 4 (Thực hành & Lập trình đơn giản)</option>
                <option value="Lớp 5">Lớp 5 (Vận dụng & Dự án tích hợp)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Môn Học <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value as any })}
                className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Tin học">Tin học</option>
                <option value="Công nghệ">Công nghệ</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                3. Thời Lượng <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="35 phút (1 tiết) hoặc 70 phút"
                  className="w-full text-sm rounded-lg border border-slate-300 pl-8 pr-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <Clock className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
              </div>
            </div>
          </div>

          {/* Row 2: Bài học / YCCĐ */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              2. Bài học / Yêu Cầu Cần Đạt (YCCĐ chuẩn GDPT 2018) <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              placeholder="Ví dụ: Sử dụng được các khối lệnh chuyển động, sự kiện và vòng lặp trong Scratch để điều khiển nhân vật tương tác nhặt rác; phát hiện và sửa được lỗi lộn đầu..."
              className="w-full text-sm rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              required
            />
            <p className="text-xs text-slate-500 mt-1">
              Gợi ý: Nêu rõ động từ hành vi có thể quan sát được (vẽ được, lập trình được, lắp ráp được, sửa được...).
            </p>
          </div>

          {/* Row 3: Thiết bị & Công cụ sẵn có */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              4. Thiết Bị Và Công Cụ Sẵn Có Tại Trường <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.equipment}
                onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                placeholder="Ví dụ: Phòng máy tính có chuột quang, đã cài Scratch 3.0 / MS Paint / Bộ kĩ thuật lớp 5..."
                className="w-full text-sm rounded-lg border border-slate-300 pl-8 pr-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Monitor className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Row 4: Sản phẩm học sinh phải tạo */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              5. Sản Phẩm Học Sinh Phải Tạo <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                placeholder="Ví dụ: Dự án trò chơi Scratch 'Hiệp sĩ mèo cứu biển' có tính điểm; Bức tranh Paint ngôi trường lưu file PNG..."
                className="w-full text-sm rounded-lg border border-slate-300 pl-8 pr-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Box className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Row 5: Bối cảnh chủ đề (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Bối Cảnh / Chủ Đề Tích Hợp (Tùy chọn)
            </label>
            <input
              type="text"
              value={formData.contextTheme || ''}
              onChange={(e) => setFormData({ ...formData, contextTheme: e.target.value })}
              placeholder="Ví dụ: Bảo vệ môi trường biển, Tri ân thầy cô, Chào năm học mới, An toàn giao thông..."
              className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              ⚡ Tự động phân hóa 3 mức (Khởi động, Vận dụng, Sáng tạo) & tạo Rubric 4 tiêu chí
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hủy Bỏ
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 rounded-lg hover:from-emerald-700 hover:to-indigo-700 shadow-md transition-all active:scale-95 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang Thiết Kế Thử Thách...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Tạo Thử Thách Hoàn Chỉnh</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
