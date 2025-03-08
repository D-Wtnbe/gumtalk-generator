import { useJapaneseNounCard } from "components/hooks/card/japaneseNounCard";
import { japaneseNounContents } from "interfaces/sheet";
import { JSX } from "react";

export const JapaneseNounCard = ({
  japaneseNounContents,
}: {
  japaneseNounContents: japaneseNounContents[];
}): JSX.Element => {
  const { item, handleClick } = useJapaneseNounCard(japaneseNounContents);
  return (
    <section className="flex h-full flex-col items-center justify-center bg-slate-50">
      <h1 className="mb-3 text-3xl font-bold">お題</h1>
      <button
        className="mt-0 ml-0 mr-5 mb-5 block h-20 w-80 cursor-pointer bg-yellow-200 px-6 pt-6 pb-10 text-center align-baseline font-zenMaru text-xl font-semibold shadow-[rgba(0,_0,_0,_0.5)_2px_2px_10px] duration-[0.2s] ease-[ease-in-out] hover:origin-[left_bottom] hover:rounded-[0px_50%_50%_0px_/_0px_0%_20%_0px]"
        suppressHydrationWarning={true}
        type="button"
        onClick={() => handleClick()}
      >
        {item?.content}の話
      </button>
    </section>
  );
};
