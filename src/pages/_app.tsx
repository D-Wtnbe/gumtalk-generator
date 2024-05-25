import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <title>ガムトークジェネレーター</title>
        <meta name="description" content="カードに表示されたお題について話をするゲーム" />
        <meta property="og:description" content="カードに表示されたお題について話をするゲーム" />
        <meta property="og:title" content="ガムトークジェネレーター" />
        <meta property="og:url" content="https://gumtalk-generator.vercel.app/" />
        <meta property="og:image" content="/icon.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
