import Leaders from "@/app/components/about/Leaders";
import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import OurApproach from "@/app/components/home/OurApproach";

export default function Page() {
  return (
    <>
      <CommonHeader
        title={"Our Team"}
        text={"The Minds Behind the Innovation"}
      />
      <Leaders />
      <CTA />
    </>
  );
}
