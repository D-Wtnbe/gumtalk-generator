import { SkeletonCard } from "components/ui/SkeletonCard";
import { TrendingUp, Newspaper, Lightbulb } from "lucide-react";

export default function Loading() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
      <div className="w-full max-w-3xl flex-1 flex flex-col items-center pt-4">
        {/* タイトル */}
        <h1 
          className="mb-8 text-4xl md:text-5xl font-bold text-gray-800 text-center font-zenMaru text-balance flex items-center justify-center gap-3"
        >
          <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
          Google検索トレンドのお題
        </h1>
        
        {/* メインカードのプレースホルダー */}
        <div className="mb-8">
          <SkeletonCard className="mb-6" />
        </div>

        {/* 関連ニュースのプレースホルダー */}
        <div className="mb-6 w-full max-w-md">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-gray-800 font-zenMaru font-semibold mb-3 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-gray-300" />
              <div className="h-5 bg-slate-200 rounded animate-pulse w-24"></div>
            </h3>
            <div className="block bg-gray-50 rounded-lg p-4">
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-5/6"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded animate-pulse w-32"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 実機と同じ使い方コンテンツ */}
        <div className="text-center mt-6">
          <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-gray-800 font-zenMaru font-semibold mb-3 flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" /> 使い方
            </h3>
            <p className="text-gray-600 text-sm font-zenMaru text-pretty">
              カードをクリックして新しいトレンドを表示
              <br />
              話題のトピックで会話を盛り上げよう!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
