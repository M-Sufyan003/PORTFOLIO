import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { BsLinkedin, BsFacebook, BsEnvelope, BsGithub } from "react-icons/bs";
import styles from "./Home.module.css";
import BlobIMG from "../../../public/BlobIMG.png";

const typingTexts = [
  "Web Developer",
  "Frontend Engineer",
  "React Developer",
  "Java Enthusiast",
];

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const current = typingTexts[textIndex];
      const el = typingRef.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typingTexts.length;
        }
      }
      timer = setTimeout(type, isDeleting ? 60 : 100);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.home} id="home">
      {/* Text */}
      <div className={styles.homeData}>
        <h1 className={styles.homeTitle}>
          Hi,
          <br />I am <span className={styles.homeTitleColor}>Sufyan</span>
          <br />
          <span className={styles.typingText} ref={typingRef}></span>
          <span className={styles.cursor}>|</span>
        </h1>
        <Link
          to="contact"
          spy
          smooth
          duration={500}
          offset={-60}
          className="button"
        >
          Contact
        </Link>

        {/* Social Icons */}
        <div className={styles.homeSocial}>
          <a
            href="https://www.linkedin.com/in/muhammad-sufyan-12b725267"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.homeSocialIcon}
            title="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.homeSocialIcon}
            title="Facebook"
          >
            <BsFacebook />
          </a>
          <a
            href="mailto:muhammadg115511@gmail.com"
            className={styles.homeSocialIcon}
            title="Email"
          >
            <BsEnvelope />
          </a>
          <a
            href="https://github.com/M-Sufyan003"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.homeSocialIcon}
            title="GitHub"
          >
            <BsGithub />
          </a>
        </div>
      </div>

      {/* Blob Image */}
      <div className={styles.homeImg}>
        <svg
          className={styles.homeBlob}
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <clipPath id="clip0">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </clipPath>

          <g clipPath="url(#clip0)">
            <path
              fill="hsl(224, 89%, 60%)"
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
            />
            
            <image
              className={styles.homeBlobImg}
              x="50"
              y="18"
              href={BlobIMG}
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Home;
