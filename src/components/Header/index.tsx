import styles from "./Header.module.scss";

import Logo from "../../assets/logo_min.png";
import UserImage from "../../assets/user_min.png";
import { useGitHub } from "../../hooks/gitHubHook";

export function Header() {
  const { gitHubState } = useGitHub();

  return (
    <header>
      <section className={styles.contentWrapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo" />
          <h1>Friends ShareIdea</h1>
        </div>
        <div className={styles.boxProfile}>
          <div className={styles.boxProfileText}>
            <h2>{gitHubState.user.name}</h2>
            <span>Repositórios: {gitHubState.user.public_repos}</span>
          </div>
          <img
            src={!gitHubState ? UserImage : gitHubState.user.avatar_url}
            alt="Imagem do usuário"
          />
        </div>
      </section>
    </header>
  );
}
