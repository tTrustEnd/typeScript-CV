import { useEffect, useState } from "react";
import Leftpart from "../components/Leftpart";
import Preloader from "../components/Preloader";
import Rightpart from "../components/Rightpart";
import Mobile from "../components/mobile/Mobile";
import {isMobile} from 'react-device-detect';

const Fortfolio = () => {
  const [showLeft, setShowLeft] = useState<boolean>(true)
  useEffect(() => {
if(isMobile){
  setShowLeft(false)
}
  },[])
    return (
          
    <div className="arlo_tm_wrapper_all">
    
    <div id="arlo_tm_popup_blog">
      <div className="container">
        <div className="inner_popup scrollable"></div>
      </div>
      <span className="close"><a href="#"></a></span>
    </div>
    
   {/* {<!-- PRELOADER -->} */}
  <Preloader/>
     {/* {<!-- PRELOADER -->} */}
{/* {/ <!-- MOBILE MENU -->\} */}

 <Mobile/>
{/* {/ <!-- /MOBILE MENU -->\} */}
    
  {/* {/ <!-- CONTENT -->\} */}
    <div className="arlo_tm_content">
      
  {/* {/ <!-- LEFTPART -->\} */}
    <Leftpart
    showLeft={showLeft}
    setShowLeft={setShowLeft}
    />
  {/* {/ <!-- /LEFTPART -->\} */}
      
  {/* {/ <!-- RIGHTPART -->\} */}
 <Rightpart
    showLeft={showLeft}
    setShowLeft={setShowLeft}
 />
  {/* {/ <!-- /RIGHTPART -->\} */}
      
      {/* <a className="arlo_tm_totop" href="#"></a>  */}
      
    </div>
  </div>
    )
}
export default Fortfolio;