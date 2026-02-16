const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Wilfredo G. Marinay Jr, but you can call me Fred. I'm a Computer Science 
              student with a passion for web development and creating beautiful digital experiences.
            </p>
            <p>
              I'm the youngest in my family with one sister, Jhoelita, and one brother, Leo Vincent. 
              My journey in tech started when I discovered the power of code to bring ideas to life, 
              and I've been hooked ever since.
            </p>
            <p>
              When I'm not coding, you can find me gaming, playing sports, riding my motorbike, 
              or exploring new technologies. I love the challenge of learning new frameworks and 
              building projects that solve real-world problems.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
