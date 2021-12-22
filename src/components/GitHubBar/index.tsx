import styles from "./GitHubBar.module.scss";

import FriendsImg from "../../assets/friendsLogo.png";
import Location from "../../assets/location.png";
import Link from "../../assets/link.png";
import { SideBar } from "../SideBar";
import { useGitHub } from "../../hooks/gitHubHook";

export function GitHubBar() {
  const { gitHubState } = useGitHub();

  return (
    <>
      <section className={styles.contentWrapper}>
        <div className={styles.boxProfileFriends}>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidores" />
            <a href="#">{gitHubState.user.followers} Seguidores</a>
          </div>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidos" />
            <a href="#">{gitHubState.user.following} Seguindo</a>
          </div>
        </div>
        <div className={styles.boxProfileLinks}>
          <div className={styles.profileLinks}>
            <img src={Location} alt="Localização" />
            <a href="#">{gitHubState.user.location}</a>
          </div>
          <div className={styles.profileLinks}>
            <img src={Link} alt="Link para à página do usuário" />
            <a href={gitHubState.user.html_url} target="_blank">
              {gitHubState.user.html_url}
            </a>
          </div>
        </div>
      </section>
      <SideBar />
    </>
  );
}
