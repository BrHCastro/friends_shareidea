import styles from "./LoginBox.module.scss";
import Logo from "../../assets/logo_max.png";

export function LoginBox() {
  return (
    <main>
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
          />
          <a href="#" className={styles.signInWithGitHub}>
            Entrar
          </a>
        </div>
      </div>
    </main>
  );
}
