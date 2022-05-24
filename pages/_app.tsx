import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>William Bell - wbell.dev</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Hi 👋, I'm Will. I'm passionate about developing software." />
        <meta name="keywords" content="Will, William Bell, Will Bell, William Bell github, Will Bell github, Will Bell CV">
        <meta name="author" content="William Bell" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
