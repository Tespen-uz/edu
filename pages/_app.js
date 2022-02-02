import "../styles/globals.css";
import Head from "next/head";
import AppContainer from "../containers/AppContainer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Standford education centre web application Built by TESPEN organization"
        />
        <title>StandFord education center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer>
        <Component {...pageProps} />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></Script>
      </AppContainer>
    </>
  );
}

export default MyApp;
