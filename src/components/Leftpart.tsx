import ReactLogo from "@/assets/react.svg";
import { useState,useEffect } from "react";
import {isMobile} from 'react-device-detect';

interface Iprops {
  showLeft: boolean;
  setShowLeft: (value: boolean) => void;
}
const Leftpart = (props: Iprops) => {
  const [activeTab, setActiveTab] = useState<string>('home')
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
   const  {hash} = window.location;
  if(hash){
    const tab = hash.replace('#','');
    setActiveTab(tab)
    const section = document.querySelector(`${hash}`)
    if(section){
      section.scrollIntoView({behavior: 'smooth', block: 'start'})  
    }
  }
    
  }, [])
  
  return (<div>
    <div className={props.showLeft === false ? "arlo_tm_leftpart_wrap opened  " : "arlo_tm_leftpart_wrap "}>
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#"><img src={ReactLogo} alt="desktop-logo" /></a>
        </div>
        <div className="menu_list_wrap">
          <ul className="anchor_nav">
            <li><a
              className={activeTab === 'home' ? 'active' : ''}
              onClick={(e) => {
                setActiveTab('home')
                e.preventDefault()
                handleScroll("#home")
              }}
              href="#">Home</a>
            </li>
            <li><a
              className={activeTab === 'about' ? 'active' : ''}
              onClick={(e) => {
                setActiveTab('about')
                e.preventDefault()
                handleScroll("#about")
              }}
              href="#">About</a></li>
            <li><a
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={(e) => {
                setActiveTab('skills')
                e.preventDefault()
                handleScroll("#skills")
              }}
              href="#">Skills</a></li>
            <li><a
              className={activeTab === 'projects' ? 'active' : ''}
              onClick={(e) => {
                setActiveTab('projects')
                e.preventDefault()
                handleScroll("#projects")
              }}
              href="#">Projects</a></li>
            <li><a
                className={activeTab === 'contact' ? 'active' : ''}
              onClick={(e) => {
          
                setActiveTab('contact')
                e.preventDefault()
                handleScroll("#contact")
           
              }}
              href="#">Contact</a></li>
          </ul>
        </div>
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li><a href="#"><i className="xcon-facebook"></i></a></li>
              <li><a href="#"><i className="xcon-twitter"></i></a></li>
              <li><a href="#"><i className="xcon-linkedin"></i></a></li>
              <li><a href="#"><i className="xcon-instagram"></i></a></li>
              <li><a href="#"><i className="xcon-behance"></i></a></li>
            </ul>
          </div>
        </div>
        { !isMobile && 
        <a
          className={props.showLeft ? "arlo_tm_resize opened" : "arlo_tm_resize"}
          href="#"
          onClick={
            (e) => {
              e.preventDefault()
              props.setShowLeft(!props.showLeft)}
          }
          >

          <i className={props.showLeft ? "xcon-angle-left  " : " xcon-angle-left opened "}></i>
          
          </a>
          }
      </div>
    </div>
  </div>)
}
export default Leftpart;