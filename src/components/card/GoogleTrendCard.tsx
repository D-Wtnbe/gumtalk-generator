import { Header } from "components/header/header";
import { useGoogleTrendCard } from "components/hooks/card/googleTrendCard";
import { googleTrendContents } from "interfaces/sheet";

export const GoogleTrendCard = ({
  googleTrendContents,
}: {
  googleTrendContents: googleTrendContents[];
}): JSX.Element => {
  const { item, handleClick } = useGoogleTrendCard(googleTrendContents);
  return (
    <>
      <section className="flex h-full flex-col items-center justify-center bg-slate-50">
        <h1 className="mb-3 text-3xl font-bold">お題</h1>
        <div>
          <button
            className="mt-0 ml-0 mr-5 mb-5 block h-20 w-80 cursor-pointer bg-yellow-200 px-6 pt-6 pb-10 text-center align-baseline font-zenMaru text-xl font-semibold shadow-[rgba(0,_0,_0,_0.5)_2px_2px_10px] duration-[0.2s] ease-[ease-in-out] hover:origin-[left_bottom] hover:rounded-[0px_50%_50%_0px_/_0px_0%_20%_0px]"
            suppressHydrationWarning={true}
            type="button"
            onClick={() => handleClick()}
          >
            {item?.content}の話
          </button>
        </div>
        <h1 className="mb-3 text-3xl font-bold ">ニュースリンク</h1>
        {/* <div className="mt-0 ml-0 mr-5 mb-5 h-20 w-80 items-center justify-center border-2 border-indigo-500"> */}
        <div className="mt-0 ml-0 mr-5 mb-5 block h-20 w-auto cursor-pointer bg-indigo-200 px-6 pt-6 pb-10 text-center align-baseline font-zenMaru text-lg font-semibold">
          <a href={item?.newsLink} target="_blank" rel="noreferrer">
            {item?.newsTitle}
          </a>
        </div>
      </section>
    </>
  );
};
