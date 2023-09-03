import { CastType } from "@/types/types";
import React from "react";

function Casts({ data }: { data: CastType }) {
  const director = data?.crew.filter((cast) => cast.job === "Director");

  const writer = data?.crew.filter(
    (cast) =>
      cast.job === "Screenplay" || cast.job === "Story" || cast.job === "Writer"
  );

  // Acting Writing Crew Directing Sound Art Camera Editing Production Costume & Make-Up Visual Effects
  return (
    <div className="flex flex-col gap-3 -mt-2">
      {director.length > 0 ? (
        <div className="flex gap-3 items-center border-b-[1px] border-light pb-2">
          <p className="tracking-wide text-sm">Director: </p>
          {director.map((cast) => (
            <p key={cast.id} className="tracking-wide text-light text-xs">
              {cast.original_name} &nbsp;&nbsp;
            </p>
          ))}
        </div>
      ) : null}
      {writer.length > 0 ? (
        <div className="flex items-center gap-2 border-b-[1px] border-light pb-2">
          <p className="tracking-wide text-sm">Writer: </p>
          {writer.map((cast) => (
            <p key={cast.id} className="tracking-wide text-light text-xs">
              {cast.original_name} &nbsp;&nbsp;&nbsp;
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Casts;
