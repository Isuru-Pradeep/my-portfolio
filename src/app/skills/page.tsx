"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaCuttlefish,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiPython,
  SiPostman,
  SiMongodb,
  SiCplusplus,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "AWS", icon: <FaAws size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "C", icon: <FaCuttlefish size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Arduino", icon: <FaMicrochip size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
];

const Skills = () => {
  return (
    <>
      <Head>
        <title>My Skills</title>
        <meta name="description" content="Skills of Isuru Pradeep" />
      </Head>
      <Navbar />
      <main className="bg-background min-h-screen flex flex-col items-center py-16">
        <section className="text-center px-2">
          <h1 className="text-3xl font-bold text-primary mb-4 mt-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-text mb-8 px-4">
            I am skilled in various technologies and frameworks that enable me
            to build robust and scalable applications. Below are some of the key
            skills and expertise I possess.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-primary text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <h2 className="text-2xl font-semibold mt-4">{skill.name}</h2>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Skills;
