import Link from "next/link";
import styles from "../styles/MainArticle.module.css";

export default function MainArticle(props) {
  return (
    <>
      <section className={styles.mainArticle}>
        <div>
          <div className={styles.tag}>14 Februarie 2022</div>
          <h1 dangerouslySetInnerHTML={{ __html: props.article.title }}></h1>
          <small>{props.article.author}</small>
          <Link href={"/artikel/" + props.article.slug}>
            <a className={styles.btnLees}>Lees</a>
          </Link>
        </div>
      </section>
    </>
  );
}
