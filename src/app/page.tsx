import Hero from "@/components/Hero";
import Wrapper from "./Wrapper";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Experties from "@/components/Experties";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Action from "@/components/Action";

export default function Page() {
  return (
    <main>
      <Hero id="home" />
      <About id="about" />
      <MissionVision />
      <CoreValues />
      <Experties id="services" />
      <CaseStudy id="case-studies" />
      <Contact id="contact" />
      <Action />
    </main>
  );
}
