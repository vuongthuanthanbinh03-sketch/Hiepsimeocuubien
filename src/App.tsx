import React, { useState } from 'react';
import { PRESET_CHALLENGES } from './data/presetChallenges';
import { LearningChallengePlan, ChallengeInputs } from './types/challenge';
import { Navbar } from './components/Navbar';
import { ChallengeInputModal } from './components/ChallengeInputModal';
import { ScenarioAndObjectives } from './components/ScenarioAndObjectives';
import { ThreeTaskLevels } from './components/ThreeTaskLevels';
import { DebugAndGuidingQuestions } from './components/DebugAndGuidingQuestions';
import { RubricTable } from './components/RubricTable';
import { ObservationAndSurvey } from './components/ObservationAndSurvey';
import { AIGovernanceSection } from './components/AIGovernanceSection';
import { StudentCardsView } from './components/StudentCardsView';
import { PrintableDocument } from './components/PrintableDocument';
import { Sparkles, BookOpen, Download, Copy, Check, Printer, FileText, ChevronRight, Award } from 'lucide-react';

export default function App() {
  const [currentPlan, setCurrentPlan] = useState<LearningChallengePlan>(PRESET_CHALLENGES[0]);
  const [activeTab, setActiveTab] = useState<'teacher' | 'student' | 'tools' | 'governance'>('teacher');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSelectPreset = (id: string) => {
    const found = PRESET_CHALLENGES.find((p) => p.id === id);
    if (found) {
      setCurrentPlan(found);
      setStatusMessage(`Đã chuyển sang thử thách mẫu: "${found.title}"`);
      setTimeout(() => setStatusMessage(null), 3500);
    }
  };

  const handleGenerateChallenge = async (inputs: ChallengeInputs) => {
    setIsLoading(true);
    setStatusMessage('Đang kết nối Gemini AI để thiết kế kế hoạch dạy học phân hóa...');
    try {
      const response = await fetch('/api/generate-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Lỗi khi tạo thử thách');
      }

      const newPlan: LearningChallengePlan = await response.json();
      setCurrentPlan(newPlan);
      setIsModalOpen(false);
      setStatusMessage(`Đã thiết kế thành công thử thách: "${newPlan.title}"!`);
      setTimeout(() => setStatusMessage(null), 4000);
    } catch (err: any) {
      console.error(err);
      alert('Thông báo: ' + (err.message || 'Không thể tạo thử thách lúc này. Hãy kiểm tra kết nối!'));
      setStatusMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${currentPlan.title}
Khối lớp: ${currentPlan.inputs.grade} | Môn: ${currentPlan.inputs.subject}
Thời lượng: ${currentPlan.inputs.duration}
Yêu cầu cần đạt: ${currentPlan.inputs.requirement}
Thiết bị sẵn có: ${currentPlan.inputs.equipment}
Sản phẩm phải tạo: ${currentPlan.inputs.product}

## 1. TÌNH HUỐNG THỰC TẾ & MỤC TIÊU
- Bối cảnh: ${currentPlan.realWorldScenario.storyline}
- Lời kêu gọi: "${currentPlan.realWorldScenario.missionCallout}"

## 2. 3 MỨC NHIỆM VỤ PHÂN HÓA
${currentPlan.taskLevels.map(lvl => `### Mức ${lvl.levelNumber}: ${lvl.name} (${lvl.badge})
- Mục tiêu: ${lvl.goal}
- Tiêu chí hoàn thành:
${lvl.completionCriteria.map(c => `  + ${c}`).join('\n')}
- Các bước gợi ý:
${lvl.stepByStepHints.map(h => `  ${h.step}. **${h.title}**: ${h.description} (Tự kiểm tra: ${h.checkQuestion})`).join('\n')}
`).join('\n')}

## 3. DỰ ĐOÁN LỖI & CÂU HỎI GỢI MỞ SỬA LỖI (KHÔNG ĐƯA ĐÁP ÁN)
${currentPlan.commonErrors.map((err, i) => `### Lỗi ${i + 1}: ${err.errorDescription}
- Nguyên nhân: ${err.whyItHappens}
- Câu hỏi gợi mở:
${err.guidingQuestions.map(q => `  + "${q}"`).join('\n')}
- Tự kiểm tra: ${err.selfCheckAction}
- Mẹo sư phạm: ${err.teacherTip}
`).join('\n')}

## 4. RUBRIC 4 TIÊU CHÍ
${currentPlan.rubric.map(r => `### ${r.criterionName}
- Cần cố gắng: ${r.levels.needHelp}
- Đạt: ${r.levels.proficient}
- Tốt: ${r.levels.good}
- Xuất sắc: ${r.levels.excellent}
`).join('\n')}

## 5. PHIẾU QUAN SÁT & KHẢO SÁT HỨNG THÚ
- ${currentPlan.observationSheet.title}
${currentPlan.observationSheet.items.map(item => `- ${item.behavior}: Thụ động: ${item.indicatorLevels.low} | Khá: ${item.indicatorLevels.medium} | Rất chủ động: ${item.indicatorLevels.high}`).join('\n')}

## 6. KIỂM DUYỆT SƯ PHẠM & BẢO VỆ DỮ LIỆU
- Kiểm duyệt GV: ${currentPlan.aiGovernance.teacherVerificationChecklist.join('; ')}
- Bảo vệ dữ liệu học sinh: ${currentPlan.aiGovernance.studentDataPrivacyRules.join('; ')}
- Cam kết: ${currentPlan.methodologyNote}
`;

    navigator.clipboard.writeText(md).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white pb-16">
      {/* Navbar */}
      <Navbar
        onOpenCreateModal={() => setIsModalOpen(true)}
        onSelectPreset={handleSelectPreset}
        currentPresetId={currentPlan.id}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Status Toast Notification */}
        {statusMessage && (
          <div className="mb-4 p-3 bg-emerald-600 text-white rounded-xl shadow-md flex items-center justify-between text-xs sm:text-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>{statusMessage}</span>
            </div>
            <button onClick={() => setStatusMessage(null)} className="text-white/80 hover:text-white font-bold">
              ✕
            </button>
          </div>
        )}

        {/* Curated Exemplar Quick Switcher Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Kho Thử Thách Mẫu Chuẩn GDPT 2018:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {PRESET_CHALLENGES.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentPlan.id === preset.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{preset.inputs.grade}</span>
                <span className="opacity-80">({preset.inputs.subject})</span>
                <span className="hidden sm:inline">- {preset.title.split(':')[1]?.trim() || preset.title}</span>
              </button>
            ))}

            <button
              onClick={handleCopyMarkdown}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
              title="Sao chép toàn bộ kế hoạch dạng Markdown để dán vào Word"
            >
              {copyFeedback ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sao chép Markdown</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'teacher' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Requirement 1: Scenario & Objectives */}
            <ScenarioAndObjectives plan={currentPlan} />

            {/* Requirements 2 & 3: 3 Differentiated Task Levels */}
            <ThreeTaskLevels levels={currentPlan.taskLevels} />

            {/* Requirement 4: Debugging & Guiding Questions */}
            <DebugAndGuidingQuestions errors={currentPlan.commonErrors} />

            {/* Requirement 5: Rubric */}
            <RubricTable rubric={currentPlan.rubric} />

            {/* Requirement 6: Observation & Surveys */}
            <ObservationAndSurvey
              observationSheet={currentPlan.observationSheet}
              interestSurvey={currentPlan.interestSurvey}
            />

            {/* Requirement 7: AI Governance & Data Privacy */}
            <AIGovernanceSection
              governance={currentPlan.aiGovernance}
              methodologyNote={currentPlan.methodologyNote}
            />
          </div>
        )}

        {activeTab === 'student' && (
          <div className="animate-in fade-in duration-150">
            <StudentCardsView plan={currentPlan} />
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Rubric Interactive Table */}
            <RubricTable rubric={currentPlan.rubric} />

            {/* Observation and Interest Survey */}
            <ObservationAndSurvey
              observationSheet={currentPlan.observationSheet}
              interestSurvey={currentPlan.interestSurvey}
            />
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="animate-in fade-in duration-150">
            <AIGovernanceSection
              governance={currentPlan.aiGovernance}
              methodologyNote={currentPlan.methodologyNote}
            />
          </div>
        )}

      </main>

      {/* Printable Sheet (Shown only in print preview / paper print) */}
      <PrintableDocument plan={currentPlan} />

      {/* Modal for Creating New Challenge with AI */}
      <ChallengeInputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleGenerateChallenge}
        isLoading={isLoading}
        onSelectQuickPreset={handleSelectPreset}
      />
    </div>
  );
}
