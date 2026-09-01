import { JapaneseNounCard } from "components/card/JapaneseNounCard";
import { getJapaneseNounContents } from "data/remote/japaneseNounApi";

// 毎回ランダムな名詞を取得するために静的生成を無効化
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function JpnPage() {
  const japaneseNounContents = await getJapaneseNounContents();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 py-8 sm:px-6 md:py-12">
      <div className="w-full max-w-3xl">
        <JapaneseNounCard japaneseNounContents={japaneseNounContents} />
      </div>
    </main>
  );
}
