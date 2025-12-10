"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AboutServices = () => {
  const services = [
    {
      text: "10",
      suffix: "+",
      subtext: "Years of Industry Experience",
    },
    {
      text: "30",
      suffix: "+",
      subtext: "Successful Automation & AI Projects",
    },
    {
      text: "99",
      suffix: "%",
      subtext: "Process Accuracy Through RPA",
    },
    {
      text: "5",
      suffix: "+",
      subtext: "Serving Major Industries",
    },
  ];
  function Counter({ target, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 1500; // 1.5s
        const increment = target / (duration / 16); // ~60fps

        const step = () => {
          start += increment;
          if (start < target) {
            setCount(Math.floor(start));
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(step);
      }
    }, [isInView, target]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }
  return (
    <div className="max-w-[1536px] mx-auto pb-12 md:pb-16 lg:pb-20 xl:pb-32.5 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex max-lg:flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 lg:w-7/12 max-lg:justify-center max-lg:items-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">
                Who We Are
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] text-neutral-800 max-lg:text-center">
              Driving Innovation Through <br className="max-lg:hidden" />
              <span className="text-primary">
                Automation, Analytics, and AI
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:w-5/12">
            <p className="text-neutral-600 text-base md:text-lg/[150%] font-satoshi max-lg:text-center">
              We create automation, analytics, and AI solutions that streamline
              complex workflows and help organizations operate smarter. With a
              focus on reliability, efficiency, and measurable results, we
              design systems that remove manual effort, reduce errors, and
              support long-term growth.
            </p>
            <a
              href="/contact-us.html"
              className="bg-primary max-md:text-center inline-block md:max-lg:self-center md:w-fit text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Accelerate Your Growth
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-50 group hover:bg-card-hover hover:border-primary transition-all duration-300 border border-neutral-200 rounded-3xl flex flex-col gap-3 md:gap-9 lg:gap-17.75"
            >
              <h1 className="text-5xl lg:text-6xl/[130%] group-hover:text-primary text-neutral-800 font-bold font-satoshi tracking-[-2%]">
                <Counter target={parseInt(item.text)} suffix={item.suffix} />
              </h1>
              <p className="text-neutral-600 text-base md:text-lg/[150%] group-hover:text-primary font-satoshi">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
