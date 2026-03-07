import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Navbar.module.css";

const navLinks = [
  { id: "home",    label: "Home"    },
  { id: "about",   label: "About"   },
  { id: "skills",  label: "Skills"  },
  { id: "work",    label: "Work"    },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <header className={`${styles.lHeader} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} >

        {/* Logo */}
        <div>
          <Link
            to="home"
            spy smooth duration={500} offset={-60}
            className={styles.navLogo}
            onClick={closeMenu}
          >
            SUFYAN
          </Link>
        </div>

        {/* Nav Menu */}
        <div
          className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
          id="nav-menu"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id} className={styles.navItem}>
                <Link
                  to={link.id}
                  spy smooth duration={500}
                  offset={link.id === "home" ? -80 : -60}
                  activeClass={styles.activeLink}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle */}
        <div className={styles.navToggle} onClick={toggleMenu} id="nav-toggle">
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
