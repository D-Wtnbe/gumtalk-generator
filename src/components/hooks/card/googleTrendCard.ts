import { googleTrendContents } from "interfaces/sheet";
import { useState, useEffect } from "react";

export const useGoogleTrendCard = (
  googleTrendContents: googleTrendContents[]
) => {
  const [item, setItem] = useState<googleTrendContents>();
  const googleTrendItem =
    googleTrendContents[Math.floor(Math.random() * googleTrendContents.length)];
  useEffect(() => {
    setItem(googleTrendItem);
  }, [googleTrendItem]);

  // カードクリック
  const handleClick = () => {
    setItem(googleTrendItem);
  };

  return { item, handleClick };
};
