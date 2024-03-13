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
            <span className={cookie.className}>A</span> frontend developer with
            a passion for creating seamless digital experiences. With expertise
            in HTML, CSS, JavaScript, and modern frontend frameworks, I
            specialize in translating designs into responsive and interactive
            websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
