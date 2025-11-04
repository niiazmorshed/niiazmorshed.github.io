import { motion } from "framer-motion";
import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const certificates = [
    {
      name: "BUCC Hackathon",
      image: "/bucc_hackerthon.jpg",
      description: "Participated and excelled in BUCC Hackathon competition"
    },
    {
      name: "Programming Hero",
      image: "/programming_hero.png",
      description: "Completed comprehensive web development training program"
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/niiazmorshed/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.04 13.07c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.152-4.152c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l.177.177 3.12-3.12c.467-.467 1.111-.645 1.824-.645s1.357.195 1.823.662L21.958 7.5c.467.467.702 1.111.702 1.824s-.235 1.357-.702 1.824l-5.056 5.056zm-5.056-5.056l-3.12-3.12-4.152 4.152 3.12 3.12 4.152-4.152z"/>
        </svg>
      )
    },
    {
      platform: "Codeforces",
      url: "https://codeforces.com/profile/niazmorshedrafi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3h-15A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21zm9-13.5V9H18V7.5h-4.5zm0 3V12H18v-1.5h-4.5zm0 3V15H18v-1.5h-4.5zm-9-6v1.5H9V7.5H4.5zm0 3v1.5H9v-1.5H4.5zm0 3v1.5H9v-1.5H4.5z"/>
        </svg>
      )
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

  return (
    <section className={styles.container} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>02.</span> Achievements & Coding Profiles
        </h2>

        <div className={styles.content}>
          <div className={styles.certificatesSection}>
            <h3 className={styles.sectionSubtitle}>Certificates</h3>
            <motion.div
              className={styles.certificatesGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className={styles.certificateCard}
                  variants={itemVariants}
                >
                  <div className={styles.certificateImageWrapper}>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className={styles.certificateImage}
                    />
                  </div>
                  <h4 className={styles.certificateName}>{cert.name}</h4>
                  <p className={styles.certificateDescription}>{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className={styles.profilesSection}>
            <h3 className={styles.sectionSubtitle}>Coding Profiles</h3>
            <motion.div
              className={styles.profilesGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileCard}
                  variants={itemVariants}
                >
                  <div className={styles.profileIcon}>{profile.icon}</div>
                  <h4 className={styles.profilePlatform}>{profile.platform}</h4>
                  <p className={styles.profileLink}>View Profile →</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
