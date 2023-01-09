import Link from "next/link";
import { Header } from "components/header/header";
import { getJapaneseNounContents } from "data/remote/japaneseNounApi";
import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <div className="h-screen bg-slate-50">
      <Header title="ホーム" />
      <div className="text-center">
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
          ガムトークジェネレーター
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          カードに表示されたお題について話をするゲーム
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link
          href="/jpn"
          className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          日本語名詞からランダムで1つ
        </Link>
        <Link
          href="/jpn"
          className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          最近のGoogle検索トレンドから1つ
        </Link>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const japaneseNounContents = await getJapaneseNounContents();
  return {
    props: {
      japaneseNounContents: japaneseNounContents,
    },
  };
};
