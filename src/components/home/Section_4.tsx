import React from "react";
import styles from "./Section_4.module.css";
import Link from "next/link";
type Props = {};

const Section_4 = (props: Props) => {
  return (
    <section className={styles.section_4}>
      <div>
        <h2>Have an exciting project?</h2>
        <p>
          I am open to opportunities. Let's have a quick chat to see if we are a
          good fit.
        </p>
      </div>
      <button>
        <Link href="mailto:abdullahalnomacse@gmail.com">Let's talk</Link>
      </button>
    </section>
  );
};

export default Section_4;
