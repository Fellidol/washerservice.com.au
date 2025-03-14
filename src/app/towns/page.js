"use client";

import Header from "@/components/Header/Header";
import { H1, P } from "@/components/Text/Text";
import Footer from "@/components/Footer";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import imgHero from "@/img/towns-hero-desktop.jpg";
import imgHeroMobile from "@/img/towns-hero-mobile.jpg";
import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "@/components/Hero/Hero";

export default function Page(props) {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionHero town={props.town} />
        <SectionMap town={props.town} />
        <SectionWhyChooseUs />
        <SectionContactUs />
      </main>
      <Footer />
    </>
  );
}

const SectionHero = (props) => {
  return (
    <Hero imgMobile={imgHeroMobile} imgDesktop={imgHero}>
      <MotionFadeInUp>
        <Title town={props.town} />
      </MotionFadeInUp>

      <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
        <P>
          We provide fast, same-day washing machine repairs across a wide range
          of areas, so help is always nearby when you need it most.
        </P>
      </MotionFadeInUp>

      <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
        <P>
          We&apos;re committed to arriving on time, fully equipped to handle
          your repair with speed and precision.
        </P>
      </MotionFadeInUp>

      <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.75 }}>
        <P>
          We&apos;re dedicated to delivering professional service that gets your
          washer back up and running without delay. Wherever you are, you can
          trust us to keep your laundry routine on track.
        </P>
      </MotionFadeInUp>
    </Hero>
  );
};

const Title = (props) => {
  return (
    <>
      {props?.town?.id ? (
        <>
          <P className="font-bold">We service</P>
          <H1>{props.town.name}</H1>
        </>
      ) : (
        <>
          <H1>Towns we service</H1>
        </>
      )}
    </>
  );
};
