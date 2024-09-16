import React from "react";
import styles from "./Section_1.module.css";
import Image from "next/image";
import { Cookie } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });
type Props = {};

const Section_1 = (props: Props) => {
  return (
    <section className={styles.section1}>
      <div className={styles.colorDIvMain}>
        <div className={styles.colorDIv}></div>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.heroTextandImg}>
          <div className={styles.helloWithImage}>
            <Image
              src="/profileimage.jpg"
              alt="profile image"
              width={300}
              height={300}
              className={styles.image}
            />
            <h1>
              <span> Hello!</span> <br />
              I'm Noman
            </h1>
          </div>
          <p>
            <span className={cookie.className}>As</span> a recent graduate with
            a Bachelor of Technology in Computer Science and Engineering from
            the{" "}
            <a href="https://www.nitrkl.ac.in/" style={{ color: "#0f1035" }}>
              National Institute of Technology Rourkela India (NITRKL)
            </a>
            , I bring a unique blend of academic excellence and professional
            experience to the technology field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
