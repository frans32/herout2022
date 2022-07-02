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

import homeConfig from "../content/home.json";
import imageSize from "../utils/imageSize";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/artikels"));
  const trimSlug = (slug) => slug.slice(17, slug.length - 3);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/artikels", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const imgSize = imageSize(frontMatter.image);

    return {
      slug: filename.slice(0, filename.length - 3),
      ...frontMatter,
      ...imgSize,
    };
  });

  let mainArticleSlugs = homeConfig.newArticles.map((i) => trimSlug(i));
  let heroArticleSlug = trimSlug(homeConfig.mainArticle);

  let mainArticle = posts.filter((i) => i.slug == heroArticleSlug)[0];
  let newArticles = posts.filter((i) => mainArticleSlugs.includes(i.slug));
  let otherArticles = posts.filter(
    (i) => !mainArticleSlugs.includes(i.slug) && i.slug != heroArticleSlug
  );

  return {
    props: {
      newArticles,
      otherArticles,
      mainArticle,
      ad: homeConfig.advertisement,
    },
  };
};

export default function Home({ mainArticle, newArticles, otherArticles, ad }) {
  return (
    <>
      <MainArticle article={mainArticle}>
        <Header />
      </MainArticle>

      <div className={styles.splitter}>
        <div className={styles.largeCol}>
          <ArticleList title="Nuwe Artikels" posts={newArticles} />
          <div className={styles.imageAd}>
            <Image
              layout="responsive"
              width={673}
              height={1000}
              sizes="95vw"
              quality={60}
              src={ad}
              alt=""
            ></Image>
          </div>
          <ArticleList title="Argief" posts={otherArticles} />
        </div>
        <Wapen />
      </div>
    </>
  );
}

Home.title = "Die Herout 2022";
