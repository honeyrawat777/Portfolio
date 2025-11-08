const ProjectsSec=({toggle})=>{



    return (
      <>
        <section
          className={`py-20  w-full  ${
            toggle !== false ? `bg-white text-black` : `bg-black text-white`
          }`}
        >
          <div className="px-4 mx-auto max-w-7xl  ">
            <div className="flex-col items-center justify-center text-center mb-16">
              <button
                className={`bg-gray-500/20  inline-flex items-center justify-center rounded-md border     mb-4 px-4 p-2 font-semibold    ${
                  toggle !== false ? ` border-black` : `border-white `
                }`}
              >
                My Work
              </button>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6">
                Featured
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto ">
                A showcase of my recent work in web development
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div
                className={`  ${
                  toggle !== false ? ` border-black border` : `border-0 `
                }   rounded-xl text-card-foreground group  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm cursor-pointer overflow-hidden`}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="tracking-tight text-lg font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                        Tic-Tac-Toe
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                          Completed
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
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
                            className="lucide lucide-calendar h-3 w-3"
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
                          May 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    Developed a Flask-based web application to detect scam and
                    phishing content using VirusTotal API. Designed an
                    interactive UI with HTML, CSS, and JavaScript for a smooth
                    user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      HTML
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      CSS
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      Javascript
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium flex items-center gap-2">
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
                        className="lucide lucide-code h-4 w-4 text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Key Features
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                          className="lucide lucide-circle-check-big h-3 w-3 text-green-500"
                          aria-hidden="true"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        Working Properly
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                          className="lucide lucide-circle-check-big h-3 w-3 text-green-500"
                          aria-hidden="true"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        Interactive user interface
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/honeyrawat777/Tic-Tac-Toe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 w-full max-w-32 h-9 text-xs font-medium">
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
                          className="lucide lucide-github h-3 w-3 mr-2"
                          aria-hidden="true"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={` ${
                  toggle !== false ? ` border-black border` : `border-0 `
                } rounded-xl text-card-foreground group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm cursor-pointer overflow-hidden`}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="tracking-tight text-lg font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                        Weather-App
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                          Completed
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
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
                            className="lucide lucide-calendar h-3 w-3"
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
                          May 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    Developed a Flask-based web application to detect scam and
                    phishing content using VirusTotal API. Designed an
                    interactive UI with HTML, CSS, and JavaScript for a smooth
                    user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      HTML
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      CSS
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-1">
                      Javascript
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium flex items-center gap-2">
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
                        className="lucide lucide-code h-4 w-4 text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Key Features
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                          className="lucide lucide-circle-check-big h-3 w-3 text-green-500"
                          aria-hidden="true"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        Real-time analysis
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                          className="lucide lucide-circle-check-big h-3 w-3 text-green-500"
                          aria-hidden="true"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        Interactive user interface
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/honeyrawat777/Weather-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 w-full max-w-32 h-9 text-xs font-medium">
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
                          className="lucide lucide-github h-3 w-3 mr-2"
                          aria-hidden="true"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-8 ">
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-3xl ">2</div>
                <div className="    ">Projects Built</div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-3xl ">2+</div>
                <div className="    ">Technologies Used</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-3xl">2</div>
                <div className="    ">Completed </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-3xl ">100% </div>
                <div className="    ">Success Rate</div>
              </div>
            </div>
            <div className="mt-16 text-center  ">
              <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 backdrop-blur-sm max-w-2xl mx-auto">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Want to see more of my work?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Check out my GitHub profile for more projects and
                    contributions to the open-source community.
                  </p>
                  <a
                    href="https://github.com/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow hover:bg-primary/90 h-10 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
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
                        className="lucide lucide-github mr-2 h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      View GitHub Profile
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default ProjectsSec;