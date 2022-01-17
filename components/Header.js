import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            src="/assets/logo.svg"
            alt="Die Herout"
            width={134}
            height={24}
          />
        </a>
      </Link>
      <div className={styles.uitgawe}>
        Januarie 2022 <span className={styles.desktopOnly}>/ Jaargang 43</span>
      </div>
    </header>
  );
}
