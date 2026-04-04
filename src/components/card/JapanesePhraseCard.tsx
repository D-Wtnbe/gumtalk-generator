"use client";
import { useJapanesePhraseCard } from "components/hooks/card/japanesePhraseCard";
import { InteractiveCard } from "components/ui/InteractiveCard";
import { JapanesePhraseContent } from "interfaces/sheet";
import { MessageCircle, Lightbulb } from "lucide-react";
import { JSX } from "react";

export const JapanesePhraseCard = ({
  japanesePhraseContents,
}: {
  japanesePhraseContents: JapanesePhraseContent[];
}): JSX.Element => {
  const { item, handleClick } = useJapanesePhraseCard(japanesePhraseContents);

  return (
    <div className="flex w-full flex-1 flex-col items-center pt-4">
      <h1 className="font-zenMaru mb-8 flex items-center justify-center gap-3 text-center text-4xl font-bold text-balance text-gray-800 md:text-5xl">
        <MessageCircle className="h-8 w-8 text-primary-500 md:h-10 md:w-10" />
        会話フレーズのお題
      </h1>

      <div className="mb-8">
        <InteractiveCard onFlip={handleClick} className="mb-6">
          <div className="flex h-full flex-col justify-center p-4 text-center">
            <div
              key={item?.content}
              className="flex h-full flex-col items-center justify-center space-y-2"
            >
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-responsive font-zenMaru px-4 text-center leading-tight font-bold break-words text-gray-800">
                  {item?.content}
                </p>
              </div>
            </div>
          </div>
        </InteractiveCard>
      </div>

      <div className="mt-6 text-center">
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
          <h3 className="font-zenMaru mb-3 flex items-center justify-center gap-2 font-semibold text-gray-800">
            <Lightbulb className="h-5 w-5 text-amber-500" /> 使い方
          </h3>
          <p className="font-zenMaru text-sm text-pretty text-gray-600">
            カードをクリックして新しいフレーズを表示
            <br />
            フレーズをきっかけに会話を盛り上げよう!
          </p>
        </div>
      </div>
    </div>
  );
};
