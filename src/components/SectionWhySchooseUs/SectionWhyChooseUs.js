import Image from "next/image";
import React from "react";
import SliderChoose from "./SliderChoose";
import imgAbout2 from "@/img/about2.jpg";

export default function SectionWhyChooseUs() {
  return (
    <div className="relative  pb-[60px] md:pb-[90px] lg:pb-[120px]">
      <Image
        className="object-cover object-top pointer-events-none z-0"
        src={imgAbout2}
        alt="Marios Washer service"
        fill={true}
        priority
      />

      <SliderChoose />
    </div>
  );
}
