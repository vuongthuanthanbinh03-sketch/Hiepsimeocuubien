import React from 'react';
import { LearningChallengePlan } from '../types/challenge';

interface Props {
  plan: LearningChallengePlan;
}

export const PrintableDocument: React.FC<Props> = ({ plan }) => {
  return (
    <div className="hidden print:block print:p-6 text-black bg-white font-sans text-xs leading-relaxed max-w-4xl mx-auto">
      {/* Official Header */}
      <div className="text-center pb-4 border-b-2 border-black space-y-1 mb-4">
        <div className="flex justify-between text-[11px] font-bold">
          <div>TRƯỜNG TIỂU HỌC: ................................................</div>
          <div>NĂM HỌC 2026 - 2027</div>
        </div>
        <h1 className="text-base font-extrabold uppercase tracking-wide pt-2">
          KẾ HOẠCH TỔ CHỨC THỬ THÁCH HỌC TẬP PHÂN HÓA (GDPT 2018)
        </h1>
        <h2 className="text-sm font-bold text-gray-800">
          MÔN: {plan.inputs.subject.toUpperCase()} - {plan.inputs.grade.toUpperCase()}
        </h2>
        <p className="text-[11px] italic">Tên bài học / Thử thách: {plan.title}</p>
      </div>

      {/* Thông tin đầu vào */}
      <div className="mb-4 p-2 border border-black rounded-xs space-y-1 bg-gray-50 text-[11px]">
        <div><strong>1. Khối lớp:</strong> {plan.inputs.grade} | <strong>Thời lượng:</strong> {plan.inputs.duration}</div>
        <div><strong>2. Yêu cầu cần đạt (YCCĐ):</strong> {plan.inputs.requirement}</div>
        <div><strong>3. Thiết bị & Công cụ sẵn có:</strong> {plan.inputs.equipment}</div>
        <div><strong>4. Sản phẩm học sinh phải tạo:</strong> {plan.inputs.product}</div>
      </div>

      {/* 1. Tình huống thực tế & Mục tiêu quan sát được */}
      <div className="mb-4 space-y-1">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          I. TÌNH HUỐNG THỰC TẾ & MỤC TIÊU QUAN SÁT ĐƯỢC
        </h3>
        <p><strong>- Tình huống thực tế:</strong> {plan.realWorldScenario.storyline}</p>
        <p><strong>- Lời kêu gọi hành động:</strong> "{plan.realWorldScenario.missionCallout}"</p>
        <div className="pt-1">
          <strong>- Mục tiêu quan sát & đo lường được:</strong>
          <ul className="list-disc pl-5 space-y-0.5">
            {plan.observableObjectives.knowledgeSkill.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
            {plan.observableObjectives.competence.map((c, i) => (
              <li key={i}><strong>Năng lực:</strong> {c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2 & 3. 3 Mức độ nhiệm vụ */}
      <div className="mb-4 space-y-2">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          II. 3 MỨC ĐỘ NHIỆM VỤ THỬ THÁCH PHÂN HÓA
        </h3>
        {plan.taskLevels.map((lvl) => (
          <div key={lvl.levelNumber} className="border border-gray-300 p-2 rounded-xs">
            <div className="font-bold text-[11px]">
              Mức {lvl.levelNumber}: {lvl.name} ({lvl.badge})
            </div>
            <div><strong>Mục tiêu mức:</strong> {lvl.goal}</div>
            <div>
              <strong>Tiêu chí hoàn thành:</strong>
              <ul className="list-disc pl-5">
                {lvl.completionCriteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Các bước gợi ý giàn giáo (Scaffolding):</strong>
              <ol className="list-decimal pl-5">
                {lvl.stepByStepHints.map((h) => (
                  <li key={h.step}>
                    <strong>{h.title}:</strong> {h.description} <em>[Tự kiểm tra: {h.checkQuestion}]</em>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Dự đoán lỗi & Câu hỏi gợi mở */}
      <div className="mb-4 space-y-1">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          III. DỰ ĐOÁN LỖI THƯỜNG GẶP & BỘ CÂU HỎI GỢI MỞ (KHÔNG ĐƯA ĐÁP ÁN SẴN)
        </h3>
        {plan.commonErrors.map((err, i) => (
          <div key={err.id} className="pt-1">
            <p><strong>Lỗi {i + 1}: {err.errorDescription}</strong></p>
            <p className="italic text-gray-700 pl-3">Nguyên nhân: {err.whyItHappens}</p>
            <div className="pl-3">
              <span className="font-semibold">• Câu hỏi gợi mở cho học sinh:</span>
              <ul className="list-disc pl-5">
                {err.guidingQuestions.map((q, qIdx) => (
                  <li key={qIdx}>"{q}"</li>
                ))}
              </ul>
            </div>
            <p className="pl-3"><strong>• Thao tác tự kiểm tra:</strong> {err.selfCheckAction}</p>
          </div>
        ))}
      </div>

      {/* 5. Rubric 4 tiêu chí */}
      <div className="mb-4 space-y-1">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          IV. RUBRIC ĐÁNH GIÁ 4 TIÊU CHÍ
        </h3>
        <table className="w-full border-collapse border border-black text-[10px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-1">Tiêu chí</th>
              <th className="border border-black p-1">Cần cố gắng (Mức 1)</th>
              <th className="border border-black p-1">Đạt (Mức 2)</th>
              <th className="border border-black p-1">Tốt (Mức 3)</th>
              <th className="border border-black p-1">Xuất sắc (Mức 4)</th>
            </tr>
          </thead>
          <tbody>
            {plan.rubric.map((r) => (
              <tr key={r.id}>
                <td className="border border-black p-1 font-semibold">{r.criterionName}</td>
                <td className="border border-black p-1">{r.levels.needHelp}</td>
                <td className="border border-black p-1">{r.levels.proficient}</td>
                <td className="border border-black p-1">{r.levels.good}</td>
                <td className="border border-black p-1">{r.levels.excellent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 6. Phiếu quan sát & Khảo sát */}
      <div className="mb-4 space-y-1">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          V. PHIẾU QUAN SÁT MỨC ĐỘ CHỦ ĐỘNG & KHẢO SÁT HỨNG THÚ
        </h3>
        <p><strong>- {plan.observationSheet.title}:</strong> {plan.observationSheet.instruction}</p>
        <ul className="list-disc pl-5">
          {plan.observationSheet.items.map((item) => (
            <li key={item.id}>
              <strong>{item.behavior}:</strong> Thụ động: {item.indicatorLevels.low} | Khá: {item.indicatorLevels.medium} | Rất chủ động: {item.indicatorLevels.high}
            </li>
          ))}
        </ul>
      </div>

      {/* 7. An toàn AI & Bản quyền dữ liệu */}
      <div className="mb-4 space-y-1">
        <h3 className="font-bold uppercase text-[11px] border-b border-gray-400 pb-0.5">
          VI. KIỂM DUYỆT SƯ PHẠM & BẢO VỆ DỮ LIỆU HỌC SINH
        </h3>
        <p><strong>- 4 bước kiểm duyệt của GV:</strong> {plan.aiGovernance.teacherVerificationChecklist.join('; ')}</p>
        <p><strong>- Bảo vệ dữ liệu học sinh:</strong> {plan.aiGovernance.studentDataPrivacyRules.join('; ')}</p>
        <p className="italic text-[10px] pt-1">
          * {plan.methodologyNote}
        </p>
      </div>

      {/* Ký tên giáo viên */}
      <div className="grid grid-cols-2 text-center pt-6 text-[11px]">
        <div>
          <strong>TỔ TRƯỞNG CHUYÊN MÔN</strong><br /><br /><br />
          ...................................................
        </div>
        <div>
          <strong>GIÁO VIÊN SOẠN BÀI</strong><br /><br /><br />
          ...................................................
        </div>
      </div>
    </div>
  );
};
