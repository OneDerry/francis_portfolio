import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import ProjectsSection from "@/app/components/projects_section";
import ServicesSection from "@/app/components/services_section";
import AboutSection from "@/app/components/about_section";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
