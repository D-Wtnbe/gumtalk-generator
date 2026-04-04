import { SkeletonCard } from "components/ui/SkeletonCard";
import { TrendingUp, Newspaper, Lightbulb } from "lucide-react";

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 py-8 sm:px-6 md:py-12">
      <div className="flex w-full max-w-3xl flex-1 flex-col items-center pt-4">
        {/* タイトル */}
        <h1 className="font-zenMaru mb-8 flex items-center justify-center gap-3 text-center text-4xl font-bold text-balance text-gray-800 md:text-5xl">
          <TrendingUp className="h-8 w-8 text-primary-500 md:h-10 md:w-10" />
          Google検索トレンドのお題
        </h1>

        {/* メインカードのプレースホルダー */}
        <div className="mb-8">
          <SkeletonCard className="mb-6" />
        </div>

        {/* 関連ニュースのプレースホルダー */}
        <div className="mb-6 w-full max-w-md">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-zenMaru mb-3 flex items-center gap-2 font-semibold text-gray-800">
              <Newspaper className="h-5 w-5 text-gray-300" />
              <div className="h-5 w-24 animate-pulse rounded bg-slate-200"></div>
            </h3>
            <div className="block rounded-lg bg-gray-50 p-4">
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-slate-200"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200"></div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded bg-slate-200"></div>
                <div className="h-3 w-32 animate-pulse rounded bg-slate-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 実機と同じ使い方コンテンツ */}
        <div className="mt-6 text-center">
          <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-zenMaru mb-3 flex items-center justify-center gap-2 font-semibold text-gray-800">
              <Lightbulb className="h-5 w-5 text-amber-500" /> 使い方
            </h3>
            <p className="font-zenMaru text-sm text-pretty text-gray-600">
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
