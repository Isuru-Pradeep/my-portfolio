"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const timer = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen flex flex-col">
        {/* Hero Section */}
        <Hero />
        <section className="py-16 flex-grow px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-text mb-8">
              Passionate about AI, full-stack development, and innovative tech
              solutions, I build software that bridges creativity and
              functionality. With experience in developing intelligent systems
              and scalable applications, I thrive on solving complex challenges
              through technology.
            </p>
            <Link href="/about" legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
              >
                <a>Learn More</a>
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-16 px-8">
          {/* Your existing Projects Section */}
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Cards */}
              <ProjectCard
                project={{
                  title: "AI Model for Identifying Interior Wall and Textures",
                  description:
                    "Developed an AI model using ResNet and YOLOv11 for object detection, segmentation, and texture analysis of interior walls.",
                  technologies: [
                    "AWS",
                    "Spring Boot",
                    "AI",
                    "Image Segmentation",
                    "Deep Learning",
                    "Python",
                  ],
                }}
              />
              <ProjectCard
                project={{
                  title: "Sri Lanka Dream Vacation Website",
                  description:
                    "A travel services website promoting tours and cab services for foreign travelers in Sri Lanka.",
                  technologies: ["React", "HTML", "CSS", "JavaScript"],
                }}
              />
            </div>
            <div className="flex justify-center">
              <Link href="/projects" legacyBehavior>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 mt-5"
                >
                  <a>See More Projects</a>
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
