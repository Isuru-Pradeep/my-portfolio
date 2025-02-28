"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";

const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    width: Math.random() * 10 + 5,
    height: Math.random() * 10 + 5,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
  }));
};

const Home = () => {
  const [particles, setParticles] = useState(generateParticles(10));

  useEffect(() => {
    setParticles(generateParticles(10));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0.3 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const decorativeShapeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen flex flex-col">
        {/* Hero Section */}
        <Hero />
        {/* Rest of your sections */}
        <section className="py-16 flex-grow">
          {/* Your existing About Section */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-text mb-8">
              I have experience in technology-related projects, including AI
              development, full-stack software systems, and entrepreneurial
              ventures.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
            >
              <Link href="/about" legacyBehavior>
                <a>View Profile</a>
              </Link>
            </motion.button>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-16">
          {/* Your existing Projects Section */}
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Cards */}
              <ProjectCard
                project={{
                  title:
                    "AI Model for Identifying Interior Designs and Textures",
                  description:
                    "Using AWS and Spring Boot to segment walls and analyze textures for intelligent insights.",
                  technologies: [
                    "AWS",
                    "Spring Boot",
                    "AI",
                    "Image Segmentation",
                  ],
                }}
              />
              <ProjectCard
                project={{
                  title: "POS System for Shops",
                  description:
                    "Developed using Spring Boot with a robust architecture of controller, DTO, entity, repository, and service layers.",
                  technologies: ["Spring Boot", "Java", "Database Management"],
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
