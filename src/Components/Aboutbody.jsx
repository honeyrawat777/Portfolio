import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
const Aboutbody=({targetcomp,toggle})=>{




    return (
      <>
        <section
          className={` ${
            toggle !== false
              ? `bg-white text-black`
              : `bg-transparent text-white`
          } `}
        >
          <div
            ref={targetcomp}
            className={`w-full h-full md:w-full lg:w-full   md:h-full  lg:h-full  transition-all duration-1000 opacity-100 translate-y-0 sm:mx-8 md:mx-16 lg:mx-32 my-10  max-w-screen-xl mx-auto`}
          >
            <div className="text-center mb-16 px-2 sm:px-0">
              <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 px-4 py-2 text-sm border-primary/20 text-primary bg-primary/5">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get to Know{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Me Better
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Passionate about technology and always eager to learn new things
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-items-center px-2 sm:px-0 m-6  ">
              {/* Left Column */}
              <div className="space-y-6 max-w-xl w-full">
                <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                  My Story
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg text-center lg:text-left">
                  Enthusiastic and detail-oriented BCA 3rd-year student with a
                  strong foundation in web development and cybersecurity.
                  Skilled in HTML, CSS, JavaScript, and Python with practical
                  experience building full-stack applications. Seeking an
                  entry-level web development opportunity to apply and expand my
                  skills in a collaborative, growth-oriented environment.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-center lg:text-left">
                    What Drives Me
                  </h4>
                  <ul className="space-y-3 text-muted-foreground max-w-md mx-auto lg:mx-0">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Building secure and user-friendly web applications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Learning cutting-edge cybersecurity techniques
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Contributing to open-source projects and community
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 max-w-xl w-full">
                {/* Education Card */}
                <div
                  className={`${
                    toggle !== false ? `border-black border  ` : ` bg-black`
                  }  rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <RiGraduationCapFill className="text-blue-500"></RiGraduationCapFill>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Education</h4>
                        <p className="text-sm text-muted-foreground">
                          Current Studies
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">
                        Bachelor in Computer Application (BCA)
                      </p>
                      <p className="text-muted-foreground">
                        PCTE Group of Institutes
                      </p>
                      <p className="text-muted-foreground">PTU University</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar h-3 w-3 mr-1"
                          aria-hidden="true"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        {/* Calendar SVG */}
                        July 2023 - Present
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div
                  className={`${
                    toggle !== false ? `border-black border  ` : ` bg-black`
                  }  rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <IoLocationSharp className="text-purple-500"></IoLocationSharp>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Based in
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-center lg:text-left">
                      Ludhiana, Punjab
                    </p>
                  </div>
                </div>

                {/* Certifications Card */}
                <div
                  className={` ${
                    toggle !== false ? `border-black border  ` : ` bg-black`
                  } rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <SlBadge className="text-emerald-600"></SlBadge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          Certifications
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          5 achievements
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-center lg:text-left">
                      <div className="text-sm text-muted-foreground">
                        • Professional in Python Programming
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • 6 Week Training in Cyber Security
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Hacking Workshop
                      </div>
                      <p className="text-sm text-primary font-medium">
                        +2 more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-state="indeterminate"
                data-max="100"
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{ transform: ` translateX(-10%)` }}
              ></div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Aboutbody;