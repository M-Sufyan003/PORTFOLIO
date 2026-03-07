import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.loaderContent}>
        <span className={styles.loaderLogo}>SUFYAN</span>
        <div className={styles.loaderBar}>
          <div className={styles.loaderBarFill}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
