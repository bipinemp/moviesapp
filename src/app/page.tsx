import Banner from "@/components/header/Banner";
import TrendingList from "@/components/listings/TrendingList";

export default function Home() {
  return (
    <main className="mb-10">
      <Banner />
      <TrendingList />
    </main>
  );
}
