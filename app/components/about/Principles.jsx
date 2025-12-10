import { account, collaboration, innovation, integrity } from "@/public/icons";
import React from "react";

const Principles = () => {
  const principles = [
    {
      text: "Integrity",
      subtext: "We act with honesty and transparency in every engagement.",
      svg: integrity,
    },
    {
      text: "Accountability",
      subtext: "We commit to outcomes and take responsibility for results.",
      svg: account,
    },
    {
      text: "Innovation",
      subtext:
        "We embrace new ideas and technologies to deliver better solutions.",
      svg: innovation,
    },
    {
      text: "Collaboration",
      subtext:
        "We work closely with clients to build solutions that truly fit their needs.",
      svg: collaboration,
    },
  ];
  return (
    <div className="bg-dark-blue py-12 md:py-18 lg:py-24 px-4 relative">
      <div className=" pointer-events-none grid1-background"></div>
      <div className="max-w-[1536px] relative z-10 mx-auto flex flex-col gap-8">
        <div className="flex max-lg:flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 lg:w-1/2 max-lg:items-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-white rounded-full"></div>
              <h1 className="text-sm/[150%] text-white font-satoshi">
                Our Values
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] max-lg:text-center tracking-[-2%] text-white">
              Principles That Guide <br />
              <span className="text-primary">Everything We Do</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:text-center">
            <p className="text-neutral-200 text-base md:text-lg/[150%] font-satoshi">
              Our leadership team brings years of experience in automation,
              analytics, AI, and enterprise technology. Their strategic
              direction and hands-on expertise ensure we deliver high-impact
              solutions tailored to each client’s goals.
            </p>
            <a
              href="/contact-us.html"
              className="bg-primary md:max-lg:self-center md:w-fit text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Accelerate Your Growth
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 ">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`lg:px-8 lg:py-16 max-lg:p-4 flex items-center gap-6  border-primary hover:bg-hover-blue transition-all duration-300 max-lg:border-b max-lg:last:border-none ${
                index === 0 && "lg:border-r lg:border-b border-primary"
              }
        ${index === 1 && "lg:border-b lg:border-primary"}
        ${index === 2 && "lg:border-r lg:border-primary"}`}
            >
              <div className="max-lg:*:size-14">{item.svg}</div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl/[130%]  text-white font-bold font-satoshi tracking-[-2%]">
                  {item.text}
                </h1>
                <p className="text-neutral-200 text-base/[150%] font-satoshi">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
