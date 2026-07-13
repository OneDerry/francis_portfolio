import {
  LayoutGrid,
  Globe,
  Smartphone,
  Layers,
  Phone,
  Camera,
  Mail,
  X,
  type LucideIcon,
} from "lucide-react";

export const nav_links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type ProjectLayout = "featured" | "card" | "wide";

export type Project = {
  id: string;
  layout: ProjectLayout;
  title: string;
  tags: string[];
  description: string;
  image_bg: string;
  image?: string;
  case_study_href?: string;
};

export const projects: Project[] = [
  {
    id: "jigila",
    layout: "wide",
    title: "Jigila Buy & Ship",
    tags: ["LOGISTICS", "WEB"],
    description:
      "Simplifying international logistics and cross-border shopping for thousands of users in West Africa.",
    image_bg: "bg-[oklch(0.32_0.04_192)]",
    image: "/jigila.png",
    case_study_href: "/case-studies/jigila",
  },

  {
    id: "ippis-mobile",
    layout: "card",
    title: "IPPIS Mobile App",
    tags: ["FINTECH", "MOBILE", "GOV TECH"],
    description:
      "Government integrated payroll and personnel information system reimagined for mobile accessibility.",
    image_bg: "bg-[oklch(0.48_0.10_165)]",
    image: "/blur_ippis_mobile.png",
    case_study_href: "/case-studies/ippis",
  },
  {
    id: "cbtas-mobile",
    layout: "card",
    title: "CBTAS Mobile App",
    tags: ["FINTECH", "WEB", "MOBILE", "GOV TECH"],
    description:
      "A comprehensive tax administration system designed to streamline compliance for emerging economies.",
    image_bg: "bg-[oklch(0.32_0.04_192)]",
    image: "/blur_cbtas_mobile.png",
    case_study_href: "/case-studies/cbtas-mobile",
  },
  {
    id: "cbtas-website",
    layout: "featured",
    title: "CBTAS Website",
    tags: ["FINTECH", "MOBILE", "WEB", "GOV TECH"],
    description:
      "CBTAS is a digital tax administration platform designed to simplify how citizens and businesses interact with tax services. The platform centralises registration, tax assessment, billing, payments, compliance tracking, and account management into a single digital experience.",
    image_bg: "bg-[oklch(0.52_0.12_145)]",
    image: "/cbtasWeb.png",
    case_study_href: "/case-studies/cbtas",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "End-to-end product design focusing on user-centered principles and measurable outcomes.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "High-performance SaaS marketing sites and complex web applications built for scale.",
  },
  {
    icon: Smartphone,
    title: "App Design",
    description:
      "Crafting scalable mobile apps with seamless and user-friendly experiences.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable, documented component libraries that empower development teams.",
  },
];

export const toolkit = [
  "Figma",
  "UX Research",
  "Prototyping",
  "Design Systems",
  "Product Branding",
];

export type Contact = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const contacts: Contact[] = [
  { icon: Phone, label: "08166967203", href: "tel:08166967203" },
  {
    icon: Camera,
    label: "@iam_franco",
    href: "https://instagram.com/iam_franco",
  },
  {
    icon: Mail,
    label: "ogoh.francis@yahoo.com",
    href: "mailto:ogoh.francis@yahoo.com",
  },
  { icon: X, label: "@franco1nc1", href: "https://x.com/franco1nc1" },
];
