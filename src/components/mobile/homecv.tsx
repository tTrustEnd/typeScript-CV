import { TypeAnimation } from 'react-type-animation';
import Imagehome from '@/assets/img/hero/avatar.jpg'

const HomeCV = () => {
  const handleScroll = () => {
    
    const section = document.querySelector('#about');
    section?.scrollIntoView({behavior:'smooth', block:'start'})
  }
    return (
        <>
           <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
              <div className="arlo_tm_universal_box_wrap">
                <div className="bg_wrap">
                  <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                  <div className="overlay_color hero"></div>
                </div>
                <div className="content hero">
                  <div className="inner_content">
                    <div className="image_wrap">
                      <img src={Imagehome} alt="hero" />
                    </div>
                    <div className="name_holder">
                      <h3>Nguyễn <span>Trường</span></h3>
                    </div>
                    <div className="text_typing">
                      <p>
                        <> </>
                         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'rất vui được gặp bạn',
        1000,
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arlo_tm_arrow_wrap bounce anchor">
                  <a href="#"
                  onClick={(e)=>{
                    e.preventDefault()
                    handleScroll()}}
                  ><i className="xcon-angle-double-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default HomeCV