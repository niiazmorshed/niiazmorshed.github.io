import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      type: "experience",
      name: "Dublin 4IR",
      website: "https://dublin4ir.com/",
      positions: [
        {
          role: "Junior Backend Developer",
          period: "April 2026 - Present",
          responsibilities: [
            "Design, build and maintain backend services and RESTful APIs for production applications",
            "Own system architecture and database design decisions, focused on scalability and maintainability",
            "Integrate AI capabilities into products and internal workflows",
            "Manage deployments and releases, and support internal IT operations",
          ],
        },
        {
          role: "Backend Developer Intern",
          period: "January 2026 - April 2026",
          responsibilities: [
            "Developed RESTful APIs and implemented database features for client projects",
            "Supported deployments and maintained Git-based workflows across the team",
            "Contributed to frontend delivery in collaboration with cross-functional teams",
          ],
        },
      ],
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
        <h2 className={styles.title}>Education &amp; Experience</h2>

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
                    items[activeTab].positions.map((position, posIdx) => (
                      <div key={posIdx} className={posIdx ? styles.position : undefined}>
                        <h3 className={styles.jobTitle}>
                          {position.role}{" "}
                          <a
                            href={items[activeTab].website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.companyLink}
                          >
                            @ {items[activeTab].name}
                          </a>
                        </h3>
                        <p className={styles.dateRange}>{position.period}</p>

                        <ul className={styles.experienceList}>
                          {position.responsibilities.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className={styles.experienceItem}
                              variants={itemVariants}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))
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
