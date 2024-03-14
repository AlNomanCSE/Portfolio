import React from "react";
import styles from "./Header.module.css";
import { Cookie, Zeyada } from "next/font/google";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
type Props = {};
const zeyada = Zeyada({ subsets: ["latin"], weight: ["400"] });
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });
const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h2>
          <span className={cookie.className}> A . A . </span>
          <span className={zeyada.className}>Noman</span>
        </h2>

        <div className={styles.socialMediaLink}>
          <Link
            href="https://www.linkedin.com/in/abdullah-al-noman-4989222b3/"
            className={styles.link}
          >
            LinkedIn
            <LuExternalLink />
          </Link>
          <Link href="https://github.com/AlNomanCSE" className={styles.link}>
            GitHub
            <LuExternalLink />
          </Link>
        </div>

        <button>
          <Link href="mailto:abdullahalnomacse@gmail.com">Let's talk</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
