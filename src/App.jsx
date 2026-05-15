import { useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { EmailBar } from "./components/EmailBar/EmailBar";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { SocialBar } from "./components/SocialBar/SocialBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className={styles.App}>
        <Navbar />
        <SocialBar />
        <EmailBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
