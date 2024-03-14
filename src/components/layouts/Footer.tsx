import React from "react";
import styles from "./Footer.module.css";
import { Cookie, Zeyada } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const zeyada = Zeyada({ subsets: ["latin"], weight: ["400"] });
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <header className={styles.header}>
          <h2>
            <span className={cookie.className}> A . A . </span>
            <span className={zeyada.className}>Noman</span>
          </h2>
        </header>
        <div className={styles.socialMediaLink}>
          <Link href="https://www.linkedin.com/in/abdullah-al-noman-4989222b3/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/AlNomanCSE">
            <FaGithub />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=8801883217001">
            <FaWhatsapp />
          </Link>
        </div>
        <h4>
          &copy;<span> Copyright 2024</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
