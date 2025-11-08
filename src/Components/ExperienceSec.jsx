import { FiShoppingBag } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
const ExperienceSec = ({toggle}) => {
  return (
    <>
      <section
        className={`py-20 w-full  md:w-full  lg:w-full h-full md:h-full lg:h-full  ${
          toggle !== false ? `bg-white text-black` : `bg-transparent text-white`
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl md:mx-16">
          <div className="flex-col items-center justify-center text-center mb-16">
            <button
              className={` bg-gray-500/20  inline-flex items-center justify-center rounded-md border   mb-4 px-4 p-2 font-semibold ${
                toggle !== false ? `border-black` : `border-white`
              }`}
            >
              Experience & Learning
            </button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6">
              My
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From learning to building - my path in web development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={``}>
              <h3 className="text-2xl font-semibold  gap-3 flex  items-center mb-8 ">
                <FiShoppingBag></FiShoppingBag>
                Experience & Projects
              </h3>
              <div
                className={`rounded-lg ${
                  toggle !== false
                    ? `border-black border  bg-white`
                    : ` bg-black`
                }`}
              >
                <div className="p-6 space-y-1.5 flex flex-col">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className=" text-lg  font-semibold tracking-tight">
                        Web Development Projects
                      </div>
                      <div className="">Personal Projects</div>
                    </div>
                    <div className="   bg-gray-500/20  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
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
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      2024 - Present
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mt-2 flex-shrink-0 "
                        aria-hidden="true"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, corporis.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mt-2 flex-shrink-0 "
                        aria-hidden="true"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, corporis.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mt-2 flex-shrink-0 "
                        aria-hidden="true"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, corporis.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mt-2 flex-shrink-0 "
                        aria-hidden="true"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, corporis.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mt-2 flex-shrink-0 "
                        aria-hidden="true"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, corporis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold  gap-3 flex  items-center mb-8 ">
                <LuCircleCheckBig></LuCircleCheckBig>
                Certifications & Achievements
              </h3>
              <div className="space-y-4">
                <div
                  className={`rounded-xl    ${
                    toggle !== false
                      ? `border-black border  bg-white`
                      : ` bg-neutral-950`
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className=" text-lg  font-semibold tracking-tight">
                          React
                        </div>
                        <div className="     tracking-tight  bg-transparent  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
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
                          2024 - Present
                        </div>
                      </div>
                      <div className="   bg-gray-500/20  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
                        Certification
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`rounded-xl  ${
                    toggle !== false
                      ? `border-black border  bg-white`
                      : ` bg-black`
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className=" text-lg  font-semibold tracking-tight">
                          React
                        </div>
                        <div className="     tracking-tight  bg-transparent  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
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
                          2024 - Present
                        </div>
                      </div>
                      <div className="   bg-gray-500/20  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
                        Certification
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`rounded-xl   ${
                    toggle !== false
                      ? `border-black border  bg-white`
                      : ` bg-black`
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="text-lg  font-semibold tracking-tight">
                          React
                        </div>
                        <div className="     tracking-tight  bg-transparent  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
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
                          2024 - Present
                        </div>
                      </div>
                      <div className="  bg-gray-500/20  h-6  inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0">
                        Certification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ExperienceSec;
