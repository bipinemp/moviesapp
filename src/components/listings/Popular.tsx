// "use client";

// import { ApiResponse } from "@/types/types";
// import { fetchData } from "@/utils/apis/queries";
// import { Trending } from "@/utils/resource/links";
// import { useQuery } from "@tanstack/react-query";
// import Container from "../Container";
// import Carousel from "./carousel/Carousel";

// export default function Popular() {
//   const link: string = Trending("movie");
//   const { data } = useQuery<ApiResponse>({
//     queryKey: ["lists"],
//     queryFn: () => fetchData(link),
//   });

//   const trendingData: ApiResponse = data || {
//     page: 0,
//     results: [],
//     total_pages: 0,
//     total_results: 0,
//   };

//   return (
//     <Container>
//       <Carousel data={trendingData} title="Trending" />
//     </Container>
//   );
// }
