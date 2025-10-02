import React from "react";
import "../Styles/MyWork.css";
import image1 from "../assets/palmbloc.png";
import image2 from "../assets/sprintat.png";
import image3 from "../assets/tizmine.png";
import image4 from "../assets/Home Page1.svg";
import image5 from "../assets/kfnetwork.png";
import image6 from "../assets/toroforge.png";

const MyWork = () => {
  return (
    <div
      id="Portfolio"
      className="mywork display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 mt-20"
    >
      <div className="mywork-title">
        <h1 data-aos="flip-up" className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl">
          My latest work{" "}
        </h1>
      </div>
      <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-20">
        <a target="blank" href="https://www.palmbloc.com/">
          <div data-aos="flip-up" className="mywork-format">
            <img src={image1} alt="" className=""/>
          </div>
        </a>

        <a target="blank" href="https://www.sprintat.com/">
          <div data-aos="flip-down" className="mywork-format">
            <img src={image2} alt="" className=""/>
          </div>
        </a>
        <a target="blank" href="https://www.tizminefarms.com/">
          <div data-aos="flip-up" className="mywork-format">
            <img src={image3} alt="" className=""/>
          </div>
        </a>
      </div>
      <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-5">
      <a target="blank" href="https://admin.kfnetwork.io/">
          <div data-aos="flip-down" className="mywork-format">
            <img src={image5} alt="" className=""/>
          </div>
        </a>
        <a target="blank" href="https://www.toroforgecollective.com/">
          <div data-aos="flip-up" className="mywork-format">
            <img src={image6} alt="" className=""/>
          </div>
        </a>
        <a target="blank" href="https://cemperium-web.vercel.app/">
          <div data-aos="flip-down" className="mywork-format">
            <img src={image4} alt="" />
          </div>
        </a>

        
       
      </div>
    </div>
  );
};

export default MyWork;
