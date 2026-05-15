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

        <motion.p className={styles.description} variants={itemVariants}>
          I'm a Software Engineer, currently working for Dublin 4IR as a Backend Developer Intern. I am in my final year of my undergraduate studies at BRAC University.
        </motion.p>

        <motion.div className={styles.buttonGroup} variants={itemVariants}>
          <a href="#projects" className={styles.primaryBtn}>
            Check out my work!
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
};
