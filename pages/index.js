import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Wapen from "../components/Wapen";

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
  return (
    <>
      <Header />

      <div className={styles.mainArticle}></div>

      <div className={styles.splitter}>
        <ArticleList title="Nuwe Artikels" posts={posts} />
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
