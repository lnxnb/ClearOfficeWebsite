"use client";

import { usePathname } from "next/navigation";
import React from "react";

const footerLinks = [
  {
    title: "Firm",
    id: "firm",
    subLinks: [
      { label: "Our Story", link: "/company", match: "/company" },
      { label: "Our Team", link: "/our-team", match: "/our-team" },
    ],
  },
  {
    title: "Services",
    id: "services",
    subLinks: [
      {
        label: "Robotic Process Automation",
        link: "/services/robotic-process-automation",
        match: "/services/robotic-process-automation",
      },
      {
        label: "Analytical Services",
        link: "/services/analytical-services",
        match: "/services/analytical-services",
      },
      {
        label: "AI Solutions",
        link: "/services/ai-solutions",
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
        link: "/industries-served?highlight=law-firms",
        match: "/industries-served",
      },
      {
        label: "Intellectual Property Firms",
        link: "/industries-served?highlight=intellectual-property",
        match: "/industries-served",
      },
      {
        label: "Wealth Management",
        link: "/industries-served?highlight=wealth-management",
        match: "/industries-served",
      },
      {
        label: "Small & Medium-Sized Businesses",
        link: "/industries-served?highlight=smb",
        match: "/industries-served",
      },
      {
        label: "Government",
        link: "/industries-served?highlight=government",
        match: "/industries-served",
      },
    ],
  },
  {
    title: "Useful Links",
    id: "useful-links",
    subLinks: [
      { label: "Home", link: "/", match: "/" },
      { label: "Services", link: "/services", match: "/services" },
      {
        label: "Industries Served",
        link: "/industries-served",
        match: "/industries-served",
      },
      { label: "Contact Us", link: "/contact-us", match: "/contact-us" },
      { label: "Privacy Policy", link: "/privacy", match: "/privacy" },
    ],
  },
];

// Normalizes app routes so highlighting works for URLs with trailing slashes, .html, or query params.
const normalizePath = (value) => {
  if (!value) return "/";

  let path = value.trim();
  if (!path) return "/";

  const [pathname] = path.split(/[?#]/);
  let normalized = pathname.replace(/\.html$/i, "");
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || "/";
};

const matchesPath = (candidate, current) => {
  const target = normalizePath(candidate);
  const active = normalizePath(current);

  if (target === "/") {
    return active === "/";
  }

  return active === target || active.startsWith(`${target}/`);
};

const Footer = () => {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <footer className="relative overflow-hidden bg-[#001943] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(0,113,227,0.45)_0%,rgba(0,24,70,0)_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,18,56,0.2)_0%,rgba(0,18,56,0.85)_100%)]" />
      </div>

      <div className="relative px-3 pt-2 pb-6 sm:px-4">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-6">
          <nav className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
            <div className="grid gap-4 sm:grid-cols-[repeat(4,minmax(0,1fr))]">
              {footerLinks.map((section) => {
                const isParentActive = section.subLinks.some((item) =>
                  matchesPath(item.match ?? item.link, currentPath)
                );

                return (
                  <div
                    key={section.id}
                    className="flex flex-col gap-2 rounded-2xl border border-white/0 bg-white/0 p-3 transition duration-200 hover:border-white/15 hover:bg-white/[0.07]"
                  >
                    <span
                      className={`font-satoshi text-[11px] uppercase tracking-[0.32em] text-white/55 ${
                        isParentActive ? "text-white" : ""
                      }`}
                    >
                      {section.title}
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {section.subLinks.map((item) => {
                        const isActive = matchesPath(item.match ?? item.link, currentPath);
                        return (
                          <li key={item.link}>
                            <a
                              href={item.link}
                              className={`group inline-flex items-center text-[13px] font-medium transition duration-150 ${
                                isActive ? "text-white" : "text-white/70 hover:text-white"
                              }`}
                            >
                              <span className="relative inline-block">
                                {item.label}
                                <span className="pointer-events-none absolute left-0 top-full block h-px w-full translate-y-[2px] bg-current opacity-0 transition duration-150 group-hover:translate-y-[6px] group-hover:opacity-60" />
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-[10px] text-white/55">
              © Copyright Protected 2025 ClearOffice. All rights reserved.
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
