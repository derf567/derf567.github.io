import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { ProjectProps } from "@/data/projects";

function ProjectCard(props: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = props.images || [props.imgPath];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    if (!isHovering || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
  };

  const handleVisitWebsite = (url: string) => {
    console.log("Visiting:", url); // Debug log
    const confirmed = window.confirm(
      `Do you want to visit this website?\n\n${props.title}\n\nURL: ${url}`
    );
    if (confirmed) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={
        props.order === 3
          ? { opacity: 0, scale: 0.5, x: 300 }
          : { opacity: 0, scale: 0.5, y: 150 }
      }
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <div className="max-md:my-5 p-2 flex flex-col card h-full transition-all duration-500 ease-linear hover:scale-105" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={currentImage}
          alt={props.title}
          loading="lazy"
          className="h-50 bg-cover rounded-sm grayscale-70 hover:grayscale-0 object-cover"
        />
        <div className="m-2">
          <h4 className="font-bold text-lg md:text-xl my-1">{props.title}</h4>
          <p className="text-left max-md:text-sm max-md:font-light font-light">
            {props.description}
          </p>

          <div className="my-2">
            {/* these are the skills used for building the project*/}
            {props.skills && (
              <div className="flex gap-3 flex-wrap">
                {props.skills.map((skill, index) => (
                  <span key={index} className="bg-secondary py-1 px-2 rounded-sm text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {/* GitHub Button */}
            {!props.isBlog && props.ghLink && props.ghLink.trim() !== "" && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleGithubClick(props.ghLink!);
                }}
                className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-sm transition duration-300 flex items-center gap-2"
              >
                <BsGithub />
                <span className="font-medium">GitHub</span>
              </button>
            )}

            {/* Visit Website Button */}
            {!props.isBlog && props.demoLink && props.demoLink.trim() !== "" && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleVisitWebsite(props.demoLink!);
                }}
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary py-2 px-4 rounded-sm transition duration-300 flex items-center gap-2"
              >
                <CgWebsite className="text-lg" />
                <span className="font-medium">Visit Website</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
