import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AI Model for Identifying Interior Designs and Textures",
    description:
      "Using AWS and Spring Boot to segment walls and analyze textures for intelligent insights.",
    technologies: ["AWS", "Spring Boot", "AI", "Image Segmentation"],
  },
  {
    title: "POS System for Shops",
    description:
      "Developed using Spring Boot with a robust architecture of controller, DTO, entity, repository, and service layers.",
    technologies: ["Spring Boot", "Java", "Database Management"],
  },
  {
    title: "Sri Lanka Dream Vacation Website",
    description:
      "Designed to promote travel services and cab bookings for tourists exploring Sri Lanka.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "pulye.com",
    description:
      "A React project aimed at creating innovative user experiences.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold text-primary">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
