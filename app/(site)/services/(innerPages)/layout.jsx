"use client";
import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import Faq from "@/app/components/home/Faq";
import { usePathname } from "next/navigation";

const normalizePath = (value) => {
  if (!value || value === "/") return "/";
  return value.replace(/\/+$/, "").replace(/\.html$/, "");
};

export default function Layout({ children }) {
  const pathName = normalizePath(usePathname());
  const headerContent = {
    "/services/robotic-process-automation": {
      heading: "Robotic Process Automation",
      desc: "Transform Manual Workflows Into Fast, Reliable Automated Systems",
      img: "/images/services/inner-services/header-1.png",
    },
    "/services/analytical-services": {
      heading: "Analytical Services",
      desc: "Analytics That Drive Clarity, Insight, and Action",
      img: "/images/services/inner-services/header-2.png",
    },
    "/services/ai-solutions": {
      heading: "AI Solutions",
      desc: "Turn Data Into Decisions That Drive Growth",
      img: "/images/services/inner-services/header-3.png",
    },
  };
  const currentHeader = headerContent[pathName] || headerContent["/services/robotic-process-automation"];
  const buttonLinks = [
    {
      text: "Robotic Process Automation",
      link: "/services/robotic-process-automation.html",
      match: "/services/robotic-process-automation",
    },
    {
      text: "Analytical Services",
      link: "/services/analytical-services.html",
      match: "/services/analytical-services",
    },
    {
      text: "AI Solutions",
      link: "/services/ai-solutions.html",
      match: "/services/ai-solutions",
    },
  ];
  return (
    <div className="font-satoshi">
      <CommonHeader
        title={currentHeader.heading}
        text={currentHeader.desc}
        img={currentHeader.img}
      />
      <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-[1536px] mx-auto py-12 md:py-16 lg:py-22 xl:py-32.5 px-4">
        <div className="lg:sticky top-12 h-fit lg:min-w-123 lg:max-w-123 w-full flex flex-col gap-8 p-4 md:p-6 lg:p-8 rounded-2xl bg-neutral-50 hover:bg-[#F5F9FE] border border-neutral-200 hover:border-primary transition-all ease-in-out duration-300">
          <div className="flex flex-col gap-8">
            <div className="flex items-center max-lg:justify-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">
                Services
              </h1>
            </div>
            <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl -tracking-[2%]">
              Explore Our <span className="text-primary">Services</span>
            </h5>
            <p className="text-sm md:text-base text-neutral-600">
              We provide an end-to-end range of automation, analytics, and AI
              solutions tailored to your business needs.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {buttonLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`group py-5 px-6 w-full flex justify-between items-center rounded-full border ${
                  item.match === pathName
                    ? "bg-primary border-primary text-white pointer-events-none"
                    : "bg-white  border-neutral-200 hover:border-primary text-neutral-600 hover:text-primary"
                }  transition-all ease-in-out duration-300`}
              >
                <p>{item.text}</p>
                <span className="shrink-0">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:-rotate-45 transition-all ease-in-out duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_495_1025)">
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 18L19 12"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 6L19 12"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_495_1025">
                        <rect width={24} height={24} fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
        {children}
      </div>
      <CTA />
      <Faq />
    </div>
  );
}
