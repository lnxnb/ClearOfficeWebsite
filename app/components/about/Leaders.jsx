"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Leaders = () => {
  const leaders = [
    {
      img: "/images/matt.png",
      text: "Matthew Borden",
      subtext: "President",
      phone: "(571) 274-5031",
      email: "info@clearoffice.org",
      details:
        "Matthew brings over years of experience in enterprise technology leadership, specializing in automation, analytics, and digital transformation. His strategic vision continues to guide the company’s innovation roadmap.",
    },
    {
      img: "/images/tom.jpg",
      text: "Jonathan Conrad",
      subtext: "CEO",
      phone: "(571) 274-5031",
      email: "info@clearoffice.org",
      details:
        "Jonathan is a seasoned executive with deep experience in scaling technology businesses, building cross-functional teams, and delivering data-driven solutions for global enterprises.",
    },
  ];

  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="py-12 md:py-16 lg:py-20 xl:py-32.5 px-4 xl:-mt-50">
      <div className="max-w-[1536px] mx-auto flex flex-col gap-8">
        {/* HEADER */}
        <div className="flex max-lg:flex-col gap-4 items-center ">
          <div className="flex flex-col gap-2 lg:w-1/2 max-lg:items-center">
            <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">
                Leadership
              </h1>
            </div>
            <h1 className="font-satoshi font-bold text-4xl max-lg:text-center md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] text-neutral-800">
              The Minds Behind the <br />
              <span className="text-primary">Innovation</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:text-center">
            <p className="text-neutral-600 max-md:text-center md:text-lg/[150%] font-satoshi">
              Our leadership team brings years of experience in automation,
              analytics, AI, and enterprise technology. Their strategic
              direction ensures we deliver high-impact solutions tailored to
              each client’s goals.
            </p>
            <a
              href="/contact-us.html"
              className="bg-primary md:max-lg:self-center md:w-fit text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Build With Us
            </a>
          </div>
        </div>

        {/* LEADER CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer p-6 bg-neutral-50 border transition-all duration-300 hover:bg-card-hover group flex flex-col gap-4 border-neutral-200 rounded-3xl"
            >
              <div className="lg:h-125 rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.text}
                  width={0}
                  height={0}
                  className={`w-full h-full object-cover ${
                    item.subtext === "CEO"
                      ? "object-[center_16%]"
                      : "object-[center_20%]"
                  }`}
                  unoptimized={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-neutral-800 font-satoshi group-hover:text-primary font-bold text-2xl/[130%] tracking-[-2%]">
                  {item.text}
                </h1>
                <p className="text-primary text-base/[150%] font-satoshi group-hover:text-neutral-600">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* CONTENT */}
            <motion.div
              className="fixed inset-0 flex justify-center items-center px-4 z-[9999] h-fit max-w-4xl m-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="bg-white w-full rounded-xl shadow-xl p-6 md:p-10 relative flex flex-col md:flex-row gap-8">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-neutral-500 hover:text-red-500 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="shrink-0 w-full md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                    <Image
                      src={selected.img}
                      alt={selected.text}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                      unoptimized={true}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:w-2/3">
                  <h1 className="font-satoshi font-bold text-3xl text-neutral-900">
                    {selected.text}
                  </h1>
                  <h2 className="text-lg font-satoshi text-primary">
                    {selected.subtext}
                  </h2>

                  <p className="text-neutral-700 leading-relaxed font-satoshi max-h-[40dvh] overflow-auto">
                    {selected.details}
                  </p>

                  <div className="mt-4 space-y-2">
                    <a
                      href={`tel:${selected.phone}`}
                      className="underline text-neutral-800 hover:text-primary flex items-center gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone-icon lucide-phone"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                      {selected.phone}
                    </a>
                    <a
                      href={`mailto:${selected.email}`}
                      className="underline text-neutral-800 hover:text-primary flex items-center gap-3"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail-icon lucide-mail"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                          <rect x={2} y={4} width={20} height={16} rx={2} />
                        </svg>
                      </span>
                      {selected.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Leaders;
