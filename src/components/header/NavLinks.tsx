"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { fetchInfiniteData } from "@/utils/apis/queries";

interface NavLink {
  name: string;
  link: string;
}

interface NavLinkProps {
  navLink: NavLink[];
}

export default function NavLinks({ navLink }: NavLinkProps) {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  function prefetchData(name: string) {
    let fetchKey: string;
    let media: string;
    if (name === "Movies") {
      fetchKey = "InfiniteMovies";
      media = "movie";
    } else if (name === "TV") {
      fetchKey = "InfiniteTv";
      media = "tv";
    } else {
      fetchKey = "";
      media = "";
    }
    queryClient.prefetchQuery({
      queryKey: [fetchKey],
      queryFn: ({ pageParam = 1 }) => fetchInfiniteData(media, pageParam),
    });
  }

  return (
    <>
      {navLink.map(({ link, name }) => (
        <Link
          key={link}
          href={`${link}`}
          onMouseEnter={() => prefetchData(name)}
          className={`active:bg-gray-600/30 py-1 px-2 rounded-lg select-none ${
            pathname === link ? "text-white" : "text-light"
          } text-sm sm:text-lg`}
        >
          {name}
        </Link>
      ))}
    </>
  );
}
