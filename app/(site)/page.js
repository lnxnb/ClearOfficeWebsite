import CTA from "@/app/components/home/CTA";
import Faq from "@/app/components/home/Faq";
import HeroSection from "@/app/components/home/HeroSection";
import HomeInnovation from "@/app/components/home/HomeInnovation";
import HomeServices from "@/app/components/home/HomeServices";
import OurApproach from "@/app/components/home/OurApproach";
import Services from "@/app/components/home/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Services /> */}
      <HomeServices />
      <HomeInnovation />
      <OurApproach />
      <CTA />
      <Faq />
      <div style={{ display: "none" }}>Edited version marker - cURL check</div>
    </>
  );
}
