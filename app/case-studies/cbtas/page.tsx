import Navbar from "@/app/components/navbar";
import CaseStudyHeader from "@/app/case-studies/components/case_study_header";
import ProblemSection from "@/app/case-studies/components/problem_section";
import SolutionSection from "@/app/case-studies/components/solution_section";
import FinalDesignSection from "@/app/case-studies/components/final_design_section";
import LiveLinkSection from "@/app/case-studies/components/live_link_section";
import {
  cbtas_meta,
  cbtas_problem_statement,
  cbtas_problem_context,
  cbtas_problems,
  cbtas_solution_statement,
  cbtas_solution_context,
  cbtas_solutions,
  cbtas_live_url,
  cbtas_figma_url,
} from "@/lib/cbtas";

export const metadata = {
  title: "CBTAS Website — Case Study | Ogoh Francis",
};

export default function CBTASPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyHeader meta={cbtas_meta} />
      <ProblemSection
        statement={cbtas_problem_statement}
        context={cbtas_problem_context}
        problems={cbtas_problems}
      />
      <SolutionSection
        solutions={cbtas_solutions}
        statement={cbtas_solution_statement}
        context={cbtas_solution_context}
      />
      <FinalDesignSection
        images={["/cbtas_one.svg", "/cbtas_two.svg", "/cbtas_three.svg"]}
        imageAlt="CBTAS Website final design screen"
        frameBg="bg-[#A2D6C0]"
      />
      <LiveLinkSection label="Live Link to Figma Files" url={cbtas_figma_url} />
      <LiveLinkSection url={cbtas_live_url} />
    </div>
  );
}
