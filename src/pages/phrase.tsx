import { JapanesePhraseCard } from "components/card/JapanesePhraseCard";
import { Header } from "components/header/header";
import { getJapanesePhraseContents } from "data/remote/japanesePhraseApi";
import { GetServerSideProps } from "next";
import { japanesePhraseContents } from "interfaces/sheet";

export default function Phrase({
  japanesePhraseContents,
}: {
  japanesePhraseContents: japanesePhraseContents[];
}) {
  return (
    <div className="min-h-screen">
      <Header title="フレーズ" />
      <main>
        <JapanesePhraseCard japanesePhraseContents={japanesePhraseContents} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const japanesePhraseContents = await getJapanesePhraseContents();
  return {
    props: {
      japanesePhraseContents: japanesePhraseContents,
    },
  };
};
