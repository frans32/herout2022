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

export default function Home({ posts }) {
  let mainArticle = posts.filter(
    (i) =>
      i.slug ==
      "ontbloting-van-die-nuwe-jaar-en-die-feit-dat-ek-plagiaat-teenoor-myself-gepleeg-het"
  )[0];

  let otherArticles = posts.filter(
    (i) =>
      i.slug !=
      "ontbloting-van-die-nuwe-jaar-en-die-feit-dat-ek-plagiaat-teenoor-myself-gepleeg-het"
  );

  return (
    <>
      <Header />

      <MainArticle article={mainArticle} />

      <div className={styles.splitter}>
        <ArticleList title="Nuwe Artikels" posts={otherArticles} />
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
