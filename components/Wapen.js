import Link from "next/link";
import styles from "../styles/Wapen.module.css";

export default function Wapen() {
  return (
    <section className={styles.section}>
      <div className={styles.wapen}>
        <img src="/assets/df-wapen.png" alt="DF Wapen" />
        <h2>Die amptelike skoolkoerant van die Hoërskool DF Malan</h2>
        <a href="https://dfmalan.com/" rel="noreferrer" target="_blank">
          dfmalan.com
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="#555555"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.601 11.601C19.933 11.2691 19.933 10.7309 19.601 10.399L14.1917 4.98959C13.8597 4.65765 13.3215 4.65765 12.9896 4.98959C12.6576 5.32154 12.6576 5.85973 12.9896 6.19167L17.7979 11L12.9896 15.8083C12.6576 16.1403 12.6576 16.6785 12.9896 17.0104C13.3215 17.3424 13.8597 17.3424 14.1917 17.0104L19.601 11.601ZM3 11.85L19 11.85L19 10.15L3 10.15L3 11.85Z" />
          </svg>
        </a>
      </div>

      <div className={styles.uitgawes}>
        <div className={styles.heading}>Vorige uitgawes</div>

        <a
          href="https://julie2020.herout.co.za"
          target="_blank"
          rel="noreferrer"
        >
          <span>1</span>Julie 2020
        </a>
        <a
          href="https://desember2020.herout.co.za"
          target="_blank"
          rel="noreferrer"
        >
          <span>2</span>Desember 2020
        </a>
        <a
          href="https://april2021.herout.co.za"
          target="_blank"
          rel="noreferrer"
        >
          <span>3</span>April 2021
        </a>
        <a
          href="https://julie2021.herout.co.za"
          target="_blank"
          rel="noreferrer"
        >
          <span>4</span>Julie 2021
        </a>
        <a
          href="https://augustus2021.herout.co.za"
          target="_blank"
          rel="noreferrer"
        >
          <span>5</span>Augustus 2021
        </a>
      </div>
      <div className={styles.redaksielys}>
        <Link href="/redaksie">
          <a>redaksielys</a>
        </Link>
      </div>
    </section>
  );
}
