import React, { useState } from "react";
import "../Styles/MyWork.css";
import image1 from "../assets/palmbloc.png";
import image2 from "../assets/sprintat.png";
import image3 from "../assets/tizmine.png";
import image4 from "../assets/Home Page1.svg";
import image5 from "../assets/kfnetwork.png";
import image6 from "../assets/toroforge.png";
import image7 from "../assets/Quinthex.png";
import image8 from "../assets/LuNetwork.png";
import image9 from "../assets/ToroAccess.png"; 
import image10 from "../assets/medeetAdmin.png";

const projects = [
  { id: 1, image: image1, href: "https://www.palmbloc.com/" },
  { id: 2, image: image2, href: "https://www.sprintat.com/" },
  { id: 3, image: image3, href: "https://www.tizminefarms.com/" },
  { id: 4, image: image5, href: "https://admin.kfnetwork.io/" },
  { id: 10, image: image10, href: "https://admin.medeet.com/" },
  { id: 6, image: image4, href: "https://cemperium-web.vercel.app/" },
  { id: 5, image: image6, href: "https://www.toroforgecollective.com/" },
  { id: 7, image: image7, href: "https://www.quanthex.io/" },
  { id: 8, image: image8, href: "https://www.lunetwork.io/" },
  { id: 9, image: image9, href: "https://www.accexafrica.com/" },

];

const ITEMS_PER_PAGE = 3;

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + ITEMS_PER_PAGE < projects.length;

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
  };

  const handleNext = () => {
    if (canGoNext) setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  return (
    <div
      id="Portfolio"
      className="mywork flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 mt-20"
    >
      <div className="mywork-title">
        <h1
          data-aos="flip-up"
          className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl"
        >
          My latest work
        </h1>
      </div>

      <div className="flex items-center justify-center gap-4 mt-20 w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`carousel-arrow left-arrow flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            canGoPrev
              ? "border-white text-white hover:bg-white hover:text-black cursor-pointer opacity-100"
              : "border-gray-600 text-gray-600 cursor-not-allowed opacity-30"
          }`}
          aria-label="Previous projects"
        >
          &#8592;
        </button>

        <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
          {visibleProjects.map((project, i) => (
            <a key={project.id} target="_blank" rel="noreferrer" href={project.href}>
              <div
                data-aos={i % 2 === 0 ? "flip-up" : "flip-down"}
                className="mywork-format"
              >
                <img src={project.image} alt={`Project ${project.id}`} />
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`carousel-arrow right-arrow flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            canGoNext
              ? "border-white text-white hover:bg-white hover:text-black cursor-pointer opacity-100"
              : "border-gray-600 text-gray-600 cursor-not-allowed opacity-30"
          }`}
          aria-label="Next projects"
        >
          &#8594;
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * ITEMS_PER_PAGE)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentPage === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;