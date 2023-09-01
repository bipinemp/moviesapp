"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavLink {
  name: string;
  link: string;
}

interface NavLinkProps {
  navLink: NavLink[];
}

export default function NavLinks({ navLink }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {navLink.map(({ link, name }) => (
        <li
          key={link}
          onClick={() => router.push(link)}
          className={`${pathname === link ? "text-white" : "text-light"}`}
        >
          {name}
        </li>
      ))}
    </>
  );
}
