import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Education.module.css";

export const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const education = [
    {
      institution: "BRAC University",
      degree: "Bachelor of Science in Computer Science",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2026",
      description: "Pursuing a comprehensive Computer Science degree with a focus on software engineering, algorithms, and data structures. Gained strong fundamentals in programming, database systems, and web development through coursework and practical projects."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section className={styles.container} id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>03.</span> Education
        </h2>

        <div className={styles.content}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              {education.map((edu, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${activeTab === index ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {edu.institution}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {education[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <h3 className={styles.degree}>{education[activeTab].degree}</h3>
                  <p className={styles.university}>{education[activeTab].institution}</p>
                  <p className={styles.location}>{education[activeTab].location}</p>
                  <p className={styles.dateRange}>{education[activeTab].period}</p>
                  
                  <div className={styles.educationDetails}>
                    <p className={styles.description}>
                      {education[activeTab].description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

