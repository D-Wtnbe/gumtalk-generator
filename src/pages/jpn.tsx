import { JapaneseNounCard } from "components/card/JapaneseNounCard";
import { Header } from "components/header/header";
import { getJapaneseNounContents } from "data/remote/japaneseNounApi";
import { GetServerSideProps } from "next";
import { japaneseNounContents } from "interfaces/sheet";

export default function Jpn({
  japaneseNounContents,
}: {
  japaneseNounContents: japaneseNounContents[];
}) {
  return (
    <div className="min-h-screen">
      <Header title="日本語名詞" />
      <main>
        <JapaneseNounCard japaneseNounContents={japaneseNounContents} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const japaneseNounContents = await getJapaneseNounContents();
  return {
    props: {
      japaneseNounContents: japaneseNounContents,
    },
  };
};
