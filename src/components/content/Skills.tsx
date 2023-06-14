import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    return (
        <>
            <div className="arlo_tm_section" id = 'skills'>

            <div className="arlo_tm_skills_wrap">
              <div className="container">
                <div className="inner_wrap">
                  <div className="leftbox">
                    <div className="arlo_tm_mini_title_holder">
                      <h4>Kỹ năng Frontend</h4>
                    </div>
                    <li>Cắt ghép templace Website</li>
                    <li>Framwork/Library: Bootstrap, Antd, React.JS</li>
                  </div>

                  <div className="rightbox">
                    <div className="progress_bar_wrap_total">
                      <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                          <span><span className="label">HTML/CSS/Javascript  
                            <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} />
                            <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                          <span><span className="label">ReactJS(Typescript)     <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} />   <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="75" data-color="#000">
                          <span><span className="label">HTML    
                          <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} /> <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                          <span><span className="label">After Effect <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} /> <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arlo_tm_skills_wrap">
              <div className="container">
                <div className="inner_wrap">
                  <div className="leftbox">
                    <div className="arlo_tm_mini_title_holder">
                      <h4>Kỹ năng Backend</h4>
                    </div>
                    <li>Ngôn ngữ lập trình </li>
                    <li>Viết Restful API </li>
                    <li>Framework: Express</li>
                    <li>Database: MongoDB </li>
                  </div>
                  <div className="rightbox">
                    <div className="progress_bar_wrap_total">
                      <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">

                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                          <span><span className="label">Wordpress <span className="experience"><span>
                            <ProgressBar 
                     animateOnRender={true}
                     baseBgColor="#afafae"
                        bgColor='black'
                            height="10px"
                            completed={60} />
                            
                            </span> </span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                          <span><span className="label">Css  
                          <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} />  <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="75" data-color="#000">
                          <span><span className="label">HTML 
                           <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} /> <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                          <span><span className="label">After Effect 
                           <ProgressBar 
                                  animateOnRender={true}
                        bgColor='black'
                            baseBgColor="#afafae"
                            height="10px"
                            completed={95} /> <span className="experience"></span></span><span className="number"></span></span>
                          <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                        </div>
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
export default Skills;