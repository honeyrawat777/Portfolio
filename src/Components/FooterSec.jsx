const FooterSec=({handle,toggle})=>{


    return (
      <>
        <footer className={` border-t border-border  ${
         ( toggle !== false) ?  `bg-white text-black` : `bg-black text-white`
        }`}>
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="py-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <div className="w-8 h-8 text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <span className="font-bold text-sm">H</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-background"></div>
                    </div>
                    <span className="text-xl font-semibold text-foreground">
                      Hardeep Rawat
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Web Developer passionate about creating innovative solutions
                    and secure applications. Currently pursuing B.Tech and
                    actively building projects in web development and
                    cybersecurity.
                  </p>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span>Made with</span>
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
                      className="lucide lucide-heart h-4 w-4 text-red-500 animate-pulse"
                      aria-hidden="true"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span>using React &amp; FastAPI</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                        About
                      </button>
                    </li>
                    <li>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                        Skills
                      </button>
                    </li>
                    <li>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                        Experience
                      </button>
                    </li>
                    <li>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                        Projects
                      </button>
                    </li>
                    <li>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    Contact
                  </h4>
                  <div className="space-y-3">
                    <div className="text-muted-foreground">
                      <p className="text-sm">Ludhiana, Punjab</p>
                    </div>
                    <div>
                      <a
                        href="mailto:honeyrawat2208@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm break-all"
                      >
                        honeyrawat2208@gmail.com
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:+91 62809-09267"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        +91 62809-09267
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            ></div>
            <div className="py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                  © 2025 Hardeep Rawat. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm mr-2">
                    Follow me:
                  </span>
                  <a
                    href="https://github.com/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground px-3 text-xs w-9 h-9 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-github h-4 w-4"
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
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground px-3 text-xs w-9 h-9 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-linkedin h-4 w-4"
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
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground px-3 text-xs w-9 h-9 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
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
                        className="lucide lucide-mail h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </button>
                  </a>
                </div>
                <button onClick={handle} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm h-8 rounded-md px-3 text-xs hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
export default FooterSec