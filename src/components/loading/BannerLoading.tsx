import Container from "../containers/Container";

export default function BannerLoading() {
  return (
    <Container>
      <div className="relative mt-2 w-full h-[300px] sm:h-[400px] transition-all rounded-lg bg-gray-700 animate-pulse"></div>
    </Container>
  );
}
