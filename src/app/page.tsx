import Link from "next/link";
import { ModernButton } from "components/ui/ModernButton";
import { Languages, TrendingUp, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1 flex flex-col">
        
        <div className="text-center px-4 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-zenMaru text-balance">
            ガムトーク
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">ジェネレーター</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-zenMaru font-medium max-w-2xl mx-auto text-pretty">
            カードに表示されたお題について話をするゲーム
            <br />
            <span className="text-sm text-gray-500">カードをめくって、新しい話題を見つけよう!</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <Link href="/jpn" prefetch={true}>
            <ModernButton variant="primary" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <Languages className="w-8 h-8" />
                <div className="text-left">
                  <div>日本語名詞</div>
                  <div className="text-sm opacity-80">ランダムで1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
          
          <Link href="/trend" prefetch={true}>
            <ModernButton variant="secondary" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-8 h-8" />
                <div className="text-left">
                  <div>Google検索トレンド</div>
                  <div className="text-sm opacity-80">最新のトピックから1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
          
          <Link href="/phrase" prefetch={true}>
            <ModernButton variant="accent" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-8 h-8" />
                <div className="text-left">
                  <div>会話フレーズ</div>
                  <div className="text-sm opacity-80">ランダムで1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
        </div>

        <div className="mt-16 max-w-4xl mx-auto px-4 mb-16">
          <div className="bg-white shadow-md rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-zenMaru">
              遊び方
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">1️⃣</div>
                <h3 className="font-semibold mb-2">カテゴリ選択</h3>
                <p className="text-sm text-pretty">上のボタンから好きなカテゴリを選ぼう</p>
              </div>
              
              <div className="hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="font-semibold mb-2">カードをフリップ</h3>
                <p className="text-sm text-pretty">カードをクリックしてお題を確認</p>
              </div>
              
              <div className="hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">3️⃣</div>
                <h3 className="font-semibold mb-2">トークを楽しもう</h3>
                <p className="text-sm text-pretty">表示されたお題について自由に話そう</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
