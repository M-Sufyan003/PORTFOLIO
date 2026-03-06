import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} bd-grid`}>
        <div>
          <a href="#" className={styles.logo}>
            SUFYAN
          </a>
        </div>
        <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
          <ul className={styles.list}>
            {["home", "about", "skills", "work", "contact"].map((item) => (
              <li key={item} className={styles.item}>
                <a
                  href={`#${item}`}
                  className={styles.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
