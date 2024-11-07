import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import the icons
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SpacemanCanvas from "./Spaceman";
import { Space_man } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Avinash Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate{" "}
            <span className="text-[#915EFF]">Software Development Engineer</span>
            . <br className="sm:block hidden" />
            I specialize in creating{" "}
            <span className="text-[#915EFF]">
              innovative web and mobile applications
            </span>
            , optimizing system performance, and developing user-friendly
            interfaces.
          </p>

          {/* Social Icons Section */}
          <div className="mt-5 flex gap-6">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/avinashsinghh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077b5] transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Avinash-Singh1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#333] transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* SpacemanCanvas for desktop, image for mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex justify-center items-center mt-[490px]">
          <div className="w-[100%] h-[100%] opacity-80 hidden sm:block">
            <SpacemanCanvas className="w-full h-full" />
          </div>

          {/* Image shown only on mobile screens */}
          <div className="sm:hidden block">
            <img
              src={Space_man} // Make sure to use the correct path to your image
              alt="Spaceman"
              className="w-[100%] h-[100%] object-contain" // You can adjust the size or object-fit style as needed
            />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* Parallax images */}
      <div>
        <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
        <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
        <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
        <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
        <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
        <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
