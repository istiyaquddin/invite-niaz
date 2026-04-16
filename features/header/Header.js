import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";

import logo from "@/assets/logo-xl.png";
import Image from "next/image";
import Button from "./components/Button";

const buttonInfo = [
  { id: "1", icon: <RiHome2Line />, buttonName: "Home" },
  { id: "1", icon: <CiClock2 />, buttonName: "Timeline" },
  { id: "1", icon: <GoGraph />, buttonName: "Status" },
];

const Header = () => {
  return (
    <nav className="border-b border-zinc-200 flex justify-between items-center px-20 py-4">
      <div>
        <p>
          <Image
            src={logo}
            height={200}
            width={200}
            alt="photo"
            className="invert"
          />
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        {buttonInfo.map(({ id, icon, buttonName }) => (
          <Button buttonName={buttonName} key={id}>
            {icon}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
