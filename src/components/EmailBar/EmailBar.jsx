import { motion } from "framer-motion";
import React from "react";
import styles from "./EmailBar.module.css";

export const EmailBar = () => {
  return (
    <motion.div
      className={styles.emailBar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a href="mailto:niazmorshedrafi@gmail.com" className={styles.emailLink}>
        niazmorshedrafi@gmail.com
      </a>
      <motion.div 
        className={styles.verticalLine}
        initial={{ height: 0 }}
        animate={{ height: "90px" }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
    </motion.div>
  );
};

