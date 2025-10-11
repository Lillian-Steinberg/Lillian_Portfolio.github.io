import React from "react";
import HomeImage from "../assets/images/LillianSteinberg_Headshot_Recolored_2.png";

const HeroSection = () => {
  return (
    <section className="bg-[#ebe0d8] py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left ">
            <h1 className="text-4xl font-bold text-secondary mb-4 md:mt-0 mt-6 ">
              Product Rendering | 3D Interiors | Technical Animation
            </h1>
            <p className="text-secondary mb-6 text-justify">
              Based in Rochester, New York. 
              Current Senior Multimedia Specialist for Vine Creative Studios at Partners and Napier. 
              Alumni from Rochester Institute of Technology, and former Adjunct Professor. 
              3D designer with a focus and specialty on e-commerce and interior design, and specialty interest in luxury rendering and animation. 
            </p>
            {/* Call to Action Button */}
            <a
              href="/Saam-Sheron-Software-dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
              title="Download Resume">
              Watch Reel
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HomeImage}
              alt="Saam Sheron - Software Developer"
              className="w-full h-auto rounded-lg shadow-lg"
              title="Saam Sheron"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
