import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.flex}>
          <div className={styles.leftCol}>
            <Link href="/">
              <a>
                <img className={styles.logo} src="/assets/herout-outline.svg" />
              </a>
            </Link>
            Vir die lesers deur die leerders.
          </div>

          <div className={styles.centerCol}>
            <h3>Skakels</h3>
            <Link href="/">
              <a>tuisblad</a>
            </Link>
            <Link href="/redaksie">
              <a>redaksielys</a>
            </Link>
          </div>
          <div>
            <a href="mailto:redaksie@herout.co.za">redaksie@herout.co.za</a>
          </div>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/dieherout/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/instagram.svg" />
          </a>
          <a
            href="https://twitter.com/DieHerout"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/twitter.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
