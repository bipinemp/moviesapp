import Banner from "@/components/header/Banner";
import PopularList from "@/components/listings/PopularList";
import TopRatedList from "@/components/listings/TopRatedList";
import TrendingList from "@/components/listings/TrendingList";

export default function Home() {
  return (
    <main className="mb-10">
      <Banner />
      <TrendingList />
      <PopularList />
      <TopRatedList />
    </main>
  );
}
