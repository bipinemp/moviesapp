import Image from "next/image";
import FallbackAvatar from "@/assets/avatar.png";
import { image } from "@/utils/resource/links";
import CastImageLoading from "../loading/CastImageLoading";
import { Suspense } from "react";

export default function CastImage({ profile }: { profile: string }) {
  return (
    <Suspense fallback={<CastImageLoading />}>
      <Image
        src={profile !== null ? `${image}/${profile}` : FallbackAvatar}
        fill
        alt="cast picture"
        className="object-cover object-top rounded-[50%]"
        loading="lazy"
      />
    </Suspense>
  );
}
