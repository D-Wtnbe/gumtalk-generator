import { SkeletonCard } from "components/ui/SkeletonCard";
import { Languages, Lightbulb } from "lucide-react";

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 py-8 sm:px-6 md:py-12">
      <div className="flex w-full max-w-3xl flex-1 flex-col items-center pt-4">
        {/* 実機と寸分違わないタイトル */}
        <h1 className="font-zenMaru mb-8 flex items-center justify-center gap-3 text-center text-4xl font-bold text-balance text-gray-800 md:text-5xl">
          <Languages className="h-8 w-8 text-primary-500 md:h-10 md:w-10" />
          日本語名詞のお題
        </h1>

        {/* メインカードのプレースホルダー */}
        <div className="mb-8">
          <SkeletonCard className="mb-6" />
        </div>

        {/* 実機と同じ使い方コンテンツ */}
        <div className="mt-6 text-center">
          <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-zenMaru mb-3 flex items-center justify-center gap-2 font-semibold text-gray-800">
              <Lightbulb className="h-5 w-5 text-amber-500" /> 使い方
            </h3>
            <p className="font-zenMaru text-sm text-pretty text-gray-600">
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
