import { GoogleTrendCard } from "components/card/GoogleTrendCard";
import { Header } from "components/header/header";
import { getGoogleTrendContents } from "data/remote/googleTrendApi";
import { GetServerSideProps } from "next";
import { googleTrendContents } from "interfaces/sheet";

type TrendProps = {
  googleTrendContents: googleTrendContents[];
};

export default function Trend(props: TrendProps) {
  const { googleTrendContents } = props;
  return (
    <div className="min-h-screen">
      <Header title="Googleトレンド" />
      <main>
        <GoogleTrendCard googleTrendContents={googleTrendContents} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const googleTrendContents = await getGoogleTrendContents();
  return {
    props: {
      googleTrendContents: googleTrendContents,
    },
  };
};
