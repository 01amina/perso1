import fs from "fs";
import path from "path";
import matter from "gray-matter";
import showdown from "showdown";
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
import { Section10 } from "@/sections/Section10";

const Home = (props) => {
  const data = props?.data;

  return (
    <>
      <main>
        <Navbar />
        <HeroSection data={data?.hero} />
        <Section2 data={data?.section_2} />
        <Section3 data={data?.section_3} />
        <Section4 data={data?.section_4} />
        <Section5 data={data?.section_5} />
        <Section6 data={data?.section_6} />
        <Section7 data={data?.section_7} />
        <Section8 data={data?.reviews} />
        <Section9 data={data?.section_9} />
        <Section10 data={data?.section_10} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const file = fs.readFileSync(
    path.resolve("./_sections/electrician.md"),
    "utf8"
  );
  const matterData = matter(file);
  const data = matterData.data;

  const converter = new showdown.Converter();
  data.section_7.text = converter.makeHtml(data.section_7.text);
  data.section_9.description = converter.makeHtml(data.section_9.description);
  data.section_10.our_services.services_list = converter.makeHtml(
    data.section_10.our_services.services_list
  );

  return {
    props: {
      data: matterData.data,
    },
  };
};
