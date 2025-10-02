import React from "react";
import "../Styles/Hero.css";
import ProfileImg from "../assets/IMG_3608.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <div id="home" className="hero mb-20 pr-2 pl-2 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-20">
      
      <h1 data-aos="fade-down" data-aos-delay="100" className="hidden md:block text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-base max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-bold sm:font-bold md:font-bold lg:font-bold xl:font-bold">
        {" "}
        <span data-aos="fade-down" data-aos-delay="100" className="">I'm Aderibigbe Victor,</span> <br /> a frontend developer.
        
      </h1>

      <h1 data-aos="fade-down" data-aos-delay="100" className="block md:hidden text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-bold sm:font-bold md:font-bold lg:font-bold xl:font-bold">
        {" "}
        <span>I'm Aderibigbe Victor,</span> <br /> A frontend developer 
        
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-base max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-base leading-normal sm:leading-relaxed md:leading-loose lg:leading-snug xl:leading-normal">
        I am a frontend developer from Lagos, Nigeria with over 3 years of
        experience in multiple personal freelance and companies projects
      </p>
      <div className="hero-action display: flex grid grid-cols-2 gap-5 sm:gap-20 md:gap-20 lg:gap-20 xl:gap-35 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <div data-aos="flip-left" data-aos-delay="100" className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div data-aos="flip-right" data-aos-delay="100" className="hero-resume text-center"><AnchorLink className='anchor-link' offset={50} href='#Portfolio'>Portfolio</AnchorLink></div>
      </div>
    </div>
  );
};

export default Hero;
