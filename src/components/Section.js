import React from "react";

export default function Section(props) {
  return (
    <section
      className={`max-w-[1024px] mx-auto  py-[60px] md:py-[90px] lg:py-[120px] px-8 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
