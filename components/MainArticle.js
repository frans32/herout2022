import styles from "../styles/MainArticle.module.css";

export default function MainArticle(props) {
  return (
    <>
      <section className={styles.mainArticle}>{props.article.title}</section>
    </>
  );
}
