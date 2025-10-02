import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.css";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ];

  return (
    <section className={styles.container} id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>01.</span> About Me
        </h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Hello! I'm a passionate developer who enjoys creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>

            <p className={styles.paragraph}>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
              a huge corporation, and a student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences.
            </p>

            <p className={styles.paragraph}>
              Here are a few technologies I've been working with recently:
            </p>

            <motion.ul
              className={styles.skillsList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skillGroup, index) => (
                <motion.li key={index} className={styles.skillItem} variants={itemVariants}>
                  <span className={styles.skillCategory}>{skillGroup.category}:</span>
                  <span className={styles.skillTech}>{skillGroup.items.join(", ")}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
