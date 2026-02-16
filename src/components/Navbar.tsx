import { useState, useEffect } from "react";

const navItems = ["About", "Skills", "Certificates", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mono text-lg font-bold tracking-tight">
          &lt;CS /&gt;
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="mono text-xs mr-1">0{i + 1}.</span>
              {item}
            </button>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium border border-primary/30 text-primary rounded-md hover:bg-primary/10 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
