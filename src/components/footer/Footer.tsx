import Image from "next/image";
import Logo from "../../../public/logoo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white mt-32 text-black flex flex-col gap-5 py-10 px-32 2xl:px-[32rem] rounded-tl-3xl rounded-tr-3xl">
      <div>
        <Image src={Logo} width={40} height={40} alt="website logo" />
      </div>
      <div className="flex justify-between font-medium text-black/60">
        <div className="flex flex-col gap-2">
          <a id="footerlinks" href="#">
            Audio and Subtitles
          </a>
          <a id="footerlinks" href="#">
            Media Center
          </a>
          <a id="footerlinks" href="#">
            Privacy
          </a>
          <a id="footerlinks" href="#">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a id="footerlinks" href="#">
            Audio Description
          </a>
          <a id="footerlinks" href="#">
            Investor Relations
          </a>
          <a id="footerlinks" href="#">
            Legal Notices
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a id="footerlinks" href="#">
            Audio Description
          </a>
          <a id="footerlinks" href="#">
            Jobs
          </a>
          <a id="footerlinks" href="#">
            Cookie Preferences
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a id="footerlinks" href="#">
            Gift Cards
          </a>
          <a id="footerlinks" href="#">
            Terms of Use
          </a>
        </div>
      </div>
      <div className="flex gap-5 self-center">
        <BsFacebook
          size={30}
          color="rgba(0,0,0,0.7)"
          className="hover:fill-black cursor-pointer transition"
        />
        <BsInstagram
          size={30}
          color="rgba(0,0,0,0.7)"
          className="hover:fill-black cursor-pointer transition"
        />
        <BsTwitter
          size={30}
          color="rgba(0,0,0,0.7)"
          className="hover:fill-black cursor-pointer transition"
        />
        <BsYoutube
          size={30}
          color="rgba(0,0,0,0.7)"
          className="hover:fill-black cursor-pointer transition"
        />
      </div>
    </footer>
  );
}
