import { Info, Wifi, EyeOff } from "lucide-react";
import type { CaseStudyMeta, CaseStudyCard } from "@/lib/case_study_types";

export const cbtas_meta: CaseStudyMeta = {
  title: "Central Billing and Tax Administrative System(CBTAS) Website",
  description:
    "CBTAS is a digital tax administration platform designed to simplify how citizens and businesses interact with tax services. The platform centralizes registration, tax assessment, billing, payments, compliance tracking, and account management into a single digital experience.",
  role: "Product designer",
  duration: "4 Months",
  tools: "Figma, Chatgpt",
  responsibility:
    "User Research, Wireframe, UI Design, Prototyping & Usability Testing",
  hero_bg: "bg-[oklch(0.52_0.12_145)]",
  hero_image: "/cbtas_web_banner.png",
};

export const cbtas_problem_statement =
  "Legacy manual systems were bleeding potential revenue and eroding citizen trust.";

export const cbtas_problem_context =
  "Nasarawa's tax infrastructure relied on paper-heavy workflows, leading to significant delays and unverified transactions. This manual friction prevented small businesses from complying with local regulations.";

export const cbtas_problems: CaseStudyCard[] = [
  {
    icon: Info,
    title: "Manual Errors",
    description:
      "Inconsistent data entry leading to reconciliation nightmares for accounting teams.",
  },
  {
    icon: Wifi,
    title: "Revenue Leakages",
    description:
      "Untracked cash payments resulting in up to 30% loss of potential state income.",
  },
  {
    icon: EyeOff,
    title: "Lack of Transparency",
    description:
      "Citizen had no digital proof of payment, creating fear of double taxation.",
  },
];

export const cbtas_solution_statement =
  "The solution focused on transforming complex tax administration processes into a streamlined digital experience.";

export const cbtas_solution_context =
  "By simplifying navigation, improving information hierarchy, and creating guided workflows, the platform enables taxpayers to complete essential tasks more efficiently while giving revenue administrators a scalable system for managing digital tax services.";

export const cbtas_solutions: CaseStudyCard[] = [
  {
    icon: Info,
    title: "Simplified Tax Workflows",
    description:
      "Designed intuitive user journeys for registration, tax assessment, billing, and payments, reducing the complexity of completing tax-related tasks",
  },
  {
    icon: Wifi,
    title: "Centralized User Dashboard",
    description:
      "Created a single dashboard where users can access tax records, outstanding bills, payment history, and compliance information from one place",
  },
  {
    icon: EyeOff,
    title: "Scalable Design System",
    description:
      "Developed a consistent component library and design system to support future platform expansion while maintaining a cohesive user experience.",
  },
];

export const cbtas_live_url = "www.cbtasnasarawa.gov.org";

// TODO: paste the CBTAS Website Figma file link here — the section stays hidden while empty
export const cbtas_figma_url = "";
