import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const maxTitleLength = 30; // Adjust this value as needed
  const continuationSymbol = "-"; // Symbol to indicate continuation

  const titleLines =
    project.title.length > maxTitleLength
      ? project.title.match(new RegExp(`.{1,${maxTitleLength}}`, "g")) || []
      : [project.title];

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold text-secondary mb-2">
        {titleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < titleLines.length - 1 ? continuationSymbol : ""}
            {index < titleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      <p className="text-text mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-300 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary transition duration-300 flex items-center"
        >
          View on GitHub
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
