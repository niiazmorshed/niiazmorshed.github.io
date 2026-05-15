import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      type: "experience",
      name: "Dublin 4IR",
      role: "Backend Developer Intern",
      period: "January 2026 - Present",
      website: "https://dublin4ir.com/",
      responsibilities: [
        "Developing and maintaining backend services and RESTful APIs for enterprise applications",
        "Collaborating with cross-functional teams to design and implement scalable solutions",
        "Working with modern backend technologies including Node.js, Express.js, and database systems",
      ]
    },
    {
      type: "education",
      name: "BRAC University",
      degree: "Bachelor of Science in Computer Science",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2026",
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
    <section className={styles.container} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>02.</span> Education & Experience
        </h2>

        <div className={styles.content}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              {items.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${activeTab === index ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {items[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  {items[activeTab].type === "experience" ? (
                    <>
                      <h3 className={styles.jobTitle}>
                        {items[activeTab].role}{" "}
                        <a 
                          href={items[activeTab].website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.companyLink}
                        >
                          @ {items[activeTab].name}
                        </a>
                      </h3>
                      <p className={styles.dateRange}>{items[activeTab].period}</p>
                      
                      <ul className={styles.experienceList}>
                        {items[activeTab].responsibilities.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className={styles.experienceItem}
                            variants={itemVariants}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3 className={styles.degree}>{items[activeTab].degree}</h3>
                      <p className={styles.university}>{items[activeTab].name}</p>
                      <p className={styles.location}>{items[activeTab].location}</p>
                      <p className={styles.dateRange}>{items[activeTab].period}</p>
                      
                      <div className={styles.educationDetails}>
                        <p className={styles.description}>
                          {items[activeTab].description}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
