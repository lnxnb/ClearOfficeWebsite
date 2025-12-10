import {
  ai,
  analytics,
  automation,
  business,
  groupAI,
  groupAnalytics,
  groupAutomation,
  groupBusiness,
  groupRobot,
  robot,
} from "@/public/icons";
import React from "react";

const Services = () => {
  const services = [
    {
      icon: automation,
      text: "Automation",
      bgIcon: groupAutomation,
      hoverText:
        "We design and implement bespoke automation solutions that eliminate repetitive tasks, reduce operational costs, and free up your team to focus on strategic initiatives.",
      image: "/images/home/service-1.webp",
    },
    {
      icon: analytics,
      text: "Analytics",
      bgIcon: groupAnalytics,
      hoverText:
        "Unlock the power of your data. Our advanced analytics services provide deep insights into your business performance, customer behavior, and market trends, enabling you to make informed, strategic decisions.",
      image: "/images/home/service-2.webp",
    },
    {
      icon: ai,
      text: "Artificial Intelligence",
      bgIcon: groupAI,
      hoverText:
        "Leverage our expertise in machine learning and AI to build predictive models, personalize customer experiences, and gain a significant competitive advantage in your industry.",
      image: "/images/home/service-3.webp",
    },
    {
      icon: business,
      text: "Business Intelligence",
      bgIcon: groupBusiness,
      hoverText:
        "Our business intelligence solutions transform complex data sets into intuitive dashboards and reports, providing a clear and comprehensive view of your key performance indicators.",
      image: "/images/home/service-4.webp",
    },
    {
      icon: robot,
      text: "Robotic Process Automation",
      bgIcon: groupRobot,
      hoverText:
        "Our RPA solutions use smart software bots to automate repetitive, rule-based tasks with speed and accuracy. From data entry to reporting, your business runs 24/7 with fewer errors, lower costs, and seamless integration into existing systems.",
      image: "/images/home/service-5.webp",
    },
  ];
  return (
    <div className="bg-white py-32.5">
      <div className="max-w-[1536px] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-neutral-800 font-satoshi font-bold text-[56px]/[130%] tracking-[-2%]">
                Intelligent <br />
                <span className="text-primary">Business Solutions</span>
              </h1>
              <p className="text-neutral-600 text-base/[150%] font-satoshi">
                Unlock smarter growth by using data, automating key processes,
                and integrating AI-driven solutions across your business.
              </p>
            </div>
            <button
              className="bg-white  text-primary w-fit text-base/[130%] tracking-[-2%] ring ring-primary font-bold font-satoshi px-6 py-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white
    hover:shadow-[0_8px_25px_rgba(0,113,227,0.25)]
    hover:scale-[1.03]"
            >
              Transform your business
            </button>
          </div>
          {services.map((item, index) => (
            <div
              key={index}
              className="flex relative bg-neutral-50 z-20 p-8 overflow-hidden h-80 rounded-2xl group  border border-neutral-200 "
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-neutral-800 font-satoshi font-bold text-2xl/[130%] tracking-[-2%]">
                  {item.text}
                </h1>
              </div>
              <div className="absolute rotate-4 right-0 bottom-0 -z-1">
                {item.bgIcon}
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 113, 227, 0.1)),
    url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`absolute inset-0 h-full w-full z-30  text-white p-8 rounded-2xl translate-y-full group-hover:-translate-y-0 transition-all duration-500 ease-out`}
              >
                <div className="flex flex-col h-full justify-between">
                  {item.icon}
                  <div className="flex flex-col gap-2">
                    <h1 className="text-white font-satoshi font-bold text-2xl/[130%] tracking-[-2%]">
                      {item.text}
                    </h1>
                    <p className="text-white text-base/[150%] font-satoshi">
                      {item.hoverText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
