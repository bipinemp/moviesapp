import Container from "../containers/Container";

export default function BannerLoading() {
  return (
    <Container>
      <div className="relative w-full h-[50vh] transition-all rounded-lg bg-indigo-200 animate-pulse"></div>
    </Container>
  );
}
