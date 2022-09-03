import Matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/Artikel.module.css";
import Header from "../components/Header";

import fs from "fs";
import path from "path";
import imageSize from "../utils/imageSize";

export const getStaticProps = async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/artikels/gedigte.md"),
    "utf-8"
  );
  const { data, content } = Matter(markdownWithMeta);
  const source = await serialize(content);

  const imgSize = await imageSize(data.image);
  const matter = { ...data, ...imgSize };

  if (matter.date_published) {
    matter.date_published = JSON.stringify(matter.date_published);
  }

  return { props: { source, matter } };
};

export default function Post({ matter, source }) {
  return (
    <>
      <Header />
      <section className={styles.article_info}>
        <h1 dangerouslySetInnerHTML={{ __html: matter.title }}></h1>
        {matter.subtitle ? (
          <h2 dangerouslySetInnerHTML={{ __html: matter.subtitle }}></h2>
        ) : (
          <></>
        )}
        <small>{matter.author}</small>
      </section>
      <section>
        <div className={styles.main_image}>
          <div style={{ background: "#efefef" }}></div>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src="/images/gedigte-08-2022.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoCredit}>Video: Emma Olivier</div>
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
