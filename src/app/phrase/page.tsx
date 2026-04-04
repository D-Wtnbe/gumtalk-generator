import { JapanesePhraseCard } from "components/card/JapanesePhraseCard";
import { getJapanesePhraseContents } from "data/remote/japanesePhraseApi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PhrasePage() {
  const japanesePhraseContents = await getJapanesePhraseContents();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 py-8 sm:px-6 md:py-12">
      <div className="w-full max-w-3xl">
        <JapanesePhraseCard japanesePhraseContents={japanesePhraseContents} />
      </div>
    </main>
  );
}
