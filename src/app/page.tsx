import Link from "next/link";
import { ModernButton } from "components/ui/ModernButton";
import { Languages, TrendingUp, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 md:py-12">
      <div className="mt-8 px-4 text-center">
        <h1 className="font-zenMaru mb-4 text-4xl font-bold text-balance text-gray-800 md:text-6xl">
          ガムトーク
          <br />
          <span className="text-3xl text-gray-700 md:text-5xl">ジェネレーター</span>
        </h1>

        <p className="font-zenMaru mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-600 md:text-xl">
          カードに表示されたお題について話をするゲーム
          <br />
          <span className="text-sm text-gray-500">カードをめくって、新しい話題を見つけよう!</span>
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-6 px-4 md:flex-row">
        <Link href="/jpn" prefetch={true}>
          <ModernButton variant="primary" size="lg" className="w-full min-w-[280px] md:w-auto">
            <div className="flex items-center justify-center gap-3">
              <Languages className="h-8 w-8" />
              <div className="text-left">
                <div>日本語名詞</div>
                <div className="text-sm opacity-80">ランダムで1つ</div>
              </div>
            </div>
          </ModernButton>
        </Link>

        <Link href="/trend" prefetch={true}>
          <ModernButton variant="secondary" size="lg" className="w-full min-w-[280px] md:w-auto">
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8" />
              <div className="text-left">
                <div>Google検索トレンド</div>
                <div className="text-sm opacity-80">最新のトピックから1つ</div>
              </div>
            </div>
          </ModernButton>
        </Link>

        <Link href="/phrase" prefetch={true}>
          <ModernButton variant="accent" size="lg" className="w-full min-w-[280px] md:w-auto">
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-8 w-8" />
              <div className="text-left">
                <div>会話フレーズ</div>
                <div className="text-sm opacity-80">ランダムで1つ</div>
              </div>
            </div>
          </ModernButton>
        </Link>
      </div>

      <div className="mx-auto mt-16 mb-16 max-w-4xl px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h2 className="font-zenMaru mb-4 text-2xl font-bold text-gray-800">遊び方</h2>
          <div className="grid gap-6 text-gray-600 md:grid-cols-3">
            <div className="transition-transform hover:scale-105">
              <div className="mb-3 text-4xl">1️⃣</div>
              <h3 className="mb-2 font-semibold">カテゴリ選択</h3>
              <p className="text-sm text-pretty">上のボタンから好きなカテゴリを選ぼう</p>
            </div>

            <div className="transition-transform hover:scale-105">
              <div className="mb-3 text-4xl">2️⃣</div>
              <h3 className="mb-2 font-semibold">カードをフリップ</h3>
              <p className="text-sm text-pretty">カードをクリックしてお題を確認</p>
            </div>

            <div className="transition-transform hover:scale-105">
              <div className="mb-3 text-4xl">3️⃣</div>
              <h3 className="mb-2 font-semibold">トークを楽しもう</h3>
              <p className="text-sm text-pretty">表示されたお題について自由に話そう</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
