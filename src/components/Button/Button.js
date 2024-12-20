import React from "react";
import Image from "next/image";
import imgIconPhone from "./icon-phone.svg";

export default function Button(props) {
  return (
    <a
      href={props.href}
      className={` py-3 px-5 bg-[#007EA7] rounded-lg ${props.className}`}
    >
      <div className="flex gap-3 justify-center items-center">
        {props.icon == "phone" && (
          <div className="relative w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center">
            <Image
              className="block object-cover object-top pointer-events-none"
              src={imgIconPhone}
              alt="Icon phone"
              fill={true}
              priority
            />
          </div>
        )}
        {props.children && (
          <div className="font-bold text-base lg:text-xl text-white">
            {props.children}
          </div>
        )}
      </div>
    </a>
  );
}
