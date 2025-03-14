"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { H1 } from "../Text/Text";
import { pages, contact } from "@/data";
import imgMenuIcon from "./icon-menu.svg";
import imgCloseIcon from "./icon-close.svg";
import imgLogo from "@/img/logo.svg";
import Button from "@/components/Button/Button";
import Section from "../Section";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Outer>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavMobile menuOpen={menuOpen} />
    </Outer>
  );
};

const Outer = (props) => {
  return (
    <header className="fixed top-0 left-0 w-full z-10">{props.children}</header>
  );
};

const NavMobile = (props) => {
  return (
    <nav
      className={`lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-xl overflow-hidden transition-all duration-300 pt-[76px] origin-top`}
      style={{
        transform: props.menuOpen ? "scaleY(100%)" : "scaleY(0)",
        opacity: props.menuOpen ? "1" : "0",
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
    </nav>
  );
};

function Navbar(props) {
  return (
    <div className="relative py-4 px-8 bg-black bg-opacity-40 backdrop-blur-xl z-10">
      <div className="max-w-[1024px] mx-auto flex justify-between align-middle lg:px-8">
        <button
          className="flex items-center lg:hidden"
          onClick={() => {
            props.setMenuOpen(!props.menuOpen);
          }}
        >
          {props.menuOpen ? (
            <Image
              src={imgCloseIcon}
              alt="Close menu"
              width={34}
              height={34}
              priority
              style={{ width: 34, height: 34 }}
            />
          ) : (
            <Image
              src={imgMenuIcon}
              alt="Open menu"
              width={34}
              height={34}
              priority
              style={{ width: 34, height: 34 }}
            />
          )}
        </button>

        <div className="flex items-center w-[167px] lg:w-[200px]">
          <Link href="/">
            <Image
              src={imgLogo}
              alt="Washer Service"
              width={167}
              height="auto"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 text-white">
          {pages.map((item) => (
            <p key={item.name} className="text-base font-bold">
              <Link
                href={item.href}
                className="transition duration-150 hover:bg-[rgba(255,255,255,0.1)] px-3 py-3 rounded-md"
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>

        <div className="flex place-center">
          <Button
            href={`tel:${contact.phone}`}
            icon="phone"
            textClassName="hidden lg:block lg:text-base"
          >
            <span className="text-base">{contact.phoneNice}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
