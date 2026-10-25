import React from 'react';
import { Sparkles, Printer, Eye, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenCreateModal: () => void;
  onSelectPreset: (id: string) => void;
  currentPresetId?: string;
  activeTab: 'teacher' | 'student' | 'tools' | 'governance';
  setActiveTab: (tab: 'teacher' | 'student' | 'tools' | 'governance') => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCreateModal,
  onSelectPreset,
  currentPresetId,
  activeTab,
  setActiveTab,
  onPrint,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-bold text-xl">
              TH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
                  EduChallenge Tiểu Học
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  GDPT 2018
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Trợ lý thiết kế hoạt động học tập Tin học & Công nghệ Tiểu học
              </p>
            </div>
          </div>

          {/* Quick Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('teacher')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'teacher'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Giáo Án Chi Tiết</span>
            </button>

            <button
              onClick={() => setActiveTab('student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'student'
                  ? 'bg-amber-50 text-amber-800 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Eye className="w-4 h-4 text-amber-600" />
              <span>Thẻ Học Sinh (Chiếu/In)</span>
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'tools'
                  ? 'bg-indigo-50 text-indigo-800 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Rubric & Phiếu Khảo Sát</span>
            </button>

            <button
              onClick={() => setActiveTab('governance')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'governance'
                  ? 'bg-rose-50 text-rose-800 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span className="hidden md:inline">Kiểm Duyệt & An Toàn AI</span>
              <span className="md:hidden">An Toàn</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrint}
              title="In phiếu A4 chuẩn sư phạm"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden lg:inline">In Phiếu A4</span>
            </button>

            <button
              onClick={onOpenCreateModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-sm hover:from-emerald-700 hover:to-teal-700 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tạo Mới Bằng AI</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
