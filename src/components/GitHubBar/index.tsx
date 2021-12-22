import styles from "./GitHubBar.module.scss";

import FriendsImg from "../../assets/friendsLogo.png";
import Location from "../../assets/location.png";
import Link from "../../assets/link.png";
import { SideBar } from "../SideBar";

export function GitHubBar({ data }: any) {
  return (
    <>
      <section className={styles.contentWrapper}>
        <div className={styles.boxProfileFriends}>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidores" />
            <a href="#">{data.user.followers} Seguidores</a>
          </div>
          <div className={styles.profileFriends}>
            <img src={FriendsImg} alt="Seguidos" />
            <a href="#">{data.user.following} Seguindo</a>
          </div>
        </div>
        <div className={styles.boxProfileLinks}>
          <div className={styles.profileLinks}>
            <img src={Location} alt="Localização" />
            <a href="#">{data.user.location}</a>
          </div>
          <div className={styles.profileLinks}>
            <img src={Link} alt="Link para à página do usuário" />
            <a href={data.user.html_url} target="_blank">
              {data.user.html_url}
            </a>
          </div>
        </div>
      </section>
      <SideBar />
    </>
  );
}
