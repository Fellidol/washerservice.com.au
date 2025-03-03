import Image from "next/image";
import { H1, P } from "../Text/Text";
import { ButtonWhite } from "../Button/Button";
import imgContact from "./contact.jpg";
import { contact } from "@/data";
import MotionFadeInUp from "../Motion/MotionFadeInUp";

export default function SectionContactUs() {
  return (
    <div className="relative w-full flex flex-col md:flex-row">
      <div className="relative w-full aspect-video">
        <Image
          className="object-cover pointer-events-none z-0"
          src={imgContact}
          alt="Washing machine in laundry room"
          fill={true}
          priority
        />
      </div>
      <div
        className="w-full aspect-video text-white text-center flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #3F91C8 0%, #18557E 100%)",
        }}
      >
        <div className="max-w-[350px] py-8 md:py-[60px] lg:py-[120px] grid gap-8">
          <MotionFadeInUp>
            <div className="grid gap-4">
              <H1>Contact us</H1>
              <P>
                Have questions? Need a quote? <br />
                Give us a call, we&apos;re here to help.
              </P>
            </div>
          </MotionFadeInUp>

          <MotionFadeInUp>
            <div className="grid gap-4">
              <P className="font-bold">Call Mario and save</P>
              <div>
                <ButtonWhite
                  icon="phone"
                  className="!inline-block"
                  href={`tel:${contact.phone}`}
                >
                  {contact.phoneNice}
                </ButtonWhite>
              </div>
            </div>
          </MotionFadeInUp>
        </div>
      </div>
    </div>
  );
}
