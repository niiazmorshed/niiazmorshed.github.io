import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export const Loader = ({ onLoadComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  // Let the intro animations play, then fade the loader out.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadComplete();
      }, 600);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      className={styles.loaderContainer}
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.loaderContent}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: isExiting ? 1.08 : 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className={styles.logoWrapper}>
          <span className={styles.glow} aria-hidden="true" />
          <svg
            className={styles.logo}
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="loaderGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#4488ff" />
              </linearGradient>
            </defs>

            {/* Continuously spinning accent ring */}
            <circle
              className={styles.ring}
              cx="80"
              cy="80"
              r="74"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="110 355"
            />

            {/* Hexagon outline draws itself in */}
            <motion.path
              d="M 80 22 L 130 51 L 130 109 L 80 138 L 30 109 L 30 51 Z"
              stroke="url(#loaderGradient)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />

            {/* Letter mark */}
            <motion.text
              x="50%"
              y="51%"
              dominantBaseline="central"
              textAnchor="middle"
              className={styles.logoText}
              fill="url(#loaderGradient)"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              N
            </motion.text>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};
