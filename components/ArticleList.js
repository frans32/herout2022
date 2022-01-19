import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArticleList.module.css";

export default function ArticleList({ posts, title }) {
  return (
    <div className={styles.articleList}>
      <section className={styles.embed}>
        <div className={styles.heading}>DF Verkenners SR Video 2022</div>
        <iframe
          loading="lazy"
          src="https://www.youtube-nocookie.com/embed/4RpBDr8pZhY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </section>

      <section>
        <div className={styles.heading}>{title}</div>
        {posts.map((i, index) => (
          <div key={index}>
            <Link href={"/artikel/" + i.slug}>
              <a className={styles.article}>
                <div className={styles.articleImage}>
                  <Image src={i.image} sizes="300px" layout="fill" alt="" />
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
