import Head from "next/head";
import { NextIntlProvider } from "next-intl";
import NextNProgress from "nextjs-progressbar";
import AppContainer from "../containers/AppContainer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Standford education centre web application Built by TESPEN organization"
        />
        <title>StandFord education center</title>
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <AppContainer>
          <NextNProgress
            color="#00d1b2"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </AppContainer>
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
