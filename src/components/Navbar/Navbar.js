import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import imgMenuIcon from "./icon-menu.svg";
import imgLogo from "@/img/logo.svg";

export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-black bg-opacity-40 backdrop-blur-xl flex justify-between align-middle gap-3">
      <div className="flex items-center">
        <Image
          src={imgMenuIcon}
          alt="Menu"
          width={34}
          height={34}
          priority
          style={{ width: 34, height: 34 }}
        />
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

      <div className="flex place-center">
        <Button href="tel:123456789" icon="phone"></Button>
      </div>
    </div>
  );
}
