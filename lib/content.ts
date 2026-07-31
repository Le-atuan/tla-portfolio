export type Locale = "en" | "vi";

export interface Profile {
  name: string;
  role: string;
  pitch: string;
  bio: string;
  location: string;
  focus: string;
  currently: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string | null;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  summary: string;
  image: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Skills {
  engineering: string[];
  design: string[];
  tooling: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  dates: string;
  note?: string;
}

export interface Language {
  name: string;
  level: string;
  note?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface NavLabels {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
  resume: string;
  availability: string;
}

export interface ContactCopy {
  heading: string;
  subheading: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  requiredError: string;
  emailError: string;
}

export interface AboutFactLabels {
  location: string;
  focus: string;
  currently: string;
}

export interface SectionLabels {
  metrics: string;
  about: string;
  projects: string;
  skills: string;
  experience: string;
  education: string;
  languages: string;
  testimonials: string;
}

export interface ContentShape {
  profile: Profile;
  metrics: Metric[];
  projects: Project[];
  skills: Skills;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  languages: Language[];
  testimonials: Testimonial[];
  nav: NavLabels;
  contact: ContactCopy;
  sections: SectionLabels;
  aboutLabels: AboutFactLabels;
  footer: { copyright: string };
}

const sharedProfile = {
  email: "tuanlea22@gmail.com",
  github: "https://github.com/Le-atuan",
  linkedin: "https://www.linkedin.com/in/tuanlea22/",
  resumeUrl: "/Le_Anh_Tuan_CV.pdf",
  avatarUrl: null,
};

const sharedProjectLinks = [
  { liveUrl: "https://aurora.tla.dev", repoUrl: "https://github.com/tla-dev/aurora-analytics" },
  { liveUrl: "https://nimbus.tla.dev", repoUrl: "https://github.com/tla-dev/nimbus-ui" },
  { liveUrl: "https://forge.tla.dev", repoUrl: "https://github.com/tla-dev/forge-cli" },
  { liveUrl: "https://pulse.tla.dev", repoUrl: "https://github.com/tla-dev/pulse-realtime" },
];

const sharedStacks = [
  ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
  ["React", "Vite", "Radix UI", "Storybook"],
  ["Rust", "WASM", "Node.js"],
  ["Next.js", "WebSockets", "Redis", "Docker"],
];

const sharedEducationLinks = [
  { dates: "2016 – 2020" },
  { dates: "2021" },
];

export const content: Record<Locale, ContentShape> = {
  en: {
    profile: {
      ...sharedProfile,
      name: "Le Anh Tuan",
      role: "Senior Frontend Engineer",
      pitch:
        "I build fast, accessible web products — from design system to production, with a bias for measurable impact.",
      bio:
        "I'm a frontend engineer who enjoys the full stretch of building a product: turning a rough idea into a design system, then into an interface that's fast, accessible, and pleasant to use. Over the past 2 years I've worked across fintech, developer tools, and early-stage startups — usually as the person who owns frontend architecture end to end, from performance budgets to component libraries. I care about measurable outcomes over busywork: shipping features that move a real metric, not just checking a box. Outside of client work I contribute to open-source tooling and mentor junior engineers on React and accessibility.",
      location: "Ho Chi Minh City, Vietnam",
      focus: "Frontend architecture & performance",
      currently: "Building a real-time analytics dashboard for a fintech platform",
    },
    metrics: [
      { label: "Years of experience", value: "2+" },
      { label: "Projects shipped", value: "8+" },
      { label: "Lighthouse score", value: ">85" },
      { label: "Bundle size win", value: "-42%" },
    ],
    projects: [
      {
        name: "Aurora Analytics",
        summary: "Real-time analytics dashboard that cut p95 query latency by 68% for 50k+ daily active users.",
        image: "/projects/aurora.svg",
        stack: sharedStacks[0],
        ...sharedProjectLinks[0],
      },
      {
        name: "Nimbus UI",
        summary: "Open-source component library adopted by 12 internal teams, cutting new-feature build time by 30%.",
        image: "/projects/nimbus.svg",
        stack: sharedStacks[1],
        ...sharedProjectLinks[1],
      },
      {
        name: "Forge CLI",
        summary: "Scaffolding tool that reduced new-service bootstrap time from 2 days to 15 minutes.",
        image: "/projects/forge.svg",
        stack: sharedStacks[2],
        ...sharedProjectLinks[2],
      },
      {
        name: "Pulse Realtime",
        summary: "WebSocket-based collaboration layer supporting 10k concurrent sessions at 99.98% uptime.",
        image: "/projects/pulse.svg",
        stack: sharedStacks[3],
        ...sharedProjectLinks[3],
      },
    ],
    skills: {
      engineering: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "PostgreSQL"],
      design: ["Design systems", "Figma", "Accessibility (WCAG)", "Motion design", "Prototyping"],
      tooling: ["Vite", "Turborepo", "Playwright", "Docker", "CI/CD", "Performance profiling"],
    },
    experience: [
      {
        role: "Senior Frontend Engineer",
        company: "Fintech Co.",
        dates: "2023 — Present",
        bullets: [
          "Led migration to Next.js App Router, cutting Time to Interactive by 45%.",
          "Built a shared design system adopted across 5 product squads.",
          "Mentored 3 mid-level engineers through structured pairing and reviews.",
        ],
      },
      {
        role: "Frontend Engineer",
        company: "Nimbus Labs",
        dates: "2021 — 2023",
        bullets: [
          "Shipped the company's first accessible component library, reaching WCAG AA across 40+ components.",
          "Reduced bundle size by 42% through code-splitting and dependency audits.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Startup Studio",
        dates: "2019 — 2021",
        bullets: [
          "Built and launched 4 MVP products from zero to first paying customer.",
          "Owned CI/CD pipeline setup, cutting deploy time from 20 minutes to 3.",
        ],
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "B.Eng. in Computer Science",
        note: "Honors graduate, relevant coursework in distributed systems",
        ...sharedEducationLinks[0],
      },
      {
        institution: "Frontend Masters",
        degree: "Advanced React & Performance certification",
        ...sharedEducationLinks[1],
      },
    ],
    languages: [
      { name: "Vietnamese", level: "Native" },
      { name: "English", level: "Professional working proficiency", note: "TOEIC 900" },
    ],
    testimonials: [
      {
        quote: "One of the sharpest frontend engineers I've worked with — ships fast without cutting corners on quality.",
        name: "Minh Tran",
        role: "Engineering Manager",
        company: "Fintech Co.",
      },
      {
        quote: "Turned our design system from a slide deck into something every team actually uses.",
        name: "Lan Pham",
        role: "Product Designer",
        company: "Nimbus Labs",
      },
      {
        quote: "Consistently the person who finds the root cause instead of the quick patch.",
        name: "David Nguyen",
        role: "CTO",
        company: "Startup Studio",
      },
    ],
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
      availability: "Open to work",
    },
    contact: {
      heading: "Let's build something",
      subheading: "Have a project in mind or just want to say hi? My inbox is open.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sending: "Sending...",
      success: "Thanks — I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
      requiredError: "This field is required.",
      emailError: "Enter a valid email address.",
    },
    sections: {
      metrics: "By the numbers",
      about: "About",
      projects: "Selected work",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      testimonials: "What people say about me",
    },
    aboutLabels: {
      location: "Location",
      focus: "Focus",
      currently: "Currently",
    },
    footer: { copyright: "All rights reserved." },
  },
  vi: {
    profile: {
      ...sharedProfile,
      name: "Lê Anh Tuấn",
      role: "Kỹ sư Frontend cấp cao",
      pitch:
        "Tôi xây dựng sản phẩm web nhanh, dễ tiếp cận — từ design system đến production, luôn hướng tới tác động đo lường được.",
      bio:
        "Tôi là kỹ sư frontend thích đồng hành với sản phẩm trên toàn bộ hành trình: từ một ý tưởng thô sơ thành design system, rồi thành giao diện nhanh, dễ tiếp cận và thoải mái khi sử dụng. Trong hơn 6 năm qua, tôi đã làm việc trong các lĩnh vực fintech, công cụ cho lập trình viên và các startup giai đoạn đầu — thường là người phụ trách kiến trúc frontend từ đầu đến cuối, từ ngân sách hiệu năng đến thư viện component. Tôi coi trọng kết quả đo lường được hơn là khối lượng công việc: triển khai những tính năng thực sự tác động đến một chỉ số cụ thể, chứ không chỉ để hoàn thành nhiệm vụ. Ngoài công việc, tôi đóng góp cho các dự án mã nguồn mở và hướng dẫn các kỹ sư trẻ về React và khả năng tiếp cận (accessibility).",
      location: "TP. Hồ Chí Minh, Việt Nam",
      focus: "Kiến trúc Frontend & hiệu năng",
      currently: "Đang xây dựng dashboard phân tích thời gian thực cho một nền tảng fintech",
    },
    metrics: [
      { label: "Năm kinh nghiệm", value: "2+" },
      { label: "Dự án đã triển khai", value: "8+" },
      { label: "Điểm Lighthouse", value: ">85" },
      { label: "Giảm dung lượng bundle", value: "-42%" },
    ],
    projects: [
      {
        name: "Aurora Analytics",
        summary: "Dashboard phân tích thời gian thực giúp giảm 68% độ trễ truy vấn p95 cho hơn 50.000 người dùng hoạt động mỗi ngày.",
        image: "/projects/aurora.svg",
        stack: sharedStacks[0],
        ...sharedProjectLinks[0],
      },
      {
        name: "Nimbus UI",
        summary: "Thư viện component mã nguồn mở được 12 đội nội bộ sử dụng, giảm 30% thời gian xây dựng tính năng mới.",
        image: "/projects/nimbus.svg",
        stack: sharedStacks[1],
        ...sharedProjectLinks[1],
      },
      {
        name: "Forge CLI",
        summary: "Công cụ scaffolding giúp giảm thời gian khởi tạo dịch vụ mới từ 2 ngày xuống còn 15 phút.",
        image: "/projects/forge.svg",
        stack: sharedStacks[2],
        ...sharedProjectLinks[2],
      },
      {
        name: "Pulse Realtime",
        summary: "Lớp cộng tác thời gian thực dựa trên WebSocket, hỗ trợ 10.000 phiên đồng thời với uptime 99.98%.",
        image: "/projects/pulse.svg",
        stack: sharedStacks[3],
        ...sharedProjectLinks[3],
      },
    ],
    skills: {
      engineering: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "PostgreSQL"],
      design: ["Design system", "Figma", "Khả năng tiếp cận (WCAG)", "Thiết kế chuyển động", "Prototyping"],
      tooling: ["Vite", "Turborepo", "Playwright", "Docker", "CI/CD", "Phân tích hiệu năng"],
    },
    experience: [
      {
        role: "Kỹ sư Frontend cấp cao",
        company: "Fintech Co.",
        dates: "2023 — Hiện tại",
        bullets: [
          "Dẫn dắt việc di chuyển sang Next.js App Router, giảm 45% Time to Interactive.",
          "Xây dựng design system dùng chung, được 5 nhóm sản phẩm áp dụng.",
          "Hướng dẫn 3 kỹ sư middle thông qua pairing và review có cấu trúc.",
        ],
      },
      {
        role: "Kỹ sư Frontend",
        company: "Nimbus Labs",
        dates: "2021 — 2023",
        bullets: [
          "Ra mắt thư viện component có khả năng tiếp cận đầu tiên của công ty, đạt chuẩn WCAG AA trên hơn 40 component.",
          "Giảm 42% dung lượng bundle nhờ code-splitting và rà soát dependency.",
        ],
      },
      {
        role: "Kỹ sư phần mềm",
        company: "Startup Studio",
        dates: "2019 — 2021",
        bullets: [
          "Xây dựng và ra mắt 4 sản phẩm MVP từ đầu đến khách hàng trả phí đầu tiên.",
          "Phụ trách thiết lập CI/CD, giảm thời gian deploy từ 20 phút xuống còn 3 phút.",
        ],
      },
    ],
    education: [
      {
        institution: "Đại học Bách Khoa",
        degree: "Kỹ sư Khoa học Máy tính",
        note: "Tốt nghiệp loại giỏi, chuyên sâu về hệ thống phân tán",
        ...sharedEducationLinks[0],
      },
      {
        institution: "Frontend Masters",
        degree: "Chứng chỉ React & Performance nâng cao",
        ...sharedEducationLinks[1],
      },
    ],
    languages: [
      { name: "Tiếng Việt", level: "Bản ngữ" },
      { name: "Tiếng Anh", level: "Thành thạo chuyên môn", note: "TOEIC 900" },
    ],
    testimonials: [
      {
        quote: "Một trong những kỹ sư frontend giỏi nhất tôi từng làm việc cùng — triển khai nhanh mà vẫn giữ chất lượng.",
        name: "Minh Trần",
        role: "Engineering Manager",
        company: "Fintech Co.",
      },
      {
        quote: "Biến design system của chúng tôi từ một bản slide thành thứ mọi đội đều thực sự sử dụng.",
        name: "Lan Phạm",
        role: "Product Designer",
        company: "Nimbus Labs",
      },
      {
        quote: "Luôn là người tìm ra nguyên nhân gốc rễ thay vì chỉ vá tạm thời.",
        name: "David Nguyễn",
        role: "CTO",
        company: "Startup Studio",
      },
    ],
    nav: {
      about: "Giới thiệu",
      projects: "Dự án",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      contact: "Liên hệ",
      resume: "CV",
      availability: "Sẵn sàng nhận việc",
    },
    contact: {
      heading: "Cùng xây dựng điều gì đó",
      subheading: "Có dự án trong đầu hay chỉ muốn chào hỏi? Hộp thư của tôi luôn mở.",
      nameLabel: "Họ tên",
      emailLabel: "Email",
      messageLabel: "Lời nhắn",
      namePlaceholder: "Tên của bạn",
      emailPlaceholder: "ban@vidu.com",
      messagePlaceholder: "Kể tôi nghe về dự án của bạn...",
      submit: "Gửi tin nhắn",
      sending: "Đang gửi...",
      success: "Cảm ơn — tôi sẽ phản hồi sớm nhất.",
      error: "Có lỗi xảy ra. Vui lòng thử lại.",
      requiredError: "Trường này là bắt buộc.",
      emailError: "Vui lòng nhập email hợp lệ.",
    },
    sections: {
      metrics: "Con số nổi bật",
      about: "Giới thiệu",
      projects: "Dự án tiêu biểu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      languages: "Ngôn ngữ",
      testimonials: "Mọi người nói gì về tôi",
    },
    aboutLabels: {
      location: "Vị trí",
      focus: "Trọng tâm",
      currently: "Hiện tại",
    },
    footer: { copyright: "Bảo lưu mọi quyền." },
  },
};
