export default function VideosLoading() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-3">
        <div className="bg-gray-500 w-[180px] h-[100px] animate-pulse rounded-lg"></div>
        <p className="bg-gray-500 animate-pulse text-center rounded-sm w-[150px] h-[10px]"></p>
      </div>
    </div>
  );
}
