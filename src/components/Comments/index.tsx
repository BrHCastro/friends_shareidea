import UserAvatar from "../../assets/user_min.png";

import styles from "./Comments.module.scss";

type Comments = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export default function Comments(props: Comments) {
  return (
    <div className={styles.contentComments}>
      <div className={styles.userInfo}>
        <div className={styles.userInfoImage}>
          <img src={UserAvatar} alt="Avatar do usuário comentário" />
        </div>
        <div className={styles.userInfoProfile}>
          <h3>{props.name}</h3>
          <span>{props.email.toLowerCase()}</span>
        </div>
      </div>
      <div className={styles.userInfoCommnet}>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
