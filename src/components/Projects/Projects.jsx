import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "Escape The Matrix",
      description: "A comprehensive, full-stack Learning Management System (LMS) with role-based access control, course management, and a complete assessment system featuring assignments, quizzes, and discussions.",
      imageSrc: "/project_1.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Firebase", "TailwindCSS"],
      demo: "https://escape-the-matrix-id9n.vercel.app/",
      source: "https://github.com/niiazmorshed/Escape-The-Matrix"
    },
    {
      title: "Digital Healthcare Assistant",
      description: "A modern healthcare platform designed to provide digital health services and assistance to patients and healthcare providers.",
      imageSrc: "/project_2.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://digital-healthcare-assistant.vercel.app/",
      source: "https://github.com/niiazmorshed/Digital-Healthcare-Assistant"
    },
    {
      title: "LagbeMart",
      description: "An e-commerce platform for seamless online shopping experience with product management, cart functionality, and user authentication.",
      imageSrc: "/project_3.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://lagbe-mart-v5fh.vercel.app/",
      source: "https://github.com/niiazmorshed/LagbeMart"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className={styles.container} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>03.</span> Some Things I've Built
        </h2>

        <motion.div
          className={styles.projects}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} index={id} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
