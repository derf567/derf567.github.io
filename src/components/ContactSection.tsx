import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question, a project idea, or just want to say hi — 
          I'll do my best to get back to you!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex px-8 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors text-lg"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-6 mt-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
