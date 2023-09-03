"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  name: string;
  link: string;
}

interface NavLinkProps {
  navLink: NavLink[];
}

export default function NavLinks({ navLink }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <>
      {navLink.map(({ link, name }) => (
        <Link
          key={link}
          href={`${link}`}
          className={`${pathname === link ? "text-white" : "text-light"}`}
        >
          {name}
        </Link>
      ))}
    </>
  );
}
