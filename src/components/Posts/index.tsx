import styles from "./Posts.module.scss";

import UserAvatar from "../../assets/user_min.png";

export default function Posts() {
  return (
    <>
      <div className={styles.cardPrincipal}>
        <div className={styles.userAvatar}>
          <span className={styles.userValue}>1</span>
          <img src={UserAvatar} alt="Avatar do usuário" />
        </div>
        <div className={styles.contentInfo}>
          <h1>
            Titulo do post aqui inteiro meu brother cervejis geladis forevis
          </h1>
          <hr />
          <span>
            Corpo do post aqui mézis ardidus de arguardentis sempre descis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
            rasgandis a guélis mas esquenta a carcaça e rebate a preguiçis
          </span>

          <div className={styles.contentComments}>
            <div className={styles.userInfo}>
              <div className={styles.userInfoImage}>
                <img src={UserAvatar} alt="Avatar do usuário comentário" />
              </div>
              <div className={styles.userInfoProfile}>
                <h3>Nome do caboclo</h3>
                <span>email@do.caboclo</span>
              </div>
            </div>
            <div className={styles.userInfoCommnet}>
              <p>
                Mensagis do caboclis completis com tequilis e limãozis Mensagis
                do caboclis completis com tequilis e limãozis do caboclis
                completis com tequilis e limãozis do caboclis completis com
                tequilis e limãozis do caboclis completis com tequilis e
                limãozis do caboclis completis com tequilis e limãozis limãozis
                do caboclis completis com tequilis e limãozis limãozis do
                caboclis completis com tequilis e limãozis limãozis do caboclis
                completis com tequilis e limãozis limãozis do caboclis completis
                com tequilis e limãozis limãozis do caboclis completis com
                tequilis e limãozis limãozis do caboclis completis com tequilis
                e limãozis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
