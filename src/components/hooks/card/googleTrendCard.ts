import { googleTrendContents } from "interfaces/sheet";
import { useState, useEffect, useCallback } from "react";

export const useGoogleTrendCard = (
  googleTrendContents: googleTrendContents[]
) => {
  const [item, setItem] = useState<googleTrendContents>();

  // ランダムなアイテムを取得する関数
  const getRandomItem = useCallback(() => {
    if (googleTrendContents.length === 0) return undefined;
    return googleTrendContents[Math.floor(Math.random() * googleTrendContents.length)];
  }, [googleTrendContents]);

  useEffect(() => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  }, [getRandomItem]);

  // カードクリック
  const handleClick = () => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  };

  return { item, handleClick };
};
