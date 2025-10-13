import React from "react";
import HomeImage from "../assets/images/LillianSteinberg_Headshot_Recolored_extended.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${HomeImage})`,
      }}
    >
      {/* Overlay (optional slight dark tint to make text readable) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          Product Rendering | 3D Interiors | Technical Animation
        </h1>

        <p className="mb-6 text-lg leading-relaxed drop-shadow-md">
          Based in Rochester, New York. 
          Current Senior Multimedia Specialist for Vine Creative Studios at Partners and Napier. 
          Alumni from Rochester Institute of Technology, and former Adjunct Professor. 
          3D designer with a focus on e-commerce and interior design, and specialty interest in luxury rendering and animation.
        </p>

        <a
          href="/Saam-Sheron-Software-dev.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
        >
          Watch Reel
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
