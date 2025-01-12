import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import imgMenuIcon from "./icon-menu.svg";
import imgCloseIcon from "./icon-close.svg";
import imgLogo from "@/img/logo.svg";
import { pages } from "@/data";
import { P } from "@/components/Text/Text";
import { contact } from "@/data";
import Section from "../Section";

export default function Navbar() {
  return (
    <div className="relative py-4 bg-black bg-opacity-40 backdrop-blur-xl z-10">
      <Section className="!py-0">
        <div className="flex justify-between align-middle gap-3 z-10">
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
            <Button
              href={`tel:${contact.phone}`}
              icon="phone"
              textClassName="hidden md:block md:text-base"
            >
              <span className="text-base">{contact.phoneNice}</span>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
