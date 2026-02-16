const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML/CSS", "React", "Node.js", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    category: "Data & Tools",
    items: ["MySQL", "MongoDB", "VS Code", "Linux", "Docker", "Figma"],
  },
  {
    category: "Core CS",
    items: ["Data Structures", "Algorithms", "OOP", "OS Concepts", "Networking", "DBMS"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Skills & Technologies</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="card-glass p-6 hover-lift"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <h3 className="mono text-sm text-primary mb-4 font-medium">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border/50 hover:border-primary/30 hover:text-primary transition-colors"
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
