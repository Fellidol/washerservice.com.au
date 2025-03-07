import Image from "next/image";
import Section from "@/components/Section";
import Text, { H1, P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import imgHero from "@/img/hero-desktop-sharpened.jpg";
import imgHeroMobile from "@/img/hero-mobile.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import MotionFadeInUp from "../components/Motion/MotionFadeInUp";
import SectionAboutUs from "@/components/SectionAboutUs/SectionAboutUs";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionMap from "@/components/SectionMap/SectionMap";
import SectionBrands from "@/components/SectionBrands/SectionBrands";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import { contact } from "@/data";
import MotionParallaxImg from "@/components/Motion/MotionParallaxImg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SectionAboutUs />
        <SectionWhyChooseUs />
        <SectionMap />
        <SectionBrands />
        <SectionContactUs />
      </main>
      <Footer />
    </>
  );
}

const Hero = () => (
  <MotionParallaxImg>
    <div className="relative bg-black z-0 overflow-hidden">
      <Image
        className="block md:hidden object-cover object-bottom pointer-events-none parallax-item"
        src={imgHeroMobile}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="768px"
        placeholder="blur"
      />
      <Image
        className="hidden md:block object-cover pointer-events-none"
        src={imgHero}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="2500px"
        placeholder="blur"
      />

      <Section className="pt-[140px] pb-[180px] md:pt-[140px] lg:pt-[200px] lg:pb-[140px]">
        <div className="relative max-w-[450px] text-white grid gap-6">
          <MotionFadeInUp>
            <Text className="font-bold">All Districts</Text>
            <H1>Washing Machine Service</H1>
          </MotionFadeInUp>

          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
            <P>
              When your washing machine isn&apos;t doing its job, you need a
              fast and reliable solution.
            </P>
          </MotionFadeInUp>

          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
            <P>
              With years of experience, professional tools, and a commitment to
              quality, we&apos;re here to get your machine back in action.
            </P>
          </MotionFadeInUp>

          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.75 }}>
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
