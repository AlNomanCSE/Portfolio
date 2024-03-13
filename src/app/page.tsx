import Section_1 from "@/components/home/Section_1";
import styles from "./page.module.css";
import Section_2 from "@/components/home/Section_2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section_1 />
      <Section_2/>
    </main>
  );
}
