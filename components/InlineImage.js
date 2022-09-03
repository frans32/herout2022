import Image from "next/image";
import styles from "../styles/InlineImage.module.css";

export default function InlineImage({ src, width, height, caption }) {
  return (
    <div className={styles.inlineImage}>
      <Image src={src} layout="responsive" width={width} height={height} />
      <small>{caption}</small>
    </div>
  );
}
