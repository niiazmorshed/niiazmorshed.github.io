import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "FineAnswer",
      description: "A study abroad consultancy platform helping students explore universities, manage their applications, and access expert guidance for studying overseas — focusing on Ireland, UK, and Australia.",
      imageSrc: "/project_4.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
      demo: "https://www.fineanswer.net/",
      source: "https://github.com/niiazmorshed/FineAnswer"
    },
    {
      title: "IrishBangla",
      description: "A marketing and information website for Emerald Visa & Tours, featuring formal navigation, breadcrumbs, country-based Ireland visa guidance, and dedicated information pages.",
      imageSrc: "/project_5.png",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      demo: "https://irishbangla.vercel.app/",
      source: "https://github.com/niiazmorshed/Irishbangla"
    },
    {
      title: "Escape The Matrix",
      description: "A comprehensive full-stack LMS with role-based access control, course management, and a complete assessment system featuring assignments, quizzes, and discussions.",
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
      description: "An e-commerce platform for seamless online shopping with product management, cart functionality, and user authentication.",
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
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className={styles.container} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>03.</span> Some Things I've Built
        </h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
