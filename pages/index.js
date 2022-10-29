import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Wapen from "../components/Wapen";
import MainArticle from "../components/MainArticle";

import homeConfig from "../content/home.json";
import imageSize from "../utils/imageSize";
import Playlists from "../components/Playlists";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/artikels"));
  const trimSlug = (slug) => slug.slice(17, slug.length - 3);

  let posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/artikels", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    if (frontMatter.date_published) delete frontMatter.date_published;

    return {
      slug: filename.slice(0, filename.length - 3),
      ...frontMatter,
    };
  });

  let mainArticleSlugs = homeConfig.newArticles.map((i) => trimSlug(i));
  let heroArticleSlug = trimSlug(homeConfig.mainArticle);

  let mainArticle = posts.filter((i) => i.slug == heroArticleSlug)[0];
  let newArticles = posts.filter(
    (i) =>
      mainArticleSlugs.includes(i.slug) && !i.title.endsWith(": ’n kortverhaal")
  );

  const imgSize = await imageSize(mainArticle.image);

  let otherArticles = posts.filter(
    (i) => !mainArticleSlugs.includes(i.slug) && i.slug != heroArticleSlug
  );

  let shortStories = posts.filter((i) => i.title.endsWith(": ’n kortverhaal"));

  mainArticle = { ...mainArticle, ...imgSize };

  return {
    props: {
      newArticles,
      shortStories,
      otherArticles,
      mainArticle,
      ad: homeConfig.advertisement,
    },
  };
};

export default function Home({
  mainArticle,
  newArticles,
  shortStories,
  otherArticles,
  ad,
}) {
  return (
    <>
      <MainArticle article={mainArticle}>
        <Header />
      </MainArticle>

      <div className={styles.splitter}>
        <div className={styles.largeCol}>
          <Playlists />
          <ArticleList title="Nuwe Artikels" posts={newArticles} />
          <ArticleList
            title="Kortverhaalkompetisie top vyf"
            posts={shortStories}
          />

          <div className={styles.imageAd}>
            {ad ? (
              <Image
                layout="responsive"
                width={1024}
                height={1024}
                sizes="95vw"
                quality={60}
                src={ad}
                alt=""
              ></Image>
            ) : (
              <></>
            )}
          </div>
          <ArticleList title="Januarie tot Julie 2022" posts={otherArticles} />
        </div>
        <Wapen />

        <Head>
          <title>Die Herout</title>
          <link rel="canonical" href="https://augustus2022.herout.co.za" />

          <meta name="theme-color" content="#222" />

          <meta property="og:title" content="Die Herout" />
          <meta
            name="description"
            content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
          />

          <meta
            property="og:description"
            content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
          />

          <meta
            property="og:url"
            content="https://augustus2022.herout.co.za/"
          />

          <meta
            property="og:image"
            content="https://augustus2022.herout.co.za/favicon/opengraph.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Die Herout" />
          <meta
            name="twitter:image"
            content="https://augustus2022.herout.co.za/favicon/opengraph.jpg"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Die Herout",
                url: "https://augustus2022.herout.co.za",
                logo: "https://augustus2022.herout.co.za/favicon/logo256.png",
              }),
            }}
          />
        </Head>
      </div>
    </>
  );
}
