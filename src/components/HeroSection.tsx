const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-4xl mx-auto w-full">
        <p className="mono text-sm mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Your Name</span>
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          I build things for the{" "}
          <span className="gradient-text">digital world.</span>
        </h2>
        <p
          className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          I'm a Computer Science student passionate about creating elegant solutions 
          through code. Specializing in full-stack development, data structures & 
          algorithms, and modern web technologies.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            View My Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-20 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <div className="h-px flex-1 bg-border" />
          <span className="mono text-xs text-muted-foreground">scroll down</span>
          <div className="w-px h-8 bg-primary/50 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
