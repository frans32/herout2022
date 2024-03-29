import Link from "next/link";
import Image from "next/image";
import styles from "../styles/MainArticle.module.css";

export default function MainArticle(props) {
  return (
    <>
      <section className={styles.mainArticle}>
        {props.children}
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: props.article.title }}></h1>
          <div className={styles.author}>{props.article.author}</div>
          <div className={styles.mainImage}>
            <Image
              src={props.article.image}
              width={props.article.imgWidth}
              height={props.article.imgHeight}
              priority
              layout="responsive"
              sizes="calc(100vw - 24px)"
            />
          </div>
          <Link href={"/artikel/" + props.article.slug}>
            <a className={styles.btnLees}>Lees</a>
          </Link>
        </div>
      </section>
    </>
  );
}
