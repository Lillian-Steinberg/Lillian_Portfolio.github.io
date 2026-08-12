import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import maya from "../assets/images/maya_logo.png";
import substance from "../assets/images/substance_logo.png";
import ae from "../assets/images/AE_logo.png";
import photoshopImage from "../assets/images/photoshop_logo.png";
import c4d from "../assets/images/C4D_Logo_b.png";
import keyshot from "../assets/images/keyshot_logo.png";
import octaneImage from "../assets/images/octane_logo.png";
import firefly from "../assets/images/fireflylogo.png";
import runway from "../assets/images/runway-ai-icon.png";

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-[#fff7eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 gap-8">
          
          {/* C4D */}
          <div className="text-center">
            <img
              src={c4d}
              alt="C4D"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Maxon Cinema 4D
            </h3>
          </div>

          {/* Keyshot */}
          <div className="text-center">
            <img
              src={keyshot}
              alt="Keyshot"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Keyshot Studio
            </h3>
          </div>

          {/* runway */}
          <div className="text-center">
            <img
              src={runway}
              alt="Runway"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Runway AI
            </h3>
          </div>

          {/* octane */}
          <div className="text-center">
            <img
              src={octaneImage}
              alt="Firebase"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Octane Render
            </h3>
          </div>

          {/* Maya */}
          <div className="text-center">
            <img
              src={maya}
              alt="maya"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Autodesk Maya
            </h3>
          </div>

          {/* substance */}
          <div className="text-center">
            <img
              src={substance}
              alt="substance"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Substance Painter
            </h3>
          </div>

          {/* Photoshop */}
          <div className="text-center">
            <img
              src={photoshopImage}
              alt="Photoshop"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Adobe Photoshop
            </h3>
          </div>
  
          {/* AE */}
          <div className="text-center">
            <img
              src={ae}
              alt="AE"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Adobe After Effects
            </h3>
          </div>
          {/* firefly */}
          <div className="text-center">
            <img
              src={firefly}
              alt="Firefly"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Adobe Firefly
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
