import type { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "components/header/header";

export const metadata: Metadata = {
  title: "ガムトークジェネレーター",
  description: "カードに表示されたお題について話をするゲーム",
  openGraph: {
    title: "ガムトークジェネレーター",
    description: "カードに表示されたお題について話をするゲーム",
    url: "https://gumtalk-generator.vercel.app/",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 min-h-dvh flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
