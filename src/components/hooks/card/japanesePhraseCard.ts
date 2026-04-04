import { JapanesePhraseContent } from "interfaces/sheet";
import { useState, useCallback } from "react";

export const useJapanesePhraseCard = (japanesePhraseContents: JapanesePhraseContent[]) => {
  // ランダムなアイテムを取得する純粋関数
  const getRandomItem = useCallback((): JapanesePhraseContent | undefined => {
    if (japanesePhraseContents.length === 0) return undefined;
    return japanesePhraseContents[Math.floor(Math.random() * japanesePhraseContents.length)];
  }, [japanesePhraseContents]);

  // 初期値を遅延初期化子で設定（useEffect 内の setState を回避）
  const [item, setItem] = useState<JapanesePhraseContent | undefined>(
    () => japanesePhraseContents[Math.floor(Math.random() * japanesePhraseContents.length)]
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
