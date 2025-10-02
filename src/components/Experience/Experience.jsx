import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Tech Company A",
      role: "Senior Developer",
      duration: "2022 - Present",
      responsibilities: [
        "Built and maintained critical components used to construct Shopify's frontend",
        "Collaborated with designers and developers to create seamless user experiences",
        "Implemented responsive design and mobile-first approach across all projects",
        "Optimized application performance resulting in 40% faster load times"
      ]
    },
    {
      company: "Startup B",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed and shipped highly interactive web applications for Apple Music",
        "Built and styled interactive web apps for millions of users",
        "Worked with designers to implement mobile-first designs",
        "Interfaced with user experience designers and other developers"
      ]
    },
    {
      company: "Agency C",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      responsibilities: [
        "Developed e-commerce web applications for Fortune 500 companies",
        "Created pixel-perfect websites from Figma designs",
        "Collaborated with back-end developers to integrate RESTful APIs",
        "Mentored junior developers and conducted code reviews"
      ]
    }
  ];

  return (
    <section className={styles.container} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>02.</span> Where I've Worked
        </h2>

        <div className={styles.content}>
          <div className={styles.tabList} role="tablist">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-selected={activeTab === index}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className={styles.tabPanel}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.jobTitle}>
                {experiences[activeTab].role}{" "}
                <span className={styles.company}>
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className={styles.duration}>{experiences[activeTab].duration}</p>
              <ul className={styles.responsibilities}>
                {experiences[activeTab].responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
