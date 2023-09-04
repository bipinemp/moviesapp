import Image from "next/image";
import FallbackAvatar from "@/assets/avatar.png";
import { image } from "@/utils/resource/links";

export default function CastImage({ profile }: { profile: string }) {
  return (
    <Image
      src={profile !== null ? `${image}/${profile}` : FallbackAvatar}
      fill
      alt="cast picture"
      className="object-cover object-top rounded-[50%] bg-gray-500"
      loading="lazy"
    />
  );
}
