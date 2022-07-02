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
  const files = fs.readdirSync(path.join("content/artikels"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/artikels", filename),
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
  "on-a-gathering-storm-peaky-blinders-is-terug",
  "is-dit-die-moeite-werd-om-n-nuwe-taal-te-leer",
  "i-stranger-things-4-i-lei-kykers-dieper-deur-die-i-upside-down-i",
  "hoor-jy-die-kosmosse-fluister",
];

let heroArticleSlug =
  "pessimisme-vs-optimisme-watter-houding-het-die-punt-beet";

export default function Home({ posts }) {
  let mainArticles = posts.filter((i) => mainArticleSlugs.includes(i.slug));
  let otherArticles = posts.filter(
    (i) => !mainArticleSlugs.includes(i.slug) && i.slug != heroArticleSlug
  );

  return (
    <>
      <MainArticle article={posts.filter((i) => i.slug == heroArticleSlug)[0]}>
        <Header />
      </MainArticle>

      <div className={styles.splitter}>
        <div className={styles.largeCol}>
          <ArticleList title="Nuwe Artikels" posts={mainArticles} />
          <div className={styles.imageAd}>
            <Image
              layout="responsive"
              width={673}
              height={1000}
              src="/kortverhaal.jpg"
              alt="Kortverhaal"
            ></Image>
          </div>
          <ArticleList title="Argief" posts={otherArticles} />
        </div>
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
