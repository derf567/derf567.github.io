import { useState } from "react";
import {
  User,
  Info,
  FolderOpen,
  Wrench,
  Briefcase,
  GraduationCap,
  Mail,
  Activity,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "introduction", label: "Introduction", icon: User },
  { id: "about", label: "About Me", icon: Info },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills & Tools", icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "status", label: "Status", icon: Activity },
];

interface PortfolioSidebarProps {
  activeSection: string;
  onNavigate: (index: number) => void;
}

const PortfolioSidebar = ({ activeSection, onNavigate }: PortfolioSidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigateToSection = (id: string) => {
    const index = navItems.findIndex(item => item.id === id);
    if (index !== -1) {
      onNavigate(index);
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">&lt;/&gt;</span>
          </div>
          <div>
            <h2 className="font-display font-bold text-sm text-foreground">Fred Marinay</h2>
            <p className="text-xs text-muted-foreground">Web Developer</p>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-700 font-medium">Available for work</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 rounded-lg bg-white border border-border shadow-lg flex items-center justify-center text-foreground"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-border shadow-xl transition-transform duration-300 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default PortfolioSidebar;
