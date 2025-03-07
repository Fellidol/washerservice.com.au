import Image from "next/image";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import { H1, P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import imgHeroMobile from "@/img/about-hero-mobile.jpg";
import Footer from "@/components/Footer";
import SectionAboutUs from "@/components/SectionAboutUs/SectionAboutUs";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import { contact } from "@/data";
import imgHero from "@/img/about-hero-desktop.jpg";
import MotionParallaxImg from "@/components/Motion/MotionParallaxImg";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SectionAboutUs />
        <SectionWhyChooseUs />
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
            <H1>About us</H1>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
            <P>
              With over 50 years of hands-on experience, we’ve built a
              reputation for reliable, same-day washing machine repairs that you
              can count on.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
            <P>
              We believe in clear communication and transparency, which is why
              we offer fixed-price quotes with no surprises, and all our work is
              guaranteed to give you peace of mind.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.75 }}>
            <P>
              Plus, we’re proud to support our community with discounts for
              pensioners. When you need quality repairs done right the first
              time, we’re here to help.
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
