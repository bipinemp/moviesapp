import { CastType } from "@/types/types";
import { image } from "@/utils/resource/links";
import Image from "next/image";
import { Suspense } from "react";
import FallbackAvatar from "@/assets/avatar.png";

export default function Casts({ data }: { data: CastType }) {
  return (
    <div className="flex overflow-x-auto no-scrollbar">
      <div className="flex gap-1">
        {data?.cast.map((cast) => (
          <div className="flex flex-col items-center gap-1 cursor-pointer w-[160px]">
            <div className="relative w-[100px] h-[120px]">
              <Image
                src={
                  cast.profile_path !== null
                    ? `${image}/${cast.profile_path}`
                    : FallbackAvatar
                }
                fill
                alt="cast picture"
                className="object-cover object-top rounded-[50%]"
              />
            </div>

            <p className="text-sm text-center">
              {cast.original_name ? cast.original_name : null}
            </p>
            <p className="text-[0.6rem] text-center text-light">
              {cast.character ? cast.character : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
