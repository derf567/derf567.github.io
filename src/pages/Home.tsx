import HomeCard from "@/components/HomeDetail";
import Type from "@/components/ui/Type";
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
  tap: { scale: 0.9 },
};

function Home() {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pb-7">
        <div className="bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.8),rgba(12,10,22,0.8))] bg-center text-left mt-20 pb-8 px-0 min-h-[90vh] flex items-center">
          <div className="w-full">
            <div className="md:flex md:mx-23 items-center justify-between">
              <div className="md:w-1/2 flex items-center max-md:mx-5 max-md:p-5">
                <motion.div
                  initial={{ translateX: "-100vw", opacity: 0 }}
                  animate={{ translateX: "0vw", opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="flex flex-col md:gap-10 gap-5"
                >
                  <h1 className="text-3xl md:text-5xl font-semibold text-white">
                    Hi There!
                    <span
                      className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite] ml-2"
                      role="img"
                      aria-labelledby="wave"
                    >
                      👋🏻
                    </span>
                  </h1>
                  <h1 className="text-3xl md:text-5xl py-5 text-white">
                    I'M
                    <strong className="text-primary-foreground ml-2">
                      EZRA
                    </strong>{" "}
                    <br />
                    FIKADU
                  </h1>
                  <div className="text-white text-2xl md:text-3xl min-h-[60px]">
                    <Type />
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2 z-1 flex items-center justify-center pt-5 md:pt-0">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="text-center"
                >
                  <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                    <div className="relative text-6xl md:text-8xl">💻</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
    </motion.section>
  );
}

export default Home;
