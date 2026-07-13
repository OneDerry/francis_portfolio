import Navbar from "@/app/components/navbar";
import CaseStudyHeader from "@/app/case-studies/components/case_study_header";
import ProblemSection from "@/app/case-studies/components/problem_section";
import SolutionSection from "@/app/case-studies/components/solution_section";
import FinalDesignSection from "@/app/case-studies/components/final_design_section";
import ConfidentialityNotice from "@/app/case-studies/components/confidentiality_notice";
import {
  ippis_meta,
  ippis_problem_statement,
  ippis_problem_context,
  ippis_problems,
  ippis_solution_statement,
  ippis_solution_context,
  ippis_solutions,
} from "@/lib/ippis";

export const metadata = {
  title: "IPPIS Mobile App — Case Study | Ogoh Francis",
};

export default function IPPISPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyHeader meta={ippis_meta} />
      <ProblemSection
        statement={ippis_problem_statement}
        context={ippis_problem_context}
        problems={ippis_problems}
      />
      <SolutionSection
        solutions={ippis_solutions}
        statement={ippis_solution_statement}
        context={ippis_solution_context}
      />
      <FinalDesignSection
        image="/ippis_final_design.png"
        imageAlt="IPPIS Mobile App final design screens"
      />
      <ConfidentialityNotice />
    </div>
  );
}
