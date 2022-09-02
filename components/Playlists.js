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
          <Image src="/playlists/middernag256.jpg" width={256} height={256} />
        </a>
        <a
          href="https://music.apple.com/za/playlist/herout-cottagecore/pl.u-LdbqBDvTxG5djMJ"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => plausible("playlist:cottagecore")}
        >
          <Image src="/playlists/cottagecore256.jpg" width={256} height={256} />
        </a>
        <a
          href="https://music.apple.com/za/playlist/herout-juffrou-meyer-treffers/pl.u-vxy6Dzxsza46ld9"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => plausible("playlist:meyer")}
        >
          <Image src="/playlists/meyer256.jpg" width={256} height={256} />
        </a>
      </div>
    </section>
  );
}
