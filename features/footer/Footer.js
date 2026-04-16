import faceLogo from "@/assets/facebook.png";
import instLogo from "@/assets/instagram.png";
import logo from "@/assets/logo-xl.png";
import xLogo from "@/assets/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] p-20 mt-20 text-zinc-300">
      <div className="flex flex-col justify-center items-center gap-3 border-b border-green-950/40 pb-10">
        <div>
          <Image src={logo} height={400} width={400} alt="photo" className="" />
        </div>
        <p className="">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex flex-col justify-center items-center gap-3 mt-3">
          <p className="text-lg font-semibold">Social Links</p>
          <div className="flex gap-5">
            <Image
              src={instLogo}
              height={40}
              width={40}
              alt="photo"
              className="cursor-pointer"
            />
            <Image
              src={faceLogo}
              height={40}
              width={40}
              alt="photo"
              className="cursor-pointer"
            />
            <Image
              src={xLogo}
              height={40}
              width={40}
              alt="photo"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center ">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <button className="cursor-pointer">Privacy Policy</button>
          <button className="cursor-pointer">Terms of Service</button>
          <button className="cursor-pointer">Cookies</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
