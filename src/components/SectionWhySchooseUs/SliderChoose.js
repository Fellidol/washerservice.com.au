"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import smoothscroll from "smoothscroll-polyfill";
import Section from "@/components/Section";
import imgArrow from "@/img/arrow-right.svg";
import imgIconTools from "@/img/icon-tool.svg";
import imgIconBolt from "@/img/icon-bolt.svg";
import imgIconPig from "@/img/icon-pig.svg";
import { H1, P } from "../Text/Text";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Slider() {
  const scrollContainerRef = useRef(null);
  const arrowPrevRef = useRef(null);
  const arrowNextRef = useRef(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef || !arrowPrevRef || !arrowNextRef) return;

    const scrollContainer = scrollContainerRef.current;
    const arrowPrev = arrowPrevRef.current;
    const arrowNext = arrowNextRef.current;

    scrollContainer.addEventListener("scroll", handleScroll);
    arrowPrev.addEventListener("click", handleClickPrev);
    arrowNext.addEventListener("click", handleClickNext);

    // TODO - this handler shoild be debounced or throttled
    function handleScroll() {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // TODO - shouldnt set this style directly on the element,
      // the style will be lost if the component is   ever e-rendered.
      arrowPrev.style.opacity = scrollLeft <= 0 ? 0.5 : 1;
      arrowNext.style.opacity = scrollLeft == scrollWidth ? 0.5 : 1;
    }

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
      scrollContainer.removeEventListener("scroll", handleScroll);
      arrowPrev.removeEventListener("click", handleClickPrev);
      arrowNext.removeEventListener("click", handleClickNext);
    };
  }, []);

  return (
    <>
      <Section className="pb-6 md:pb-[60px] lg:pb-[60px]">
        <div className="relative flex place-content-between items-center text-white">
          <H1>Why choose us?</H1>
          <div className="flex items-center gap-4 md:hidden">
            <button
              ref={arrowPrevRef}
              className="relative w-[40px] h-[30px] rotate-180 transition-all"
            >
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
            <button
              ref={arrowNextRef}
              className="relative w-[40px] h-[40px] transition-all"
            >
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
          </div>
        </div>
      </Section>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="relative hide-scrollbars overflow-x-scroll scroll-smooth overflow-hidden"
        >
          <motion.div
            className="w-[fit-content] grid grid-flow-col gap-3 md:gap-6 lg:gap-9"
            style={{
              padding: "0 calc(50vw - calc(min(100vw, 1024px)/2) + 30px)",
            }}
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
            viewport={{ once: true }}
          >
            <Card
              title="Expert Technicians"
              text="We are experienced in repairing all major washing machine brands and models."
              img={imgIconTools}
            />
            <Card
              title="Fast, On-Time Service"
              text="We value your time, and we show up on schedule, ready to fix the problem."
              img={imgIconBolt}
            />
            <Card
              title={
                <>
                  Affordable <br className="md:hidden" /> Rates
                </>
              }
              text="Get quality repairs without breaking the bank."
              img={imgIconPig}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <motion.div
      className={`relative w-full min-w-[200px] p-6 rounded-xl overflow-hidden flex flex-col gap-3 ${props.className} bg-white`}
      variants={itemVariants}
    >
      <div className="relative w-10 h-10">
        <Image
          src={props.img}
          fill={true}
          alt={props.title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <P className="font-bold">{props.title}</P>
      <P>{props.text}</P>
    </motion.div>
  );
}
