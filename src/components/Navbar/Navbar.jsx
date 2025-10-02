import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const menuVariants = {
    closed: { opacity: 0, x: 100 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <a className={styles.logo} href="/">
        <img src="/name2.png" alt="N" className={styles.logoImage} />
      </a>

      <button 
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" className={styles.resumeBtn} onClick={() => setMenuOpen(false)}>
            Resume
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};
