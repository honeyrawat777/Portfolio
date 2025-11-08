import React from "react";
import { PiBracketsAngleBold } from "react-icons/pi";
import { BiBulb } from "react-icons/bi";
import { LuWrench } from "react-icons/lu";
const SkillsSection = ({toggle}) => {
  return (
    <>
      <section
        className={`${
          toggle !== false ? `bg-white text-black` : `bg-black text-white`
        }  py-20`}
      >
        <div className="  w-full  flex flex-col  justify-center  px-4 mx-auto md:pl-20 md:pr-20  pl-5 pr-5">
          <div className="flex-col flex-wrap items-center justify-center  text-center mb-16">
            <button
              className={` bg-gray-500/20  inline-flex items-center justify-center rounded-md border ${
                toggle !== false
                  ? `border-black`
                  : `border-white`
              }    mb-4 px-4 p-2 font-semibold`}
            >
              Skills & Expertise
            </button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6">
              My
              <span className="       text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto ">
              A comprehensive set of skills developed through hands-on projects
              and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="flex flex-col  lg:col-span-2   space-y-8">
              <div className=" space-y-1.5 ">
                <div className="flex justify-baseline items-center gap-3 font-bold  m-6 space-y-1.5">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 bg-blue-950/30  rounded-md ">
                    <PiBracketsAngleBold></PiBracketsAngleBold>
                  </div>
                  <div> Programming Language</div>
                </div>
                <div className=" font-medium grid   sm:grid-cols-2 gap-6 p-6 pt-0">
                  <div className="w-full space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div>HTML</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>

                  <div className=" font-medium">
                    <div className="flex justify-between items-center">
                      <div>CSS</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <div>C</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>C++</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>Javascript</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>React</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div className="flex justify-baseline items-center gap-3 font-bold  p-6 space-y-1.5 ">
                  <div className="w-10 h-10 flex items-center justify-center text-purple-800 bg-purple-950/20 rounded-md ">
                    <BiBulb></BiBulb>
                  </div>
                  <div> Other Skills</div>
                </div>
                <div className="font-medium grid  sm:grid-cols-2 gap-6 p-6 pt-0">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>HTML</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>

                  <div className=" font-medium">
                    <div className="flex justify-between items-center">
                      <div>CSS</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <div>C</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>C++</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>Javascript</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>React</div>

                      <div className="font-semibold text-sm">60%</div>
                    </div>

                    <div className="w-full  bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`${
                          toggle !== false ? `bg-black` : `bg-white`
                        }   h-2 rounded-full  w-3/5 transition-all duration-500 ease-in-out`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col  flex justify-baseline  ">
              <div className="flex p-6 space-y-1.5">
                <div className="font-semibold  flex justify-center items-center gap-3 leading-none">
                  <div className=" bg-gray-500/30 w-10 h-10 rounded-lg flex justify-center items-center ">
                    <LuWrench></LuWrench>
                  </div>
                  Development Tools
                </div>
              </div>
              <div className="flex justify-baseline items-center p-6 pt-0">
                <div className="">
                  <div className="mb-2 ">
                    <div className="flex justify-between items-center space-y-2">
                      <div className="inline-flex bg-gray-500/30 items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        PyCharm
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex  bg-gray-500/30 items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        PyCharm
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex  bg-gray-500/30 items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        PyCharm
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex  bg-gray-500/30 items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        PyCharm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-8">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-3xl ">6+</div>
              <div className="    ">Programming Languages</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-3xl ">2+</div>
              <div className="     ">Development Tools</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-3xl ">2+</div>
              <div className="    ">Years Learning </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-3xl ">2+ </div>
              <div className="    ">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SkillsSection;
