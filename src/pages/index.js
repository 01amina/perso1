import Head from "next/head";
import { HeroSection } from "@/sections/Hero";
import { Section2 } from "@/sections/Section2";
import { Section3 } from "@/sections/Section3";
import { Section4 } from "@/sections/Section4";
import { Section5 } from "@/sections/Section5";
import { Section7 } from "@/sections/Section7";
import { Section8 } from "@/sections/Section8";
import { Section6 } from "@/sections/Section6";
import { Section9 } from "@/sections/Section9";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Foot2 } from "@/sections/Foot2";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Footer />
        <Foot2 />
      </main>
    </>
  );
}
