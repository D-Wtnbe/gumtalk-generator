import { GoogleTrendContent } from "interfaces/sheet";
import { useState, useCallback } from "react";

export const useGoogleTrendCard = (googleTrendContents: GoogleTrendContent[]) => {
  // ランダムなアイテムを取得する純粋関数
  const getRandomItem = useCallback((): GoogleTrendContent | undefined => {
    if (googleTrendContents.length === 0) return undefined;
    return googleTrendContents[Math.floor(Math.random() * googleTrendContents.length)];
  }, [googleTrendContents]);

  // 初期値を遅延初期化子で設定（useEffect 内の setState を回避）
  const [item, setItem] = useState<GoogleTrendContent | undefined>(
    () => googleTrendContents[Math.floor(Math.random() * googleTrendContents.length)]
  );

  // カードクリック時に新しいランダムアイテムを取得
  const handleClick = useCallback(() => {
    const randomItem = getRandomItem();
    if (randomItem) {
      setItem(randomItem);
    }
  }, [getRandomItem]);

  return { item, handleClick };
};
