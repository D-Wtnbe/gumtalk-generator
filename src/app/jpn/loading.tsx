import { SkeletonCard } from "components/ui/SkeletonCard";
import { Languages, Lightbulb } from "lucide-react";

export default function Loading() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
      <div className="w-full max-w-3xl flex-1 flex flex-col items-center pt-4">
        {/* 実機と寸分違わないタイトル */}
        <h1 
          className="mb-8 text-4xl md:text-5xl font-bold text-gray-800 text-center font-zenMaru text-balance flex items-center justify-center gap-3"
        >
          <Languages className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
          日本語名詞のお題
        </h1>
        
        {/* メインカードのプレースホルダー */}
        <div className="mb-8">
          <SkeletonCard className="mb-6" />
        </div>

        {/* 実機と同じ使い方コンテンツ */}
        <div className="text-center mt-6">
          <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-gray-800 font-zenMaru font-semibold mb-3 flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" /> 使い方
            </h3>
            <p className="text-gray-600 text-sm font-zenMaru text-pretty">
              カードをクリックして新しいお題を表示
              <br />
              表示されたお題について自由に話してみよう!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
