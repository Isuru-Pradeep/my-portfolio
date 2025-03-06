"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const highlightedProjects = [
  {
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
  },
  {
    title: "POS System for Shops",
    description:
      "A full-featured POS system built with React and Spring Boot, following a layered architecture with controllers, DTOs, entities, repositories, and services.",
    technologies: ["Spring Boot", "Java", "MySQL", "React", "Postman"],
  },
  {
    title: "Sri Lanka Dream Vacation Website",
    description:
      "A travel services website promoting tours and cab services for foreign travelers in Sri Lanka.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pulye Website",
    description:
      "A modern website for a local travel agency, built for scalability and performance.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const githubUsername = "Isuru-Pradeep";
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const transformedProjects = data.map((repo: any) => ({
          title: repo.name,
          description: repo.description || "No description provided.",
          technologies: repo.language ? [repo.language] : [],
          githubLink: repo.html_url,
        }));

        setGithubProjects(transformedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProjects();
  }, [githubUsername]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background py-8">
        <motion.h1
          className="text-4xl font-bold text-primary mb-8 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          My Projects
        </motion.h1>

        {/* Highlighted Projects Section */}
        <motion.section
          className="mt-8 container mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
            Highlighted Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedProjects.map((project, index) => (
              <ProjectCard key={`manual-${index}`} project={project} />
            ))}
          </div>
        </motion.section>

        {/* GitHub Projects Section */}
        <motion.section
          className="mt-16 container mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
            GitHub Projects
          </h2>
          {loading ? (
            <p className="text-text text-center">Loading GitHub projects...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {githubProjects.length > 0 ? (
                githubProjects.map((project, index) => (
                  <ProjectCard key={`github-${index}`} project={project} />
                ))
              ) : (
                <p className="text-text text-center">
                  No GitHub projects found.
                </p>
              )}
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
