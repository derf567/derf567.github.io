import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan / Coursera",
    date: "2026",
    file: "/certificates/Coursera 1XXSBXGSVEQ2.pdf",
  },
  {
    title: "Web Development Course",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera 6GKEGXBJSLW8.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera 7G924KXJNTMS.pdf",
  },
  {
    title: "Database Management",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera BH5DKCJB0G3I.pdf",
  },
  {
    title: "Software Development Fundamentals",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera FCX8OIPME6AV.pdf",
  },
  {
    title: "Advanced Programming Concepts",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera GQ4ZT3OYRV7P.pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2026",
    file: "/certificates/Coursera KAQREHEXYBD1.pdf",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding bg-gray-50 animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">07.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Certificates & Achievements</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
            <a
              key={cert.file}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1 flex items-start gap-4"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-xs text-primary mt-1 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
