import React from "react";
import AboutImage from "../assets/images/headshot_opt2.png";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Contact
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Saam Sheron"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Lillian Steinberg</p>
            <p className="text-lg text-secondary">
              3D Renderer
            </p>
            <p className="text-lg text-secondary">
              Software Developer
            </p>
            <a
              href="mailto:LillianKSteinberg@gmail.com"
              className="text-lg text-primary mt-4 block">
              LillianKSteinberg@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/lillianksteinberg/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
