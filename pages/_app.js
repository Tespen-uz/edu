import "../styles/globals.css";
import Head from "next/head";
import AppContainer from "../containers/AppContainer";
import { Provider } from "react-redux";
import store from "../app/store";

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
      <Provider store={store}>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </Provider>
    </>
  );
}

export default MyApp;
