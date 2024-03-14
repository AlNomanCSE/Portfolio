import React from "react";
import styles from "./Header.module.css";
import { Cookie, Zeyada } from "next/font/google";
type Props = {};
const zeyada = Zeyada({ subsets: ["latin"], weight: ["400"] });
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });
const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <h2>
        <span className={cookie.className}> A . A . </span>
        <span className={zeyada.className}>Noman</span>
      </h2>
    </header>
  );
};

export default Header;
