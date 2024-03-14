import React from "react";
import styles from "./Section_4.module.css";
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
      <button>Let's talk</button>
    </section>
  );
};

export default Section_4;
