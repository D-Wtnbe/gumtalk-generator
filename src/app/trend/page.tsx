import { GoogleTrendCard } from "components/card/GoogleTrendCard";
import { getGoogleTrendContents } from "data/remote/googleTrendApi";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TrendPage() {
  const googleTrendContents = await getGoogleTrendContents();
  
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <GoogleTrendCard googleTrendContents={googleTrendContents} />
      </div>
    </main>
  );
}
