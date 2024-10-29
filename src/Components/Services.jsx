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
                <p className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'> I specialize in creating visually engaging, responsive, and user-friendly web applications. Using my expertise in JavaScript, React.js, HTML, and CSS (including Tailwind CSS).</p>
              </div>
            <div className="services-format">
                <h3>02</h3>
                <h2>Graphics Design</h2>
                <p className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>I bring creativity and precision to each project, transforming ideas into compelling visual content. My work spans branding, logos, digital illustrations, and layouts, focusing on clean design and strong aesthetics that communicate effectively</p>
                </div>
            <div className="services-format">
                <h3>03</h3>
                <h2>App Design</h2>
                <p className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>I specialize in crafting intuitive, high-performing interfaces for mobile applications. Leveraging frameworks like React Native, I build seamless and responsive mobile experiences that work smoothly across both iOS and Android.</p>
                 </div>
            
            
        </div>
    </div>
  )
}

export default Services