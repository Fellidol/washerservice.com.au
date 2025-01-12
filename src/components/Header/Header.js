import { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar2/Navbar";
import { H1 } from "../Text/Text";
import { pages } from "@/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div
        className={` absolute top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-xl overflow-hidden transition-all duration-300 pt-[76px] origin-top`}
        style={{
          transform: menuOpen ? "scaleY(100%)" : "scaleY(0)",
          opacity: menuOpen ? "1" : "0",
        }}
      >
        <ul className="p-8 text-white flex flex-col gap-4">
          {pages.map((item) => (
            <li key={item.name}>
              <H1 as="p">
                <Link href={item.href}>{item.name}</Link>
              </H1>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
