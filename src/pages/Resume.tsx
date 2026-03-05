import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Resume = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
    >
      <div className="py-15 md:pt-27 md:pb-7">
        <div className="py-12 min-h-screen">
          <div className="flex justify-center mb-4">
            <a
              href="/public/certificates/Coursera 1XXSBXGSVEQ2.pdf"
              download="Resume.pdf"
              className="bg-primary-foreground hover:bg-primary-foreground/90 font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out"
            >
              &nbsp;Download CV
            </a>
          </div>
          <div className="flex justify-center text-center text-gray-400 py-20">
            <p>Resume viewer coming soon. Please download the CV using the button above.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
