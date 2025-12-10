"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

const Solutions = () => {
  const solutions = [
    {
      slug: "law-firms",
      title: "Law Firms",
      hoverText: "Hover effect",
      img: "/images/industry/solution-1.webp",
      heading: "Smarter Workflows for Modern Legal Teams",
      description:
        "Automate document-heavy processes, reduce administrative overhead, and maintain accuracy across case and matter management. Our solutions help legal teams stay efficient, compliant, and focused on client outcomes.",
    },
    {
      slug: "intellectual-property",
      title: "Intellectual Property Firms",
      img: "/images/industry/solution-2.webp",
      heading: "Automating the IP Lifecycle—End to End",
      description:
        "From USPTO processing to routine document generation, we help IP teams eliminate manual work and accelerate filings. Spend more time protecting innovation and less time managing repetitive tasks.",
    },
    {
      slug: "wealth-management",
      title: "Wealth Management",
      img: "/images/industry/solution-3.webp",
      heading: "Insight-Driven Tools for Confident Advisory",
      description:
        "Give advisors clear, real-time visibility into portfolios and client data. Our analytics and AI-driven tools support smarter decisions, better forecasting, and stronger client relationships.",
    },
    {
      slug: "smb",
      title: "Small & Medium-Sized Businesses",
      img: "/images/industry/solution-4.webp",
      heading: "Enterprise-Level Efficiency for Growing Teams",
      description:
        "Scale without increasing overhead. We help SMBs automate routine tasks, simplify operations, and gain access to technology typically reserved for larger enterprises.",
    },
    {
      slug: "government",
      title: "Government",
      img: "/images/industry/solution-5.webp",
      heading: "Secure & Compliant Solutions for Public Agencies",
      description:
        "Improve service delivery, streamline regulatory processes, and manage data with confidence. We provide secure, reliable, and compliant automation and AI solutions tailored to the needs of government organizations.",
    },
  ];

  const searchParams = useSearchParams();
  const highlight = searchParams.get("highlight");
  const [runAnimation, setRunAnimation] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (highlight) {
      const el = document.getElementById(highlight);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setRunAnimation(true);
        setTimeout(() => {
          setRunAnimation(false);
          router.replace("/industries-served", { scroll: false });
        }, 2000);
      }
    }
  }, [highlight]);

  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-8 py-12 md:py-18 lg:py-24 xl:py-32.5 px-4">
      <div className="flex flex-col gap-8 ">
        <div className="lg:w-250 mx-auto ">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">
                Sectors We Serve
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] text-center tracking-[-2%] text-neutral-800">
              Solutions Built for{" "}
              <span className="text-primary">Every Industry</span>
            </h1>

            <p className="text-neutral-600 text-base md:text-lg/[150%] text-center font-satoshi">
              We combine automation, analytics, and AI to help different
              industries solve real operational challenges and accelerate their
              growth..
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item, index) => {
            const isHighlighted = highlight === item.slug;

            return (
              <motion.div
                id={item.slug}
                key={index}
                initial={false}
                animate={
                  isHighlighted && runAnimation
                    ? {
                        scale: [0.98, 1.03, 1],
                        boxShadow: [
                          "0 0 0px rgba(0,0,0,0)",
                          "0 0 40px rgba(0,120,255,0.25)",
                          "0 0 20px rgba(0,120,255,0.25)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative p-6 group lg:h-full transition-all duration-300 bg-neutral-50 border rounded-3xl last:lg:col-span-2 ${
                  isHighlighted
                    ? "border-primary shadow-lg before:absolute before:inset-0 before:bg-primary/10 before:blur-3xl before:rounded-3xl"
                    : "border-neutral-200 hover:border-primary"
                }`}
              >
                <div className="flex max-md:flex-col items-center gap-8 lg:h-full">
                  <div className="lg:w-[50%] flex flex-col lg:justify-between lg:h-full">
                    <h1
                      className={`text-[30px]/[130%] font-bold font-satoshi tracking-[-2%] max-lg:pb-8 ${
                        isHighlighted
                          ? "text-primary animate-pulse"
                          : "text-neutral-800 group-hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </h1>

                    <div className="flex flex-col gap-2">
                      <h1
                        className={`text-base/[130%] font-bold font-satoshi tracking-[-2%] ${
                          isHighlighted
                            ? "text-primary"
                            : "text-neutral-800 group-hover:text-primary"
                        }`}
                      >
                        {item.heading}
                      </h1>
                      <p className="text-neutral-600 text-base/[150%] font-satoshi">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-[50%] w-full h-77.75 rounded-4xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt="solutions"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
