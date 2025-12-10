import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import Faq from "@/app/components/home/Faq";
import Services from "@/app/components/services/Services";
import React from "react";

export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Service",
};
const page = () => {
  return (
    <>
      <CommonHeader
        title={"Services"}
        text={"Smarter Solutions for Every Challenge"}
        img={"/images/services/serviceBanner.webp"}
      />
      <Services />
      <CTA />
      <Faq />
    </>
  );
};

export default page;
