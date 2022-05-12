import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Wapen from "../components/Wapen";
import MainArticle from "../components/MainArticle";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug: filename.slice(0, filename.length - 3),
      ...frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

let mainArticleSlugs = [
  "onderhoud-met-mckenzie-pedro-fietsry-inspirasie",
  "die-ware-antwoord-meer-wiele-of-deure",
  "n-gesprek-met-ontwerpers-van-die-toekoms",
  "n-reflektiewe-onderhoud-met-juffrou-roelofse",
];

let heroArticleSlug =
  "wat-probeer-vladimir-putin-bereik-die-oorsake-en-gevolge-van-die-oorlog-in-oekraine";

export default function Home({ posts }) {
  let mainArticles = posts.filter((i) => mainArticleSlugs.includes(i.slug));
  let otherArticles = posts.filter(
    (i) => !mainArticleSlugs.includes(i.slug) && i.slug != heroArticleSlug
  );

  return (
    <>
      <MainArticle article={posts.filter((i) => i.slug == heroArticleSlug)[0]}>
        <Header dark />
      </MainArticle>

      <div className={styles.splitter}>
        <div className={styles.largeCol}>
          <ArticleList title="Nuwe Artikels" posts={mainArticles} />
          <div className={styles.ad}>
            <Image
              src="/images/ad-1.jpg"
              width={404}
              height={524}
              layout="responsive"
            />
          </div>
          <ArticleList title="Argief" posts={otherArticles} />
        </div>
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
