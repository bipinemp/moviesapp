import Container from "@/components/containers/Container";

export default function DetailsLoading() {
  return (
    <Container>
      <section className="mt-10 flex justify-center gap-10 mb-10">
        <div className="w-[250px] h-[350px] rounded-lg bg-gray-500 animate-pulse"></div>

        <div className="relative flex flex-col gap-6 w-[60%]">
          <div className="flex flex-col gap-2">
            <h1 className="w-[220px] h-[20px] bg-gray-500 animate-pulse rounded-md"></h1>
            <p className="w-[200px] h-[10px] bg-gray-500 animate-pulse rounded-md"></p>
            <div className="flex gap-3">
              <p className="w-[80px] h-[20px] bg-gray-500 animate-pulse rounded-md"></p>
              <p className="w-[80px] h-[20px] bg-gray-500 animate-pulse rounded-md"></p>
              <p className="w-[80px] h-[20px] bg-gray-500 animate-pulse rounded-md"></p>
            </div>
          </div>

          <div className="w-[60px] h-[60px] bg-gray-500 animate-pulse rounded-full"></div>

          <div className="flex flex-col gap-3">
            <h1 className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></h1>
            <div className="flex flex-col gap-2">
              <p className="bg-gray-500 animate-pulse w-[500px] h-[5px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[490px] h-[5px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[480px] h-[5px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[470px] h-[5px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[460px] h-[5px] rounded-md"></p>
            </div>
          </div>

          <div className="flex justify-between items-center pb-2 border-light">
            <div className="flex gap-2 items-center">
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
            </div>
          </div>

          <div className="flex justify-between items-center pb-2 border-light">
            <div className="flex gap-2 items-center">
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
            </div>
          </div>

          <div className="flex justify-between items-center pb-2 border-light">
            <div className="flex gap-2 items-center">
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
              <p className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></p>
            </div>
          </div>

          <h1 className="bg-gray-500 animate-pulse w-[100px] h-[15px] rounded-md"></h1>
        </div>
      </section>
    </Container>
  );
}
