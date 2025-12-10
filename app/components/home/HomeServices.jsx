"use client";
import { aboutService1, aboutService2, aboutService3 } from "@/public/icons";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay,
    },
  }),
};

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 3500);
  };

  const aboutServices = [
    {
      text: "Robotic Process Automation",
      svg: aboutService1,
      hoverSubTxt:
        "We design and implement bespoke automation solutions that eliminate repetitive tasks, reduce operational costs, and free up your team to focus on strategic initiatives.",
      hoverImage: "/images/home/service-9.webp",
      link: "/services/robotic-process-automation.html",
    },
    {
      text: "Analytical Services",
      svg: aboutService2,
      hoverSubTxt:
        "Unlock the power of your data. Our advanced analytics services provide deep insights into your business performance, customer behavior, and market trends, enabling you to make informed, strategic decisions.",
      hoverImage: "/images/home/service-8.webp",
      link: "/services/analytical-services.html",
    },
    {
      text: "AI Solutions",
      svg: aboutService3,
      hoverSubTxt:
        "Leverage our expertise in machine learning and AI to build predictive models, personalize customer experiences, and gain a significant competitive advantage in your industry.",
      hoverImage: "/images/home/service-7.webp",
      link: "/services/ai-solutions.html",
    },
  ];

  return (
    <motion.div
      className="bg-white py-12 md:py-18 lg:py-26 xl:py-32.5 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-8">
        {/* TOP SECTION — pure fade */}
        <motion.div
          className="flex max-lg:flex-col md:gap-6 gap-2 max-lg:justify-center max-lg:items-center"
          variants={fadeVariant}
          custom={0.1}
        >
          <div className="flex flex-col gap-2 lg:w-2/3 max-lg:justify-center max-lg:items-center">
            <div className="flex items-center gap-3 px-4 py-2 border border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm md:text-base/[150%] text-primary font-satoshi">
                Our Services
              </h1>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] text-neutral-800 max-lg:text-center">
              Solutions Designed to <br />
              <span className="text-primary">Streamline Your Operations</span>
            </h1>
          </div>

          <motion.div
            className="flex flex-col gap-6 lg:w-2/6"
            variants={fadeVariant}
            custom={0.25}
          >
            <p className="text-neutral-600 text-base md:text-lg/[150%] font-satoshi max-lg:text-center">
              Our solutions help organizations reduce manual workload, eliminate
              inefficiencies, and make data-driven decisions with confidence.
            </p>

            <a
              href="/contact-us.html"
              className="md:max-lg:self-center bg-primary md:w-fit max-md:text-center text-base/[130%] cursor-pointer tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Transform your business
            </a>
          </motion.div>
        </motion.div>

        {/* GRID — premium sequential fade only */}
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
          {aboutServices.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className=" group h-100 relative bg-primary rounded-2xl p-8 flex flex-col justify-between overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="size-[233px] absolute -top-42 -left-40  rotate-110 bg-white blur-[97px] "></div>
              <div className="size-[233px] absolute -bottom-37 -right-36  rotate-118  bg-white blur-[97px] "></div>
              <h1 className="text-xl md:text-2xl/[130%] font-bold text-white font-satoshi tracking-[-2%]">
                {item.text}
              </h1>
              <div className=" self-end">{item.svg}</div>
              <div
                style={{
                  backgroundImage: `url(${item.hoverImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
                className={`absolute inset-0 h-full w-full z-30 text-white p-8 rounded-2xl  transition-all duration-500 ease-out flex flex-col gap-2 justify-between pointer-events-none ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className="corner-orbit-left z-20"></div>
                <div className="corner-orbit-right z-20"></div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-white font-satoshi font-bold text-xl mdLtext-2xl/[130%] tracking-[-2%]">
                    {item.text}
                  </h1>
                  <p className="text-white text-lg/[150%] font-satoshi">
                    {item.hoverSubTxt}
                  </p>
                </div>
                <div className=" self-end">{item.svg}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeServices;
