import Text, { H1, P } from "@/components/Text/Text";
import imgHero from "@/img/hero-desktop-sharpened.jpg";
import imgHeroMobile from "@/img/hero-mobile.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import SectionAboutUs from "@/components/SectionAboutUs/SectionAboutUs";
import SectionWhyChooseUs from "@/components/SectionWhySchooseUs/SectionWhyChooseUs";
import SectionMap from "@/components/SectionMap/SectionMap";
import SectionBrands from "@/components/SectionBrands/SectionBrands";
import SectionContactUs from "@/components/SectionContactUs/SectionContactUs";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionHero />
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

const SectionHero = () => {
  return (
    <Hero imgMobile={imgHeroMobile} imgDesktop={imgHero}>
      <MotionFadeInUp>
        <Text className="font-bold">All Districts</Text>
        <H1>Washing Machine Service</H1>
      </MotionFadeInUp>
      <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.25 }}>
        <P>
          When your washing machine isn&apos;t doing its job, you need a fast
          and reliable solution.
        </P>
      </MotionFadeInUp>
      <MotionFadeInUp className="grid gap-4" transition={{ delay: 0.5 }}>
        <P>
          With years of experience, professional tools, and a commitment to
          quality, we&apos;re here to get your machine back in action.
        </P>
      </MotionFadeInUp>
    </Hero>
  );
};
