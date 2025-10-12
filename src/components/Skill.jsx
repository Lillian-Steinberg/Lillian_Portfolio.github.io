import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import firebaseImage from "../assets/images/maya_logo.png";
import reduxImage from "../assets/images/substance_logo.png";
import figmaImage from "../assets/images/AE_logo.png";
import expressImage from "../assets/images/C4D_Logo_b.png";
import mongodbImage from "../assets/images/keyshot_logo.png";

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          

          {/* C4D */}
          <div className="text-center">
            <img
              src={expressImage}
              alt="Firebase"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Maxon Cinema 4D
            </h3>
          </div>

          {/* Keyshot */}
          <div className="text-center">
            <img
              src={mongodbImage}
              alt="Firebase"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Keyshot Studio
            </h3>
          
          </div>

          {/* Maya */}
          <div className="text-center">
            <img
              src={firebaseImage}
              alt="Firebase"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Autodesk Maya
            </h3>
          </div>

          {/* substance */}
          <div className="text-center">
            <img
              src={reduxImage}
              alt="Redux"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Substance Painter
            </h3>
          </div>

          {/* AE */}
          <div className="text-center">
            <img
              src={figmaImage}
              alt="Figma"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Adobe After Affects
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
