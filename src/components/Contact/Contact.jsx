import { motion } from "framer-motion";
import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.overline}>
          <span className={styles.sectionNumber}>04.</span> What's Next?
        </p>
        
        <h2 className={styles.title}>Get In Touch</h2>
        
        <p className={styles.description}>
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a href="mailto:niazmorshedrafi@gmail.com" className={styles.emailButton}>
          Say Hello
        </a>
      </motion.div>

      <footer className={styles.footer}>
        <div className={styles.credit}>
          <p>Designed & Built by Niaz Morshed</p>
        </div>
      </footer>
    </section>
  );
};
