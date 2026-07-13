import type { LucideIcon } from "lucide-react";

export type CaseStudyMeta = {
  title: string;
  description: string;
  role: string;
  duration: string;
  tools: string;
  responsibility: string;
  hero_bg?: string;
  hero_image?: string;
};

export type CaseStudyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProjectGoal = {
  number: string;
  title: string;
  description: string;
};

export type KeyExperience = {
  number: string;
  title: string;
  description: string;
};
