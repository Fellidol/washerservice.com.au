"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import { H1, P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import { contact } from "@/data";
import imgHero from "@/img/brands-hero-desktop.jpg";
import imgHeroMobile from "@/img/brands-hero-mobile.jpg";
import MotionParallaxImg from "@/components/Motion/MotionParallaxImg";
import BrandsGrid from "@/components/BrandsGrid/BrandsGrid";

export default function Page(props) {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero brand={props.brand} />
        <BrandsGrid />
        <SectionWhyChooseUs />
        <SectionContactUs />
      </main>
      <Footer />
    </>
  );
}

const Hero = (props) => (
  <MotionParallaxImg>
    <div className="relative bg-black z-0 overflow-hidden">
      <Image
        className="block md:hidden object-cover  pointer-events-none"
        src={imgHeroMobile}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="768px"
      />
      <Image
        className="hidden md:block object-cover pointer-events-none"
        src={imgHero}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="2500px"
      />

      <Section className="pt-[140px] pb-[180px] md:pt-[140px] lg:pt-[200px] lg:pb-[140px]">
        <div className="relative max-w-[450px] text-white grid gap-6">
          <MotionFadeInUp>
            {props?.brand?.id ? (
              <>
                <P className="font-bold">We service</P>
                <H1>{props.brand.name}</H1>
              </>
            ) : (
              <H1>Brands</H1>
            )}
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
            <P>
              We service all major washing machine brands, ensuring that no
              matter what make or model you own, we have the expertise to repair
              it.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
            <P>
              From well-known brands like LG, Samsung, Bosch, and Whirlpool to
              more specialised names like Fisher & Paykel, our team is trained
              in the specific needs and technologies of each brand.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.75 }}>
            <P>
              We stay updated on the latest models and technologies, so you can
              trust us to handle your repairs with accuracy and skill. If your
              washer needs professional attention, we&apos;re ready to help—no
              matter the brand.
            </P>
          </MotionFadeInUp>

          <MotionFadeInUp className="grid gap-4" transition={{ delay: 1 }}>
            <P className="font-bold">Call Mario and save</P>
            <div>
              <Button
                icon="phone"
                className="!inline-block"
                href={`tel:${contact.phone}`}
              >
                {contact.phoneNice}
              </Button>
            </div>
          </MotionFadeInUp>
        </div>
      </Section>
    </div>
  </MotionParallaxImg>
);
