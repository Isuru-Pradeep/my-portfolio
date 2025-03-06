"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const About = () => {
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

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen flex flex-col px-8">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-primary mb-6"
            >
              About Me
            </motion.h1>
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg transition-shadow hover:shadow-hover">
              <Image
                src="/images/isuru.jpg"
                alt="Isuru Pradeep"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text mt-4 text-pretty"
            >
              I’m Isuru Pradeep, an IT professional passionate about technology,
              entrepreneurship, and creative problem-solving. With a diverse
              range of projects spanning AI development, full-stack systems, and
              business ventures, I strive to deliver innovative solutions that
              blend functionality with elegance.
              <br />
              <br />
              I specialize in software development, AI, and cloud computing,
              working with technologies like Java, Spring Boot, React, Next.js,
              Python, C, C++, MySQL, and MongoDB. I have hands-on experience in
              containerization and DevOps using Docker, along with cloud
              platforms like AWS. My AI expertise includes machine learning,
              deep learning, and computer vision, such as developing models for
              image recognition, object detection, and wall texture analysis.
              <br />
              <br />
              Beyond coding, I have an entrepreneurial mindset, having launched
              ventures like Zephyr Matrix, Valentina Clothing, and IP Market. I
              am also exploring cybersecurity and ethical hacking to enhance my
              expertise in digital security.
            </motion.p>
          </motion.div>
        </section>

        {/* Ventures Section */}
        <section className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-primary text-center mb-8"
            >
              My Ventures
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Venture 1: Laser Crafting Business */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  Laser Crafting Business
                </h3>
                <p className="text-text">
                  Creating unique cake toppers and statuettes using laser
                  cutting and engraving CNC machines.
                </p>
              </motion.div>

              {/* Venture 2: Valentina Clothing */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  Valentina Clothing
                </h3>
                <p className="text-text">
                  An online clothing store offering trendy fashion items for a
                  local audience.
                </p>
              </motion.div>

              {/* Venture 3: Zephyr Matrix */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  Zephyr Matrix
                </h3>
                <p className="text-text">
                  My IT company focused on delivering agile and robust
                  technology solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-primary text-center mb-8"
            >
              Notable Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1: Binary Classification Model */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  Binary Classification Model
                </h3>
                <p className="text-text">
                  Developed a binary classification model using the IMDB dataset
                  in Keras.
                </p>
              </motion.div>

              {/* Project 2: AI Model for Interior Image Objects */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  AI Model for Interior Image Objects
                </h3>
                <p className="text-text">
                  An AI model that identifies interior image objects, their
                  colors, and textures using AWS and Spring Boot.
                </p>
              </motion.div>

              {/* Project 3: POS System Development */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  POS System Development
                </h3>
                <p className="text-text">
                  Developing a Point of Sale system using Spring Boot with a
                  layered architecture.
                </p>
              </motion.div>

              {/* Project 4: React Project - pulye.com */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-custom transition-shadow hover:shadow-hover"
              >
                <h3 className="text-xl font-semibold text-h3 mb-2">
                  React Project - pulye.com
                </h3>
                <p className="text-text">
                  Working on a React-based project named pulye.com.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-text mb-4"
            >
              Want to know more? Explore my skills, business ventures, and
              projects.
            </motion.p>
            <div className="space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/skills"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
              >
                Skills
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/business"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300"
              >
                Business
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition duration-300"
              >
                Projects
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
