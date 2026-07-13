import { Info, Layers, Users, Monitor, Navigation, Repeat } from "lucide-react";
import type { CaseStudyMeta, CaseStudyCard } from "@/lib/case_study_types";

export const ippis_meta: CaseStudyMeta = {
  title: "Integrated Payroll and Personnel Information System(IPPIS) Mobile App",
  description:
    "The IPPIS Mobile App was designed to provide Nigerian public sector employees with a more accessible way to manage payroll-related activities, access employment information, and interact with essential workforce services from their mobile devices",
  role: "Product designer",
  duration: "4 Months",
  tools: "Figma, Chatgpt",
  responsibility:
    "User Research, Wireframe, UI Design, Prototyping & Usability Testing",
  hero_bg: "bg-[oklch(0.48_0.10_165)]",
  hero_image: "/ippis_banner.jpg",
};

export const ippis_problem_statement =
  "The objective was to create a centralized platform that simplifies these interactions while improving usability and engagement.";

export const ippis_problem_context =
  "The challenge was to design a mobile-first experience that allows users to access these services quickly while maintaining clarity and ease of use. The existing experience required users to navigate complex administrative processes to access payroll and employment-related information.";

export const ippis_problems: CaseStudyCard[] = [
  {
    icon: Info,
    title: "Information Overload",
    description:
      "The system contained large volumes of payroll and employment data, making it difficult for users to quickly locate relevant information such as payslips, loans, and notifications.",
  },
  {
    icon: Layers,
    title: "Complex Navigation Structure",
    description:
      "Critical features were buried within layered menus, leading to inefficient user journeys and increased time spent completing simple tasks.",
  },
  {
    icon: Users,
    title: "Accessibility for Diverse Users",
    description:
      "The platform needed to serve a wide range of government employees with varying levels of digital literacy, requiring a highly intuitive and self-explanatory interface.",
  },
];

export const ippis_solution_statement =
  "The mobile experience was designed to give government employees quick and secure access to payroll services through a clean, mobile-first interface.";

export const ippis_solution_context =
  "By prioritizing frequently used features and simplifying navigation, the app reduces friction and improves access to essential employment information";

export const ippis_solutions: CaseStudyCard[] = [
  {
    icon: Monitor,
    title: "Mobile-First Dashboard",
    description:
      "Designed a personalized dashboard that surfaces key information such as payslips, loan details, notifications, and account updates at a glance.",
  },
  {
    icon: Navigation,
    title: "Streamlined Service Navigation",
    description:
      "Reorganized the application's structure to help users access core services quickly without navigating through multiple screens.",
  },
  {
    icon: Repeat,
    title: "Consistent User Experience",
    description:
      "Built reusable interface patterns and standardized components to create a familiar, intuitive experience across the application",
  },
];
