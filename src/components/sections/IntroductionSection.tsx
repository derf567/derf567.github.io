const IntroductionSection = () => {
  return (
    <section id="introduction" className="min-h-screen flex items-center section-padding pt-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm mb-5 animate-fade-up text-primary font-semibold" style={{ animationDelay: "0.1s" }}>
          👋 Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Wilfredo G. Marinay Jr</span>
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Creative <span className="gradient-text">Web Developer</span>
        </h2>
        <p
          className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Crafting beautiful digital experiences with code. Computer Science student 
          passionate about web development, AI research, and creating elegant solutions 
          for real-world problems.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View My Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
