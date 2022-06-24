import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title || "Die Herout"}</title>
        <meta name="robots" content="noarchive" />
        <meta property="og:site_name" content="Die Herout" />
        <meta
          name="description"
          content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
        />
        <meta
          property="og:description"
          content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
        />
        <link rel="icon" type="image/png" href="/favicon/logo192.png" />
        <link rel="apple-touch-icon" href="/favicon/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <script
          async
          data-domain="herout.co.za"
          src="https://herout.co.za/plausible.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
