import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            src="https://www.herout.co.za/assets/logo.svg"
            alt="Die Herout"
          />
        </a>
      </Link>
      <div className={styles.uitgawe}>
        Januarie 2022 <span className={styles.desktopOnly}>/ Jaargang 43</span>
      </div>
    </header>
  );
}
