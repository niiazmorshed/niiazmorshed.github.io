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
    { category: "Programming Languages", items: ["Python", "C++", "C", "JavaScript"] },
    { category: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful API Development"] },
    { category: "Database", items: ["MongoDB (NoSQL)", "MySQL (SQL)"] },
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
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>01.</span> About Me
        </h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              I am a software engineer from Dhaka, Bangladesh.
            
            </p>
            <p className={styles.paragraph}>
              I'm currently working as a Backend Developer Intern at Dublin 4IR, where I'm gaining hands-on 
              experience in developing enterprise-level applications. My expertise lies in RESTful API development, 
              database design, and creating efficient server-side solutions. I've successfully built full-stack 
              applications including learning management systems, healthcare platforms, and e-commerce solutions.
            </p>

            <p className={styles.paragraph}>
              Beyond development, I have a huge interest in competitive programming and problem-solving. 
              I actively solve problems on platforms like Codeforces and LeetCode to sharpen my algorithmic 
              thinking. My goal is to contribute unique solutions and build creative products that make a difference.
            </p>

            <p className={styles.paragraph}>
              Here are the technologies and tools I work with:
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

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/profile.jpg" alt="Niaz Morshed" className={styles.profileImage} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
