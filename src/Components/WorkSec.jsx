const WorkSec = ({toggle}) => {
  return (
    <>
      <section
        className={`py-20  w-full  ${
          toggle !== false ? `bg-white text-black` : `bg-transparent text-white`
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl  ">
          <div className="flex-col items-center justify-center text-center mb-16">
            <button
              className={` ${
                toggle !== false ? `border-black` : `border-white`
              } bg-gray-500/20  inline-flex items-center justify-center rounded-md border   mb-4 px-4 p-2 font-semibold`}
            >
              Get In Touch
            </button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Work Together
              </span>
            </h2>
            <p className="text-lg text-muted-htmlForeground max-w-3xl mx-auto ">
              Have a project in mind ? Let's discuss how we can bring your ideas
              to life
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 ">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact InFormation
                </h3>
                <div className="space-y-6">
                  <div
                    className={` ${
                      toggle !== false ? `border border-black` : `bg-black`
                    }  rounded-xl text-card-htmlForeground border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 ">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
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
                            className="lucide lucide-mail h-6 w-6 text-blue-500"
                            aria-hidden="true"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              width="20"
                              height="16"
                              rx="2"
                            ></rect>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <a
                            href="mailto:builtwith.sandeep@gmail.com"
                            className="text-muted-htmlForeground hover:text-primary transition-colors"
                          >
                            honeyrawat2208@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` ${
                      toggle !== false ? `border border-black` : `bg-black`
                    }  rounded-xl text-card-htmlForeground border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
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
                            className="lucide lucide-phone h-6 w-6 text-green-500"
                            aria-hidden="true"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">Phone</h4>
                          <a
                            href="tel:+91 62809-09267"
                            className="text-muted-htmlForeground hover:text-primary transition-colors"
                          >
                            +91 62809-09267
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` ${
                      toggle !== false ? `border border-black` : `bg-black`
                    }  rounded-xl text-card-htmlForeground border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
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
                            className="lucide lucide-map-pin h-6 w-6 text-purple-500"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">Location</h4>
                          <span className="text-muted-htmlForeground">
                            Ludhiana, Punjab
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm px-3 text-xs w-12 h-12 rounded-full hover:bg-primary hover:text-primary-htmlForeground hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-github h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/honey-rawat-599a33360_webdevelopment-javascript-html-activity-7334127878311206913-ennd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb5kCoB3eoWrj2MTeAesi9rDSPm_eGP3UE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm px-3 text-xs w-12 h-12 rounded-full hover:bg-primary hover:text-primary-htmlForeground hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-linkedin h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </button>
                  </a>
                  <a
                    href="mailto:honeyrawat2208@gmail.com"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm px-3 text-xs w-12 h-12 rounded-full hover:bg-primary hover:text-primary-htmlForeground hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-mail h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`  ${
                toggle !== false ? `border border-black` : `bg-black`
              } rounded-xl text-card-htmlForeground border-0 shadow-lg bg-card/80 backdrop-blur-sm`}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight flex items-center gap-3">
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
                    className="lucide lucide-send h-6 w-6 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  Send me a message
                </div>
              </div>
              <div className="p-6 pt-0">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name *
                      </label>
                      <input
                        className={` ${
          toggle !== false ?  `placeholder-black` : `placeholder-white`
        } flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-htmlForeground placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:scale-105`}
                        id="name"
                        placeholder="Your name"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        className={`  ${
          toggle !== false ?  `placeholder-black` : `placeholder-white`
        } flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-htmlForeground placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:scale-105`}
                        id="email"
                        placeholder="your.email@example.com"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className={`  ${
          toggle !== false ?  `placeholder-black` : `placeholder-white`
        } flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-htmlForeground placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:scale-105`}
                      id="subject"
                      placeholder="What's this about?"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      className={`  ${
          toggle !== false ?  `placeholder-black` : `placeholder-white`
        } flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:scale-105 resize-none`}
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi!"
                      rows="5"
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-htmlForeground shadow hover:bg-primary/90 h-10 rounded-md px-8 w-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                    type="submit"
                  >
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
                      className="lucide lucide-send mr-2 h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WorkSec;
