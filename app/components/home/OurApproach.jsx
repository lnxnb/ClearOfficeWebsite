import { fiveSvg, fourSvg, oneSvg, threeSvg, twoSvg } from "@/public/icons";
import Image from "next/image";
import React from "react";

const OurApproach = () => {
  const approach = [
    {
      title: "Discovery & Strategy",
      subTitle:
        "Map workflows, pain points, and ROI. Define the best opportunities for automation, analytics, and AI.",
      img: "/images/home/approach-1.webp",
      icon: oneSvg,
    },
    {
      title: "Solution Design & Prototyping",
      subTitle:
        "Design the architecture and validate quickly with a prototype—so you see value before full buildout.",
      img: "/images/home/approach-2.webp",
      icon: twoSvg,
    },
    {
      title: "Agile Development & Implementation",
      subTitle:
        "Iterative delivery with clear milestones, stakeholder feedback, and real operational testing.",
      img: "/images/home/approach-4.webp",
      icon: threeSvg,
    },
    {
      title: "Rigorous Testing & Quality Assurance",
      subTitle:
        "Performance, accuracy, and reliability testing—plus data validation and controls before go-live.",
      img: "/images/home/approach-3.webp",
      icon: fourSvg,
    },
    {
      title: "Deployment, Training & Support",
      subTitle:
        "Deploy into your environment, train your team, and provide ongoing optimization and support.",
      img: "/images/home/approach-5.webp",
      icon: fiveSvg,
    },
  ];
  return (
    <div className="bg-white pt-8.75 pb-12 md:pb-16 lg:pb-20 xl:pb-32.5 px-4">
      <div className="max-w-[1536px] mx-auto grid lg:grid-cols-2 lg:gap-8">
        <div className=" sticky top-0 self-start   z-10">
          <div className="flex flex-col gap-8 bg-white pt-8 lg:pt-24 max-lg:pb-6">
            <div className="flex flex-col gap-2 max-lg:justify-center max-lg:items-center">
              <div className="flex items-center max-lg:justify-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
                <div className="size-2 bg-primary rounded-full"></div>
                <h1 className="text-sm/[150%] text-primary font-satoshi">
                  Our Process
                </h1>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] font-satoshi max-lg:text-center font-bold text-neutral-800">
                A proven approach <br />{" "}
                <span className="text-primary">from strategy to production.</span>
              </h1>
              <p className="font-satoshi text-base/[150%] text-neutral-600 max-lg:text-center">
                    We don’t ship experiments. We deliver secure, 
                    scalable solutions your team can adopt and support. 
              </p>
            </div>
            <a
              href="/contact-us.html"
              className="bg-primary md:max-lg:self-center max-md:text-center md:w-fit text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Schedule a call
            </a>
          </div>
          <div
            className="h-18 w-full sticky self-start
     bg-gradient-to-b from-white/100  to-white/0 "
          />
        </div>
        <div>
          <div
            className="max-lg:hidden h-24 w-full sticky -top-3 self-start
     bg-gradient-to-b from-white/100  to-white/0 "
          ></div>
          {approach.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center lg:gap-4 gap-1 pt-1 lg:pt-5">
                <div>{item.icon}</div>
                <div className="w-1 h-full bg-primary "></div>
              </div>
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-2xl/[130%] tracking-[-2%] font-satoshi font-bold text-neutral-800">
                    {item.title}
                  </h1>
                  <p className="font-satoshi text-base/[150%] text-neutral-600">
                    {item.subTitle}
                  </p>
                </div>
                <div className=" rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`approach-${index}`}
                    width={0}
                    height={0}
                    className="h-full w-full object-cover "
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
