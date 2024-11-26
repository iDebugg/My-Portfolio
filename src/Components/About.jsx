import React from 'react'
import '../Styles/About.css'
import ProfileImg from '../assets/Subject 2.png'
const About = () => {
  return (
    <div id='about' className='about display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8'>
        <div className="about-title">
            <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl'>About Me</h1>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="310" height="126">
                <path d="M 5 45 C 100 -30, 190 60, 20 20" fill="#d43397"/>
            </svg> */}

        </div>
        <div className="text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-20">
            <div className="about-left text-center">
                <img src={ProfileImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced front-end developer with over 3 years of experience building responsive and interactive web applications. My expertise lies in crafting clean, efficient, and maintainable code using JavaScript, React.js, CSS, and HTML. I’m passionate about creating seamless user experiences and continuously improving my skills to deliver the best results.</p>
                    <p>I am driven by a deep passion for problem-solving and bringing creative ideas to life through code. I love the challenge of turning complex designs into intuitive and accessible user interfaces, always with a focus on performance and scalability. Staying up-to-date with the latest front-end technologies, I continuously explore new techniques and tools to enhance my craft, ensuring I deliver cutting-edge solutions for every project.</p>
                </div>
                <div className="about-skills display: flex flex-col gap-2 text-left">
                    <div className="about-skill display: flex items-center"><p>HTML & CSS</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill display: flex items-center"><p>React JS</p><hr style={{width:"67%"}}/></div>
                    <div className="about-skill display: flex items-center"><p>JavaScript</p><hr style={{width:"58%"}}/></div>
                    <div className="about-skill display: flex items-center"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
                   
            </div>
        </div>
        <div className="about-achievements mt-10">
            <div className="about-achievement text-center">
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>3+</h1>
                <p className='text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl'>YEARS OF EXPERIRNCE</p>
            </div>
            <hr />
            <div className="about-achievement text-center">
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>5+</h1>
                <p className='text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl'>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement text-center">
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>5+</h1>
                <p className='text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl'>HAAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About