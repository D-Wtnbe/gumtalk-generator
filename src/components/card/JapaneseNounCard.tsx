import { useJapaneseNounCard } from "components/hooks/card/japaneseNounCard";
import { InteractiveCard } from "components/ui/InteractiveCard";
import { JapaneseNounContent } from "interfaces/sheet";
import { Languages, Lightbulb } from "lucide-react";
import { JSX, useEffect, useCallback } from "react";

export const JapaneseNounCard = ({
  japaneseNounContents,
}: {
  japaneseNounContents: JapaneseNounContent[];
}): JSX.Element => {
  const { item, handleClick } = useJapaneseNounCard(japaneseNounContents);

  // 初回レンダリング時にアイテムを取得
  useEffect(() => {
    handleClick();
  }, [handleClick]);

  // カードクリック時の処理（memoizeして安定した参照にする）
  const handleCardFlip = useCallback(() => {
    handleClick();
  }, [handleClick]);

  return (
    <div className="min-h-dvh relative overflow-hidden">
      <div className="floating-elements" />
      
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-8">
        <h1 
          className="mb-8 text-4xl md:text-5xl font-bold text-gray-800 text-center font-zenMaru text-balance flex items-center justify-center gap-3"
        >
          <Languages className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
          日本語名詞のお題
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
      </section>
    </div>
  );
};
