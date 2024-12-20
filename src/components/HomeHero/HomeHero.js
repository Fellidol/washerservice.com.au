import React from "react";
import Image from "next/image";
import imgHero from "./hero-desktop.jpg";
import Text, { H1, P } from "../Text/Text";
import Button from "../Button/Button";

export default function HomeHero() {
  return (
    <div className="relative bg-slate-100 z-0">
      <Image
        className="object-cover"
        src={imgHero}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
      />

      <div className="container mx-auto">
        <div className=" relative max-w-[490px] pt-[140px] pb-[60px] px-8 text-white grid gap-4">
          <div>
            <Text className="font-bold">All Districts</Text>
            <H1>Washing Machine Service</H1>
          </div>
          <div className="grid gap-4">
            <P>
              When your washing machine isn&apos;t doing its job, you need a
              fast and reliable solution.
            </P>
            <P>
              With years of experience, professional tools, and a commitment to
              quality, we&apos;re here to get your machine back in action.
            </P>
          </div>

          <div className="grid gap-4">
            <P className="font-bold">Call Mario and save</P>
            <div>
              <Button icon="phone" className="!inline-block">
                0418 540 353
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
