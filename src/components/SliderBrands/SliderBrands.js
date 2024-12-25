"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import smoothscroll from "smoothscroll-polyfill";
import Section from "@/components/Section";
import imgArrow from "@/img/arrow-right.svg";
import { H1, P } from "../Text/Text";
import brands from "@/data/brands";

export default function Slider() {
  const scrollContainerRef = useRef(null);
  const arrowPrevRef = useRef(null);
  const arrowNextRef = useRef(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef || !arrowPrevRef || !arrowNextRef) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;

    const arrowPrev = arrowPrevRef.current;
    const arrowNext = arrowNextRef.current;

    arrowPrev.addEventListener("click", handleClickPrev);
    arrowNext.addEventListener("click", handleClickNext);

    function handleClickPrev() {
      const scrollLeft = scrollContainer.scrollLeft - calcScrollDistance();
      scrollContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }

    function handleClickNext() {
      const scrollLeft = scrollContainer.scrollLeft + calcScrollDistance();
      scrollContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }

    function calcScrollDistance() {
      const distance2 = 288;
      return distance2;
    }

    return () => {
      arrowPrev.removeEventListener("click", handleClickPrev);
      arrowNext.removeEventListener("click", handleClickNext);
    };
  }, []);

  return (
    <>
      <Section className="pb-6 lg:pb-[60px]">
        <header className="relative flex place-content-between items-start text-white">
          <H1>Brands</H1>
          <div className="flex gap-6">
            <button
              ref={arrowPrevRef}
              className="relative w-[40px] h-[40px] rotate-180"
            >
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
            <button ref={arrowNextRef} className="relative w-[40px] h-[40px]">
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
          </div>
        </header>
      </Section>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="relative hide-scrollbars overflow-x-scroll scroll-smooth overflow-hidden"
        >
          <div
            className="w-[fit-content] grid grid-flow-col gap-3 md:gap-6 lg:gap-9"
            style={{
              padding: "0 calc(50vw - calc(min(100vw, 1024px)/2) + 30px)",
            }}
          >
            {brands.map((item) => (
              <Card key={item.name} img={item.image} alt={item.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div
      className={`relative w-[140px] md:w-[180px] lg:w-[200px] p-4 rounded-xl overflow-hidden flex flex-col gap-3 bg-white ${props.className}`}
    >
      <div className="relative w-full aspect-square grid items-center justify-center">
        <Image
          src={props.img}
          fill={true}
          alt="brand"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
