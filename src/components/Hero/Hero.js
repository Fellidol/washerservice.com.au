import Image from "next/image";
import MotionParallaxImg from "@/components/Motion/MotionParallaxImg";
import Section from "../Section";
import MotionFadeInUp from "../Motion/MotionFadeInUp";
import Button from "../Button/Button";
import { P } from "../Text/Text";
import { contact } from "@/data";

const Hero = (props) => (
  <MotionParallaxImg>
    <div className="relative bg-black z-0 overflow-hidden">
      <Image
        className="block md:hidden object-cover object-bottom pointer-events-none parallax-item"
        src={props.imgMobile}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="768px"
        placeholder="blur"
      />
      <Image
        className="hidden md:block object-cover pointer-events-none"
        src={props.imgDesktop}
        alt="All Districts Washer Machine Service"
        fill={true}
        priority
        sizes="2500px"
        placeholder="blur"
      />

      <Section className="pt-[140px] pb-[180px] md:pt-[140px] lg:pt-[200px] lg:pb-[140px]">
        <div className="relative max-w-[450px] text-white grid gap-6">
          {props.children}

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

export default Hero;
