import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import imgLogo from "@/img/logo.svg";
import { brands, contact, pages, towns } from "@/data/";

export default function Footer() {
  return (
    <footer className="bg-[#142542] text-white">
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
              <Button
                icon="phone"
                className="!inline-block"
                href={`tel:${contact.phone}`}
              >
                {contact.phoneNice}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:pt-3">
          <P className="font-bold">Pages</P>
          {pages.map((item) => {
            return (
              <P key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </P>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 lg:pt-3">
          <P className="font-bold">Brands</P>
          {brands.map((item) => {
            return (
              <P key={item.name}>
                <Link href="/brands">{item.name}</Link>
              </P>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 lg:pt-3">
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
    </footer>
  );
}
