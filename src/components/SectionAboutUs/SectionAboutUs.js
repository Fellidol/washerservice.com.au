import React from "react";
import Section from "../Section";
import { H1, P } from "../Text/Text";
import Image from "next/image";
import Button from "../Button/Button";
import MotionFadeInUp from "@/components/Motion/MotionFadeInUp";
import imgAbout from "@/img/about.png";
import { contact } from "@/data";

export default function SectionAboutUs() {
  return (
    <div className="bg-white text-black">
      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:gap-16">
          <MotionFadeInUp className="md:hidden">
            <H1 className="text-balance">
              Trusted Washing Machine Repair for over 50 years!
            </H1>
          </MotionFadeInUp>

          <div className="relative aspect-video w-full rounded-lg lg:aspect-square">
            <Image
              className="object-cover object-top pointer-events-none"
              src={imgAbout}
              alt="Marios Washer service"
              fill={true}
              priority
            />
          </div>

          <div className="w-full flex flex-col gap-6 justify-center">
            <MotionFadeInUp className="hidden md:block">
              <H1 className="text-balance">
                Trusted Washing Machine Repairman for over 50 years
              </H1>
            </MotionFadeInUp>

            <MotionFadeInUp>
              <P>
                We deliver fast, reliable service to get your appliance running
                smoothly again. As a <strong>family-run business</strong>, we
                take pride in providing affordable rates and a commitment to
                quality, making it easy to get your laundry routine back on
                track.
              </P>
            </MotionFadeInUp>

            <MotionFadeInUp>
              <P>Contact us today for professional, hassle-free repairs!</P>
            </MotionFadeInUp>

            <MotionFadeInUp>
              <div>
                <Button icon="phone" href={`tel:${contact.phone}`}>
                  {contact.phoneNice}
                </Button>
              </div>
            </MotionFadeInUp>
          </div>
        </div>
      </Section>
    </div>
  );
}
