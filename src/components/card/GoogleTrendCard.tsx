"use client";
import { useGoogleTrendCard } from "components/hooks/card/googleTrendCard";
import { InteractiveCard } from "components/ui/InteractiveCard";
import { GoogleTrendContent } from "interfaces/sheet";
import { TrendingUp, Newspaper, Lightbulb, ExternalLink } from "lucide-react";
import { JSX } from "react";

export const GoogleTrendCard = ({
  googleTrendContents,
}: {
  googleTrendContents: GoogleTrendContent[];
}): JSX.Element => {
  const { item, handleClick } = useGoogleTrendCard(googleTrendContents);

  return (
    <div className="flex w-full flex-1 flex-col items-center pt-4">
      <h1 className="font-zenMaru mb-8 flex items-center justify-center gap-3 text-center text-4xl font-bold text-balance text-gray-800 md:text-5xl">
        <TrendingUp className="h-8 w-8 text-primary-500 md:h-10 md:w-10" />
        Google検索トレンドのお題
      </h1>

      <div className="mb-8">
        <InteractiveCard onFlip={handleClick} className="mb-6">
          <div className="flex h-full flex-col justify-center p-4 text-center">
            <div
              key={item?.content}
              className="flex h-full flex-col items-center justify-center space-y-2"
            >
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-responsive-large font-zenMaru px-2 text-center leading-tight font-bold break-words text-gray-800">
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
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-zenMaru mb-3 flex items-center gap-2 font-semibold text-gray-800">
              <Newspaper className="h-5 w-5 text-blue-500" />
              関連ニュース
            </h3>
            <a
              href={item.newsLink}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg bg-gray-50 p-4 transition-colors duration-300 hover:bg-gray-100"
            >
              <p className="font-zenMaru text-sm leading-relaxed text-pretty text-gray-600 group-hover:text-gray-800">
                {item.newsTitle}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                <ExternalLink className="h-3 w-3" />
                <span>クリックで詳細を見る</span>
              </div>
            </a>
          </div>
        </div>
      )}

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
  );
};
