import { JapanesePhraseContent } from "interfaces/sheet";
import { useState, useEffect, useCallback } from "react";

export const useJapanesePhraseCard = (
  japanesePhraseContents: JapanesePhraseContent[]
) => {
  const [item, setItem] = useState<JapanesePhraseContent>();

  // ランダムなアイテムを取得する関数
  const getRandomItem = useCallback(() => {
    if (japanesePhraseContents.length === 0) return undefined;
    return japanesePhraseContents[Math.floor(Math.random() * japanesePhraseContents.length)];
  }, [japanesePhraseContents]);

  useEffect(() => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  }, [getRandomItem]);

  // カードクリック
  const handleClick = useCallback(() => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  }, [getRandomItem]);

  return { item, handleClick };
};
