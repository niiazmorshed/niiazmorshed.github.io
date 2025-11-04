import { motion } from "framer-motion";
import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>02.</span> Experience
        </h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            I’m currently building projects and sharpening problem-solving skills. Check out my projects and coding profiles below.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
