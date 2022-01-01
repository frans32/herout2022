import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name="theme-color" content="#f0f0ff" />
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
