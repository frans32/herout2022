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
  "die-gevare-van-die-i-m-not-like-other-girls-verskynsel",
  "van-kraletjies-op-n-tou-tot-iets-wat-almal-in-hul-sak-ronddra",
  "moet-dit-nie-so-ligtelik-opneem-nie",
  "me.barratt-en-mnr.bergh-bespreek-hul-graadagt-tot-matriekklasse",
  "viooltjies-se-taal-van-hul-eie",
];

export default function Home({ posts }) {
  let mainArticles = posts.filter((i) => mainArticleSlugs.includes(i.slug));

  let otherArticles = posts.filter((i) => !mainArticleSlugs.includes(i.slug));

  return (
    <>
      <MainArticle article={mainArticles[4]}>
        <Header dark />
      </MainArticle>

      <div className={styles.splitter}>
        <div className={styles.largeCol}>
          <ArticleList title="Nuwe Artikels" posts={mainArticles} />
          <ArticleList title="Argief" posts={otherArticles} />
        </div>
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
