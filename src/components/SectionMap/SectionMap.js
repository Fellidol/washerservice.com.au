"use client";

import dynamic from "next/dynamic";
// import Map from "./Map";
import { H1, P } from "../Text/Text";
import towns from "@/data/towns";

const Map = dynamic(() => import("@/components/SectionMap/Map"), {
  ssr: false,
}); // Only import <Map /> on client side.

export default function SectionMap() {
  return (
    <div className="relative h-auto bg-white sm:flex">
      <div className="relative w-full sm:w-auto sm:h-full basis-5/12 overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-[40px] lg:h-[120px] bg-gradient-to-b from-white to-white-0" />
        <div
          className=" w-full h-full p-8 lg:py-[120px] overflow-scroll text-center sm:text-left "
          style={{
            paddingLeft: "calc(50vw - calc(min(100vw, 1024px)/2) + 32px)",
          }}
        >
          <H1 className="mb-8">Towns we service</H1>
          <ul className=" mb-4">
            {towns.map((item) => (
              <li
                key={item.color}
                className="flex justify-center sm:justify-start items-center gap-3 p-0 m-0"
              >
                <div
                  className="rounded aspect-square h-[0.5em]"
                  style={{ backgroundColor: item.color }}
                ></div>
                <P className="town-list">{item.name}</P>
              </li>
            ))}
          </ul>
          <P>and all surrounding areas</P>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60px] lg:h-[120px] bg-gradient-to-t from-white to-white-0" />
      </div>

      <div className="relative w-full aspect-square sm:aspect-auto basis-7/12 bg-zinc-900 z-0 overflow-hidden">
        <Map />
      </div>
    </div>
  );
}
