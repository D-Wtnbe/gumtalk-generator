import { GoogleTrendContent } from "interfaces/sheet";
import { useState, useEffect, useCallback } from "react";

export const useGoogleTrendCard = (
  googleTrendContents: GoogleTrendContent[]
) => {
  const [item, setItem] = useState<GoogleTrendContent>();

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
  const handleClick = useCallback(() => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  }, [getRandomItem]);

  return { item, handleClick };
};
