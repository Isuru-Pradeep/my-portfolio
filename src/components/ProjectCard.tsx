"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <div className="mt-4">
        <p className="text-sm text-secondary">
          Technologies: {project.technologies.join(", ")}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
