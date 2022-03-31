import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArticleList.module.css";

export default function ArticleList({ posts, title }) {
  return (
    <div className={styles.articleList}>
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
