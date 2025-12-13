"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const HomeInnovation = () => {
  const slides = [
    {
      id: 1,
      text: "3+",
      subtext: "Years Delivering Automation & Analytics Solutions",
      image: "/images/home/approach-1.webp",
    },

    {
      id: 2,
      text: "30+",
      subtext: "Production deployments",
      image: "/images/home/approach-2.webp",
    },
    {
      id: 3,
      text: "99%+",
      subtext: "Accuracy through RPA (use-case dependent) ",
      image: "/images/home/approach-3.webp",
    },
    {
      id: 4,
      text: "5+",
      subtext: "Industries served",
      image: "/images/home/approach-4.webp",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.6;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (progress >= 100) {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }
  }, [progress]);

  const slide = slides[current];

  return (
    <div className="bg-dark-blue py-12 md:py-16 lg:py-20 xl:py-24 relative z-30 p-4">
      {/* <div
        className="absolute inset-x-0 inset-y-5 
    bg-home-grid 
    bg-cover bg-no-repeat -z-3"
      ></div>

      <div
        className="absolute inset-x-0 inset-y-5 
      bg-[radial-gradient(40.38%_50%_at_50%_50%,_#FFFFFF_0%,_rgba(255,255,255,0.2)_100%)] mix-blend-overlay "
      ></div> */}
      <div className=" pointer-events-none grid1-background"></div>
      <div className="max-w-[1536px] mx-auto relative z-10 flex flex-col gap-8">
        <div className="flex max-lg:flex-col gap-2 md:gap-6 max-lg:items-center max-lg:justify-center">
          <div className="flex flex-col gap-2 lg:w-2/3 max-lg:items-center max-lg:justify-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-white rounded-[48px] w-fit">
              <div className="size-2 bg-white rounded-full"></div>
              <h1 className="text-sm/[150%] text-white font-satoshi">
                About Us
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl md:text-5xl max-lg:text-center lg:text-[56px]/[130%] tracking-[-2%] text-white">
              Purpose-built AI for{" "}
              <span className="text-primary">real operations</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:w-2/6 max-lg:text-center">
            <p className="text-neutral-200 text-base md:text-lg/[150%] font-satoshi">
                  We partner with leadership teams to modernize workflows, improve visibility, 
                  and deliver measurable outcomes—cost reduction, cycle-time improvements, and better service quality. 
            </p>
            <a
              href="/contact-us.html"
              className="bg-white md:max-lg:self-center md:w-fit text-base/[130%] tracking-[-2%] font-bold  font-satoshi text-primary px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Explore what's possible
            </a>
          </div>
        </div>
        <div
          className=" rounded-2xl  relative border border-white/20 overflow-hidden"
          // style={{
          //   background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))`,
          // }}
        >
          <div className="relative lg:aspect-[3/1.3]">
            {slides.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute inset-0"
                style={{
                  zIndex: i === current ? 2 : 1,
                }}
                animate={{
                  opacity: i === current ? 1 : 0,
                }}
                transition={{
                  duration: 1.0,
                  ease: "easeInOut",
                }}
              >
                <Image
                  width={0}
                  height={0}
                  unoptimized={true}
                  alt="slider_image"
                  src={s.image}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div
                  className="
                    absolute inset-0 
                    bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]
                  "
                />
              </motion.div>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 z-40 grid-cols-2 max-lg:divide-y divide-white/20 border-t border-white/20 lg:absolute lg:inset-x-0 lg:bottom-0">
            {slides.map((s, i) => (
              <div key={s.id} className="h-full">
                <div
                  className={`relative h-1 w-full   ${
                    i == current && "bg-light-blue"
                  } `}
                >
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: i === current ? `${progress}%` : "0%" }}
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                    className={`h-1 bg-primary ${i !== current && "invisible"}`}
                  />
                </div>

                <div
                  className={`flex flex-col gap-3 backdrop-blur-lg border-white/20 p-4 h-full ${
                    i === current ? "bg-primary/20 " : "bg-white/5"
                  }`}
                >
                  <h1 className="font-satoshi font-bold text-[32px]/[140%] text-white">
                    {s.text}
                  </h1>
                  <p className="font-satoshi  text-base/[150%] text-white">
                    {s.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInnovation;
