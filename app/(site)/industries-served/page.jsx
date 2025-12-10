import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import Faq from "@/app/components/home/Faq";
import Solutions from "@/app/components/industry/Solutions";
import React, { Suspense } from "react";
export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Industries",
};
const page = () => {
  return (
    <>
      <CommonHeader
        title={"Industries Served"}
        text={"Solutions Built for Every Industry"}
        img={"/images/industry/industryBanner.webp"}
      />
      <Suspense fallback={<></>}>
        <Solutions />
      </Suspense>
      <CTA />
      <Faq />
    </>
  );
};

export default page;
