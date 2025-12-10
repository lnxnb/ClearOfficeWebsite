"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenuPortal from "./MobileMenuPortal";

export default function NavBar() {
  const normalizePath = (value) => {
    if (!value || value === "/") return "/";
    return value.replace(/\/+$/, "").replace(/\.html$/, "");
  };
  const matchesPath = (target, current) => {
    if (!target) return false;
    const normalizedTarget = normalizePath(target);
    if (normalizedTarget === "/" || normalizedTarget === "/index") {
      return current === "/" || current === "/index";
    }
    return current === normalizedTarget;
  };
  const menuLinks = [
    {
      id: 1,
      title: "Home",
      link: "/index.html",
      match: "/",
    },
    {
      id: 2,
      title: "Company",
      link: "/company.html",
      subLinks: [
        { name: "Our Story", link: "/company.html", match: "/company" },
        {
          name: "Our team",
          link: "/our-team.html",
          match: "/our-team",
        },
        // {
        //   name: "Our Careers",
        //   link: "/our-careers.html",
        // },
      ],
    },
    {
      id: 3,
      title: "Services",
      link: "/services.html",
      subLinks: [
        {
          name: "Robotic Process Automation",
          link: "/services/robotic-process-automation.html",
          match: "/services/robotic-process-automation",
        },
        {
          name: "Analytical Services",
          link: "/services/analytical-services.html",
          match: "/services/analytical-services",
        },
        {
          name: "AI Solutions",
          link: "/services/ai-solutions.html",
          match: "/services/ai-solutions",
        },
      ],
    },
    {
      id: 4,
      title: "Industries Served",
      link: "/industries-served.html",
      match: "/industries-served",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact-us.html",
      match: "/contact-us",
    },
  ];
  const pathName = usePathname();
  const currentPath = normalizePath(pathName);
  const isParentActive = (item) => {
    if (!item.subLinks) return false;
    return item.subLinks.some((sub) =>
      matchesPath(sub.match || sub.link, currentPath)
    );
  };

  return (
    <div className="w-full font-satoshi bg-white px-8 py-2 sticky">
      <div className="w-full max-w-[1536px] mx-auto flex justify-between max-xl:items-center py-2 ">
        {/* <div>
          <h1 className="font-bold text-4xl/[130%] text-primary tracking-[-2%]">
            ClearOffice
          </h1>
        </div> */}
        <a href="/index.html">
          <Image
            width={0}
            height={0}
            alt="main_logo"
            unoptimized={true}
            src={"/images/main_logo.png"}
            className="w-max h-max"
          />
        </a>

        <div className="flex items-center  max-xl:hidden relative">
          {menuLinks.map((item) => (
            <div key={item.id} className="flex items-center group relative">
              <a href={item.link || "#"} className="relative group">
                <div className="flex gap-1.5 relative">
                  <div
                    className="relative overflow-hidden px-8"
                    style={{ height: "20px" }}
                  >
                    <span
                      className={`
      block transition-all duration-300 ease-out
      ${
        matchesPath(item.match || item.link, currentPath) ||
        isParentActive(item)
          ? "text-primary font-bold"
          : "text-neutral-900 group-hover:text-primary/80"
      }
      group-hover:-translate-y-[120%]
      text-base/[130%] tracking-[-2%] font-satoshi
    `}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`
      absolute left-0 top-[120%] block transition-all duration-300 ease-out px-8
      ${
        matchesPath(item.match || item.link, currentPath) ||
        isParentActive(item)
          ? "text-primary font-bold"
          : "text-neutral-900 group-hover:text-primary/80"
      }
      group-hover:top-0
      text-base/[130%] tracking-[-2%] font-satoshi
    `}
                    >
                      {item.title}
                    </span>
                  </div>

                  {(matchesPath(item.match || item.link, currentPath) ||
                    isParentActive(item)) && (
                    <span className="absolute left-0 -bottom-7.5 w-full h-1.5 bg-primary rounded-tr-full rounded-tl-full transition-all duration-300" />
                  )}
                </div>
              </a>
              {item?.subLinks?.length > 0 && (
                <>
                  <span className="size-5 text-black -ml-4 group-hover:text-primary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 group-hover:rotate-0 transition-transform duration-300 ease-in-out"
                    >
                      <path
                        d="M15 12.5L10 7.5L5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.04167"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="z-[9999999999] overflow-hidden shadow-lg bg-white/90 border border-neutral-200 absolute top-full mt-5 rounded-md left-0 min-w-[200px] backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <ul className="  overflow-hidden divide-y divide-neutral-200">
                      {item?.subLinks?.map(({ name, link }, childId) => (
                        <li key={childId}>
                          <a
                            href={link}
                            className={`block whitespace-nowrap text-base font-general py-3 px-6  hover:bg-neutral-100
            ${
              matchesPath(link, currentPath)
                ? "text-primary"
                : "text-neutral-700"
            } transition-all duration-150`}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="max-xl:hidden">
          <a
            href="/contact-us.html"
            className="bg-primary inline-block backdrop-blur-xs text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-4 py-3 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
          >
            Get In Touch
          </a>
        </div>
        <HamburgerMenu
          pathName={pathName}
          normalizePath={normalizePath}
          matchesPath={matchesPath}
          menuLinks={menuLinks}
          // scrolled={scrolled}
        />
      </div>
    </div>
  );
}
const HamburgerMenu = ({ pathName, menuLinks, normalizePath, matchesPath }) => {
  const [isActive, setIsActive] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const currentPath = normalizePath(pathName);

  const toggleSubMenu = (id) => {
    setOpenSubMenu((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Your hamburger icon */}
      <span className="xl:hidden size-8">
        <svg
          className={`menu__icon ${isActive ? "active" : ""}`}
          viewBox="0 0 32 32"
          fill="none"
          onClick={() => {
            setIsActive(!isActive);
            document.body.style.overflow = isActive ? "auto" : "hidden";
          }}
        >
          <path
            className="line top"
            d="M5.3335 10.6666H26.6668"
            stroke="currentColor"
          />
          <path
            className="line bottom"
            d="M5.3335 21.3334H26.6668"
            stroke="currentColor"
          />
        </svg>
      </span>

      {/* MOBILE MENU RENDERED OUTSIDE DOM USING PORTAL */}
      <MobileMenuPortal>
        <div
          className={`z-[99999999] fixed inset-0 flex flex-col justify-between bg-white overflow-y-auto w-full xl:hidden font-lora transition-all duration-300 ease-in-out top-20 ${
            isActive ? "min-h-[calc(100vh - 51.69px)]" : "h-0 delay-150"
          }`}
        >
          {/* your full menu untouched */}
          <ul
            className={`text-center divide-y transition-opacity duration-300 ease-in divide-neutral-200 ${
              isActive
                ? "opacity-100 pointer-events-auto delay-150"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {menuLinks.map(({ id, title, link, subLinks = [] }) => (
              <li key={id} className="w-full relative bg-white">
                <div className="flex gap-2 justify-center items-center px-4 relative">
                  <a
                    href={link}
                    className={`text-base/[150%] font-lora w-full py-4 text-neutral-800 ${
                      matchesPath(link, currentPath)
                        ? "font-semibold text-secondary"
                        : "opacity-80"
                    }`}
                    onClick={() => {
                      setIsActive(!isActive);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    {title}
                  </a>
                  {subLinks && (
                    <span
                      className={`cursor-pointer size-5 absolute right-6 ${
                        subLinks.length > 0 ? "visible" : "invisible"
                      }`}
                      onClick={() => toggleSubMenu(id)}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`transition-transform duration-300 text-neutral-800 ease-in-out ${
                          openSubMenu === id ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <path
                          d="M15 12.5L10 7.5L5 12.5"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                {subLinks.length > 0 && openSubMenu === id && (
                  <ul
                    className={`text-center transition-all duration-300 ease-in-out ${
                      isActive
                        ? "opacity-100 pointer-events-auto delay-150"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {subLinks.map(({ name, link }, childId) => (
                      <li
                        key={childId}
                        className="bg-neutral-100 border-neutral-200 border-b last:border-b-0"
                      >
                        <a
                          href={link}
                          onClick={() => setIsActive(false)}
                          className={`block w-full text-base/[150%] py-3 px-4 ${
                            matchesPath(link, currentPath)
                              ? "font-semibold text-secondary"
                              : "opacity-80"
                          } text-neutral-800`}
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* bottom section remains same */}
          <div className="flex flex-col gap-10">
            <div className="px-8">
              <a
                href="/contact-us.html"
                className={`w-full border text-base/[130%] font-lora text-white bg-primary py-4 px-6 flex items-center justify-center gap-2 ${
                  isActive
                    ? "opacity-100 pointer-events-auto delay-150"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                Get In Touch
                <span>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </MobileMenuPortal>
    </>
  );
};
