import AboutServices from "@/app/components/about/AboutServices";
import OurCommitment from "@/app/components/about/OurCommitment";
import OurVision from "@/app/components/about/OurVision";
import Principles from "@/app/components/about/Principles";
import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import React from "react";
export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Company",
};
const page = () => {
  return (
    <>
      <CommonHeader
        img={"/images/about/aboutBanner.webp"}
        title={"Company"}
        text={"We build solutions that simplify operations."}
      />
      <AboutServices />
      <OurVision />
      <CTA />
      <Principles />
      <OurCommitment />
    </>
  );
};

export default page;
