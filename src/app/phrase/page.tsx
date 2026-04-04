import { JapanesePhraseCard } from "components/card/JapanesePhraseCard";
import { getJapanesePhraseContents } from "data/remote/japanesePhraseApi";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PhrasePage() {
  const japanesePhraseContents = await getJapanesePhraseContents();
  
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <JapanesePhraseCard japanesePhraseContents={japanesePhraseContents} />
      </div>
    </main>
  );
}
