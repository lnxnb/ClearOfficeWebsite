"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const CommonHeader = ({ title, text, img }) => {
  const path = usePathname();
  return (
    <div className="relative overflow-hidden xl:min-h-[590px] px-4 -z-10">
      <div className=" grid-background xl:h-[590px]"></div>
      <div className="absolute inset-0 xl:h-[590px] bg-[linear-gradient(180deg,rgba(0,113,227,0.1)_0%,rgba(0,113,227,0)_100%)] "></div>

      <div className="max-w-[1536px] mx-auto flex flex-col gap-12 pt-24 pb-12 md:pb-16 relative grid-bg">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-primary text-center font-satoshi font-bold text-5xl md:text-6xl lg:text-8xl/[120%] tracking-[-2%]">
            {title}
          </h1>
          <p className="text-neutral-600 text-center font-satoshi text-lg md:text-xl lg:text-2xl/[120%] tracking-[-2%]">
            {text}
          </p>
        </div>
        {!(
          path.includes("/contact-us") ||
          path.includes("/our-team") ||
          path.includes("/privacy") ||
          path.includes("/our-careers")
        ) && (
          <div className="xl:w-[1274px] xl:h-[500px] mx-auto rounded-4xl overflow-hidden">
            <Image
              src={img}
              alt="approach-1"
              width={0}
              height={0}
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
