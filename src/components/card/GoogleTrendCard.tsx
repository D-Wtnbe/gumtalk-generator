"use client";
import { useGoogleTrendCard } from "components/hooks/card/googleTrendCard";
import { InteractiveCard } from "components/ui/InteractiveCard";
import { GoogleTrendContent } from "interfaces/sheet";
import { TrendingUp, Newspaper, Lightbulb, ExternalLink } from "lucide-react";
import { JSX, useEffect, useCallback } from "react";

export const GoogleTrendCard = ({
  googleTrendContents,
}: {
  googleTrendContents: GoogleTrendContent[];
}): JSX.Element => {
  const { item, handleClick } = useGoogleTrendCard(googleTrendContents);

  // 初回レンダリング時にアイテムを取得
  useEffect(() => {
    handleClick();
  }, [handleClick]);

  // カードクリック時の処理（memoizeして安定した参照にする）
  const handleCardFlip = useCallback(() => {
    handleClick();
  }, [handleClick]);

  return (
    <div className="w-full flex-1 flex flex-col items-center pt-4">
        <h1 
          className="mb-8 text-4xl md:text-5xl font-bold text-gray-800 text-center font-zenMaru text-balance flex items-center justify-center gap-3"
        >
          <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
          Google検索トレンドのお題
        </h1>

        <div className="mb-8">
          <InteractiveCard
            onFlip={handleCardFlip}
            className="mb-6"
          >
            <div className="text-center p-4 h-full flex flex-col justify-center">
              <div
                key={item?.content}
                className="space-y-2 flex flex-col items-center justify-center h-full"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-responsive-large font-bold font-zenMaru break-words text-center px-2 leading-tight text-gray-800">
                    {item?.content}
                  </p>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </div>

        {/* ニュースリンクセクション */}
        {item?.newsTitle && item?.newsLink && (
          <div className="mb-6 w-full max-w-md">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-gray-800 font-zenMaru font-semibold mb-3 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-blue-500" />
                関連ニュース
              </h3>
              <a
                href={item.newsLink}
                target="_blank"
                rel="noreferrer"
                className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors duration-300 group"
              >
                <p className="text-gray-600 font-zenMaru text-sm leading-relaxed group-hover:text-gray-800 text-pretty">
                  {item.newsTitle}
                </p>
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                  <ExternalLink className="w-3 h-3" />
                  <span>クリックで詳細を見る</span>
                </div>
              </a>
            </div>
          </div>
        )}

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
  );
};
