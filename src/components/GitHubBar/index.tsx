import styles from "./GitHubBar.module.scss";

import FriendsImg from "../../assets/friendsLogo.png";
import Location from "../../assets/location.png";
import Link from "../../assets/link.png";
import { SideBar } from "../SideBar";

export function GitHubBar() {
  return (
    <>
      <section className={styles.contentWrapper}>
        <div className={styles.boxProfileFriends}>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidores" />
            <a href="#">14 Seguidores</a>
          </div>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidos" />
            <a href="#">14 Seguidos</a>
          </div>
        </div>
        <div className={styles.boxProfileLinks}>
          <div className={styles.profileLinks}>
            <img src={Location} alt="Localização" />
            <a href="#">Sorocaba/SP</a>
          </div>
          <div className={styles.profileLinks}>
            <img src={Link} alt="Link para à página do usuário" />
            <a href="#">https://linkdapagina.com.br</a>
          </div>
        </div>
      </section>
      <SideBar />
    </>
  );
}
