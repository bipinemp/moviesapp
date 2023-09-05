import React from "react";

function CarouselLoading() {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar space-x-1">
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600  animate-pulse w-[280px] h-[230px] rounded-lg"></div>
    </div>
  );
}

export default CarouselLoading;
