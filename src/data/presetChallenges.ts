import { LearningChallengePlan } from '../types/challenge';

export const PRESET_CHALLENGES: LearningChallengePlan[] = [
  {
    id: 'scratch-ocean-cleanup-gr4',
    title: 'Thử Thách: "Hiệp Sĩ Mèo Cứu Biển" - Lập Trình Scratch 3.0',
    inputs: {
      grade: 'Lớp 4',
      subject: 'Tin học',
      curriculumTopic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình trực quan)',
      requirement: 'Sử dụng được các khối lệnh chuyển động, sự kiện và vòng lặp trong Scratch để điều khiển nhân vật tương tác với đối tượng khác trên sân khấu; phát hiện và sửa được lỗi đơn giản trong chương trình.',
      duration: '70 phút (2 tiết thực hành)',
      equipment: 'Phòng máy tính có chuột, bàn phím, đã cài Scratch 3.0 Offline (hoặc trình duyệt truy cập scratch.mit.edu), màn hình máy chiếu của giáo viên.',
      product: 'Dự án Scratch "Hiệp sĩ Mèo cứu biển" gồm nhân vật chú Mèo di chuyển nhặt rác nhựa, có tính điểm và thông báo chiến thắng.',
      contextTheme: 'Bảo vệ môi trường biển quê hương'
    },
    realWorldScenario: {
      storyline: 'Bãi biển quê hương xinh đẹp đang bị đe dọa bởi những mảnh rác nhựa do du khách vô ý bỏ lại. Các sinh vật biển như rùa biển và cá nhỏ đang kêu cứu! Chú mèo Miu dũng cảm quyết định khoác lên mình chiếc áo lặn để lặn xuống đáy đại dương, thu gom thật nhiều vỏ chai và túi nilon trước khi chúng làm hại các bạn sinh vật.',
      relevance: 'Gắn liền với phong trào "Nói không với rác thải nhựa" tại các trường tiểu học Việt Nam, biến việc học lập trình khô khan thành một sứ mệnh công dân nhí giàu cảm xúc.',
      missionCallout: 'Các hiệp sĩ nhí ơi! Hãy dùng sức mạnh của các khối lệnh Scratch để giúp chú mèo Miu di chuyển linh hoạt, dọn sạch đáy biển và mang lại nụ cười cho đại dương nào!'
    },
    observableObjectives: {
      knowledgeSkill: [
        'Chọn và phối hợp được tối thiểu 3 nhóm khối lệnh: Sự kiện (Khi bấm phím/lá cờ xanh), Chuyển động (di chuyển, xoay, đặt hướng), Điều khiển (vòng lặp liên tục, nếu... thì).',
        'Lập trình được nhân vật Mèo di chuyển theo sự điều khiển của 4 phím mũi tên hoặc con trỏ chuột.',
        'Thiết lập được sự kiện va chạm (touching) giữa nhân vật Mèo và rác để rác biến mất hoặc tăng điểm.'
      ],
      competence: [
        'Năng lực tự chủ và tự học: Tự đọc thẻ nhiệm vụ, tự chọn mức độ thử thách phù hợp với tốc độ của bản thân.',
        'Năng lực giải quyết vấn đề: Tự phát hiện nhân vật bị lộn ngược đầu hoặc rác không biến mất, vận dụng bộ câu hỏi gợi mở để tự tìm ra nguyên nhân và khắc phục.'
      ],
      attitude: [
        'Ý thức kiên trì thử sai (debugging mindset), không nản lòng khi chương trình chạy chưa như ý.',
        'Hình thành tình yêu biển đảo và trách nhiệm bảo vệ môi trường.'
      ]
    },
    taskLevels: [
      {
        levelNumber: 1,
        name: 'Khởi Động: "Lái Tàu Ngầm Dưới Nước"',
        badge: 'Huy hiệu Đồng - Thợ Lặn Tập Sự',
        badgeIcon: 'Compass',
        tagline: 'Làm quen sân khấu đại dương và điều khiển nhân vật di chuyển cơ bản',
        goal: 'Tạo được phông nền đại dương, thêm nhân vật Mèo và lập trình cho chú Mèo bơi sang trái, sang phải khi nhấn phím mũi tên.',
        completionCriteria: [
          'Có phông nền biển (Underwater) và nhân vật Mèo lặn.',
          'Khi bấm phím mũi tên phải (Right Arrow), Mèo quay sang phải và bơi về phía trước 10 bước.',
          'Khi bấm phím mũi tên trái (Left Arrow), Mèo quay sang trái và bơi về trước 10 bước mà KHÔNG bị lộn ngược đầu.'
        ],
        materials: ['Máy tính có Scratch 3.0', 'Thẻ nhiệm vụ mức 1 in sẵn hoặc trên màn hình'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Chọn bối cảnh đại dương',
            description: 'Mở thư viện Phông nền (Backdrop), tìm nhóm "Underwater" và chọn một bức tranh đáy biển thật lung linh.',
            checkQuestion: 'Sân khấu của con đã hiện ra đáy đại dương với nước xanh và san hô chưa?'
          },
          {
            step: 2,
            title: 'Chuẩn bị nhân vật',
            description: 'Để nhân vật Mèo có kích thước vừa phải (khoảng 60%), đổi kích thước trong ô Size.',
            checkQuestion: 'Chú mèo trên sân khấu đã vừa vặn chưa, có bị to quá che hết cảnh vật không?'
          },
          {
            step: 3,
            title: 'Lập trình bước bơi đầu tiên',
            description: 'Dùng khối lệnh "Khi bấm phím mũi tên phải", ghép thêm lệnh "đặt hướng bằng 90" và "di chuyển 10 bước". Làm tương tự cho mũi tên trái với hướng -90.',
            checkQuestion: 'Khi bấm phím mũi tên, Mèo đã di chuyển chưa? Có điều gì lạ xảy ra với tư thế của chú Mèo không?'
          }
        ]
      },
      {
        levelNumber: 2,
        name: 'Vận Dụng: "Thợ Lặn Nhặt Rác Thông Thái"',
        badge: 'Huy hiệu Bạc - Hiệp Sĩ Môi Trường',
        badgeIcon: 'Award',
        tagline: 'Tự lực phối hợp logic va chạm và biến số điểm thưởng',
        goal: 'Thêm nhân vật chai nhựa/túi nilon, lập trình để khi Mèo chạm vào rác thì rác phát âm thanh "chít", ẩn đi và điểm số được cộng 1 điểm.',
        completionCriteria: [
          'Thêm được nhân vật rác thải (tự vẽ hoặc chọn từ thư viện).',
          'Tạo được biến số "Điểm" (Score) bắt đầu bằng 0 khi bấm lá cờ xanh.',
          'Nhân vật Mèo di chuyển mượt mà 4 hướng (lên, xuống, trái, phải).',
          'Khi Mèo chạm vào rác (touching Cat): điểm tăng 1, rác phát âm thanh và ẩn đi.'
        ],
        materials: ['Máy tính có Scratch 3.0', 'Thẻ gợi ý khối lệnh cảm biến & biến số'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Kích hoạt 4 hướng di chuyển',
            description: 'Bổ sung thêm 2 lệnh điều khiển mũi tên Lên (hướng 0) và mũi tên Xuống (hướng 180) để Mèo bơi lội tự do khắp đáy biển.',
            checkQuestion: 'Mèo đã bơi được lên mặt nước và lặn xuống đáy chưa?'
          },
          {
            step: 2,
            title: 'Tạo ví đựng điểm',
            description: 'Vào nhóm Các biến số (Variables) -> Chọn "Tạo một biến", đặt tên là "Điểm". Đừng quên đặt lại điểm = 0 khi bấm lá cờ xanh nhé!',
            checkQuestion: 'Mỗi lần bấm lá cờ xanh bắt đầu trò chơi mới, điểm có tự động trở về số 0 không?'
          },
          {
            step: 3,
            title: 'Bắt quả tang va chạm',
            description: 'Ở nhân vật Rác, sử dụng vòng lặp "liên tục" (forever) kết hợp với "nếu đang chạm Mèo thì...". Bên trong khối "nếu", hãy thêm lệnh tăng điểm và ẩn rác.',
            checkQuestion: 'Khi Mèo bơi chạm vào chai nhựa, chai nhựa có biến mất ngay không hay vẫn nằm im?'
          }
        ]
      },
      {
        levelNumber: 3,
        name: 'Sáng Tạo: "Chúa Tể Đại Dương & Trò Chơi Hoàn Hảo"',
        badge: 'Huy hiệu Vàng - Nhà Lập Trình Nhí Xuất Sắc',
        badgeIcon: 'Zap',
        tagline: 'Mở rộng tính năng độc đáo, thêm chướng ngại vật hoặc hiệu ứng hoạt họa',
        goal: 'Sáng tạo thêm kịch bản nâng cao: có rác rơi từ trên xuống liên tục bằng bản sao (Clone) HOẶC xuất hiện chú Bạch tuộc/Cá mập tuần tra làm chướng ngại vật; có màn hình chiến thắng "Đại dương đã sạch!".',
        completionCriteria: [
          'Đạt toàn bộ tiêu chí của Mức 2.',
          'Có ít nhất 1 yếu tố sáng tạo độc lập: Rác tự xuất hiện ngẫu nhiên / Có nhân vật chướng ngại vật cản trở / Có đồng hồ đếm ngược 30 giây.',
          'Có thông điệp tuyên truyền bảo vệ môi trường rõ ràng hiển thị khi kết thúc trò chơi.'
        ],
        materials: ['Scratch 3.0', 'Thẻ tư duy sáng tạo: "Nếu muốn game gay cấn hơn, em sẽ thêm luật gì?"'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Lên ý tưởng điểm nhấn độc đáo',
            description: 'Em muốn trò chơi của mình đặc biệt ở điểm nào: thời gian đếm ngược gay cấn, hay cá mập bơi qua lại khiến mèo phải né tránh?',
            checkQuestion: 'Ý tưởng này có làm trò chơi vui hơn và ý nghĩa hơn không?'
          },
          {
            step: 2,
            title: 'Thử nghiệm tạo bản sao hoặc chuyển động ngẫu nhiên',
            description: 'Khám phá khối lệnh "lấy ngẫu nhiên từ... đến..." trong nhóm Các phép toán để rác xuất hiện ở nhiều vị trí khác nhau.',
            checkQuestion: 'Vị trí xuất hiện của rác có nằm trọn vẹn trong màn hình không, có bị chìm mất sau mép sân khấu không?'
          },
          {
            step: 3,
            title: 'Thông điệp chiến thắng',
            description: 'Khi điểm đạt mức 10, gửi thông điệp (Broadcast) để phông nền đổi sang sân khấu biển xanh ngập tràn nắng ấm cùng lời chúc mừng!',
            checkQuestion: 'Bạn bè chơi thử game của em có dễ dàng hiểu luật chơi và nhận được thông điệp bảo vệ môi trường không?'
          }
        ]
      }
    ],
    commonErrors: [
      {
        id: 'err-1',
        errorDescription: 'Khi bấm phím sang trái, nhân vật chú Mèo bị lộn ngược đầu xuống đất và bơi ngửa bụng.',
        whyItHappens: 'Mặc định trong Scratch, kiểu xoay của nhân vật là xoay tròn 360 độ (All around). Khi đặt hướng = -90 độ, nhân vật sẽ bị quay lộn ngược.',
        guidingQuestions: [
          'Con hãy quan sát chú Mèo khi sang trái: Chú đang nhìn sang trái hay đang trồng cây chuối dưới biển?',
          'Con có biết trong Scratch, nhân vật có mấy kiểu xoay người không? Hãy thử tìm biểu tượng hai mũi tên đối đầu (trái - phải) ở phần thông tin nhân vật xem điều gì kì diệu xảy ra nhé!',
          'Khối lệnh nào trong nhóm Chuyển động có thể giúp con khóa kiểu xoay "chỉ xoay trái - phải" nhỉ?'
        ],
        selfCheckAction: 'Bấm vào ô "Hướng" (Direction) dưới khung sân khấu, bấm vào biểu tượng "Trái/Phải" (Left/Right) hoặc kéo khối lệnh "đặt kiểu xoay [trái-phải]" vào đầu chương trình rồi thử lại.',
        teacherTip: 'Khen ngợi học sinh vì chú Mèo lộn ngược nhìn rất vui nhộn, sau đó khích lệ bé tự làm thám tử khám phá nút kiểu xoay thay vì bấm hộ.'
      },
      {
        id: 'err-2',
        errorDescription: 'Mèo đã bơi chạm vào chai nhựa nhưng chai nhựa không chịu ẩn đi và điểm số không tăng.',
        whyItHappens: 'Khối lệnh "nếu đang chạm Mèo" chỉ được đặt rời rạc sau cờ xanh mà không có vòng lặp "liên tục" (forever), khiến máy tính chỉ kiểm tra đúng 1 phần nghìn giây lúc bấm cờ rồi kết thúc.',
        guidingQuestions: [
          'Con thử đoán xem: Máy tính kiểm tra điều kiện chạm vào Mèo khi nào? Chỉ kiểm tra 1 lần lúc vừa bấm lá cờ xanh hay phải canh chừng suốt cả buổi chơi?',
          'Nếu muốn máy tính "luôn luôn lắng nghe, luôn luôn quan sát" suốt từ đầu đến cuối game, chúng mình cần chiếc vòng thần kỳ nào trong nhóm Điều khiển bao bọc lấy lệnh "Nếu... thì"?',
          'Vòng lặp nào giúp hành động lặp đi lặp lại mãi mãi nhỉ?'
        ],
        selfCheckAction: 'Kéo khối "liên tục" (forever) bọc xung quanh khối "nếu đang chạm Mèo thì...", sau đó bấm cờ xanh và cho Mèo bơi lại gần chai nhựa để kiểm tra.',
        teacherTip: 'Dùng hình ảnh ẩn dụ: "Khối lệnh nếu mà không có vòng liên tục giống như trọng tài chỉ liếc mắt nhìn sân bóng đúng 1 giây đầu trận rồi nhắm mắt đi ngủ vậy!"'
      },
      {
        id: 'err-3',
        errorDescription: 'Vừa chạm vào chai nhựa một cái, điểm số tăng vù vù từ 0 lên hàng trăm điểm trong chớp mắt.',
        whyItHappens: 'Chưa có lệnh "ẩn" ngay sau khi tăng điểm, hoặc không có độ trễ "đợi 0.5 giây", khiến trong thời gian Mèo lướt qua, điều kiện va chạm được kích hoạt hàng chục lần.',
        guidingQuestions: [
          'Con nhìn xem chú Mèo nhặt một chai nhựa hay đang nhặt cả xe tải rác mà điểm tăng nhanh thế?',
          'Khi Mèo vừa chạm vào chai nhựa, chiếc chai nhựa nên ở lại hay nên "biến mất" ngay vào túi lặn của Mèo?',
          'Sau khi đổi điểm 1 lượng, chúng mình nên cho chai nhựa làm hành động gì ngay lập tức?'
        ],
        selfCheckAction: 'Đặt khối "ẩn" (hide) ngay sau khối "thay đổi Điểm một lượng 1", và đừng quên đặt khối "hiện" (show) ở ngay dưới khối "Khi bấm vào cờ xanh" nhé!',
        teacherTip: 'Nhắc học sinh quy tắc vàng: "Đã có lệnh Ẩn thì khi bắt đầu game mới phải luôn có lệnh Hiện để tìm lại đồ chơi".'
      }
    ],
    rubric: [
      {
        id: 'crit-1',
        criterionName: '1. Đáp ứng yêu cầu (Nhiệm vụ & Chức năng cốt lõi)',
        weight: '30%',
        levels: {
          needHelp: 'Chưa hoàn thành di chuyển hoặc chưa có sự tương tác giữa Mèo và rác thải; cần giáo viên hướng dẫn từng bước.',
          proficient: 'Điều khiển được Mèo bơi 2-4 hướng; có nhân vật rác biến mất và điểm số tăng khi va chạm (Đạt mức Khởi động / Vận dụng cơ bản).',
          good: 'Hoàn thành trọn vẹn cả 4 hướng mượt mà, điểm số reset đúng lúc, nhân vật không bị lỗi lộn đầu, các đối tượng bố trí hợp lý.',
          excellent: 'Vượt yêu cầu: Có thêm cấp độ, chướng ngại vật hoặc đếm thời gian; kịch bản trò chơi hoàn chỉnh và logic chặt chẽ.'
        }
      },
      {
        id: 'crit-2',
        criterionName: '2. Hoạt động đúng (Kĩ thuật lập trình & Độ ổn định)',
        weight: '30%',
        levels: {
          needHelp: 'Chương trình thường xuyên kẹt lệnh, điểm số nhảy sai số lượng hoặc nhân vật bị văng ra khỏi mép sân khấu.',
          proficient: 'Chương trình chạy được, thỉnh thoảng còn giật hoặc nhân vật chưa mượt nhưng không xảy ra lỗi nghiêm trọng.',
          good: 'Chương trình vận hành trơn tru, không có lỗi lộn ngược, khối lệnh sắp xếp gọn gàng theo từng khối chức năng.',
          excellent: 'Cấu trúc khối lệnh tối ưu, biết sử dụng phát tin nhắn (broadcast) hoặc bản sao (clone), tự phát hiện và tự sửa triệt để các lỗi phát sinh.'
        }
      },
      {
        id: 'crit-3',
        criterionName: '3. Có sáng tạo (Ý tưởng độc đáo & Thẩm mỹ)',
        weight: '20%',
        levels: {
          needHelp: 'Chỉ sao chép y hệt hình mẫu mẫu của cô, chưa thay đổi màu sắc hay thêm bất kỳ chi tiết cá nhân nào.',
          proficient: 'Có thay đổi nhân vật hoặc phông nền theo sở thích riêng; chọn được loại rác thải hoặc âm thanh phù hợp.',
          good: 'Tự vẽ thêm phụ kiện cho nhân vật (bình dưỡng khí, mũ lặn) hoặc sáng tạo lời thoại tuyên truyền bảo vệ biển rất hóm hỉnh.',
          excellent: 'Sáng tạo đột phá về cơ chế chơi (có boss rác khổng lồ, hiệu ứng bong bóng nước, nhạc nền sôi động do em tự phối).'
        }
      },
      {
        id: 'crit-4',
        criterionName: '4. Thuyết minh & Giải thích cách làm (Tư duy phản hồi)',
        weight: '20%',
        levels: {
          needHelp: 'Không chỉ ra được khối lệnh nào làm cho nhân vật di chuyển; chỉ làm theo cảm tính.',
          proficient: 'Chỉ và nói được tên các khối lệnh chính: "Khối này để đi tới", "Khối này để cộng điểm".',
          good: 'Giải thích mạch lạc logic: "Vì con dùng vòng liên tục nên máy tính luôn kiểm tra xem Mèo đã chạm chai nhựa chưa".',
          excellent: 'Tự tin thuyết trình trước lớp, chia sẻ được khó khăn lúc nhân vật bị lộn đầu và tự hào kể lại cách mình đã giải cứu chú mèo thế nào.'
        }
      }
    ],
    observationSheet: {
      title: 'Phiếu Quan Sát Mức Độ Chủ Động Của Học Sinh Trong Giờ Thực Hành',
      instruction: 'Giáo viên đánh dấu vào mức độ quan sát thực tế của từng nhóm/học sinh trong quá trình diễn ra thử thách học tập.',
      items: [
        {
          id: 'obs-1',
          behavior: '1. Tính tự giác đọc đề và lựa chọn mục tiêu',
          indicatorLevels: {
            low: 'Ngồi đợi giáo viên đọc từng chữ hoặc chỉ tay vào màn hình mới bắt đầu làm.',
            medium: 'Tự đọc thẻ nhiệm vụ nhưng vẫn ngoái nhìn bạn bên cạnh xem bạn làm mức nào rồi mới làm theo.',
            high: 'Chủ động đọc lướt 3 mức, tự tin chọn ngay mức thử thách phù hợp với khả năng của mình và bắt tay vào việc ngay.'
          }
        },
        {
          id: 'obs-2',
          behavior: '2. Khả năng kiên trì và tự thử sai khi gặp lỗi (Debugging)',
          indicatorLevels: {
            low: 'Vừa thấy nhân vật không chạy là giơ tay kêu "Cô ơi máy hỏng rồi!" ngay lập tức.',
            medium: 'Thử đổi 1-2 khối lệnh, nếu không được thì mới quay sang hỏi bạn hoặc chờ giáo viên trợ giúp.',
            high: 'Bình tĩnh đọc bộ câu hỏi thám tử trên thẻ gợi ý, tự chạy thử từng khối lệnh để khoanh vùng và tự sửa thành công.'
          }
        },
        {
          id: 'obs-3',
          behavior: '3. Cách thức tương tác và tìm kiếm sự hỗ trợ',
          indicatorLevels: {
            low: 'Đòi bạn hoặc giáo viên cầm chuột làm hộ toàn bộ.',
            medium: 'Hỏi bạn cách làm và tự mình cầm chuột thao tác theo hướng dẫn của bạn.',
            high: 'Chủ động thảo luận, đặt câu hỏi đúng trọng tâm ("Bạn ơi tại sao Mèo của tớ cứ bị lộn đầu?") và sẵn sàng chia sẻ mẹo hay cho bạn khác.'
          }
        },
        {
          id: 'obs-4',
          behavior: '4. Tinh thần mở rộng và bứt phá (Động lực nội tại)',
          indicatorLevels: {
            low: 'Xong mức 1 là ngồi nghịch linh tinh hoặc chuyển sang chơi điện tử khác.',
            medium: 'Hoàn thành mức đã chọn và dừng lại đợi hết giờ báo cáo.',
            high: 'Sau khi hoàn thành mức đang làm, hào hứng xin thầy cô chinh phục tiếp mức Vận dụng hoặc Sáng tạo cao hơn.'
          }
        }
      ]
    },
    interestSurvey: {
      preSurvey: {
        title: 'Khảo Sát Nhanh Cảm Xúc Trước Khi Bắt Đầu Thử Thách (1 phút)',
        purpose: 'Nắm bắt tâm lý, mức độ sẵn sàng và tự tin của học sinh tiểu học trước khi bước vào phòng máy.',
        questions: [
          {
            id: 'pre-1',
            question: 'Hôm nay con cảm thấy thế nào khi chuẩn bị bước vào thử thách lập trình Scratch?',
            type: 'emoji-scale',
            options: ['Hào hứng, mong chờ (😍)', 'Bình thường, hơi tò mò (😊)', 'Hơi lo lắng, sợ khó (😟)']
          },
          {
            id: 'pre-2',
            question: 'Con tự tin mình sẽ chinh phục được huy hiệu nào hôm nay?',
            type: 'multiple-choice',
            options: ['Huy hiệu Đồng (Khởi động vững vàng)', 'Huy hiệu Bạc (Hiệp sĩ Vận dụng)', 'Huy hiệu Vàng (Nhà Lập Trình Siêu Cấp)']
          }
        ]
      },
      postSurvey: {
        title: 'Khảo Sát Hứng Thú Sau Khi Vượt Qua Thử Thách (2 phút)',
        purpose: 'Đánh giá mức độ hài lòng, cảm giác thành tựu và ghi nhận bài học kinh nghiệm của học sinh.',
        questions: [
          {
            id: 'post-1',
            question: 'Sau 70 phút vừa rồi, con cảm thấy thế nào về sản phẩm trò chơi của mình?',
            type: 'emoji-scale',
            options: ['Rất tự hào, chơi siêu vui! (🌟)', 'Khá hài lòng, mình đã làm được! (👍)', 'Hơi tiếc vì chưa kịp làm hết ý tưởng (💪)']
          },
          {
            id: 'post-2',
            question: 'Khoảnh khắc nào trong tiết học làm con cảm thấy thích thú nhất?',
            type: 'multiple-choice',
            options: [
              'Lúc chú Mèo chịu bơi theo ý mình',
              'Lúc tự mình làm thám tử tìm ra chỗ sai và sửa được',
              'Lúc cho bạn bên cạnh chơi thử trò chơi của mình',
              'Lúc tự vẽ thêm rác và phông nền độc lạ'
            ]
          },
          {
            id: 'post-3',
            question: 'Nếu có thêm 10 phút nữa, con muốn nâng cấp thêm điều gì cho game?',
            type: 'short-text'
          }
        ]
      }
    },
    aiGovernance: {
      potentialHallucinations: [
        'AI có thể đề xuất các khối lệnh quá phức tạp (như biến mảng List, thuật ngữ tiếng Anh chuyên sâu hoặc hàm con My Blocks) không phù hợp với chuẩn lứa tuổi Lớp 4 GDPT 2018.',
        'AI có thể nhầm lẫn giữa Scratch 2.0 (cũ) và Scratch 3.0 (mới), ví dụ nhắc đến lệnh "Pen" có sẵn trong khi ở bản 3.0 phải cài thêm Extension.',
        'AI có thể đưa ra thời lượng ước lượng phi thực tế (ví dụ cho rằng học sinh lớp 4 vẽ xong 5 nhân vật chỉ trong 5 phút).'
      ],
      teacherVerificationChecklist: [
        'Bước 1: Đối chiếu kĩ với Sách giáo khoa Tin học 4 đang dùng tại trường (Bộ Kết nối tri thức / Cánh diều / Chân trời sáng tạo) để đảm bảo không dùng thuật ngữ lạ.',
        'Bước 2: Mở Scratch trên máy giáo viên và làm thử thử thách đúng 1 lần xem các bước gợi ý có trơn tru không.',
        'Bước 3: Dự phòng phương án cho học sinh chưa gõ được chữ tiếng Việt hoặc chuột bị liệt nút cuộn.',
        'Bước 4: Kiểm tra lại các câu hỏi gợi mở, đảm bảo tuyệt đối không in sẵn đoạn code mẫu hoàn chỉnh ra bàn khiến học sinh chỉ việc xếp hình thụ động.'
      ],
      studentDataPrivacyRules: [
        'Tuyệt đối KHÔNG yêu cầu học sinh nhập họ tên thật, ngày sinh, số điện thoại hay trường lớp vào tài khoản trực tuyến hoặc ứng dụng AI.',
        'Không tải ảnh chụp khuôn mặt học sinh thật lên các công cụ sinh ảnh AI hoặc dịch vụ đám mây công cộng.',
        'Khi lưu bài, chỉ dùng cú pháp ẩn danh quy ước trong lớp (Ví dụ: May01_TieuHoc_NhiemVu1.sb3).'
      ],
      safetyNotes: 'Giáo viên luôn là người kiểm duyệt sư phạm cuối cùng. Mọi gợi ý từ AI chỉ đóng vai trò khung tham khảo ban đầu.'
    },
    methodologyNote: 'Kế hoạch học tập này được xây dựng trên nguyên tắc thiết kế sư phạm tích cực (Constructivism & Scaffolding) theo chuẩn chương trình GDPT 2018 môn Tin học cấp Tiểu học Việt Nam. Các ví dụ minh họa và kịch bản sư phạm được biên soạn dựa trên thực tiễn giảng dạy tại phòng máy tính trường học, không bịa đặt số liệu thống kê thực nghiệm.'
  },
  {
    id: 'paint-dream-school-gr3',
    title: 'Thử Thách: "Kiến Trúc Sư Nhí Xây Dựng Ngôi Trường Mơ Ước" - MS Paint',
    inputs: {
      grade: 'Lớp 3',
      subject: 'Tin học',
      curriculumTopic: 'Chủ đề E: Ứng dụng tin học - Tập vẽ tranh với phần mềm đồ họa đơn giản',
      requirement: 'Sử dụng thành thạo công cụ vẽ hình học có sẵn (hình chữ nhật, tam giác, hình tròn), công cụ đường thẳng, nét vẽ và hộp màu để vẽ một bức tranh có bố cục; biết chọn màu và đổ màu đúng cách; lưu được tệp tranh vào thư mục quy định.',
      duration: '35 phút (1 tiết)',
      equipment: 'Phòng máy tính có chuột quang hoạt động tốt, hệ điều hành Windows đã có sẵn công cụ Paint (MS Paint).',
      product: 'Tệp hình ảnh tranh vẽ "Ngoi_truong_mo_uoc.png" lưu trong thư mục LOP3_TINHOC.',
      contextTheme: 'Chào mừng năm học mới / Ngôi trường hạnh phúc'
    },
    realWorldScenario: {
      storyline: 'Trường tiểu học thân yêu của chúng mình đang phát động cuộc thi "Ngôi trường hạnh phúc trong mắt em". Ban giám hiệu rất muốn lắng nghe những ý tưởng ngộ nghĩnh của các bạn học sinh Lớp 3: Ngôi trường tương lai của con sẽ có mái ngói đỏ tươi, cột cờ tung bay trong gió, hay có thêm vườn hoa rực rỡ và sân bóng đá mini?',
      relevance: 'Gần gũi với môi trường trường lớp hàng ngày, giúp học sinh rèn luyện kĩ năng vận động tinh (di chuột, click chuột dứt khoát) - một kĩ năng nền tảng sống còn của Tin học tiểu học.',
      missionCallout: 'Các họa sĩ nhí ơi! Hãy cầm chắc chuột trong tay, biến những hình khối vuông, tròn, tam giác đơn giản thành ngôi trường ước mơ rực rỡ sắc màu nào!'
    },
    observableObjectives: {
      knowledgeSkill: [
        'Chọn đúng công cụ Shapes (Rectangle, Triangle, Oval) và kích thước nét vẽ (Size) phù hợp.',
        'Kéo thả chuột chính xác để vẽ các khối nhà, mái trường, cửa sổ cân đối.',
        'Sử dụng công cụ Fill with Color (Thùng sơn) để tô màu mái ngói, tường nhà, lá cờ mà không làm màu tràn ra nền trắng.',
        'Thao tác lưu bài: File -> Save (hoặc Ctrl+S) đặt đúng tên tệp quy định.'
      ],
      competence: [
        'Năng lực thẩm mỹ và tư duy hình học: Nhận biết đồ vật thực tế cấu tạo từ các hình học cơ bản.',
        'Năng lực tự chủ giải quyết vấn đề: Tự phát hiện vệt màu bị loang và biết dùng phím Ctrl+Z để quay lại thay vì xóa đi vẽ lại từ đầu.'
      ],
      attitude: [
        'Yêu quý trường lớp, giữ gìn vệ sinh phòng máy tính, trật tự khi thực hành.'
      ]
    },
    taskLevels: [
      {
        levelNumber: 1,
        name: 'Khởi Động: "Khung Nhà Vững Chãi"',
        badge: 'Huy hiệu Đồng - Họa Sĩ Tập Sự',
        badgeIcon: 'Compass',
        tagline: 'Vẽ khung nhà và mái trường bằng các hình khối cơ bản',
        goal: 'Vẽ được tòa nhà chính (hình chữ nhật), mái nhà (hình tam giác), 1 cửa ra vào và 2 cửa sổ vuông.',
        completionCriteria: [
          'Có hình ngôi nhà gồm tường, mái và cửa ra vào rõ ràng.',
          'Các nét vẽ khép kín, không bị hở mạch.',
          'Biết chọn màu và tô được ít nhất 2 màu khác nhau cho mái và tường.'
        ],
        materials: ['Máy tính có Paint', 'Tranh mẫu gợi ý trên bảng'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Chọn công cụ và độ dày nét',
            description: 'Bấm chọn hình Chữ nhật trong khung Shapes, chọn độ dày nét vẽ vừa phải (Size thứ 2).',
            checkQuestion: 'Nét vẽ của con đã vừa mắt chưa, có bị mảnh quá hay dày quá mức không?'
          },
          {
            step: 2,
            title: 'Dựng tường và mái',
            description: 'Kéo chuột vẽ một hình chữ nhật lớn làm thân lớp học. Sau đó chọn hình Tam giác, đặt chuột khéo léo để kéo mái nhà phủ lên trên.',
            checkQuestion: 'Mái nhà và tường nhà đã chạm sát vào nhau chưa? Có khe hở nào ở giữa không?'
          },
          {
            step: 3,
            title: 'Tô màu tươi sáng',
            description: 'Bấm biểu tượng Thùng sơn (Fill with color), chọn màu yêu thích trong ô Màu 1 (Color 1) rồi nhấp chuột vào bên trong mái nhà.',
            checkQuestion: 'Màu sơn có nằm gọn gàng trong mái nhà không hay bị lem ra ngoài?'
          }
        ]
      },
      {
        levelNumber: 2,
        name: 'Vận Dụng: "Khuôn Viên Trường Rực Rỡ"',
        badge: 'Huy hiệu Bạc - Kiến Trúc Sư Nhí',
        badgeIcon: 'Award',
        tagline: 'Hoàn thiện chi tiết: cột cờ, cây xanh và biển tên trường',
        goal: 'Vẽ thêm cột cờ Tổ quốc với ngôi sao vàng ở sân trường, hàng cây bóng mát bằng hình tròn/mây và gõ biển tên trường bằng công cụ Text (A).',
        completionCriteria: [
          'Đạt toàn bộ tiêu chí mức 1.',
          'Có cột cờ với lá cờ đỏ sao vàng ở vị trí trang trọng.',
          'Có ít nhất 1 cây xanh hoặc bồn hoa có thân và tán lá.',
          'Sử dụng công cụ Text (chữ A) để gõ được tên trường hoặc tên mình.'
        ],
        materials: ['Máy tính có Paint', 'Bảng quy ước tên tệp lưu bài'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Vẽ cột cờ trang nghiêm',
            description: 'Dùng công cụ Đường thẳng (Line) kết hợp giữ phím Shift để cột cờ thẳng đứng tắp. Vẽ lá cờ hình chữ nhật đỏ và dùng hình Ngôi sao (Star) tô vàng ở giữa.',
            checkQuestion: 'Cột cờ của con có bị nghiêng ngả không? Bí quyết giữ phím Shift có giúp cột cờ đứng thẳng không?'
          },
          {
            step: 2,
            title: 'Trồng cây xanh cho bóng mát',
            description: 'Dùng hình chữ nhật hẹp làm thân cây màu nâu, dùng hình đám mây (Cloud callout) hoặc hình bầu dục (Oval) ghép lại làm tán lá xanh mướt.',
            checkQuestion: 'Khu vườn trường đã có bóng mát cho các bạn học sinh vui chơi chưa?'
          },
          {
            step: 3,
            title: 'Gắn biển tên trường',
            description: 'Bấm vào chữ A (Text), nhấp chuột lên cổng trường hoặc nóc nhà, gõ tên trường (Ví dụ: "TIỂU HỌC KIM ĐỒNG").',
            checkQuestion: 'Chữ viết có rõ ràng, dễ đọc không?'
          }
        ]
      },
      {
        levelNumber: 3,
        name: 'Sáng Tạo: "Ngôi Trường Thông Minh Của Tương Lai"',
        badge: 'Huy hiệu Vàng - Họa Sĩ Tài Ba',
        badgeIcon: 'Zap',
        tagline: 'Thêm sân bóng, tấm pin năng lượng mặt trời hoặc xe buýt trường học',
        goal: 'Sáng tạo thêm những tiện ích hiện đại cho ngôi trường (sân chơi cầu trượt, tấm pin mặt trời trên mái, vườn rau em chăm, bạn bè đang vui đùa).',
        completionCriteria: [
          'Đạt toàn bộ tiêu chí mức 2.',
          'Bố cục tranh phong phú, có tiền cảnh và hậu cảnh (ông mặt trời, chim bay, mây trời).',
          'Tự phối hợp màu sắc hài hòa, có điểm nhấn nghệ thuật độc đáo.'
        ],
        materials: ['Paint', 'Thẻ gợi ý chi tiết thông minh'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Thiết kế tiện ích thông minh',
            description: 'Ngôi trường tương lai của con có gì đặc biệt: Cầu trượt xoắn ốc từ tầng 2 xuống sân, hay kính thiên văn ngắm sao trên sân thượng?',
            checkQuestion: 'Ý tưởng này có làm các bạn nhỏ thích đến trường mỗi ngày không?'
          },
          {
            step: 2,
            title: 'Tô điểm bầu trời và thiên nhiên',
            description: 'Thêm ông mặt trời tỏa nắng rạng rỡ ở góc tranh và những chú chim én chao liệng.',
            checkQuestion: 'Bức tranh đã tràn ngập không khí vui tươi của một ngày mới chưa?'
          },
          {
            step: 3,
            title: 'Lưu trữ và bảo quản tác phẩm',
            description: 'Bấm vào nút File màu xanh góc trên -> Chọn Save As -> PNG picture -> Đặt tên tệp theo cú pháp: "Ten_Lop_TruongEm.png".',
            checkQuestion: 'Con đã nhìn thấy tên tệp của mình xuất hiện trên thanh tiêu đề trên cùng của Paint chưa?'
          }
        ]
      }
    ],
    commonErrors: [
      {
        id: 'paint-err-1',
        errorDescription: 'Vừa bấm thùng sơn tô màu mái ngói đỏ, toàn bộ màn hình trắng bỗng biến thành một màu đỏ chót.',
        whyItHappens: 'Nét vẽ hình học bị hở (dù chỉ 1 pixel rất nhỏ), nước sơn trong thùng sẽ tràn qua khe hở lan ra toàn bộ khung vẽ.',
        guidingQuestions: [
          'Ôi! Nước sơn đỏ đã chảy tràn ra khắp sân trường rồi! Con thử nghĩ xem vì sao nước sơn lại chảy ra ngoài được nhỉ?',
          'Chiếc xô nước hay ngôi nhà bị thủng một lỗ nhỏ thì nước có chảy ra không?',
          'Phím tắt thần kỳ nào trên bàn phím giúp chúng mình "quay ngược thời gian" trở lại lúc chưa đổ màu nhỉ? (Gợi ý: Ctrl và phím nào?)',
          'Khi quay lại rồi, con hãy dùng công cụ Kính lúp (Magnifier) soi thật kĩ mép mái nhà xem có chỗ nào bị đứt nét không nhé?'
        ],
        selfCheckAction: 'Ấn ngay tổ hợp phím Ctrl + Z để hủy lệnh đổ màu; sau đó chọn công cụ Kính lúp (Magnifier), phóng to chỗ nối giữa mái nhà và tường, dùng bút chì hoặc cọ vẽ nối kín khe hở rồi mới đổ màu lại.',
        teacherTip: 'Đừng vội tắt Paint của học sinh! Dạy học sinh câu thần chú "Ctrl + Z - Phép màu quay lại" để các con không sợ hãi khi phạm sai lầm.'
      },
      {
        id: 'paint-err-2',
        errorDescription: 'Vẽ cột cờ hoặc mái nhà đường thẳng cứ bị run tay, méo mó gãy khúc gợn sóng.',
        whyItHappens: 'Học sinh lớp 3 mới cầm chuột chưa quen lực cổ tay, kéo tự do bằng công cụ Brush/Pencil thay vì dùng công cụ Line kết hợp giữ Shift.',
        guidingQuestions: [
          'Con thấy cột cờ này đang đứng thẳng tắp trong gió hay đang bị gió bão thổi nghiêng ngả?',
          'Con có biết trên bàn phím máy tính có một phím "giữ thăng bằng" siêu xịn tên là Shift không?',
          'Con hãy thử một tay giữ chặt phím Shift, tay kia cầm chuột kéo đường thẳng xem nó có thẳng tắp như thước kẻ không nhé?'
        ],
        selfCheckAction: 'Chọn công cụ Line, ngón tay trái nhấn giữ phím Shift trong suốt quá trình tay phải bấm giữ và kéo chuột.',
        teacherTip: 'Tập cho trẻ thói quen phối hợp 2 tay: tay trái trên bàn phím (Shift/Ctrl), tay phải điều khiển chuột vững vàng.'
      },
      {
        id: 'paint-err-3',
        errorDescription: 'Học sinh vẽ xong bấm dấu chéo đỏ (X) tắt cửa sổ rồi khóc vì tranh vẽ biến mất.',
        whyItHappens: 'Chưa hiểu cơ chế lưu tệp (Save), khi hiện hộp thoại hỏi "Do you want to save changes?" thì bấm nhầm vào Don\'t Save.',
        guidingQuestions: [
          'Bức tranh vẽ rất đẹp nhưng máy tính chưa kịp cất vào tủ hồ sơ. Trước khi tắt máy, chúng mình phải bấm vào chiếc đĩa mềm màu tím nào?',
          'Khi máy tính hiện bảng hỏi bằng tiếng Anh có 3 nút: Save (Lưu) - Don\'t Save (Đừng lưu) - Cancel (Hủy), người bạn thông minh sẽ chọn nút nào?'
        ],
        selfCheckAction: 'Luôn bấm tổ hợp phím Ctrl + S hoặc biểu tượng chiếc Đĩa mềm góc trên cùng bên trái trước khi kết thúc tiết học.',
        teacherTip: 'Đầu giờ nên nhắc nhở quy tắc "Cứ 10 phút lưu bài một lần để phòng trường hợp mất điện đột ngột".'
      }
    ],
    rubric: [
      {
        id: 'p-rubric-1',
        criterionName: '1. Đáp ứng yêu cầu (Hình khối & Nét vẽ)',
        weight: '30%',
        levels: {
          needHelp: 'Chưa vẽ được trọn vẹn khối nhà; nét vẽ đứt đoạn, chưa biết chọn kích thước nét vẽ phù hợp.',
          proficient: 'Vẽ được ngôi nhà có mái, tường, cửa sổ bằng các công cụ Shapes; các nét tương đối khép kín.',
          good: 'Vẽ đầy đủ ngôi nhà, cột cờ thẳng đẹp, có cây xanh, nét vẽ gọn gàng dứt khoát không bị lem nhem.',
          excellent: 'Bố cục cân đối hoàn hảo, phối hợp linh hoạt nhiều hình khối phức tạp, có biển chữ sắc nét.'
        }
      },
      {
        id: 'p-rubric-2',
        criterionName: '2. Hoạt động đúng (Kĩ thuật tô màu & Lưu tệp)',
        weight: '30%',
        levels: {
          needHelp: 'Thường xuyên làm tràn màu ra khắp màn hình; chưa biết lưu tệp, phải nhờ giáo viên lưu hộ.',
          proficient: 'Tô được màu cho các chi tiết lớn; biết dùng Ctrl+Z khi tràn màu; lưu được bài vào ổ đĩa.',
          good: 'Tô màu sạch sẽ, không có vệt hở; tự lưu bài đúng thư mục và đặt đúng tên tệp quy định.',
          excellent: 'Thao tác thuần thục, phối màu có đậm nhạt; biết mở lại tệp đã lưu để kiểm tra chất lượng ảnh.'
        }
      },
      {
        id: 'p-rubric-3',
        criterionName: '3. Có sáng tạo (Ý tưởng & Thẩm mỹ)',
        weight: '20%',
        levels: {
          needHelp: 'Tranh đơn điệu, chỉ có 1 hình vuông và 1 hình tam giác tô màu cơ bản.',
          proficient: 'Có thêm chi tiết phụ như mặt trời, mây bay hoặc con đường nhỏ vào trường.',
          good: 'Màu sắc tươi sáng, có thêm các đồ chơi ở sân trường (xích đu, bập bênh) ngộ nghĩnh.',
          excellent: 'Ý tưởng đột phá về ngôi trường tương lai (nhiều tầng hiện đại, vườn hoa sinh thái, xe đưa đón học sinh).'
        }
      },
      {
        id: 'p-rubric-4',
        criterionName: '4. Thuyết minh cách làm (Giao tiếp & Tư duy)',
        weight: '20%',
        levels: {
          needHelp: 'Ngại ngùng, không giải thích được mình đã dùng công cụ gì để vẽ mái nhà.',
          proficient: 'Chỉ được: "Con dùng hình tam giác vẽ mái nhà, dùng thùng sơn tô màu đỏ".',
          good: 'Kể lại được bí quyết: "Lúc nãy màu bị tràn, con đã bấm Ctrl+Z rồi dùng kính lúp phóng to để bịt lỗ thủng".',
          excellent: 'Tự tin giới thiệu bức tranh trước lớp: Kể về ý nghĩa ngôi trường và tự hào chia sẻ mẹo giữ phím Shift để vẽ cột cờ thẳng đứng.'
        }
      }
    ],
    observationSheet: {
      title: 'Bảng Đánh Giá Mức Độ Chủ Động Trong Thao Tác Chuột & Xử Lý Sự Cố',
      instruction: 'Quan sát hành vi thao tác của học sinh Lớp 3 trong suốt 35 phút bài vẽ.',
      items: [
        {
          id: 'p-obs-1',
          behavior: '1. Khả năng tự chủ cầm chuột và phối hợp bàn phím',
          indicatorLevels: {
            low: 'Cầm chuột ngập ngừng, tay còn lại thả buông thõng dưới đùi không biết dùng phím hỗ trợ.',
            medium: 'Cầm chuột tương đối vững, nhớ dùng phím Shift khi được nhắc nhở.',
            high: 'Tự giác phối hợp nhịp nhàng 2 tay: tay trái sẵn sàng trên phím Ctrl+Z và Shift, tay phải rê chuột chuẩn xác.'
          }
        },
        {
          id: 'p-obs-2',
          behavior: '2. Phản ứng tâm lý khi màu bị tràn ra ngoài',
          indicatorLevels: {
            low: 'Hốt hoảng buông chuột, kêu to hoặc bấm chuột lung tung làm vệt màu loang thêm.',
            medium: 'Dừng tay ngơ ngác, đợi cô đến giúp hoặc nhìn sang bạn bên cạnh.',
            high: 'Bình tĩnh mỉm cười bấm Ctrl+Z ngay lập tức, tự bật kính lúp đi tìm chỗ hở để vá.'
          }
        },
        {
          id: 'p-obs-3',
          behavior: '3. Tinh thần giúp đỡ và sẻ chia kĩ năng',
          indicatorLevels: {
            low: 'Chỉ chăm chú vào màn hình của mình, ai hỏi cũng không trả lời.',
            medium: 'Chỉ cho bạn khi bạn hỏi nhưng làm luôn hộ bạn trên chuột của bạn.',
            high: 'Nhiệt tình chỉ tay gợi ý cho bạn: "Cậu bấm phím Ctrl với chữ Z đi kìa!" chứ không giật chuột của bạn.'
          }
        }
      ]
    },
    interestSurvey: {
      preSurvey: {
        title: 'Khảo Sát Tâm Thế Đầu Giờ Vẽ Tranh',
        purpose: 'Khơi gợi niềm đam mê hội họa kĩ thuật số cho học sinh lớp 3.',
        questions: [
          {
            id: 'paint-pre-1',
            question: 'Hôm nay con có thích dùng chuột máy tính để làm họa sĩ nhí không?',
            type: 'emoji-scale',
            options: ['Rất thích, con thích vẽ lắm! (🎨)', 'Bình thường, con muốn thử xem sao (🖌️)', 'Hơi run, sợ vẽ xấu (🥺)']
          }
        ]
      },
      postSurvey: {
        title: 'Cảm Xúc Của Em Về Bức Tranh Sau Giờ Học',
        purpose: 'Tạo cảm giác thành tựu và sự tự hào về sản phẩm công nghệ đầu tay.',
        questions: [
          {
            id: 'paint-post-1',
            question: 'Ngắm nhìn bức tranh ngôi trường vừa lưu trên máy, con thấy thế nào?',
            type: 'emoji-scale',
            options: ['Tuyệt vời, con muốn khoe với bố mẹ ngay! (💖)', 'Khá đẹp, con thấy rất vui (😊)', 'Lần sau con sẽ vẽ đẹp hơn nữa (🌻)']
          },
          {
            id: 'paint-post-2',
            question: 'Chi tiết nào trong bức tranh làm con tự hào nhất?',
            type: 'multiple-choice',
            options: ['Mái ngói đỏ tươi', 'Lá cờ Tổ quốc bay phấp phới', 'Khu vườn và hàng cây xanh mát', 'Tên trường con tự gõ']
          }
        ]
      }
    },
    aiGovernance: {
      potentialHallucinations: [
        'AI có thể gợi ý các phần mềm đồ họa chuyên nghiệp (Photoshop, Canva, Illustrator, Paint 3D) vượt quá cấu hình máy tính phòng thực hành tiểu học và không có trong SGK lớp 3.',
        'AI có thể đưa ra các thao tác phức tạp như lớp layer, opacity, gradient không tồn tại trong phần mềm MS Paint cổ điển.'
      ],
      teacherVerificationChecklist: [
        'Bước 1: Bật thử phần mềm Paint trên máy tính phòng học xem phiên bản giao diện (Windows 10/11) có vị trí các nút bấm đúng như mô tả không.',
        'Bước 2: Tạo sẵn thư mục lưu bài trên ổ D: (ví dụ D:\\BAI_TAP_LOP_3) để học sinh không lưu nhầm vào ổ hệ thống C:.',
        'Bước 3: Nhắc nhở quy tắc cầm chuột đúng cách (ngón trỏ đặt chuột trái, ngón giữa đặt chuột phải, không gồng cứng cổ tay).'
      ],
      studentDataPrivacyRules: [
        'Khi hướng dẫn gõ biển tên trường, nhắc học sinh không gõ số nhà riêng, số điện thoại của cha mẹ hay thông tin nhạy cảm vào tranh vẽ.',
        'Tranh vẽ của học sinh chỉ chia sẻ trong mạng nội bộ trường học hoặc triển lãm tại lớp học.'
      ],
      safetyNotes: 'Phòng máy tính cần có rãnh bảo vệ dây nguồn và dây cáp mạng an toàn, tránh để học sinh vướng chân.'
    },
    methodologyNote: 'Kế hoạch học tập này bám sát chuẩn kiến thức kĩ năng môn Tin học Lớp 3 (Chủ đề E - Ứng dụng tin học) thuộc Chương trình GDPT 2018 Việt Nam. Không tự ý bịa đặt số liệu thống kê hoặc kết quả thực nghiệm chưa qua kiểm chứng.'
  },
  {
    id: 'tech-study-lamp-gr5',
    title: 'Thử Thách: "Kĩ Sư Nhí Chế Tạo Đèn Học Để Bàn An Toàn & Tiết Kiệm Điện" - Công Nghệ Lớp 5',
    inputs: {
      grade: 'Lớp 5',
      subject: 'Công nghệ',
      curriculumTopic: 'Phần 2: Thủ công kĩ thuật - Thiết kế và lắp ráp mô hình đồ dùng công nghệ trong gia đình',
      requirement: 'Nhận biết được cấu tạo và nguyên lý hoạt động đơn giản của đèn học; lựa chọn được vật liệu và dụng cụ phù hợp; lắp ráp được mô hình đèn học để bàn có công tắc bật/tắt hoạt động tốt; rèn luyện thói quen sử dụng điện an toàn, tiết kiệm.',
      duration: '70 phút (2 tiết thực hành)',
      equipment: 'Bộ lắp ghép mô hình kĩ thuật lớp 5 (thanh chữ U, tấm đế, ốc vít, tuốc nơ vít, cờ lê), bộ nguồn pin tiểu 3V có hộp pin, bóng đèn LED hoặc đèn sợi đốt mini 3V, dây dẫn, công tắc bấm/gạt; vật liệu tái chế (vỏ cốc giấy làm chao đèn).',
      product: 'Mô hình đèn học để bàn hoàn chỉnh, đứng vững trên mặt bàn, công tắc bật là sáng, tắt là ngắt điện, chao đèn che ánh sáng không làm chói mắt.',
      contextTheme: 'Góc học tập thân thương & Tiết kiệm năng lượng điện'
    },
    realWorldScenario: {
      storyline: 'Năm học lớp 5 này, lượng bài tập và thời gian đọc sách buổi tối của các bạn nhỏ nhiều hơn. Tuy nhiên, nếu ngồi học trong điều kiện ánh sáng không đủ hoặc đèn bị chói, đôi mắt của chúng mình sẽ rất dễ bị cận thị! Bạn An muốn tự tay chế tạo một chiếc đèn học mini tặng cho góc học tập của chính mình, vừa sáng dịu mát mắt lại vừa tận dụng vật liệu tái chế bảo vệ môi trường.',
      relevance: 'Gắn trực tiếp với sức khỏe học đường (phòng chống tật khúc xạ cận thị học đường) và ý thức bảo vệ tài nguyên năng lượng quốc gia.',
      missionCallout: 'Các kĩ sư công nghệ Lớp 5 ơi! Hãy cùng nhau trổ tài khéo tay, phối hợp cơ khí lắp ghép và mạch điện thông minh để thắp sáng góc học tập của chúng mình nào!'
    },
    observableObjectives: {
      knowledgeSkill: [
        'Gọi tên đúng các bộ phận chính của đèn học: Chân đế, thân đèn, chao đèn (chụp đèn), bóng đèn và công tắc.',
        'Sử dụng tuốc nơ vít và cờ lê để siết ốc vít ghép nối các thanh kim loại/nhựa chắc chắn, không bị lung lay.',
        'Lắp ráp đúng mạch điện kín gồm: Nguồn pin -> Công tắc -> Bóng đèn -> Nguồn pin.',
        'Thao tác đóng/ngắt công tắc kiểm tra bóng đèn sáng/tắt dứt khoát.'
      ],
      competence: [
        'Năng lực thiết kế và sáng tạo kĩ thuật: Tự điều chỉnh góc nghiêng của thân đèn và chao đèn để hướng ánh sáng rọi đúng khu vực trang vở.',
        'Năng lực giải quyết vấn đề thực tế: Khi bật công tắc mà đèn không sáng, biết tự kiểm tra xem lỏng cực pin hay đứt mối nối.'
      ],
      attitude: [
        'Cẩn thận, tỉ mỉ, không làm rơi vãi ốc vít; có ý thức tắt đèn khi không sử dụng.'
      ]
    },
    taskLevels: [
      {
        levelNumber: 1,
        name: 'Khởi Động: "Khung Đèn Vững Chãi"',
        badge: 'Huy hiệu Đồng - Thợ Máy Tập Sự',
        badgeIcon: 'Compass',
        tagline: 'Lắp ráp phần cơ khí: Chân đế và thân đèn đứng thẳng',
        goal: 'Lắp ghép tấm đế và thân đèn bằng các thanh giằng và ốc vít, đảm bảo khung đèn đứng vững không bị nghiêng đổ.',
        completionCriteria: [
          'Chân đế phẳng phiu, đặt trên bàn không bị bập bênh.',
          'Thân đèn liên kết chặt chẽ với chân đế bằng tối thiểu 2 bộ ốc vít có vòng đệm.',
          'Ốc vít được siết vừa tay bằng cờ lê và tuốc nơ vít, không bị nhờn ren.'
        ],
        materials: ['Tấm đế chữ nhật', 'Thanh chữ U dài', 'Ốc và vít', 'Cờ lê, tuốc nơ vít'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Chuẩn bị chi tiết và dụng cụ',
            description: 'Đặt hộp dụng cụ mở nắp gọn gàng bên góc bàn, đếm đủ 4 ốc ngắn, 4 đai ốc và dụng cụ vặn.',
            checkQuestion: 'Các chi tiết đã được xếp gọn trong khay chưa để tránh ốc vít bị lăn rơi xuống sàn?'
          },
          {
            step: 2,
            title: 'Ghép thân đèn vào chân đế',
            description: 'Luồn vít từ dưới tấm đế lên, đặt thanh thân đèn vào lỗ tương ứng, dùng ngón tay vặn đai ốc vào khớp rồi dùng cờ lê giữ đai ốc, tay kia xoay tuốc nơ vít theo chiều kim đồng hồ.',
            checkQuestion: 'Thân đèn đã đứng vuông góc với chân đế chưa? Con thử lắc nhẹ xem có bị lung lay không?'
          }
        ]
      },
      {
        levelNumber: 2,
        name: 'Vận Dụng: "Thắp Sáng Ngọn Đèn Kì Diệu"',
        badge: 'Huy hiệu Bạc - Thợ Điện Thông Thái',
        badgeIcon: 'Award',
        tagline: 'Lắp mạch điện hoàn chỉnh có công tắc và chao đèn chống chói',
        goal: 'Gắn đui đèn, lắp mạch điện nối tiếp giữa pin, công tắc và bóng LED; gắn chao đèn bằng cốc giấy tái chế.',
        completionCriteria: [
          'Đạt toàn bộ tiêu chí mức 1.',
          'Mạch điện được đấu nối đúng kỹ thuật, các mối nối được bọc cách điện hoặc gài chắc chắn.',
          'Bấm công tắc: Đèn sáng ngay; bấm tắt: Đèn tắt hoàn toàn.',
          'Chao đèn che được ánh sáng chói lóa, tập trung ánh sáng xuống mặt bàn.'
        ],
        materials: ['Hộp đựng pin 3V', '2 viên pin AA', 'Bóng LED 3V', 'Công tắc gạt', 'Cốc giấy, kéo'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Lắp mạch điện nối tiếp',
            description: 'Dây đỏ (cực dương) của hộp pin nối vào 1 chân của công tắc. Chân còn lại của công tắc nối vào chân dài của bóng LED. Dây đen (cực âm) của hộp pin nối trực tiếp vào chân ngắn của bóng LED.',
            checkQuestion: 'Con đã nối các dây thành một vòng tròn khép kín chưa?'
          },
          {
            step: 2,
            title: 'Thử nghiệm công tắc',
            description: 'Lắp 2 viên pin đúng cực (+ vào +, - vào -), gạt công tắc để kiểm tra độ sáng.',
            checkQuestion: 'Bóng đèn có sáng rực rỡ không? Khi gạt tắt, đèn có tắt hẳn không?'
          },
          {
            step: 3,
            title: 'Lắp chao đèn bảo vệ mắt',
            description: 'Dùng đầu kéo đục 1 lỗ nhỏ đáy cốc giấy, lồng bóng đèn qua rồi cố định chao đèn vào đầu thân đèn.',
            checkQuestion: 'Khi cúi đầu học bài, mắt con có bị bóng đèn chiếu thẳng gây chói lóa không?'
          }
        ]
      },
      {
        levelNumber: 3,
        name: 'Sáng Tạo: "Đèn Bàn Thông Minh Đa Năng"',
        badge: 'Huy hiệu Vàng - Nhà Sáng Chế Tương Lai',
        badgeIcon: 'Zap',
        tagline: 'Cải tiến cổ ngỗng uốn dẻo, khay cắm bút hoặc trang trí thẩm mỹ',
        goal: 'Sáng tạo thêm khớp xoay linh hoạt để điều chỉnh độ cao/hướng rọi; tích hợp thêm ống cắm bút mini ở chân đế từ lõi cuộn chỉ hoặc vỏ lon tái chế.',
        completionCriteria: [
          'Đạt toàn bộ tiêu chí mức 2.',
          'Có khớp điều chỉnh được góc nghiêng thân đèn lên xuống tùy ý.',
          'Có thêm tiện ích phụ (ống cắm bút, thước kẻ) gắn liền thẩm mỹ và tiện dụng.',
          'Trang trí chao đèn hoa văn sáng tạo, bắt mắt.'
        ],
        materials: ['Khớp nối mềm/lò xo', 'Ống chỉ/lon giấy', 'Băng keo màu, decal'],
        stepByStepHints: [
          {
            step: 1,
            title: 'Tạo khớp gập thông minh',
            description: 'Thay vì dùng thanh thẳng cố định, hãy dùng 2 thanh ngắn nối với nhau bằng 1 vít có lò xo hoặc đai ốc hãm để có thể gập lên gập xuống khi đọc sách.',
            checkQuestion: 'Khớp nối gập xuống có giữ nguyên vị trí được không hay bị cụp đầu rơi xuống bàn?'
          },
          {
            step: 2,
            title: 'Gắn khay cắm bút học tập',
            description: 'Tận dụng lõi giấy hoặc hộp nhỏ dán chắc vào tấm đế để vừa thắp sáng vừa đựng bút thước gọn gàng.',
            checkQuestion: 'Khi cắm bút vào, đèn có bị mất thăng bằng ngã nghiêng không?'
          }
        ]
      }
    ],
    commonErrors: [
      {
        id: 'tech-err-1',
        errorDescription: 'Lắp xong toàn bộ mạch điện, gạt công tắc đi gạt lại nhiều lần nhưng bóng đèn LED vẫn tối om.',
        whyItHappens: 'Đèn LED là linh kiện bán dẫn có phân cực (cực dương chân dài, cực âm chân ngắn). Nếu đấu ngược cực pin hoặc lắp ngược viên pin trong khay, dòng điện một chiều không thể chạy qua.',
        guidingQuestions: [
          'Bóng đèn LED này có tính cách rất đặc biệt: bạn ấy chỉ chịu cho dòng điện đi theo đúng một chiều duy nhất! Con đã cắm đúng chân dài của bạn ấy vào cực dương (dây đỏ) chưa?',
          'Hai viên pin trong khay đã được đặt đúng chiều chưa? Đầu có núm tròn (+) chạm vào đâu, đầu phẳng lò xo (-) chạm vào đâu nhỉ?',
          'Các mối nối dây đồng có bị lỏng lẻo hay bị tuột ra không?'
        ],
        selfCheckAction: 'Tháo pin kiểm tra chiều cực; đổi ngược 2 đầu dây nối vào chân đèn LED; miết chặt lại các mối xoắn kim loại để tiếp xúc điện tốt.',
        teacherTip: 'Dùng thuật ngữ thân thiện: "Chân dài đi với dây đỏ tươi vui, chân ngắn đi với dây đen trầm tính".'
      },
      {
        id: 'tech-err-2',
        errorDescription: 'Thân đèn bị lỏng lẻo, gật gù như buồn ngủ, chỉ cần chạm nhẹ là ngã lăn ra bàn.',
        whyItHappens: 'Học sinh chỉ vặn ốc bằng tay mà không dùng dụng cụ, hoặc chỉ dùng tuốc nơ vít vặn trong khi đai ốc phía dưới bị quay trơn theo.',
        guidingQuestions: [
          'Con hãy nhìn tay của mình: Một tay con vặn tuốc nơ vít, vậy đai ốc ở phía dưới có đang chạy vòng tròn theo không?',
          'Người bạn cờ lê sinh ra để làm nhiệm vụ gì nhỉ? Nếu cờ lê không ôm chặt đai ốc thì vít có siết chặt được không?',
          'Con hãy thử nhờ bạn cùng bàn giữ cờ lê, hoặc tự kẹp cờ lê vào đai ốc rồi siết lại xem thân đèn có đứng sừng sững như cột cờ không nhé!'
        ],
        selfCheckAction: 'Dùng cờ lê ngậm chặt đai ốc bên dưới, tay thuận cầm tuốc nơ vít ấn sâu vào rãnh vít và xoay mạnh theo chiều kim đồng hồ đến khi chặt tay.',
        teacherTip: 'Rèn luyện kĩ năng thao tác kĩ thuật 2 tay phối hợp là mục tiêu cốt lõi của môn Công nghệ tiểu học.'
      }
    ],
    rubric: [
      {
        id: 'tech-rubric-1',
        criterionName: '1. Đáp ứng yêu cầu (Độ vững chắc cơ khí)',
        weight: '30%',
        levels: {
          needHelp: 'Các chi tiết lỏng lẻo, thiếu ốc vít, đèn không tự đứng vững được trên bàn.',
          proficient: 'Khung đèn lắp tương đối chắc chắn, đứng được trên bàn, có đủ chân đế và thân đèn.',
          good: 'Các mối ghép siết chặt, khung đèn vuông vắn, không bị lung lay khi gạt công tắc.',
          excellent: 'Kết cấu cơ khí hoàn hảo, có khớp chỉnh góc linh hoạt trơn tru, chịu lực tốt.'
        }
      },
      {
        id: 'tech-rubric-2',
        criterionName: '2. Hoạt động đúng (Mạch điện & Chức năng)',
        weight: '30%',
        levels: {
          needHelp: 'Mạch điện bị chập chờn, bóng đèn không sáng hoặc sáng mờ mịt; công tắc không có tác dụng.',
          proficient: 'Mạch điện hoạt động được, bật công tắc đèn sáng, tắt công tắc đèn tắt ổn định.',
          good: 'Mối nối điện gọn gàng, bọc cách điện an toàn, ánh sáng rọi đúng khu vực học tập qua chao đèn.',
          excellent: 'Mạch điện chuẩn kĩ thuật, dây dẫn bố trí ngầm hoặc nẹp gọn vào thân đèn rất chuyên nghiệp.'
        }
      },
      {
        id: 'tech-rubric-3',
        criterionName: '3. Có sáng tạo (Tái chế & Thẩm mỹ)',
        weight: '20%',
        levels: {
          needHelp: 'Không có chao đèn hoặc chỉ gắn một mảnh giấy nhăn nhúm che tạm bợ.',
          proficient: 'Có chao đèn bằng cốc giấy cắt gọt gọn gàng, che chắn ánh sáng chói lóa.',
          good: 'Trang trí chao đèn với họa tiết vẽ tay hoặc decal đẹp mắt, phối màu hài hòa.',
          excellent: 'Tận dụng thông minh vật liệu tái chế, tích hợp khay đựng bút độc đáo, giàu tính ứng dụng.'
        }
      },
      {
        id: 'tech-rubric-4',
        criterionName: '4. Thuyết minh cách làm & An toàn điện',
        weight: '20%',
        levels: {
          needHelp: 'Không nêu được tên các bộ phận hay đường đi của dòng điện trong mô hình.',
          proficient: 'Chỉ được cực pin, công tắc, bóng đèn và giải thích được nguyên lý bật/tắt.',
          good: 'Trình bày lưu loát quy trình lắp ráp và chia sẻ được cách xử lý khi đèn không sáng do ngược cực.',
          excellent: 'Thuyết trình tự tin về thông điệp tiết kiệm điện và cách bảo vệ mắt khi ngồi học đúng cự ly.'
        }
      }
    ],
    observationSheet: {
      title: 'Phiếu Quan Sát Năng Lực Thực Hành Kĩ Thuật & An Toàn Lao Động',
      instruction: 'Đánh giá tinh thần thực hành, sự kiên nhẫn và tuân thủ an toàn của học sinh Lớp 5.',
      items: [
        {
          id: 'tech-obs-1',
          behavior: '1. Sử dụng dụng cụ cầm tay đúng cách và an toàn',
          indicatorLevels: {
            low: 'Cầm tuốc nơ vít sai tư thế, dễ bị trượt làm trầy xước tay; để rơi ốc vít lung tung.',
            medium: 'Biết dùng tuốc nơ vít và cờ lê nhưng lực vặn còn yếu hoặc chưa đều tay.',
            high: 'Thao tác thuần thục, đúng tư thế kĩ thuật, giữ bàn làm việc ngăn nắp, thu gom ốc vít cẩn thận.'
          }
        },
        {
          id: 'tech-obs-2',
          behavior: '2. Tinh thần thử nghiệm và tư duy tìm nguyên nhân',
          indicatorLevels: {
            low: 'Đèn không sáng là đập bàn hoặc ngồi im đợi giáo viên sửa mạch.',
            medium: 'Tự tháo pin ra cắm lại theo cảm tính.',
            high: 'Tự lần theo sơ đồ mạch điện từ nguồn đến đèn, kiểm tra từng mối nối và chiều cực một cách có phương pháp.'
          }
        }
      ]
    },
    interestSurvey: {
      preSurvey: {
        title: 'Khảo Sát Hứng Thú Chế Tạo Đồ Dùng Kĩ Thuật',
        purpose: 'Khơi gợi niềm đam mê kĩ sư nhí và tinh thần tự chế đồ dùng hữu ích.',
        questions: [
          {
            id: 'tech-pre-1',
            question: 'Con hào hứng thế nào với thử thách tự tay chế tạo một chiếc đèn học thật thụ?',
            type: 'emoji-scale',
            options: ['Siêu hào hứng, con muốn làm ngay! (⚡)', 'Hơi tò mò không biết đèn có sáng không (💡)', 'Hơi sợ bị giật điện (nhưng pin 3V an toàn tuyệt đối nhé!) (🛡️)']
          }
        ]
      },
      postSurvey: {
        title: 'Cảm Nhận Sau Khi Chiếc Đèn Đầu Tiên Bừng Sáng',
        purpose: 'Ghi nhận niềm tự hào và ý thức tiết kiệm năng lượng.',
        questions: [
          {
            id: 'tech-post-1',
            question: 'Cảm giác của con lúc gạt công tắc và thấy bóng đèn bừng sáng lên thế nào?',
            type: 'emoji-scale',
            options: ['Vỡ òa sung sướng! Cảm giác như một nhà phát minh thực thụ (🏆)', 'Rất vui và nhẹ nhõm (🎉)', 'Hơi tiếc vì muốn làm thêm nhiều tính năng nữa (🚀)']
          },
          {
            id: 'tech-post-2',
            question: 'Con sẽ dùng chiếc đèn này ở đâu trong gia đình mình?',
            type: 'multiple-choice',
            options: ['Đặt ở góc bàn học để đọc sách mỗi tối', 'Làm đèn ngủ mini dịu mắt', 'Khoe với ông bà và cha mẹ', 'Để ở phòng khách làm kỉ niệm sản phẩm kĩ thuật lớp 5']
          }
        ]
      }
    },
    aiGovernance: {
      potentialHallucinations: [
        'AI có thể đưa ra sơ đồ mạch điện 220V dân dụng cực kỳ nguy hiểm cho học sinh tiểu học (ở tiểu học CHỈ ĐƯỢC DÙNG PIN DƯỚI 6V an toàn).',
        'AI có thể yêu cầu mỏ hàn thiếc, dao rọc giấy sắc nhọn hoặc keo nến nóng nguy cơ gây bỏng cho học sinh.'
      ],
      teacherVerificationChecklist: [
        'Bước 1: Tuyệt đối kiểm soát nguồn điện - chỉ cấp pin 1.5V - 3V hoặc cổng USB 5V phòng lab, cấm tiệt nguồn điện lưới 220V.',
        'Bước 2: Thay thế dao rọc giấy bằng kéo đầu tròn an toàn của học sinh.',
        'Bước 3: Chuẩn bị sẵn kẹp cá sấu hoặc giắc cắm nhanh để học sinh không phải dùng tay bện dây đồng quá chặt.'
      ],
      studentDataPrivacyRules: [
        'Khi học sinh viết nhật ký sáng chế hoặc dán nhãn sản phẩm, chỉ ghi "Kĩ sư nhí: [Tên]" không ghi họ tên đầy đủ, ngày tháng năm sinh hay địa chỉ nhà.',
        'Hình ảnh học sinh cầm sản phẩm chỉ lưu hành trong báo cáo chuyên môn của tổ bộ môn nhà trường.'
      ],
      safetyNotes: 'An toàn điện và an toàn dụng cụ cầm tay là ưu tiên số 1 của môn Công nghệ tiểu học.'
    },
    methodologyNote: 'Kế hoạch dạy học môn Công nghệ Lớp 5 bám sát định hướng giáo dục STEM và năng lực thực hành theo CT GDPT 2018. Tất cả thông số kĩ thuật về điện áp và dụng cụ đều tuân thủ Thông tư ban hành danh mục thiết bị dạy học tối thiểu cấp Tiểu học của Bộ GD&ĐT Việt Nam.'
  }
];
