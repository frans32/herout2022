import Matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

import fs from "fs";
import path from "path";

export const getStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", params.slug + ".md"),
    "utf-8"
  );
  const { data, content } = Matter(markdownWithMeta);
  const source = await serialize(content);

  return { props: { source, matter: data } };
};

export function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    return "/artikel/" + filename.split(".")[0];
  });

  return { paths: posts, fallback: false };
}

export default function Post({ matter, source }) {
  return (
    <>
      <section>
        <h1>{matter.title}</h1>
        <small>{matter.author}</small>
      </section>
      <main>
        <MDXRemote {...source} components={{}} />
      </main>
    </>
  );
}
