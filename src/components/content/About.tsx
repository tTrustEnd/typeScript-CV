import imageAbout from '@/assets/img/hero/avatar.jpg'
import myCv from '@/assets/CV nguyễn quang trường - 2000.pdf'
import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'
import Im2 from '@/assets/img/about/550x640.jpg'
const About = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true
            })
            ///hihihhi
            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }

    }, [])
    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                        <div  className="image layer" data-depth="0.2" >
                                            <img src={Im2} alt="550x640" />
                                            <div className="inner" data-img-url={imageAbout}
                                                style={{ backgroundImage: "url(" + imageAbout + ")" }}
                                            ></div>
                                        </div>
                                        <div className="border layer" data-depth="0.6">
                                            <img src={Im2} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Mình là Trường  <span className="arlo_tm_animation_text_word"></span></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! Tên mình là <strong>Nguyễn Quang Trường</strong>.
                                            Mình tốt nghiệp bằng giỏi Vật lý kỹ thuật (HUST), sau khi tốt nghiệp mình đã tập chung vào con đường trở thành lập trình viên. <br /><br />
                                            Mình rẩt đam mê và tận tâm với công việc của mình, mặc dù kinh nghiệm ít ỏi nhưng mình đã có được những kỹ năng cơ bản,
                                            cần thiết để thiết kế websites.<br /><br />

                                            Mình thích mọi bước của quy trình thiết kế, từ thảo luận, hợp tác, lên ý tưởng thảo luận và cảm thấy rất là vui khi thành phẩm làm ra khiến người dùng thoải mái.
                                        </p><br />
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày sinh:</label> 25.01.2000</span>
                                            </li>
                                            <li>
                                                <span><label>Giới tính:</label> Nam</span>
                                            </li>
                                            <li>
                                                <span><label>Quê quán:</label> Bắc Ninh, VN</span>
                                            </li>
                                            <li>
                                                <span><label>Sở thích:</label> Billiards, Music, Chess, game ...</span>
                                            </li>
                                            <li>
                                                <span><label>Tốt nghiệp:</label> Đại Học Bách Khoa Hà Nội</span>
                                            </li>
                                            <li>
                                                <span><label>Loại:</label> Giỏi</span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> truongnq185728&#64;gmail.com</span>
                                            </li>
                                            <li>
                                                <span><label>Git:</label> <a href="https://github.com/tTrustEnd">https://github.com/tTrustEnd</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCv} download><span>Download CV</span></a>
                                            </li>
                                            <li className="anchor">
                                                <a href="#contact"><span>Send Message</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default About;