import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Logo from "../../../public/logoo.png";
import NavLinks from "./NavLinks";
import Link from "next/link";

interface NavLink {
  name: string;
  link: string;
}

export default function Navbar() {
  const navLink: NavLink[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Movies",
      link: "/movies",
    },
    {
      name: "TV",
      link: "/tv",
    },
  ];

  return (
    <nav className="bg-black max-w-[1920px] mx-auto px-4 md:px-10 xl:px-28 2xl:px-52 flex justify-between items-center py-3 text-light sticky top-0 left-0 right-0 z-40">
      <div className="flex gap-20 items-center">
        <Link href={"/"}>
          <div className="p-3 flex items-center justify-center border-[2px] rounded-full border-primary">
            <Image src={Logo} alt="website_logo" width={20} height={20} />
          </div>
        </Link>
        <div className="flex gap-9 items-center font-medium text-lg">
          <NavLinks navLink={navLink} />
        </div>
      </div>

      <div>
        <BiSearch size={30} className="cursor-pointer" />
      </div>
    </nav>
  );
}
