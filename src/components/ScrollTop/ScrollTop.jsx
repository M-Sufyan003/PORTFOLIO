import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";
import styles from "./ScrollTop.module.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.scrollTopWrap} ${visible ? styles.show : ""}`}>
      <Link
        to="home"
        spy smooth duration={500} offset={-80}
        className={styles.scrollTopBtn}
        title="Back to top"
      >
        <BsArrowUp />
      </Link>
    </div>
  );
};

export default ScrollTop;
