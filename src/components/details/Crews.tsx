import { CastType } from "@/types/types";
import React from "react";

function Crews({ data }: { data: CastType }) {
  const director = data?.crew.filter((crew) => crew.job === "Director");

  const writerJobs = ["Screenplay", "Story", "Writer"];
  const uniqueWriterNames: string[] = [];

  const writer = data?.crew.filter((crew) => writerJobs.includes(crew.job));

  // Acting Writing Crew Directing Sound Art Camera Editing Production Costume & Make-Up Visual Effects
  return (
    <div className="flex flex-col gap-3 -mt-2">
      {director.length > 0 ? (
        <div className="flex gap-3 items-center border-b-[1px] border-light pb-2">
          <p className="tracking-wide text-sm">Director: </p>
          {director.map((crew) => (
            <p key={crew.id} className="tracking-wide text-light text-xs">
              {crew.original_name} &nbsp;&nbsp;
            </p>
          ))}
        </div>
      ) : null}
      {writer.length > 0 ? (
        <div className="flex items-center gap-2 border-b-[1px] border-light pb-2">
          <p className="tracking-wide text-sm">Writer: </p>
          {writer.map((crew) => {
            if (!uniqueWriterNames.includes(crew.original_name)) {
              uniqueWriterNames.push(crew.original_name);
              return (
                <p key={crew.id} className="tracking-wide text-light text-xs">
                  {crew.original_name} &nbsp;&nbsp;&nbsp;
                </p>
              );
            }
            return null;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Crews;
