import { useState, useEffect } from "react";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import IntroductionSection from "@/components/sections/IntroductionSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import StatusSection from "@/components/sections/StatusSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  { id: "introduction", component: IntroductionSection },
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSection },
  { id: "skills", component: SkillsSection },
  { id: "experience", component: ExperienceSection },
  { id: "education", component: EducationSection },
  { id: "contact", component: ContactSection },
  { id: "status", component: StatusSection },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  const CurrentComponent = sections[currentPage].component;

  return (
    <div className="min-h-screen bg-background">
      <PortfolioSidebar activeSection={sections[currentPage].id} onNavigate={goToPage} />
      <main className="md:ml-64 min-h-screen flex flex-col">
        <div className="flex-1 animate-fade-in">
          <CurrentComponent key={currentPage} />
        </div>
        
        {/* Navigation Controls */}
        <div className="sticky bottom-0 bg-white border-t border-border shadow-lg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentPage === 0}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                currentPage === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={currentPage === sections.length - 1}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                currentPage === sections.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md hover:shadow-lg"
              }`}
            >
              <span className="sm:hidden">Next</span>
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
