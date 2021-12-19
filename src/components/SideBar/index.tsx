import styles from "./SideBar.module.scss";

import ChatImg from "../../assets/chat_img.png";

export function SideBar() {
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.sideBarTitle}>
        <strong>Posts + comentados</strong>
      </div>

      <div className={styles.sideBarComments}>
        <h3>Nome do post</h3>
        <img src={ChatImg} alt="Icone de Chat" />
        <span>15 comentários</span>
      </div>
      <div className={styles.sideBarComments}>
        <h3>Nome do post</h3>
        <img src={ChatImg} alt="Icone de Chat" />
        <span>15 comentários</span>
      </div>
      <div className={styles.sideBarComments}>
        <h3>Nome do post</h3>
        <img src={ChatImg} alt="Icone de Chat" />
        <span>15 comentários</span>
      </div>

      <div className={styles.sideBarTitle}>
        <strong>Repositórios Pinned</strong>
      </div>
    </section>
  );
}
