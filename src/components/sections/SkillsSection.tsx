const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C#", "C++", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Django", "Firebase", "Laravel", "React", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "VS Code", "Linux", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Interests & Hobbies",
    items: ["Gaming", "Sports", "Motorbike", "Web Design", "Problem Solving"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-white animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Skills & Technologies</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <h3 className="text-sm text-primary mb-4 font-semibold uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-gray-50 text-foreground rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
