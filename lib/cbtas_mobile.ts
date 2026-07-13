import type { CaseStudyMeta } from "@/lib/case_study_types";

// Problem and solution content is identical to the CBTAS Website — same project, different platform
export {
  cbtas_problem_statement,
  cbtas_problem_context,
  cbtas_problems,
  cbtas_solution_statement,
  cbtas_solution_context,
  cbtas_solutions,
} from "@/lib/cbtas";

export const cbtas_mobile_meta: CaseStudyMeta = {
  title: "Central Billing and Tax Administrative System(CBTAS) Mobile App",
  description:
    "Harmonizing revenue collection and digital governance for the Nasarawa State Internal Revenue Service through a seamless payment ecosystem.",
  role: "Product designer",
  duration: "4 Months",
  tools: "Figma, Chatgpt",
  responsibility:
    "User Research, Wireframe, UI Design, Prototyping & Usability Testing",
  hero_bg: "bg-[oklch(0.32_0.04_192)]",
  hero_image: "/cbtas_banner.png",
};
