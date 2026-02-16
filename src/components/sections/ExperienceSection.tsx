const experiences = [
  {
    role: "OJT Intern - Software Developer",
    company: "SPMC Hospital, Davao City",
    period: "2025 - Present",
    description: [
      "Developing a Hospital Referral System for all hospitals across Mindanao region",
      "System currently undergoing pilot testing phase (March 2025)",
      "Scheduled for 100% deployment and full implementation by April 2025",
    ],
  },
  {
    role: "Student Developer",
    company: "Hall of Justice Project",
    period: "2024",
    description: [
      "Developed a local system for Hall of Justice (not published online)",
      "Applied database management and programming skills in real-world scenario",
      "Collaborated with team members on system design and implementation",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance Projects",
    period: "2023 - Present",
    description: [
      "Built multiple web projects including fashion blogs, restaurant websites, and educational resources",
      "Developed responsive designs using HTML, CSS, and modern frameworks",
      "Created wireframes and UI/UX designs for various client projects",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md" />
              <div className="pb-8">
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-sm text-primary mb-2 font-medium">
                  {exp.company} · {exp.period}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
