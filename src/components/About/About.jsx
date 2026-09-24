import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.css";

export const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "C++", "C", "JavaScript"] },
    { category: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Firebase", "Vercel"] },
  ];

  return (
    <section className={styles.container} id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              I'm a software engineer from Dhaka, Bangladesh, currently working as a{" "}
              <span className={styles.highlight}>Junior Backend Developer at Dublin 4IR</span> — building
              backend services, APIs and AI integrations for production systems.
            </p>
            <p className={styles.paragraph}>
              My expertise spans RESTful API development, database design, and full-stack solutions.
              I've shipped projects ranging from learning management systems and healthcare platforms
              to e-commerce solutions, visa decision alerts and accountancy client portals.
            </p>
            <p className={styles.paragraph}>
              Beyond work, I'm passionate about competitive programming — actively solving problems on
              Codeforces and LeetCode to keep my algorithmic thinking sharp.
            </p>

            <div className={styles.skillsSection}>
              <p className={styles.skillsLabel}>Technologies I work with</p>
              <div className={styles.skillsGrid}>
                {skills.map((group, i) => (
                  <motion.div
                    key={i}
                    className={styles.skillRow}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <span className={styles.skillCategory}>{group.category}</span>
                    <span className={styles.skillItems}>{group.items.join(" · ")}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageFrame}>
              <img src="/profile.jpg" alt="Niaz Morshed" className={styles.profileImage} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
