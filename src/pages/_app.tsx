import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <title>ガムトークジェネレーター</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
