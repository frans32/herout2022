import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArticleList.module.css";

export default function ArticleList({ posts, title }) {
  return (
    <div className={styles.articleList}>
      <section>
        <div className={styles.heading}>Speellysies</div>
        <div className={styles.playlistWrapper}>
          <div className={styles.playlist}>
            <a
              href="https://music.apple.com/za/playlist/herout-cottagecore/pl.u-LdbqBDvTxG5djMJ"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/playlists/cottagecore256.jpg"
                width={256}
                height={256}
              />
            </a>
            <a
              href="https://music.apple.com/za/playlist/herout-juffrou-meyer-treffers/pl.u-vxy6Dzxsza46ld9"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/playlists/meyer256.jpg" width={256} height={256} />
            </a>
            <a
              href="https://music.apple.com/za/playlist/middernag/pl.u-PDb4464TerbgAl4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/playlists/middernag256.jpg"
                width={256}
                height={256}
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.heading}>{title}</div>
        {posts.map((i, index) => (
          <div key={index}>
            <Link
              href={i.slug != "gedigte" ? "/artikel/" + i.slug : "/gedigte"}
            >
              <a className={styles.article}>
                <div className={styles.articleImage}>
                  <Image
                    src={i.image}
                    sizes="84px"
                    layout="fill"
                    alt=""
                    quality={65}
                  />
                </div>
                <div className={styles.articleInfo}>
                  <h3 dangerouslySetInnerHTML={{ __html: i.title }} />
                  <small>{i.author}</small>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
