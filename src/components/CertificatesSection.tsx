import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2024",
    description: "Comprehensive certification covering Python fundamentals, data analysis, and visualization.",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    description: "Full-stack web development including HTML, CSS, JavaScript, React, and Node.js.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2023",
    description: "Fundamentals of cybersecurity, network security, and threat prevention.",
  },
  {
    title: "Java Programming",
    issuer: "Oracle Academy",
    date: "2023",
    description: "Object-oriented programming principles and Java application development.",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Certificates</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="space-y-4">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className="card-glass p-6 group hover-lift flex items-start gap-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mono text-xs text-muted-foreground mt-1">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
