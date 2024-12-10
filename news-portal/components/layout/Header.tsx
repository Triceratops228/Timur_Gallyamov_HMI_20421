import Search from "@/public/icons/Search";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <header

    // className="bg-[#051236] bg-secondary h-14 top-0 flex justify-between items-center z-20 py-10 lg:px-40 w-full"
    >
    <div className="bg-[#0f0e17] bg-secondary hidden md:flex md:text-2xl text-white font-extrabold pb-10 w-full mx-auto border-b items-center justify-center py-10 md:px-[10%] lg:px-[20%] select-none">
      <span key="news" className="text-5xl" aria-label="news">
        News
      </span>
    </div>
    </header>
  );
};

export default Header;
