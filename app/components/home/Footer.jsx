"use client";

import { fb, github, insta, twitter } from "@/public/icons";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const normalizePath = (value) => {
    if (!value) return "";
    const [pathPart] = value.split("?");
    if (!pathPart || pathPart === "/") return "/";
    return pathPart.replace(/\/+$/, "").replace(/\.html$/, "");
  };

  const matchesPath = (target, current) => {
    if (!target) return false;
    const normalizedTarget = normalizePath(target);
    if (normalizedTarget === "/" || normalizedTarget === "/index") {
      return current === "/" || current === "/index";
    }
    return current === normalizedTarget;
  };
  const footerLinks = [
    {
      title: "Firm",
      id: "firm",
      subLinks: [
        { label: "Our Story", link: "/company.html", match: "/company" },
        { label: "Our Team", link: "/our-team.html", match: "/our-team" },
      ],
    },
    {
      title: "Services",
      id: "services",
      subLinks: [
        {
          label: "Robotic Process Automation",
          link: "/services/robotic-process-automation.html",
          match: "/services/robotic-process-automation",
        },
        {
          label: "Analytical Services",
          link: "/services/analytical-services.html",
          match: "/services/analytical-services",
        },
        {
          label: "AI Solutions",
          link: "/services/ai-solutions.html",
          match: "/services/ai-solutions",
        },
      ],
    },
    {
      title: "Industries",
      id: "industries",
      subLinks: [
        {
          label: "Law Firms",
          link: "/industries-served.html?highlight=law-firms",
          match: "/industries-served",
        },
        {
          label: "Intellectual Property Firms",
          link: "/industries-served.html?highlight=intellectual-property",
          match: "/industries-served",
        },
        {
          label: "Wealth Management",
          link: "/industries-served.html?highlight=wealth-management",
          match: "/industries-served",
        },
        {
          label: "Small & Medium-Sized Businesses",
          link: "/industries-served.html?highlight=smb",
          match: "/industries-served",
        },
        {
          label: "Government",
          link: "/industries-served.html?highlight=government",
          match: "/industries-served",
        },
      ],
    },
    {
      title: "Useful Links",
      id: "useful-links",
      subLinks: [
        { label: "Home", link: "/index.html", match: "/" },
        { label: "Services", link: "/services.html", match: "/services" },
        {
          label: "Industries Served",
          link: "/industries-served.html",
          match: "/industries-served",
        },
        { label: "Contact Us", link: "/contact-us.html", match: "/contact-us" },
        { label: "Privacy Policy", link: "/privacy.html", match: "/privacy" },
      ],
    },
  ];

  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  return (
    <div className="bg-primary">
      <div className=" py-12 md:py-16 lg:py-20.25 px-4">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-12">
          <div className="flex max-xl:flex-col max-xl:gap-10">
            <h1 className="text-4xl/[130%] tracking-[-2%] font-satoshi  font-bold text-white">
              ClearOffice
            </h1>
            <div className="w-full mx-auto flex max-md:flex-col xl:justify-center lg:gap-16 gap-8 md:gap-12">
              {footerLinks.map((section) => {
                const isParentActive = section.subLinks.some((item) =>
                  matchesPath(item.match || item.link, currentPath)
                );

                return (
                  <div key={section.id} className="flex flex-col gap-4">
                    <h4
                      className={`font-bold text-white text-lg ${
                        isParentActive ? "font-bold" : ""
                      }`}
                    >
                      {section.title}
                    </h4>

                    <ul className="flex flex-col gap-4">
                      {section.subLinks.map((item) => {
                        const isActive = matchesPath(
                          item.match || item.link,
                          currentPath
                        );
                        return (
                          <li key={item.link}>
                            <a
                              href={item.link}
                              className={`${
                                isActive
                                  ? "font-bold text-white"
                                  : "text-gray-200"
                              } hover:text-white group`}
                            >
                              <div className="relative overflow-hidden ">
                                <span className="block transition-all duration-300 ease-out text-white group-hover:text-white/70 group-hover:-translate-y-[120%] text-lg/[130%] tracking-[-2%] font-satoshi">
                                  {item.label}
                                </span>
                                <span className="absolute left-0 top-[120%] block transition-all duration-300 ease-out text-white group-hover:text-white/70 group-hover:top-0 text-lg/[130%] tracking-[-2%] font-satoshi">
                                  {item.label}
                                </span>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            {/* <div className="flex items-center gap-3 max-lg:mt-7">
              <Link
                href={"/#"}
                className="group  rounded-full  cursor-pointer hover:bg-white  transition-all duration-300"
              >
                <span className=" text-white group-hover:text-primary">
                  {twitter}
                </span>
              </Link>

              <Link
                href={"/#"}
                className="size-7 group flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white transition-all duration-300"
              >
                <span className="flex items-center justify-center text-white group-hover:text-primary">
                  {fb}
                </span>
              </Link>

              <Link
                href={"/#"}
                className="size-7 group flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white transition-all duration-300"
              >
                <span className="flex items-center justify-center text-white group-hover:text-primary">
                  {insta}
                </span>
              </Link>

              <Link
                href={"/#"}
                className="size-7 group flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white transition-all duration-300"
              >
                <span className="flex items-center justify-center text-white group-hover:text-primary">
                  {github}
                </span>
              </Link>
            </div> */}
          </div>
          <div className="border border-white"></div>
          <div className="flex items-center  gap-2 md:justify-between">
            <p className="text-white text-sm w-full text-center sm:text-base/[150%] max-sm:whitespace-nowrap font-satoshi">
              @ Copyright Protected 2025 Clear Office
            </p>
            {/* <div className="flex items-center md:gap-8">
              <Link
                href={"/privacy"}
                className="font-satoshi text-white text-sm sm:text-base/[150%] max-sm:whitespace-nowrap hover:text-white/70 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/#"}
                className="max-md:hidden cursor-not-allowed font-satoshi text-white text-sm sm:text-base/[150%] max-sm:whitespace-nowrap hover:text-white/70 transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
