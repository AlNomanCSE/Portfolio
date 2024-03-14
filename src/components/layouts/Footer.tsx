import React from "react";
import styles from "./Footer.module.css";
import { Cookie, Zeyada } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const zeyada = Zeyada({ subsets: ["latin"], weight: ["400"] });
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <header className={styles.header}>
          <h1>
            <span className={cookie.className}> A . A . </span>
            <span className={zeyada.className}>Noman</span>
          </h1>
        </header>
        <div className={styles.socialMediaLink}>
          <FaLinkedin />
          <FaGithub />
          <FaWhatsapp />
        </div>
        <h4>
          &copy;<span> Copyright 2024</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
