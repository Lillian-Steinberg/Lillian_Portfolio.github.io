import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/*
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          <a
            href="https://github.com/saam-rgb"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="fab fa-github text-2xl hover:text-secondary" />
          </a>
          <a
            href="https://linkedin.com/in/saam-sheron"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="fab fa-github text-2xl hover:text-secondary" />
          </a>
          <a
            href="https://instagram.com/saam_sheron"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="fab fa-github text-2xl hover:text-secondary" />
          </a>
        </div>

        <p className="text-lg">
          &copy; {new Date().getFullYear()} Saam Sheron. All rights reserved.
        </p>
        <p className="text-sm">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/saam-sheron"
            className="hover:text-black underline underline-offset-2">
            Saam Sheron
          </a>
        </p>
        */}
      </div>
    </footer>
  );
};

export default Footer;
