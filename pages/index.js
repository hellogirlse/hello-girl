import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Girl!</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main className={styles.main}>
        <img
          alt="Hello Girl! logotyp"
          className={styles.logo}
          src="/logo/logo.svg"
        ></img>
        <p>
          <strong>Hello Girl! </strong>
          is a coding network for girls and women. The purpose of the network is
          to inspire, share knowledge and exchange experience about how it’s
          like to work with tech. Eventually this will increase gender equality
          in the technical field. Hello Girl! started in Jönköping, in October
          2018, as a two day long web programming course arranged by Science
          Park, local organisations and companies and has now grown to so much
          more than that. You can find Hello Girl! on Clubhouse, LinkedIn,
          GitHub, Facebook and Instagram.
        </p>
        <p>
          <em>
            “We need more women in the technical field so that they also are a
            part of developing the technology that everyone will use. We need
            diversity also in this profession.”
          </em>
          <br />
          Linnea Karlsson, teacher Hello Girl!
        </p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.socialMedia}>
          <a
            href="https://ios.joinclubhouse.com/club/hello-girl"
            title="Clubhouse"
            target="_blank"
          >
            Clubhouse
          </a>
          <a
            href="https://www.linkedin.com/groups/12518492/"
            title="LinkedIn"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/hellogirlse"
            title="GitHub"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/groups/575179392961804"
            title="Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/hellogirlse/"
            title="Instagram"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
