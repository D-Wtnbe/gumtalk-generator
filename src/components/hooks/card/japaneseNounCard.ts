import { JapaneseNounContent } from "interfaces/sheet";
import { useState, useCallback } from "react";

export const useJapaneseNounCard = (japaneseNounContents: JapaneseNounContent[]) => {
  // ランダムなアイテムを取得する純粋関数
  const getRandomItem = useCallback((): JapaneseNounContent | undefined => {
    if (japaneseNounContents.length === 0) return undefined;
    return japaneseNounContents[Math.floor(Math.random() * japaneseNounContents.length)];
  }, [japaneseNounContents]);

  // 初期値を遅延初期化子で設定（useEffect 内の setState を回避）
  const [item, setItem] = useState<JapaneseNounContent | undefined>(
    () => japaneseNounContents[Math.floor(Math.random() * japaneseNounContents.length)]
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
