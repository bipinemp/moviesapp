import { BiSearch } from "react-icons/bi";
import Container from "../containers/Container";
import Image from "next/image";
import Logo from "../../../public/logoo.png";
import NavLinks from "./NavLinks";

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
    {
      name: "My List",
      link: "/mylist",
    },
  ];
  return (
    <Container>
      <nav className="flex justify-between items-center py-3 text-light">
        <div className="flex gap-20 items-center">
          <div className="p-3 flex items-center justify-center border-[2px] rounded-full border-primary">
            <Image src={Logo} alt="website_logo" width={20} height={20} />
          </div>
          <div className="flex gap-9 items-center font-medium text-lg">
            <NavLinks navLink={navLink} />
          </div>
        </div>

        <div>
          <BiSearch size={30} className="cursor-pointer" />
        </div>
      </nav>
    </Container>
  );
}
