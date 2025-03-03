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
import imgHero from "@/img/contact-hero-desktop.jpg";
import imgHeroMobile from "@/img/contact-hero-mobile.jpg";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SectionWhyChooseUs />
        <SectionContactUs />
      </main>
      <Footer />
    </>
  );
}

const Hero = () => (
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
          <H1>Contact us</H1>
        </MotionFadeInUp>
        <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
          <P>
            Need help with your washing machine? Get in touch with us today!
            Whether you have a question, need a quote, or want to book a
            same-day repair, we&apos;re here to assist.
          </P>
        </MotionFadeInUp>
        <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
          <P>
            Just give us a call, and we&apos;ll get back to you promptly.
            We&apos;re committed to fast, reliable service, and we&apos;re ready
            to make sure your washer is back up and running in no time.
            Don&apos;t wait—reach out and let us know how we can help!
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
