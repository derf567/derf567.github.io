import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of the Immaculate Conception",
    period: "2022 - Present",
    gpa: "In Progress",
    highlights: [
      "2022: Programming 1 - Foundation in programming concepts and logic",
      "2023: Python Basics & Database Management - Data structures and SQL",
      "2024: Hall of Justice Project - Local system development (not published)",
      "2025: OJT at SPMC Hospital - Hospital Referral System (Pilot Testing)",
      "Published Thesis: ClearSight - AI-based surveillance footage restoration (AICCC)",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-white animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-sm text-primary mb-2 font-medium">
                    {edu.school} · {edu.period}
                  </p>
                  <p className="text-muted-foreground mb-3">GPA: {edu.gpa}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
