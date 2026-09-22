export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  role: string;
  techStack: string[];
  github?: string;
  image?: string;
  sourceNote?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "enterprise-ops",
    title: "企业管理后台",
    category: "企业后台 / 全栈",
    description:
      "围绕发货、应收、回款、财务核销和客户经营预警建设的企业管理后台。",
    role: "全栈开发",
    techStack: [
      "Java 17",
      "Spring Boot",
      "MyBatis-Plus",
      "Sa-Token",
      "Vue 3",
      "TypeScript",
      "Vite",
      "Element Plus",
      "Pinia",
    ],
    image: "/images/enterprise-ops.svg",
    sourceNote: "源码不开源",
    featured: true,
  },
  {
    slug: "cultural-miniapp",
    title: "文创商品小程序",
    category: "小程序 / 电商运营",
    description:
      "管理端面向运营，覆盖看板统计、商品（多规格 / 富文本）、品牌、订单售后、会员、营销、广告、消息反馈与角色权限；用户端为 uni-app 四 Tab（首页 / 分类 / 购物车 / 个人中心）。管理端使用 ECharts 做数据展示。",
    role: "全栈开发",
    techStack: ["uni-app", "Vue", "ECharts"],
    image: "/images/cultural-miniapp.svg",
    sourceNote: "源码不开源",
  },
  {
    slug: "off-work-countdown",
    title: "下班倒计时",
    category: "Android 应用",
    description: "基于 Android 独立开发的下班倒计时应用。",
    role: "独立开发",
    techStack: ["Android"],
    image: "/images/off-work-countdown.svg",
    sourceNote: "GitHub 后续补充",
  },
];
