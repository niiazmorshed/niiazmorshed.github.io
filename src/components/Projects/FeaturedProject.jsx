import { motion } from "framer-motion";
import React from "react";
import styles from "./FeaturedProject.module.css";

export const FeaturedProject = ({ project, align = "right" }) => {
  const isLeft = align === "left";

  return (
    <motion.article
      className={`${styles.featured} ${isLeft ? styles.reverse : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <a
        href={project.demo || project.source}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
        aria-label={`${project.title} preview`}
      >
        <div className={styles.imageWrapper}>
          <img src={project.imageSrc} alt={project.title} />
          <div className={styles.imageTint} />
        </div>
      </a>

      <div className={styles.content}>
        <p className={styles.overline}>Featured Project</p>
        <h3 className={styles.title}>
          <a
            href={project.demo || project.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>

        <div className={styles.description}>
          <p>{project.description}</p>
        </div>

        {project.skills?.length ? (
          <ul className={styles.techList}>
            {project.skills.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        ) : null}

        <div className={styles.links}>
          {project.source ? (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="External Link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};


