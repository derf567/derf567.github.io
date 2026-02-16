import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ClearSight: Forensic-Quality Surveillance Restoration",
    description: "Published research paper on AICCC. A Hierarchical Dual-Architecture Framework for Forensic-Quality Restoration of Surveillance Footage Degraded by Rain and Glare. Team: Justin Zack M. Doctolero, Wilfredo G. Marinay Jr., Joshua Emerson B. Valerio, Michel B. Bolo.",
    tech: ["AI/ML", "Computer Vision", "Research", "Published Paper"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Hospital Referral System",
    description: "A comprehensive referral system for all hospitals across Mindanao region. Currently in pilot testing at SPMC Hospital, Davao City, with full deployment scheduled for April 2025.",
    tech: ["Database", "System Development", "Healthcare IT"],
    github: "https://github.com/derf567/SPMC-OJT-REFERRAL",
    live: "#",
  },
  {
    title: "Hall of Justice System",
    description: "Local system developed for Hall of Justice operations. Built as part of academic project focusing on real-world application development.",
    tech: ["Database", "System Design", "Local Deployment"],
    github: "https://github.com",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
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

export default ProjectsSection;
