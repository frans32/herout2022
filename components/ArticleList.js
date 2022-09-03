import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArticleList.module.css";

export default function ArticleList({ posts, title }) {
  return (
    <div className={styles.articleList}>
      <section>
        <div className={styles.heading}>{title}</div>
        {posts.map((i, index) => {
          let large = (index + 1) % 6 == 0;

          return (
            <div key={index}>
              <Link
                href={i.slug != "gedigte" ? "/artikel/" + i.slug : "/gedigte"}
              >
                <a
                  className={
                    styles.article + (large ? " " + styles.articleLarge : "")
                  }
                >
                  <div className={styles.articleImage}>
                    <Image
                      src={i.image}
                      sizes={
                        large
                          ? "(min-width: 900px) 240px, calc(100vw - 32px)"
                          : "84px"
                      }
                      layout="fill"
                      alt=""
                      quality={65}
                    />
                  </div>
                  <div className={styles.articleInfo}>
                    <h3 dangerouslySetInnerHTML={{ __html: i.title }} />
                    {large && i.subtitle ? (
                      <h4 dangerouslySetInnerHTML={{ __html: i.subtitle }} />
                    ) : (
                      <></>
                    )}
                    <small>{i.author}</small>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
