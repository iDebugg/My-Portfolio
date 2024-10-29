import React from 'react'
import '../Styles/Services.css'


const Services = () => {
  return (
    <div className='services display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8'>
        <div className="services-title">
            <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl'>My Services</h1>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="310" height="126">
              <path d="M 5 45 C 120 -30, 160 60, 250 20" fill="#d43397"/>
          </svg> */}

        </div>
        <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-20">
            <div className="services-format">
                <h3>01</h3>
                <h2>Web Development</h2>
                <p>I specialize in creating responsive, user-friendly websites .</p>
                {/* and web applications that are both visually appealing and functionally robust. With a strong foundation in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, I am passionate about crafting seamless digital experiences. My goal is to turn complex ideas into simple, elegant solutions that help businesses and individuals thrive online */}
                <div className="services-readmore">
              <p>Read More</p>
            </div>
            </div>
            <div className="services-format">
                <h3>02</h3>
                <h2>Graphics Design</h2>
                <p>I specialize in creating responsive, user-friendly websites .</p>
                {/* and web applications that are both visually appealing and functionally robust. With a strong foundation in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, I am passionate about crafting seamless digital experiences. My goal is to turn complex ideas into simple, elegant solutions that help businesses and individuals thrive online */}
                <div className="services-readmore">
              <p>Read More</p>
            </div>
            </div>
            <div className="services-format">
                <h3>03</h3>
                <h2>App Design</h2>
                <p>I specialize in creating responsive, user-friendly websites .</p>
                {/* and web applications that are both visually appealing and functionally robust. With a strong foundation in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, I am passionate about crafting seamless digital experiences. My goal is to turn complex ideas into simple, elegant solutions that help businesses and individuals thrive online */}
                <div className="services-readmore">
              <p>Read More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="23.828" height="14.769"><path d="m13.616 2.828 2.585 2.586H0v4h16.143l-2.527 2.526 2.828 2.829 7.384-7.384L16.444 0l-2.828 2.828z"/></svg>
            </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Services