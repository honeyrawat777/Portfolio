import "./App.css";

import HeaderSec from "./Components/HeaderSec";
import Bodyhome from "./Components/Bodyhome";
import Aboutbody from "./Components/Aboutbody";

import Skillsec from "./Components/SkillSection";
import SkillsSection from "./Components/SkillSection";
import ExperienceSec from "./Components/ExperienceSec";
import ProjectsSec from "./Components/ProjectsSec";
import WorkSec from "./Components/WorkSec";
import FooterSec from "./Components/FooterSec";
import { useRef, useState } from "react";
import { toggleaction } from "./store/index.js";
import { useSelector } from "react-redux";
function App() {
 const { toggle } = useSelector((store) => store.toggleslice);


  // const [toggle,settoggle]=useState(false);
const targetcomp = useRef(null);

 
      const handle = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <>
      <HeaderSec
       
        toggle={toggle}
       handle={handle}
      ></HeaderSec>
      <Bodyhome
        targetcomp={targetcomp}
        
        toggle={toggle}
      ></Bodyhome>
      <Aboutbody targetcomp={targetcomp} toggle={toggle}></Aboutbody>
      <SkillsSection toggle={toggle}></SkillsSection>
      <ExperienceSec toggle={toggle}></ExperienceSec>
      <ProjectsSec toggle={toggle}></ProjectsSec>
      <WorkSec toggle={toggle}></WorkSec>
      <FooterSec handle={handle} toggle={toggle}></FooterSec>
    </>
  );
}

export default App;
