import Image from "next/image";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import { H1, P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import { brands, contact } from "@/data";
import imgHero from "@/img/towns-hero-desktop.jpg";
import imgHeroMobile from "@/img/towns-hero-mobile.jpg";
import SectionMap from "@/components/SectionMap/SectionMap";
import MotionParallaxImg from "@/components/Motion/MotionParallaxImg";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SectionMap />
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
            <H1>Towns we service</H1>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
            <P>
              We provide fast, same-day washing machine repairs across a wide
              range of areas, so help is always nearby when you need it most.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
            <P>
              We&spos;re committed to arriving on time, fully equipped to handle
              your repair with speed and precision.
            </P>
          </MotionFadeInUp>
          <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.75 }}>
            <P>
              We&spos;re dedicated to delivering professional service that gets
              your washer back up and running without delay. Wherever you are,
              you can trust us to keep your laundry routine on track.
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

const BrandsGrid = (props) => {
  return (
    <div
      className="relative  pb-[60px] md:pb-[90px] lg:pb-[120px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(67,87,103,1) 0%, rgba(37,51,66,1) 100%)",
      }}
    >
      <Section>
        <div className="flex flex-wrap justify-between gap-6">
          {brands.map((item) => (
            <Card key={item.name} img={item.image} alt={item.name} />
          ))}
        </div>
      </Section>
    </div>
  );
};

function Card(props) {
  return (
    <div
      className={`relative w-[calc(50%-12px)] md:w-[calc(33%-24px)] lg:w-[calc(25%-24px)] p-4 rounded-xl overflow-hidden flex flex-col gap-3 bg-white ${props.className}`}
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
