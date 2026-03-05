import { X } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    screenshots?: string[];
    fullDescription?: string;
    features?: string[];
    techDetails?: {
      frontend?: string;
      backend?: string;
      database?: string;
    };
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % project.screenshots!.length);
    }
  };

  const prevImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + project.screenshots!.length) % project.screenshots!.length
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-center justify-between border-b border-slate-700">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                SCREENSHOTS
              </h3>
              <div className="relative bg-slate-900 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto"
                />
                {project.screenshots.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prevImage}
                      className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg transition-colors"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
              {project.screenshots.length > 1 && (
                <p className="text-sm text-muted-foreground text-center">
                  {currentImageIndex + 1} / {project.screenshots.length}
                </p>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-slate-900">
              DESCRIPTION
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          {project.techDetails && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                TECH STACK
              </h3>
              <div className="space-y-3">
                {project.techDetails.frontend && (
                  <div>
                    <p className="text-primary font-semibold text-sm">Frontend</p>
                    <p className="text-muted-foreground text-sm">
                      {project.techDetails.frontend}
                    </p>
                  </div>
                )}
                {project.techDetails.backend && (
                  <div>
                    <p className="text-primary font-semibold text-sm">Backend</p>
                    <p className="text-muted-foreground text-sm">
                      {project.techDetails.backend}
                    </p>
                  </div>
                )}
                {project.techDetails.database && (
                  <div>
                    <p className="text-primary font-semibold text-sm">Database</p>
                    <p className="text-muted-foreground text-sm">
                      {project.techDetails.database}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                KEY FEATURES
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 pt-6 border-t border-border">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              View Code
            </a>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
