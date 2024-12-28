import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import imgMenuIcon from "./icon-menu.svg";
import imgCloseIcon from "./icon-close.svg";
import imgLogo from "@/img/logo.svg";
import { pages } from "@/data";
import { P } from "@/components/Text/Text";
import { contact } from "@/data";

export default function Navbar(props) {
  return (
    <div className="relative py-4 px-8 bg-black bg-opacity-40 backdrop-blur-xl flex justify-between align-middle gap-3 z-10">
      <div
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
      </div>

      <div className="flex items-center w-[167px] lg:w-[200px]">
        <Image
          src={imgLogo}
          alt="Washer Service"
          width={167}
          height={30}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="hidden lg:flex items-center gap-6 text-white">
        {pages.map((item) => (
          <P key={item.name} className="lg:text-base font-bold">
            {item.name}
          </P>
        ))}
      </div>

      <div className="flex place-center">
        <Button
          href={`tel:${contact.phone}`}
          icon="phone"
          textClassName="hidden lg:block lg:text-base"
        >
          {contact.phoneNice}
        </Button>
      </div>
    </div>
  );
}
