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
  let mainArticles = posts.filter((i) =>
    [
      "die-verhaal-agter-valentynsdag",
      "i-i-still-believe-i-n-liefdesverhaal-treffer-vir-hierdie-dekade",
      "i-this-little-love-of-mine-i-ideale-ligte-valentyns-vermaak",
    ].includes(i.slug)
  );

  let otherArticles = posts.filter(
    (i) =>
      ![
        "die-verhaal-agter-valentynsdag",
        "i-i-still-believe-i-n-liefdesverhaal-treffer-vir-hierdie-dekade",
        "i-this-little-love-of-mine-i-ideale-ligte-valentyns-vermaak",
      ].includes(i.slug)
  );

  return (
    <>
      <Header />

      <MainArticle article={mainArticles[0]} />
      <MainArticle article={mainArticles[1]} />
      <MainArticle article={mainArticles[2]} />

      <div className={styles.splitter}>
        <ArticleList title="Nuwe Artikels" posts={otherArticles} />
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
