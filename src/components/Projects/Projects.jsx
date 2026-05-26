import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "FineAnswer",
      description: "A study abroad consultancy platform helping students explore universities, manage their applications, and access expert guidance for studying overseas — focusing on Ireland, UK, and Australia.",
      imageSrc: "/proj_fineAnswer.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
      demo: "https://www.fineanswer.net/",
      source: "https://github.com/niiazmorshed/FineAnswer"
    },
    {
      title: "IrishBangla",
      description: "A marketing and information website for Emerald Visa & Tours, featuring formal navigation, breadcrumbs, country-based Ireland visa guidance, and dedicated information pages.",
      imageSrc: "/proj_irishBangla.png",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      demo: "https://irishbangla.vercel.app/",
      source: "https://github.com/niiazmorshed/Irishbangla"
    },
    {
      title: "Escape The Matrix",
      description: "A comprehensive full-stack LMS with role-based access control, course management, and a complete assessment system featuring assignments, quizzes, and discussions.",
      imageSrc: "/proj_escapeMatrix.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Firebase", "TailwindCSS"],
      demo: "https://escape-the-matrix-id9n.vercel.app/",
      source: "https://github.com/niiazmorshed/Escape-The-Matrix"
    },
    {
      title: "Multi Class Text Classification",
      description: "An NLP project that classifies question–answer text into 10 balanced topic categories across ~153K samples, benchmarking classical ML (TF-IDF + Logistic Regression) against deep recurrent networks (RNN, GRU, LSTM) using Word2Vec and GloVe embeddings.",
      imageSrc: "/proj_multiclass_text.png",
      skills: ["Python", "scikit-learn", "TensorFlow", "NLTK", "NLP"],
      source: "https://github.com/niiazmorshed/Multi_ClassText_Classification"
    },
    {
      title: "LagbeMart",
      description: "An e-commerce platform for seamless online shopping with product management, cart functionality, and user authentication.",
      imageSrc: "/proj_lagbe_mart.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://lagbe-mart.vercel.app",
      source: "https://github.com/niiazmorshed/LagbeMart"
    }
  ];

  const otherProjects = [
    {
      title: "Digital Healthcare Assistant",
      description: "A modern healthcare platform designed to provide digital health services and assistance to patients and healthcare providers.",
      imageSrc: "/proj_digital_healthcare_assistant.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://digital-healthcare-assistant.vercel.app/",
      source: "https://github.com/niiazmorshed/Digital-Healthcare-Assistant"
    },
    {
      title: "Make a Difference",
      description: "A modern volunteer management platform built with the MERN stack that streamlines creating, managing, and participating in volunteer opportunities for both organizers and volunteers.",
      imageSrc: "/proj_mad.png",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://make-a-difference-90f54.web.app",
      source: "https://github.com/niiazmorshed/Make-a-Difference"
    },
    {
      title: "Customer Category Classification",
      description: "A machine learning project that classifies retail customers into four market segments using demographic and behavioral data — combining EDA, K-Means clustering, and a comparison of five supervised classifiers to drive targeted marketing.",
      imageSrc: "/proj_customer_category.png",
      skills: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
      source: "https://github.com/niiazmorshed/Customer_Category_Classification"
    }
  ];

  const [showMore, setShowMore] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className={styles.container} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          <span className={styles.sectionNumber}>03.</span> Some Things I've Built
        </h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <AnimatePresence initial={false}>
          {showMore && (
            <motion.div
              key="otherProjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={styles.subTitle}>Other Notable Projects</h3>
              <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {otherProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.moreWrapper}>
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
          >
            {showMore ? "Show Less" : "Other Notable Projects"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
