"use client";

import Image from "next/image";
import FallbackAvatar from "@/assets/avatar.png";
import { image } from "@/utils/resource/links";
import { useState } from "react";

export default function CastImage({ profile }: { profile: string }) {
  const [img, setImg] = useState<boolean>(true);
  return (
    <Image
      src={profile !== null ? `${image}/${profile}` : FallbackAvatar}
      fill
      alt="cast picture"
      className={`object-cover object-top rounded-[50%] bg-gray-500 ${
        img ? "bg-gray-500 animate-pulse" : ""
      }`}
      loading="lazy"
      onLoadingComplete={() => setImg(false)}
    />
  );
}
