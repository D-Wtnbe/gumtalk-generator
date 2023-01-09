import { japaneseNounContents } from "interfaces/sheet";
import { useState, useEffect } from "react";

export const useJapaneseNounCard = (
  japaneseNounContents: japaneseNounContents[]
) => {
  const [item, setItem] = useState<japaneseNounContents>();
  const japaneseNounItem =
    japaneseNounContents[
      Math.floor(Math.random() * japaneseNounContents.length)
    ];
  useEffect(() => {
    setItem(japaneseNounItem);
  }, []);

  // カードクリック
  const handleClick = () => {
    setItem(japaneseNounItem);
  };

  return { item, handleClick };
};
