"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
          href={link}
          scroll={false}
          className={`${pathname === link ? "text-white" : "text-light"}`}
        >
          {name}
        </Link>
      ))}
    </>
  );
}
