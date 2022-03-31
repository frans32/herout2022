import Matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import styles from "../../styles/Artikel.module.css";
import Header from "../../components/Header";

import fs from "fs";
import path from "path";

export const getStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", params.slug + ".md"),
    "utf-8"
  );
  const { data, content } = Matter(markdownWithMeta);
  const source = await serialize(content);

  return { props: { source, matter: data } };
};

export function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));

  const posts = files.map((filename) => {
    return "/artikel/" + filename.slice(0, filename.length - 3);
  });

  return { paths: posts, fallback: false };
}

export default function Post({ matter, source }) {
  return (
    <>
      <Header />
      <section className={styles.article_info}>
        <h1 dangerouslySetInnerHTML={{ __html: matter.title }}></h1>
        <small>{matter.author}</small>
      </section>
      <section>
        <div className={styles.main_image}>
          <div style={{ background: matter.primary_color }}>
            <Image
              src={matter.image}
              width={matter.image_width}
              height={matter.image_height}
              layout="responsive"
              priority={true}
              alt=""
              sizes="min(1000px, 100vw)"
            />
          </div>
          <div
            className={styles.image_credit}
            dangerouslySetInnerHTML={{ __html: "Foto: " + matter.image_credit }}
          />
        </div>
      </section>
      <main className={styles.content}>
        <MDXRemote {...source} components={{ Image }} />
      </main>

      <Head>
        <title>
          {matter.title.replace("<i>", "").replace("</i>", "")} - Die Herout
          2022
        </title>
        <meta name="theme-color" content="#efefef" />
      </Head>
    </>
  );
}
