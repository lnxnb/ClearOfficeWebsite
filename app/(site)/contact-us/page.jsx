import CommonHeader from "@/app/components/common/CommonHeader";
import Details from "@/app/components/contact-us/Details";
import FormDetails from "@/app/components/contact-us/FormDetails";
import React from "react";

export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Contact",
};
const page = () => {
  return (
    <>
      <CommonHeader
        title={"Contact Us"}
        text={"We're Here When You're Ready"}
      />
      <Details />
      <FormDetails />
    </>
  );
};

export default page;
