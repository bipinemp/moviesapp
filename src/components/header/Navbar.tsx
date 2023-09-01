import { BiSearch } from "react-icons/bi";
import Container from "../Container";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex justify-between items-center py-5">
        <div className="flex gap-20 items-center">
          <div className="p-3 flex items-center justify-center border-[2px] rounded-full border-primary">
            <Image src={Logo} alt="website_logo" width={20} height={20} />
          </div>
          <div className="flex gap-9 items-center font-medium text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/movies"}>Movies</Link>
            <Link href={"/shows"}>Tv</Link>
            <Link href={"/mylist"}>My List</Link>
          </div>
        </div>

        <div>
          <BiSearch size={30} className="cursor-pointer" />
        </div>
      </nav>
    </Container>
  );
}
