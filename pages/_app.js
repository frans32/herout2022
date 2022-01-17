import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name="robots" content="noarchive, noimageindex, notranslate" />
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7d58bcb74d7145f291500018a5fab232"}'
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
