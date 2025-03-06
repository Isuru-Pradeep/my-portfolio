"use client";
import Link from "next/link";
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
          <Link href="https://linkedin.com" legacyBehavior>
            <a className="hover:text-secondary flex items-center space-x-2">
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
          </Link>
          <Link href="https://github.com" legacyBehavior>
            <a className="hover:text-secondary flex items-center space-x-2">
              <FiGithub />
              <span>GitHub</span>
            </a>
          </Link>
          <Link href="https://wa.me/+94766664562" legacyBehavior>
            <a className="hover:text-secondary flex items-center space-x-2">
              <FiPhone />
              <span>WhatsApp</span>
            </a>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
