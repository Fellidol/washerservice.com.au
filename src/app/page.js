"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar/Navbar";
import Text, { H1, P } from "@/components/Text/Text";
import Button, { ButtonWhite } from "@/components/Button/Button";
import imgHero from "@/img/hero-desktop.jpg";
import imgHeroMobile from "@/img/hero-mobile.jpg";
import imgAbout from "@/img/about.png";
import imgAbout2 from "@/img/about2.jpg";
import SliderChoose from "@/components/SliderChoose/SliderChoose";
import Map, { mapData } from "@/components/Map";
import SliderBrands from "@/components/SliderBrands/SliderBrands";
import imgContact from "@/img/contact.jpg";
import imgLogo from "@/img/logo.svg";
import Link from "next/link";
import brands from "@/data/brands";
import towns from "@/data/towns";

// const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="relative bg-black z-0 overflow-hidden">
        <Image
          className="block md:hidden object-cover object-bottom pointer-events-none"
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
          sizes="1512px"
        />

        <Section className="pt-[140px] pb-[180px] lg:pb-[140px]">
          <div className="relative max-w-[450px] text-white grid gap-4">
            <div>
              <Text className="font-bold">All Districts</Text>
              <H1>Washing Machine Service</H1>
            </div>
            <div className="grid gap-4">
              <P>
                When your washing machine isn&apos;t doing its job, you need a
                fast and reliable solution.
              </P>
              <P>
                With years of experience, professional tools, and a commitment
                to quality, we&apos;re here to get your machine back in action.
              </P>
            </div>

            <div className="grid gap-4">
              <P className="font-bold">Call Mario and save</P>
              <div>
                <Button icon="phone" className="!inline-block">
                  0418 540 353
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* About */}
      <div className="bg-white text-black">
        <Section>
          <div className="flex flex-col gap-4 md:flex-row md:gap-16">
            <H1 className="text-balance md:hidden">
              Trusted Washing Machine Repair for over 50 years
            </H1>

            <div className="relative aspect-video w-full rounded-lg lg:aspect-square">
              <Image
                className="object-cover object-top pointer-events-none"
                src={imgAbout}
                alt="Marios Washer service"
                fill={true}
                priority
              />
            </div>

            <div className="w-full flex flex-col gap-4 justify-center">
              <H1 className="hidden md:block text-balance">
                Trusted Washing Machine Repair for over 50 years
              </H1>

              <P>
                We deliver fast, reliable service to get your appliance running
                smoothly again. With affordable rates and a commitment to
                quality, we make it easy to get your laundry routine back on
                track.
              </P>
              <P>Contact us today for professional, hassle-free repairs!</P>
              <div>
                <Button icon="phone" className="inline-block">
                  0418 540 353
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Why choose us */}
      <div className="relative bg-[#131E42] pb-[60px] lg:pb-[120px]">
        <Image
          className="object-cover object-top pointer-events-none z-0"
          src={imgAbout2}
          alt="Marios Washer service"
          fill={true}
          priority
        />
        <SliderChoose />
      </div>

      {/* Map */}
      <div className="relative h-auto sm:flex">
        <div className="relative w-full sm:w-auto sm:h-full basis-5/12 overflow-hidden ">
          <div className="absolute top-0 left-0 w-full h-[40px] lg:h-[120px] bg-gradient-to-b from-white to-white-0" />
          <div
            className="aspect-square w-full h-full p-8 lg:py-[120px] overflow-scroll text-center sm:text-left "
            style={{
              paddingLeft: "calc(50vw - calc(min(100vw, 1024px)/2) + 32px)",
            }}
          >
            <H1 className="mb-8">Towns we service</H1>
            <ul className=" mb-4">
              {mapData.map((item) => (
                <li
                  key={item.color}
                  className="flex justify-center sm:justify-start items-center gap-3 p-0 m-0"
                >
                  <div
                    className="rounded aspect-square h-[0.5em]"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <P>{item.name}</P>
                </li>
              ))}
            </ul>
            <P>and all surrounding areas</P>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[60px] lg:h-[120px] bg-gradient-to-t from-white to-white-0" />
        </div>

        <div className="relative w-full aspect-square sm:aspect-auto basis-7/12 bg-zinc-900 z-0 overflow-hidden">
          <Map />
        </div>
      </div>

      <div
        className="relative  pb-[60px] lg:pb-[120px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(67,87,103,1) 0%, rgba(37,51,66,1) 100%)",
        }}
      >
        <SliderBrands />
      </div>

      {/* Contact */}
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
            <div className="grid gap-4">
              <H1>Contact us</H1>
              <P>
                Have questions? Need a quote? <br />
                Give us a call, we&apos;re here to help.
              </P>
            </div>

            <div className="grid gap-4">
              <P className="font-bold">Call Mario and save</P>
              <div>
                <ButtonWhite icon="phone" className="!inline-block">
                  0418 540 353
                </ButtonWhite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="bg-[#142542] text-white">
        <Section className="flex flex-col  md:flex-row justify-between  gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center w-[180px] lg:w-[230px]">
              <Image
                src={imgLogo}
                alt="Washer Service"
                width={180}
                height="auto"
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div>
              <P className="font-bold">Opening hours</P>
              <ul className="list-disc pl-4">
                <li>
                  <P>Mon to Sat</P>
                </li>
                <li>
                  <P>7:30am - 7:00pm</P>
                </li>
              </ul>
            </div>
            <div>
              <P className="font-bold"> Payment method</P>
              <ul className="list-disc pl-4">
                <li>
                  <P>Cash</P>
                </li>
                <li>
                  <P>Electronic transfer</P>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <P className="font-bold">Call Mario and save</P>
              <div>
                <Button icon="phone" className="!inline-block">
                  0418 540 353
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <P className="font-bold">Pages</P>
            {[
              { id: "Home", href: "/" },
              { id: "About Us", href: "/about-us" },
              { id: "Brands", href: "/brands" },
              { id: "Towns", href: "/towns" },
              { id: "Contact", href: "/contact" },
            ].map((item) => {
              return (
                <P key={item.id}>
                  <Link href={item.href}>{item.id}</Link>
                </P>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <P className="font-bold">Brands</P>
            {brands.map((item) => {
              return (
                <P key={item.name}>
                  <Link href="/brands">{item.name}</Link>
                </P>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <P className="font-bold">Towns</P>
            {towns.map((item) => {
              return (
                <P key={item.name}>
                  <Link href="/towns">{item.name}</Link>
                </P>
              );
            })}
          </div>
        </Section>
      </div>
    </>
  );
}
