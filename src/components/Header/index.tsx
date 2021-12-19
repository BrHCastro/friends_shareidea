import styles from "./Header.module.scss";

import Logo from "../../assets/logo_min.png";
import UserImage from "../../assets/user_min.png";

export function Header() {
  return (
    <header>
      <section className={styles.contentWrapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo" />
          <h1>Friends ShareIdea</h1>
        </div>
        <div className={styles.boxProfile}>
          <div className={styles.boxProfileText}>
            <h2>Nome do Cabloco</h2>
            <span>Repositórios: 18</span>
          </div>
          <img src={UserImage} alt="Imagem do usuário" />
        </div>
      </section>
    </header>
  );
}
