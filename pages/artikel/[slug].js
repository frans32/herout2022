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
  const matter = { ...data, ...imgSize };

  if (matter.date_published) {
    matter.date_published = JSON.stringify(matter.date_published);
  }

  return { props: { source, matter, slug: params.slug } };
};

export function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/artikels"));

  const posts = files.map((filename) => {
    return "/artikel/" + filename.slice(0, filename.length - 3);
  });

  return { paths: posts, fallback: false };
}

export default function Post({ matter, source, slug }) {
  let strippedTitle = matter.title.replace("<i>", "").replace("</i>", "");

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
          <div style={{ background: "#efefef" }}>
            <Image
              src={matter.image}
              width={matter.imgWidth}
              height={matter.imgHeight}
              layout="responsive"
              priority={true}
              alt=""
              sizes="min(1000px, 100vw)"
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
        <MDXRemote {...source} components={{ InlineImage }} />
      </main>

      <Head>
        <title>{strippedTitle} - Die Herout 2022</title>
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
          content={"https://herout.co.za/artikels/" + slug}
        />
        <meta property="og:description" content={"deur " + matter.author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={strippedTitle} />
        <meta
          name="twitter:image"
          content={"https://herout.co.za/ogimg" + encodeURI(matter.image)}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: strippedTitle,
              image: "https://herout.co.za/ogimg" + encodeURI(matter.image),
              datePublished: matter.date_published,
              author: [
                {
                  "@type": "Person",
                  name: matter.author,
                },
              ],
            }),
          }}
        />
      </Head>
    </>
  );
}
