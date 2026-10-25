export interface ChallengeInputs {
  grade: string; // e.g. "Lớp 3", "Lớp 4", "Lớp 5"
  subject: 'Tin học' | 'Công nghệ';
  curriculumTopic?: string; // e.g. "Chủ đề E: Ứng dụng tin học", "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính"
  requirement: string; // Bài học / Yêu cầu cần đạt (YCCĐ)
  duration: string; // e.g. "35 phút (1 tiết)", "70 phút (2 tiết)"
  equipment: string; // Thiết bị và công cụ sẵn có
  product: string; // Sản phẩm học sinh phải tạo
  contextTheme?: string; // Bối cảnh chủ đề (bảo vệ môi trường, gia đình, trường học, lễ hội...)
}

export interface TaskLevel {
  levelNumber: 1 | 2 | 3;
  name: string; // "Khởi động", "Vận dụng", "Sáng tạo"
  badge: string; // "Đồng - Khám phá", "Bạc - Chinh phục", "Vàng - Tỏa sáng"
  badgeIcon: string; // icon name or emoji
  tagline: string;
  goal: string; // Mục tiêu cụ thể của mức này
  completionCriteria: string[]; // Tiêu chí hoàn thành (quan sát được)
  materials: string[]; // Vật liệu / Công cụ cần dùng
  stepByStepHints: {
    step: number;
    title: string;
    description: string;
    checkQuestion: string; // Câu hỏi tự kiểm tra nhỏ sau mỗi bước
  }[];
}

export interface CommonErrorItem {
  id: string;
  errorDescription: string; // Mô tả hiện tượng lỗi thường gặp của học sinh tiểu học
  whyItHappens: string; // Nguyên nhân cốt lõi (cho giáo viên nắm)
  guidingQuestions: string[]; // QUY TẮC CỐT LÕI: Chỉ đặt câu hỏi gợi mở, KHÔNG đưa đáp án toàn bộ
  selfCheckAction: string; // Thao tác học sinh tự làm "thám tử nhí" để tự tìm ra cách sửa
  teacherTip: string; // Lưu ý sư phạm khi đến bàn hỗ trợ
}

export interface RubricLevel {
  scoreLabel: string; // "Cần cố gắng (Mức 1)", "Đạt (Mức 2)", "Tốt (Mức 3)", "Xuất sắc (Mức 4)"
  descriptor: string; // Chỉ báo hành vi cụ thể, dễ chấm
}

export interface RubricCriterion {
  id: string;
  criterionName: string; // 1: Đáp ứng yêu cầu, 2: Hoạt động đúng, 3: Có sáng tạo, 4: Giải thích được cách làm
  weight?: string; // Tỷ trọng hoặc ý nghĩa sư phạm
  levels: {
    needHelp: string; // Cần cố gắng
    proficient: string; // Đạt
    good: string; // Tốt
    excellent: string; // Xuất sắc
  };
}

export interface ObservationItem {
  id: string;
  behavior: string; // Hành vi thể hiện tính chủ động
  indicatorLevels: {
    low: string; // Thụ động, đợi cô cầm tay chỉ việc
    medium: string; // Có tự làm nhưng dễ bỏ cuộc / hỏi liên tục
    high: string; // Rất chủ động: tự đọc gợi ý, thử sai, trao đổi cùng bạn
  };
}

export interface InterestSurveyQuestion {
  id: string;
  question: string;
  type: 'emoji-scale' | 'multiple-choice' | 'short-text';
  options?: string[];
}

export interface InterestSurvey {
  preSurvey: {
    title: string;
    purpose: string;
    questions: InterestSurveyQuestion[];
  };
  postSurvey: {
    title: string;
    purpose: string;
    questions: InterestSurveyQuestion[];
  };
}

export interface AIGovernance {
  potentialHallucinations: string[]; // Rủi ro sai lệch của AI đối với bài này
  teacherVerificationChecklist: string[]; // 4-5 bước kiểm duyệt của giáo viên trước khi phát đề
  studentDataPrivacyRules: string[]; // Quy tắc bảo vệ dữ liệu học sinh (không nạp tên, ảnh, thông tin cá nhân)
  safetyNotes: string;
}

export interface LearningChallengePlan {
  id: string;
  title: string; // Tên thử thách hấp dẫn (e.g. "Biệt Đội Xanh: Lập Trình Chú Mèo Cứu Biển")
  inputs: ChallengeInputs;
  realWorldScenario: {
    storyline: string; // Tình huống thực tế dẫn dắt
    relevance: string; // Ý nghĩa đối với đời sống học sinh
    missionCallout: string; // Lời kêu gọi hành động cho học sinh
  };
  observableObjectives: {
    knowledgeSkill: string[]; // Về kiến thức kĩ năng (động từ hành động)
    competence: string[]; // Về năng lực tin học/công nghệ và giải quyết vấn đề
    attitude: string[]; // Về phẩm chất chăm chỉ, trách nhiệm
  };
  taskLevels: TaskLevel[];
  commonErrors: CommonErrorItem[];
  rubric: RubricCriterion[];
  observationSheet: {
    title: string;
    instruction: string;
    items: ObservationItem[];
  };
  interestSurvey: InterestSurvey;
  aiGovernance: AIGovernance;
  methodologyNote: string; // Lời khẳng định tính sư phạm, không bịa đặt số liệu thực nghiệm
  createdAt?: string;
}
