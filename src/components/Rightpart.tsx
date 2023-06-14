import About from "./content/About";
import HomeCV from "@/components/mobile/homecv";
import Skills from "./content/Skills";
import Projects from "./content/projects";
import Contact from "./content/contact";
import { FloatButton } from 'antd';
interface Iprops {
  showLeft: boolean;
  setShowLeft: (value:boolean) => void;
}
const Rightpart = (props: Iprops) => {
    return (
    <div>
       <div className={ props.showLeft==false? "arlo_tm_rightpart opened " : "arlo_tm_rightpart "}>
        <div className="rightpart_inner">
       <HomeCV/>
          
      {/* {/ <!-- ABOUT -->\} */}
    <About/>
      {/* {/ <!-- /ABOUT -->\} */}
          
      {/* {/ <!-- SKILLS -->\} */}
          <Skills/>
      {/* {/ <!-- /SKILLS -->\} */}
          
      {/* {/ <!-- SERVICES -->\} */}
        <Projects/>
      {/* {/ <!-- /SERVICES -->\} */}
   
  
      {/* {/ <!-- CONTACT & FOOTER -->\} */}
      <Contact/>
      {/* {/ <!-- /CONTACT & FOOTER -->\} */}
      <FloatButton.BackTop  />
        </div>
      </div>
    </div>
    
    )
}
export default Rightpart;