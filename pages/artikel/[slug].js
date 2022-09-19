import Matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../../styles/Artikel.module.css";

import Header from "../../components/Header";
import InlineImage from "../../components/InlineImage";
import PageViews from "../../components/PageViews";
import ArticleList from "../../components/ArticleList";

import fs from "fs";
import path from "path";
import imageSize from "../../utils/imageSize";

const ShareButton = dynamic(() => import("../../components/ShareButton"), {
  ssr: false,
});

export const getStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/artikels", params.slug + ".md"),
    "utf-8"
  );

  const { data, content } = Matter(markdownWithMeta);
  const source = await serialize(content);

  const imgSize = await imageSize(data.image);
  let matter = { ...data, ...imgSize };

  if (matter.date_published) {
    try {
      matter.publishedISO = new Date(matter.date_published).toISOString();
    } catch {}
  }

  // Lees verder

  const files = fs.readdirSync(path.join("content/artikels"));

  let leesVerder = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content/artikels", filename),
        "utf-8"
      );
      const { data: frontMatter } = Matter(markdownWithMeta);

      // if (frontMatter.date_published) delete frontMatter.date_published;

      return {
        slug: filename.slice(0, filename.length - 3),
        ...frontMatter,
      };
    })
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 5);

  return { props: { source, matter, slug: params.slug, leesVerder } };
};

export function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/artikels"));

  const posts = files.map((filename) => {
    return "/artikel/" + filename.slice(0, filename.length - 3);
  });

  return { paths: posts, fallback: false };
}

export default function Post({ matter, source, slug, leesVerder }) {
  let strippedTitle = matter.title.replace("<i>", "").replace("</i>", "");
  return (
    <>
      <Header />
      <div itemScope itemType="https://schema.org/Article">
        <section className={styles.article_info}>
          <h1
            dangerouslySetInnerHTML={{ __html: matter.title }}
            itemProp="headline"
          ></h1>
          {matter.subtitle ? (
            <h2 dangerouslySetInnerHTML={{ __html: matter.subtitle }}></h2>
          ) : (
            <></>
          )}
          <small itemProp="author">{matter.author}</small>
          <meta itemProp="datePublished" content={matter?.publishedISO} />
        </section>
        <section>
          <div className={styles.main_image}>
            <div style={{ background: "#efefef" }}>
              <meta
                itemProp="thumbnailUrl"
                content={"https://herout.co.za/ogimg" + encodeURI(matter.image)}
              />
              <Image
                itemProp="image"
                src={matter.image}
                width={matter.imgWidth}
                height={matter.imgHeight}
                layout="responsive"
                priority
                alt=""
                sizes="(min-width: 1600px) 1440px, min(1000px, 100vw)"
                quality={85}
              />
            </div>
          </div>
        </section>
        <main className={styles.content}>
          <section className={styles.shareWrapper}>
            <div>
              {matter.image_credit ? (
                <div
                  className={styles.image_credit}
                  dangerouslySetInnerHTML={{
                    __html: "Foto: " + matter.image_credit,
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <div className={styles.share}>
              <PageViews page={slug} />
              <ShareButton title={strippedTitle} />
            </div>
          </section>
          <div itemProp="articleBody">
            <MDXRemote {...source} components={{ InlineImage }} />
          </div>
        </main>
      </div>

      <section className={styles.leesVerder}>
        <ArticleList posts={leesVerder} title="Lees verder" />
      </section>

      <Head>
        <title>{strippedTitle + " - Die Herout 2022"}</title>
        <link rel="canonical" href={"https://herout.co.za/artikel/" + slug} />

        <meta name="theme-color" content="#efefef" />
          
        <meta property="og:title" content={strippedTitle} />
        <meta property="og:type" content="article" />
        <meta property="og:article:author" content={matter.author} />

        <meta
          property="og:image"
          content={"https://herout.co.za/ogimg" + encodeURI(matter.image)}
        />
        <meta
          property="og:url"
          content={"https://herout.co.za/artikel/" + slug}
        />
        <meta property="og:description" content={"deur " + matter.author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={strippedTitle} />
        <meta
          name="twitter:image"
          content={"https://herout.co.za/ogimg" + encodeURI(matter.image)}
        />
      </Head>
    </>
  );
}
