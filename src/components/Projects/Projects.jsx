import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration, product management, and user authentication.",
      imageSrc: "projects/project.png",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      source: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      imageSrc: "projects/assignment.png",
      skills: ["TypeScript", "Next.js", "PostgreSQL"],
      demo: "#",
      source: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with forecasts, maps, and personalized alerts.",
      imageSrc: "projects/gym.png",
      skills: ["React", "API Integration", "Charts"],
      demo: "#",
      source: "#"
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
