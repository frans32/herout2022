import "../styles/globals.css";

import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noarchive" />
        <meta property="og:site_name" content="Die Herout" />
        <meta name="twitter:site" content="@DieHerout" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://herout.co.za",
            logo: "https://herout.co.za/favicon/logo256.png",
          })}
        </script>

        <script defer src="https://herout.co.za/plausible.js"></script>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
