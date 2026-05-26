import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export const Loader = ({ onLoadComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  // Count up 0 -> 100 while the intro animations play.
  useEffect(() => {
    const duration = 1900; // ms to reach 100%
    const stepTime = 20;
    const increment = 100 / (duration / stepTime);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Hold briefly at 100%, then fade the loader out.
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

        <div className={styles.progressWrapper}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className={styles.progressText}>{Math.round(progress)}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
