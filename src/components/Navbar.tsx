"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4 fixed top-0 w-full z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl md:text-2xl font-bold">Isuru Pradeep</a>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block transition-all duration-300 ease-in-out absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0 text-center`}
        >
          {["Home", "About", "Projects", "Business", "Skills", "Contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                className={`my-2 md:my-0 ${
                  pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-secondary"
                    : ""
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  legacyBehavior
                >
                  <a className="hover:text-secondary text-sm md:text-base transition-colors duration-300">
                    {item}
                  </a>
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
