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
            <FooterTitle>Opening hours</FooterTitle>
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
            <FooterTitle>Payment method</FooterTitle>
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
            <FooterTitle>Call Mario and save</FooterTitle>
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

        <FooterLinkGroup title="Pages">
          {pages.map((item, i) => (
            <FooterLink key={`${item.id}-${i}`} {...item} />
          ))}
        </FooterLinkGroup>

        <FooterLinkGroup title="Brands">
          {brands.map((item, i) => (
            <FooterLink
              key={`${item.id}-${i}`}
              name={item.name}
              href={`/brands/${item.id}`}
            />
          ))}
        </FooterLinkGroup>

        <FooterLinkGroup title="Towns">
          {towns.map((item, i) => (
            <FooterLink
              key={`${item.id}-${i}`}
              name={item.name}
              href={`/towns/${item.id}`}
            />
          ))}
        </FooterLinkGroup>
      </Section>
    </footer>
  );
}

const FooterTitle = (props) => <P className="font-bold">{props.children}</P>;

const FooterLinkGroup = (props) => (
  <div className="flex flex-col items-start gap-2 lg:pt-3">
    <FooterTitle>{props.title}</FooterTitle>
    {props.children}
  </div>
);

const FooterLink = (props) => (
  <P className="group transition duration-100">
    <Link href={`${props.href}`}>
      {props.name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-white"></span>
    </Link>
  </P>
);
