"use client";

import Image from "next/image";
import React, { useState } from "react";
import VideoFallback from "@/assets/no-video.jpg";

export default function VideoImage({ videoKey }: { videoKey: string }) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      <Image
        src={
          error || videoKey === undefined || videoKey === null
            ? VideoFallback
            : `https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`
        }
        fill
        alt="video thumbnail picture"
        className={`object-cover rounded-lg bg-gray-700`}
        loading="lazy"
        onError={handleError}
      />
    </>
  );
}
