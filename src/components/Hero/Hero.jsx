import { motion } from "framer-motion";
import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.introText} variants={itemVariants}>
          Hi, I am
        </motion.div>

        <motion.h1 className={styles.bigHeading} variants={itemVariants}>
          Niaz Morshed.
        </motion.h1>

        <motion.h3 className={styles.subtitle} variants={itemVariants}>
          Full Stack Developer.
        </motion.h3>

        <motion.p className={styles.description} variants={itemVariants}>
          I'm a full-stack developer with experience using React and NodeJS. 
          Passionate about building exceptional digital experiences and solving complex problems through code.
        </motion.p>

        <motion.div className={styles.buttonGroup} variants={itemVariants}>
          <a href="#projects" className={styles.primaryBtn}>
            Check out my work!
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className={styles.imageWrapper}>
          <img src="/profile.jpg" alt="Niaz Morshed" className={styles.profileImage} />
        </div>
      </motion.div>
    </section>
  );
};
