import { GoogleTrendContent } from "interfaces/sheet";
import { useState, useCallback } from "react";

// ランダムなアイテムを取得するユーティリティ関数
function pickRandom<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

export const useGoogleTrendCard = (googleTrendContents: GoogleTrendContent[]) => {
  // SSR/CSR のハイドレーションミスマッチを防ぐため、
  // サーバー側（typeof window === "undefined"）は undefined を返し、
  // クライアント初回マウント時のみランダム選択する。
  const [item, setItem] = useState<GoogleTrendContent | undefined>(() =>
    typeof window === "undefined" ? undefined : pickRandom(googleTrendContents)
  );

  // カードクリック時に新しいランダムアイテムを取得
  const handleClick = useCallback(() => {
    const randomItem = pickRandom(googleTrendContents);
    if (randomItem) {
      setItem(randomItem);
    }
  }, [googleTrendContents]);

  return { item, handleClick };
};
