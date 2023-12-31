import { CastType } from "@/types/types";
import CastImage from "./CastImage";
import CastsLoading from "./loading/CastsLoading";

export default function Casts({
  data,
  loading,
}: {
  data: CastType | undefined;
  loading: boolean;
}) {
  if (loading) {
    return <CastsLoading />;
  }
  return (
    <div className="flex overflow-x-auto no-scrollbar border-l-[1px] border-light pl-2">
      <div className="flex gap-1">
        {data?.cast.map((cast) => (
          <div
            key={cast.id}
            className="flex flex-col items-center gap-1 cursor-pointer w-[160px]"
          >
            <div className="relative w-[110px] h-[120px]">
              <CastImage profile={cast?.profile_path} />
            </div>

            <p className="text-sm text-center">
              {cast.original_name ? cast.original_name : null}
            </p>
            <p className="text-[0.7rem] text-center text-light">
              {cast.character ? cast.character : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
