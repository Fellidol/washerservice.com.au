import Image from "next/image";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar/Navbar";
import Text, { H1, P } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import imgHero from "@/img/hero-desktop.jpg";
import imgHeroMobile from "@/img/hero-mobile.jpg";
import imgAbout from "@/img/about.png";
import imgAbout2 from "@/img/about2.jpg";
import Slider from "@/components/Slider/Slider";
import Map, { mapData } from "@/components/Map/Map";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="relative bg-black z-0 overflow-hidden">
        <Image
          className="block md:hidden object-cover object-bottom pointer-events-none"
          src={imgHeroMobile}
          alt="All Districts Washer Machine Service"
          fill={true}
          priority
        />
        <Image
          className="hidden md:block object-cover pointer-events-none"
          src={imgHero}
          alt="All Districts Washer Machine Service"
          fill={true}
          priority
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

      <div className="relative bg-[#131E42] pb-[60px] lg:pb-[120px]">
        <Image
          className="object-cover object-top pointer-events-none z-0"
          src={imgAbout2}
          alt="Marios Washer service"
          fill={true}
          priority
        />
        <Slider />
      </div>

      <div className="relative h-auto sm:flex">
        <div className="w-full sm:w-auto sm:h-full aspect-square sm:aspect-auto basis-5/12 overflow-hidden">
          <div
            className="w-full h-full p-8 lg:pt-[120px] overflow-scroll text-center sm:text-left"
            style={{
              paddingLeft: "calc(50vw - calc(min(100vw, 1024px)/2) + 32px)",
            }}
          >
            <H1 className="mb-8">Towns we service</H1>
            <ul className=" mb-8">
              {[
                "Alexandra",
                "Bonnie Doon",
                "Benalla",
                "Eildon",
                "Euroa",
                "Killingworth",
                "Mansfield",
                "Merton",
                "Molesworth",
                "Seymour",
                "Shepparton",
                "Violet Town",
                "Wangaratta",
                "Yark",
              ].map((item) => (
                <li key={item} className="p-0 m-0">
                  <P>{item}</P>
                </li>
              ))}
            </ul>
            <P className="">and all surrounding suburbs</P>
          </div>
        </div>

        <div className="relative w-full aspect-square sm:aspect-auto basis-7/12 bg-zinc-900 z-0 overflow-hidden">
          <Map />
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
