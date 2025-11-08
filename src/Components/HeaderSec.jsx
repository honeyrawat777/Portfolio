import { TiWeatherSunny } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleaction } from "../store";
const HeaderSec=({toggle,handle})=>{
      
  const dispatch= useDispatch();
  const handletoggle = () => {
      dispatch(toggleaction.settoggle());
  };
  
 
  const handlecomp = ({ item }) => {
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "About") {
      window.scrollTo({ top: 750, behavior: "smooth" });
    } else if (item === "Skills") {
      window.scrollTo({ top: 1750, behavior: "smooth" });
    } else if (item === "Experience") {
      window.scrollTo({ top: 2800, behavior: "smooth" });
    } else if (item === "Projects") {
      window.scrollTo({ top: 3700, behavior: "smooth" });
    } else if (item === "Contact") {
      window.scrollTo({ top: 5000, behavior: "smooth" });
    }
  };


    return (
      <>
        <div className=   { `sticky top-0 flex items-center justify-between backdrop-blur ${(toggle!==false)?`bg-white text-black`:`bg-black text-white`}  w-full  h-16  border-b-gray-50 px-4 sm:px-6 lg:px-16`}>
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <div
                onClick={() => {
                  handle
                }}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-transform duration-300 group-hover:scale-105"
              >
                <span className="text-white font-bold text-lg ">H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            {/* Show name only on sm and above */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold  group-hover:text-primary transition-colors">
                Hardeep Rawat
              </div>
            </div>
          </div>

          {/* Navigation - hidden on xs, scrollable on sm */}
          <div className="flex-1 flex justify-center overflow-x-auto scrollbar-hide">
            <nav className="font-medium flex space-x-4 sm:space-x-6 lg:space-x-12 whitespace-nowrap text-sm sm:text-base">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  className="hover:text-primary transition-colors"
                  onClick={() => handlecomp({ item })}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Weather Button - hidden on xs */}
          <div className="hidden sm:flex items-center">
            <button className=" hover:text-primary transition-colors" onClick={handletoggle}>
              <TiWeatherSunny size={24} />
            </button>
          </div>
        </div>
      </>
    );
      
    
}

export default HeaderSec