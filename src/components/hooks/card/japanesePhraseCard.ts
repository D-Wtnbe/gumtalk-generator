import { japanesePhraseContents } from "interfaces/sheet";
import { useState, useEffect } from "react";

export const useJapanesePhraseCard = (
  japanesePhraseContents: japanesePhraseContents[]
) => {
  const [item, setItem] = useState<japanesePhraseContents>();
  const japanesePhraseItem =
    japanesePhraseContents[
      Math.floor(Math.random() * japanesePhraseContents.length)
    ];
  useEffect(() => {
    setItem(japanesePhraseItem);
  }, []);

  // カードクリック
  const handleClick = () => {
    setItem(japanesePhraseItem);
  };

  return { item, handleClick };
};
