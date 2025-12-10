import CommonHeader from "@/app/components/common/CommonHeader";
import PrivacyContent from "@/app/components/privacy/PrivacyContent";
import React from "react";

export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Privacy",
};
const page = () => {
  return (
    <>
      <CommonHeader
        title={"Privacy Policy"}
        text={"Your privacy, our priority."}
      />
      <PrivacyContent />
    </>
  );
};

export default page;
