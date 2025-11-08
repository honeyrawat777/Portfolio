import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { GrGithub } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";

import dp1 from "./images/dp1.jpg";
const Bodyhome = ({targetcomp,toggle}) => {
  const handletouch = () => {
    window.scrollTo({ top: 5000, behavior: "smooth" });
  };
  const handlework = () => {
    window.scrollTo({ top: 3700, behavior: "smooth" });
  };

  return (
    <>
      <section
        className={`  ${
          toggle !== false ? `bg-white text-black` : `bg-black text-white`
        } `}
        ref={targetcomp}
      >
        <div className="    flex flex-col lg:flex-row w-4/5 max-w-screen-xl h-auto lg:h-screen mx-auto px-4 md:px-8 py-10 lg:py-20 gap-10 lg:gap-44  font-medium">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {/* Availability Badge */}
            <div
              className={`flex justify-center lg:justify-start items-center border ${
                toggle !== false ? `border-black` : ` border-white`
              }   rounded-md w-52 sm:w-60 bg-transparent mx-auto lg:mx-0 font-medium mb-5`}
            >
              <GoDotFill className="text-green-500 size-5 ml-2 " />
              <p className="ml-2 text-sm sm:text-base">
                Available for opportunities
              </p>
            </div>

            {/* Name */}
            <div className="flex flex-wrap font-bold text-4xl sm:text-5xl lg:text-6xl mb-5 gap-2 justify-center lg:justify-start">
              <h1>Hi, I'm</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Hardeep Rawat
              </span>
            </div>

            {/* Title */}
            <div className="text-2xl sm:text-3xl mb-5 text-center lg:text-left font-medium w-full">
              Frontend Developer
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg mb-5 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              Web Developer passionate about creating clean, responsive, and
              user-friendly websites with a focus on modern design and
              performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-5 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={handlework}
                className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-md px-4 py-2 text-sm font-semibold  hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
              >
                View My Work <IoIosArrowRoundForward />
              </button>
              <button
                onClick={handletouch}
                className={`border ${
                  toggle !== false ? `border-black` : ` border-white`
                } rounded-md px-4 py-2 text-sm font-semibold  hover:bg-gray-600 transition-all flex items-center justify-center gap-2`}
              >
                Get In Touch <GoMail />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 text-2xl sm:text-3xl">
              <a
                href="https://github.com/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <GrGithub />
              </a>

              <a
                href="mailto:honeyrawat2208@gmail.com"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMail />
              </a>
              <a
                href="https://www.linkedin.com/posts/honey-rawat-599a33360_webdevelopment-javascript-html-activity-7334127878311206913-ennd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb5kCoB3eoWrj2MTeAesi9rDSPm_eGP3UE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          {/* Right Column / Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative">
            <div className="relative">
              <div className="w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-1 animate-pulse mx-auto lg:mx-0">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
                  <img src={dp1} alt="img1" className="" />
                  <div className="relative z-10">
                    <div className="   text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600"></div>
                    <div className="absolute -bottom-14 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-50"></div>
                </div>
              </div>

              {/* Floating Circles - hidden on xs */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full animate-bounce opacity-20"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-30"></div>
              <div className="hidden sm:block absolute top-1/2 -left-6 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Bodyhome;
