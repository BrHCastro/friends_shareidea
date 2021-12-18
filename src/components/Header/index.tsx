import styles from "./Header.module.scss";

export function Header() {
  return (
    <header>
      <section className={styles.contentWrapper}>
        <h1>Hello World</h1>;
      </section>
    </header>
  );
}
