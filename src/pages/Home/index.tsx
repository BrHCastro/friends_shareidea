import Posts from "../../components/Posts";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <main className={styles.contentWrapper}>
      <Posts />
    </main>
  );
}
