import "../styles/globals.css";
import Head from "next/head";
import AppContainer from "../containers/AppContainer";

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
      </AppContainer>
    </>
  );
}

export default MyApp;
