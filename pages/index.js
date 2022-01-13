import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "../styles/Home.module.css";

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
      <header className={styles.header}>
        <h1>Die Herout</h1>
        <small>Skoolkoerant van die Hoërskool DF Malan.</small>
        <small>Januarie 2022 - Jaargang 43</small>
      </header>

      <section className={styles.container}>
        <h2>Nuwe artikels</h2>
        <ol>
          {posts.map((i, index) => (
            <li key={index}>
              <Link href={"/artikel/" + i.slug}>
                <a>{i.title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

Home.title = "Die Herout 2022";
