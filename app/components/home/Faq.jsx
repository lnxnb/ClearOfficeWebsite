"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services does ClearOffice provide?",
    answer:
      "ClearOffice offers solutions in Automation, Analytics, Artificial Intelligence, Business Intelligence, and Robotic Process Automation.",
  },
  {
    question: "How can automation help my business?",
    answer:
      "Automation helps streamline workflows, reduce human error, and improve efficiency across various business operations.",
  },
  {
    question: "What kind of analytics do you offer?",
    answer:
      "We offer predictive, descriptive, and diagnostic analytics with customized dashboards.",
  },
  {
    question: "How do you use Artificial Intelligence?",
    answer:
      "We use AI to automate tasks, improve decision-making, and deliver actionable business insights.",
  },
  {
    question: "What is Robotic Process Automation (RPA) at ClearOffice?",
    answer:
      "RPA allows businesses to automate repetitive and rule-based tasks using software robots.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <div className="bg-neutral-50 py-12 md:py-16 lg:py-20 lg:py-24 lg:pb-32.5 px-4">
      <div className="max-w-[1536px] mx-auto grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col lg:gap-24 gap-8 md:gap-16">
          <div className="flex flex-col gap-2 max-lg:justify-center max-lg:items-center">
            <div className="flex items-center max-lg:justify-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
              <div className="size-2 bg-primary rounded-full"></div>
              <h1 className="text-sm/[150%] text-primary font-satoshi">FAQ</h1>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] font-satoshi font-bold text-neutral-800 max-lg:text-center">
              Answers to Common <br className="max-lg:hidden" />{" "}
              <span className="text-primary">Questions</span>
            </h1>
            <p className="font-satoshi text-base/[150%] text-neutral-600 max-lg:text-center">
              Find answers to the most common questions about our services in
              automation, AI, analytics, business intelligence, and robotic
              process automation. Learn how ClearOffice can help your enterprise
              streamline operations, make data-driven decisions, and achieve
              measurable business impact.
            </p>
          </div>
          <div className="flex flex-col gap-6 bg-white border border-neutral-200 rounded-2xl p-6 md:w-fit">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl/[130%] tracking-[-2%] font-satoshi font-bold text-neutral-800 max-md:text-center">
                Still Have Questions?
              </h1>
              <p className="font-satoshi text-base/[150%] text-neutral-600 max-md:text-center">
                Our team is ready to assist you with anything you need.
              </p>
            </div>
            <a
              href="/contact-us.html"
              className="bg-primary md:w-fit max-md:text-center text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8.75">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 pt-0.75 py-8.75 "
            >
              <button
                className="flex w-full justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h1
                  className={`${
                    openIndex === index ? "text-primary" : " text-neutral-800"
                  } lg:text-xl/[130%] text-base md:text-lg tracking-[-2%] font-satoshi font-bold text-left`}
                >
                  {item.question}
                </h1>
                <div>
                  {openIndex === index ? (
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.3333 17.3337H6.66659C6.31296 17.3337 5.97382 17.1932 5.72378 16.9431C5.47373 16.6931 5.33325 16.3539 5.33325 16.0003C5.33325 15.6467 5.47373 15.3076 5.72378 15.0575C5.97382 14.8075 6.31296 14.667 6.66659 14.667H25.3333C25.6869 14.667 26.026 14.8075 26.2761 15.0575C26.5261 15.3076 26.6666 15.6467 26.6666 16.0003C26.6666 16.3539 26.5261 16.6931 26.2761 16.9431C26.026 17.1932 25.6869 17.3337 25.3333 17.3337Z"
                        fill="#0071E3"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.3333 14.6663H17.3333V6.66634C17.3333 6.31272 17.1928 5.97358 16.9427 5.72353C16.6927 5.47348 16.3535 5.33301 15.9999 5.33301C15.6463 5.33301 15.3072 5.47348 15.0571 5.72353C14.8071 5.97358 14.6666 6.31272 14.6666 6.66634V14.6663H6.66659C6.31296 14.6663 5.97382 14.8068 5.72378 15.0569C5.47373 15.3069 5.33325 15.6461 5.33325 15.9997C5.33325 16.3533 5.47373 16.6924 5.72378 16.9425C5.97382 17.1925 6.31296 17.333 6.66659 17.333H14.6666V25.333C14.6666 25.6866 14.8071 26.0258 15.0571 26.2758C15.3072 26.5259 15.6463 26.6663 15.9999 26.6663C16.3535 26.6663 16.6927 26.5259 16.9427 26.2758C17.1928 26.0258 17.3333 25.6866 17.3333 25.333V17.333H25.3333C25.6869 17.333 26.026 17.1925 26.2761 16.9425C26.5261 16.6924 26.6666 16.3533 26.6666 15.9997C26.6666 15.6461 26.5261 15.3069 26.2761 15.0569C26.026 14.8068 25.6869 14.6663 25.3333 14.6663Z"
                        fill="#0071E3"
                      />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-full mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base/[150%] bg-primary/4 text-neutral-600 p-4 border border-primary rounded-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
