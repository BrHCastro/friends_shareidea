import styles from "./LoginBox.module.scss";
import Logo from "../../assets/logo_max.png";
import { useState } from "react";
import { useGitHub } from "../../hooks/gitHubHook";

export function LoginBox() {
  const [gitHubUserNameForSearch, setGitHubUserNameForSearch] =
    useState<any>(undefined);
  const { getGitHubUser } = useGitHub();

  function submitGetGitHubUser() {
    if (gitHubUserNameForSearch) {
      return getGitHubUser(gitHubUserNameForSearch);
    }

    return;
  }

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.loginBannerWrapper}>
          <div className={styles.titleBanner}>
            <img src={Logo} alt="Logo" />
            <h1>Bem-vindo(a)!</h1>
            <hr />
            <span>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
              elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis,
              espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio,
              in elementis mé pra quem é amistosis quis leo. Manduma pindureta
              quium dia nois paga. Sapien in monti palavris qui num significa
              nadis i pareci latim. Interessantiss quisso pudia ce receita de
              bolis, mais bolis eu num gostis.
            </span>
          </div>
        </div>
        <div className={styles.loginBoxWrapper}>
          <strong>Entre e compartilhe suas experiências</strong>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Seu usuário no GitHub..."
            onChange={(event) => setGitHubUserNameForSearch(event.target.value)}
          />
          <button
            className={styles.signInWithGitHub}
            onClick={submitGetGitHubUser}
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
}
