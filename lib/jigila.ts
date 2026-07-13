import { Truck, EyeOff, MapPin, Info, Package, ShoppingBag } from "lucide-react";
import type {
  CaseStudyMeta,
  CaseStudyCard,
  ProjectGoal,
  KeyExperience,
} from "@/lib/case_study_types";

export const jigila_meta: CaseStudyMeta = {
  title: "Jigila Buy & Ship",
  description:
    "Cross-border shopping and shipping services are often fragmented, unclear, and difficult for users to trust. Users struggle with tracking orders, understanding shipping costs, and managing deliveries across different regions.",
  role: "Product designer",
  duration: "1 Month",
  tools: "Figma, Chatgpt",
  responsibility:
    "User Research, Wireframe, UI Design, Prototyping & Usability Testing",
  hero_image: "/jigila_banner.jpg",
};

export const jigila_figma_url =
  "https://www.figma.com/design/Yk9tp0dTHpIUPUxx9sYDHs/JIGILA-BUY-AND-SHIP?node-id=0-1&t=e6ht17jK4CQLb0OJ-1";

export const jigila_problem_statement =
  "Cross-border commerce involves multiple moving parts, including vendors, shipping providers, customs, and delivery tracking systems.";

export const jigila_problem_context =
  "The challenge was to unify these steps into a simple and transparent user experience. This project focused on creating a unified experience that simplifies the entire journey from product purchase to final delivery.";

export const jigila_problems: CaseStudyCard[] = [
  {
    icon: Truck,
    title: "Complex End-to-End Shipping Process",
    description:
      "Cross-border shopping involves multiple stages including purchase, warehouse handling, international shipping, and final delivery. The challenge was to simplify this into a clear and understandable user journey without overwhelming users.",
  },
  {
    icon: EyeOff,
    title: "Lack of Pricing Transparency",
    description:
      "Users often struggle with unclear shipping costs, hidden fees, and fluctuating delivery estimates. The challenge was to design a system that clearly communicates total costs and expectations upfront to build trust.",
  },
  {
    icon: MapPin,
    title: "Multi-Stage Order Tracking",
    description:
      "Shipments move through several logistics stages across different providers. The challenge was to create a unified tracking experience that gives users real-time visibility into their order status at every step.",
  },
];

export const jigila_solution_statement =
  "The platform was designed to simplify cross-border shopping by providing users with a transparent and connected experience from purchase to delivery.";

export const jigila_solution_context =
  "Clear shipping information, guided workflows, and real-time tracking help reduce uncertainty while building confidence throughout the logistics journey.";

export const jigila_solutions: CaseStudyCard[] = [
  {
    icon: Info,
    title: "Transparent Shipping Experience",
    description:
      "Designed clear pricing, delivery estimates, and shipping status updates to help users make informed decisions before placing an order.",
  },
  {
    icon: Package,
    title: "End-to-End Order Tracking",
    description:
      "Created a unified tracking interface that allows users to monitor every stage of their shipment from warehouse processing to final delivery.",
  },
  {
    icon: ShoppingBag,
    title: "Guided Purchase Journey",
    description:
      "Simplified the shopping and checkout experience with intuitive navigation and step-by-step workflows that reduce friction throughout the buying process.",
  },
];

export const jigila_goals: ProjectGoal[] = [
  {
    number: "01.",
    title: "Simplify Cross-Border Shopping",
    description:
      "Make it easy for users to purchase and ship items internationally without complexity.",
  },
  {
    number: "02.",
    title: "Improve Transparency",
    description:
      "Clearly display pricing, delivery timelines, and shipping progress.",
  },
  {
    number: "03.",
    title: "Build Trust",
    description:
      "Create a reliable and predictable experience through clear communication and tracking.",
  },
];

export const jigila_user_statement =
  "The platform serves individuals who purchase products from international stores and require reliable shipping and delivery services";

export const jigila_user_needs = [
  "Easy product purchase flow",
  "Clear shipping cost breakdown",
  "Real-time order tracking",
  "Reliable delivery updates",
  "Simple onboarding experience",
];

export const jigila_key_experiences: KeyExperience[] = [
  {
    number: "01.",
    title: "Product Discovery",
    description:
      "A clean browsing experience for selecting products from international stores",
  },
  {
    number: "02.",
    title: "Order Tracking Dashboard",
    description: "A real-time tracking interface showing each stage of delivery",
  },
  {
    number: "03.",
    title: "Warehouse Processing",
    description:
      "Visibility into package arrival, consolidation, and dispatch stages.",
  },
  {
    number: "04.",
    title: "Delivery Updates",
    description:
      "Clear notifications and status updates throughout the shipping journey",
  },
];
