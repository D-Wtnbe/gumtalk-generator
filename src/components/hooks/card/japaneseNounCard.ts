import { japaneseNounContents } from "interfaces/sheet";
import { useState, useEffect, useCallback } from "react";

export const useJapaneseNounCard = (
  japaneseNounContents: japaneseNounContents[]
) => {
  const [item, setItem] = useState<japaneseNounContents>();

  // ランダムなアイテムを取得する関数
  const getRandomItem = useCallback(() => {
    if (japaneseNounContents.length === 0) return undefined;
    return japaneseNounContents[Math.floor(Math.random() * japaneseNounContents.length)];
  }, [japaneseNounContents]);

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
