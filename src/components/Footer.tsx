"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4 w-full"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; 2025 Zephyr Matrix. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/isuru-pradeep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary flex items-center space-x-2"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Isuru-Pradeep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary flex items-center space-x-2"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://wa.me/+94766664562"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary flex items-center space-x-2"
          >
            <FiPhone />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
