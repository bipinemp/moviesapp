"use client";

import Container from "@/components/containers/Container";
import Image from "next/image";
import Link from "next/link";
import Err from "@/assets/notfound.png";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col mx-auto p-5 rounded-lg gap-3 mt-20 items-center justify-center border-[2px] border-red-600 w-fit">
        <Image src={Err} width={200} height={200} alt="404 Found" />
        <h2 className="text-xl sm:text-3xl font-bold">Something went wrong!</h2>
        <h1 className="text-xl sm:text-3xl font-bold text-red-600">:(</h1>
        <Link
          href={"/"}
          className="bg-red-600 py-3 px-5 rounded-2xl font-bold tracking-wide"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
