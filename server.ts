import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

// Shared Gemini client utility
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

app.post('/api/generate-challenge', async (req, res) => {
  try {
    const { grade, subject, curriculumTopic, requirement, duration, equipment, product, contextTheme } = req.body;

    if (!grade || !requirement) {
      return res.status(400).json({ error: 'Vui lòng cung cấp khối lớp và yêu cầu cần đạt.' });
    }

    if (!apiKey) {
      return res.status(503).json({
        error: 'Chưa cấu hình GEMINI_API_KEY trên máy chủ. Bạn vẫn có thể sử dụng trọn vẹn Kho Thử Thách Mẫu chuẩn GDPT 2018 trong thư viện có sẵn!',
      });
    }

    const systemPrompt = `Bạn là chuyên gia sư phạm hàng đầu và trợ lý thiết kế hoạt động học tập cho môn Tin học – Công nghệ tiểu học (Lớp 3, 4, 5) tại Việt Nam theo Chương trình GDPT 2018.
Nhiệm vụ của bạn là thiết kế một THỬ THÁCH HỌC TẬP giúp học sinh chủ động thực hành, thử nghiệm và tự giải quyết vấn đề theo triết lý kiến tạo (Constructivism), phân hóa năng lực và học qua làm (Learning by Doing).

QUY TẮC CỐT LÕI BẮT BUỘC:
1. Nêu tình huống thực tế (gần gũi lứa tuổi tiểu học) và mục tiêu quan sát & đo lường được (dùng động từ hành động: nhận biết được, chọn được, thao tác được, giải thích được, v.v.).
2. Thiết kế đúng 3 mức nhiệm vụ:
   - Mức 1: Khởi động (Làm quen & Thực hiện thao tác cốt lõi theo mẫu gợi ý)
   - Mức 2: Vận dụng (Tự lực hoàn thành sản phẩm trọn vẹn, phối hợp kĩ năng)
   - Mức 3: Sáng tạo (Mở rộng, cá nhân hóa, thêm tính năng độc đáo)
   Cả 3 mức cùng hướng đến yêu cầu cần đạt chung nhưng khác biệt rõ về độ khó, tính độc lập và phạm vi thử thách.
3. Với mỗi mức, đưa tiêu chí hoàn thành quan sát được, danh sách vật liệu/công cụ và gợi ý theo từng bước có câu hỏi tự kiểm tra nhỏ (self-check).
4. DỰ ĐOÁN LỖI THƯỜNG GẶP: QUY TẮC SỐ 1 LÀ CHỈ ĐẶT CÂU HỎI GỢI MỞ và gợi ý tự kiểm tra; TUYỆT ĐỐI KHÔNG ĐƯỢC ĐƯA TOÀN BỘ LỜI GIẢI HOẶC CODE/HƯỚNG DẪN BẤM HỘ để học sinh sao chép máy móc!
5. Tạo bảng Rubric 4 tiêu chí rõ ràng:
   - 1. Đáp ứng yêu cầu cần đạt
   - 2. Hoạt động đúng chức năng/kĩ thuật
   - 3. Có sáng tạo và thẩm mỹ/cá nhân hóa
   - 4. Giải thích/thuyết minh được cách làm
   Mỗi tiêu chí chia làm 4 mức: Cần cố gắng, Đạt, Tốt, Xuất sắc với chỉ báo hành vi quan sát được ở tiểu học.
6. Đề xuất:
   - Phiếu quan sát mức độ chủ động (hành vi tự giác đọc thẻ, thử sai, tìm trợ giúp, kiên trì).
   - Khảo sát hứng thú ngắn trước - sau (thang đo cảm xúc biểu tượng, tự tin, tự hào, khoảnh khắc yêu thích).
7. Nêu rõ:
   - Rủi ro sai lệch của AI đối với bài học này (thuật ngữ ngoài SGK, cấu hình phòng máy phi thực tế).
   - 4 bước giáo viên kiểm duyệt sư phạm trước khi phát đề.
   - Quy tắc bảo vệ dữ liệu học sinh (không nạp họ tên đầy đủ, ảnh chụp, thông tin cá nhân lên AI).
8. CAM KẾT: Không bịa đặt kết quả thực nghiệm, không khẳng định đã triển khai nếu chưa có dữ liệu. Ngôn từ sư phạm tiểu học Việt Nam trong sáng, gần gũi, khích lệ.

Hãy trả về phản hồi dưới dạng JSON thuần túy (không bọc trong \`\`\`json markdown block, chỉ chuỗi JSON hợp lệ).`;

    const userPrompt = `Hãy thiết kế thử thách học tập Tin học - Công nghệ tiểu học với các thông tin sau:
- Khối lớp: ${grade}
- Môn học: ${subject || 'Tin học'}
- Chủ đề/Mạch nội dung GDPT 2018: ${curriculumTopic || 'Theo chuẩn chương trình'}
- Bài học/Yêu cầu cần đạt: ${requirement}
- Thời lượng: ${duration || '35 phút'}
- Thiết bị và công cụ sẵn có: ${equipment || 'Phòng máy tính trường học'}
- Sản phẩm học sinh phải tạo: ${product || 'Sản phẩm số hoặc mô hình hoàn chỉnh'}
- Bối cảnh chủ đề (nếu có): ${contextTheme || 'Gần gũi trường lớp và đời sống'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            realWorldScenario: {
              type: Type.OBJECT,
              properties: {
                storyline: { type: Type.STRING },
                relevance: { type: Type.STRING },
                missionCallout: { type: Type.STRING },
              },
              required: ['storyline', 'relevance', 'missionCallout'],
            },
            observableObjectives: {
              type: Type.OBJECT,
              properties: {
                knowledgeSkill: { type: Type.ARRAY, items: { type: Type.STRING } },
                competence: { type: Type.ARRAY, items: { type: Type.STRING } },
                attitude: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ['knowledgeSkill', 'competence', 'attitude'],
            },
            taskLevels: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  levelNumber: { type: Type.INTEGER },
                  name: { type: Type.STRING },
                  badge: { type: Type.STRING },
                  badgeIcon: { type: Type.STRING },
                  tagline: { type: Type.STRING },
                  goal: { type: Type.STRING },
                  completionCriteria: { type: Type.ARRAY, items: { type: Type.STRING } },
                  materials: { type: Type.ARRAY, items: { type: Type.STRING } },
                  stepByStepHints: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        step: { type: Type.INTEGER },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        checkQuestion: { type: Type.STRING },
                      },
                      required: ['step', 'title', 'description', 'checkQuestion'],
                    },
                  },
                },
                required: ['levelNumber', 'name', 'badge', 'badgeIcon', 'tagline', 'goal', 'completionCriteria', 'materials', 'stepByStepHints'],
              },
            },
            commonErrors: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  errorDescription: { type: Type.STRING },
                  whyItHappens: { type: Type.STRING },
                  guidingQuestions: { type: Type.ARRAY, items: { type: Type.STRING } },
                  selfCheckAction: { type: Type.STRING },
                  teacherTip: { type: Type.STRING },
                },
                required: ['id', 'errorDescription', 'whyItHappens', 'guidingQuestions', 'selfCheckAction', 'teacherTip'],
              },
            },
            rubric: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  criterionName: { type: Type.STRING },
                  weight: { type: Type.STRING },
                  levels: {
                    type: Type.OBJECT,
                    properties: {
                      needHelp: { type: Type.STRING },
                      proficient: { type: Type.STRING },
                      good: { type: Type.STRING },
                      excellent: { type: Type.STRING },
                    },
                    required: ['needHelp', 'proficient', 'good', 'excellent'],
                  },
                },
                required: ['id', 'criterionName', 'levels'],
              },
            },
            observationSheet: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                instruction: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      behavior: { type: Type.STRING },
                      indicatorLevels: {
                        type: Type.OBJECT,
                        properties: {
                          low: { type: Type.STRING },
                          medium: { type: Type.STRING },
                          high: { type: Type.STRING },
                        },
                        required: ['low', 'medium', 'high'],
                      },
                    },
                    required: ['id', 'behavior', 'indicatorLevels'],
                  },
                },
              },
              required: ['title', 'instruction', 'items'],
            },
            interestSurvey: {
              type: Type.OBJECT,
              properties: {
                preSurvey: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    purpose: { type: Type.STRING },
                    questions: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          question: { type: Type.STRING },
                          type: { type: Type.STRING },
                          options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        },
                        required: ['id', 'question', 'type'],
                      },
                    },
                  },
                  required: ['title', 'purpose', 'questions'],
                },
                postSurvey: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    purpose: { type: Type.STRING },
                    questions: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          question: { type: Type.STRING },
                          type: { type: Type.STRING },
                          options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        },
                        required: ['id', 'question', 'type'],
                      },
                    },
                  },
                  required: ['title', 'purpose', 'questions'],
                },
              },
              required: ['preSurvey', 'postSurvey'],
            },
            aiGovernance: {
              type: Type.OBJECT,
              properties: {
                potentialHallucinations: { type: Type.ARRAY, items: { type: Type.STRING } },
                teacherVerificationChecklist: { type: Type.ARRAY, items: { type: Type.STRING } },
                studentDataPrivacyRules: { type: Type.ARRAY, items: { type: Type.STRING } },
                safetyNotes: { type: Type.STRING },
              },
              required: ['potentialHallucinations', 'teacherVerificationChecklist', 'studentDataPrivacyRules', 'safetyNotes'],
            },
            methodologyNote: { type: Type.STRING },
          },
          required: [
            'title',
            'realWorldScenario',
            'observableObjectives',
            'taskLevels',
            'commonErrors',
            'rubric',
            'observationSheet',
            'interestSurvey',
            'aiGovernance',
            'methodologyNote',
          ],
        },
      },
    });

    const text = response.text || '{}';
    const parsedData = JSON.parse(text);

    // Attach input metadata and an ID
    const fullPlan = {
      id: 'gen-' + Date.now(),
      inputs: {
        grade,
        subject: subject || 'Tin học',
        curriculumTopic,
        requirement,
        duration,
        equipment,
        product,
        contextTheme,
      },
      ...parsedData,
      createdAt: new Date().toISOString(),
    };

    res.json(fullPlan);
  } catch (error: any) {
    console.error('Lỗi khi thiết kế thử thách qua Gemini:', error);
    res.status(500).json({
      error: 'Không thể sinh thử thách qua AI lúc này: ' + (error?.message || 'Lỗi không xác định'),
    });
  }
});

// Setup Vite or static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`EduChallenge Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
