import React from "react";
import AboutImage from "../assets/images/dp-kanch.jpg";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Firebase</li>
                <li>Redux</li>
                <li>REST API</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">Bachelors in Computer Application</p>
              <p>Graduated from Loyola College (2022)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certification
              </h3>
              <p className="font-medium">
                Web Designing and Development (MERN Stack)
              </p>
              <p> Certified from Web D School in (Nov 2024)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/saam-rgb/Trailed-v2"
                    target="_blank"
                    rel="noopener noreferrer">
                    Trailed
                  </a>{" "}
                  - A task management app built with ReactJS, Node.js, MongoDB,
                  and Express
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/saam-rgb/Sky-Freight"
                    target="_blank"
                    rel="noopener noreferrer">
                    SkyFreight
                  </a>{" "}
                  - A responsive single-page website for an air cargo company
                  built with ReactJS and Bootstrap
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/saam-rgb/ToDo-FlareLink"
                    target="_blank"
                    rel="noopener noreferrer">
                    Todo Flarelist
                  </a>{" "}
                  - A to-do list application built with ReactJS and Tailwind CSS
                </li>
                <li>
                  <a
                    href="https://github.com/saam-rgb/Mowli-Bakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary">
                    Mowli Bakery
                  </a>{" "}
                  - A bakery e-commerce app built with ReactJS and Firebase
                </li>
              </ul>
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
