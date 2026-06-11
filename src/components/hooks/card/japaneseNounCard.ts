import { JapaneseNounContent } from "interfaces/sheet";
import { useState, useCallback } from "react";

// ランダムなアイテムを取得するユーティリティ関数
function pickRandom<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

export const useJapaneseNounCard = (japaneseNounContents: JapaneseNounContent[]) => {
  // SSR/CSR のハイドレーションミスマッチを防ぐため、
  // サーバー側（typeof window === "undefined"）は undefined を返し、
  // クライアント初回マウント時のみランダム選択する。
  // useState の遅延初期化子はレンダリング中に一度だけ実行されるため
  // useEffect 不要でシンプルに実現できる。
  const [item, setItem] = useState<JapaneseNounContent | undefined>(() =>
    typeof window === "undefined" ? undefined : pickRandom(japaneseNounContents)
  );

  // カードクリック時に新しいランダムアイテムを取得
  const handleClick = useCallback(() => {
    const randomItem = pickRandom(japaneseNounContents);
    if (randomItem) {
      setItem(randomItem);
    }
  }, [japaneseNounContents]);

  return { item, handleClick };
};
