import React from "react";

function CarouselLoading() {
  return (
    <div className="flex w-full gap-3 overflow-x-auto no-scrollbar space-x-1">
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
      <div className="bg-gray-600 relative flex-shrink-0 animate-pulse w-[150px] h-[230px] rounded-lg"></div>
    </div>
  );
}

export default CarouselLoading;
