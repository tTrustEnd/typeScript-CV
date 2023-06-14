import imgMobile from '@/assets/img/logo/mobile_logo.png'
import { useState } from 'react'
const Mobile = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const style = {
    overflow: "hidden",
    display: isOpen ? 'block' : 'none',
    transition: "2s"
  };

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
 

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#"><img src={imgMobile} alt="mobile_logo" /></a>
          </div>
          <div className="arlo_tm_trigger">
            <div className={isOpen?
              "hamburger hamburger--collapse-r is-active"
              :"hamburger hamburger--collapse-r"}>
              <div className="hamburger-box">
                <div
                onClick={()=>{setIsOpen(prew => !prew)}}
                className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap"  style={style} >
          <div className="mob_menu">
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
        </div>
      </div>
    </>
  )
}
export default Mobile;