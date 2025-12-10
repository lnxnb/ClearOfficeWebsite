"use client";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const services = [
    {
      text: "Robotic Process Automation",
      link: "/services/robotic-process-automation.html",
      subText:
        "Streamline your workflows and reduce manual effort with tailored automation projects.",
      img: "/images/services/service-1.webp",
      subMenu: {
        title: "Automation Projects",
        menus: [
          {
            img: "/images/services/project-1.png",
            text: "USPTO Processor",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
          {
            img: "/images/services/project-2.png",
            text: "Routine Document Generator",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
        ],
      },
    },
    {
      text: "Analytical Services",
      link: "/services/analytical-services.html",
      subText: "Turn your data into actionable insights and smarter decisions.",
      img: "/images/services/service-2.webp",
      subMenu: {
        title: "Automation Projects",
        menus: [
          {
            img: "/images/services/service-3.webp",
            text: "Business Intelligence Dashboard",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
          {
            img: "/images/services/service-4.webp",
            text: "Business Intelligence Dashboard",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
        ],
      },
    },
    {
      text: "AI Solutions",
      link: "/services/ai-solutions.html",
      subText:
        "Harness the power of artificial intelligence to solve complex problems and enhance efficiency.",
      img: "/images/services/service-5.webp",
      subMenu: {
        title: "Automation Projects",
        menus: [
          {
            img: "/images/services/project-3.png",
            text: "Federal Energy Regulatory Commission",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
          {
            img: "/images/services/project-4.png",
            text: "RAG Powered Chatbot",
            subText:
              "Visualize your KPIs and monitor performance in real time.",
          },
        ],
      },
    },
  ];
  const [showProjects, setShowProjects] = useState(null);
  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-8 py-12 md:py-16 lg:py-22 xl:py-32.5 px-4">
      <div className="flex flex-col gap-8 ">
        <div className="lg:w-250 mx-auto ">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">
                Our Services
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] text-center tracking-[-2%] text-neutral-800">
              Smarter Solutions{" "}
              <span className="text-primary">for Every Challenge</span>
            </h1>

            <p className="text-neutral-600 text-lg/[150%] text-center font-satoshi">
              We help organizations work smarter, faster, and more efficiently.
              From automating repetitive tasks to delivering actionable insights
              and AI-driven solutions, our services are designed to solve
              real-world challenges and drive measurable impact.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {services.map((item, index) => (
            <a
              href={item.link}
              key={index + 1}
              className={`md:p-8 p-6 group hover:bg-card-hover transition-all duration-300 hover:border-primary bg-neutral-50 border border-neutral-200 rounded-3xl ${
                item.subMenu && "flex flex-col"
              }`}
            >
              <div className=" flex max-lg:flex-col items-center gap-8">
                <div className="lg:w-[54%] flex max-lg:flex-col gap-8 items-center ">
                  <h1 className="text-[30px] md:text-[36px]/[130%] group-hover:text-primary text-neutral-800 font-bold font-satoshi tracking-[-2%]">
                    0{index + 1}.
                  </h1>
                  <div className="flex flex-col gap-2 lg:w-[486px] ">
                    <h1 className="text-2xl max-lg:text-center md:text-[36px]/[130%] group-hover:text-primary text-neutral-800 font-bold font-satoshi tracking-[-2%]">
                      {item.text}
                    </h1>
                    <p className="text-neutral-600 max-lg:text-center text-base md:text-lg/[150%] group-hover:text-primary font-satoshi">
                      {item.subText}
                    </p>
                  </div>
                </div>
                <div className="lg:w-[46%] h-68.5 rounded-4xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt="approach-1"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover"
                    unoptimized={true}
                  />
                </div>
                <div
                  onClick={() =>
                    setShowProjects(showProjects === index ? null : index)
                  }
                  className="flex items-center gap-2 xl:hidden w-fit cursor-pointer"
                >
                  <p className="font-bold text-base underline underline-offset-2 text-primary">
                    View Projects
                  </p>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9999 13.3341C9.80519 13.3345 9.6165 13.2667 9.46657 13.1425L4.46657 8.9758C4.29639 8.83435 4.18937 8.63109 4.16905 8.41074C4.14874 8.19038 4.21679 7.97098 4.35824 7.8008C4.49969 7.63062 4.70295 7.5236 4.9233 7.50328C5.14366 7.48297 5.36306 7.55102 5.53324 7.69247L9.9999 11.4258L14.4666 7.8258C14.5518 7.75658 14.6499 7.70488 14.7552 7.67369C14.8605 7.6425 14.9709 7.63242 15.0801 7.64404C15.1892 7.65565 15.2951 7.68873 15.3914 7.74138C15.4878 7.79402 15.5728 7.86519 15.6416 7.9508C15.7179 8.03648 15.7757 8.13701 15.8113 8.24607C15.847 8.35513 15.8598 8.47038 15.8488 8.5846C15.8379 8.69882 15.8034 8.80954 15.7477 8.90984C15.692 9.01014 15.6161 9.09785 15.5249 9.16747L10.5249 13.1925C10.3707 13.2971 10.1858 13.3469 9.9999 13.3341Z"
                      fill="#0071E3"
                    />
                  </svg>
                </div>
              </div>
              <div className="max-xl:hidden">
                {item.subMenu && (
                  <div
                    className={`  overflow-hidden transition-all duration-300 ease-out   ${
                      item.subMenu
                        ? "max-h-0 group-hover:max-h-[3000px] group-hover:mt-8"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <h1 className="text-3xl/[130%] max-lg:text-center text-neutral-800 font-bold font-satoshi tracking-[-2%]">
                        {item.subMenu.title}
                      </h1>
                      <div className="grid lg:grid-cols-2 gap-8">
                        {item.subMenu.menus.map((item, idx) => (
                          <div
                            key={idx + 1}
                            className="p-6 group/card  bg-white border transition-all duration-300 hover:bg-primary  flex flex-col gap-4 border-neutral-200 rounded-3xl"
                          >
                            <div className="h-81 rounded-xl overflow-hidden">
                              <Image
                                src={item.img}
                                alt="Ceo-1"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                unoptimized={true}
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h1 className="text-neutral-800 font-satoshi group-hover/card:text-white font-bold text-base md:text-lg lg:text-2xl/[130%] tracking-[-2%]">
                                {item.text}
                              </h1>
                              <p className="text-neutral-600 text-base/[150%] font-satoshi group-hover/card:text-white">
                                {item.subText}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="xl:hidden">
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    index === showProjects ? "max-h-[3000px] mt-8" : "max-h-0"
                  }`}
                >
                  {item.subMenu && (
                    <div className="flex flex-col gap-4">
                      <h1 className="text-3xl/[130%] max-lg:text-center text-neutral-800 font-bold font-satoshi tracking-[-2%]">
                        {item.subMenu.title}
                      </h1>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {item.subMenu.menus.map((item, idx) => (
                          <div
                            key={idx + 1}
                            className="p-6 bg-white border transition-all duration-300 hover:bg-primary flex flex-col gap-4 border-neutral-200 rounded-3xl"
                          >
                            <div className="h-81 rounded-xl overflow-hidden">
                              <Image
                                src={item.img}
                                alt="Ceo-1"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                unoptimized={true}
                              />
                            </div>

                            <div className="flex flex-col gap-2">
                              <h1 className="text-neutral-800 font-satoshi font-bold text-base md:text-lg lg:text-2xl/[130%] tracking-[-2%]">
                                {item.text}
                              </h1>

                              <p className="text-neutral-600 text-base/[150%] font-satoshi">
                                {item.subText}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
