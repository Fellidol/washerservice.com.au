import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import imgMenuIcon from "./icon-menu.svg";
import imgLogo from "./logo.svg";

export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-black bg-opacity-40 backdrop-blur-xl flex justify-between align-middle gap-3">
      <div className="flex place-center">
        <Image
          src={imgMenuIcon}
          alt="Next.js logo"
          width={34}
          height={34}
          priority
        />
      </div>

      <div className="flex place-center">
        <Image
          src={imgLogo}
          alt="Washer Service"
          width={167}
          height={30}
          priority
        />
      </div>

      <div className="flex place-center">
        <Button href="tel:123456789" icon="phone"></Button>
      </div>
    </div>
  );
}
