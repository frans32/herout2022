import Image from "next/image";

import styles from "../styles/Playlists.module.css";

export default function Playlists() {
  return (
    <section>
      <div className={styles.heading}>Speellysies</div>

      <div className={styles.playlist}>
        <a
          href="https://music.apple.com/za/playlist/middernag/pl.u-PDb4464TerbgAl4"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => plausible("playlist:middernag")}
        >
          <Image
            src="/playlists/middernag512.jpg"
            width={512}
            height={512}
            quality={50}
          />
        </a>
        <a
          href="https://music.apple.com/za/playlist/herout-cottagecore/pl.u-LdbqBDvTxG5djMJ"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => plausible("playlist:cottagecore")}
        >
          <Image
            src="/playlists/cottagecore512.jpg"
            width={512}
            height={512}
            quality={50}
          />
        </a>
        <a
          href="https://music.apple.com/za/playlist/herout-juffrou-meyer-treffers/pl.u-vxy6Dzxsza46ld9"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => plausible("playlist:meyer")}
        >
          <Image
            src="/playlists/meyer512.jpg"
            width={512}
            height={512}
            quality={50}
          />
        </a>
      </div>
    </section>
  );
}
