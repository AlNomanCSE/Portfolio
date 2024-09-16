import React from "react";
import styles from "./Section_2.module.css";
import Image from "next/image";
type Props = {};

const Section_2 = (props: Props) => {
  return (
    <section className={styles.section2}>
      <h2>My Top Skills</h2>
      <div className={styles.images}>
        {/* <Image
          src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        /> */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        /> */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="html"
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Section_2;
