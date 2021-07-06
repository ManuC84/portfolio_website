import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>Web-developer portfolio for Manuel Cufré</Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
