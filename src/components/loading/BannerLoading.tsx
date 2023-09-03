import Container from "../containers/Container";

export default function BannerLoading() {
  return (
    <Container>
      <div className="relative w-full h-[50vh] transition-all rounded-l bg-gray-700 animate-pulse"></div>
    </Container>
  );
}
