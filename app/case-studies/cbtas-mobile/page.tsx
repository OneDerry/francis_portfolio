import Navbar from "@/app/components/navbar";
import CaseStudyHeader from "@/app/case-studies/components/case_study_header";
import ProblemSection from "@/app/case-studies/components/problem_section";
import SolutionSection from "@/app/case-studies/components/solution_section";
import FinalDesignSection from "@/app/case-studies/components/final_design_section";
import ConfidentialityNotice from "@/app/case-studies/components/confidentiality_notice";
import {
  cbtas_mobile_meta,
  cbtas_problem_statement,
  cbtas_problem_context,
  cbtas_problems,
  cbtas_solution_statement,
  cbtas_solution_context,
  cbtas_solutions,
} from "@/lib/cbtas_mobile";

export const metadata = {
  title: "CBTAS Mobile App — Case Study | Ogoh Francis",
};

export default function CBTASMobilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyHeader meta={cbtas_mobile_meta} />
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
        image="/cbtas_final_design.png"
        imageAlt="CBTAS Mobile App final design screens"
      />
      <ConfidentialityNotice />
    </div>
  );
}
