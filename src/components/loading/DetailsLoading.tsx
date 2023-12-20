import Container from "@/components/containers/Container";

export default function DetailsLoading() {
  return (
    <Container>
      <div className="flex flex-col gap-10 mb-10">
        <section className="mt-5 foot:mt-10 flex flex-col lg:flex-row gap-10 min-h-[400px] pl-1 py-3">
          <div className="relative w-[240px] h-[350px] lg:h-auto foot:w-[300px] emd:w-[41.5%] rounded-lg bg-gray-500 animate-pulse"></div>

          <div className="relative w-full flex flex-col gap-6 pr-10">
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

            <div className="flex flex-col gap-2">
              <h1 className="bg-gray-500 animate-pulse w-[100px] h-[20px] rounded-md"></h1>
              <div className="flex flex-col gap-2">
                <p className="bg-gray-500 animate-pulse w-[250px] foot:w-[500px] h-[5px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[250px] foot:w-[500px] h-[5px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[250px] foot:w-[500px] h-[5px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[250px] foot:w-[500px] h-[5px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[250px] foot:w-[500px] h-[5px] rounded-md"></p>
              </div>
            </div>

            <div className="flex flex-col items-start foot:flex-row gap-2 emd:gap-10 emd:items-center pb-2 border-light">
              <div className="flex gap-2 items-center">
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[70px] h-[15px] rounded-md"></p>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-light">
              <div className="flex gap-2 items-center">
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-light">
              <div className="flex gap-2 items-center">
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
                <p className="bg-gray-500 animate-pulse w-[60px] h-[10px] rounded-md"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
