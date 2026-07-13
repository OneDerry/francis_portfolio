import Navbar from "@/app/components/navbar";
import CaseStudyHeader from "@/app/case-studies/components/case_study_header";
import ProblemSection from "@/app/case-studies/components/problem_section";
import SolutionSection from "@/app/case-studies/components/solution_section";
import ProjectGoalsSection from "@/app/case-studies/components/project_goals_section";
import UsersSection from "@/app/case-studies/components/users_section";
import KeyExperiencesSection from "@/app/case-studies/components/key_experiences_section";
import FinalDesignSection from "@/app/case-studies/components/final_design_section";
import LiveLinkSection from "@/app/case-studies/components/live_link_section";
import {
  jigila_meta,
  jigila_figma_url,
  jigila_problem_statement,
  jigila_problem_context,
  jigila_problems,
  jigila_solution_statement,
  jigila_solution_context,
  jigila_solutions,
  jigila_goals,
  jigila_user_statement,
  jigila_user_needs,
  jigila_key_experiences,
} from "@/lib/jigila";

export const metadata = {
  title: "Jigila Buy & Ship — Case Study | Ogoh Francis",
};

export default function JigilaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyHeader meta={jigila_meta} />
      <ProblemSection
        statement={jigila_problem_statement}
        context={jigila_problem_context}
        problems={jigila_problems}
      />
      <SolutionSection
        solutions={jigila_solutions}
        statement={jigila_solution_statement}
        context={jigila_solution_context}
      />
      <ProjectGoalsSection goals={jigila_goals} />
      <UsersSection statement={jigila_user_statement} needs={jigila_user_needs} />
      <KeyExperiencesSection experiences={jigila_key_experiences} />
      <FinalDesignSection
        images={[
          "/jigila_img_one.png",
          "/jigila_img_two.png",
          "/jigila_img_three.png",
        ]}
        imageAlt="Jigila Buy & Ship final design screen"
      />
      <LiveLinkSection label="Live Link to Figma Files" url={jigila_figma_url} />
      <LiveLinkSection note="Currently under development" />
    </div>
  );
}
