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
  "i-harry-s-house-i-bring-intieme-lirieke-met-goedvoel-klank-tuis",
  "die-ware-antwoord-meer-wiele-of-deure",
  "geselsie-met-kamer-13-se-koningin-juffrou-carstens",
];

let heroArticleSlug = "die-stokperdjie-verg-rots-moed";

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
          <div className={styles.imageAd}>
            <Image
              layout="responsive"
              width={673}
              height={1000}
              src="/kortverhaal.jpg"
              alt="Kortverhaal"
            ></Image>
          </div>
          <ArticleList title="Nuwe Artikels" posts={mainArticles} />
          <ArticleList title="Argief" posts={otherArticles} />
        </div>
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
